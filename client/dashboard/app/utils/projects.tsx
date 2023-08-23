import {
  BiChat,
  BiDollar,
  BiImage,
  BiLogoDiscord,
  BiLogoDiscordAlt,
  BiMoney,
  BiMovie,
  BiMoviePlay,
  BiNotepad,
  BiPalette,
  BiSolidBank,
  BiSolidContact,
  BiUpload,
} from "react-icons/bi";

export const projects = [
  {
    title: "Meme Gallery",
    domain: "technicalp",
    slug: "meme-gallery",
    icon: <BiImage />,
    description:
      "Welcome to the exciting world of meme-sharing at SRMKZILLA! In this task, your creative prowess will shine as you design and implement a user-friendly, Meme Gallery, submission platform. Your mission is to provide meme enthusiasts with a seamless way to contribute their humorous masterpieces to the digital realm.",
    tasks: [
      {
        id: "7",
        title:
          "You can use any frontend framework of your choice (React, Angular, Svelte, and Vue are some of the popular choices) for this task",
        section: "suggested",
      },
      {
        id: "2",
        title:
          "Design a sleek and modern UI for the Meme Gallery submission form, giving users an enjoyable interaction.",
        section: "suggested",
      },
      {
        id: "3",
        title:
          "Using TypeScript is not mandatory but does have some extra points.",
        section: "suggested",
      },
      {
        id: "4",
        title: "Extra points for submitting a deployed URL.",
        section: "bonus",
      },
      {
        id: "6",
        title: "Responsive design is recommended and performance is a plus.",
        section: "bonus",
      },
    ],
    additionalNotes:
      "You need to upload working code in your public GitHub repository. A README.md file with proper explanations is appreciated. There are brownie points for deployed and well documented projects.",
  },
  {
    title: "KzForms",
    domain: "technicalp",
    slug: "kzforms",
    icon: <BiNotepad />,
    description:
      "At SRMKZILLA, we never run out of forms to create and fill. For example, you are currently filling a form for recruitment. Your task will be to create a form and POST that data to a dummy API.",
    tasks: [
      {
        id: "7",
        title:
          "You can use any frontend framework of your choice(React, Angular, Svelte, and Vue are some of the popular choices) for this task",
        section: "suggested",
      },
      {
        id: "1",
        title:
          "A form needs to be created with a clean UI (should be unique) to accept a student's Registration number, GitHub profile, SRM IST Email Id, Name, and any other fields you may deem necessary.",
        section: "suggested",
      },
      {
        id: "2",
        title:
          "You may use a dummy API to post the form data or log the details to the console. You may then redirect the user to another page where you can show them the form data they filled out.",
        section: "suggested",
      },
      {
        id: "3",
        title:
          "Using TypeScript is not mandatory but does have some extra points.",
        section: "bonus",
      },
      {
        id: "4",
        title: "Extra points for submitting a deployed URL.",
        section: "bonus",
      },
      {
        id: "5",
        title:
          "You must have proper validation for the fields and a proper error logging mechanism to let the user know about their mistakes. (Yup, Joi and Zod are some of the most widely used validation libraries). The better the User experience, the higher the points you score.",
        section: "bonus",
      },
    ],
    additionalNotes:
      "You need to upload working code in your public GitHub repository. A README.md file with proper explanations is appreciated. There are brownie points for deployed and well documented projects.",
  },
  {
    title: "Expense Tracker",
    domain: "technicalp",
    slug: "expense-tracker",
    icon: <BiDollar />,
    description:
      "Living in SRM can be expensive, from canteen to Java, from Potheri to Pondy, it costs a lot of money to survive. Your task is to create an expense tracker that will help students keep track of their expenses so that they don't have to live on egg puffs and lime during the month end.",
    tasks: [
      {
        id: "7",
        title:
          "While we build a lot of our applications in Flutter, you can use any app dev tech stack you want, Kotlin, Java, Swift, Flutter, React Native, etc.",
        section: "suggested",
      },
      {
        id: "1",
        title:
          "Clean UI is a must. You can use any UI framework of your choice.",
        section: "suggested",
      },
      {
        id: "2",
        title: "A compiled version of the app must be available for download.",
        section: "suggested",
      },
      {
        id: "3",
        title: "Using APIs or something like Firebase, Supabase is a plus.",
        section: "bonus",
      },
      {
        id: "4",
        title: "UI is good, but performance is better.",
        section: "bonus",
      },
    ],
    additionalNotes:
      "You need to upload working code in your public GitHub repository. A README.md file with proper explanations is appreciated. There are brownie points for deployed and well documented projects.",
  },
  {
    title: "Contact Manager",
    domain: "technicalp",
    slug: "contact-manager",
    icon: <BiSolidContact />,
    description:
      "Managing contacts efficiently is essential for staying connected. Your task is to create a contact manager application that allows users to organize and access their contacts easily, ensuring they never lose touch with their important connections.",
    tasks: [
      {
        id: "7",
        title:
          "While we use Flutter, feel free to choose any app development technology that suits your expertise: Kotlin, Java, Swift, Flutter, React Native, etc.",
        section: "suggested",
      },
      {
        id: "1",
        title:
          "A clean and intuitive user interface is crucial for a great user experience. Utilize any UI framework of your preference.",
        section: "suggested",
      },
      {
        id: "2",
        title:
          "Make sure a compiled version of the app is available for download to showcase your project.",
        section: "suggested",
      },
      {
        id: "3",
        title:
          "Implementing APIs or utilizing platforms like Firebase or Supabase to enhance functionality is a valuable addition.",
        section: "bonus",
      },
      {
        id: "4",
        title:
          "Prioritize both appealing UI and excellent performance for a well-rounded project.",
        section: "bonus",
      },
    ],
    additionalNotes:
      "Ensure that you share functional code on a public GitHub repository. Create a comprehensive README.md file with clear explanations. If you deploy the application and provide thorough documentation, you'll earn extra points.",
  },
  {
    title: "TV show and Movie API",
    domain: "technicalp",
    slug: "movie-api",
    icon: <BiMoviePlay />,
    description:
      "We all love watching movies and TV shows. Your task is to create an API that will allow users to store, read, update and delete movie and tv show data. ",
    tasks: [
      {
        id: "7",
        title:
          "While we use Node.js and Go lang at SRMKZILLA, feel free to use any backend technology of your choice. Ruby on rails, Django, Flask, Springboot etc.",
        section: "suggested",
      },
      {
        id: "1",
        title:
          "The code must be robust, clean to read and scalable. Single file code will not be accepted. Follow a proper architecture like MVC, MVVM, etc.",
        section: "suggested",
      },
      {
        id: "2",
        title:
          "While we use MongoDB and Postgresql, you can choose any database and ORM you like.",
        section: "suggested",
      },
      {
        id: "3",
        title:
          "Writing tests is not mandatory, but if done, it will earn you extra points.",
        section: "bonus",
      },
      {
        id: "3",
        title:
          "Projects which document proper reasons for picking a tech stack will have a better chance of getting selected.",
        section: "bonus",
      },
      {
        id: "4",
        title:
          "APIs must be well docuemnted(postman, openapi, .http files or any other creative way you can find) and easy to use.",
        section: "bonus",
      },
    ],
    additionalNotes:
      "Ensure that you share functional code on a public GitHub repository. Create a comprehensive README.md file with clear explanations. If you deploy the application and provide thorough documentation, you'll earn extra points.",
  },
  {
    title: "Discord Role Assignment Bot",
    domain: "technicalp",
    slug: "discord-role-bot",
    icon: <BiLogoDiscordAlt />,
    description:
      "In the dynamic world of Discord servers, managing role assignments for users is essential. Your task is to create a versatile Discord bot that will enable users to assign and manage roles within a server seamlessly.",
    tasks: [
      {
        id: "7",
        title:
          "Although we commonly use TypeScript with libraries like discord.js, you're welcome to choose any backend technology suitable for building a Discord bot.",
        section: "suggested",
      },
      {
        id: "1",
        title:
          "Your code must be robust, well-structured, and scalable. Follow a suitable architectural pattern such as MVC, MVVM, etc., and avoid monolithic single-file code.",
        section: "suggested",
      },
      {
        id: "2",
        title:
          "While the main task is a role bot, you can add other features to make your bot more versatile and useful.",
        section: "suggested",
      },
      {
        id: "3",
        title:
          "Though not obligatory, implementing test cases will earn you extra points and showcase your commitment to code quality.",
        section: "bonus",
      },
      {
        id: "4",
        title:
          "Projects that provide well-documented reasons for the chosen tech stack and architecture will have an advantage during selection.",
        section: "bonus",
      },
    ],
    additionalNotes:
      "Share your functional code via a public GitHub repository and craft a comprehensive README.md file that provides clear instructions. If you deploy the bot and offer comprehensive documentation, you'll receive extra recognition.",
  },
  {
    title: "CLI Chat with Websockets",
    domain: "technicalp",
    slug: "cli-chat-websockets",
    icon: <BiChat />,
    description:
      "Real-time communication is essential in the digital era. Your task is to develop a Command Line Interface (CLI) chat application using Websockets that allows users to have interactive conversations seamlessly.",
    tasks: [
      {
        id: "7",
        title:
          "You're encouraged to choose any suitable backend technology for building the CLI chat application with Websockets. Popular choices include Node.js, Python, or Go lang.",
        section: "suggested",
      },
      {
        id: "1",
        title:
          "Code cleanliness and maintainability are vital. Follow a structured architecture like MVC, MVVM, etc., and avoid monolithic single-file code.",
        section: "suggested",
      },
      {
        id: "2",
        title:
          "Although WebSocket libraries are commonly used, feel free to select any technology stack that aligns with your expertise for implementing Websockets.",
        section: "suggested",
      },
      {
        id: "3",
        title:
          "While not mandatory, incorporating test cases into your application will be highly valued and highlight your commitment to code quality. Database integration is also a plus.",
        section: "bonus",
      },
      {
        id: "4",
        title:
          "Providing clear documentation on the chosen tech stack and architectural decisions will enhance the overall quality of your project.",
        section: "bonus",
      },
      {
        id: "5",
        title:
          "Ensure your CLI chat application is well-documented for usage, setup, and any additional functionalities through a README.md file or similar method.",
        section: "bonus",
      },
    ],
    additionalNotes:
      "Share your functional code through a public GitHub repository and create a comprehensive README.md file that offers clear instructions. If you deploy the application and provide thorough documentation, your project will receive extra recognition.",
  },
];
