package middlewares

import (
	"encoding/json"
	"errors"
	"net/http"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/constants"
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
	err := getGoogleAccessTokenInfo(accessToken)
	if err != nil {
		return c.Status(401).JSON(fiber.Map{
			"message": "Invalid token",
		})
	}
	return c.Next()
}

func getGoogleAccessTokenInfo(accessToken string) error {
	var tokenInfo GoogleAccessTokenInfo
	res, err := http.Get(constants.GoogleAccessTokenInfoApi + accessToken)
	if err != nil {
		return err
	}
	defer res.Body.Close()

	err = json.NewDecoder(res.Body).Decode(&tokenInfo)
	if err != nil {
		return err
	}
	exp, err := strconv.Atoi(tokenInfo.Exp)
	if err != nil {
		return err
	}
	if exp < int(time.Now().Unix()) {
		return errors.New("token expired")
	}
	return nil

}
