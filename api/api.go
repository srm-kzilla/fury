package api

import (
	"github.com/gofiber/fiber/v2"
)

func handleRoot(c *fiber.Ctx) error {
	return c.JSON(map[string]string{"message": "SRMKZILLA Recruitments API"})
}
func SetupApp(app *fiber.App) {

	api := app.Group("/api")
	api.Get("/", handleRoot)

}
