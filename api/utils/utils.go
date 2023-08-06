package utils

import (
	"time"
	"github.com/gofiber/fiber/v2"
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
	return c.JSON(fiber.Map{"message": IPAddress})
}