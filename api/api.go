package api

import (
	"github.com/gofiber/fiber/v2"
	adminController "github.com/srm-kzilla/Recruitments/api/admin/controller"
)

func handleRoot(c *fiber.Ctx) error {
	return c.JSON(map[string]string{"message": "SRMKZILLA Recruitments API"})
}
func SetupApp(app *fiber.App) {

	api := app.Group("/api")
	api.Get("/", handleRoot)
	api.Get("/admin/applications/", adminController.GetAllApplications)
	api.Get("/admin/applications/:domain", adminController.GetApplications)
	api.Put("/admin/applications/", adminController.UpdateApplications)

}
