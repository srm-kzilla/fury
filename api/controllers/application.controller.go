package controllers

import (
	"context"
	"os"
	"time"

	"github.com/charmbracelet/log"
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/models"
	"github.com/srm-kzilla/Recruitments/api/utils/database"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func CreateApplication(c *fiber.Ctx) error {
	var body models.ApplicationBody
	c.BodyParser(&body)
	application := body

	userId := c.Locals("userId").(primitive.ObjectID)
	if userId == primitive.NilObjectID {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "User ObjectID is missing",
		})
	}

	currTime := time.Now()
	application.UpdatedAt = currTime
	application.CreatedAt = currTime
	application.AppliedAt = currTime
	application.Domain = body.Domain

	application.Status = "draft"

	usersCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting users collection",
		})
	}
	filter := bson.M{
		"_id":                userId,
		"application.domain": body.Domain,
	}
	var result bson.M

	errorfind := usersCollection.FindOne(context.Background(), filter).Decode(&result)
	if errorfind != nil {
		log.Error("Error ", errorfind)
		if errorfind != mongo.ErrNoDocuments {
			c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "record doesn't exists",
			})
			return nil
		}
	}
	if result != nil {
		c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Application already exists",
		})
		return nil
	}
	_, err := usersCollection.UpdateOne(context.TODO(), bson.M{"_id": userId}, bson.M{"$push": bson.M{"application": application}})
	if err != nil {
		log.Error("Error: ", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   err.Error(),
			"message": "Error inserting application",
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Application created successfully",
	})
}

func UpdateDraft(c *fiber.Ctx) error {
	var application models.Application
	var check models.Application
	c.BodyParser(&application)

	userId := c.Locals("userId").(primitive.ObjectID)
	if userId == primitive.NilObjectID {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "User ObjectID is missing",
		})
	}
	usersCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting users collection",
		})
	}

	err := usersCollection.FindOne(context.Background(), bson.M{"_id": userId}).Decode(&check)
	if err != nil {
		log.Error("Error ", err)
		c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"error": "record doesn't exists",
		})
		return nil
	}

	arrayFilters := options.ArrayFilters{
		Filters: []interface{}{bson.M{"elem.domain": application.Domain}},
	}

	check = application
	_, errr := usersCollection.UpdateOne(context.Background(), bson.M{"_id": userId}, bson.M{
		"$set": bson.M{
			"application.$[elem].questions": application.Questions,
			"application.$[elem].updatedAt": time.Now(),
		},
	}, &options.UpdateOptions{
		ArrayFilters: &arrayFilters,
	})
	if errr != nil {
		log.Error("Error: ", errr)
		c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"error": errr.Error(),
		})
		return nil
	}
	c.Status(fiber.StatusOK).JSON(check)
	return nil
}

func DeleteDraftApplication(c *fiber.Ctx) error {
	userId := c.Locals("userId").(primitive.ObjectID)
	if userId == primitive.NilObjectID {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "User ObjectID is missing",
		})
	}
	domain := c.Params("domain")
	if domain == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "domain is required",
		})
	}

	usersCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting users collection",
		})
	}
	update := bson.M{
		"$pull": bson.M{
			"application": bson.M{
				"domain": domain,
				"status": "draft",
			},
		},
	}

	deleted, err := usersCollection.UpdateOne(
		context.Background(),
		bson.M{"_id": userId},
		update,
	)
	if err != nil {
		log.Error("Error: ", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   err.Error(),
			"message": "Error deleting draft application",
		})
	}
	if deleted.ModifiedCount == 0 {
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"message": "No application matching the criteria to delete",
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Draft application deleted successfully",
	})
}

func SubmitApplication(c *fiber.Ctx) error {
	var user models.User
	userId := c.Locals("userId").(primitive.ObjectID)
	if userId == primitive.NilObjectID {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "User ObjectID is missing",
		})
	}
	domain := c.Params("domain")
	if domain == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "domain is required",
		})
	}
	if domain == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "domain is required",
		})
	}
	usersCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting users collection",
		})
	}

	filter := bson.M{
		"_id":                userId,
		"application.domain": domain,
		"application.status": "draft",
	}
	err := usersCollection.FindOne(context.Background(), filter).Decode(&user)
	if err != nil {
		log.Print("1")
		log.Error("Error ", err)
		return c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"error": "Application doesn't exists",
		})
	}
	update := bson.M{
		"$set": bson.M{
			"application.$.status": "pending",
		},
	}
	_, errr := usersCollection.UpdateOne(context.Background(), filter, update)
	if errr != nil {
		log.Error("Error: ", errr)
		return c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"error": errr.Error(),
		})

	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Application submitted successfully",
	})
}
