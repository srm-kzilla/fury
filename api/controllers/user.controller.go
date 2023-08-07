package controllers

import (
	"context"
	"os"
	"strings"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/charmbracelet/log"
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/models"
	"github.com/srm-kzilla/Recruitments/api/utils/database"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func GetUser(c *fiber.Ctx) error {
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

	var user models.User
	err := usersCollection.FindOne(context.Background(), bson.M{"_id": userId}).Decode(&user)
	if err != nil {
		log.Error("Error", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   err.Error(),
			"message": "Domain not found",
		})
	}
	return c.Status(fiber.StatusOK).JSON(user)
}

func UpdateUser(c *fiber.Ctx) error {
	var user models.User
	var check models.User
	c.BodyParser(&user)

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

	if !(strings.HasPrefix(user.Socials.Github, "github.com") || strings.HasPrefix(user.Socials.LinkedIn, "linkedin.com")) {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   "Invalid socials link",
			"message": "Invalid socials link",
		})
	}

	err := usersCollection.FindOne(context.Background(), bson.M{"_id": userId}).Decode(&check)
	if err != nil {
		log.Error("Error ", err)
		c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"message": "no record exists",
		})
		return nil
	}

	_, errr := usersCollection.UpdateOne(context.Background(), bson.M{"_id": userId}, bson.D{{Key: "$set",
		Value: bson.D{
			{Key: "gender", Value: user.Gender},
			{Key: "resume", Value: user.Resume},
			{Key: "branch", Value: user.Branch},
			{Key: "contact", Value: user.Contact},
			{Key: "socials", Value: bson.M{"github": user.Socials.Github, "linkedin": user.Socials.LinkedIn, "portfolio": user.Socials.Portfolio}},
		},
	}})
	if errr != nil {
		log.Error("Error: ", errr)
		c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"error": errr.Error(),
		})
		return nil
	}
	c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Updated Successfully",
	})
	return nil
}

func UploadResume(c *fiber.Ctx) error {
	var maxFileSize int64 = 1024 * 1024 * 10

	file, err := c.FormFile("resume")
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   "File not found in the request",
			"message": err.Error(),
		})
	}
	userId := c.Locals("userId").(primitive.ObjectID).Hex()
	if userId == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   "User ObjectID is missing",
			"message": err.Error(),
		})
	}
	if file.Header.Get("Content-Type") != "application/pdf" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   "Invalid file format. Only PDF files are allowed.",
			"message": "Invalid file format",
		})
	}

	if file.Size > maxFileSize {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   "File size exceeds the limit. Max file size is 10 MB.",
			"message": "File size too large",
		})
	}

	sess, err := session.NewSession(&aws.Config{
		Region: aws.String(os.Getenv("AWS_S3_BUCKET_REGION")),
		Credentials: credentials.NewStaticCredentials(
			os.Getenv("AWS_KEY"),
			os.Getenv("AWS_SECRET"),
			"",
		),
	})

	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   "Error creating AWS session",
			"message": err.Error(),
		})
	}

	svc := s3.New(sess)

	srcFile, err := file.Open()
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   "Error opening file",
			"message": err.Error(),
		})
	}
	defer srcFile.Close()

	// @aryan replace this when middleware is ready
	key := "resume/" + userId + ".pdf"

	params := &s3.PutObjectInput{
		Bucket: aws.String(os.Getenv("AWS_S3_BUCKET")),
		Key:    aws.String(key),
		Body:   srcFile,
		ACL:    aws.String("public-read"),
	}

	_, err = svc.PutObject(params)
	log.Print(err)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   "Error uploading file",
			"message": err.Error(),
		})
	}

	c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "File uploaded successfully with public read access.",
		"url":     "https://recruitment-23.s3.ap-south-1.amazonaws.com/" + key,
	})

	return nil
}

func GetNotifications(c *fiber.Ctx) error {
	notifications := []map[string]interface{}{
		{
			"markdown":  "**Hello, dreamer.** Welcome to #Recruitment2022. Your pathway to becoming an SRMKZILLian starts right here. Create a new application to get started.",
			"text":      "Hello, dreamer. Welcome to #Recruitment2022. Your pathway to becoming an SRMKZILLian starts right here. Create a new application to get started.",
			"timestamp": 1663511770010,
		},
	}

	responseData := fiber.Map{
		"notifications": notifications,
	}

	return c.Status(fiber.StatusOK).JSON(responseData)
}

func GetUserApplications(c *fiber.Ctx) error {
	userId := c.Locals("userId").(primitive.ObjectID)
	if userId == primitive.NilObjectID {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "User ObjectID is missing",
		})
	}

	var user models.User

	usersCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if e != nil {
		log.Error("Error: ", e)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   e.Error(),
			"message": "Error getting users collection",
		})
	}
	err := usersCollection.FindOne(context.Background(), bson.M{"_id": userId}).Decode(&user)
	if err != nil {
		log.Error("Error", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   err.Error(),
			"message": "Domain not found",
		})
	}
	applications := user.Application
	return c.Status(fiber.StatusOK).JSON(applications)
}

func GetUserActivity(c *fiber.Ctx) error {
	activity := []map[string]interface{}{
		{
			"type":            "login",
			"user_id":         "104121229959115963252",
			"device_ip":       "::ffff:127.0.0.1",
			"timestamp":       1663410336694,
			"device_location": nil,
		},
		{
			"type":            "login",
			"user_id":         "104121229959115963252",
			"device_ip":       "171.78.172.62",
			"timestamp":       1662830819149,
			"device_location": nil,
		},
	}

	responseData := fiber.Map{
		"activity": activity,
	}

	return c.Status(fiber.StatusOK).JSON(responseData)
}
