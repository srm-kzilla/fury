package models

import "time"

type Application struct {
	Status    string     `json:"status"`
	Domain    string     `validate:"required" json:"domain"`
	AppliedAt string     `json:"appliedAt" bson:"appliedAt"`
	UpdatedAt time.Time  `json:"updatedAt" bson:"updatedAt"`
	CreatedAt time.Time  `json:"createdAt" bson:"createdAt"`
	Questions []Question `json:"questions"`
}

type Question struct {
	QuestionNumber int    `validate:"required" json:"questionNumber"`
	Answer         string `validate:"required" json:"answer"`
}

type UpdateApplication struct {
	RegNo  string `validate:"required" json:"regNo" bson:"regNo"`
	Status string `validate:"required" json:"status"`
}

type ApplicationBody struct {
	RegNo       string      `validate:"required" json:"regNo" bson:"regNo"`
	Type        string      `validate:"required" json:"type"`
	Application Application `json:"application"`
}
