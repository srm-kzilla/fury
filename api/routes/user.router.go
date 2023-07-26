package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
)

func UserRoutes(router fiber.Router){
	router.Get("/:regNo", controllers.GetUser)
	router.Put("/", controllers.UpdateUser)
}