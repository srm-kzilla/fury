package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
	"github.com/srm-kzilla/Recruitments/middlewares"
)

func UserRoutes(router fiber.Router) {
	protected := router.Use(middlewares.UserAuthenticate)
	protected.Post("/", controllers.CreateUser)
	protected.Get("/:regNo", controllers.GetUser)
	protected.Put("/", controllers.UpdateUser)
	protected.Post("/upload/resume/", controllers.UploadResume)
}
