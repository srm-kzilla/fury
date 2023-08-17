package mailer

type MailEmbed struct {
	Header      string `json:"Header"`
	Salutations string `json:"Salutations"`
	Body        string `json:"Body"`
}

type TemplateNames struct {
	EmailTemplate string
}

type SESInput struct {
	TemplateName  string      `json:"templateName" bson:"templateName" validate:"required"`
	Subject       string      `json:"subject" bson:"subject" validate:"required"`
	RecieverEmail string      `json:"recieverEmail" bson:"recieverEmail" validate:"required"`
	SenderEmail   string      `json:"senderEmail" bson:"senderEmail" validate:"required"`
	EmbedData     interface{} `json:"embedData" bson:"embedData" validate:"required"`
}
