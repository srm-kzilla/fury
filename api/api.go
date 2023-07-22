package api

import (
	"github.com/gofiber/fiber/v2"
	adminRouter "github.com/srm-kzilla/Recruitments/api/admin/router"
	userRouter "github.com/srm-kzilla/Recruitments/api/users/router"
	"github.com/srm-kzilla/Recruitments/utils"
)

func SetupApp(app *fiber.App) {

	api := app.Group("/api/v1/")
	api.Get("/", utils.HandleRoot)

	// /api/v1/admin
	admin := api.Group("/admin/")
	adminRouter.AdminRoutes(admin)

	// /api/v1/users
	user := api.Group("/users/")
	userRouter.UserRoutes(user)

}
