import {
  APIService,
  BiX,
  Constants,
  k,
  links,
  links2,
  links7 as links3,
  links8 as links4,
  require_classnames,
  require_moment,
  stdin_default,
  stdin_default16 as stdin_default3,
  stdin_default17 as stdin_default4,
  stdin_default3 as stdin_default2
} from "/build/_shared/chunk-GIICF2LK.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/root.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react2 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// app/styles/index.css
var styles_default = "/build/_assets/index-LTWRVFBI.css";

// app/styles/App.css
var App_default = "/build/_assets/App-E4CN76UC.css";

// node_modules/.pnpm/react-toastify@9.1.3_react-dom@18.2.0_react@18.2.0/node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify_default = "/build/_assets/ReactToastify-K46O6LFP.css";

// app/shared/utils/moment-config.ts
var import_moment = __toESM(require_moment());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\utils\\moment-config.ts"
  );
  import.meta.hot.lastModified = "1690992449384.8745";
}
var updateLocale = () => {
  import_moment.default.updateLocale("en", {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "now",
      ss: "%d seconds ago",
      m: "1 minute ago",
      mm: "%d minutes ago",
      h: "1 hour ago",
      hh: "%d hours ago",
      d: "1 day ago",
      dd: "%d days ago",
      w: "1 week ago",
      M: "1 month ago",
      MM: "%d months ago",
      y: "1 year ago",
      yy: "%d years ago"
    }
  });
};

// app/root.tsx
var import_node = __toESM(require_node());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links5 = () => {
  return [...links(), ...links3(), ...links2(), ...links4(), {
    rel: "stylesheet",
    href: styles_default
  }, {
    rel: "stylesheet",
    href: App_default
  }, {
    rel: "stylesheet",
    href: ReactToastify_default
  }];
};
function App() {
  _s();
  const authStore = (0, import_react2.useContext)(stdin_default2);
  const [headline, setHeadline] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    APIService.getInstance().fetchUserInfo().then(({
      data: {
        user
      }
    }) => {
      authStore.setUser(user);
    }).finally(() => {
      updateLocale();
    });
  }, []);
  (0, import_react2.useEffect)(() => {
    (async () => {
      const {
        data: {
          headline: headline2
        }
      } = await APIService.getInstance().fetchHeadline();
      setHeadline(headline2);
    })();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(stdin_default3, {
        headline
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "App",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(stdin_default, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cookie, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(k, {
          pauseOnFocusLoss: false
        })]
      })]
    })
  });
}
_s(App, "bRs71HwZSEcXu9f//25NE6DhdL4=");
_c = App;
function Layout({
  children
}) {
  _s2();
  const {
    env
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Links, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
        children: "SRMKZILLA Recruitments '23"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
        dangerouslySetInnerHTML: {
          __html: `
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="c3e20450-f803-4f5b-9674-b2245cf31786";
            (function() {
              d=document;
              s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `
        }
      })]
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollRestoration, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
        dangerouslySetInnerHTML: {
          __html: `window.ENV = ${JSON.stringify(env)}`
        }
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveReload, {}), children]
    })]
  });
}
_s2(Layout, "pedjY/BPZmIZcyQHrBtjTJ9gU2Y=", false, function() {
  return [useLoaderData];
});
_c2 = Layout;
var Cookie = () => {
  _s3();
  const [open, setOpen] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    if (localStorage.getItem(Constants.LOCAL_STORAGE.SHOW_COOKIE_PROMPT) === "true")
      setOpen(false);
    else
      setOpen(true);
  }, []);
  const close = () => {
    setOpen(false);
  };
  const accept = () => {
    localStorage.setItem(Constants.LOCAL_STORAGE.SHOW_COOKIE_PROMPT, "true");
    setOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: (0, import_classnames.default)("kz-cookie", {
      open
    }),
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiX, {
        size: 32,
        onClick: close
      })
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "content",
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
        children: "Life is like a box of cookies"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: ["You never know what you're gonna get. Unless you read our", " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
          to: "/privacy",
          children: "Privacy"
        }), ".", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), "Cookies help us provide you with more personalized experiences and allow better web analytics for us."]
      })]
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "btn",
      onClick: accept,
      children: "Accept"
    })]
  });
};
_s3(Cookie, "e27cRtNMdAs0U0o1oHlS6A8OEBo=");
_c3 = Cookie;
function ErrorBoundary() {
  _s4();
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stdin_default4, {
        code: error.status
      })
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
      children: "Uh oh ..."
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      children: "Something went wrong."
    })]
  });
}
_s4(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c4 = ErrorBoundary;
var stdin_default5 = App;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "Layout");
$RefreshReg$(_c3, "Cookie");
$RefreshReg$(_c4, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  stdin_default5 as default,
  links5 as links
};
//# sourceMappingURL=/build/root-OYFLDEV5.js.map
