package usersModel

import applicationModel "github.com/srm-kzilla/Recruitments/api/applications/model"

type User struct {
	Email       string                         `validate:"required" json:"email"`
	Name        string                         `validate:"required" json:"name"`
	RegNo       string                         `validate:"required" json:"regNo"`
	createdAt   string                         `json:"createdAt"`
	Application []applicationModel.Application `validjson:"application"`
}
