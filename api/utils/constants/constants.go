package constants

const GOOGLE_USER_INFO = "https://www.googleapis.com/oauth2/v2/userinfo?access_token="
const SRM_EMAIL_DOMAIN = "@srmist.edu.in"
const GOOGLE_ACCESS_TOKEN_INFO = "https://www.googleapis.com/oauth2/v3/tokeninfo?access_token="

const GOOGLE_RECAPTCHA_VERIFY = "https://www.google.com/recaptcha/api/siteverify"

var Domains = [7]string{"technical", "editorial", "corporate", "events", "gfx", "vfx", "content"}

var Questions = map[string]map[int]string{
	"technical": {
		1: "What is the difference between a process and a thread?",
		2: "What is the difference between a class and an object?",
		3: "What is the difference between a constructor and a method?",
	},
	"editorial": {
		1: "Write a program to print the Fibonacci series.",
		2: "Write a program to check if a number is prime or not.",
		3: "Write a program to check if a number is a palindrome or not.",
	},
	"corporate": {
		1: "What is the difference between a leader and a manager?",
		2: "What is the difference between a team and a group?",
		3: "What is the difference between a boss and a leader?",
	},
	"events": {
		1: "What is the difference between a leader and a manager?",
		2: "What is the difference between a team and a group?",
		3: "What is the difference between a boss and a leader?",
	},
	"gfx": {
		1: "What is the difference between a leader and a manager?",
		2: "What is the difference between a team and a group?",
		3: "What is the difference between a boss and a leader?",
	},
	"vfx": {
		1: "What is the difference between a leader and a manager?",
		2: "What is the difference between a team and a group?",
		3: "What is the difference between a boss and a leader?",
	},
	"content": {
		1: "What is the difference between a leader and a manager?",
		2: "What is the difference between a team and a group?",
		3: "What is the difference between a boss and a leader?",
	},
}
