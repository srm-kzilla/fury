package main

import (
	"log"
	"os"
	"time"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/helmet"
	"github.com/gofiber/fiber/v2/middleware/limiter"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
	"github.com/srm-kzilla/Recruitments/api"
	"github.com/srm-kzilla/Recruitments/utils"
)

var startTime time.Time

func setupRoutes(app *fiber.App) {
	app.Get("/", utils.RootFunction)
	app.Get("/health", utils.HealthCheck)
	api.SetupApp(app)
}

func init() {
	startTime = time.Now()
	err := godotenv.Load()
	if err != nil {
		log.Panicln(err)
	}
	log.Println("Loaded .env file")
}

func main() {
	app := fiber.New()

	app.Use(logger.New())

	app.Use(cors.New())

	app.Use(helmet.New())

	app.Use(limiter.New(limiter.Config{
		Max:        1000,
		Expiration: time.Minute,
	}))

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	setupRoutes(app)

	log.Printf(`
	################################################
	🛡️  Server listening on port: %s 🛡️
	################################################
  `, port)

	app.Listen(":" + port)
}
