package controllers

import (
	"context"
	"os"
	"time"

    "golang.org/x/crypto/bcrypt"
	"github.com/charmbracelet/log"
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/models"
	"github.com/srm-kzilla/Recruitments/api/utils/database"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"github.com/golang-jwt/jwt/v4"
)

func GetAllApplications(c *fiber.Ctx) error {
	var applications []bson.M
	usersCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting users collection",
		})
	}

	cursor, _ := usersCollection.Aggregate(context.Background(), mongo.Pipeline{})
	if err := cursor.All(context.Background(), &applications); err != nil {
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
	usersCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting users collection",
		})
	}

	var applications models.Application
	err := usersCollection.FindOne(context.Background(), bson.M{"domain": domain}).Decode(&applications)
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

	usersCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting users collection",
		})
	}

	err := usersCollection.FindOne(context.Background(), bson.M{"regNo": application.RegNo}).Decode(&check)
	if err != nil {
		log.Error("Error ", err)
		c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"error": "no RegNo record exists",
		})
		return nil
	}

	check.Status = application.Status
	errr := usersCollection.FindOneAndReplace(context.Background(), bson.M{"regNo": application.RegNo}, check).Decode(&check)
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

func AdminSignup(c *fiber.Ctx) error {
	var evaluator models.Evaluators
	var check models.Evaluators
	c.BodyParser(&evaluator)

	evaluatorsCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "evaluators")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting evaluators collection",
		})
	}

	err := evaluatorsCollection.FindOne(context.Background(), bson.M{"email": evaluator.Email}).Decode(&check)
	if err != nil {
		if err != mongo.ErrNoDocuments {
			log.Error("Error ", err)
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error":   e,
				"message": "Error getting data",
			})
		}
	}

	if check.Email == evaluator.Email {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Email already exists",
		})
	}

	passwordByte := []byte(evaluator.Password)
	hashedPassword, err := bcrypt.GenerateFromPassword(passwordByte, bcrypt.DefaultCost)
    if err != nil {
        panic(err)
    }

	evaluator.Password = string(hashedPassword)
	evaluator.CreatedAt = time.Now()
	evaluator.IsActive = true

	_, error := evaluatorsCollection.InsertOne(context.Background(), evaluator)
	if error != nil {
		log.Error("Error: ", error)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   error.Error(),
			"message": "Error inserting data",
		})
	}

	c.Status(fiber.StatusOK).JSON(fiber.Map{
		"success": true,
		"message": "User created successfully",
	})
	return nil
}

func AdminLogin(c *fiber.Ctx) error {
	var evaluator models.Evaluators
	var evaluatorRequest models.Evaluators
	c.BodyParser(&evaluatorRequest)

	evaluatorsCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "evaluators")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting evaluators collection",
		})
	}

	err := evaluatorsCollection.FindOne(context.Background(), bson.M{"email": evaluatorRequest.Email}).Decode(&evaluator)
	if err != nil {
		log.Error("Error ", err)
		if err == mongo.ErrNoDocuments {
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
				"error":   e,
				"message": "Error getting data",
			})
		}
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err,
		})
	}

	if evaluator.IsActive == false {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Inactive User",
		})
	}

	hashedPassword := []byte(evaluator.Password)
	loginPassword := []byte(evaluatorRequest.Password)

    err = bcrypt.CompareHashAndPassword(hashedPassword, loginPassword)

	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Invalid Password",
		})
	}
	claims := jwt.MapClaims{
		"email": evaluator.Email,
		"exp":      time.Now().Add(time.Hour * 24 * 30).Unix(), // Token will expire in 24 hours
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, errortoken := token.SignedString([]byte(os.Getenv("JWT_SECRET")))

	if errortoken != nil {
		log.Error(errortoken)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Error generating JWT token",
		})
	}

	c.Status(fiber.StatusOK).JSON(fiber.Map{
		"success": true,
		"message": "Login successful",
		"jwt": tokenString,
	})
	return nil
}