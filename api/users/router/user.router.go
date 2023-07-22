package userRouter

import (
	"github.com/gofiber/fiber/v2"
	userController "github.com/srm-kzilla/Recruitments/api/users/controller"
)

func UserRoutes(router fiber.Router){
	router.Get("/:regNo", userController.GetUser)
	router.Put("/", userController.UpdateUser)
}