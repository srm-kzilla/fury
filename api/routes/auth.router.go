package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
)

func AuthRoutes(router fiber.Router) {
	google := router.Group("/google/")
	google.Post("/token", controllers.GetAccessTokenGoogle)
	google.Get("/refresh", controllers.RefreshAccessTokenGoogle)
}