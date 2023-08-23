package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
	"github.com/srm-kzilla/Recruitments/api/utils/middlewares"
)

func AdminRoutes(router fiber.Router) {
	router.Post("/login", controllers.AdminLogin)
	signUpProtected := router.Use(middlewares.SignUpAuthenticate)
	protected := router.Use(middlewares.AdminAuthenticate)
	applicationsAdmin := protected.Group("/applications")

	signUpProtected.Post("/signup", controllers.AdminSignup)
	applicationsAdmin.Get("/all", controllers.GetAllApplications)
	applicationsAdmin.Get("/", controllers.GetApplications)
	applicationsAdmin.Put("/", controllers.UpdateApplications)

}
