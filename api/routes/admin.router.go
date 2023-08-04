package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
)

func AdminRoutes(router fiber.Router){

	router.Post("/signup", controllers.AdminSignup)

	applicationsAdmin := router.Group("/applications")

	applicationsAdmin.Get("/", controllers.GetAllApplications)
	applicationsAdmin.Get("/:domain", controllers.GetApplications)
	applicationsAdmin.Put("/", controllers.UpdateApplications)



}