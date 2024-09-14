import {
  BiChart,
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
  BiTime,
  BiUpload,
} from "react-icons/bi";

export const projects = [
  {
    title: "Data Dashboard",
    domain: "technical",
    slug: "real-time-dashboard",
    icon: <BiChart />,
    description:
      "Transform any data into dynamic insights! Create a real-time dashboard using React.js and Chart.js to visualize diverse datasets like movies, books, weather, or any other open API data. Make complex information engaging and easy to understand with interactive features and creative design.",
    tasks: [
      {
        id: "1",
        title:
          "You can use any frontend framework of your choice (React, Angular, Svelte, and Vue are some of the popular choices) for this task",
        section: "suggested",
      },
      {
        id: "2",
        title:
          "Integrate open APIs for diverse data sources and showcase creative applications.",
        section: "suggested",
      },
      {
        id: "3",
        title:
          "Include interactive features such as filters, sorting, and dynamic updates.",
        section: "suggested",
      },
      {
        id: "4",
        title: "Extra points for submitting a deployed URL.",
        section: "bonus",
      },
      {
        id: "5",
        title:
          "Brownie points for responsive and creative design and performance optimization.",
        section: "bonus",
      },
    ],
    additionalNotes:
      "Please upload your code to a public GitHub repository. A detailed README.md is encouraged. Bonus points for a deployed project with thorough documentation.",
  },
  {
    title: "Digital Time Capsule",
    domain: "technical",
    slug: "digital-time-capsule",
    icon: <BiTime />,

    description:
      "Preserve memories or set future goals with a digital time capsule! Build a platform where users can create time capsules filled with photos, videos, letters, and other digital memorabilia. These capsules can be locked and scheduled to open on a specific future date, offering a unique way to capture and revisit moments in time.",

    tasks: [
      {
        id: "1",
        title:
          "You can use any frontend framework of your choice (React, Angular, Svelte, and Vue are some of the popular choices) for this task",
        section: "suggested",
      },
      {
        id: "2",
        title:
          "Implement features for uploading and managing digital content such as photos, videos, and letters.",
        section: "suggested",
      },
      {
        id: "3",
        title:
          "Create a user-friendly interface for setting future unlock dates and viewing time capsules.",
        section: "suggested",
      },
      {
        id: "4",
        title:
          "Incorporate security measures to ensure that time capsules are only accessible when intended.",
        section: "suggested",
      },
      {
        id: "5",
        title:
          "Extra points for implementing notifications or reminders for upcoming unlock dates.",
        section: "bonus",
      },
      {
        id: "6",
        title:
          "Extra points for responsive design and a polished user experience.",
        section: "bonus",
      },
    ],

    additionalNotes:
      "Upload your project code to a public GitHub repository. A well-documented README.md is appreciated. Bonus points for a deployed project and additional features such as notifications.",
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
