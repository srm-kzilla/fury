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
      question: `How do you think you would be able to contribute to the club and this domain and how do you think the corporate domain works within a club?`,
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
        "Do you have any prior experience in event planning or event management? If yes, we would love to know! If not, that’s okay too :)",
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
      question: `What, according to you, is your best quality? How can that quality benefit the club? Explain using a scenario, we would love to hear about all the good stuff.`,
    },
    {
      domain: "gfx",
      question: `What, according to you, is your best quality? How can that quality benefit the club? Explain using a scenario, we would love to hear about all the good stuff.`,
    },
    {
      domain: "vfx",
      question: `Did you see our Multiverse of IoT announcement video? If you haven't, swiftly visit our Instagram page and check it out (<a href="https://www.instagram.com/p/Cdz20_ADvwS/?utm_medium=share_sheet" target="_blank">https://www.instagram.com/p/Cdz20_ADvwS</a>). We hope you liked it but can you make it better?<br/>Suggest edits to our video and give it your awesome touch.`,
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
      question: `After mutually agreeing to a sponsorship for an upcoming event, a sponsor backs out at the last minute. How would you as a member of the corporate domain handle this situation?`,
    },
    {
      domain: "events",
      question:
        "You are given paper cups, ping pong balls, threads, blindfold cloth, darts, and a rectangular wooden board. Design a mini game using these materials that would not take more than 20 minutes to finish.",
    },
  ],
  [
    {
      domain: "technical",
      question:
        "Are you currently working on any projects? if yes, what is the tech stack, and why did you choose that particular tech stack if not, what technologies are you looking forward to learning in the near future? (If the project is open source, give us the link! not mandatory but has brownie points)",
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
      question: `What kind of social media content excites Millennials/ Gen Z? How can a technical club-like SRMKZILLA implement this kind of content while staying true to its technical roots?`,
    },
    {
      domain: "corporate",
      question: `How would you, without raising more conflict, resolve a dispute between two members of the club?`,
    },
    {
      domain: "events",
      question:
        "Suppose you planned to organize a workshop in a hall with a capacity of 200 people, but you found out that only 120 people turned up out of 500 registrations. How would you react to this situation and what actions would you take?",
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
      question: `Scenario based question: You have been told to send out mails to potential sponsors for your upcoming event and the only information you have is the date and the agenda of the event. How would you draft a mail to the potential sponsor convincing them to sponsor our event despite only having minimal details?(Draft a mail below)`,
    },
    {
      domain: "events",
      question:
        "The venue for your upcoming event faces unforeseen issues, forcing you to relocate the event just two days before the date. How would you manage this change and communicate it to attendees and stakeholders effectively?",
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
      question: `If you have any prior experiences in this domain, please mention them below.`,
    },
    {
      domain: "events",
      question:
        "You are working with a team member who is not pulling their weight and is causing frustration among other team members. How would you address this issue while maintaining a positive team environment?",
    },
  ],
];
