package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
)

func AuthRoutes(router fiber.Router) {
	router.Get("/google/login", controllers.GoogleLogin)
	router.Get("/google/token", controllers.GetAccessTokenGoogle)
}
