package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID          primitive.ObjectID `json:"_id" bson:"_id"`
	RegNo       string             `validate:"required" json:"regNo" bson:"regNo"`
	Name        string             `validate:"required" json:"name"`
	Year        int                `validate:"required" json:"year"`
	Email       string             `validate:"required" json:"email"`
	Gender      string             `validate:"required" json:"gender"`
	Contact     string             `validate:"required" json:"contact"`
	CreatedAt   int64              `json:"createdAt" bson:"createdAt"`
	Application []Application      `json:"application" default:"[]" bson:"application"`
	Socials     Social             `json:"socials"`
}

type Social struct {
	Github    string `json:"github"`
	LinkedIn  string `json:"linkedIn"`
	Portfolio string `json:"portfolio"`
}
