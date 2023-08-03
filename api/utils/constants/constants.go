package constants

const GoogleUserInfoApi = "https://www.googleapis.com/oauth2/v2/userinfo?access_token="
const SrmEmailDomain = "@srmist.edu.in"
const GoogleAccessTokenInfoApi = "https://www.googleapis.com/oauth2/v3/tokeninfo?access_token="

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
}
