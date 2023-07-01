package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/helmet"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
)

func rootFunction(c *fiber.Ctx) error {
	return c.JSON(map[string]string{"message": "SRMKZILLA Recruitments-23 server running"})
}

func setupRoutes(app *fiber.App) {
	app.Get("/", rootFunction)
}

func init() {
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
