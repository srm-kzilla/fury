package mailer

import (
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/awserr"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/ses"
	"github.com/charmbracelet/log"
)

var (
	AwsRegion          = os.Getenv("AWS_REGION")
	AwsAccessKeyId     = os.Getenv("AWS_KEY")
	AwsSecretAccessKey = os.Getenv("AWS_SECRET")
)

func SendEmail(sesInput SESInput) error {

	emailTemplate := GenerateSESTemplate(sesInput)

	sess, err := session.NewSession(&aws.Config{
		Region:      aws.String(AwsRegion),
		Credentials: credentials.NewStaticCredentials(AwsAccessKeyId, AwsSecretAccessKey, ""),
	})
	if err != nil {
		return err
	}

	service := ses.New(sess)

	if os.Getenv("APP_ENV") == "production" {
		// Attempt to send the email.
		_, err = service.SendEmail(emailTemplate)
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
