package controllers

import (
	"context"
	"os"

	"github.com/charmbracelet/log"
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/models"
	"github.com/srm-kzilla/Recruitments/database"
	"go.mongodb.org/mongo-driver/bson"
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
