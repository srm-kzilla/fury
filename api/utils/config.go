package utils

import (
	"os"
	"time"

	"github.com/charmbracelet/log"
	"github.com/joho/godotenv"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

var AppConfig oauth2.Config
var StartTime time.Time
var (
	AwsRegion          string
	AwsAccessKeyId     string
	AwsSecretAccessKey string
)

func init() {
	StartTime = time.Now()
	err := godotenv.Load()
	if err != nil {
		log.Error(err)
	}
	log.Info("Loaded .env file")
	AwsRegion = os.Getenv("AWS_REGION")
	AwsAccessKeyId = os.Getenv("AWS_KEY")
	AwsSecretAccessKey = os.Getenv("AWS_SECRET")
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
}
