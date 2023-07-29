package routes

import (
	"github.com/gofiber/fiber/v2"
)

func AuthRoutes(router fiber.Router) {
	router.Post("/google/token")
	router.Get("/google/userinfo")
	router.Post("/google/refresh")
}
