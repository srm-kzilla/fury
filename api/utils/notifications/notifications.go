package notifications

import (
	"context"
	"os"
	"time"

	"github.com/charmbracelet/log"
	"github.com/srm-kzilla/Recruitments/api/models"
	"github.com/srm-kzilla/Recruitments/api/utils/database"
	"go.mongodb.org/mongo-driver/bson"
)

const NEW_USER = "Hello, dreamer. Welcome to #Recruitment2023. Your pathway to becoming an SRMKZILLian starts right here. Create a new application to get started."

func RecordNotification(notificationType string, userId any) bool {
	var notification models.Notification
	notification.Timestamp = time.Now()

	switch notificationType {
	case "NEW_USER":
		notification.Text = "Hello, dreamer. Welcome to #Recruitment2023. Your pathway to becoming an SRMKZILLian starts right here. Create a new application to get started."
		notification.Markdown = "**Hello, dreamer.** Welcome to #Recruitment2023. Your pathway to becoming an SRMKZILLian starts right here. Create a new application to get started."

	case "NEW_APPLICATION":
		notification.Text = "Your application has been created."
		notification.Markdown = "**Your application has been <span>created</span>.**"

	case "APPLICATION_IN_REVIEW":
		notification.Text = "Your application is under review."
		notification.Markdown = "**Your application status changed to <span>In review</span>.**"
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
