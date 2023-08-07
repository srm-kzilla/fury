import React from "react";
import * as Yup from "yup";

import QuestionComponent from "./QuestionComponent";

const questionArray = [
  {
    domain: "technical",
    question:
      "Can you differentiate between primitive and non-primivite data types? Give examples.",
  },
  {
    domain: "content_writing",
    question: `How would you increase SRMKZILLA's social media engagement for a product launch? (via stories/reels/posts)<br/>
    Head to our Instagram page and check out the posts on our mailing bud, Sandesh <a href="https://www.instagram.com/p/CdkPtAIqq4F/" target="_blank">https://www.instagram.com/p/CdkPtAIqq4F/</a> 
    <br/>Suggest ideas that can be used in the posts/video/reels/story for the launch of Sandesh. (put your endless scrolling through social media to good use xD)`,
  },
  {
    domain: "gfx",
    question: `Would you like to change the theme and design of our Instagram page? If so, what changes would you make? If not, please describe what you find aesthetically pleasing on the page.`,
  },
  {
    domain: "vfx",
    question: `What, according to you, is your best quality? How can that quality benefit the club? Explain using a scenario, we would love to hear about all the good stuff.`,
  },
  {
    domain: "corporate",
    question: `After previously agreeing to a sponsorship, a sponsor backs out of an event at the last minute. How would you handle this situation?`,
  },
  {
    domain: "events",
    question: `You have been assigned the task of setting up helpdesks on the campus to interact with students. How will you make the experience interactive? How will you use these helpdesks to spread awareness about the club and its upcoming event?`,
  },
];

const Question5 = {
  component: () => (
    <QuestionComponent questionArray={questionArray} name="question_5" />
  ),
  validationSchema: {
    question_5: Yup.string().required("Required"),
  },
  initialValues: {
    question_5: "",
  },
};

export default Question5;
