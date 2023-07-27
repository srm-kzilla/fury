package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/srm-kzilla/Recruitments/api/controllers"
)

func ApplicationRoutes(router fiber.Router) {
	router.Post("/", controllers.CreateApplication)
	router.Put("/:regNo", controllers.UpdateDraft)

}
