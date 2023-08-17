package mailer

import (
	"os"

	"github.com/aws/aws-sdk-go/aws/awserr"
	"github.com/charmbracelet/log"
	"github.com/srm-kzilla/Recruitments/api/utils"
)

func SendEmail(sesInput SESInput) error {

	emailTemplate := GenerateSESTemplate(sesInput)

	if os.Getenv("APP_ENV") == "production" {
		// Attempt to send the email.
		_, err := utils.Service.SendEmail(emailTemplate)
		if err != nil {
			if aerr, ok := err.(awserr.Error); ok {
				return aerr
			} else {
				return err
			}
		}
	}
	log.Printf("Email Sent to address: %s", sesInput.RecieverEmail)
	return nil
}
