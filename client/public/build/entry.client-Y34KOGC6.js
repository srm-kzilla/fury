import {
  require_client
} from "/build/_shared/chunk-S2VO2VHD.js";
import {
  RemixBrowser
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

// app/entry.client.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react2 = __toESM(require_react());
var import_client = __toESM(require_client());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\entry.client.tsx"
  );
  import.meta.hot.lastModified = "1690992447605.2869";
}
(0, import_react2.startTransition)(() => {
  (0, import_client.hydrateRoot)(
    document,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemixBrowser, {}) })
  );
});
//# sourceMappingURL=/build/entry.client-Y34KOGC6.js.map
