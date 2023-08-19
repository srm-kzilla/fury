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
      return "VFX";
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
    description: "Creativity through motion coz it is the new trend",
  },
  {
    key: "gfx",
    value: "gfx",
    text: "GFX",
    description: "Designs the pixels with purpose with an eye for creativity",
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
        "How passionate are you about photography/videography? Tell us about your strengths in this area and prior experience (if any).",
    },
    {
      domain: "content_writing",
      question: `What, according to you, is your best quality? How can that quality benefit the club? Explain using a scenario!`,
    },
    {
      domain: "gfx",
      question: `Did you see our event poster for "Off the Clock"? If you haven't, swiftly visit our Instagram page and check it out <a href=https://www.instagram.com/p/Cv96ZrEvVgf/ target=_blank><i><u>Off the Clock</u></i> </a>.<br/> We hope you liked it but can you make it better?`,
    },
    {
      domain: "vfx",
      question: `How would you keep up with the latest tools and software during your tenure? `,
    },
    {
      domain: "corporate",
      question: `How do you think you would be able to contribute to the club and this domain? How do you think the corporate domain works within a club?`,
    },
    {
      domain: "events",
      question:
        "We know organizing events is fun, but we would still want to hear more about something that made you choose the events domain!",
    },
  ],
  [
    {
      domain: "technical",
      question: "What new technology interests you the most, and why?",
    },
    {
      domain: "content_writing",
      question: `How would you describe your writing style? `,
    },
    {
      domain: "gfx",
      question: `Suggest edits to our Multiverse of IoT poster and give it your awesome touch (instagram: <a href=https://www.instagram.com/p/Cd8b7GMPZ_Y/?utm_source=ig_web_copy_link target=_blank><u>Multiverse of IoT</u></a>)`,
    },
    {
      domain: "vfx",
      question: `How will you deal with a software mismatch when working with a team (for example: After Effects and Premier Pro)? What is your go-to tool for making a video?      `,
    },
    {
      domain: "photography",
      question:
        "Which software do you use for editing images and videos? How proficient are you with these tools?",
    },
    {
      domain: "corporate",
      question: `What according to you makes you stand out and deserving to be on the team?`,
    },
    {
      domain: "events",
      question:
        "Do you have any prior experience in event planning or event management? <br/>If yes, we would love to know! If not, that’s okay too :)",
    },
  ],
  [
    {
      domain: "technical",
      question:
        "What is a tree (data structure ofc :p) and how would you explain it to a 5-year-old kid?",
    },
    {
      domain: "photography",
      question:
        "How, according to you, is event photography different from other forms of photography? What unique challenges and opportunities does event photography present?",
    },
    {
      domain: "content_writing",
      question: `Showcase your style with a short example please. How do you feel it would benefit the club’s social media engagement?       `,
    },
    {
      domain: "gfx",
      question: `What, according to you, is your best quality? How can that quality benefit the club? Explain using a scenario, we would love to hear about all the good stuff.`,
    },
    {
      domain: "vfx",
      question: `If you are tasked with making a promo video for an event, what would be your thought process behind it? What are the details that would be taken into account for the video?      `,
    },
    {
      domain: "corporate",
      question: `What according to you is the difference between sponsorship, marketing and advertising?`,
    },
    {
      domain: "events",
      question:
        "What all characteristics, in your opinion, does a successful event have?",
    },
  ],
  [
    {
      domain: "technical",
      question:
        "Is it still valuable to learn to code in the age of generative AI and no code tools?",
    },
    {
      domain: "photography",
      question:
        "Which device do you use for photography/videography? What are the key features of your preferred equipment?",
    },
    {
      domain: "content_writing",
      question: `How would you increase SRMKZILLA's social media engagement for a product launch? (via stories/reels/posts) <br/>Head to our Instagram page and check out the posts on the update of our URL shrinker <i>Kzilla XYZ 2.0</i>.
      <br/>      Post 1: <a href=https://www.instagram.com/p/CklX_Mjqufg/?img_index=1 target=_blank><u>kzilla.xyz Post</u> </a>
      <br/>
      Post 2: <a href=https://www.instagram.com/p/Ck3l51Wjo4s/ target=_blank><u>kzilla.xyz Reel</u></a>
      <br/>
      Suggest ideas that can be used in the posts/videos/reels/story for the launch of the update. (put your endless scrolling through social media to good use xD)
        
    `,
    },
    {
      domain: "gfx",
      question: `If you are tasked with designing an Instagram series on Neural Networks. What would be your thought process behind it? `,
    },
    {
      domain: "vfx",
      question: `What, according to you, is your best quality? How can that quality benefit the club’s social media engagement? Explain using a scenario!      `,
    },
    {
      domain: "corporate",
      question: `Rate your communication and collaboration skills out of 10 and state why?`,
    },
    {
      domain: "events",
      question:
        "If you were to plan an interactive activity for the audience during the break time of a workshop, what would you wish to do?",
    },
  ],
  [
    {
      domain: "technical",
      question:
        "How do you explain complex technical concepts to a person from a non-technical background? Take an example and explain it to us!",
    },
    {
      domain: "photography",
      question:
        "Do you have any setup for capturing some of the most beautiful moments? This could include gear like DSLR, gimbal, drone, monopods, tripods, etc.",
    },
    {
      domain: "content_writing",
      question: ` This task is mandatory for 2nd and 3rd-year students however we strongly recommend 1st-year students to give it a shot too.
      <br/>
      How would you entice people to check out the club event sponsors using social media posts? Check out our insta posts for our <i>Mozofest'23</i> Sponsors, <i>Devfolio and Bikaji</i>, and write some quick, interesting content for them!
      <br/>
      Link 1: <a href=https://www.instagram.com/p/CpCqYkCvSN9/  target=_blank><u>Devfolio</u></a>
      <br/>
      Link 2: <a hrefhttps://www.instagram.com/p/CpCq-R3PXVY/ target=_blank><u>Bikaji</u></a>
      `,
    },
    {
      domain: "gfx",
      question: `In Addition, What are the details that you would take into account for the posts of the series? You can use our series on Web 3 as a reference point
      <a href=https://www.instagram.com/p/CgE0GV-vCFQ/?igshid=MzRlODBiNWFlZA== target=_blank><u>The Web3 Chronicles<u> </a>
      `,
    },
    {
      domain: "vfx",
      question: `What, according to you, is your best quality? How can that quality benefit the club? Explain using a scenario, we would love to hear about all the good stuff.`,
    },
    {
      domain: "corporate",
      question: `After mutually agreeing to a sponsorship for an upcoming event, a sponsor backs out at the last minute. <br/>How would you as a member of the corporate domain handle this situation?`,
    },
    {
      domain: "events",
      question:
        "You are given paper cups, ping pong balls, threads, blindfold cloth, darts, and a rectangular wooden board. <br/>Design a mini game using these materials that would not take more than 20 minutes to finish.",
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
        "Along with following your passion, would you like to contribute to events planning, ideations, and event management? How do you see your photography skills complementing event organization?",
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
      question: `What kind of social media content excites <i>Millennials/Gen Z</i> ? How can a technical club-like <i>SRMKZILLA</i> implement this kind of content while staying true to its technical roots?`,
    },
    {
      domain: "corporate",
      question: `How would you, without raising more conflict, resolve a dispute between two members of the club?`,
    },
    {
      domain: "events",
      question:
        "Suppose you planned to organize a workshop in a hall with a capacity of 200 people, but you found out that only 120 people turned up out of 500 registrations.<br/> How would you react to this situation and what actions would you take?",
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
        "Record a small campus tour reel that includes campus buildings, portraits, close-up shots, people, etc. You can add suitable music to enhance the experience. (Enter Google Drive link for the video)",
    },
    {
      domain: "content_writing",
      question: `What kind of social media content excites <i>Millennials/Gen Z?</i> How can a technical club-like <i>SRMKZILLA</i> implement this kind of content while staying true to its technical roots?`,
    },
    {
      domain: "gfx",
      question: `If you had the freedom to redesign the landing page of our recruitment portal, what design changes would you make? link: <a href=https://recruitment.srmkzilla.net target=_blank><u>Recruitment portal</u></a>
`,
    },
    {
      domain: "vfx",
      question: `How do you handle criticisms and feedback? Our team works with a lot of redos and changes on your draft to put out the best. So how would you manage?`,
    },
    {
      domain: "corporate",
      question: `Scenario based question: You have been told to send out mails to potential sponsors for your upcoming event and the only information you have is the date and the agenda of the event.<br/> How would you draft a mail to the potential sponsor convincing them to sponsor our event despite only having minimal details? (Draft a mail below)`,
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
      question: `Tell us something that you are passionate about. It could be anything from a hobby to a social cause. Have you been a part of any clubs or societies befoer? We would love to hear about it!`,
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
      `,
    },
    {
      domain: "corporate",
      question: `If you have any prior experiences in this domain, please mention them below.`,
    },
    {
      domain: "events",
      question:
        "You are working with a team member who is not pulling their weight and is causing frustration among other team members.<br/> How would you address this issue while maintaining a positive team environment?",
    },
  ],
];
