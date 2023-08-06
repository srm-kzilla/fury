package main

import (
	"os"
	"time"

	"github.com/charmbracelet/log"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/helmet"
	"github.com/gofiber/fiber/v2/middleware/limiter"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/srm-kzilla/Recruitments/api"
	"github.com/srm-kzilla/Recruitments/api/utils"
)

func setupRoutes(app *fiber.App) {
	app.Get("/", utils.RecordActivity)
	app.Get("/health", utils.RootFunction)
	api.SetupApp(app)
}

func main() {
	app := fiber.New()

	app.Use(cors.New())

	app.Use(helmet.New())

	app.Use(recover.New())

	app.Use(limiter.New(limiter.Config{
		Max:        600,
		Expiration: time.Minute,
	}))

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	setupRoutes(app)

	log.Infof(`
	################################################
	🛡️  Server listening on port: %s 🛡️
	################################################
  `, port)

	app.Listen(":" + port)
}
