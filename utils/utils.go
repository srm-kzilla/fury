package utils

import (
	"time"
	"github.com/gofiber/fiber/v2"
)

var startTime time.Time

func init() {
	startTime = time.Now()
}

func RootFunction(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "SRMKZILLA Recruitments-23 server running"})
}

func HealthCheck(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "OK", "uptime": time.Since(startTime).String(), "timestamp": time.Now()})
}

func HandleRoot(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "RECRUITMENT API"})
}