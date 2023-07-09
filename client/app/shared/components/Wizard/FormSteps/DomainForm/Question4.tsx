import React from "react";
import * as Yup from "yup";

import QuestionComponent from "./QuestionComponent";

const questionArray = [
  {
    domain: "technical",
    question: "Which is your favourite programming language and why?",
  },
  {
    domain: "content_writing",
    question: `Take a look at the details of this imaginary event of SRMKZILLA. Frame a caption to announce the event for an Instagram post.<br/>
    Word limit: 120 words<br/>
    Event details:<br/>
    - Event: Roadmap to competitive coding<br/>
    - Speaker: Mr. Raj, Software Developer at Amazon<br/>
    - Date and Time: 28th September at 5 pm<br/>
    - Platform: Discord<br/>
    - Registration: Link in bio<br/>
    Quick Tip: Remember to make the caption fun and try to include pop culture references.    
    `,
  },
  {
    domain: "gfx",
    question: `If you are tasked with designing an Instagram series on Neural Networks. What would be your thought process behind it? What are the details that you would take into account for the posts of the series? You can use our recent series on AI as a reference point <a href="https://www.instagram.com/p/CW7bc0KPILA" target="_blank">https://www.instagram.com/p/CW7bc0KPILA</a>
    <br />
    <br />
    OR 
    <br />
    <br />
    <h3 style='color:#ff644e; margin:0;'>Photography</h3> 
    <br />
    Explain the difference in focal length if you want to capture depth and distortion vs when you want to capture a flat image. Don't worry, we don't need super professional answers ;)
    `,
  },
  {
    domain: "vfx",
    question: `How do you think we can improve the club’s outreach through social media platforms?`,
  },
  {
    domain: "corporate",
    question: `Rate your communication skills out of 10 and give your reasoning.`,
  },
  {
    domain: "events",
    question: `There is a shortage of Chairs at the event venue. The expected footfall for the event was 120 and now you are 20 chairs short. How will you handle such a situation? How will you make sure such an incident does not happen in the future?
    `,
  },
];

const Question4 = {
  component: () => (
    <QuestionComponent questionArray={questionArray} name="question_4" />
  ),
  validationSchema: {
    question_4: Yup.string().required("Required"),
  },
  initialValues: {
    question_4: "",
  },
};

export default Question4;
