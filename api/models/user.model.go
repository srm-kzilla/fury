package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID            primitive.ObjectID `json:"_id" bson:"_id"`
	RegNo         string             `json:"regNo" bson:"regNo"`
	Name          string             `json:"name" bson:"name"`
	Year          int                `json:"year" bson:"year"`
	Email         string             `json:"email" bson:"email"`
	Gender        string             `validate:"required" json:"gender"`
	Branch        string             `validate:"required" json:"branch" bson:"branch"`
	Resume        string             `json:"resume" bson:"resume"`
	Contact       string             `validate:"required" json:"contact" bson:"contact"`
	CreatedAt     int64              `json:"createdAt" bson:"createdAt"`
	Notifications []Notification     `json:"notifications" default:"[]" bson:"notifications"`
	Application   []Application      `json:"application" default:"[]" bson:"application"`
	Socials       Social             `json:"socials" bson:"socials"`
}

type Social struct {
	Github    string `json:"github"`
	LinkedIn  string `json:"linkedIn"`
	Portfolio string `json:"portfolio"`
}

type Activity struct {
	Timestamp time.Time          `json:"timestamp" bson:"timestamp"`
	Location  string             `json:"location" bson:"location"`
	Type      string             `json:"type" bson:"type"`
	UserId    primitive.ObjectID `json:"user_id" bson:"user_id"`
}

type Notification struct {
	Timestamp time.Time `json:"timestamp" bson:"timestamp"`
	Markdown  string    `json:"markdown" bson:"markdown"`
	Text      string    `json:"text" bson:"text"`
}

type Team struct {
	Name    string `json:"name"`
	Role    string `json:"role"`
	Comment string `json:"comment"`
	URL     string `json:"url"`
}
