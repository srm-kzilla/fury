package mailer

import (
	"bytes"
	"html/template"
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/ses"
	"github.com/charmbracelet/log"
)

var TEMPLATES = TemplateNames{
	EmailTemplate: "emailTemplate.html",
}

func getHTMLTemplate(templateName string, embedData interface{}) string {
	var templateBuffer bytes.Buffer

	htmlData, err := os.ReadFile("./templates/" + templateName)
	if err != nil {
		log.Print("Error Reading the file")
	}

	htmlTemplate := template.Must(template.New("email.html").Parse(string(htmlData)))

	error := htmlTemplate.ExecuteTemplate(&templateBuffer, "email.html", embedData)
	if error != nil {
		log.Error("Error: ", error)
		return ""
	}
	return templateBuffer.String()
}

func GenerateSESTemplate(input SESInput) (template *ses.SendEmailInput) {

	html := getHTMLTemplate(input.TemplateName, input.EmbedData)
	title := input.Subject
	template = &ses.SendEmailInput{
		Destination: &ses.Destination{
			CcAddresses: []*string{},
			ToAddresses: []*string{
				aws.String(input.RecieverEmail),
			},
		},
		Message: &ses.Message{
			Body: &ses.Body{
				Html: &ses.Content{
					Charset: aws.String("utf-8"),
					Data:    aws.String(html),
				},
			},
			Subject: &ses.Content{
				Charset: aws.String("utf-8"),
				Data:    aws.String(title),
			},
		},
		Source: aws.String("SRMKZILLA <" + input.SenderEmail + ">"),
	}
	return
}
