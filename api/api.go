package api

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/routes"
	"github.com/srm-kzilla/Recruitments/api/utils"
)

func SetupApp(app *fiber.App) {

	api := app.Group("/api/v1/")
	api.Get("/", utils.HandleRoot)

	// /api/v1/auth
	auth := api.Group("/auth/")
	routes.AuthRoutes(auth)

	// /api/v1/admin
	admin := api.Group("/admin/")
	routes.AdminRoutes(admin)

	// /api/v1/users
	user := api.Group("/users/")
	routes.UserRoutes(user)

	// /api/v1/application
	application := api.Group("/application/")
	routes.ApplicationRoutes(application)

}
