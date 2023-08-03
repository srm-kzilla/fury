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
	"github.com/srm-kzilla/Recruitments/api/utils"
	"github.com/srm-kzilla/Recruitments/api/utils/constants"
	"github.com/srm-kzilla/Recruitments/api/utils/database"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/oauth2"
)

func GoogleLogin(c *fiber.Ctx) error {
	url := utils.AppConfig.AuthCodeURL(os.Getenv("GOOGLE_STATE"))
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

func getGoogleAccessToken(code string) (*oauth2.Token, error) {
	token, err := utils.AppConfig.Exchange(context.Background(), code)
	if err != nil {
		return nil, err
	}
	return token, nil
}
func getUserDetailsGoogle(code string) (models.Auth, error) {
	var userData models.UserData
	token, err := getGoogleAccessToken(code)
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
	userData.Name = filterName(userData.Name)
	userData.FamilyName = filterName(userData.FamilyName)
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
func calculateStudentYear(regNo string) int {
	year, err := strconv.Atoi(regNo[2:4])
	if err != nil {
		return 0
	}
	currentYear := time.Now().Year() - 2000
	studentYear := currentYear - year + 1
	if studentYear < 1 {
		return 0
	}
	return studentYear
}

func filterName(familyName string) string {
	index := strings.Index(familyName, " (")

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
		ID:          primitive.NewObjectID(),
		Name:        user.Name,
		RegNo:       user.RegNo,
		Year:        user.Year,
		Email:       user.Email,
		Application: []models.Application{},
		CreatedAt:   time.Now().Unix(),
	}
	_, e := usersCollection.InsertOne(context.Background(), newUser)
	if e != nil {
		return e
	}
	return nil
}

func RefreshAccessTokenGoogle(c *fiber.Ctx) error {
	refreshToken := c.Query("refresh_token")
	if refreshToken == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request",
		})
	}
	token, err := utils.AppConfig.TokenSource(context.Background(), &oauth2.Token{RefreshToken: refreshToken}).Token()
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"access_token": token.AccessToken,
		"token_type":   token.TokenType,
		"expires_in":   token.Expiry,
	})
}
