import React from "react";
import * as Yup from "yup";

import QuestionComponent from "./QuestionComponent";

const questionArray = [
  {
    domain: "technical",
    question:
      "What is the best feature that you liked in any application or any project made by someone else? Also write how would you improve upon that.",
  },
  {
    domain: "content_writing",
    question: `What kind of social media content excites Millennials/ Gen Z? How can a technical club-like SRMKZILLA implement this kind of content while staying true to its technical roots?`,
  },
  {
    domain: "gfx",
    question: `If you had the freedom to redesign the landing page of our recruitment portal what design changes would you make?
    <br />
    <br />
    OR 
    <br />
    <br />
    <h3 style='color:#ff644e; margin:0;'>Photography</h3> 
    <br />
    Suggest shots and changes in settings for the reel on our instagram page of the full team meeting we had at the beginning of the year. How will you add your magic touch to it?
    Check it out here:
    <a href="https://www.instagram.com/reel/CdFv4LqD8xK/?igshid=YWZlMWU5YjI=" target="_blank">https://www.instagram.com/reel/CdFv4LqD8xK</a>
`,
  },
  {
    domain: "vfx",
    question: `How do you handle criticisms and feedback? Our team works with a lot of redos and changes on your draft to put out the best. So how would you manage?`,
  },
  {
    domain: "corporate",
    question: `Scenario based question: A post introducing a workshop gets user engagement on Instagram, but not on Twitter. What according to you could have been the problem? What would you do to overcome such a scenario?`,
  },
  {
    domain: "events",
    question: `What are some out-of-the-box ideas that would be great in order to create a buzz about the club amongst the students?`,
  },
];

const Question7 = {
  component: () => (
    <QuestionComponent questionArray={questionArray} name="question_7" />
  ),
  validationSchema: {
    question_7: Yup.string().required("Required"),
  },
  initialValues: {
    question_7: "",
  },
};

export default Question7;
