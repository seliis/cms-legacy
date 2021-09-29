package server

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"

	"github.com/gofiber/fiber/v2"
)

func getMusicData(str string) map[string]interface{} {
	// Open JSON File
	f, err := os.Open(str)
	defer f.Close()

	// Is Error?
	if err != nil {
		fmt.Println(err)
		return nil
	}

	// Read File
	r, _ := ioutil.ReadAll(f)

	// Unmarshalling
	var d map[string]interface{}
	json.Unmarshal(r, &d)

	return d
}

func Distributor(app *fiber.App) {
	// Get JSON Data
	m := getMusicData("musicData.json")

	// Process Fetch Request
	app.Get("md/:type?", func(c *fiber.Ctx) error {
		return c.JSON(m[c.Params("type")])
	})
}
