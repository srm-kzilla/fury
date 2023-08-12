export enum Domain {
  Technical = "technical",
  Technical_Project = "technicalp",
  VFX = "vfx",
  GFX = "gfx",
  Content_Writing = "content_writing",
  Events = "events",
  Corporate = "corporate",
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
      return "GFX or Photography";
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

export const questionsArray = [
  [
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
  ],
  [
    {
      domain: "technical",
      question:
        "What is the latest technical stuff that you learnt? Tell us in depth about it and how would you explain it to a five year old kid.",
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
      domain: "corporate",
      question: `If you have any, please mention any prior experience related to this domain’s scope.`,
    },
    {
      domain: "events",
      question: `During an event, there is a group of people that are trying to disrupt the flow and create a ruckus. How will you handle such an issue?`,
    },
  ]
];
