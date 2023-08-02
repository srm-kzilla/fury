package controllers

import (
	"context"
	"os"

	"github.com/charmbracelet/log"
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/models"
	"github.com/srm-kzilla/Recruitments/api/utils/database"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func CreateApplication(c *fiber.Ctx) error {
	var body models.ApplicationBody
	c.BodyParser(&body)

	if body.RegNo == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "RegNo is required",
		})
	}

	var status string
	if body.Type == "submit" {
		// schema validation
		status = "pending"
	} else {
		status = "draft"
	}

	application := body.Application
	application.Status = status

	usersCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting users collection",
		})
	}
	_, err := usersCollection.UpdateOne(context.TODO(), bson.M{"regNo": body.RegNo}, bson.M{"$push": bson.M{"application": application}})
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

	regNo := c.Params("regNo")
	if regNo == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "RegNo is required",
		})
	}

	log.Info("regNo: ", regNo)
	usersCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting users collection",
		})
	}

	err := usersCollection.FindOne(context.Background(), bson.M{"regNo": regNo}).Decode(&check)
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
	_, errr := usersCollection.UpdateOne(context.Background(), bson.M{"regNo": regNo}, bson.M{
		"$set": bson.M{
			"application.$[elem]": application,
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

func GetQuestions(c *fiber.Ctx) error {
	domain := c.Params("domain")
	if domain == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "domain is required",
		})
	}
	questionsCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "questions")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting questions collection",
		})
	}

	var questions models.Question
	err := questionsCollection.FindOne(context.Background(), bson.M{"domain": domain}).Decode(&questions)
	if err != nil {
		log.Error("Error", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   err.Error(),
			"message": "Domain not found",
		})
	}
	return c.Status(fiber.StatusOK).JSON(questions)
}
