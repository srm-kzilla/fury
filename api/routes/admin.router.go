package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
)

func AdminRoutes(router fiber.Router){
	router.Get("/applications/", controllers.GetAllApplications)
	router.Get("/applications/:domain", controllers.GetApplications)
	router.Put("/applications/", controllers.UpdateApplications)
}