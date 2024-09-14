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
		notification.Text = "Greetings, mortal. Welcome to #Recruitment2024. Your divine journey to becoming an SRMKZILLian starts now. Create a new application to begin your quest."
		notification.Markdown = "Hail, brave soul! The path to becoming an SRMKZILLian champion is open, like the gates of Olympus. Begin your epic journey by crafting your first application! #Recruitment2024"

	case "NEW_APPLICATION":
		notification.Text = "Your application has been created."
		notification.Markdown = fmt.Sprintf("**By the will of Zeus,** you've made your first offering, hero! Your new application for the %s domain has been created. Complete it in time and let the Fates decide what legends await! #SRMKZILLianAdventures", finalDomain)

	case "APPLICATION_IN_REVIEW":
		notification.Text = "Your application is under review."
		notification.Markdown = fmt.Sprintf("**Athena watches over you,** as your application for the %s domain undergoes divine scrutiny. Stand firm, for your quest is far from over! #SRMKZILLianAdventures", finalDomain)

	case "APPLICATION_DELETED":
		notification.Text = "Your draft has been deleted."
		notification.Markdown = fmt.Sprintf("**Hades stirs,** as your draft for the %s domain has vanished into the underworld. But fear not, hero! With strength, you can craft another masterpiece from the flames. #SRMKZILLianAdventures", finalDomain)
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
