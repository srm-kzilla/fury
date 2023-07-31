package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
)

func UserRoutes(router fiber.Router) {
	router.Post("/", controllers.CreateUser)
	router.Get("/:regNo", controllers.GetUser)
	router.Put("/", controllers.UpdateUser)
	router.Post("/upload/resume/", controllers.UploadResume)
}
