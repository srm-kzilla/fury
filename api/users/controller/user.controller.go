package userController

import (
	"context"
	"github.com/charmbracelet/log"
	"os"
	"github.com/gofiber/fiber/v2"
	usersModel "github.com/srm-kzilla/Recruitments/api/users/model"
	"github.com/srm-kzilla/Recruitments/database"
	"go.mongodb.org/mongo-driver/bson"
)

func GetUser(c *fiber.Ctx) error {
	regNo := c.Params("regNo")
	if regNo == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "RegNo is required",
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

	var user usersModel.User
	err := applicationsCollection.FindOne(context.Background(), bson.M{"regNo": regNo}).Decode(&user)
	if err != nil {
		log.Println("Error", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   err.Error(),
			"message": "Domain not found",
		})
	}
	return c.Status(fiber.StatusOK).JSON(user)
}

func UpdateUser(c *fiber.Ctx) error {
	var user usersModel.User
	var check usersModel.User
	c.BodyParser(&user)

	applicationsCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "applications")
	if e != nil {
		log.Println("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting applications collection",
		})
	}

	err := applicationsCollection.FindOne(context.Background(), bson.M{"regNo": user.RegNo}).Decode(&check)
	if err != nil {
		log.Println("Error ", err)
		c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"error": "no RegNo record exists",
		})
		return nil
	}

	check = user
	errr := applicationsCollection.FindOneAndReplace(context.Background(), bson.M{"regNo": user.RegNo}, check).Decode(&check)
	if errr != nil {
		log.Println("Error: ", errr)
		c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"error": errr.Error(),
		})
		return nil
	}
	c.Status(fiber.StatusOK).JSON(user)
	return nil
}
