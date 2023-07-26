import React from "react";
import * as Yup from "yup";

import QuestionComponent from "./QuestionComponent";

const questionArray = [
  {
    domain: "technical",
    question:
      "Explain Object Oriented Programming. Do you prefer using OOP, why or why not?",
  },
  {
    domain: "content_writing",
    question: `What, according to you, is your best quality? How can that quality benefit the club? Explain using a scenario, we would love to hear about all the good stuff.`,
  },
  {
    domain: "gfx",
    question: `What, according to you, is your best quality? How can that quality benefit the club? Explain using a scenario, we would love to hear about all the good stuff.`,
  },
  {
    domain: "vfx",
    question: `Did you see our Multiverse of IoT announcement video? If you haven't, swiftly visit our Instagram page and check it out (<a href="https://www.instagram.com/p/Cdz20_ADvwS/?utm_medium=share_sheet" target="_blank">https://www.instagram.com/p/Cdz20_ADvwS</a>). We hope you liked it but can you make it better?<br/>Suggest edits to our video and give it your awesome touch.`,
  },
  {
    domain: "corporate",
    question: `What is sponsorship according to you?`,
  },
  {
    domain: "events",
    question: `You have been given a box, a pair of sunglasses, and 12 ping pong balls. Come up with a game that could be fun, quick, and quirky in order to keep your audience engaged!`,
  },
];

const Question3 = {
  component: () => (
    <QuestionComponent questionArray={questionArray} name="question_3" />
  ),
  validationSchema: {
    question_3: Yup.string().required("Required"),
  },
  initialValues: {
    question_3: "",
  },
};

export default Question3;
