package api

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/routes"
	"github.com/srm-kzilla/Recruitments/utils"
)

func SetupApp(app *fiber.App) {

	api := app.Group("/api/v1/")
	api.Get("/", utils.HandleRoot)

	// /api/v1/admin
	admin := api.Group("/admin/")
	routes.AdminRoutes(admin)

	// /api/v1/users
	user := api.Group("/users/")
	routes.UserRoutes(user)

}
