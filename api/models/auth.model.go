package models

import "time"

type Auth struct {
	AccessToken  string    `json:"access_token"`
	TokenType    string    `json:"token_type"`
	ExpiresIn    time.Time `json:"expires_in"`
	RefreshToken string    `json:"refresh_token,omitempty"`
	UserData     UserData  `json:"user"`
}

type UserData struct {
	Id         string `json:"id"`
	Name       string `json:"name"`
	RegNo      string `json:"reg_no"`
	Email      string `json:"email"`
	GivenName  string `json:"given_name"`
	FamilyName string `json:"family_name"`
	Year       int    `json:"year"`
	Picture    string `json:"picture"`
}
