package api

import (
	"github.com/gofiber/fiber/v2"
	adminController "github.com/srm-kzilla/Recruitments/api/admin/controller"
	userController "github.com/srm-kzilla/Recruitments/api/users/controller"
	"github.com/srm-kzilla/Recruitments/utils"
)

func SetupApp(app *fiber.App) {

	api := app.Group("/api")
	api.Get("/", utils.HandleRoot)
	api.Get("/admin/applications/", adminController.GetAllApplications)
	api.Get("/admin/applications/:domain", adminController.GetApplications)
	api.Put("/admin/applications/", adminController.UpdateApplications)

	api.Get("/users/:regNo", userController.GetUser)
	api.Put("/users/", userController.UpdateUser)

}
