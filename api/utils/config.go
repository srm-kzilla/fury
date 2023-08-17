package utils

import (
	"os"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/ses"
	"github.com/charmbracelet/log"
	"github.com/joho/godotenv"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

var AppConfig oauth2.Config
var StartTime time.Time
var Service *ses.SES

var (
	AwsRegion          = os.Getenv("AWS_REGION")
	AwsAccessKeyId     = os.Getenv("AWS_KEY")
	AwsSecretAccessKey = os.Getenv("AWS_SECRET")
)

func init() {
	StartTime = time.Now()
	err := godotenv.Load()
	if err != nil {
		log.Error(err)
	}
	log.Info("Loaded .env file")

	AppConfig = oauth2.Config{
		ClientID:     os.Getenv("GOOGLE_CLIENT_ID"),
		ClientSecret: os.Getenv("GOOGLE_CLIENT_SECRET"),
		Endpoint:     google.Endpoint,
		RedirectURL:  os.Getenv("GOOGLE_REDIRECT_URI"),
		Scopes: []string{
			"https://www.googleapis.com/auth/userinfo.email",
			"https://www.googleapis.com/auth/userinfo.profile",
		},
	}
	sess, err := session.NewSession(&aws.Config{
		Region:      aws.String(AwsRegion),
		Credentials: credentials.NewStaticCredentials(AwsAccessKeyId, AwsSecretAccessKey, ""),
	})
	if err != nil {
		log.Error("Error: ", err)
		os.Exit(1)
	}
	Service = ses.New(sess)
}
