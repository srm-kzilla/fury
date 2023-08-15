package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
	"github.com/srm-kzilla/Recruitments/api/utils/middlewares"
)

func ApplicationRoutes(router fiber.Router) {
	protected := router.Use(middlewares.UserAuthenticate)
	protected.Post("/", controllers.CreateApplication)
	protected.Post("/submit", controllers.SubmitApplication)
	protected.Put("/", controllers.UpdateDraft)
	protected.Delete("/:domain", controllers.DeleteDraftApplication)
}
