package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
)

func UserRoutes(protected fiber.Router) {
	protected.Get("/", controllers.GetUser)
	protected.Put("/", controllers.UpdateUser)
	protected.Post("/upload/resume/", controllers.UploadResume)
}
