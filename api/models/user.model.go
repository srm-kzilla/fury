package models

type User struct {
	Email       string                         `validate:"required" json:"email"`
	Name        string                         `validate:"required" json:"name"`
	RegNo       string                         `validate:"required" json:"regNo"`
	createdAt   string                         `json:"createdAt"`
	Application []Application `validjson:"application"`
}
