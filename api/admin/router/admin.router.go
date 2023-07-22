package adminRouter

import (
	"github.com/gofiber/fiber/v2"
	adminController "github.com/srm-kzilla/Recruitments/api/admin/controller"
)

func AdminRoutes(router fiber.Router){
	router.Get("/applications/", adminController.GetAllApplications)
	router.Get("/applications/:domain", adminController.GetApplications)
	router.Put("/applications/", adminController.UpdateApplications)
}