import {
  BiArrowToRight,
  BiAward,
  BiBot,
  BiBox,
  BiDonateHeart,
  BiGame,
  BiJoystick,
  BiLockOpenAlt,
  BiMeteor,
  BiPalette,
  BiPlanet,
  BiRocket,
  BiTerminal,
  BiTime,
  BiVector,
  links4 as links,
  links5 as links2,
  require_moment,
  stdin_default11 as stdin_default2,
  stdin_default9 as stdin_default
} from "/build/_shared/chunk-GIICF2LK.js";
import "/build/_shared/chunk-4QSVOVY6.js";
import "/build/_shared/chunk-NQPDFHR5.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-27MP2XBT.js";
import "/build/_shared/chunk-IC77GIV6.js";
import {
  createHotContext
} from "/build/_shared/chunk-53N7FWAQ.js";
import "/build/_shared/chunk-GZYRKJXK.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/explore.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());

// app/styles/pages/Explore.css
var Explore_default = "/build/_assets/Explore-XVTREWH5.css";

// app/components/InfoTile.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());

// app/styles/Components/InfoTile.css
var InfoTile_default = "/build/_assets/InfoTile-EHDOIMY4.css";

// app/components/InfoTile.tsx
var import_moment = __toESM(require_moment());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\InfoTile.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\InfoTile.tsx"
  );
}
var links3 = () => [{
  rel: "stylesheet",
  href: InfoTile_default
}];
var InfoTile = ({
  icon,
  title,
  description,
  timestamp,
  url
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "kz-info-tile",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "icon",
      children: icon
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
      children: title
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      children: description
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "info",
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "status",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiTime, {}), (0, import_moment.default)(timestamp).format("MMM DD, YYYY")]
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "link",
        children: url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
          href: url,
          target: "_blank",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiArrowToRight, {})
        })
      })]
    })]
  });
};
_c = InfoTile;
var stdin_default3 = InfoTile;
var _c;
$RefreshReg$(_c, "InfoTile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/explore.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\explore.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\explore.tsx"
  );
}
var links4 = () => [...links(), ...links2(), ...links3(), {
  rel: "stylesheet",
  href: Explore_default
}];
var Explore = () => {
  const items = [{
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiTerminal, {}),
    title: "Git Set Go",
    description: "We help you Git started with your life as as Developer and Engineer.",
    timestamp: 1663428864e3,
    url: "https://www.instagram.com/p/Cies4m2vSY8/?igshid=MTA0ZTI1NzA="
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiJoystick, {}),
    title: "Multiverse of IOT",
    description: "Doctor Sterange wishes his Multiverse was as cool as our Multiverse of IOT.",
    timestamp: 1653492864e3,
    url: "https://www.instagram.com/p/Cd8b7GMPZ_Y/?igshid=MTA0ZTI1NzA="
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiDonateHeart, {}),
    title: "Sandesh",
    description: "The ultimate tool that helps you send dynamic and scheduled mass mails in a few clicks!",
    timestamp: 1652801664e3,
    url: "hhttps://www.instagram.com/p/CdkPtAIqq4F/?igshid=MTA0ZTI1NzA="
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiMeteor, {}),
    title: "MOZOHACK'22",
    description: "A hackathon, but only cooler and way more fun!",
    timestamp: 1645112064e3,
    url: "https://www.instagram.com/p/CahCB5Vv2YF/?igshid=MTA0ZTI1NzA="
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiPlanet, {}),
    title: "Polls",
    description: "An open source tool to make polls, but with some extra drip!",
    timestamp: 1637163264e3,
    url: "https://www.instagram.com/p/CZWCbDRK2Y8/?igshid=MTA0ZTI1NzA="
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiGame, {}),
    title: "Octavia, our dearest music bot",
    description: "Who doesn't like vibing to music for free on Discord?",
    timestamp: 1631892864e3,
    url: "https://www.instagram.com/p/CSD0QMwBvLB/?igshid=MTA0ZTI1NzA="
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiPalette, {}),
    title: "Introduced Links to world.",
    description: "We made an incredible link manager that lets you host all your important links in one place",
    timestamp: 1630146255e3,
    url: "https://www.instagram.com/p/CTH15oLBgOx/"
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiBox, {}),
    title: "Money Mine",
    description: "A Financial Literacy event with unique insights and tips on the robust world of finance.",
    timestamp: 1626517455e3,
    url: "https://www.instagram.com/p/CRO31aMjwIg/"
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiLockOpenAlt, {}),
    title: "Our flagship event, MOZOFEST",
    description: "An amalgamation of various events spread across different spheres.",
    timestamp: 1616149455e3,
    url: "https://www.instagram.com/p/CLwX9AkBVmp/"
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiBot, {}),
    title: "Launced SRMKZILLA's Website",
    description: "The revamped, the upgraded, the supercalifragilisticexpialidocious space to redefine what campus clubs can do.",
    timestamp: 1614507855e3,
    url: "https://www.srmkzilla.net/"
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiAward, {}),
    title: "Introduced Springboard to World",
    description: "Springboard let's you take a break from never ending task of project setup.",
    timestamp: 1612002255e3,
    url: "https://www.instagram.com/p/CKqIFW1jYcA/"
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiAward, {}),
    title: "Tech Introduction",
    description: "TECH-TRODUCTION was tailored for all the newbie's as we introduced Web development, Machine-learning, Internet of Things, Flutter, and Game Development.",
    timestamp: 1610447055e3,
    url: "https://www.instagram.com/p/CJ8zea_DX4D/"
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiVector, {}),
    title: "Mozo League",
    description: "Our very own fantasy league for all the football fanatics.",
    timestamp: 1609323855e3,
    url: "https://www.instagram.com/p/CJbB1-ADcM6/"
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiVector, {}),
    title: "Code Decode",
    description: "Code Decode, a workshop on how to start with competitive coding.",
    timestamp: 1605608655e3,
    url: "https://www.instagram.com/p/CHsG774DblR/"
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BiRocket, {}),
    title: "Recruitments'20",
    description: "Onboarding of new members to our team.",
    timestamp: 1603794255e3,
    url: "https://www.instagram.com/p/CG1pVftDe4z/"
  }];
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
      className: "kz-explore",
      children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(stdin_default, {}), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
            className: "main",
            children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h2", {
              children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
                children: "@srmkzilla"
              })]
            }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
              children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", {
                className: "mb",
                children: "2022"
              }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
                children: items.map((item, index) => {
                  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
                    className: "tile",
                    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(stdin_default3, {
                      ...item
                    })
                  }, index);
                })
              })]
            })]
          })
        })
      })]
    }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(stdin_default2, {})]
  });
};
_c2 = Explore;
var stdin_default4 = Explore;
var _c2;
$RefreshReg$(_c2, "Explore");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  stdin_default4 as default,
  links4 as links
};
//# sourceMappingURL=/build/routes/explore-5UUAQKQN.js.map
