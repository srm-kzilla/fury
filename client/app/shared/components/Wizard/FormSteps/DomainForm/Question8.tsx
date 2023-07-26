import React from "react";
import * as Yup from "yup";

import QuestionComponent from "./QuestionComponent";

const questionArray = [
  {
    domain: "technical",
    question:
      "Do you have any projects/works to show us? If so, describe what you did and attach a GitHub or drive link to that project(Not mandatory but has brownie points).",
  },
  {
    domain: "content_writing",
    question: `We would love to see any previous work of yours. It can be a story, poem, article, or even your blog. A quick bit to impress us xD.
    <br/>This is an optional question.`,
  },
  {
    domain: "gfx",
    question: `Note: This task is mandatory for 2nd students however we strongly recommend 1st-year students to give it a shot too.<br/><br/>Please attempt <b>ONE of the three</b> tasks mentioned below and upload the file of your awesome work :<br/>
    <br/>Task 1: Design an event poster<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;a. Topic: Webinar on Blockchain<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;b. Required fields:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.   Social Media footer<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.  Date/Time<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii. Registration link<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.  Custom heading/Event logo<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;c. Size: 1080px by 1080px<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;d. Export: JPEG format with the source file<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;e. Bonus: To create greater impact, experiment with typography<br/>
    <br/>Task 2: Illustration(Adobe Illustrator, Affinity Designer, sketch)<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;a. Topic: Redesign the SRMKZILLA logo<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;b. Size: 1080px by 1080px<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;c. Export: JPEG format with the source file<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;d. Bonus: Sign off your artwork with your own custom logo<br/>
    <br/>Task 3: UI/UX (Figma, Sketch)<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;a. Topic: Redesign SRMKZILLA homepage<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;b. Export: JPEG format with the source file<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;c. Bonus: Try to include gradient effect in elements.
    <br />
    <br />
    OR 
    <br />
    <br />
    <h3 style='color:#ff644e; margin:0;'>Photography</h3> 
    <br />
    Simple simple task for you. 
    We require you to submit your best shots (crowd photography preferred) or some of the awesome reels that you have created
    <br />
    If you have a portfolio, show off your skills!
    <br/>
    <br/>
    Here's how you can upload your files: 
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;a. Compile all your work, collect your best shots/videos/reels
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;b. Upload the videos/photos/reels on your google drive
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;c. Copy paste the drive link in a document (For reels, you can insert the instagram link in the doc) 
    Voila! Just put that doc here`,
  },
  {
    domain: "vfx",
    question: `Note: This task is mandatory for 2nd students however we strongly recommend 1st-year students to give it a shot too.<br/><br/>Please attempt <b>ONE of the three</b> tasks mentioned below:<br/>
    <br/>Task 1 (Cinema 4D/Blender/Adobe after effects/Premiere Pro):<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;a. Topic: Create a logo reveal for a tech video<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;b. Composition size: 1920px by 1080px 30 fps<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;c. Export: MP4 with the source file<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;d. Length: 6 sec(Minimum requirement)<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;e. Bonus: Most intros end with the logo on a black or dark background. It’s not a rule, but it stands out better and keeps you in sync with the industry<br/>
    <br/>Task 2 (Premiere pro/ Apple final cut pro/ Adobe After Effects)<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;a. Topic: Edit our Web3 series video( <a href="https://www.instagram.com/p/CguMTKAq7LS/" target="_blank">https://www.instagram.com/p/CguMTKAq7LS/</a> ) <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;b. Composition size: 1920px by 1080px 30 fps<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;c. Export: MP4 with the source file<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;d. Length: 10 sec (Minimum requirement)<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;e. Bonus: Use of 3D mockups will be highly recommended<br/>
    <br/>Task 3 (Adobe After Effects)<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;a. Topic: Promo video on product Sandesh ( <a href="https://www.instagram.com/p/CdkPtAIqq4F/" target="_blank">https://www.instagram.com/p/CdkPtAIqq4F/</a> )<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;b. Composition size: Instagram story dimension<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;c. Export: MP4 with the source file<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;d. Length: 15 sec (Stated)<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;e. Bonus: Experiment with typography<br/>`,
  },
  {
    domain: "corporate",
    question: `How would you solve a conflict of interest between you and your colleagues (be it the same domain or a different one)?`,
  },
  {
    domain: "events",
    question: `Hema ,Rekha, Jaya aur Sushma… Sabki pasand nirma kyu hai? Feel free to be creative!`,
  },
];

const Question8 = {
  component: () => (
    <QuestionComponent
      questionArray={questionArray}
      name="question_8"
      type="dropzone"
    />
  ),
  validationSchema: {
    question_8: Yup.string(),
  },
  initialValues: {
    question_8: "",
  },
};

export default Question8;
