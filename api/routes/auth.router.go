package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
)

func AuthRoutes(router fiber.Router) {
	router.Post("/google/token", controllers.GetAccessTokenGoogle)
}
