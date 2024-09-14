export enum Domain {
  Technical = "technical",
  Technical_Project = "technicalp",
  VFX = "vfx",
  GFX = "gfx",
  Content_Writing = "content_writing",
  Events = "events",
  Corporate = "corporate",
  Photography = "photography",
}

export function getDomainName(domain: string) {
  switch (domain) {
    case Domain.Technical_Project:
      return "Technical";
    case Domain.Technical:
      return "Technical";
    case Domain.VFX:
      return "SFX & VFX";
    case Domain.GFX:
      return "GFX";
    case Domain.Photography:
      return "Photography";
    case Domain.Content_Writing:
      return "Content Writing";
    case Domain.Events:
      return "Events";
    case Domain.Corporate:
      return "Corporate";
    default:
      return undefined;
  }
}

export const domains = [
  {
    key: "content_writing",
    value: "content_writing",
    text: "Content Writing",
    description: "Hunger for content curation will be satisfied",
  },
  {
    key: "vfx",
    value: "vfx",
    text: "VFX",
    description: "When IRL isn't enough, use SFX and VFX.",
  },
  {
    key: "gfx",
    value: "gfx",
    text: "GFX",
    description: "God’s response to “What if DaVinci had Figma”",
  },
  {
    key: "photography",
    value: "photography",
    text: "Photography",
    description: "Freeze moments in time, and unveil the world's beauty.",
  },
  {
    key: "events",
    value: "events",
    text: "Events",
    description: "Plan events, set the stage and drop the mic",
  },
  {
    key: "technical",
    value: "technical",
    text: "Technical",
    description: "Turn every wild idea into reality",
  },
  {
    key: "corporate",
    value: "corporate",
    text: "Corporate",
    description: "Bring in the bucks as they got the vault and the deals",
  },
];

export const questionsArray: Array<
  {
    domain: string;
    question: string;
  }[]
> = [
  [
    {
      domain: "technical",
      question: "What does programming mean to you?",
    },
    {
      domain: "photography",
      question:
        "Do you have experience shooting events on campus (e.g., TP Classes, UB, or Mini Halls)?",
    },
    {
      domain: "content_writing",
      question: `What made you choose this particular subdomain?`,
    },
    {
      domain: "gfx",
      question: `How do you stay updated with the latest design trends and tools in graphic design (GFX)?`,
    },
    {
      domain: "vfx",
      question: `What software do you use for creating VFX?`,
    },
    {
      domain: "corporate",
      question: `What is your understanding of sponsorships, and can you explain the different types of sponsorships that are typically offered for events?`,
    },
    {
      domain: "events",
      question: "What are your personal goals for contributing to the club?",
    },
  ],
  [
    {
      domain: "technical",
      question: "	Which tech concept interests you the most right now and why? ",
    },
    {
      domain: "content_writing",
      question: `What made you choose this particular subdomain? `,
    },
    {
      domain: "gfx",
      question: `What tools do you use, and how will you manage different team members using various software?`,
    },
    {
      domain: "vfx",
      question: `What kind of VFX work have you done before?   `,
    },
    {
      domain: "photography",
      question:
        "Which software do you use for editing images and videos? How proficient are you with these tools?",
    },
    {
      domain: "corporate",
      question: `One of the most effective ways to secure sponsorships is by leveraging connections. What tools or platforms do you know that facilitate networking and relationship-building, and how effective do you think they are in helping secure sponsorships?`,
    },
    {
      domain: "events",
      question: "Are you a generalist or specialist?",
    },
  ],
  [
    {
      domain: "technical",
      question:
        "What do you think open source is, which open source impressed you a lot?",
    },
    {
      domain: "photography",
      question: "What’s your editing process after an event?",
    },
    {
      domain: "content_writing",
      question: `How do you handle criticism? `,
    },
    {
      domain: "gfx",
      question: `Why do you think you are the right fit for this position?`,
    },
    {
      domain: "vfx",
      question: `How do you handle feedback and revisions on VFX work?  `,
    },
    {
      domain: "corporate",
      question: `You’ve secured a high-value sponsor, but they have specific branding requirements that might conflict with the event’s theme or audience expectations. How would you approach this situation to ensure both the sponsor’s and the event’s needs are met?`,
    },
    {
      domain: "events",
      question: "If you were a fictional character, who would you be and why?",
    },
  ],
  [
    {
      domain: "technical",
      question: "How do you think AI will impact software developers?",
    },
    {
      domain: "photography",
      question:
        "How do you handle low-light situations during events, particularly in mini halls or TP rooms?",
    },
    {
      domain: "content_writing",
      question: `How do you tailor captions to fit a specific event or post?`,
    },
    {
      domain: "gfx",
      question: `What’s your process for gathering inspiration before starting a design project?`,
    },
    {
      domain: "vfx",
      question: `What resources do you use to learn new VFX techniques?`,
    },
    {
      domain: "corporate",
      question: `Can you provide an example of a time when you took initiative or demonstrated leadership?`,
    },
    {
      domain: "events",
      question:
        "Can you give an example of an event you organized? What went well and what didn’t?",
    },
  ],
  [
    {
      domain: "technical",
      question:
        "	What real life problem would you choose to solve by building a software for it?",
    },
    {
      domain: "photography",
      question:
        "Do you have any setup for capturing some of the most beautiful moments? This could include gear like DSLR, gimbal, drone, monopods, tripods, etc.",
    },
    {
      domain: "content_writing",
      question: ` How do you stay updated on trends in social media content writing?`,
    },
    {
      domain: "gfx",
      question: `How do you incorporate feedback into your design process?`,
    },
    {
      domain: "vfx",
      question: `How do you approach the process of designing and creating unique sound effects for different types of media?`,
    },
    {
      domain: "corporate",
      question: `What do you think is the most essential element when it comes to working with/communicating with a diverse team in a club like SRMKZILLA? How would you rate your communication skills?`,
    },
    {
      domain: "events",
      question:
        "What strategies would you use to increase audience engagement and participation during an event?",
    },
  ],
  [
    {
      domain: "technical",
      question:
        "Are you currently working on any projects?<br/> If yes, what is the tech stack, and why did you choose that particular tech stack? <br>If not, what technologies are you looking forward to learning in the near future? <br/>(If the project is open source, give us the link! not mandatory but has brownie points)",
    },
    {
      domain: "photography",
      question:
        "Can you share an example of a challenging event shoot and how you overcame obstacles?",
    },
    {
      domain: "content_writing",
      question: `What strategies do you use to engage your audience effectively?`,
    },
    {
      domain: "gfx",
      question: `How do you handle criticism and feedback? Our team works through a lot of draft changes and tweaks to ensure the best. How would you manage this?`,
    },
    {
      domain: "vfx",
      question: `Can you describe a VFX project that required collaboration with other team members?.`,
    },
    {
      domain: "corporate",
      question: `Imagine your club is seeking sponsorship for an upcoming event, and a potential sponsor is interested but offers less funding than expected or backs out of the deal at the last hour. How would you negotiate?`,
    },
    {
      domain: "events",
      question:
        "If you had to promote an upcoming event with no budget, what strategies would you use?",
    },
  ],
  [
    {
      domain: "technical",
      question:
        "What motivated you to join our technical club? How do you think you can contribute to the club?",
    },
    {
      domain: "photography",
      question:
        "Record a small campus tour reel that includes campus buildings, portraits, close-up shots, people, etc. You can add suitable music to enhance the experience. (Enter a Google Drive link with public access for the video)",
    },
    {
      domain: "content_writing",
      question: `What kind of social media content excites <i>Millennials/Gen Z?</i> How can a technical club-like <i>SRMKZILLA</i> implement this kind of content while staying true to its technical roots?`,
    },
    {
      domain: "gfx",
      question: `If you had the freedom to redesign the landing page of our recruitment portal, what design changes would you make? LINK: <a href=https://recruitment.srmkzilla.net target=_blank><u>Recruitment portal</u></a>
`,
    },
    {
      domain: "vfx",
      question: `How do you handle criticism and feedback? Our team works through a lot of draft changes and tweaks to ensure the best. How would you manage this?`,
    },
    {
      domain: "corporate",
      question: `What unique qualities do you think you offer that would prove to be a valuable addition to the team at SRMKZILLA?`,
    },
    {
      domain: "events",
      question:
        "The venue for your upcoming event faces unforeseen issues, forcing you to relocate the event just two days before the date.<br/> How would you manage this change and communicate it to attendees and stakeholders effectively?",
    },
  ],
  [
    {
      domain: "technical",
      question:
        "How do you manage and learn from failures and setbacks in your work?",
    },
    {
      domain: "photography",
      question:
        "We would love to see some of your past work too! Please provide a link to your portfolio or a Google Drive link with public access to view your work.",
    },
    {
      domain: "content_writing",
      question: `Tell us something that you are passionate about. It could be anything from a hobby to a social cause. Have you been a part of any clubs or societies before? We would love to hear about it!`,
    },
    {
      domain: "gfx",
      question: `Note: This task is mandatory for 2nd and 3rd-year students however we strongly recommend 1st-year students to give it a shot too.
      <br/>
      Task 1: Design an event poster<br/>
        a. Topic: Designathon<br/>
        b. Required fields:<br/>
            i. Social Media footer<br/>
            ii. Date/Time<br/>
            iii. Registration link<br/>
            iv. Custom heading/Event logo<br/>
        c. Size: 1080px by 1080px<br/>
        d. Export: JPEG format with the source file<br/>
        e. Bonus: To create greater impact, experiment with typography<br/>
      <br/>
      Task 2: Illustration(Adobe Illustrator, Affinity Designer, sketch)<br/>
        a. Topic: Redesign the SRMKZILLA logo<br/>
        b. Size: 1080px by 1080px<br/>
        c. Export: JPEG format with the source file<br/>
        d. Bonus: Sign off your artwork with your own custom logo<br/>
      <br/>
      Task 3: UI/UX (Figma, Sketch)<br/>
        a. Topic: Redesign RECRUITMENT homepage<br/>
        b. Export: JPEG format with the source file<br/>
        c. Bonus: Try to include gradient effect in elements.<br/>
        <br/>
        Note: Upload your work to Google Drive, send the link here in your answer, AND ensure anyone with the link can access the file. Write N/A if you are not attempting this task.
      `,
    },
    {
      domain: "vfx",
      question: `Note: This task is mandatory for 2nd and 3rd-year students however we strongly recommend 1st-year students to give it a shot too.

      Please attempt ONE of the three tasks mentioned below:
      <br/>
      Task 1 (Cinema 4D/Blender/Adobe after effects/Premiere Pro):<br/>
        a. Topic: Create a logo reveal for a tech video<br/>
        b. Composition size: 1920px by 1080px 30 fps<br/>
        c. Export: MP4 with the source file<br/>
        d. Length: 6 sec(Minimum requirement)<br/>
        e. Bonus: Most intros end with the logo on a black or dark background. It’s not a rule, but it stands out better and keeps you in sync with the industry.<br/>
      <br/>
      Task 2 (Premiere pro/ Apple final cut pro/ Adobe After Effects):<br/>
        a. Topic: Edit the Sandesh video below <a href=https://www.instagram.com/p/CdniBEIqmh-/ target=_blank><u>Sandesh Link</u></a><br/>
        b. Composition size: 1920px by 1080px 30 fps<br/>
        c. Export: MP4 with the source file<br/>
        d. Length: 10 sec (Minimum requirement)<br/>
        e. Bonus: Use of 3D mockups will be highly recommended<br/>
      <br/>
      Task 3 (Adobe After Effects):
        a. Topic: Promo video on Mozofest video: <a href=https://www.instagram.com/reel/CpApkpZjx1r/?igshid=MzRlODBiNWFlZA== target=_blank><u>Mozofest Link</u></a><br/>
        b. Composition size: Instagram story dimension<br/>
        c. Export: MP4 with the source file<br/>
        d. Length: 15 sec (Stated)<br/>
        e. Bonus: Experiment with typography<br/>
        <br/>
        Note: Upload your work to Google Drive, send the link here in your answer, AND ensure anyone with the link can access the file. Write N/A if you are not attempting this task.
      `,
    },
    {
      domain: "corporate",
      question: `If you have any prior experiences in this domain, please mention them below.`,
    },
    {
      domain: "events",
      question:
        "As a part of a team what are your ways to avoid any misunderstanding or dispute among the members?",
    },
  ],
];
