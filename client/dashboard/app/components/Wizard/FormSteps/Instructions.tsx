import React, { useContext } from "react";
import { StoreContext } from "../Store";
import instructionsCSS from "~/styles/components/FormSteps.css";
import Markdown from "markdown-to-jsx"; // TODO: Update Depedency
import type { Duration } from "moment";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: instructionsCSS,
    },
  ];
};

interface Props {
  timeLeft?: Duration;
}
export const GeneralInstructionComponent = ({ timeLeft }: Props) => {
  return (
    //   TODO: Apply flexbox here
    <div className="kz-form">
      <h1>A few things to keep in mind...</h1>
      <h5>
        Welcome to the first step of your journey towards being an SRMKZILLian.{" "}
        <span>We couldn’t be more thrilled to have you here!</span> Although you
        are expected to get creative and think outside the box,{" "}
        <span>
          there are a few things that you should take care of during the
          recruitment process.
        </span>
      </h5>
      <div className="instructions">
        <span id="index">1</span>
        <p>
          While we are all about collaborating and sharing ideas,{" "}
          <span>we don’t appreciate teamwork in our recruitment tests.</span>{" "}
          Any form of plagiarism is strictly prohibited, and will lead to
          disqualification.
        </p>
      </div>
      <div className="instructions">
        <span id="index">2</span>
        <p>
          We know you’re pumped,{" "}
          <span>but you can only apply for two domains in total.</span>
        </p>
      </div>

      <div className="instructions">
        <span id="index">3</span>
        <p>
          <span>If you think you found some vulnerability in this portal,</span>{" "}
          we would like to have a chat with you! :)
        </p>
      </div>

      <div className="instructions">
        <span id="index">4</span>
        <p>
          Please note that once you start any application{" "}
          <span>
            the data will be saved only when you hit the submit button.
          </span>{" "}
          If you leave in between, you will lose all your progess.
        </p>
      </div>

      <div className="instructions">
        <span id="index">5</span>
        <p>
          Should you have any questions, we’re here to answer them.{" "}
          <span>
            Feel free to ask your heart out in the chat box on your bottom
            right.
          </span>{" "}
          Old school? Shoot us an email at{" "}
          <span>
            <a href="mailto:recruitments@srmkzilla.net">
              recruitments@srmkzilla.net
            </a>
          </span>
          .
        </p>
      </div>
    </div>
  );
};

const DomainInstructionComponent = (props: { domain?: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let { domain, setDomain } = useContext(StoreContext);
  domain = props.domain || domain;

  // const domainName = domain.charAt(0).toUpperCase() + domain.slice(1);
  const INSTRUCTIONS = [
    {
      domain: "technical",
      instruction: [
        ` The Technical domain is the backbone of SRMKZILLA. Be it <span>the online portal for an event or a mobile application</span>, we have got it all covered. We develop some mind-boggling open source products and the passion to contribute to the community is their driving force to do better every day.<br/><br/>
        As a technical member at SRMKZILLA, you are expected to have some prior experience with <span>coding in languages like C, C++, Java, Python, etc</span>. You can take up and learn various tech stacks during your tenure without any hesitation. We look forward to working with students who are full of <span>zeal and dare to solve real-world problems</span>. At Technical, we work and grow together as one big fraternity

        `,
      ],
    },
    {
      domain: "content_writing",
      instruction: [
        `Meet the <span>creative hub of SRMKZILLA</span> responsible for all sorts of content curation. Bring any crazy idea to the table and we can bring it to life by splashing colors, constructing frames, and penning words for it. If you are a part of Editorial, you need to keep your creative juices flowing and work on your brimming ideas to <span>encompass content writing, design posters, and plot videos</span>. Editorial is branched into three sub-domains, each with specific tasks.<br/><br/>
        As a content writer, you are expected to have a <span>good command of English</span>, as you would be dealing with writing lots of content for our social media posts, ideation for our media uploads, draft letters, and emails, etc. Draw inspiration from any idea around you and we can get started. Remember, your ability to <span>weave content with your words</span> can do wonders. 
        `,
      ],
    },
    {
      domain: "gfx",
      instruction: [
        `Meet the <span>creative hub of SRMKZILLA</span> responsible for all sorts of content curation. Bring any crazy idea to the table and we can bring it to life by splashing colors, constructing frames, and penning words for it. If you are a part of Editorial, you need to keep your creative juices flowing and work on your brimming ideas to <span>encompass content writing, design posters, and plot videos</span>. Editorial is branched into three sub-domains, each with specific tasks.<br/><br/>
        The team of graphic designers at SRMKZILLA brings to life the most appealing and enthralling designs. You must be capable of <span>creating a visual treat with the latest software or tools</span> for quality and expressive designs. All our social media posts need your Midas touch to captivate and communicate with our audience.
        `,
      ],
    },
    {
      domain: "vfx",
      instruction: [
        `Meet the <span>creative hub of SRMKZILLA</span> responsible for all sorts of content curation. Bring any crazy idea to the table and we can bring it to life by splashing colors, constructing frames, and penning words for it. If you are a part of Editorial, you need to keep your creative juices flowing and work on your brimming ideas to <span>encompass content writing, design posters, and plot videos</span>. Editorial is branched into three sub-domains, each with specific tasks.<br/><br/>
        As a video editor, your responsibilities include <span>creating videos for product launches or events, editing pre-existing videos, and even animating graphical content</span> for social media uploads. Your output would be the most engaging content that can be presented from SRMKZILLA. 
        `,
      ],
    },
    {
      domain: "corporate",
      instruction: [
        `The corporate domain represents SRMKZILLA in the fields of external affairs (including attracting potential sponsors, publicity, and marketing strategies).We analyze everything that is relevant about handling important documentation and trending on social media. We come up with new ideas about upcoming events. We work on the numbers, scrutinize the data about the events and their functioning, and take care of billing the cost of operations involved in an event and the club's annual budget. It can give you the Corporate mindset and the blend of the most necessary soft skills to connect to the outer world.
      `,
      ],
    },
    {
      domain: "events",
      instruction: [
        `Events is an interactive domain that exercises your <span>interpersonal skills and helps you showcase them in several aspects of the club</span>. We provide you with the freedom to establish your ideas from scratch by quizzing your ability to <span>think, react and bring up an efficient plan for the event</span>. You also get to understand your mindset during pressure and situations with tight deadlines. Right from square one to the wrap-up of the event, you get opportunities to explore your interests in various components of events like event <span>planning, management, oration, logistics, and offline publicity</span>.
      `,
      ],
    },
  ];

  let domainInstruction = INSTRUCTIONS.find((obj) => obj.domain == domain);

  return (
    //   TODO: Apply flexbox here
    <div className="kz-form">
      <h1>
        {(domain === "content_writing"
          ? "content writing"
          : domain === "gfx"
          ? "gfx or photography"
          : domain
        ).toUpperCase()}{" "}
        – Before you begin
      </h1>
      <h5>Here's what we'd like you to know.</h5>
      <div>
        {domain &&
          domainInstruction!.instruction.map((instruction, index) => {
            return (
              <div className="kz-instruction-container" key={index}>
                {/* <div>
                  <span id="index">{index + 1}</span>
                </div> */}
                <div>
                  <Markdown options={{ forceBlock: true }}>
                    {instruction}
                  </Markdown>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const GeneralInstructions = {
  component: GeneralInstructionComponent,
  validationSchema: {},
  initialValues: {},
};

const DomainInstructions = {
  component: DomainInstructionComponent,
  validationSchema: {},
  initialValues: {},
};

export { GeneralInstructions, DomainInstructions };
