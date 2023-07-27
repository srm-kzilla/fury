package mailer

import (
	"log"
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/awserr"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/ses"
)

func SendEmail(sesInput SESInput) {

	emailTemplate := GenerateSESTemplate(sesInput)

	region := os.Getenv("AWS_REGION")
	accessKeyId := os.Getenv("AWS_KEY")
	secretAccessKey := os.Getenv("AWS_SECRET")

	sess, err := session.NewSession(&aws.Config{
		Region:      aws.String(region),
		Credentials: credentials.NewStaticCredentials(accessKeyId, secretAccessKey, ""),
	})
	if err != nil {
		log.Println(err)
	}

	service := ses.New(sess)

	if os.Getenv("APP_ENV") == "production" {
		// Attempt to send the email.
		_, err = service.SendEmail(emailTemplate)

		// Display error messages if they occur.
		if err != nil {
			if aerr, ok := err.(awserr.Error); ok {
				log.Println(aerr.Error())
			} else {
				log.Println(err.Error())
			}
		}
	}
	log.Printf("Email Sent to address: %s", sesInput.RecieverEmail)
}
