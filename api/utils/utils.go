package utils

import (
	"time"
	"github.com/gofiber/fiber/v2"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"github.com/charmbracelet/log"
)

func RootFunction(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "SRMKZILLA Recruitments-23 server running"})
}

func HealthCheck(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "OK", "uptime": time.Since(StartTime).String(), "timestamp": time.Now()})
}

func HandleRoot(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "RECRUITMENT API"})
}

func RecordActivity(c *fiber.Ctx) error {
	IPAddress := c.Get("X-Forwarded-For")
	return c.JSON(fiber.Map{"message": GetLocationFromIP(IPAddress)})
}

type LocationData struct {
	City      string `json:"city"`
	Region    string `json:"regionName"`
	Status    string `json:"status"`
	Message   string `json:"message"`
}

func GetLocationFromIP(ip string) string {
	url := "https://ip-api.com/json/" + ip

	response, err := http.Get(url)
	if err != nil {
		log.Error(err)
		return ip
	}
	defer response.Body.Close()

	if response.StatusCode != http.StatusOK {
		return ip
	}

	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Error(err)
		return ip
	}

	var location LocationData
	err = json.Unmarshal(body, &location)
	if err != nil {
		log.Error(err)
		return ip
	}

	if location.Status == "fail" {
		log.Error(err)
		return ip
	}

	return location.City + ", " + location.Region
}
