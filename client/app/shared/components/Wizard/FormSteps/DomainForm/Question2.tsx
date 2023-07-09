import React from "react";
import * as Yup from "yup";

import QuestionComponent from "./QuestionComponent";

const questionArray = [
  {
    domain: "technical",
    question:
      "What is the latest technical stuff that you learnt? Tell us in depth about it and how would you explain it to a five year old kid.",
  },
  {
    domain: "content_writing",
    question: `How would you analyze the performance of another content writer? What factors would you take into consideration?`,
  },
  {
    domain: "gfx",
    question: `Did you see our event poster for Multiverse of IoT, an Internet of Things workshop? ? If you haven't, swiftly visit our Instagram page and check it out (<a href="https://www.instagram.com/p/Cd8b7GMPZ_Y/" target="_blank">https://www.instagram.com/p/Cd8b7GMPZ_Y/</a>). We hope you liked it but can you make it better? Suggest edits to our Multiverse of IoT poster and give it your awesome touch.
    <br />
    <br />
    OR 
    <br />
    <br />
    <h3 style='color:#ff644e; margin:0;'>Photography</h3> 
    <br />
    Explain the rule of thirds
    `,
  },
  {
    domain: "vfx",
    question: `If you are tasked with making a promo video for a product launch, what would be your thought process behind it? What are the details that would be taken into account for the video?`,
  },
  {
    domain: "corporate",
    question: `If you have any, please mention any prior experience related to this domain’s scope.`,
  },
  {
    domain: "events",
    question: `During an event, there is a group of people that are trying to disrupt the flow and create a ruckus. How will you handle such an issue?`,
  },
];

const Question2 = {
  component: () => (
    <QuestionComponent questionArray={questionArray} name="question_2" />
  ),
  validationSchema: {
    question_2: Yup.string().required("Required"),
  },
  initialValues: {
    question_2: "",
  },
};

export default Question2;
