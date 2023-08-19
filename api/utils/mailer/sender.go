package mailer

import (
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/awserr"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/ses"
	"github.com/charmbracelet/log"
	"github.com/srm-kzilla/Recruitments/api/utils"
)

var (
	AwsRegion          = os.Getenv("AWS_REGION")
	AwsAccessKeyId     = os.Getenv("AWS_KEY")
	AwsSecretAccessKey = os.Getenv("AWS_SECRET")
)

func SendEmail(sesInput SESInput) error {

	sess, err := session.NewSession(&aws.Config{
		Region:      aws.String(utils.AwsRegion),
		Credentials: credentials.NewStaticCredentials(utils.AwsAccessKeyId, utils.AwsSecretAccessKey, ""),
	})
	if err != nil {
		log.Error("Error: ", err)
	}
	Service := ses.New(sess)

	emailTemplate := GenerateSESTemplate(sesInput)

	if os.Getenv("APP_ENV") == "production" {

		_, err := Service.SendEmail(emailTemplate)
		if err != nil {
			if aerr, ok := err.(awserr.Error); ok {
				switch aerr.Code() {
				case ses.ErrCodeMessageRejected:
					log.Error(ses.ErrCodeMessageRejected, aerr.Error())
				case ses.ErrCodeMailFromDomainNotVerifiedException:
					log.Error(ses.ErrCodeMailFromDomainNotVerifiedException, aerr.Error())
				case ses.ErrCodeConfigurationSetDoesNotExistException:
					log.Error(ses.ErrCodeConfigurationSetDoesNotExistException, aerr.Error())
				default:
					log.Error(aerr.Error())
				}
			} else {
				log.Error(err.Error())
			}
		}
	}

	log.Printf("Email requested to: %s", sesInput.RecieverEmail)
	return nil
}
