package applicationModel

type Application struct {
	Email  string `json:"email"`
	Name   string `json:"name"`
	RegNo  string `json:"regNo"`
	Status string `json:"status"`
}

type UpdateApplication struct {
	RegNo  string `json:"regNo"`
	Status string `json:"status"`
}
