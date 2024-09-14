import {
  BiCalendarEvent,
  BiChart,
  BiChat,
  BiCloud,
  BiDollar,
  BiImage,
  BiLogoDiscord,
  BiLogoDiscordAlt,
  BiMoney,
  BiMovie,
  BiMoviePlay,
  BiNotepad,
  BiPalette,
  BiRun,
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
    title: "Env Storer",
    domain: "technical",
    slug: "env-storer",
    icon: <BiCloud />,

    description:
      "In today's world, managing environment variables can become chaotic. Build an 'Env Storer' platform that allows users to securely store, manage, and retrieve environment variables for their projects with ease and efficiency.",

    tasks: [
      {
        id: "1",
        title:
          "While we build a lot of our applications in Flutter, you can use any app dev tech stack you want, Kotlin, Java, Swift, Flutter, React Native, etc.",
        section: "suggested",
      },
      {
        id: "2",
        title:
          "Develop a secure app that allows users to store and manage environment variables for different projects.",
        section: "suggested",
      },
      {
        id: "3",
        title:
          "Implement encryption to securely store environment variables, ensuring data privacy.",
        section: "suggested",
      },
      {
        id: "4",
        title:
          "Create a user-friendly interface for adding, updating, and deleting environment variables.",
        section: "suggested",
      },
      {
        id: "5",
        title:
          "Extra points for supporting multiple users with role-based access control (RBAC).",
        section: "bonus",
      },
      {
        id: "6",
        title:
          "Extra points for adding a secure versioning system for environment variables.",
        section: "bonus",
      },
    ],

    additionalNotes:
      "Upload your code to a public GitHub repository. A README.md file with detailed instructions is encouraged. Bonus points for a deployed and well-documented project.",
  },
  {
    title: "Fitness Tracker",
    domain: "technical",
    slug: "fitness-tracker",
    icon: <BiRun />,

    description:
      "Help users take charge of their fitness journey! Build a fitness tracker app that enables users to log their daily workouts, track progress, set goals, and visualize their health data through engaging charts and stats.",

    tasks: [
      {
        id: "1",
        title:
          "While we build a lot of our applications in Flutter, you can use any app dev tech stack you want, Kotlin, Java, Swift, Flutter, React Native, etc.",
        section: "suggested",
      },
      {
        id: "2",
        title:
          "Develop the core functionality for tracking workouts, including logging exercises, duration, and calories burned.",
        section: "suggested",
      },
      {
        id: "3",
        title:
          "Incorporate features for users to set fitness goals and track progress over time.",
        section: "suggested",
      },
      {
        id: "4",
        title:
          "Implement reminders and notifications for users to stay on track with their fitness goals.",
        section: "suggested",
      },
      {
        id: "5",
        title:
          "Extra points for integrating health data from wearable devices or third-party APIs (like Google Fit or Apple Health).",
        section: "bonus",
      },
    ],

    additionalNotes:
      "Please upload the working code to your public GitHub repository. A README.md file with clear documentation is appreciated. Bonus points for a deployed project with full functionality and integration.",
  },
  {
    title: "Events API",
    domain: "technical",
    slug: "events-api",
    icon: <BiCalendarEvent />,
    description:
      "Events are a key part of community life, and your task is to create an API that allows users to manage events. It should enable users to store, read, update, and delete event details like name, location, time, and description. While we use Node.js and Go at SRMKZILLA, feel free to use any backend technology of your choice, such as Ruby on Rails, Django, Flask, or Spring Boot.",
    tasks: [
      {
        id: "1",
        title:
          "Create a well-structured and scalable API for managing events (CRUD operations).",
        section: "suggested",
      },
      {
        id: "2",
        title:
          "Ensure the API follows proper architecture patterns like MVC or MVVM, with clean and modular code.",
        section: "suggested",
      },
      {
        id: "3",
        title:
          "Feel free to use any database and ORM you like (e.g., MongoDB, PostgreSQL).",
        section: "suggested",
      },
      {
        id: "4",
        title: "Bonus points for writing unit and integration tests.",
        section: "bonus",
      },
      {
        id: "5",
        title:
          "APIs must be well documented using tools like Postman, OpenAPI, or any other method.",
        section: "bonus",
      },
      {
        id: "6",
        title:
          "Explain your choice of tech stack in the README for extra consideration.",
        section: "bonus",
      },
    ],
    additionalNotes:
      "Please upload your functional code to a public GitHub repository. A clear README.md with explanations is required. Extra points for a deployed API and thorough documentation.",
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
