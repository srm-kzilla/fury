package applicationModel

type Application struct {
	Email  string `validate:"required" json:"email"`
	Name   string `validate:"required" json:"name"`
	RegNo  string `validate:"required" json:"regNo"`
	Status string `json:"status"`
}

type UpdateApplication struct {
	RegNo  string `validate:"required" json:"regNo"`
	Status string `validate:"required" json:"status"`
}
