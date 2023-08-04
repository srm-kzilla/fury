package models

type Evaluators struct {
	Email  string    `json:"email"`
	Domain    string    `json:"domain"`
	Password string    `json:"password"`
	UserData     UserData  `json:"user"`
}

