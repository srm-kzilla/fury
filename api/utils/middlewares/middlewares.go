package middlewares

import (
	"context"
	"encoding/json"
	"errors"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/charmbracelet/log"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt"
	"github.com/srm-kzilla/Recruitments/api/models"
	"github.com/srm-kzilla/Recruitments/api/utils/constants"
	"github.com/srm-kzilla/Recruitments/api/utils/database"
	"go.mongodb.org/mongo-driver/bson"
)

type GoogleAccessTokenInfo struct {
	Exp       string `json:"exp"`
	Email     string `json:"email"`
	ExpiresIn string `json:"expires_in"`
}

func UserAuthenticate(c *fiber.Ctx) error {
	accessToken := c.GetReqHeaders()["Authorization"]
	if accessToken == "" {
		return c.Status(401).JSON(fiber.Map{
			"message": "Authorization token not found",
		})
	}
	if !strings.Contains(accessToken, "Bearer") {
		return c.Status(401).JSON(fiber.Map{
			"message": "Invalid token",
		})
	}
	token := strings.Split(accessToken, " ")[1]
	email, err := getGoogleAccessTokenInfo(token)
	if err != nil {
		return c.Status(401).JSON(fiber.Map{
			"message": "Invalid token",
		})
	}
	user, err := getUserFromUserEmail(email)
	if err != nil {
		return c.Status(401).JSON(fiber.Map{
			"message": err.Error(),
		})
	}
	userData := map[string]interface{}{
		"email":  user.Email,
		"userId": user.ID,
	}
	c.Locals("userData", userData)
	return c.Next()
}
func AdminSignupAuthenticate(c *fiber.Ctx) error {
	accessToken := c.GetReqHeaders()["Authorization"]
	if accessToken == "" {
		return c.Status(401).JSON(fiber.Map{
			"message": "Authorization token not found",
		})
	}
	if accessToken == os.Getenv("ADMIN_SIGNUP_TOKEN") {
		return c.Next()
	}
	return c.Status(401).JSON(fiber.Map{
		"message": "Invalid token",
	})
}
func AdminAuthenticate(c *fiber.Ctx) error {
	accessToken := c.GetReqHeaders()["Authorization"]
	if accessToken == "" {
		return c.Status(401).JSON(fiber.Map{
			"message": "Authorization token not found",
		})
	}
	if !strings.Contains(accessToken, "Bearer") {
		return c.Status(401).JSON(fiber.Map{
			"message": "Invalid token",
		})
	}
	jwtToken := strings.Split(accessToken, " ")[1]

	token, err := jwt.ParseWithClaims(jwtToken, &jwt.StandardClaims{}, func(t *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("JWT_SECRET")), nil
	})
	if err != nil {
		return c.Status(401).JSON(fiber.Map{
			"message": "Invalid token",
		})
	}
	claims := token.Claims.(*jwt.StandardClaims)
	if claims.ExpiresAt < time.Now().Unix() {
		return c.Status(401).JSON(fiber.Map{
			"message": "Token expired",
		})
	}
	evaluatorsCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "evaluators")
	if e != nil {
		log.Error("Error: ", e)
		return errors.New("error getting evaluators collection")
	}

	var evaluator models.Evaluators

	email := claims.Issuer
	domain := claims.Subject
	err = evaluatorsCollection.FindOne(context.Background(), bson.M{"email": email}).Decode(&evaluator)
	if err != nil {
		log.Error("Error", err)
		return c.Status(400).JSON(fiber.Map{
			"message": "Evaluator not found",
		})
	}

	c.Locals("domain", domain)

	return c.Next()
}

func getUserFromUserEmail(email string) (*models.User, error) {
	usersCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "users")
	if e != nil {
		log.Error("Error: ", e)
		return nil, errors.New("error getting users collection")
	}

	var user models.User
	err := usersCollection.FindOne(context.Background(), bson.M{"email": email}).Decode(&user)
	if err != nil {
		log.Error("Error", err)
		return nil, errors.New("user not found")
	}
	return &user, nil
}

func getGoogleAccessTokenInfo(accessToken string) (string, error) {
	var tokenInfo GoogleAccessTokenInfo
	res, err := http.Get(constants.GOOGLE_ACCESS_TOKEN_INFO + accessToken)
	if err != nil {
		return "", err
	}
	defer res.Body.Close()

	err = json.NewDecoder(res.Body).Decode(&tokenInfo)
	if err != nil {
		return "", err
	}
	email := tokenInfo.Email
	exp, err := strconv.Atoi(tokenInfo.Exp)
	if err != nil {
		return "", err
	}
	if exp < int(time.Now().Unix()) {
		return "", errors.New("token expired")
	}
	return email, nil

}
