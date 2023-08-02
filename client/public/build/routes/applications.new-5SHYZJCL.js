import {
  ProjectTilesComponent
} from "/build/_shared/chunk-SWYYGAEW.js";
import {
  APIService,
  BiHomeAlt,
  BiLoader,
  Form,
  Formik,
  StoreContext,
  create$3,
  create$6,
  getDomainName,
  index_modern_default,
  links3 as links,
  observer,
  require_prop_types,
  stdin_default12 as stdin_default3,
  stdin_default13 as stdin_default4,
  stdin_default14 as stdin_default5,
  stdin_default3 as stdin_default,
  stdin_default8 as stdin_default2,
  toast
} from "/build/_shared/chunk-GIICF2LK.js";
import {
  Link,
  useNavigate
} from "/build/_shared/chunk-4QSVOVY6.js";
import "/build/_shared/chunk-NQPDFHR5.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-27MP2XBT.js";
import {
  require_react
} from "/build/_shared/chunk-IC77GIV6.js";
import {
  createHotContext
} from "/build/_shared/chunk-53N7FWAQ.js";
import "/build/_shared/chunk-GZYRKJXK.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/applications.new.tsx
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var import_react6 = __toESM(require_react());

// app/shared/components/Wizard/FormSteps/DomainSelect.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\shared\\\\components\\\\Wizard\\\\FormSteps\\\\DomainSelect.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\Wizard\\FormSteps\\DomainSelect.tsx"
  );
  import.meta.hot.lastModified = "1690992449042.8774";
}
var domainOptions = [{
  key: "content_writing",
  value: "content_writing",
  text: "Content Writing",
  description: "Hunger for content curation will be satisfied"
}, {
  key: "vfx",
  value: "vfx",
  text: "VFX",
  description: "Creativity through motion coz it is the new trend"
}, {
  key: "gfx",
  value: "gfx",
  text: "GFX or Photography",
  description: "Designs the pixels with purpose with an eye for creativity"
}, {
  key: "events",
  value: "events",
  text: "Events",
  description: "Plan events, set the stage and drop the mic"
}, {
  key: "technical",
  value: "technical",
  text: "Technical",
  description: "Turn every wild idea into reality"
}, {
  key: "corporate",
  value: "corporate",
  text: "Corporate",
  description: "Bring in the bucks as they got the vault and the deals"
}];
var DomainSelect = () => {
  _s();
  const [loading, setLoading] = (0, import_react.useState)(true);
  const [options, setOptions] = (0, import_react.useState)(domainOptions);
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    domain,
    setDomain,
    userProjects,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setUserProjects,
    setSelectedDomainSlug
  } = (0, import_react.useContext)(StoreContext);
  (0, import_react.useEffect)(() => {
    const getYear = async () => {
      const userInfo = await APIService.getInstance().fetchUserInfo();
      const year = userInfo.data.user.registration_number.substring(2, 4);
      if (year == "19") {
        domainOptions = domainOptions.filter((domainOption, index) => {
          return index < 3;
        });
      }
      setOptions(domainOptions.filter((domain2) => {
        const domainExists = userProjects.find((project) => project.domain === domain2.value);
        return !domainExists;
      }));
      setLoading(false);
    };
    getYear();
  }, [userProjects]);
  const handleSelect = (value) => {
    setDomain(value);
    setSelectedDomainSlug(value);
  };
  return loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stdin_default2, {}) : (
    //   TODO: Apply flexbox here
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "kz-form",
      children: options.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stdin_default4, {
          label: "Select a domain",
          name: "domain",
          options,
          handleSelect
        })
      }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "kz-message-screen",
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
            children: "You have already applied for two domains."
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
            children: "If you think this is a mistake, please contact support."
          })]
        })
      })
    })
  );
};
_s(DomainSelect, "amaH/fKSLgLcpSH/L94ypNBCYaY=");
_c = DomainSelect;
var DomainSelectForm = {
  component: DomainSelect,
  validationSchema: {
    domain: create$6().required("Required")
  },
  initialValues: {
    domain: ""
  }
};
var stdin_default6 = DomainSelectForm;
var _c;
$RefreshReg$(_c, "DomainSelect");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/shared/components/Wizard/FormSteps/Instructions.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_react2 = __toESM(require_react());

// app/styles/shared/components/FormSteps.css
var FormSteps_default = "/build/_assets/FormSteps-IJUPPEVX.css";

// app/shared/components/Wizard/FormSteps/Instructions.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\shared\\\\components\\\\Wizard\\\\FormSteps\\\\Instructions.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\Wizard\\FormSteps\\Instructions.tsx"
  );
}
var GeneralInstructionComponent = ({
  timeLeft
}) => {
  return (
    //   TODO: Apply flexbox here
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
      className: "kz-form",
      children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", {
        children: "A few things to keep in mind..."
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h5", {
        children: ["Welcome to the first step of your journey towards being an SRMKZILLian.", " ", /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
          children: "We couldn\u2019t be more thrilled to have you here!"
        }), " Although you are expected to get creative and think outside the box,", " ", /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
          children: "there are a few things that you should take care of during the recruitment process."
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
        className: "instructions",
        children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
          id: "index",
          children: "1"
        }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", {
          children: ["While we are all about collaborating and sharing ideas,", " ", /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
            children: "we don\u2019t appreciate teamwork in our recruitment tests."
          }), " ", "Any form of plagiarism is strictly prohibited, and will lead to disqualification."]
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
        className: "instructions",
        children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
          id: "index",
          children: "2"
        }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", {
          children: ["We know you\u2019re pumped,", " ", /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
            children: "but you can only apply for two domains in total."
          })]
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
        className: "instructions",
        children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
          id: "index",
          children: "3"
        }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", {
          children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
            children: "If you think you found some vulnerability in this portal,"
          }), " ", "we would like to have a chat with you! :)"]
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
        className: "instructions",
        children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
          id: "index",
          children: "4"
        }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", {
          children: ["Please note that once you start any application", " ", /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
            children: "the data will be saved only when you hit the submit button."
          }), " ", "If you leave in between, you will lose all your progess."]
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
        className: "instructions",
        children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
          id: "index",
          children: "5"
        }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", {
          children: ["Should you have any questions, we\u2019re here to answer them.", " ", /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
            children: "Feel free to ask your heart out in the chat box on your bottom right."
          }), " ", "Old school? Shoot us an email at", " ", /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
              href: "mailto:recruitments@srmkzilla.net",
              children: "recruitments@srmkzilla.net"
            })
          }), "."]
        })]
      })]
    })
  );
};
_c2 = GeneralInstructionComponent;
var DomainInstructionComponent = (props) => {
  _s2();
  let {
    domain,
    setDomain
  } = (0, import_react2.useContext)(StoreContext);
  domain = props.domain || domain;
  const INSTRUCTIONS = [{
    domain: "technical",
    instruction: [` The Technical domain is the backbone of SRMKZILLA. Be it <span>the online portal for an event or a mobile application</span>, we have got it all covered. We develop some mind-boggling open source products and the passion to contribute to the community is their driving force to do better every day.<br/><br/>
        As a technical member at SRMKZILLA, you are expected to have some prior experience with <span>coding in languages like C, C++, Java, Python, etc</span>. You can take up and learn various tech stacks during your tenure without any hesitation. We look forward to working with students who are full of <span>zeal and dare to solve real-world problems</span>. At Technical, we work and grow together as one big fraternity

        `]
  }, {
    domain: "content_writing",
    instruction: [`Meet the <span>creative hub of SRMKZILLA</span> responsible for all sorts of content curation. Bring any crazy idea to the table and we can bring it to life by splashing colors, constructing frames, and penning words for it. If you are a part of Editorial, you need to keep your creative juices flowing and work on your brimming ideas to <span>encompass content writing, design posters, and plot videos</span>. Editorial is branched into three sub-domains, each with specific tasks.<br/><br/>
        As a content writer, you are expected to have a <span>good command of English</span>, as you would be dealing with writing lots of content for our social media posts, ideation for our media uploads, draft letters, and emails, etc. Draw inspiration from any idea around you and we can get started. Remember, your ability to <span>weave content with your words</span> can do wonders. 
        `]
  }, {
    domain: "gfx",
    instruction: [`Meet the <span>creative hub of SRMKZILLA</span> responsible for all sorts of content curation. Bring any crazy idea to the table and we can bring it to life by splashing colors, constructing frames, and penning words for it. If you are a part of Editorial, you need to keep your creative juices flowing and work on your brimming ideas to <span>encompass content writing, design posters, and plot videos</span>. Editorial is branched into three sub-domains, each with specific tasks.<br/><br/>
        The team of graphic designers at SRMKZILLA brings to life the most appealing and enthralling designs. You must be capable of <span>creating a visual treat with the latest software or tools</span> for quality and expressive designs. All our social media posts need your Midas touch to captivate and communicate with our audience.
        `]
  }, {
    domain: "vfx",
    instruction: [`Meet the <span>creative hub of SRMKZILLA</span> responsible for all sorts of content curation. Bring any crazy idea to the table and we can bring it to life by splashing colors, constructing frames, and penning words for it. If you are a part of Editorial, you need to keep your creative juices flowing and work on your brimming ideas to <span>encompass content writing, design posters, and plot videos</span>. Editorial is branched into three sub-domains, each with specific tasks.<br/><br/>
        As a video editor, your responsibilities include <span>creating videos for product launches or events, editing pre-existing videos, and even animating graphical content</span> for social media uploads. Your output would be the most engaging content that can be presented from SRMKZILLA. 
        `]
  }, {
    domain: "corporate",
    instruction: [`The corporate domain represents SRMKZILLA in the fields of external affairs (including attracting potential sponsors, publicity, and marketing strategies).We analyze everything that is relevant about handling important documentation and trending on social media. We come up with new ideas about upcoming events. We work on the numbers, scrutinize the data about the events and their functioning, and take care of billing the cost of operations involved in an event and the club's annual budget. It can give you the Corporate mindset and the blend of the most necessary soft skills to connect to the outer world.
      `]
  }, {
    domain: "events",
    instruction: [`Events is an interactive domain that exercises your <span>interpersonal skills and helps you showcase them in several aspects of the club</span>. We provide you with the freedom to establish your ideas from scratch by quizzing your ability to <span>think, react and bring up an efficient plan for the event</span>. You also get to understand your mindset during pressure and situations with tight deadlines. Right from square one to the wrap-up of the event, you get opportunities to explore your interests in various components of events like event <span>planning, management, oration, logistics, and offline publicity</span>.
      `]
  }];
  let domainInstruction = INSTRUCTIONS.find((obj) => obj.domain == domain);
  return (
    //   TODO: Apply flexbox here
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
      className: "kz-form",
      children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h1", {
        children: [(domain === "content_writing" ? "content writing" : domain === "gfx" ? "gfx or photography" : domain).toUpperCase(), " ", "\u2013\xA0Before you begin"]
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h5", {
        children: "Here's what we'd like you to know."
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
        children: domain && domainInstruction.instruction.map((instruction, index) => {
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
            className: "kz-instruction-container",
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(index_modern_default, {
                options: {
                  forceBlock: true
                },
                children: instruction
              })
            })
          }, index);
        })
      })]
    })
  );
};
_s2(DomainInstructionComponent, "//i/5c/EJje65OX+BrPYggd7VQw=");
_c22 = DomainInstructionComponent;
var GeneralInstructions = {
  component: GeneralInstructionComponent,
  validationSchema: {},
  initialValues: {}
};
var DomainInstructions = {
  component: DomainInstructionComponent,
  validationSchema: {},
  initialValues: {}
};
var _c2;
var _c22;
$RefreshReg$(_c2, "GeneralInstructionComponent");
$RefreshReg$(_c22, "DomainInstructionComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/shared/components/Wizard/FormSteps/DomainForm/Question1.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());

// app/shared/components/Wizard/FormSteps/DomainForm/QuestionComponent.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_react3 = __toESM(require_react());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\shared\\\\components\\\\Wizard\\\\FormSteps\\\\DomainForm\\\\QuestionComponent.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\Wizard\\FormSteps\\DomainForm\\QuestionComponent.tsx"
  );
}
var TextAreaComponent = (props) => {
  _s3();
  const {
    questionArray: questionArray9,
    name,
    type
  } = props;
  let {
    domain
  } = (0, import_react3.useContext)(StoreContext);
  let selectedDomain = questionArray9.find((obj) => obj.domain == domain);
  return (
    //   TODO: Apply flexbox here
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
      className: "kz-form",
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
          className: "kz-message-screen",
          children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h1", {
            children: [domain === "gfx" ? "GFX or Photography" : getDomainName(selectedDomain.domain), " ", "Application"]
          }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", {
            dangerouslySetInnerHTML: {
              __html: selectedDomain.question
            }
          }), type === "dropzone" && (domain === "content_writing" || domain === "vfx" || domain === "gfx") ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(stdin_default5, {
            name
          }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(stdin_default3, {
            name
          })]
        })
      })
    })
  );
};
_s3(TextAreaComponent, "FUe0LFRntqbmIKAyljcCDrD+amg=");
_c3 = TextAreaComponent;
var stdin_default7 = TextAreaComponent;
var _c3;
$RefreshReg$(_c3, "TextAreaComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/shared/components/Wizard/FormSteps/DomainForm/Question1.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\Wizard\\FormSteps\\DomainForm\\Question1.tsx"
  );
  import.meta.hot.lastModified = "1690992448895.318";
}
var questionArray = [
  {
    domain: "technical",
    question: "What does the term programming mean to you?"
  },
  {
    domain: "content_writing",
    question: `Describe a perfect day in your life. You can think of yourself as the protagonist of a movie. (Something like Michael Scran *wink wink*)`
  },
  {
    domain: "gfx",
    question: `Rate your creativity on a scale of 1-10 with appropriate justifications. Also, what are your sources of inspiration for your design thinking? (Go ahead, boast your heart out hehe)`
  },
  {
    domain: "vfx",
    question: `How would you cope-up with the latest tools and software during your tenure? How will you deal with a software mismatch when working with a team (for example: After Effects and Premier Pro)? What is your go-to tool for making a video?`
  },
  {
    domain: "corporate",
    question: `What according to you is the work of the corporate domain & how do you think you would be able to contribute to the club and this domain?`
  },
  {
    domain: "events",
    question: `Exiting the realm of "everything online" just recently, what is your opinion on the mode of conducting events? What according to you makes an event a success?`
  }
];
var Question1 = {
  component: () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(stdin_default7, { questionArray, name: "question_1" }),
  validationSchema: {
    question_1: create$6().required("Required")
  },
  initialValues: {
    question_1: ""
  }
};
var stdin_default8 = Question1;

// app/shared/components/Wizard/FormSteps/DomainForm/Question2.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\Wizard\\FormSteps\\DomainForm\\Question2.tsx"
  );
  import.meta.hot.lastModified = "1690992448906.044";
}
var questionArray2 = [
  {
    domain: "technical",
    question: "What is the latest technical stuff that you learnt? Tell us in depth about it and how would you explain it to a five year old kid."
  },
  {
    domain: "content_writing",
    question: `How would you analyze the performance of another content writer? What factors would you take into consideration?`
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
    `
  },
  {
    domain: "vfx",
    question: `If you are tasked with making a promo video for a product launch, what would be your thought process behind it? What are the details that would be taken into account for the video?`
  },
  {
    domain: "corporate",
    question: `If you have any, please mention any prior experience related to this domain\u2019s scope.`
  },
  {
    domain: "events",
    question: `During an event, there is a group of people that are trying to disrupt the flow and create a ruckus. How will you handle such an issue?`
  }
];
var Question2 = {
  component: () => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(stdin_default7, { questionArray: questionArray2, name: "question_2" }),
  validationSchema: {
    question_2: create$6().required("Required")
  },
  initialValues: {
    question_2: ""
  }
};
var stdin_default9 = Question2;

// app/shared/components/Wizard/FormSteps/DomainForm/Question3.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\Wizard\\FormSteps\\DomainForm\\Question3.tsx"
  );
  import.meta.hot.lastModified = "1690992448915.9307";
}
var questionArray3 = [
  {
    domain: "technical",
    question: "Explain Object Oriented Programming. Do you prefer using OOP, why or why not?"
  },
  {
    domain: "content_writing",
    question: `What, according to you, is your best quality? How can that quality benefit the club? Explain using a scenario, we would love to hear about all the good stuff.`
  },
  {
    domain: "gfx",
    question: `What, according to you, is your best quality? How can that quality benefit the club? Explain using a scenario, we would love to hear about all the good stuff.`
  },
  {
    domain: "vfx",
    question: `Did you see our Multiverse of IoT announcement video? If you haven't, swiftly visit our Instagram page and check it out (<a href="https://www.instagram.com/p/Cdz20_ADvwS/?utm_medium=share_sheet" target="_blank">https://www.instagram.com/p/Cdz20_ADvwS</a>). We hope you liked it but can you make it better?<br/>Suggest edits to our video and give it your awesome touch.`
  },
  {
    domain: "corporate",
    question: `What is sponsorship according to you?`
  },
  {
    domain: "events",
    question: `You have been given a box, a pair of sunglasses, and 12 ping pong balls. Come up with a game that could be fun, quick, and quirky in order to keep your audience engaged!`
  }
];
var Question3 = {
  component: () => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(stdin_default7, { questionArray: questionArray3, name: "question_3" }),
  validationSchema: {
    question_3: create$6().required("Required")
  },
  initialValues: {
    question_3: ""
  }
};
var stdin_default10 = Question3;

// app/shared/components/Wizard/FormSteps/DomainForm/Question4.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\Wizard\\FormSteps\\DomainForm\\Question4.tsx"
  );
  import.meta.hot.lastModified = "1690992448932.0256";
}
var questionArray4 = [
  {
    domain: "technical",
    question: "Which is your favourite programming language and why?"
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
    `
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
    `
  },
  {
    domain: "vfx",
    question: `How do you think we can improve the club\u2019s outreach through social media platforms?`
  },
  {
    domain: "corporate",
    question: `Rate your communication skills out of 10 and give your reasoning.`
  },
  {
    domain: "events",
    question: `There is a shortage of Chairs at the event venue. The expected footfall for the event was 120 and now you are 20 chairs short. How will you handle such a situation? How will you make sure such an incident does not happen in the future?
    `
  }
];
var Question4 = {
  component: () => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(stdin_default7, { questionArray: questionArray4, name: "question_4" }),
  validationSchema: {
    question_4: create$6().required("Required")
  },
  initialValues: {
    question_4: ""
  }
};
var stdin_default11 = Question4;

// app/shared/components/Wizard/FormSteps/DomainForm/Question5.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\Wizard\\FormSteps\\DomainForm\\Question5.tsx"
  );
  import.meta.hot.lastModified = "1690992448946.9822";
}
var questionArray5 = [
  {
    domain: "technical",
    question: "Can you differentiate between primitive and non-primivite data types? Give examples."
  },
  {
    domain: "content_writing",
    question: `How would you increase SRMKZILLA's social media engagement for a product launch? (via stories/reels/posts)<br/>
    Head to our Instagram page and check out the posts on our mailing bud, Sandesh <a href="https://www.instagram.com/p/CdkPtAIqq4F/" target="_blank">https://www.instagram.com/p/CdkPtAIqq4F/</a> 
    <br/>Suggest ideas that can be used in the posts/video/reels/story for the launch of Sandesh. (put your endless scrolling through social media to good use xD)`
  },
  {
    domain: "gfx",
    question: `Would you like to change the theme and design of our Instagram page? If so, what changes would you make? If not, please describe what you find aesthetically pleasing on the page.`
  },
  {
    domain: "vfx",
    question: `What, according to you, is your best quality? How can that quality benefit the club? Explain using a scenario, we would love to hear about all the good stuff.`
  },
  {
    domain: "corporate",
    question: `After previously agreeing to a sponsorship, a sponsor backs out of an event at the last minute. How would you handle this situation?`
  },
  {
    domain: "events",
    question: `You have been assigned the task of setting up helpdesks on the campus to interact with students. How will you make the experience interactive? How will you use these helpdesks to spread awareness about the club and its upcoming event?`
  }
];
var Question5 = {
  component: () => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(stdin_default7, { questionArray: questionArray5, name: "question_5" }),
  validationSchema: {
    question_5: create$6().required("Required")
  },
  initialValues: {
    question_5: ""
  }
};
var stdin_default12 = Question5;

// app/shared/components/Wizard/FormSteps/DomainForm/Question6.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\Wizard\\FormSteps\\DomainForm\\Question6.tsx"
  );
  import.meta.hot.lastModified = "1690992448956.3843";
}
var questionArray6 = [
  {
    domain: "technical",
    question: "What are the technologies (in any field of your choice) you are interested to work with? Write as much as you know about them, their future potential and how you would explain that technology to a 5 year old kid."
  },
  {
    domain: "content_writing",
    question: `How comfortable are you with working under pressure? Elaborate a situation where you have kept a level-head during a crisis situation (no pressure).`
  },
  {
    domain: "gfx",
    question: `How do you handle criticisms and feedback? Our team works with a lot of redos and changes on your draft to put out the best. So how would you manage?`
  },
  {
    domain: "vfx",
    question: `What kind of social media content excites Millennials/ Gen Z? How can a technical club-like SRMKZILLA implement this kind of content while staying true to its technical roots?`
  },
  {
    domain: "corporate",
    question: `How familiar are you with current trends on social media and how do you stay updated?`
  },
  {
    domain: "events",
    question: `Consider a hypothetical situation where the club has planned to present itself to the new batch of freshers. 
    Now you realize that all halls are completely booked so you have no proper venue to conduct the club\u2019s upcoming event that the team had been working on for weeks. 
    You have about 6 days left before the freshers arrive on the campus. What is your contingency plan to promote the club amongst the freshers? 
    How do you plan on making the club seen amongst a batch of completely new students?`
  }
];
var Question6 = {
  component: () => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(stdin_default7, { questionArray: questionArray6, name: "question_6" }),
  validationSchema: {
    question_6: create$6().required("Required")
  },
  initialValues: {
    question_6: ""
  }
};
var stdin_default13 = Question6;

// app/shared/components/Wizard/FormSteps/DomainForm/Question7.tsx
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\Wizard\\FormSteps\\DomainForm\\Question7.tsx"
  );
  import.meta.hot.lastModified = "1690992448974.5283";
}
var questionArray7 = [
  {
    domain: "technical",
    question: "What is the best feature that you liked in any application or any project made by someone else? Also write how would you improve upon that."
  },
  {
    domain: "content_writing",
    question: `What kind of social media content excites Millennials/ Gen Z? How can a technical club-like SRMKZILLA implement this kind of content while staying true to its technical roots?`
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
`
  },
  {
    domain: "vfx",
    question: `How do you handle criticisms and feedback? Our team works with a lot of redos and changes on your draft to put out the best. So how would you manage?`
  },
  {
    domain: "corporate",
    question: `Scenario based question: A post introducing a workshop gets user engagement on Instagram, but not on Twitter. What according to you could have been the problem? What would you do to overcome such a scenario?`
  },
  {
    domain: "events",
    question: `What are some out-of-the-box ideas that would be great in order to create a buzz about the club amongst the students?`
  }
];
var Question7 = {
  component: () => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(stdin_default7, { questionArray: questionArray7, name: "question_7" }),
  validationSchema: {
    question_7: create$6().required("Required")
  },
  initialValues: {
    question_7: ""
  }
};
var stdin_default14 = Question7;

// app/shared/components/Wizard/FormSteps/DomainForm/Question8.tsx
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\Wizard\\FormSteps\\DomainForm\\Question8.tsx"
  );
  import.meta.hot.lastModified = "1690992448992.0952";
}
var questionArray8 = [
  {
    domain: "technical",
    question: "Do you have any projects/works to show us? If so, describe what you did and attach a GitHub or drive link to that project(Not mandatory but has brownie points)."
  },
  {
    domain: "content_writing",
    question: `We would love to see any previous work of yours. It can be a story, poem, article, or even your blog. A quick bit to impress us xD.
    <br/>This is an optional question.`
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
    Voila! Just put that doc here`
  },
  {
    domain: "vfx",
    question: `Note: This task is mandatory for 2nd students however we strongly recommend 1st-year students to give it a shot too.<br/><br/>Please attempt <b>ONE of the three</b> tasks mentioned below:<br/>
    <br/>Task 1 (Cinema 4D/Blender/Adobe after effects/Premiere Pro):<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;a. Topic: Create a logo reveal for a tech video<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;b. Composition size: 1920px by 1080px 30 fps<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;c. Export: MP4 with the source file<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;d. Length: 6 sec(Minimum requirement)<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;e. Bonus: Most intros end with the logo on a black or dark background. It\u2019s not a rule, but it stands out better and keeps you in sync with the industry<br/>
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
    &nbsp;&nbsp;&nbsp;&nbsp;e. Bonus: Experiment with typography<br/>`
  },
  {
    domain: "corporate",
    question: `How would you solve a conflict of interest between you and your colleagues (be it the same domain or a different one)?`
  },
  {
    domain: "events",
    question: `Hema ,Rekha, Jaya aur Sushma\u2026 Sabki pasand nirma kyu hai? Feel free to be creative!`
  }
];
var Question8 = {
  component: () => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    stdin_default7,
    {
      questionArray: questionArray8,
      name: "question_8",
      type: "dropzone"
    }
  ),
  validationSchema: {
    question_8: create$6()
  },
  initialValues: {
    question_8: ""
  }
};
var stdin_default15 = Question8;

// app/shared/components/Wizard/FormSteps/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\Wizard\\FormSteps\\index.ts"
  );
  import.meta.hot.lastModified = "1690992449061.9875";
}

// app/shared/components/Wizard/Wizard.tsx
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var import_prop_types = __toESM(require_prop_types());
var import_react4 = __toESM(require_react());

// app/shared/components/Wizard/ProjectComponent.tsx
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\Wizard\\ProjectComponent.tsx"
  );
  import.meta.hot.lastModified = "1690992449120.3496";
}
var Question12 = {
  projectComponents: [
    () => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ProjectTilesComponent.Component, {})
    // () => <Project />,
  ],
  projectSchema: [
    {},
    {
      project_title: create$6().required("Project Title is a required field.").min(3),
      project_link: create$6().required("Project Link is a required field.").matches(
        /^https?:\/\/(www\.)?github\.com\/.+\/.+(.git)?$/,
        "The project links must follow the format https://github.com/user/repo"
      ),
      subdomain: create$6().required(
        "You need to select your preferred subdomain."
      )
    }
  ],
  initialProjectValue: [{}, { project_link: "", project_title: "" }],
  handleProjectSubmit: async (values, project_slug) => {
    try {
      const response = await APIService.getInstance().createProjects({
        project_slug,
        link: values.project_link,
        title: values.project_title,
        subdomain: values.subdomain,
        domain: "technicalp"
      });
      return response.status;
    } catch (error) {
      return -1;
    }
  }
};
var stdin_default16 = Question12;

// app/styles/shared/components/Wizard.css
var Wizard_default = "/build/_assets/Wizard-3THDK2CA.css";

// app/styles/shared/components/FormFields.css
var FormFields_default = "/build/_assets/FormFields-ZGIFQD4N.css";

// app/shared/components/Wizard/Wizard.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\shared\\\\components\\\\Wizard\\\\Wizard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\Wizard\\Wizard.tsx"
  );
}
var links2 = () => [{
  rel: "stylesheet",
  href: FormFields_default
}, {
  rel: "stylesheet",
  href: FormSteps_default
}, {
  rel: "stylesheet",
  href: Wizard_default
}];
var Wizard = (props) => {
  _s4();
  const {
    validationSchemas,
    formComponents,
    handleSubmit,
    initialValues
  } = props;
  const {
    projectSchema,
    projectComponents,
    initialProjectValue,
    handleProjectSubmit
  } = stdin_default16;
  const {
    isSubmitted,
    userProjects,
    domain,
    year
  } = (0, import_react4.useContext)(StoreContext);
  const {
    selectedProjectSlug,
    setSelectedProjectSlug,
    setSubmitted
  } = (0, import_react4.useContext)(StoreContext);
  const isProjectForm = () => domain === "technical" && year !== "22";
  const [projectForm, setProjectForm] = (0, import_react4.useState)(false);
  const [step, setStep] = (0, import_react4.useState)(0);
  const schema = projectForm ? projectSchema[step - 2] : validationSchemas[step];
  const getInitialValues = projectForm ? initialProjectValue.reduce((item, total) => {
    return {
      ...total,
      ...item
    };
  }) : initialValues.reduce((item, total) => {
    return {
      ...total,
      ...item
    };
  });
  const getFormComponent = projectForm ? projectComponents[step - 2] : formComponents[step];
  const [lastStep, setLastStep] = (0, import_react4.useState)(projectForm ? 3 : formComponents.length - 1);
  const next = () => {
    setStep(step + 1);
  };
  const prev = () => {
    step < 3 && setProjectForm(false);
    step < 3 && setLastStep(formComponents.length - 1);
    setStep(step - 1);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", {
    className: "kz-wizard",
    children: userProjects.length < 2 ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Formik, {
      initialValues: getInitialValues,
      validationSchema: create$3().shape(schema),
      onSubmit: async (values, {
        setSubmitting,
        setFieldTouched
      }) => {
        setSubmitting(false);
        if (step === lastStep) {
          if (projectForm) {
            setSubmitted(true);
            const statusCode = await handleProjectSubmit(values, selectedProjectSlug);
            if (statusCode === 200) {
              toast({
                title: "Project added successfully",
                message: "We have successfully received your application for the Technical Domain.",
                theme: "success"
              });
              return setInterval(() => {
                window.location.href = "/dashboard";
              }, 3e3);
            } else {
              toast({
                title: "Oops! Something went wrong",
                message: "Something went wrong during the project submission. Please try again or contact support.",
                theme: "error"
              });
            }
            setSubmitted(false);
          } else
            handleSubmit(values);
        } else {
          next();
          step >= 1 && setProjectForm(isProjectForm());
          if (isProjectForm())
            setLastStep(3);
          Object.keys(initialValues[step + 1]).map((key) => setFieldTouched(key, false, false));
        }
      },
      children: () => {
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, {
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Form, {
            className: "kz-form-container",
            children: [/* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Link, {
              to: "/dashboard",
              children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(BiHomeAlt, {
                size: 36,
                className: "home-icon",
                title: "Home"
              })
            }), import_react4.default.createElement(getFormComponent, {}), /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(FormFooter, {
              step,
              totalStep: lastStep,
              projectForm,
              children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(WizardButtons, {
                stepNum: step,
                lastStep,
                handleBack: prev,
                isSubmitted
              })
            })]
          })
        });
      }
    }) : (
      //   TODO: Apply flexbox here
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", {
        children: [/* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Link, {
          to: "/dashboard",
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(BiHomeAlt, {
            size: 36,
            className: "home-icon",
            title: "Home"
          })
        }), /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", {
          className: "kz-message-screen",
          children: [/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h1", {
            children: "You have already applied for two domains."
          }), /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h4", {
            children: "If you think this is a mistake, please contact support."
          })]
        })]
      })
    )
  });
};
_s4(Wizard, "a2+xpxctxjWonzhvajo5I5oAg24=");
_c4 = Wizard;
var WizardButtons = ({
  stepNum,
  lastStep,
  handleBack,
  isSubmitted
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", {
    className: "kz-button-container",
    children: [stepNum > 0 ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, {
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", {
        type: "button",
        onClick: handleBack,
        children: "Previous"
      })
    }) : null, stepNum < lastStep ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, {
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", {
        type: "submit",
        children: "Next"
      })
    }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", {
      type: "submit",
      disabled: isSubmitted,
      children: isSubmitted ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(BiLoader, {
        className: "spin"
      }) : "Submit Application"
    })]
  });
};
_c23 = WizardButtons;
var FormFooter = ({
  step,
  children,
  totalStep,
  projectForm
}) => {
  const progressBarStyles = {
    container: {
      width: "100%",
      height: 10,
      borderRadius: "5rem",
      backgroundColor: "#d5d5d5"
    },
    completed: {
      height: "100%",
      borderRadius: "5rem",
      width: `${step / totalStep * 100}%`,
      backgroundColor: "#ff644e"
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", {
    className: "kz-form-footer",
    children: [/* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", {
      className: "center",
      children: [step + 1, " of ", totalStep + 1]
    }), /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", {
      className: "center",
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", {
        style: progressBarStyles.container,
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", {
          style: progressBarStyles.completed
        })
      })
    }), /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", {
      className: "center",
      children
    })]
  });
};
_c32 = FormFooter;
Wizard.propTypes = {
  validationSchemas: import_prop_types.default.arrayOf(import_prop_types.default.object).isRequired,
  initialValues: import_prop_types.default.arrayOf(import_prop_types.default.object).isRequired,
  formComponents: import_prop_types.default.arrayOf(import_prop_types.default.func).isRequired,
  handleSubmit: import_prop_types.default.func.isRequired
};
var stdin_default17 = Wizard;
var _c4;
var _c23;
var _c32;
$RefreshReg$(_c4, "Wizard");
$RefreshReg$(_c23, "WizardButtons");
$RefreshReg$(_c32, "FormFooter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/applications.new.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\applications.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\applications.new.tsx"
  );
  import.meta.hot.lastModified = "1690992447892.264";
}
var links3 = () => [...links2(), ...links()];
var Application = () => {
  _s5();
  const [loading, setLoading] = (0, import_react6.useState)(false);
  const {
    setUserProjects,
    selectedDomainSlug,
    setSubmitted,
    domain,
    setYear
  } = (0, import_react6.useContext)(StoreContext);
  let history = useNavigate();
  const authStore = (0, import_react6.useContext)(stdin_default);
  let {
    blob
  } = (0, import_react6.useContext)(StoreContext);
  (0, import_react6.useEffect)(() => {
    let res;
    let retrievedProjects = [];
    let year = "";
    (async () => {
      setLoading(true);
      try {
        res = await APIService.getInstance().fetchApplications();
        const userInfo = await APIService.getInstance().fetchUserInfo();
        year = userInfo.data.user.registration_number.substring(2, 4);
        retrievedProjects = res.data.applications;
      } catch (err) {
        console.log(err);
        toast({
          title: "Something broke",
          message: "Our systems had a hard time figuring out who you are.",
          theme: "error"
        });
      } finally {
        setUserProjects(retrievedProjects);
        setYear(year);
        setLoading(false);
      }
    })();
  }, []);
  const onSubmit = async (values) => {
    setSubmitted(true);
    const userInfo = await APIService.getInstance().fetchUserInfo();
    const year = userInfo.data.user.registration_number.substring(2, 4);
    if (domain === "gfx" || domain === "vfx" || domain === "content_writing") {
      if (year === "21" && (domain === "gfx" || domain === "vfx")) {
        if (blob.length <= 0) {
          toast({
            title: "You skipped a part!",
            message: "You must upload a file to continue.",
            theme: "error"
          });
          return setSubmitted(false);
        }
      }
      values.question_8 = blob;
    }
    if (selectedDomainSlug === "") {
      toast({
        title: "You made a boo-boo!",
        message: "You need to select a domain to continue.",
        theme: "error"
      });
    } else {
      setSubmitted(true);
      try {
        await APIService.getInstance().addApplication(values);
        history("/dashboard");
        toast({
          title: "Sweet!",
          message: "You've successfully submitted your application.",
          theme: "info"
        });
      } catch (err) {
        toast({
          message: "We were flying to mars and ran into some asteroids. Please check back soon.",
          title: "This is embarrassing",
          theme: "error"
        });
      } finally {
        setSubmitted(false);
      }
    }
  };
  if (authStore.timeLeft > 0)
    return loading ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(stdin_default2, {}) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(stdin_default17, {
      validationSchemas: [GeneralInstructions.validationSchema, stdin_default6.validationSchema, DomainInstructions.validationSchema, stdin_default8.validationSchema, stdin_default9.validationSchema, stdin_default10.validationSchema, stdin_default11.validationSchema, stdin_default12.validationSchema, stdin_default13.validationSchema, stdin_default14.validationSchema, stdin_default15.validationSchema],
      initialValues: [GeneralInstructions.initialValues, stdin_default6.initialValues, DomainInstructions.initialValues, stdin_default8.initialValues, stdin_default9.initialValues, stdin_default10.initialValues, stdin_default11.initialValues, stdin_default12.initialValues, stdin_default13.initialValues, stdin_default14.initialValues, stdin_default15.initialValues],
      formComponents: [observer(() => GeneralInstructions.component({
        timeLeft: authStore.timeLeftDuration
      })), stdin_default6.component, DomainInstructions.component, stdin_default8.component, stdin_default9.component, stdin_default10.component, stdin_default11.component, stdin_default12.component, stdin_default13.component, stdin_default14.component, stdin_default15.component],
      handleSubmit: onSubmit
    });
  else {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h1", {
      children: "Applications have now been closed"
    });
  }
};
_s5(Application, "DUGcgBMMrSSOwikxxcp9Nujth+k=", false, function() {
  return [useNavigate];
});
_c5 = Application;
var stdin_default18 = Application;
var _c5;
$RefreshReg$(_c5, "Application");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  stdin_default18 as default,
  links3 as links
};
//# sourceMappingURL=/build/routes/applications.new-5SHYZJCL.js.map
