package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID            primitive.ObjectID `json:"_id" bson:"_id"`
	RegNo         string             `validate:"required" json:"regNo" bson:"regNo"`
	Name          string             `validate:"required" json:"name"`
	Year          int                `validate:"required" json:"year"`
	Email         string             `validate:"required" json:"email"`
	Gender        string             `validate:"required" json:"gender"`
	Branch        string             `validate:"required" json:"branch"`
	Resume        string             `validate:"required" json:"resume"`
	Contact       string             `validate:"required" json:"contact"`
	CreatedAt     int64              `json:"createdAt" bson:"createdAt"`
	Notifications []Notification     `json:"notifications" bson:"notifications"`
	Application   []Application      `json:"application" default:"[]" bson:"application"`
	Socials       Social             `json:"socials"`
}

type Social struct {
	Github    string `json:"github"`
	LinkedIn  string `json:"linkedIn"`
	Portfolio string `json:"portfolio"`
}

type Activity struct {
	Timestamp time.Time `json:"timestamp" bson:"timestamp"`
	Location  string    `json:"location" bson:"location"`
	Type      string    `json:"type" bson:"type"`
}

type Notification struct {
	Timestamp time.Time `json:"timestamp" bson:"timestamp"`
	Markdown  string    `json:"markdown" bson:"markdown"`
	Text      string    `json:"text" bson:"text"`
}
