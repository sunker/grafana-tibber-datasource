package tibber

import (
	"encoding/json"
	"fmt"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
)

type TibberDataSourceSettings struct {
	Config     backend.DataSourceInstanceSettings
	QueryType  string `json:"queryType"`
	Resolution string `json:"resolution"`
	APIKey     string `json:"-"`
}

// LoadSettings gets the relevant settings from the plugin context
func loadSettings(settings backend.DataSourceInstanceSettings) (*TibberDataSourceSettings, error) {
	model := &TibberDataSourceSettings{}

	err := json.Unmarshal(settings.JSONData, &model)
	if err != nil {
		return nil, fmt.Errorf("error reading settings: %s", err.Error())
	}

	model.APIKey = settings.DecryptedSecureJSONData["apiKey"]

	return model, nil
}
