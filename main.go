package main

import (
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	app.Static("/", "./build/")
	app.Static("*", "./build/index.html")
	app.Listen(":3000")
}
