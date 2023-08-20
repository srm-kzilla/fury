package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
	"github.com/srm-kzilla/Recruitments/api/utils/middlewares"
)

func UserRoutes(router fiber.Router) {
	protected := router.Use(middlewares.UserAuthenticate)
	protected.Get("/", controllers.GetUser)
	protected.Put("/", controllers.UpdateUser)
	protected.Get("/notifications", controllers.GetNotifications)
	protected.Get("/applications", controllers.GetUserApplications)
	protected.Post("/upload/resume/", controllers.UploadResume)
	protected.Get("/team", controllers.Getteam)
}
