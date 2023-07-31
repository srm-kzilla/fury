package controllers

import (
	"context"
	"os"

	"github.com/charmbracelet/log"
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/models"
	"github.com/srm-kzilla/Recruitments/database"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func GetAllApplications(c *fiber.Ctx) error {
	var applications []bson.M
	applicationsCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "applications")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting applications collection",
		})
	}

	cursor, err := applicationsCollection.Aggregate(context.Background(), mongo.Pipeline{})
	if err = cursor.All(context.Background(), &applications); err != nil {
		log.Error("Error ", err)
		c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"error":        err.Error(),
			"applications": applications,
		})
	}
	c.Status(fiber.StatusOK).JSON(applications)

	return nil
}

func GetApplications(c *fiber.Ctx) error {
	domain := c.Params("domain")
	if domain == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Domain is required",
		})
	}
	applicationsCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "applications")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting applications collection",
		})
	}

	var applications models.Application
	err := applicationsCollection.FindOne(context.Background(), bson.M{"domain": domain}).Decode(&applications)
	if err != nil {
		log.Error("Error", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   err.Error(),
			"message": "Domain not found",
		})
	}
	return c.Status(fiber.StatusOK).JSON(applications)
}

func UpdateApplications(c *fiber.Ctx) error {
	var application models.UpdateApplication
	var check models.Application
	c.BodyParser(&application)

	var validate *validator.Validate

	validate = validator.New()
	validationErr := validate.Struct(application)

	if validationErr != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"validation": validationErr.Error(),
		})
	}

	applicationsCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting applications collection",
		})
	}

	err := applicationsCollection.FindOne(context.Background(), bson.M{"regNo": application.RegNo}).Decode(&check)
	if err != nil {
		log.Error("Error ", err)
		c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"error": "no RegNo record exists",
		})
		return nil
	}

	arrayFilters := options.ArrayFilters{
		Filters: []interface{}{bson.M{"elem.domain": application.Domain}},
	}

	check.Status = application.Status
	_, errr := applicationsCollection.UpdateOne(context.Background(), bson.M{"regNo": application.RegNo}, bson.M{
		"$set": bson.M{
			"application.$[elem].status": application.Status,
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
	c.Status(fiber.StatusOK).JSON(application)
	return nil
}
