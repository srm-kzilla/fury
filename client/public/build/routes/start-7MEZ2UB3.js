import {
  APIService,
  links,
  links3 as links2,
  stdin_default3 as stdin_default,
  stdin_default4 as stdin_default2,
  stdin_default8 as stdin_default3,
  toast
} from "/build/_shared/chunk-GIICF2LK.js";
import {
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

// app/routes/start.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());

// app/styles/pages/Login.css
var Login_default = "/build/_assets/Login-Y5GIOXSH.css";

// app/assets/images/google.svg
var google_default = "/build/_assets/google-DSGXOQO3.svg";

// node-modules-polyfills:querystring
function e(e2, n2) {
  return Object.prototype.hasOwnProperty.call(e2, n2);
}
var n = function(n2, r2, t2, o2) {
  r2 = r2 || "&", t2 = t2 || "=";
  var a = {};
  if ("string" != typeof n2 || 0 === n2.length)
    return a;
  var u = /\+/g;
  n2 = n2.split(r2);
  var c = 1e3;
  o2 && "number" == typeof o2.maxKeys && (c = o2.maxKeys);
  var i = n2.length;
  c > 0 && i > c && (i = c);
  for (var s = 0; s < i; ++s) {
    var p, f, d, y, m = n2[s].replace(u, "%20"), l = m.indexOf(t2);
    l >= 0 ? (p = m.substr(0, l), f = m.substr(l + 1)) : (p = m, f = ""), d = decodeURIComponent(p), y = decodeURIComponent(f), e(a, d) ? Array.isArray(a[d]) ? a[d].push(y) : a[d] = [a[d], y] : a[d] = y;
  }
  return a;
};
var r = function(e2) {
  switch (typeof e2) {
    case "string":
      return e2;
    case "boolean":
      return e2 ? "true" : "false";
    case "number":
      return isFinite(e2) ? e2 : "";
    default:
      return "";
  }
};
var t = function(e2, n2, t2, o2) {
  return n2 = n2 || "&", t2 = t2 || "=", null === e2 && (e2 = void 0), "object" == typeof e2 ? Object.keys(e2).map(function(o3) {
    var a = encodeURIComponent(r(o3)) + t2;
    return Array.isArray(e2[o3]) ? e2[o3].map(function(e3) {
      return a + encodeURIComponent(r(e3));
    }).join(n2) : a + encodeURIComponent(r(e2[o3]));
  }).join(n2) : o2 ? encodeURIComponent(r(o2)) + t2 + encodeURIComponent(r(e2)) : "";
};
var o = {};
o.decode = o.parse = n, o.encode = o.stringify = t;
o.decode;
o.encode;
o.parse;
o.stringify;
o.decode;
o.encode;
o.parse;
o.stringify;
var decode = o.decode;
var encode = o.encode;
var parse = o.parse;
var stringify = o.stringify;

// app/routes/start.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\start.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\start.tsx"
  );
}
var links3 = () => [...links(), ...links2(), {
  rel: "stylesheet",
  href: Login_default
}];
var Login = () => {
  _s();
  const authStore = (0, import_react.useContext)(stdin_default);
  const history = useNavigate();
  const [loading, setLoading] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    (async () => {
      try {
        setLoading(true);
        if (authStore.user)
          return history("/dashboard");
        const _token = localStorage.getItem("access_token");
        if (_token) {
          const {
            data: {
              user
            }
          } = await APIService.getInstance().fetchUserInfo();
          authStore.setUser(user);
          history("/dashboard");
        } else {
          toast({
            title: "Heads up!",
            message: "You have until 20th August 2023 to sprinkle your magic. <span>Sign In for #Recruitment2023,</span> and get started.",
            theme: "info",
            options: {
              autoClose: false
            }
          });
        }
      } catch (e2) {
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return !loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "kz-login",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(stdin_default2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "kz-login-container",
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        children: "The campus club you love."
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "login",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginButton, {})
      })]
    })]
  }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stdin_default3, {});
};
_s(Login, "gLj1/CXPjOEGyF4mehN5iShcCL8=", false, function() {
  return [useNavigate];
});
_c = Login;
var getProviderConfig = () => {
  return {
    icon: google_default,
    text: "Sign in with Google",
    url: "https://accounts.google.com/o/oauth2/v2/auth?" + o.stringify({
      client_id: "311478294319-ej3c44c7nc1omuiv0m8sa5ndfoh6dcev.apps.googleusercontent.com",
      redirect_uri: "http://localhost:3000/oauth/google/callback",
      response_type: "code",
      access_type: "offline",
      prompt: "consent",
      scope: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"].join(" ")
    })
  };
};
var LoginButton = () => {
  function openLoginWindow(url) {
    window.open(url, "_self");
  }
  const providerConfig = getProviderConfig();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "login-button",
    onClick: () => openLoginWindow(providerConfig.url),
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
      src: providerConfig.icon,
      alt: providerConfig.text
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      children: providerConfig.text
    })]
  });
};
_c2 = LoginButton;
var stdin_default4 = Login;
var _c;
var _c2;
$RefreshReg$(_c, "Login");
$RefreshReg$(_c2, "LoginButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  stdin_default4 as default,
  links3 as links
};
//# sourceMappingURL=/build/routes/start-7MEZ2UB3.js.map
