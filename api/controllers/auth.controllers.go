package controllers

import (
	"context"
	"encoding/json"
	"errors"
	"net/http"
	"os"
	"regexp"
	"strconv"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/models"
	"github.com/srm-kzilla/Recruitments/constants"
	"github.com/srm-kzilla/Recruitments/database"
	"go.mongodb.org/mongo-driver/bson"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

var AppConfig oauth2.Config

func loadConfig() {
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

func GoogleLogin(c *fiber.Ctx) error {
	loadConfig()
	url := AppConfig.AuthCodeURL(os.Getenv("GOOGLE_STATE"))
	err := c.Redirect(url)
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return nil
}
func GetAccessTokenGoogle(c *fiber.Ctx) error {
	code := c.Query("code")
	if code == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request",
		})
	}
	user, err := getUserDetailsGoogle(code)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	err = registerUserInDb(user.UserData)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.Status(fiber.StatusOK).JSON(user)
}

func getUserDetailsGoogle(code string) (models.Auth, error) {
	var userData models.UserData
	loadConfig()
	token, err := AppConfig.Exchange(context.Background(), code)
	if err != nil {
		return models.Auth{}, err
	}
	user, err := http.Get(constants.GoogleUserInfoApi + token.AccessToken)
	if err != nil {
		return models.Auth{}, err
	}
	defer user.Body.Close()

	err = json.NewDecoder(user.Body).Decode(&userData)
	if err != nil {
		return models.Auth{}, err
	}
	if !strings.HasSuffix(userData.Email, constants.SrmEmailDomain) {
		return models.Auth{}, errors.New("use srm mail id")
	}
	userData.RegNo = retrieveRegNoFromLastName(userData.FamilyName)
	userData.Year = calculateStudentYear(userData.RegNo)
	userData.Name = filterFamilyName(userData.Name)
	userData.FamilyName = filterFamilyName(userData.FamilyName)
	authData := models.Auth{
		AccessToken:  token.AccessToken,
		TokenType:    token.TokenType,
		ExpiresIn:    token.Expiry,
		RefreshToken: token.RefreshToken,
		UserData:     userData,
	}

	return authData, nil
}

func retrieveRegNoFromLastName(lastName string) string {
	regexParameter := regexp.MustCompile(`\(([^)]+)\)`)
	regName := regexParameter.FindStringSubmatch(lastName)
	if len(regName) == 2 {
		return regName[1]
	}
	return ""
}

func calculateStudentYear(input string) int {
	year, err := strconv.Atoi(input[2:4])
	if err != nil {
		return 0
	}
	currentYear, errr := strconv.Atoi(os.Getenv("YEAR"))
	if errr != nil {
		return 0
	}
	studentYear := currentYear - year + 1
	if studentYear < 1 {
		return 0
	}
	return studentYear
}

func filterFamilyName(familyName string) string {
	index := strings.Index(familyName, "(")

	if index < 0 {
		return familyName
	}
	result := familyName[:index]
	return result
}

func registerUserInDb(user models.UserData) error {
	var check models.User
	usersCollection, err := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if err != nil {
		return err
	}
	usersCollection.FindOne(context.Background(), bson.M{"email": user.Email}).Decode(&check)
	if check.Email == user.Email {
		return nil
	}
	newUser := models.User{
		Name:      user.Name,
		RegNo:     user.RegNo,
		Year:      user.Year,
		Email:     user.Email,
		CreatedAt: time.Now().Unix(),
	}
	_, e := usersCollection.InsertOne(context.Background(), newUser)
	if e != nil {
		return e
	}
	return nil
}
