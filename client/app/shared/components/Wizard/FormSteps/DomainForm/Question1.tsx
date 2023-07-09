import React, { useState, useContext } from "react";
import * as Yup from "yup";

import QuestionComponent from "./QuestionComponent";

const questionArray = [
  {
    domain: "technical",
    question: "What does the term programming mean to you?",
  },
  {
    domain: "content_writing",
    question: `Describe a perfect day in your life. You can think of yourself as the protagonist of a movie. (Something like Michael Scran *wink wink*)`,
  },
  {
    domain: "gfx",
    question: `Rate your creativity on a scale of 1-10 with appropriate justifications. Also, what are your sources of inspiration for your design thinking? (Go ahead, boast your heart out hehe)`,
  },
  {
    domain: "vfx",
    question: `How would you cope-up with the latest tools and software during your tenure? How will you deal with a software mismatch when working with a team (for example: After Effects and Premier Pro)? What is your go-to tool for making a video?`,
  },
  {
    domain: "corporate",
    question: `What according to you is the work of the corporate domain & how do you think you would be able to contribute to the club and this domain?`,
  },
  {
    domain: "events",
    question: `Exiting the realm of "everything online" just recently, what is your opinion on the mode of conducting events? What according to you makes an event a success?`,
  },
];

const Question1 = {
  component: () => (
    <QuestionComponent questionArray={questionArray} name="question_1" />
  ),
  validationSchema: {
    question_1: Yup.string().required("Required"),
  },
  initialValues: {
    question_1: "",
  },
};

export default Question1;
