package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
	"github.com/srm-kzilla/Recruitments/api/utils/middlewares"
)

func AdminRoutes(router fiber.Router) {
	protected := router.Use(middlewares.AdminAuthenticate)
	protected.Post("/signup", controllers.AdminSignup)
	protected.Post("/login", controllers.AdminLogin)

	applicationsAdmin := protected.Group("/applications")

	applicationsAdmin.Get("/", controllers.GetAllApplications)
	applicationsAdmin.Get("/:domain", controllers.GetApplications)
	applicationsAdmin.Put("/", controllers.UpdateApplications)

}
