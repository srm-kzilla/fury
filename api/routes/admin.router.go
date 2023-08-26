package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
	"github.com/srm-kzilla/Recruitments/api/utils/middlewares"
)

func AdminRoutes(router fiber.Router) {
	router.Post("/login", controllers.AdminLogin)

	signup := router.Group("/signup")
	SignUpAdminRoutes(signup)

	applications := router.Group("/applications")
	AdminApplicationRoutes(applications)

}

func SignUpAdminRoutes(router fiber.Router) {
	signUpProtected := router.Use(middlewares.SignUpAuthenticate)
	signUpProtected.Post("/", controllers.AdminSignup)
}

func AdminApplicationRoutes(router fiber.Router) {
	protected := router.Use(middlewares.AdminAuthenticate)

	protected.Get("/all", controllers.GetAllApplications)
	protected.Get("/", controllers.GetApplications)
	protected.Put("/", controllers.UpdateApplications)
}
