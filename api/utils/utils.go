package utils

import (
	"context"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/models"
	"github.com/srm-kzilla/Recruitments/api/utils/database"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type LocationData struct {
	City    string `json:"city"`
	Region  string `json:"regionName"`
	Status  string `json:"status"`
	Message string `json:"message"`
}

func RootFunction(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "SRMKZILLA Recruitments-23 server running"})
}

func HealthCheck(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "OK", "uptime": time.Since(StartTime).String(), "timestamp": time.Now()})
}

func HandleRoot(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "RECRUITMENT API"})
}

func RecordActivity(ip string, activityType string, mongo_id primitive.ObjectID) error {
	location := getLocationFromIP(ip)
	activityCollection, e := database.GetCollection(os.Getenv("DB_NAME"), "activity")

	if e != nil {
		return e
	}

	activity := models.Activity{
		Location:  location,
		Timestamp: time.Now(),
		Type:      activityType,
		UserId:    mongo_id,
	}
	_, err := activityCollection.InsertOne(context.Background(), activity)
	if err != nil {
		return err
	}
	return nil
}

func getLocationFromIP(ip string) string {
	url := "http://ip-api.com/json/" + ip
	response, err := http.Get(url)
	if err != nil {
		return ip
	}
	defer response.Body.Close()

	if response.StatusCode != http.StatusOK {
		return ip
	}

	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		return ip
	}

	var location LocationData
	err = json.Unmarshal(body, &location)
	if err != nil {
		return ip
	}

	if location.Status == "fail" {
		return ip
	}

	if ip == "" {
		return location.City + ", " + location.Region
	}
	return location.City + ", " + location.Region + " (" + ip + ")"
}

func ArrayContains(arr []string, str string) bool {
	for _, a := range arr {
		if a == str {
			return true
		}
	}
	return false
}
