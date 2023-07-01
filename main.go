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
	"github.com/srm-kzilla/recruitment-portal-2023/api"
)

var startTime time.Time

func rootFunction(c *fiber.Ctx) error {
	return c.JSON(map[string]string{"message": "SRMKZILLA Recruitments-23 server running"})
}

func healthCheck(c *fiber.Ctx) error {
	return c.JSON(map[string]string{"message": "OK", "uptime": time.Since(startTime).String()})
}

func setupRoutes(app *fiber.App) {
	app.Get("/", rootFunction)
	app.Get("/health", healthCheck)
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

	// Creating a logger middleware
	app.Use(logger.New())

	//setting up cors
	app.Use(cors.New())

	//setting up helmet
	app.Use(helmet.New())

	//setting up a rate limiter for max 100 requests/min per user
	app.Use(limiter.New(limiter.Config{
		Max:        100,
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
