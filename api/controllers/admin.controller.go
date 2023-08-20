package controllers

import (
	"context"
	"os"
	"time"

	"github.com/charmbracelet/log"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"github.com/srm-kzilla/Recruitments/api/models"
	"github.com/srm-kzilla/Recruitments/api/utils/database"
	"github.com/srm-kzilla/Recruitments/api/utils/validators"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"golang.org/x/crypto/bcrypt"
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
	domain := c.Locals("domain").(string)

	usersCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting users collection",
		})
	}

	cursor, err := usersCollection.Find(context.Background(), bson.M{
		"application.domain": domain,
	})
	if err != nil {
		log.Error("Error", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   err.Error(),
			"message": "Applications not found",
		})
	}
	defer cursor.Close(context.Background())

	var applications []bson.M
	if err := cursor.All(context.Background(), &applications); err != nil {
		log.Fatal(err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   err.Error(),
			"message": "Applications not found",
		})
	}

	return c.Status(fiber.StatusOK).JSON(applications)
}

func UpdateApplications(c *fiber.Ctx) error {
	var application models.UpdateApplication
	var check models.Application
	c.BodyParser(&application)

	domain := c.Locals("domain").(string)
	errors := validators.ValidateUpdateApplicationSchema(application)
	if errors != nil {
		c.Status(fiber.StatusBadRequest).JSON(errors)
		return nil
	}
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

	arrayFilters := options.ArrayFilters{
		Filters: []interface{}{bson.M{"elem.domain": domain}},
	}

	_, errr := usersCollection.UpdateOne(context.Background(), bson.M{"regNo": application.RegNo}, bson.M{
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
	c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Application updated successfully",
	})
	return nil
}

func AdminSignup(c *fiber.Ctx) error {
	var evaluator models.Evaluators
	var check models.Evaluators
	c.BodyParser(&evaluator)

	errors := validators.ValidateAdminEvaluatorSchema(evaluator)
	if errors != nil {
		c.Status(fiber.StatusBadRequest).JSON(errors)
		return nil
	}
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

	errors := validators.ValidateAdminEvaluatorSchema(evaluatorRequest)
	if errors != nil {
		c.Status(fiber.StatusBadRequest).JSON(errors)
		return nil
	}

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

	if !evaluator.IsActive {
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
		"iss": evaluator.Email,
		"sub": evaluator.Domain,
		"exp": time.Now().Add(time.Hour * 24 * 30).Unix(), // Token will expire in 24 hours
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
		"jwt":     tokenString,
	})
	return nil
}
