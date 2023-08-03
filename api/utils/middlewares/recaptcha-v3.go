package middlewares

import (
	"encoding/json"
	"errors"
	"net/http"
	"net/url"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/utils/constants"
)

type RecaptchaResponse struct {
	Success     bool      `json:"success"`
	Score       float64   `json:"score"`
	Action      string    `json:"action"`
	ChallengeTS time.Time `json:"challenge_ts"`
	Hostname    string    `json:"hostname"`
	ErrorCodes  []string  `json:"error-codes"`
}

func CheckRecaptcha(secret, response, clientIP string) error {
	recaptchaPayload := url.Values{
		"secret":   {secret},
		"response": {response},
		"remoteip": {clientIP},
	}

	resp, err := http.PostForm(constants.GoogleRecaptchaVerifyApi, recaptchaPayload)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return errors.New("recaptcha API returned non-200 status code")
	}

	var body RecaptchaResponse
	if err = json.NewDecoder(resp.Body).Decode(&body); err != nil {
		return err
	}

	if !body.Success {
		return errors.New("unsuccessful recaptcha verify request")
	}
	return nil
}

func RecaptchaMiddleware(c *fiber.Ctx) error {
	recaptchaToken := c.Get("x-recaptcha-token")
	if recaptchaToken == "" {
		return fiber.ErrUnauthorized
	}

	clientIP := c.IP()
	err := CheckRecaptcha(os.Getenv("RECAPTCHA_SECRET"), recaptchaToken, clientIP)
	if err != nil {
		return fiber.ErrUnauthorized
	}

	return c.Next()
}
