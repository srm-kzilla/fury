import React from "react";
import * as Yup from "yup";

import QuestionComponent from "./QuestionComponent";

const questionArray = [
  {
    domain: "technical",
    question:
      "What are the technologies (in any field of your choice) you are interested to work with? Write as much as you know about them, their future potential and how you would explain that technology to a 5 year old kid.",
  },
  {
    domain: "content_writing",
    question: `How comfortable are you with working under pressure? Elaborate a situation where you have kept a level-head during a crisis situation (no pressure).`,
  },
  {
    domain: "gfx",
    question: `How do you handle criticisms and feedback? Our team works with a lot of redos and changes on your draft to put out the best. So how would you manage?`,
  },
  {
    domain: "vfx",
    question: `What kind of social media content excites Millennials/ Gen Z? How can a technical club-like SRMKZILLA implement this kind of content while staying true to its technical roots?`,
  },
  {
    domain: "corporate",
    question: `How familiar are you with current trends on social media and how do you stay updated?`,
  },
  {
    domain: "events",
    question: `Consider a hypothetical situation where the club has planned to present itself to the new batch of freshers. 
    Now you realize that all halls are completely booked so you have no proper venue to conduct the club’s upcoming event that the team had been working on for weeks. 
    You have about 6 days left before the freshers arrive on the campus. What is your contingency plan to promote the club amongst the freshers? 
    How do you plan on making the club seen amongst a batch of completely new students?`,
  },
];

const Question6 = {
  component: () => (
    <QuestionComponent questionArray={questionArray} name="question_6" />
  ),
  validationSchema: {
    question_6: Yup.string().required("Required"),
  },
  initialValues: {
    question_6: "",
  },
};

export default Question6;
