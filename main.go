package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Panicln(err)
	}
}

func main() {
	app := fiber.New()

	app.Use(cors.New())
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("SRMKZILLA Recruitments-23 server running...")
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	log.Printf(`
	################################################
	🛡️  Server listening on port: %s 🛡️
	################################################
  `, port)

	app.Listen(":" + port)
}
