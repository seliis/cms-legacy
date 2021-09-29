package main

import (
	"cms/server"

	"github.com/gofiber/fiber/v2"
)

func main() {
	// Fiber Application
	app := fiber.New()

	// Server Package
	server.Distributor(app)

	// Designate Static Assets
	app.Static("/", "./build/")
	app.Static("*", "./build/index.html")

	// Initiate Server
	app.Listen(":3000")
}
