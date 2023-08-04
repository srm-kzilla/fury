package models

import "time"

type Evaluators struct {
	Email  string    `json:"email"`
	Domain    string    `json:"domain"`
	Password string    `json:"password"`
	CreatedAt time.Time `json:"createdAt" bson:"createdAt"`
	IsActive bool      `json:"isActive" bson:"isActive"`
}

