package controllers

import (
	"context"
	"fmt"
	"os"
	"time"

	"github.com/charmbracelet/log"
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/models"
	"github.com/srm-kzilla/Recruitments/api/utils/database"
	"github.com/srm-kzilla/Recruitments/api/utils/mailer"
	"github.com/srm-kzilla/Recruitments/api/utils/notifications"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func CreateApplication(c *fiber.Ctx) error {
	var body models.ApplicationBody
	c.BodyParser(&body)
	application := body

	userId := c.Locals("userData").(map[string]interface{})["userId"].(primitive.ObjectID)
	email := c.Locals("userData").(map[string]interface{})["email"].(string)
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
	notificationInsert := notifications.RecordNotification("NEW_APPLICATION", userId, body.Domain)
	if !notificationInsert {
		log.Error("Error: Inserting notification")
	}
	newMailEmbed := mailer.MailEmbed{
		Header:      "Recruitment#2023",
		Salutations: "Hello Dreamer,",
		Body:        fmt.Sprintf("Ruh-roh! It seems you've embarked on a thrilling journey by creating a draft for the %s Domain in our mysterious recruitment adventure – just like Scooby and the gang hopping into the Mystery Machine! 🚐🔍 <br/>  <br/>  The path to becoming a true SRMKZILLian is unfolding, and your draft is the first step to unraveling the enigmatic challenges and innovations that await. We're excited to see your technical prowess shine like Velma's brilliant insights! <br/>  <br/>  But hang on to your virtual hats! The adventure's not over yet. Remember, the deadline for completing your application is creeping up faster than a ghostly phantom – August 26th! 📅 So don't let that draft sit idle; polish it up and submit it at recruitment.srmkzilla.net before the clock strikes midnight. <br/>  <br/>   Join us on this exhilarating escapade to the land of code, innovation, and camaraderie! We can't wait to have you onboard the SRMKZILLA crew, where every mystery solved is a step towards becoming a legend. <br/>  <br/>   If you have any questions, don't hesitate to reach out. Until then, keep your magnifying glass handy and your curiosity ignited! <br/>  <br/>   Best of luck, and let's solve these puzzles together!", body.Domain),
	}
	sesInput := mailer.SESInput{
		TemplateName:  mailer.TEMPLATES.EmailTemplate,
		Subject:       fmt.Sprintf("Finish crafting Your %s domain Application Today!", body.Domain),
		RecieverEmail: email,
		SenderEmail:   os.Getenv("SENDER_EMAIL"),
		EmbedData:     newMailEmbed,
	}
	err = mailer.SendEmail(sesInput)
	if err != nil {
		return err
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Application created successfully",
	})
}

func UpdateDraft(c *fiber.Ctx) error {
	var application models.Application
	var check models.Application
	c.BodyParser(&application)

	userId := c.Locals("userData").(map[string]interface{})["userId"].(primitive.ObjectID)
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
	userId := c.Locals("userData").(map[string]interface{})["userId"].(primitive.ObjectID)
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
	notificationInsert := notifications.RecordNotification("APPLICATION_DELETED", userId, domain)
	if !notificationInsert {
		log.Error("Error: Inserting notification")
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Draft application deleted successfully",
	})
}

func SubmitApplication(c *fiber.Ctx) error {
	var user models.User
	userId := c.Locals("userData").(map[string]interface{})["userId"].(primitive.ObjectID)
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
	notificationInsert := notifications.RecordNotification("APPLICATION_IN_REVIEW", userId, domain)
	if !notificationInsert {
		log.Error("Error: Inserting notification")
	}
	email := c.Locals("userData").(map[string]interface{})["email"].(string)
	newMailEmbed := mailer.MailEmbed{
		Header:      "Recruitment#2023",
		Salutations: "Hello there, SRMKZILLian in the making,",
		Body:        fmt.Sprintf("We wanted to let you in on a secret – your %s Domain application has taken its place in our enigmatic vault, just like a vital clue in the casebook! 📚🔍  <br/>   <br/>   Riding the ZILLA MYSTERY MACHINE of creativity, your application is now securely submitted, ready for us to unlock its potential. Our team of digital detectives will be combing through applications like Shaggy through a snack buffet, reviewing them on a daily basis. <br/>  <br/>   Stay tuned for updates, both via email and on your dashboard. We'll keep you in the loop with each twist and turn, much like Scooby and the gang following the trail of breadcrumbs. 🍞👣 <br/>  <br/>   We appreciate your eagerness to join the SRMKZILLA crew! Remember, it's not just about solving puzzles – it's about being part of a legendary squad. <br/>  <br/>   If you have any questions or just want to say &quot;zoinks,&quot; don't hesitate to reach out. Until then, keep your skills sharp and your curiosity piqued! <br/>  <br/>   Best of luck, and let's unravel the next chapter of your SRMKZILLA journey together!", domain),
	}
	sesInput := mailer.SESInput{
		TemplateName:  mailer.TEMPLATES.EmailTemplate,
		Subject:       fmt.Sprintf("Your SRMKZILLA %s Application: Locked, Loaded, and Under Review!", domain),
		RecieverEmail: email,
		SenderEmail:   os.Getenv("SENDER_EMAIL"),
		EmbedData:     newMailEmbed,
	}
	err = mailer.SendEmail(sesInput)
	if err != nil {
		return err
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Application submitted successfully",
	})
}
