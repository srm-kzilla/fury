package adminController

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	applicationsModel "github.com/srm-kzilla/Recruitments/api/applications/model"
	"github.com/srm-kzilla/Recruitments/database"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func GetAllApplications(c *fiber.Ctx) error {
	var applications []bson.M
	applicationsCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "applications")
	if e != nil {
		fmt.Println("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting applications collection",
		})
	}

	cursor, err := applicationsCollection.Aggregate(context.Background(), mongo.Pipeline{})
	if err = cursor.All(context.Background(), &applications); err != nil {
		log.Println("Error ", err)
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
	fmt.Println(domain)
	if domain == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Domain is required",
		})
	}
	applicationsCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "applications")
	if e != nil {
		fmt.Println("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting applications collection",
		})
	}

	var applications applicationsModel.Application
	err := applicationsCollection.FindOne(context.Background(), bson.M{"domain": domain}).Decode(&applications)
	if err != nil {
		log.Println("Error", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   err.Error(),
			"message": "Domain not found",
		})
	}
	return c.Status(fiber.StatusOK).JSON(applications)
}

func UpdateApplications(c *fiber.Ctx) error {
	var application applicationsModel.UpdateApplication
	var check applicationsModel.Application
	c.BodyParser(&application)

	fmt.Println(application.RegNo)

	applicationsCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "applications")
	if e != nil {
		fmt.Println("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting applications collection",
		})
	}

	err := applicationsCollection.FindOne(context.Background(), bson.M{"regNo": application.RegNo}).Decode(&check)
	if err != nil {
		log.Println("Error ", err)
		c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"error": "no RegNo record exists",
		})
		return nil
	}

	check.Status = application.Status
	errr := applicationsCollection.FindOneAndReplace(context.Background(), bson.M{"regNo": application.RegNo}, check).Decode(&check)
	if errr != nil {
		fmt.Println("Error: ", errr)
		c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"error": errr.Error(),
		})
		return nil
	}
	c.Status(fiber.StatusOK).JSON(application)
	return nil
}
