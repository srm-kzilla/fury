package utils

import (
	"time"

	"github.com/gofiber/fiber/v2"
)

type LocationData struct {
	City    string `json:"city"`
	Region  string `json:"regionName"`
	Status  string `json:"status"`
	Message string `json:"message"`
}

func RootFunction(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "SRMKZILLA Recruitments-24 server running"})
}

func HealthCheck(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "OK", "uptime": time.Since(StartTime).String(), "timestamp": time.Now()})
}

func HandleRoot(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "RECRUITMENT API"})
}

func ArrayContains(arr []string, str string) bool {
	for _, a := range arr {
		if a == str {
			return true
		}
	}
	return false
}

func CapitalizeDomain(domain string) string {
	switch domain {
	case "technical":
		return "Technical"
	case "events":
		return "Events"
	case "photography":
		return "Photography"
	case "vfx":
		return "VFX"
	case "gfx":
		return "GFX"
	case "content writing":
		return "Content Writing"
	case "corporate":
		return "Corporate"
	case "technicalp":
		return "Technical"
	}
	return ""
}
