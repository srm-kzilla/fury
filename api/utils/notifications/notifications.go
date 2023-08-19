package notifications

import (
	"context"
	"fmt"
	"os"
	"strings"
	"time"

	"github.com/charmbracelet/log"
	"github.com/srm-kzilla/Recruitments/api/models"
	"github.com/srm-kzilla/Recruitments/api/utils/database"
	"go.mongodb.org/mongo-driver/bson"
)

func RecordNotification(notificationType string, userId any, domain string) bool {
	var notification models.Notification
	notification.Timestamp = time.Now()
	var finalDomain string
	if domain == "technicalp" {
		finalDomain = "technical"
	} else {
		finalDomain = strings.Replace(domain, "_", " ", -1)
	}

	switch notificationType {
	case "NEW_USER":
		notification.Text = "Hello, dreamer. Welcome to #Recruitment2023. Your pathway to becoming an SRMKZILLian starts right here. Create a new application to get started."
		notification.Markdown = "Ruh-roh, welcome, aspiring sleuth! The trail to becoming an SRMKZILLian is wide open, just like Scooby's appetite. Kick off your adventure by cooking up a new application! #Recruitment2023"

	case "NEW_APPLICATION":
		notification.Text = "Your application has been created."
		notification.Markdown = fmt.Sprintf("**Zoinks,** you've cracked the case, detective! Your new application for the %s domain has been created. Finish it on time and let's see what mysteries unfold! #SRMKZILLianAdventures", finalDomain)

	case "APPLICATION_IN_REVIEW":
		notification.Text = "Your application is under review."
		notification.Markdown = fmt.Sprintf("**Jinkies,** your application for the %s domain is in the vault, awaiting our sleuthy scrutiny! Stay tuned for the unraveling excitement! #SRMKZILLianAdventures", finalDomain)

	case "APPLICATION_DELETED":
		notification.Text = "Your draft has been deleted."
		notification.Markdown = fmt.Sprintf("**Zoinks, creator!** Your draft for %s domain took a disappearing act, but fear not! Just a Scooby-Doo away from rewriting your mystery.", finalDomain)
	}

	usersCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if e != nil {
		log.Error("Error: ", e)
		return false
	}

	_, err := usersCollection.UpdateOne(context.TODO(), bson.M{"_id": userId}, bson.M{"$push": bson.M{"notifications": notification}})
	if err != nil {
		log.Error("Error: ", err)
		return false
	}

	return true
}
