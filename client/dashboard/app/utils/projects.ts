export const projects = [
  {
    title: "KzForms",
    domain: "technicalp",
    slug: "kzforms",
    description: "At SRMKZILLA, we never run out of forms to create and fill. For example, you are currently filling a form for recruitment. Your task will be to create a form and POST that data to a dummy API.",
    tasks: [
      {
        id: "7",
        title: "You can use any frontend framework of your choice(React, Angular, Svelte, and Vue are some of the popular choices) for this task,",
        section: "suggested"
      },
      {
        id: "2",
        title: "A form needs to be created with a clean UI(should be unique) to accept a student's Registration number, GitHub profile, SRM IST email Id, Name and any other fields you may deem necessary.",
        section: "suggested"
      },
      {
        id: "3",
        title: "You may use a dummy API to post the form data or log the details to the console. You may then redirect the user to another page where you can show them the form data they filled.",
        section: "suggested"
      },
      {
        id: "4",
        title: "Using TypeScript is not mandatory but does have some extra points.",
        section: "bonus"
      },
      {
        id: "5",
        title: "Extra points for submitting a deployed URL.",
        section: "bonus"
      },
      {
        id: "6",
        title: "You must have proper validation for the fields and a proper error logging mechanism to let the user know about their mistakes.(Yup, Joi, and Zod are some of most widely used validation libraries). The better the User experience, higher the points you score.",
        section: "additionalNotes"
      }
    ],
    additionalNotes: "You need to upload working code in you GitHub repository. A README.md file with proper explanations is appreciated."
  },
  {
    title: "Employee Management API",
    domain: "technicalp",
    slug: "empi",
    description: "SRMKZILLA has a lot of members. Soon, we'll have a lot of new members(hopefully you!) who will join the family. You have to create a API which will help us manage the entire team's data.",
    tasks: [
      {
        id: "7",
        title: "This project will test you backend development skills.",
        section: "suggested"
      },
      {
        id: "1",
        title: "Create an API in a language of your choice to perform basic CRUD operations on employee data.",
        section: "suggested"
      },
      {
        id: "2",
        title: "You may use any database you want to, but make sure these fields are there: Unique ID, Name, employee email, age, gender and phone number.",
        section: "suggested"
      },
      {
        id: "3",
        title: "The backend should have proper validation for the fields mentioned above and error throwing as well as a neat code structure.",
        section: "suggested"
      },
      {
        id: "4",
        title: "Secure your application with Recaptcha to prevent DDoS attacks.",
        section: "bonus"
      },
      {
        id: "5",
        title: "Using any statically type language carries extra points. Go, Rust, Java, and TypeScript are some of the statically typed languages.",
        section: "bonus"
      },
      {
        id: "6",
        title: "Adding a section in the README.md file where you explain the stack you used and its advantages and disadvantages over other alternative stack.",
        section: "bonus"
      }
    ],
    additionalNotes: "You need to deploy your application over Heroku or some other alternative and add the link to your Readme. A project without a deployment link in the readme will attract negative scoring."
  },
]
