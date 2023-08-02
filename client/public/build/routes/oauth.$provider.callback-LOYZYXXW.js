import {
  APIService,
  observer,
  stdin_default3 as stdin_default,
  stdin_default8 as stdin_default2,
  toast
} from "/build/_shared/chunk-GIICF2LK.js";
import {
  useLocation,
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

// app/routes/oauth.$provider.callback.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\oauth.$provider.callback.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\oauth.$provider.callback.tsx"
  );
  import.meta.hot.lastModified = "1690992448046.932";
}
function useQuery() {
  _s();
  return new URLSearchParams(useLocation().search);
}
_s(useQuery, "EuD9q2dZ34PfN/QO2OBhBzeMxmY=", false, function() {
  return [useLocation];
});
var OAuthRedirect = () => {
  _s2();
  let query = useQuery();
  let navigate = useNavigate();
  const authStore = (0, import_react.useContext)(stdin_default);
  const [code] = (0, import_react.useState)(query.get("code"));
  (0, import_react.useEffect)(() => {
    (async () => {
      try {
        const response = await APIService.getInstance().getAccessToken(code);
        const refresh_token = response.data.result.refresh_token;
        const access_token = response.data.result.access_token;
        authStore.setAuthorization({
          access_token,
          provider: "google",
          refresh_token
        });
        const {
          data: {
            user
          }
        } = await APIService.getInstance().fetchUserInfo();
        authStore.setUser(user);
        navigate("/dashboard");
      } catch (e) {
        toast({
          title: "We shot past the moon",
          message: "Landing back to #Recruitment2022 failed. Please try again in a moment."
        });
      }
    })();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "kz-oauth-redirect",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stdin_default2, {})
  });
};
_s2(OAuthRedirect, "N0tBWByVwjquuHugUqGj42rimkA=", false, function() {
  return [useQuery, useNavigate];
});
_c = OAuthRedirect;
var stdin_default3 = observer(OAuthRedirect);
var _c;
$RefreshReg$(_c, "OAuthRedirect");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  stdin_default3 as default
};
//# sourceMappingURL=/build/routes/oauth.$provider.callback-LOYZYXXW.js.map
