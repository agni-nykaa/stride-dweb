var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_newrelic = require("newrelic"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_react.RemixServer,
      {
        context: remixContext,
        url: request.url
      },
      void 0,
      !1,
      {
        fileName: "app/entry.server.tsx",
        lineNumber: 13,
        columnNumber: 5
      },
      this
    )
  );
  return responseHeaders.set("Content-Type", "text/html"), global.__SERVER__ = !0, new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta,
  shouldRevalidate: () => shouldRevalidate
});
var import_react9 = require("@emotion/react"), import_react10 = require("@remix-run/react"), import_react11 = require("react");

// app/actions/index.ts
var ACTION_ROUTES = {
  reactConfig: "/sns-api/reactConfig",
  wishlist: "/sns-api/wishlist",
  addToCart: "/sns-api/addItemsToCart",
  notifyMe: "/sns-api/notifyMe",
  addressDetail: "/sns-api/addressDetails",
  savedAddress: "/sns-api/savedAddresses",
  recommendations: "/sns-api/recommendations",
  reviewImages: "/sns-api/reviewImages",
  autoAddress: "/sns-api/autoAddress",
  productDetails: "/sns-api/productDetails",
  productReviewImages: "/sns-api/reviewImages",
  fetchWishlistIds: "/sns-api/fetchWishlistIds",
  logout: "/sns-api/logout"
};

// app/components/Footer/assets/MobileIcon.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Mobile() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "20",
      viewBox: "0 0 12 20",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "mobile icon" }, void 0, !1, {
          fileName: "app/components/Footer/assets/MobileIcon.tsx",
          lineNumber: 11,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "path",
          {
            fill: "#FFF",
            fillRule: "nonzero",
            d: "M1.364 0A1.37 1.37 0 0 0 0 1.364v17.272A1.37 1.37 0 0 0 1.364 20h9.09a1.37 1.37 0 0 0 1.364-1.364V1.364A1.37 1.37 0 0 0 10.455 0H1.364zM.909 3.182h10v13.182h-10V3.182zm3.636 14.545h2.728a.455.455 0 0 1 0 .91H4.545a.455.455 0 0 1 0-.91z"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Footer/assets/MobileIcon.tsx",
            lineNumber: 12,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Footer/assets/MobileIcon.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}
var MobileIcon_default = Mobile;

// app/components/Footer/assets/StoreApp.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function StoreApp() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "108",
      height: "36",
      viewBox: "0 0 119.7 40",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Apple App Store" }, void 0, !1, {
          fileName: "app/components/Footer/assets/StoreApp.tsx",
          lineNumber: 11,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "path",
          {
            d: "M110.1 0H7.5c-.7 0-1.3.1-2 .2-.6.1-1.3.3-1.9.6C3 1.1 2.5 1.5 2 2S1.1 3 .8 3.6C.5 4.2.3 4.9.2 5.5c-.1.7-.2 1.4-.2 2v24.9c0 .7.1 1.3.2 2s.3 1.3.6 1.9c.3.7.7 1.2 1.2 1.7s1 .9 1.6 1.2c.6.3 1.2.5 1.9.6.7.1 1.3.2 2 .2h104.6c.7 0 1.3-.1 2-.2s1.3-.3 1.9-.6c.6-.3 1.1-.7 1.6-1.2s.9-1 1.2-1.6c.3-.6.5-1.2.6-1.9.1-.7.2-1.3.2-2v-.9V9.5 8.4v-.9c0-.7-.1-1.3-.2-2s-.3-1.3-.6-1.9c-.6-1.2-1.6-2.2-2.8-2.8-.6-.3-1.2-.5-1.9-.6-.7-.1-1.3-.2-2-.2h-2z",
            fill: "#a6a6a6"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Footer/assets/StoreApp.tsx",
            lineNumber: 12,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M8.4 39.1h-.9c-.6 0-1.3-.1-1.9-.2-.6-.1-1.1-.3-1.7-.5-.5-.3-1-.6-1.4-1-.4-.4-.8-.9-1-1.4-.3-.5-.4-1.1-.5-1.7-.1-.6-.2-1.2-.2-1.9v-24-.9c0-.6.1-1.3.2-1.9.1-.5.3-1.1.6-1.6s.6-1 1-1.4c.4-.4.9-.7 1.4-1 .5-.3 1.1-.4 1.7-.5C6.3 1 6.9.9 7.6.9H112.2c.6 0 1.2.1 1.9.2.6.1 1.1.3 1.7.5 1 .5 1.9 1.4 2.4 2.4.3.5.4 1.1.5 1.6.1.6.2 1.3.2 1.9v24.9c0 .6-.1 1.2-.2 1.9-.1.6-.3 1.1-.5 1.7-.3.5-.6 1-1 1.4-.4.4-.9.8-1.4 1-.5.3-1.1.5-1.7.5-.6.1-1.2.2-1.9.2H8.4z" }, void 0, !1, {
          fileName: "app/components/Footer/assets/StoreApp.tsx",
          lineNumber: 16,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "path",
          {
            d: "M24.8 20.3c0-1.7.9-3.3 2.4-4.2-.9-1.3-2.4-2.1-4-2.2-1.7-.2-3.3 1-4.2 1-.9 0-2.2-1-3.6-1-1.9.1-3.6 1.1-4.5 2.7-1.9 3.3-.5 8.3 1.4 11 .9 1.3 2 2.8 3.4 2.8 1.4-.1 1.9-.9 3.6-.9 1.7 0 2.1.9 3.6.9s2.4-1.3 3.3-2.7c.7-.9 1.2-2 1.5-3.1-1.8-.6-2.9-2.4-2.9-4.3zM22 12.2c.8-1 1.2-2.2 1.1-3.5-1.2.1-2.4.7-3.2 1.7-.8.9-1.2 2.1-1.1 3.4 1.3 0 2.4-.6 3.2-1.6zM42.3 27.1h-4.7l-1.1 3.4h-2L39 18.1h2l4.5 12.4h-2l-1.2-3.4zm-4.2-1.5h3.8L40 20.1h-.1l-1.8 5.5zm17.1.4c0 2.8-1.5 4.6-3.8 4.6-1.2.1-2.3-.6-2.8-1.6v4.5h-1.9v-12h1.8V23c.6-1 1.7-1.6 2.9-1.6 2.2-.1 3.8 1.8 3.8 4.6zm-2 0c0-1.8-.9-3-2.4-3-1.4 0-2.4 1.2-2.4 3s1 3 2.4 3c1.5 0 2.4-1.2 2.4-3zm11.9 0c0 2.8-1.5 4.6-3.8 4.6-1.2.1-2.3-.6-2.8-1.6v4.5h-1.9v-12h1.8V23c.6-1 1.7-1.6 2.9-1.6 2.3-.1 3.8 1.8 3.8 4.6zm-1.9 0c0-1.8-.9-3-2.4-3-1.4 0-2.4 1.2-2.4 3s1 3 2.4 3c1.5 0 2.4-1.2 2.4-3zm8.5 1c.1 1.2 1.3 2 3 2 1.6 0 2.7-.8 2.7-1.9 0-1-.7-1.5-2.3-1.9l-1.6-.4c-2.3-.5-3.3-1.6-3.3-3.3 0-2.1 1.9-3.6 4.5-3.6s4.4 1.5 4.5 3.6h-1.9c-.1-1.2-1.1-2-2.6-2s-2.5.8-2.5 1.9c0 .9.7 1.4 2.3 1.8l1.4.3c2.5.6 3.6 1.6 3.6 3.4 0 2.3-1.8 3.8-4.8 3.8-2.8 0-4.6-1.4-4.7-3.7h1.7zm11.6-7.7v2.1H85v1.5h-1.7v5c0 .8.3 1.1 1.1 1.1h.6v1.5c-.3.1-.7.1-1 .1-1.8 0-2.5-.7-2.5-2.4V23h-1.3v-1.5h1.3v-2.1h1.8zm2.8 6.7c0-2.8 1.7-4.6 4.3-4.6 2.6 0 4.3 1.8 4.3 4.6 0 2.9-1.7 4.6-4.3 4.6-2.7 0-4.3-1.8-4.3-4.6zm6.7 0c0-2-.9-3.1-2.4-3.1S88 24 88 26s.9 3.1 2.4 3.1 2.4-1.2 2.4-3.1zm3.4-4.6H98V23c.2-1 1.2-1.7 2.2-1.6.2 0 .4 0 .6.1v1.7c-.3-.1-.6-.1-.8-.1-1 0-1.9.8-1.9 1.8v5.7h-1.9v-9.2zm13.2 6.4c-.2 1.6-1.8 2.8-3.9 2.8-2.6 0-4.3-1.8-4.3-4.6s1.6-4.7 4.2-4.7c2.5 0 4.1 1.7 4.1 4.5v.6h-6.4v.1c-.1 1.3.8 2.4 2.1 2.6h.3c.9.1 1.8-.4 2.1-1.3h1.8zm-6.3-2.7h4.5c.1-1.2-.9-2.2-2.1-2.3h-.2c-1.2 0-2.2 1-2.2 2.3z",
            fill: "#fff"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Footer/assets/StoreApp.tsx",
            lineNumber: 17,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "path",
          {
            d: "M37.8 8.7c1.5-.1 2.7 1 2.8 2.4v.5c0 1.9-1 3-2.8 3h-2.2v-6l2.2.1zm-1.2 5.2h1.1c1 .1 1.9-.7 2-1.8v-.4c.1-1-.6-2-1.6-2.1h-1.5v4.3zm5.1-1.5c-.1-1.2.8-2.2 1.9-2.3 1.2-.1 2.2.8 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3-1.2.1-2.2-.7-2.3-1.9v-.4zm3.3 0c0-1-.4-1.5-1.2-1.5-.8 0-1.2.6-1.2 1.5 0 1 .4 1.6 1.2 1.6.8 0 1.2-.6 1.2-1.6zm6.6 2.3h-.9l-.9-3.3h-.1l-.9 3.3h-.9l-1.2-4.5h.9l.8 3.4h.1l.9-3.4h.9l.9 3.4h.1l.8-3.4h.9l-1.4 4.5zm2.3-4.5h.9v.7h.1c.2-.5.8-.8 1.3-.8.8-.1 1.5.5 1.6 1.4V14.7h-.9V12c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1V14.7h-.9v-4.5zm5.2-1.8h.9v6.3h-.9V8.4zm2.1 4c-.1-1.2.7-2.2 1.9-2.3 1.2-.1 2.2.7 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3-1.2.1-2.2-.7-2.3-1.9v-.4zm3.4 0c0-1-.4-1.5-1.2-1.5-.8 0-1.2.6-1.2 1.5 0 1 .4 1.6 1.2 1.6.7 0 1.2-.6 1.2-1.6zm1.8 1c0-.8.6-1.3 1.7-1.3l1.2-.1v-.4c0-.5-.3-.7-.9-.7-.5 0-.8.2-.9.5h-.9c.1-.8.8-1.3 1.8-1.3 1.1 0 1.8.6 1.8 1.5v3.1h-.9v-.6h-.1c-.3.5-.8.7-1.4.7-.7.1-1.4-.5-1.5-1.2.1-.1.1-.1.1-.2zm2.9-.4v-.4l-1.1.1c-.6 0-.9.3-.9.6 0 .4.4.6.8.6.6.2 1.1-.2 1.2-.9 0 .1 0 .1 0 0zm2-.6c0-1.4.7-2.3 1.9-2.3.6 0 1.1.3 1.4.8h.1V8.4h.9v6.3h-.9V14h-.1c-.3.5-.8.8-1.4.8-1.1 0-1.9-.9-1.9-2.4zm1 0c0 1 .4 1.5 1.2 1.5.8 0 1.2-.6 1.2-1.5s-.5-1.5-1.2-1.5c-.8 0-1.2.6-1.2 1.5zm6.9 0c-.1-1.2.7-2.2 1.9-2.3 1.2-.1 2.2.7 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3-1.2.1-2.2-.7-2.3-1.9v-.4zm3.4 0c0-1-.4-1.5-1.2-1.5-.8 0-1.2.6-1.2 1.5 0 1 .4 1.6 1.2 1.6.7 0 1.2-.6 1.2-1.6zm2.1-2.2h.9v.7h.1c.2-.5.8-.8 1.3-.8.8-.1 1.5.5 1.6 1.4V14.7h-.9V12c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1V14.7h-.9v-4.5zm8.8-1.1v1.1h1v.8h-1v2.3c0 .5.2.7.6.7h.3v.7h-.5c-1 0-1.4-.3-1.4-1.2V11h-.7v-.7h.7V9.1h1zm2.2-.7h.9v2.5h.1c.2-.5.8-.9 1.4-.8.8 0 1.5.6 1.6 1.4V14.7h-.9V12c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1V14.7h-.9V8.4zm9.1 5.1c-.2.8-1.1 1.4-1.9 1.3-1.1 0-2.1-.9-2.1-2v-.3c-.2-1.1.6-2.2 1.8-2.3h.3c1.3 0 2 .9 2 2.3v.3h-3.2v.1c-.1.7.4 1.2 1.1 1.3h.1c.4.1.9-.2 1.1-.5h.8zm-3.2-1.5h2.3c0-.6-.4-1.1-1-1.2h-.1c-.6.1-1.2.6-1.2 1.2z",
            fill: "#fff"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Footer/assets/StoreApp.tsx",
            lineNumber: 22,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Footer/assets/StoreApp.tsx",
          lineNumber: 21,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Footer/assets/StoreApp.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}
var StoreApp_default = StoreApp;

// app/components/Footer/assets/StorePlay.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function StorePlay() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "122",
      height: "36",
      viewBox: "0 0 135 40",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("title", { children: "Google Play Store" }, void 0, !1, {
          fileName: "app/components/Footer/assets/StorePlay.tsx",
          lineNumber: 11,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.8-2.2 5-5 5z" }, void 0, !1, {
          fileName: "app/components/Footer/assets/StorePlay.tsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "path",
          {
            d: "M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125m0-.8H5C2.2 0 0 2.3 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.2-5-5-5z",
            fill: "#a6a6a6"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Footer/assets/StorePlay.tsx",
            lineNumber: 13,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "path",
          {
            d: "M47.4 10.2c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9s-1.6-.3-2.2-.9c-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.2.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7 1 .7 1.6.7c.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.8h2.9v.4zM52 7.7h-2.7v1.9h2.5v.7h-2.5v1.9H52v.8h-3.5V7H52v.7zm3.3 5.3h-.8V7.7h-1.7V7H57v.7h-1.7V13zm4.6 0V7h.8v6h-.8zm4.2 0h-.8V7.7h-1.7V7h4.1v.7H64l.1 5.3zm9.5-.8c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2 1.3-.9 2.2-.9c.9 0 1.6.3 2.2.9s.9 1.3.9 2.2-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7s-1.2.2-1.6.7c-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7zm5.8 1.3V7h.9l2.9 4.7V7h.8v6h-.8l-3.1-4.9V13h-.7z",
            fill: "#fff",
            stroke: "#fff",
            strokeWidth: ".2",
            strokeMiterlimit: "10"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Footer/assets/StorePlay.tsx",
            lineNumber: 17,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "path",
          {
            d: "M68.1 21.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6 2.4 1 2.4 2.6c0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8s2.1-4.8 4.7-4.8c1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6s3.1 6.6 6.7 6.6c2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6 2.3 1.1 2.3 2.6-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z",
            fill: "#fff"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Footer/assets/StorePlay.tsx",
            lineNumber: 24,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "linearGradient",
          {
            id: "gpA",
            gradientUnits: "userSpaceOnUse",
            x1: "21.795",
            y1: "-152.295",
            x2: "5.012",
            y2: "-135.513",
            gradientTransform: "translate(0 161)",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: "0",
                  stopColor: "#00a0ff"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 37,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: ".007",
                  stopColor: "#00a1ff"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 41,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: ".26",
                  stopColor: "#00beff"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 45,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: ".512",
                  stopColor: "#00d2ff"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 49,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: ".76",
                  stopColor: "#00dfff"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 53,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: "1",
                  stopColor: "#00e3ff"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 57,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Footer/assets/StorePlay.tsx",
            lineNumber: 28,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "path",
          {
            d: "M10.4 7.5c-.3.3-.4.8-.4 1.4V31c0 .6.2 1.1.5 1.4l.1.1L23 20.1v-.2L10.4 7.5z",
            fill: "url(#gpA)"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Footer/assets/StorePlay.tsx",
            lineNumber: 62,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "linearGradient",
          {
            id: "gpB",
            gradientUnits: "userSpaceOnUse",
            x1: "33.834",
            y1: "-140.95",
            x2: "9.637",
            y2: "-140.95",
            gradientTransform: "translate(0 161)",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: "0",
                  stopColor: "#ffe000"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 75,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: ".409",
                  stopColor: "#ffbd00"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 79,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: ".775",
                  stopColor: "orange"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 83,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: "1",
                  stopColor: "#ff9c00"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 87,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Footer/assets/StorePlay.tsx",
            lineNumber: 66,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "path",
          {
            d: "M27 24.3l-4.1-4.1v-.3l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z",
            fill: "url(#gpB)"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Footer/assets/StorePlay.tsx",
            lineNumber: 92,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "linearGradient",
          {
            id: "gpC",
            gradientUnits: "userSpaceOnUse",
            x1: "24.816",
            y1: "-138.715",
            x2: "2.058",
            y2: "-115.957",
            gradientTransform: "translate(0 161)",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: "0",
                  stopColor: "#ff3a44"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 105,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: "1",
                  stopColor: "#c31162"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 109,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Footer/assets/StorePlay.tsx",
            lineNumber: 96,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "path",
          {
            d: "M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4",
            fill: "url(#gpC)"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Footer/assets/StorePlay.tsx",
            lineNumber: 114,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "linearGradient",
          {
            id: "gpD",
            gradientUnits: "userSpaceOnUse",
            x1: "7.261",
            y1: "-160.788",
            x2: "17.424",
            y2: "-150.625",
            gradientTransform: "translate(0 161)",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: "0",
                  stopColor: "#32a071"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 127,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: ".069",
                  stopColor: "#2da771"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 131,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: ".476",
                  stopColor: "#15cf74"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 135,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: ".801",
                  stopColor: "#06e775"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 139,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "stop",
                {
                  offset: "1",
                  stopColor: "#00f076"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer/assets/StorePlay.tsx",
                  lineNumber: 143,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Footer/assets/StorePlay.tsx",
            lineNumber: 118,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "path",
          {
            d: "M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z",
            fill: "url(#gpD)"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Footer/assets/StorePlay.tsx",
            lineNumber: 148,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "path",
          {
            d: "M27 24.1l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L27 24.1z",
            opacity: ".2"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Footer/assets/StorePlay.tsx",
            lineNumber: 152,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "path",
          {
            d: "M10.4 32.3c-.3-.3-.4-.8-.4-1.4v.1c0 .6.2 1.1.5 1.4v-.1h-.1zm21.6-11l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z",
            opacity: ".12"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Footer/assets/StorePlay.tsx",
            lineNumber: 156,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "path",
          {
            d: "M12.5 7.6L32 18.7c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4l-19.5-11c-1.4-.9-2.5-.3-2.5 1.3V9c0-1.5 1.1-2.2 2.5-1.4z",
            opacity: ".25",
            fill: "#fff"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Footer/assets/StorePlay.tsx",
            lineNumber: 160,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Footer/assets/StorePlay.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}
var StorePlay_default = StorePlay;

// app/components/Footer/styled.ts
var import_styled = __toESM(require("@emotion/styled")), FooterWrapper = import_styled.default.footer`
  width: 100%;
  margin-top: 10px;
`, LinksWrapper = import_styled.default.div`
  background-color: rgb(58, 64, 71);
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 20px;
  text-align: center;
  text-transform: lowercase;
  :first-letter {
    text-transform: uppercase;
  }
  :firstline {
    text-transform: uppercase;
  }
`, Box = import_styled.default.p`
  margin-bottom: 10px;
`, IconContainer = import_styled.default.i`
  margin-right: 10px;
  svg {
    vertical-align: middle;
  }
`, ButtonContainer = import_styled.default.div`
  margin: 0;
  padding: 0;
`, DownloadLink = import_styled.default.a`
  margin: 0 8px;
  display: inline-block;
`, FeaturesContainer = import_styled.default.div`
  background-color: rgb(243, 244, 245);
  color: #3a4047;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  justify-content: center;
`, FeatureItem = import_styled.default.div`
  padding: 0 4px;
  flex: 1;
  line-height: 20px;
`, TitleText = import_styled.default.div`
  text-transform: uppercase;
  margin-bottom: 5px;
  margin-top: 10px;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
`, DescriptionText = import_styled.default.div`
  padding: 0 15px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`, FeatureImage = import_styled.default.img`
  width: 48px;
  height: 48px;
`, SocialMediaContainer = import_styled.default.div`
  background-color: rgb(243, 244, 245);
  text-align: center;
  margin: 20px 0;
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
`, IconsContainer = import_styled.default.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  img {
    width: 20px;
    height: 20px;
  }
`;

// app/components/Footer/AppDownloadLinks/index.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), appLinks = {
  title: "Experience the Nykaa mobile app",
  googlePlay: "https://nykaa.onelink.me/2573509543/aba6fc39",
  appStore: "https://nykaa.onelink.me/2573509543/aba6fc39"
}, AppDownloadLinks = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LinksWrapper, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(IconContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MobileIcon_default, {}, void 0, !1, {
      fileName: "app/components/Footer/AppDownloadLinks/index.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer/AppDownloadLinks/index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: appLinks.title }, void 0, !1, {
      fileName: "app/components/Footer/AppDownloadLinks/index.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer/AppDownloadLinks/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ButtonContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      DownloadButton,
      {
        href: appLinks.googlePlay,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StorePlay_default, {}, void 0, !1, {
          fileName: "app/components/Footer/AppDownloadLinks/index.tsx",
          lineNumber: 32,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Footer/AppDownloadLinks/index.tsx",
        lineNumber: 30,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      DownloadButton,
      {
        href: appLinks.appStore,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StoreApp_default, {}, void 0, !1, {
          fileName: "app/components/Footer/AppDownloadLinks/index.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Footer/AppDownloadLinks/index.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Footer/AppDownloadLinks/index.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Footer/AppDownloadLinks/index.tsx",
  lineNumber: 22,
  columnNumber: 3
}, this), DownloadButton = ({
  className,
  href,
  icon
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  DownloadLink,
  {
    className,
    href,
    target: "_blank",
    rel: "noopener noreferrer",
    children: icon
  },
  void 0,
  !1,
  {
    fileName: "app/components/Footer/AppDownloadLinks/index.tsx",
    lineNumber: 47,
    columnNumber: 3
  },
  this
), AppDownloadLinks_default = AppDownloadLinks;

// app/components/Footer/Features/index.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Feature = ({
  iconUrl,
  title,
  text
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(FeatureItem, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    FeatureImage,
    {
      src: iconUrl,
      alt: title,
      loading: "lazy"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Footer/Features/index.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TitleText, { children: title }, void 0, !1, {
    fileName: "app/components/Footer/Features/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DescriptionText, { children: text }, void 0, !1, {
    fileName: "app/components/Footer/Features/index.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Footer/Features/index.tsx",
  lineNumber: 17,
  columnNumber: 3
}, this), Features = () => {
  let features = {
    brandsCount: {
      iconUrl: "https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg",
      title: "1900+ Brands",
      text: "1.2 Lakh+ Products"
    },
    freeShip: {
      iconUrl: "https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg",
      title: "Free Shipping",
      text: "On Orders Above \u20B9"
    },
    genuineProduct: {
      iconUrl: "https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg",
      title: "100% Authentic",
      text: "Products Sourced Directly"
    }
  }, { brandsCount, freeShip, genuineProduct } = features || {}, orderValue = 500;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(FeaturesContainer, { children: [
    brandsCount && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Feature, { ...brandsCount }, void 0, !1, {
      fileName: "app/components/Footer/Features/index.tsx",
      lineNumber: 52,
      columnNumber: 23
    }, this),
    freeShip && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      Feature,
      {
        ...freeShip,
        text: `${freeShip.text}${orderValue}`
      },
      void 0,
      !1,
      {
        fileName: "app/components/Footer/Features/index.tsx",
        lineNumber: 54,
        columnNumber: 9
      },
      this
    ),
    genuineProduct && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Feature, { ...genuineProduct }, void 0, !1, {
      fileName: "app/components/Footer/Features/index.tsx",
      lineNumber: 59,
      columnNumber: 26
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer/Features/index.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}, Features_default = Features;

// app/components/Footer/constants.ts
var socialLinksData = {
  text: "Show us some love \u2764 on social media",
  social: [
    {
      title: "Instagram",
      imgUrl: "https://adn-static2.nykaa.com/media/wysiwyg/2020/9sep/SocialInstagram.svg",
      link: "https://www.instagram.com/mynykaa/?ref=badge"
    },
    {
      title: "Facebook",
      imgUrl: "https://adn-static2.nykaa.com/media/wysiwyg/2020/9sep/SocialFacebook.svg",
      link: "https://www.facebook.com/p/Nykaa-100044142710696/"
    },
    {
      title: "Youtube",
      imgUrl: "https://adn-static2.nykaa.com/media/wysiwyg/2020/9sep/SocialYoutube.svg",
      link: "https://www.youtube.com/channel/UCoaH2UtB1PsV7av17woV1BA"
    },
    {
      title: "Twitter",
      imgUrl: "https://adn-static1.nykaa.com/media/wysiwyg/2020/9sep/SocialTwitter.svg",
      link: "https://twitter.com/MyNykaa"
    },
    {
      title: "Pinterest",
      imgUrl: "https://adn-static2.nykaa.com/media/wysiwyg/2020/9sep/SocialPinterest.svg",
      link: "https://www.pinterest.com/mynykaa/"
    }
  ]
};

// app/components/Footer/SocialMediaLinks/index.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), SocialMediaLinks = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SocialMediaContainer, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: socialLinksData.text }, void 0, !1, {
    fileName: "app/components/Footer/SocialMediaLinks/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(IconsContainer, { children: socialLinksData.social.map((social, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "a",
    {
      href: social.link,
      target: "_blank",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "img",
        {
          src: social.imgUrl,
          alt: social.title,
          title: social.title
        },
        void 0,
        !1,
        {
          fileName: "app/components/Footer/SocialMediaLinks/index.tsx",
          lineNumber: 17,
          columnNumber: 11
        },
        this
      )
    },
    index2,
    !1,
    {
      fileName: "app/components/Footer/SocialMediaLinks/index.tsx",
      lineNumber: 11,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/Footer/SocialMediaLinks/index.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Footer/SocialMediaLinks/index.tsx",
  lineNumber: 7,
  columnNumber: 3
}, this), SocialMediaLinks_default = SocialMediaLinks;

// app/components/Footer/index.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FooterWrapper, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AppDownloadLinks_default, {}, void 0, !1, {
    fileName: "app/components/Footer/index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Features_default, {}, void 0, !1, {
    fileName: "app/components/Footer/index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SocialMediaLinks_default, {}, void 0, !1, {
    fileName: "app/components/Footer/index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Footer/index.tsx",
  lineNumber: 10,
  columnNumber: 3
}, this), Footer_default = Footer;

// app/constants/pageUrls.ts
var REVIEW_IMAGES_PAGE = "/{slug}/review-images/{id}?ptype=review-images&productId={childId}", HOME = "/?root=logo", AUTH_PAGE = "/auth?ptype=auth", CURRENT_URL_KEY = "CURRENT_URL", WISHLIST = "/wishlist/", CHECKOUT_PAGE = "/shoppingBag";

// app/components/Header/styled.ts
var import_styled6 = __toESM(require("@emotion/styled")), Container = import_styled6.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: '0 0 8px';
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
  position: sticky;
  z-index: 3;
  top: 0px;
  padding: 8px 20px;
`, Top = import_styled6.default.div`
  padding: 4px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`, LeftSection = import_styled6.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, BackButton = import_styled6.default.button`
  border: none;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
  top: 2px;
`, Logo = import_styled6.default.a`
  max-width: 120px;
  svg rect {
    fill: ${({ color }) => color};
  }
  svg {
    vertical-align: middle;
  }
`, RightSection = import_styled6.default.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  gap: 24px;
`, Button = import_styled6.default.button`
  position: relative;
  border: none;
  position: relative;
  top: 1px;
  background: rgba(255, 255, 255, 0.5);
  ${({ isLight }) => isLight && `
    background: transparent;
  `};
`, Link = import_styled6.default.div`
  background: transparent;
  border: none;
`, MenuWrapper = import_styled6.default.div`
  position: relative;
`, MenuButton = import_styled6.default.button`
  background: transparent;
  border: none;
  display: flex;
  align-content: center;
`, DropdownMenu = import_styled6.default.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  z-index: 5;

  .list {
    position: absolute;
    top: 55px;
    right: 13px;
    display: inline-block;
    list-style: none;
    padding: 0;
    min-width: 160px;
    background: #fff;
    border-radius: 3px;
    .list-item {
      display: flex;
      border-bottom: 1px solid #f5f5f5;
      &:last-child {
        border-bottom: none;
      }
    }

    .link {
      display: flex;
      align-items: center;
      padding: 3px 20px;
      text-decoration: none;
      height: 44px;
      color: #000;
    }
  }
`, MenuLink = import_styled6.default.a`
  height: 44px;
  line-height: 44px;
`, CartWrapper = import_styled6.default.div`
  position: relative;
`, CartCounter = import_styled6.default.span`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.labelSmall;
}};
  display: flex;
  width: 23px;
  height: 16px;
  border-radius: 8px;
  border: 1.5px solid ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.white;
}};
  line-height: normal;
  position: absolute;
  top: -4px;
  right: -12px;
  justify-content: center;
  align-items: center;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.white;
}};
  background: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary;
}};
`;

// app/components/Icons/BackArrow.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), BackArrowIcon = ({
  width = 28,
  height = 28,
  fillColor = "#111314"
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { id: "arrow-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "path",
      {
        id: "Icon",
        d: "M21.0005 11.0243L5.41829 11.0243L10.9255 5.66654C11.0192 5.57598 11.0936 5.46824 11.1443 5.34953C11.1951 5.23082 11.2212 5.1035 11.2212 4.9749C11.2212 4.84631 11.1951 4.71898 11.1443 4.60028C11.0936 4.48157 11.0192 4.37383 10.9255 4.28327C10.7383 4.10184 10.4849 4 10.2209 4C9.95684 4 9.70351 4.10184 9.51624 4.28327L2.29985 11.3068C2.20541 11.397 2.13028 11.5046 2.07881 11.6233C2.02733 11.742 2.00055 11.8695 2 11.9984C2.00055 12.1273 2.02733 12.2548 2.07881 12.3735C2.13028 12.4922 2.20541 12.5998 2.29985 12.69L9.50625 19.7135C9.69446 19.8969 9.94972 20 10.2159 20C10.4821 20 10.7373 19.8969 10.9255 19.7135C11.1137 19.5301 11.2195 19.2813 11.2195 19.0219C11.2195 18.7625 11.1137 18.5137 10.9255 18.3302L5.42829 12.9725L21.0005 12.9725C21.2656 12.9725 21.5198 12.8699 21.7073 12.6872C21.8947 12.5045 22 12.2568 22 11.9984C22 11.74 21.8947 11.4923 21.7073 11.3096C21.5198 11.1269 21.2656 11.0243 21.0005 11.0243Z",
        fill: "#001325",
        "fill-opacity": "0.92"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Icons/BackArrow.tsx",
        lineNumber: 22,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Icons/BackArrow.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/Icons/BackArrow.tsx",
    lineNumber: 14,
    columnNumber: 3
  },
  this
), BackArrow_default = BackArrowIcon;

// app/components/Header/assets/NykaaLogo.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function NykaaLogo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "52",
      height: "26",
      viewBox: "0 0 52 26",
      fill: "none",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("g", { "clip-path": "url(#clip0_2510_23842)", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "path",
          {
            d: "M22.9999 6.78848C23.212 6.38531 23.7275 5.5769 23.1017 5.27349C22.7347 5.09685 22.2383 4.9867 21.8586 5.1779C21.5486 5.36235 21.3025 5.63389 21.1521 5.95721L18.7443 9.67506C18.3561 10.2029 17.9849 10.8679 17.183 10.9448C16.6569 11.003 16.2708 10.7827 16.2814 10.3214C16.292 9.86002 16.5699 9.21786 16.7863 8.8147C17.4121 7.64884 17.4927 7.25191 18.0994 6.09229C18.6786 4.98463 16.7735 4.73109 16.3005 5.53326C15.9632 6.10476 15.314 7.18333 15.1655 7.54493C14.8982 8.21203 12.8807 11.3605 13.7569 12.6074C14.8833 14.0143 17.8724 11.7969 16.3408 14.3551C15.1082 16.4125 14.3339 17.5846 13.2562 19.4903C13.0229 19.9059 12.7301 20.3091 12.6516 20.785C12.5392 21.4645 13.5002 21.4604 13.9033 21.4313C14.6373 21.3793 14.9809 21.051 15.2779 20.3922C15.4307 20.0534 15.6471 19.6316 15.804 19.2949C17.2063 16.3342 18.8057 13.4671 20.5921 10.7121C21.4704 9.33216 22.2659 8.13513 22.9999 6.79471V6.78848ZM14.9958 5.78888C15.5537 4.73317 13.7441 5.03242 13.7441 5.03242C13.0865 5.03242 12.7959 5.8055 12.6622 6.02787L10.6936 9.82261C10.3181 10.4461 9.10461 13.1311 8.69305 13.7275C8.66335 13.1248 8.69305 11.9132 8.72063 11.6244C8.79912 10.4772 8.88186 9.61479 9.00278 8.56116C9.094 7.74652 9.27008 6.83004 9.09824 6.01748C8.99217 5.5104 8.82034 5.473 8.07996 5.39403C7.33959 5.31506 6.77529 6.42064 6.52072 6.93603C5.57245 8.85002 4.51598 10.737 3.6759 12.6822C3.42982 13.2516 3.12221 13.821 2.87188 14.3904C2.57276 15.0721 2.28637 15.7475 1.95967 16.4166C1.61176 17.1253 0.523475 19.4321 0.211626 20.1553C-0.121436 20.9471 -0.191443 21.5871 1.1599 21.5435C1.37204 21.5435 1.84512 21.5934 2.43275 20.9741C2.88249 20.5044 2.96947 20.0472 3.2495 19.378C4.21898 17.0048 4.89572 15.4295 5.9543 13.077C6.06037 12.8422 6.29585 12.1793 6.52921 11.6556C6.5186 12.3912 6.39132 13.2744 6.34252 13.8584C6.16645 15.9906 6.03704 18.0522 5.85035 20.1636C5.8249 20.4462 5.7464 20.787 5.8843 21.053C6.02219 21.319 6.35101 21.3876 6.62679 21.4209C7.70659 21.5476 7.81903 21.026 8.15421 20.2945C8.45333 19.6482 8.6379 19.1203 8.9052 18.4636C9.73679 16.4291 10.6129 14.4133 11.5824 12.4369C11.8285 11.934 12.0916 11.4332 12.3461 10.9448C12.8362 10.0325 13.2456 9.17214 13.7823 8.16215C14.1812 7.41401 14.5694 6.59936 14.9958 5.79511V5.78888ZM43.9446 11.9839C43.9446 12.0088 43.9446 12.0338 43.9446 12.0608L42.0036 12.4245C42.693 10.685 43.4101 8.55285 43.8301 7.47843C43.8004 8.27229 43.9743 11.19 43.9362 11.9839H43.9446ZM35.3211 13.8314C35.3184 13.8392 35.3141 13.8462 35.3084 13.8522L31.6277 14.6502C32.4147 13.3638 35.8705 8.68169 36.4009 8.13098C36.1124 9.5857 35.6308 12.2748 35.3211 13.8314ZM51.9954 11.5142C51.8766 10.2964 50.1625 10.9074 49.1379 11.0986L46.2146 11.641C46.1615 10.2673 46.1849 10.5437 46.1658 9.70623C46.1382 8.49466 46.0639 7.55532 45.9939 6.48299C45.9494 5.80966 45.8518 4.8828 44.6108 5.05321C43.1788 5.25063 42.9349 5.95305 42.553 6.79887C41.5581 9.01212 41.5835 9.02251 40.4507 11.481C40.3679 11.6659 39.9458 12.6635 39.8779 12.8547L39.6297 12.9212L37.9877 13.2765L37.9983 13.2183C38.1404 12.092 38.3229 10.9718 38.4841 9.84755C38.6305 8.82093 38.7832 7.15631 38.9084 6.1297C39.0421 5.02619 37.7374 5.05528 37.7374 5.05528C36.9418 5.00956 36.6342 5.23816 36.1336 5.87616C35.2702 6.97551 34.2243 8.16215 33.3057 9.37372C31.6383 11.562 30.4058 13.2163 28.8889 15.4108C28.4498 16.0467 27.771 17.0214 27.1918 17.7716C26.8015 17.0068 26.4663 16.1714 26.1311 15.4087C25.6644 14.3115 25.3144 13.6319 25.0831 12.9025C24.871 12.2624 25.1234 12.173 25.6092 11.8135C27.0051 10.7744 28.5792 10.0678 30.0006 9.07447C31.0082 8.36997 32.2259 7.59273 33.2124 6.85914C33.5498 6.66087 33.8498 6.40707 34.0992 6.10892C34.4959 5.5769 33.3842 5.0345 33.3842 5.0345C32.8988 4.9526 32.3994 5.03622 31.9692 5.27141C31.464 5.53701 30.9877 5.85245 30.5479 6.21282C29.7099 6.8529 28.6386 7.61143 27.8049 8.25151C26.9066 8.95629 25.958 9.5973 24.9664 10.1697L27.8176 5.9863C28.7511 4.81006 26.2838 4.47755 25.3356 5.71822C24.4573 6.83212 23.8697 7.79639 23.176 8.81677C21.5213 11.2295 20.1678 13.7545 18.8122 16.4083C18.2967 17.4183 17.7961 18.4865 17.3272 19.5256C17.0981 20.0327 16.4383 21.2027 17.3527 21.3149C19.3044 21.5435 19.6162 20.6478 20.0554 19.5651C20.7788 17.7758 21.0142 17.4433 21.4746 16.3273C21.842 15.4297 22.2671 14.5558 22.7474 13.7109C22.7474 13.6942 22.9066 13.4677 22.9044 13.4656C22.9999 13.6506 23.5896 15.5895 23.6703 15.8036C24.0712 16.8531 24.7861 19.2928 25.185 20.4026C25.4756 21.3211 25.5626 21.5871 26.8227 21.5539C27.4591 21.5393 27.7243 21.3045 28.138 20.5293C28.5516 19.7542 30.3548 16.4811 30.3548 16.4811L32.1708 16.1735C32.2662 16.159 32.4635 16.1215 32.7393 16.0696C32.8987 16.0503 33.0567 16.0211 33.2124 15.9823H33.2315L35.0453 15.6311C34.9223 16.2338 34.534 17.57 34.4662 17.9171C34.4662 17.9171 33.6346 21.0905 34.7144 21.2422C35.0507 21.3126 35.3984 21.3126 35.7348 21.2422C37.0076 21.0925 37.0076 19.4341 37.0076 19.4341L37.6971 15.1012L39.1651 14.8165L37.6801 19.7189C37.468 20.415 37.311 21.3045 38.5775 21.3024C39.6127 21.3544 39.6806 20.7164 39.6806 20.7164C39.7061 20.6187 40.5292 18.0314 40.7286 17.1024C40.8601 16.506 41.3417 14.9786 41.5411 14.3613C42.082 14.2595 42.4851 14.1847 42.6782 14.1535L43.9086 13.9457C43.9086 14.513 43.9086 15.309 43.9086 15.4191C44.0316 17.1523 43.9086 18.952 44.2629 20.6686C44.3223 20.9429 44.4368 21.292 44.789 21.292C45.126 21.2843 45.4624 21.2586 45.7966 21.2151C47.095 21.1092 46.8574 19.8145 46.7789 18.9998C46.6898 18.0958 46.6007 17.3373 46.4713 16.4395C46.349 15.4882 46.2874 14.5304 46.2867 13.5716C46.2858 13.5647 46.2858 13.5577 46.2867 13.5508L51.0599 12.7611C51.6581 12.6635 52.1079 12.7133 51.9891 11.4955",
            fill: "#001325",
            "fill-opacity": "0.92"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Header/assets/NykaaLogo.tsx",
            lineNumber: 13,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Header/assets/NykaaLogo.tsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("clipPath", { id: "clip0_2510_23842", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "rect",
          {
            width: "52",
            height: "26",
            fill: "white"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Header/assets/NykaaLogo.tsx",
            lineNumber: 21,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Header/assets/NykaaLogo.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/Header/assets/NykaaLogo.tsx",
          lineNumber: 19,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Header/assets/NykaaLogo.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}
var NykaaLogo_default = NykaaLogo;

// app/components/Header/Menu/index.tsx
var import_react5 = require("react");

// app/components/Header/assets/AccountIcon.tsx
var import_styled7 = __toESM(require("@emotion/styled")), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Icon = import_styled7.default.svg`
  circle {
    fill: ##000000;
  }
  path {
    stroke: ##000000;
  }
`;
function Account() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    Icon,
    {
      color: "#000000",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("title", { children: "ic-account" }, void 0, !1, {
          fileName: "app/components/Header/assets/AccountIcon.tsx",
          lineNumber: 24,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "g",
          {
            id: "ic-account",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              "g",
              {
                id: "ic_account",
                transform: "translate(4.000000, 3.000000)",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                    "path",
                    {
                      d: "M4.71,4.3 L4.71,4.19 C4.71,2.37298317 6.18298317,0.9 8,0.9 C9.81701683,0.9 11.29,2.37298317 11.29,4.19 L11.29,4.29 C11.29,6.10701683 9.81701683,7.58 8,7.58 C6.18298317,7.58 4.71,6.10701683 4.71,4.29 L4.71,4.3 Z",
                      id: "Path",
                      stroke: "#000000",
                      strokeWidth: "1.5"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Header/assets/AccountIcon.tsx",
                      lineNumber: 36,
                      columnNumber: 11
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                    "circle",
                    {
                      id: "Oval",
                      fill: "#000000",
                      fillRule: "nonzero",
                      cx: "15.65",
                      cy: "18.06",
                      r: "1"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Header/assets/AccountIcon.tsx",
                      lineNumber: 42,
                      columnNumber: 11
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                    "circle",
                    {
                      id: "Oval",
                      fill: "#000000",
                      fillRule: "nonzero",
                      cx: "11.77",
                      cy: "18.06",
                      r: "1"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Header/assets/AccountIcon.tsx",
                      lineNumber: 50,
                      columnNumber: 11
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                    "circle",
                    {
                      id: "Oval",
                      fill: "#000000",
                      fillRule: "nonzero",
                      cx: "7.88",
                      cy: "18.06",
                      r: "1"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Header/assets/AccountIcon.tsx",
                      lineNumber: 58,
                      columnNumber: 11
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                    "path",
                    {
                      d: "M4.16,18.24 L1,18.24 C0.785174643,18.24 0.579147974,18.154661 0.427243507,18.0027565 C0.275339041,17.850852 0.189892462,17.6448254 0.189892462,17.43 L0.189892462,15.52 C0.182015162,14.4007779 0.618981212,13.3242274 1.40476473,12.5271916 C2.19054824,11.7301558 3.26077754,11.2779283 4.38,11.27 L11.69,11.27 C13.7812854,11.2805307 15.5462056,12.8280332 15.83,14.9",
                      id: "Path",
                      stroke: "#000000",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Header/assets/AccountIcon.tsx",
                      lineNumber: 66,
                      columnNumber: 11
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Header/assets/AccountIcon.tsx",
                lineNumber: 32,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Header/assets/AccountIcon.tsx",
            lineNumber: 25,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Header/assets/AccountIcon.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}
var AccountIcon_default = Account;

// app/components/Header/constants.ts
var BODY_OVERFLOW_FOR_MODAL = "OVERFLOW-HIDDEN", LIST_ITEM_CLASS = "list-item", platformNames = {
  NYKAA: "NYKAA",
  MEN: "MEN"
}, userSessionTypes = {
  GUEST: "GUEST",
  LOGGED_IN: "LOGGED_IN"
}, BEAUTY_HELP_CENTER = "/help-center", NEED_HELP = "Need Help", AUTHENTICITY = "Authenticity", NYKAA_CSR = "Nykaa CSR", RESPONSIBLE_DISCLOSURE = "Responsible Disclosure", BEAUTY_MY_ORDERS = "/sales/order/history/v2?ptype=myOrder", NYKAA_PRIVE = "Nykaa Prive", MY_WALLET = "My Wallet", MY_PROFILE = "My Profile", MY_WISHLIST = "My Wishlist", VIDEO_CONSULTATION = "Video Consultation", HELP_CENTER = "Help Center";
var MY_ORDERS = "My Orders", LP_VALUE = "searchResults", SEARCH_URL = "/search/result/", SEARCH_QUERY = "/search/query/", menuItems = {
  [platformNames.NYKAA]: {
    [userSessionTypes.GUEST]: [
      {
        link: BEAUTY_HELP_CENTER,
        displayText: NEED_HELP
      },
      {
        link: "/authenticity-nykaa-guarantee/lp?intcmp=hp,header,1,authenticity",
        displayText: AUTHENTICITY
      },
      {
        link: "/nykaa-csr/lp",
        displayText: NYKAA_CSR
      },
      {
        link: "/responsible-disclosure/lp",
        displayText: RESPONSIBLE_DISCLOSURE
      }
    ],
    [userSessionTypes.LOGGED_IN]: [
      {
        link: BEAUTY_MY_ORDERS,
        displayText: MY_ORDERS
      },
      {
        link: "/prive",
        displayText: NYKAA_PRIVE
      },
      {
        link: "/nykaaWallet/add/?ptype=nykaaWallet",
        displayText: MY_WALLET
      },
      {
        link: "/myProfile",
        displayText: MY_PROFILE
      },
      {
        link: "/wishlist/",
        displayText: MY_WISHLIST
      },
      {
        link: "/authenticity-nykaa-guarantee/lp?intcmp=hp,header,1,authenticity",
        displayText: AUTHENTICITY
      },
      {
        link: "/video-consultation",
        displayText: VIDEO_CONSULTATION,
        tag: "NEW"
      },
      {
        link: BEAUTY_HELP_CENTER,
        displayText: HELP_CENTER
      },
      {
        link: "/nykaa-csr/lp",
        displayText: NYKAA_CSR
      },
      {
        link: "/responsible-disclosure/lp",
        displayText: RESPONSIBLE_DISCLOSURE
      }
    ]
  }
};
var getMenuItems = (platform, userSessionType) => {
  var _a2;
  return ((_a2 = menuItems[platform]) == null ? void 0 : _a2[userSessionType]) || [];
}, PDP_TOP_NAV = "productDetailPage:CartIcon", BACK_BTN_HEIGHT = 24, BACK_BTN_WIDTH = 24;

// app/hooks/useLogout.ts
var import_react2 = require("@remix-run/react");

// app/constants/api.ts
var API_STATES = {
  IDLE: "idle",
  SUBMITTING: "submitting",
  LOADING: "loading",
  SUCCESS: "success"
}, API_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH"
}, baseHeaders = {
  accept: "application/json, text/plain, */*",
  "content-type": "application/json;charset=UTF-8"
};
var _a, PLATFORM = typeof process < "u" && ((_a = process == null ? void 0 : process.env) == null ? void 0 : _a.PLATFORM) || "nykaa" /* NYKAA */, defaultRequestOptions = {
  CSRF: !0,
  STORE: !0,
  CATALOG_TAG_FILTER: PLATFORM !== "nykaa" /* NYKAA */
}, WHITELISTED_COOKIES = ["PHPSESSID"], ERROR_MESSAGE = "Something went wrong. Please try again.";

// app/utils/logger.ts
var isBrowser = typeof window < "u", logFilePath = isBrowser ? "app.log" : process.env.LOG_FILE_PATH || "app.log", logger, loggerInitialized;
isBrowser ? (logger = {
  info: (message, ...optionalParams) => {
    console.info(message, ...optionalParams);
  },
  warn: (message, ...optionalParams) => {
    console.warn(message, ...optionalParams);
  },
  error: (message, ...optionalParams) => {
    console.error(message, ...optionalParams);
  },
  debug: (message, ...optionalParams) => {
    process.env && console.debug(message, ...optionalParams);
  }
}, loggerInitialized = Promise.resolve()) : loggerInitialized = import("winston").then((winston) => {
  let winstonLogger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(
        ({ timestamp, level, message, ...meta3 }) => `${timestamp} [${level}]: ${message} ${Object.keys(meta3).length ? JSON.stringify(meta3) : ""}`
      )
    ),
    transports: [
      new winston.transports.File({ filename: logFilePath }),
      new winston.transports.Console({
        format: winston.format.simple()
      })
    ]
  });
  logger = {
    info: winstonLogger.info.bind(winstonLogger),
    warn: winstonLogger.warn.bind(winstonLogger),
    error: winstonLogger.error.bind(winstonLogger),
    debug: winstonLogger.debug.bind(winstonLogger)
  };
});

// app/utils/cookies.ts
var getCookieData = (name, decodedCookie) => {
  let decodedCookies = decodedCookie.split(";") || [], [desiredCookie] = decodedCookies.filter((cookie) => cookie ? cookie.trim().indexOf(name) === 0 : !1);
  if (desiredCookie)
    try {
      return decodeURIComponent(desiredCookie.trim().substring(name.length, desiredCookie.length));
    } catch (error) {
      return logger.error("Error in decoding cookie", error), "";
    }
  return "";
}, getCookie = (cookieName) => {
  let name = `${cookieName}=`;
  return getCookieData(name, document.cookie);
}, setCookie = (cookieName, cookieValue, days, domain) => {
  let date = /* @__PURE__ */ new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
  let expires = `expires=${date.toUTCString()}`, domainToSet = "";
  domain && domain !== "" && (domainToSet = `;Domain=${domain}`), document.cookie = `${cookieName}=${cookieValue};${expires};path=/${domainToSet}`;
}, deleteCookie = (cookieName) => {
  document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;`;
};

// app/constants/storage.ts
var FACEBOOK_LOGIN_COOKIE = "fblogin", GOOGLE_LOGIN_COOKIE = "googlelogin", USER_DATA_STORAGE_KEY = "head_data_react", PIN_CODE_FOR_DELIVERY = "pinCodeDel", ADDRESS_ID_FOR_DELIVERY = "addressIdDel", LOGIN_LOCATION = "loginLocation", ONE_TAP_SHOWN = "oneTapShown";

// app/utils/storage/localStorage.ts
var handleError = (action10, key, error) => {
  console.error(`Error ${action10} item ${key} in localStorage`, error);
}, localStorageService = {
  getItem: (key) => {
    if (!localStorage || !key)
      return null;
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return handleError("getting", key, error), null;
    }
  },
  setItem: (key, value) => {
    if (!localStorage || !key || value === null)
      return !1;
    try {
      return localStorage.setItem(key, value), !0;
    } catch (error) {
      return handleError("setting", key, error), !1;
    }
  },
  removeItem: (key) => {
    if (!localStorage || !key)
      return !1;
    try {
      return localStorage.removeItem(key), !0;
    } catch (error) {
      return handleError("removing", key, error), !1;
    }
  }
};

// app/utils/auth.ts
var cleanupAuthData = () => {
  navigator.credentials.preventSilentAccess(), deleteCookie(FACEBOOK_LOGIN_COOKIE), deleteCookie(GOOGLE_LOGIN_COOKIE), deleteCookie(USER_DATA_STORAGE_KEY), deleteCookie(PIN_CODE_FOR_DELIVERY), deleteCookie(ADDRESS_ID_FOR_DELIVERY), localStorageService.removeItem(LOGIN_LOCATION), localStorageService.removeItem(ONE_TAP_SHOWN), setTimeout(() => {
    window.location.reload();
  }, 1e3);
};

// app/hooks/useLogout.ts
var useLogout = () => {
  let fetcher = (0, import_react2.useFetcher)();
  return { handleLogout: () => {
    var _a2;
    fetcher.submit(
      {},
      { method: API_METHODS.POST, action: ACTION_ROUTES.logout }
    ), fetcher.state === API_STATES.IDLE && ((_a2 = fetcher.data) == null ? void 0 : _a2.status) === API_STATES.SUCCESS && cleanupAuthData();
  }, isLoading: fetcher.state === API_STATES.SUBMITTING };
};

// app/components/Header/Menu/AuthenticatedUser.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), AuthenticatedUser = () => {
  let { handleLogout, isLoading } = useLogout(), menuItems3 = getMenuItems(
    platformNames.NYKAA,
    userSessionTypes.LOGGED_IN
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ul", { children: [
    menuItems3.map((item, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "li",
      {
        className: LIST_ITEM_CLASS,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "a",
          {
            href: item.link,
            className: "link",
            children: item.displayText
          },
          void 0,
          !1,
          {
            fileName: "app/components/Header/Menu/AuthenticatedUser.tsx",
            lineNumber: 24,
            columnNumber: 11
          },
          this
        )
      },
      index2,
      !1,
      {
        fileName: "app/components/Header/Menu/AuthenticatedUser.tsx",
        lineNumber: 20,
        columnNumber: 9
      },
      this
    )),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { className: LIST_ITEM_CLASS, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "a",
      {
        href: "/chat",
        className: "link",
        children: "Chat Now"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Header/Menu/AuthenticatedUser.tsx",
        lineNumber: 33,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Header/Menu/AuthenticatedUser.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { className: LIST_ITEM_CLASS, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "a",
      {
        href: "#",
        className: "link",
        onClick: handleLogout,
        children: "Logout"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Header/Menu/AuthenticatedUser.tsx",
        lineNumber: 41,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Header/Menu/AuthenticatedUser.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header/Menu/AuthenticatedUser.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}, AuthenticatedUser_default = AuthenticatedUser;

// app/constants/webview/index.ts
var webViewCallbacks = {
  showBrand: "showBrand",
  showSearch: "showSearch",
  showCart: "showCart",
  finish: "finish",
  navigateToWishlist: "navigateToWishlist",
  updateCartCount: "updateCartCount",
  sharePost: "sharePost",
  doLogin: "doLogin",
  doMixpanel: "doMixpanel",
  sendCleverTapTracking: "sendCleverTapTracking",
  sendAppsflyerTracking: "sendAppsflyerTracking"
}, WEBVIEW_ERROR = "Error while loading webview";

// app/constants/device/index.ts
var Device = /* @__PURE__ */ ((Device2) => (Device2[Device2.ANDROID = 0] = "ANDROID", Device2[Device2.IOS = 1] = "IOS", Device2[Device2.WEB = 2] = "WEB", Device2))(Device || {}), IOS_APP = /nykaa-ios/i;
var ANDROID_APP = /nykaa-android/i;

// app/utils/device/index.ts
var getDevice = () => {
  var _a2;
  let userAgent = "";
  typeof window < "u" && (userAgent = ((_a2 = window == null ? void 0 : window.navigator) == null ? void 0 : _a2.userAgent) || "");
  let device = 2 /* WEB */;
  return userAgent != null && userAgent.match(IOS_APP) ? device = 1 /* IOS */ : userAgent != null && userAgent.match(ANDROID_APP) && (device = 0 /* ANDROID */), device;
}, isAndroid = () => getDevice() === 0 /* ANDROID */;
var isWeb = () => getDevice() === 2 /* WEB */;

// app/utils/validations.ts
var isValidArrayLength = (value) => Array.isArray(value) && value.length > 0, isValidObject = (value) => value !== null && typeof value == "object" && !Array.isArray(value) && Object.keys(value).length > 0, isValidString = (value) => typeof value == "string" && value.trim().length > 0;

// app/utils/webview/index.ts
var stringifyNestedObject = (callbackParams = []) => isValidString(callbackParams) ? [callbackParams] : Object.keys(callbackParams).map((param) => {
  let paramValue = callbackParams[param];
  return isValidObject(paramValue) ? JSON.stringify(paramValue) : paramValue;
}), webViewCallbackhandler = (params) => {
  let { device, callbackParams, callbackFunctionName } = params;
  try {
    switch (device) {
      case 0 /* ANDROID */: {
        if (!callbackParams) {
          window.AndroidFunction[`${callbackFunctionName}`]();
          return;
        }
        let androidParams = stringifyNestedObject(callbackParams);
        isValidArrayLength(androidParams) ? window.AndroidFunction[`${callbackFunctionName}`](...androidParams) : window.AndroidFunction[`${callbackFunctionName}`](callbackParams);
        break;
      }
      case 1 /* IOS */:
        window.webkit.messageHandlers[`${callbackFunctionName}`].postMessage(
          callbackParams
        );
        break;
      default:
        break;
    }
  } catch (error) {
    logger.error(
      error,
      `${WEBVIEW_ERROR}, in ${Device[device]} at function ${callbackFunctionName}`
    );
  }
};

// app/actions/navigate/redirect.ts
var import_node = require("@remix-run/node");

// app/constants/PD/index.ts
var SNSP_SLUG = "/snsp/", PD_SLUG = "/p/", QUERY_PARAM_KEYS = {
  SKU: "skuId",
  PRODUCT_ID: "productId",
  MY_ORDERS: "my_orders"
}, MAX_RATING = 5, MODAL_QUERY_PARAM = { key: "modal", value: "true" }, PAGE_SOURCE = "source";

// app/actions/navigate/redirect.ts
var redirectToUrl = (url) => {
  if (__SERVER__)
    return (0, import_node.redirect)(url);
  window.location.href = url;
}, handleNavigationForModal = (url) => {
  let currentUrl = new URL(window.location.href), { key, value } = MODAL_QUERY_PARAM;
  currentUrl.searchParams.get(key) === value ? window.location.replace(url) : redirectToUrl(url);
};

// app/actions/navigate/goToAuthPage.ts
var redirectAuthPage = () => {
  let locationPathName = `${window.location.pathname}${window.location.search}`;
  if (!isWeb()) {
    redirectToAuthPageForApp(locationPathName);
    return;
  }
  try {
    let CURRENT_URL = CURRENT_URL_KEY;
    localStorageService.setItem(CURRENT_URL, locationPathName);
  } catch (err) {
    logger.info((err == null ? void 0 : err.toString()) || "", "Error: authCurrentUrlInStorage");
  }
  redirectToUrl(AUTH_PAGE);
}, redirectToAuthPageForApp = (locationPathName) => {
  let appParams = {
    device: getDevice(),
    callbackFunctionName: webViewCallbacks.doLogin,
    callbackParams: isAndroid() ? { nextUrlToLoadIfLoginSuccess: locationPathName } : { redirectionURL: locationPathName }
  };
  webViewCallbackhandler(appParams);
};

// app/components/Header/Menu/GuestUser.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), menuItems2 = getMenuItems(platformNames.NYKAA, userSessionTypes.GUEST), renderMenuItems = (items) => items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
  "li",
  {
    className: LIST_ITEM_CLASS,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      MenuLink,
      {
        href: item.link,
        className: "link",
        children: item.displayText
      },
      void 0,
      !1,
      {
        fileName: "app/components/Header/Menu/GuestUser.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    )
  },
  item.link,
  !1,
  {
    fileName: "app/components/Header/Menu/GuestUser.tsx",
    lineNumber: 16,
    columnNumber: 5
  },
  this
)), GuestUser = () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
  renderMenuItems(menuItems2),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { className: LIST_ITEM_CLASS, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    MenuLink,
    {
      onClick: () => redirectAuthPage(),
      className: "link",
      children: "Login"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Header/Menu/GuestUser.tsx",
      lineNumber: 33,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Header/Menu/GuestUser.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Header/Menu/GuestUser.tsx",
  lineNumber: 30,
  columnNumber: 3
}, this), GuestUser_default = GuestUser;

// app/constants/context/auth.ts
var authState = {
  fetching: !1,
  dataFetched: !1,
  isFetchingError: !1,
  fetchedOverNetwork: !1,
  user: {
    cartItemsCount: null,
    email: "",
    firstName: "",
    formKey: "",
    groupId: "",
    id: "",
    isLoyal: null,
    isPro: !1,
    lastName: "",
    rewardPoints: null,
    userName: "",
    wishlist: [],
    isRepeatUser: !1,
    priveBand: null
  },
  setUser: (user) => {
  }
}, auth_default = authState;

// app/hooks/useAuth.ts
var import_react4 = require("react");

// app/constants/remoteConfig.ts
var DEFAULT_CONFIG = {
  switches: {},
  configs: {
    collapsePdConfig: {
      couponSection: {
        title: "Coupons",
        subTitle: "",
        isOpened: !1,
        key: "coupons"
      },
      offerSection: {
        title: "Offers",
        subTitle: "",
        isOpened: !1,
        key: "offers"
      },
      comboSection: {
        title: "Top selling combos",
        subTitle: "",
        isOpened: !1,
        key: "oupons"
      },
      productDetails: {
        title: "Product Details",
        subTitle: "",
        isOpened: !1,
        key: "productDetailsSection"
      },
      returnSection: {
        title: "Authenticity & Return Policy",
        subTitle: "",
        isOpened: !1,
        key: "authReturn"
      },
      deliverySection: {
        title: "Check Delivery Date",
        subTitle: "",
        isOpened: !1,
        key: "deliveryWidget"
      },
      rnrSection: {
        title: "Ratings & Reviews",
        subTitle: "verified ratings",
        isOpened: !1,
        key: "ratingReviews"
      },
      highlightsSection: {
        title: "Highlights",
        subTitle: "",
        isOpened: !1,
        key: "highlights"
      }
    }
  }
}, REMOTE_CONFIG_FETCH_ERR = "useConfig must be used within a ConfigContext.Provider";

// app/contexts/index.ts
var import_react3 = require("react"), ConfigContext = (0, import_react3.createContext)(null), AuthContext = (0, import_react3.createContext)(auth_default);

// app/hooks/useAuth.ts
var useAuth = () => {
  let auth = (0, import_react4.useContext)(AuthContext);
  return auth || (logger.error(REMOTE_CONFIG_FETCH_ERR), auth_default);
}, useIsLoggedIn = () => {
  let auth = useAuth(), [isLoggedIn, setIsLoggedIn] = (0, import_react4.useState)(!1);
  return (0, import_react4.useEffect)(() => {
    let { user, dataFetched } = auth || {}, { id, email } = user || {};
    setIsLoggedIn(dataFetched && (!!id || !!email));
  }, [auth]), isLoggedIn;
};

// app/components/Header/Menu/index.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), Menu = () => {
  let [isMenuOpen, setIsMenuOpen] = (0, import_react5.useState)(!1), dropDownRef = (0, import_react5.useRef)(null), isLoggedIn = useIsLoggedIn(), toggleMenu = () => {
    let isOpen = !isMenuOpen;
    isOpen ? document.body.classList.add(BODY_OVERFLOW_FOR_MODAL) : document.body.classList.remove(BODY_OVERFLOW_FOR_MODAL), setIsMenuOpen(isOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(MenuWrapper, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(MenuButton, { onClick: toggleMenu, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(AccountIcon_default, {}, void 0, !1, {
      fileName: "app/components/Header/Menu/index.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Header/Menu/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    isMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      DropdownMenu,
      {
        onClick: (event) => {
          event.target === event.currentTarget && (event.preventDefault(), toggleMenu());
        },
        ref: dropDownRef,
        tabIndex: 0,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { className: "list", children: isLoggedIn ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(AuthenticatedUser_default, {}, void 0, !1, {
          fileName: "app/components/Header/Menu/index.tsx",
          lineNumber: 45,
          columnNumber: 27
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(GuestUser_default, {}, void 0, !1, {
          fileName: "app/components/Header/Menu/index.tsx",
          lineNumber: 45,
          columnNumber: 51
        }, this) }, void 0, !1, {
          fileName: "app/components/Header/Menu/index.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Header/Menu/index.tsx",
        lineNumber: 39,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Header/Menu/index.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}, Menu_default = Menu;

// app/components/Header/Search/index.tsx
var import_react6 = require("@remix-run/react");

// app/components/Header/assets/SearchIcon.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function SearchIcon({ fillColor = "#111314", fillOpacity = "1" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: fillColor,
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("g", { id: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        "path",
        {
          id: "Icon",
          d: "M21.7694 20.6347L16.1819 15.0453C17.3122 13.6693 17.984 11.9093 17.984 9.98933C17.984 5.57333 14.4119 2 9.99733 2C5.57214 2 2 5.57333 2 9.98933C2 14.4053 5.57214 17.9787 9.98666 17.9787C11.906 17.9787 13.6654 17.296 15.041 16.176L20.6284 21.7653C20.7884 21.9253 20.991 22 21.1936 22C21.3962 22 21.5988 21.9253 21.7587 21.7653C22.0786 21.456 22.0786 20.944 21.7694 20.6347ZM9.98666 16.3787C6.46784 16.3787 3.59947 13.5093 3.59947 9.98933C3.59947 6.46933 6.46784 3.6 9.98666 3.6C13.5055 3.6 16.3739 6.46933 16.3739 9.98933C16.3739 13.52 13.5162 16.3787 9.98666 16.3787Z",
          fill: "#001325",
          "fill-opacity": "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header/assets/SearchIcon.tsx",
          lineNumber: 18,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Header/assets/SearchIcon.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Header/assets/SearchIcon.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}
var SearchIcon_default = SearchIcon;

// app/components/Header/helper.ts
var getSearchURL = (pathname) => {
  let lpValue = pathname === SEARCH_URL ? `&lp=${LP_VALUE}` : "", pageType = getPageType(pathname) || "other";
  return `${SEARCH_QUERY}?sourcePage=${pageType}${lpValue}`;
}, getPageType = (pathName) => {
  let currentPageType = "";
  return pathName === "/" && (currentPageType = "home" /* HOME */), (pathName && pathName.indexOf("/p/") > -1 || pathName.indexOf("/snsp/") > -1) && (currentPageType = "product" /* PRODUCT */), currentPageType;
};

// app/components/Header/Search/index.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), Search = () => {
  let { pathname } = (0, import_react6.useLocation)(), handleSearchClickForApp = () => {
    let appParams = {
      device: getDevice(),
      callbackFunctionName: webViewCallbacks.showSearch,
      callbackParams: isAndroid() ? null : {}
    };
    webViewCallbackhandler(appParams);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Link, { onClick: () => {
    if (!isWeb()) {
      handleSearchClickForApp();
      return;
    }
    let searchLink = getSearchURL(pathname);
    window.location.href = searchLink;
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SearchIcon_default, { fillColor: "none" }, void 0, !1, {
    fileName: "app/components/Header/Search/index.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Header/Search/index.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}, Search_default = Search;

// app/components/Header/assets/BagIcon.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Bag() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("g", { id: "shopping-bag", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "path",
        {
          id: "Icon",
          d: "M20.9474 6.97355H16.4211V6.65609C16.5263 4.1164 14.5263 2 12 2C9.47368 2.10582 7.57895 4.1164 7.57895 6.65609V6.97355H3.05263C2.42105 6.97355 2 7.39683 2 8.03175V16.709C2 19.672 4.31579 22 7.26316 22H16.7368C19.6842 22 22 19.672 22 16.709V8.03175C22 7.50265 21.5789 6.97355 20.9474 6.97355ZM9.1579 6.65609C9.1579 5.06878 10.4211 3.69312 12 3.5873C13.5789 3.69312 14.8421 5.06878 14.8421 6.65609V6.97355H9.1579V6.65609ZM20.4211 16.8148C20.4211 18.8254 18.7368 20.5185 16.7368 20.5185H7.26316C5.26316 20.5185 3.57895 18.8254 3.57895 16.8148V8.56085H7.57895V10.6772C7.36842 10.8889 7.26316 11.2063 7.26316 11.418C7.26316 12.0529 7.78947 12.4762 8.31579 12.4762C8.84211 12.4762 9.36842 11.9471 9.36842 11.418C9.36842 11.1005 9.26316 10.8889 9.05263 10.6772V8.56085H14.7368V10.5714C14.5263 10.7831 14.4211 11.1005 14.4211 11.418C14.4211 12.0529 14.8421 12.582 15.4737 12.582C16.1053 12.582 16.6316 12.1587 16.6316 11.5238C16.6316 11.2063 16.5263 10.9947 16.3158 10.7831V8.66667H20.4211V16.8148Z",
          fill: "#001325",
          "fill-opacity": "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header/assets/BagIcon.tsx",
          lineNumber: 13,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Header/assets/BagIcon.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Header/assets/BagIcon.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}
var BagIcon_default = Bag;

// app/components/Header/ShoppingBag/index.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), ShoppingBag = () => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Button, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(BagIcon_default, {}, void 0, !1, {
  fileName: "app/components/Header/ShoppingBag/index.tsx",
  lineNumber: 10,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Header/ShoppingBag/index.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this), ShoppingBag_default = ShoppingBag;

// app/actions/navigate/goBack.ts
var handleBackButtonClickForApp = () => {
  if (typeof window < "u" && new URLSearchParams(window.location.search).get(PAGE_SOURCE) === QUERY_PARAM_KEYS.MY_ORDERS) {
    window.history.back();
    return;
  }
  let appParams = {
    device: getDevice(),
    callbackFunctionName: webViewCallbacks.finish,
    callbackParams: isAndroid() ? null : {}
  };
  webViewCallbackhandler(appParams);
}, handleBackButtonClick = () => {
  if (!isWeb()) {
    handleBackButtonClickForApp();
    return;
  }
  document.referrer && window.history.back();
};

// app/actions/navigate/goToShoppingBag.ts
var handleBagClickForApp = () => {
  let appParams = {
    device: getDevice(),
    callbackFunctionName: webViewCallbacks.showCart,
    callbackParams: isAndroid() ? { title: "" } : {}
  };
  webViewCallbackhandler(appParams);
}, redirectToShoppingBag = (pageSource) => {
  if (!isWeb()) {
    handleBagClickForApp();
    return;
  }
  let queryParams = [], url = CHECKOUT_PAGE;
  pageSource && queryParams.push(`${PAGE_SOURCE}=${pageSource}`), url += `?${queryParams.join("&")}`, handleNavigationForModal(url);
};

// app/components/Header/WebHeader.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), HeaderForWeb = () => {
  let { user } = useAuth() || {}, { cartItemsCount: cartCount } = user || {};
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(LeftSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(BackButton, { onClick: handleBackButtonClick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        BackArrow_default,
        {
          height: BACK_BTN_HEIGHT,
          width: BACK_BTN_WIDTH
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header/WebHeader.tsx",
          lineNumber: 28,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Header/WebHeader.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Logo, { href: HOME, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(NykaaLogo_default, {}, void 0, !1, {
        fileName: "app/components/Header/WebHeader.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Header/WebHeader.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header/WebHeader.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(RightSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Search_default, {}, void 0, !1, {
        fileName: "app/components/Header/WebHeader.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(CartWrapper, { onClick: () => redirectToShoppingBag(PDP_TOP_NAV), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ShoppingBag_default, {}, void 0, !1, {
          fileName: "app/components/Header/WebHeader.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        cartCount && cartCount > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(CartCounter, { children: cartCount }, void 0, !1, {
          fileName: "app/components/Header/WebHeader.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/Header/WebHeader.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Menu_default, {}, void 0, !1, {
        fileName: "app/components/Header/WebHeader.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header/WebHeader.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header/WebHeader.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}, WebHeader_default = HeaderForWeb;

// app/components/Header/assets/WishlistIcon.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function WishlistIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("g", { id: "heart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "path",
        {
          id: "Icon",
          d: "M17.3062 5.00888C18.1009 5.00888 18.7963 5.31065 19.3923 5.71302C20.8824 6.92012 21.0811 9.13314 19.7897 10.5414C19.6904 10.642 19.6904 10.7426 19.591 10.7426L12.0412 18.4882L4.49139 10.8432C3.19998 9.5355 3.19998 7.32249 4.49139 5.9142C4.59073 5.81361 4.59073 5.81361 4.69007 5.71302C5.28611 5.31065 6.08083 5.00888 6.77621 5.00888C7.7696 5.00888 8.763 5.41124 9.45837 6.11538L10.9485 7.62426L12.0412 8.73077L13.1339 7.62426L14.624 6.11538C15.3194 5.41124 16.3128 5.00888 17.3062 5.00888ZM17.3062 3.5C15.9154 3.5 14.5247 4.10355 13.5313 5.10947L12.0412 6.61834L10.5511 5.10947C9.55771 4.10355 8.16696 3.5 6.77621 3.5C5.68347 3.5 4.59073 3.90237 3.69668 4.60651C1.70989 6.31657 1.41187 9.43491 3.10064 11.5473C3.19998 11.6479 3.29932 11.7485 3.39866 11.8491L12.0412 20.5L20.5844 11.8491C22.4719 9.93787 22.4719 6.81953 20.5844 4.80769C20.4851 4.7071 20.3857 4.60651 20.2864 4.50592C19.4917 3.90237 18.3989 3.5 17.3062 3.5Z",
          fill: "#001325",
          "fill-opacity": "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header/assets/WishlistIcon.tsx",
          lineNumber: 13,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Header/assets/WishlistIcon.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Header/assets/WishlistIcon.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}
var WishlistIcon_default = WishlistIcon;

// app/actions/navigate/goToWishlist.ts
var redirectToWishlist = (isLoggedIn) => {
  if (!isWeb()) {
    handleWishlistClickForApp(isLoggedIn);
    return;
  }
  redirectToUrl(WISHLIST);
}, handleWishlistClickForApp = (isLoggedIn) => {
  if (!isLoggedIn) {
    let locationPathName = `${window.location.pathname}${window.location.search}`;
    redirectToAuthPageForApp(locationPathName);
  }
  let appParams = {
    device: getDevice(),
    callbackFunctionName: webViewCallbacks.navigateToWishlist,
    callbackParams: {}
  };
  webViewCallbackhandler(appParams);
};

// app/components/Header/Wishlist/index.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), Wishlist = () => {
  let isLoggedIn = useIsLoggedIn();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Link, { onClick: () => redirectToWishlist(isLoggedIn), children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(WishlistIcon_default, {}, void 0, !1, {
    fileName: "app/components/Header/Wishlist/index.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Header/Wishlist/index.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}, Wishlist_default = Wishlist;

// app/components/Header/AppHeader.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), AppHeader = () => {
  let { user } = useAuth() || {}, { cartItemsCount: cartCount } = user || {};
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(LeftSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(BackButton, { onClick: handleBackButtonClick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(BackArrow_default, {}, void 0, !1, {
        fileName: "app/components/Header/AppHeader.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Header/AppHeader.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Logo, { href: HOME, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(NykaaLogo_default, {}, void 0, !1, {
        fileName: "app/components/Header/AppHeader.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Header/AppHeader.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header/AppHeader.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(RightSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Search_default, {}, void 0, !1, {
        fileName: "app/components/Header/AppHeader.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Wishlist_default, {}, void 0, !1, {
        fileName: "app/components/Header/AppHeader.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CartWrapper, { onClick: () => redirectToShoppingBag(PDP_TOP_NAV), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ShoppingBag_default, {}, void 0, !1, {
          fileName: "app/components/Header/AppHeader.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        cartCount && cartCount > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CartCounter, { children: cartCount }, void 0, !1, {
          fileName: "app/components/Header/AppHeader.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/Header/AppHeader.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header/AppHeader.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header/AppHeader.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}, AppHeader_default = AppHeader;

// app/components/Header/index.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), Header = () => isWeb() ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(WebHeader_default, {}, void 0, !1, {
  fileName: "app/components/Header/index.tsx",
  lineNumber: 5,
  columnNumber: 33
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(AppHeader_default, {}, void 0, !1, {
  fileName: "app/components/Header/index.tsx",
  lineNumber: 5,
  columnNumber: 49
}, this), Header_default = Header;

// app/utils/colorUtils.ts
function hexToRgba(hex, alpha = 1) {
  let bigint = parseInt(hex.slice(1), 16), r = bigint >> 16 & 255, g = bigint >> 8 & 255, b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// app/themes/color/gColor.ts
var colors = {
  pink400: "#f061a7",
  pink600: "#e80071",
  pebble900: "#001325",
  snow100: "#ffffff",
  snow300: "#f3f4f5",
  snow400: "#dadee2",
  snow500: "#cdd3d8",
  snow600: "#acb2b7",
  // snow700, snow800 & snow900 has been deprecated, keeping them here for backward compatibility
  // snow700, snow800 & snow900 has been deprecated, keeping them here for backward compatibility
  // black700, black800 & black900 has been deprecated, keeping them here for backward compatibility
  black200: "#595e63",
  black300: "#3a4047",
  black500: "#1B1E21",
  black400: "#1b1e21",
  black600: "#111314",
  // black700, black800 & black900 has been deprecated, keeping them here for backward compatibility
  red700: "#cb2121",
  orange700: "#c83602",
  green700: "#068743"
};

// app/themes/color/aColor.ts
var colorTokens = {
  primary: colors.black600,
  primaryInverse: colors.pink400,
  secondary: colors.pink600,
  secondaryInverse: colors.pink400,
  surface: colors.snow100,
  surface20: colors.snow300,
  surface30: colors.snow400,
  surface40: colors.snow500,
  surface50: colors.snow600,
  surfaceInverse: colors.black400,
  surfaceInverse10: colors.black600,
  surfaceInverse30: colors.black300,
  surfaceInverse40: colors.black200,
  textPrimary: colors.pebble900,
  textInversePrimary: colors.snow100,
  // positive50 has been deprecated, use positive10 instead
  positive: colors.green700,
  // negative50 has been deprecated, use negative10 instead
  negative: colors.red700,
  warning: colors.orange700,
  white: colors.snow100
};

// app/themes/typography/gTypography.ts
var type100 = {
  fontSize: "10px",
  fontWeight: 400,
  lineHeight: "12px"
}, type101 = {
  fontSize: "10px",
  fontWeight: 500,
  lineHeight: "12px"
}, type102 = {
  fontSize: "10px",
  fontWeight: 600,
  lineHeight: "12px"
}, type120 = {
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "16px"
}, type121 = {
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: "16px"
}, type122 = {
  fontSize: "12px",
  fontWeight: 600,
  lineHeight: "16px"
}, type140 = {
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px"
}, type141 = {
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "20px"
}, type142 = {
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "20px"
}, type160 = {
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "24px"
}, type161 = {
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px"
}, type162 = {
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "24px"
}, type200 = {
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "24px"
}, type201 = {
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px"
}, type202 = {
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "24px"
}, type240 = {
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "28px"
}, type241 = {
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: "28px"
}, type242 = {
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "28px"
}, type320 = {
  fontSize: "32px",
  fontWeight: 400,
  lineHeight: "36px"
}, type321 = {
  fontSize: "32px",
  fontWeight: 500,
  lineHeight: "36px"
}, type322 = {
  fontSize: "32px",
  fontWeight: 600,
  lineHeight: "36px"
}, type360 = {
  fontSize: "36px",
  fontWeight: 400,
  lineHeight: "40px"
}, type361 = {
  fontSize: "36px",
  fontWeight: 500,
  lineHeight: "40px"
}, type362 = {
  fontSize: "36px",
  fontWeight: 600,
  lineHeight: "40px"
}, spacing50 = -0.3, spacing75 = -0.1, spacing100 = 0, spacing200 = 0.1, spacing300 = 0.3, spacing400 = 0.6, spacing500 = 0.9, typography = {
  type100,
  type101,
  type102,
  type120,
  type121,
  type122,
  type140,
  type141,
  type142,
  type160,
  type161,
  type162,
  type200,
  type201,
  type202,
  type240,
  type241,
  type242,
  type320,
  type321,
  type322,
  type360,
  type361,
  type362,
  spacing50,
  spacing75,
  spacing100,
  spacing200,
  spacing300,
  spacing400,
  spacing500
}, gTypography_default = typography;

// app/themes/spacing/gSpacing.ts
var spacing = {
  spacing0: "0",
  spacing10: "0.125rem",
  spacing20: "0.25rem",
  spacing40: "0.5rem",
  spacing50: "0.625rem",
  spacing60: "0.75rem",
  spacing80: "1rem",
  spacing100: "1.25rem",
  spacing120: "1.5rem",
  spacing160: "2rem",
  spacing200: "2.5rem",
  spacing240: "3rem",
  spacing320: "4rem",
  spacing480: "6rem",
  spacing640: "8rem",
  spacing720: "9rem"
}, gSpacing_default = spacing;

// app/themes/typography/aTypography.ts
var getMobileTypography = (tokens) => {
  let {
    type322: type3222,
    spacing50: spacing502,
    type242: type2422,
    type202: type2022,
    type162: type1622,
    spacing75: spacing752,
    spacing100: spacing1002,
    type142: type1422,
    type161: type1612,
    type141: type1412,
    type121: type1212,
    type160: type1602,
    type140: type1402,
    type100: type1002,
    type120: type1202,
    spacing200: spacing2002,
    type122: type1222,
    spacing400: spacing4002,
    type102: type1022,
    spacing500: spacing5002
  } = tokens;
  return {
    titleXLarge: { ...type3222, letterSpacing: spacing502 },
    titleLarge: { ...type2422, letterSpacing: spacing502 },
    titleMedium: { ...type2022, letterSpacing: spacing752 },
    titleSmall: { ...type1622, letterSpacing: spacing1002 },
    titleXSmall: { ...type1422, letterSpacing: spacing1002 },
    subTitleLarge: { ...type1612, letterSpacing: spacing752 },
    subTitleMedium: { ...type1412, letterSpacing: spacing752 },
    subTitleSmall: { ...type1212, letterSpacing: spacing1002 },
    bodyLarge: { ...type1602, letterSpacing: spacing1002 },
    bodyMedium: { ...type1402, letterSpacing: spacing1002 },
    bodySmall: { ...type1202, letterSpacing: spacing1002 },
    bodyXSmall: { ...type1002, letterSpacing: spacing2002 },
    buttonLarge: { ...type1622, letterSpacing: spacing2002 },
    buttonMedium: { ...type1422, letterSpacing: spacing2002 },
    buttonSmall: { ...type1222, letterSpacing: spacing2002 },
    labelMedium: { ...type1222, letterSpacing: spacing4002 },
    labelSmall: { ...type1022, letterSpacing: spacing5002 }
  };
};
var getTypography = (tokens) => ({
  ...getMobileTypography(tokens),
  ...tokens
});

// app/themes/index.ts
var createLightTheme = (customTokens) => {
  let updatedTokens = {
    ...colorTokens,
    ...customTokens.colors
  }, typographyTokens = {
    ...gTypography_default,
    ...customTokens.typography
  };
  return { ...{
    colors: {
      ...colors,
      ...updatedTokens
    },
    typography: {
      ...typographyTokens,
      ...getTypography(typographyTokens)
    },
    spacing: gSpacing_default
  } };
}, themes_default = createLightTheme;

// app/themes/baseTheme.ts
var theme = {
  colors: {
    primary: "#000",
    secondary: "#4caf50",
    background: "#f5f5f5",
    text: "#001325",
    textPrimary: hexToRgba("#001325", 0.92),
    textSecondary: hexToRgba("#001325", 0.64),
    textDisabled: hexToRgba("#001325", 0.36),
    textOutline: hexToRgba("#001325", 0.16)
  },
  typography: {
    titleXSmall: "1.2em",
    titleSmall: "1.4em",
    titleMedium: "1.6em",
    titleLarge: "1.8em",
    titleXLarge: "2em",
    bodySmall: "1em",
    bodyMedium: "1.2em",
    bodyLarge: "1.4em"
  }
}, baseTheme_default = { ...theme, ...themes_default({}) };

// app/factories/ThemeFactory.tsx
var ThemeFactory = class {
  static initialize() {
    return baseTheme_default;
  }
  static extendTheme(customTheme) {
    var _a2, _b;
    return customTheme ? {
      ...baseTheme_default,
      colors: {
        ...(_a2 = baseTheme_default) == null ? void 0 : _a2.colors,
        ...customTheme == null ? void 0 : customTheme.colors
      },
      typography: {
        ...(_b = baseTheme_default) == null ? void 0 : _b.typography,
        ...customTheme == null ? void 0 : customTheme.typography
      }
    } : baseTheme_default;
  }
}, ThemeFactory_default = ThemeFactory;

// app/styles/index.css
var styles_default = "/snsp/build/_assets/index-L64FRK4H.css";

// app/utils/config/index.ts
var import_node_cache = __toESM(require("node-cache"));
var cache = new import_node_cache.default();
async function fetchConfig() {
  await loggerInitialized;
  try {
    let cachedConfig = cache.get("config");
    if (cachedConfig)
      return logger.info("Using cached config"), cachedConfig;
    {
      let configUrl = process.env.REMOTE_CONFIG_URL;
      if (!configUrl)
        return logger.info("REMOTE_CONFIG_URL is not defined"), {};
      let configData = await (await fetch(configUrl)).json();
      return cache.set("config", configData, 600), logger.info("Fetched and cached new config"), configData;
    }
  } catch (error) {
    return logger.error("Error fetching config:", error), {};
  }
}

// app/hooks/useFetcherHandler.ts
var import_react7 = require("@remix-run/react"), import_react8 = require("react");
function useFetcherHandler({
  onSuccess,
  onError,
  successHandler
}) {
  let fetcher = (0, import_react7.useFetcher)(), { state, data } = fetcher, [isLoading, setIsLoading] = (0, import_react8.useState)(!1), [isContentLoading, setIsContentLoading] = (0, import_react8.useState)(!0);
  return (0, import_react8.useEffect)(() => {
    state === API_STATES.IDLE && data ? (successHandler(data) ? (setIsLoading(!0), onSuccess(data)) : onError(data.message || "Operation failed"), setIsContentLoading(!1), setIsLoading(!1)) : state === API_STATES.SUBMITTING && setIsLoading(!0);
  }, [state]), { fetcher, isLoading, isContentLoading };
}

// app/constants/datalayer/index.ts
var defaultDataLayer = () => ({
  isMobile: !0,
  gaId: process.env.GA_ID || "",
  optimizeId: process.env.OPTIMIZE_ID || "",
  newStack: !0
}), events = {
  ADD_TO_CART_CLICK: "addToCartClick",
  ADD_TO_CART_SUCCESS: "addToCartSuccess",
  ADD_TO_WISHLIST_SUCCESS: "addToWishlistSuccess",
  PRODUCT_PAGE_VIEW_CLIENT: "productPageViewClient",
  USER_DATA_FETCH: "userDataFetched",
  USER_LOGOUT: "userLoggedout",
  NOTIFY_ME: "notifyMe",
  NOTIFY_ME_SUBMIT: "notifyMeSubmit",
  GAMOOGA_CART_SUCCESS: "gamoogaCartSuccess",
  VARIANT_CHANGE_ON_PD: "variantChangePD",
  RATE_PRODUCT_CLICK: "rateProductClick",
  REMOVE_ROM_WISHLIST: "removeFromWishlist",
  REVIEW_IMAGE_CLICK: "reviewImageClick",
  REVIEW_FILTER_SELECTED: "filterSelected",
  REVIEW_SORT_SELECTED: "sortSelected",
  IMAGE_GRID_PAGE: "imageGridPage",
  VIEW_SIMILAR_CLICK: "viewSimilarClick",
  OFFERS_TAG_CLICK: "offersTagClick",
  ALL_SHADES_CLICK: "allShadesClick",
  REVIEW_IMAGE_CLOSE: "reviewImageClose",
  ALL_REVIEW_CLICK: "allReviewsClick",
  COMBO_REVIEW_CLICK: "comboReviewClicked",
  GUIDE_CLICK: "guideClick",
  GUIDE_OPENED: "guideOpened",
  PRODUCT_VIDEO_PLAY: "productVideoPlay",
  SIZE_CHART_CLICK: "sizeChartClick",
  VOICE_SEARCH_CLICK: "voiceSearchClick",
  VOICE_SEARCH_TRY_AGAIN: "voiceSearchTryAgain",
  CLICK_INTERACTION: "clickInteractionNew",
  BANNER_EVENTS: "bannerEvents",
  VERLOOP_LOAD: "loadVerloop",
  VERLOOP_LOGOUT: "logoutVerloop",
  CUSTOM_BANNER_CLICK: "customBannerClick",
  CHECK_PIN_CODE: "checkPinCode",
  READ_MORE_CLICK: "READ_MORE_CLICK",
  CAROUSAL_SLIDE_CHANGE: "carousalSlideChange",
  PDP_IMAGE_CLICK: "imageInCarouselClick",
  PDP_IMAGE_ENLARGE_ICON_CLICK: "imageEnlargeIconClick",
  CONFIG_EXPIRED: "reactConfigExpired",
  PDP_CAROUSAL_SWIPES: "PDP_CAROUSAL_SWIPES",
  PDP_VIDEO_SWIPED: "PDP_VIDEO_SWIPED"
};

// app/utils/datalayer/index.ts
function initializeDataLayer() {
  if (typeof window < "u")
    try {
      let defaultLayer = defaultDataLayer();
      window.dataLayer = [defaultLayer], window.datalayer = defaultLayer, pushEvent("pageview");
    } catch (error) {
      logger.error("Error initializing data layer: ", error);
    }
}
var pushToGtmDatalayer = (data) => {
  let { dataLayer } = window;
  dataLayer || (window.dataLayer = [], { dataLayer } = window), typeof data == "object" && dataLayer.push(data);
}, pushToLaunchDatalayer = (data, reset = !1) => {
  if (!window.datalayer || reset) {
    let { spaPageView } = window.datalayer || {};
    window.datalayer = { spaPageView };
  }
  typeof data == "object" && (window.datalayer = Object.assign(window.datalayer, data));
}, pushData = (data, reset = !1) => {
  if (typeof data != "object")
    throw new Error(
      `Invalid "data"! expected type "object", but got ${typeof data}`
    );
  pushToGtmDatalayer(data), pushToLaunchDatalayer(data, reset), window && window.na && window.na.pushDataLayerEvent && window.na.pushDataLayerEvent(data);
}, pushEvent = (eventName, data) => {
  if (!eventName)
    throw new Error(`"eventName" is required, you passed: ${eventName}`);
  if (typeof eventName != "string")
    throw new Error(
      `"eventName" has to be of type "string", passed: ${typeof eventName}`
    );
  let eventWithData = {
    event: eventName,
    ...data
  };
  pushData(eventWithData);
};

// app/constants/auth.ts
var reactStorageKeys = {
  CONFIG: "REACT_CONFIG",
  CONFIG_EXPIRY: "REACT_CONFIG_EXPIRY",
  EXPIRY_TIME: 36e5
  // THIS IS MILLISECONDS
};

// app/services/auth/helper.ts
var getAuthFromStorage = () => {
  try {
    let reactConfigExpiryString = localStorageService.getItem(
      reactStorageKeys.CONFIG_EXPIRY
    ), reactConfigExpiry = parseInt(reactConfigExpiryString || "", 10);
    if (new Date(reactConfigExpiry) > /* @__PURE__ */ new Date()) {
      let reactConfigData = localStorageService.getItem(
        reactStorageKeys.CONFIG
      );
      if (reactConfigData) {
        let parsedReactConfigData = JSON.parse(reactConfigData);
        if (parsedReactConfigData)
          return parsedReactConfigData;
      }
    } else
      pushEvent("mp_reset"), pushEvent(events.CONFIG_EXPIRED);
  } catch (err) {
    logger.error(`Error reading react config from storage: ${err}`);
  }
  return null;
}, storeAuthInStorage = (response) => {
  try {
    let currentTime = (/* @__PURE__ */ new Date()).getTime(), timeoutPeriod = reactStorageKeys.EXPIRY_TIME, expiryTime = new Date(currentTime + timeoutPeriod).getTime(), stringifiedResponse = JSON.stringify(response);
    localStorageService.setItem(reactStorageKeys.CONFIG, stringifiedResponse), localStorageService.setItem(
      reactStorageKeys.CONFIG_EXPIRY,
      `${expiryTime}`
    );
  } catch (err) {
    logger.info(`Error Storing reactConfig: ${err}`);
  }
}, updateCartCountInStorage = (cartCount = 0) => {
  var _a2;
  let authDataInStorage = getAuthFromStorage();
  if (authDataInStorage)
    try {
      ((_a2 = authDataInStorage == null ? void 0 : authDataInStorage.data) == null ? void 0 : _a2.result) && (authDataInStorage.data.result.cartItemsTotal = cartCount, storeAuthInStorage(authDataInStorage));
    } catch {
      logger.info("Error: updateCartCountInStorage");
    }
};

// app/transformers/auth/index.ts
var transformAuthData = (authData) => {
  let {
    form_key: formKey,
    cartItemsTotal,
    customerData: {
      id,
      loginEmail,
      loginUsername,
      gfirstname: gFirstName,
      glastname: gLastName,
      group_id: groupId,
      nykaa_pro: isPro,
      is_loyal: isLoyal
    }
  } = authData;
  return {
    cartItemsCount: cartItemsTotal || 0,
    email: loginEmail || "",
    firstName: gFirstName || "",
    formKey,
    groupId,
    id: id || "",
    isLoyal,
    isPro,
    lastName: gLastName || "",
    userName: loginUsername || ""
  };
};

// app/root.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
typeof process > "u" && (global.process = {
  env: {
    NODE_ENV: "development"
  }
});
function links() {
  return [{ rel: "stylesheet", href: styles_default }];
}
var meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
}), loader = async () => await fetchConfig(), shouldRevalidate = () => !1;
function App() {
  let GTM_ID = process.env.GTM_ID || "", config = (0, import_react10.useLoaderData)(), theme2 = ThemeFactory_default.initialize(), [authState2, setAuthState] = (0, import_react11.useState)(auth_default), { fetcher } = useFetcherHandler({
    onSuccess: (data) => {
      storeAuthInStorage({
        data,
        status: 200,
        statusText: ""
      });
      let transformedReactConfig = transformAuthData(data == null ? void 0 : data.result), updatedAuthState = {
        ...authState2,
        fetching: !1,
        dataFetched: !0,
        fetchedOverNetwork: !0,
        user: {
          ...authState2.user,
          ...transformedReactConfig
        }
      };
      setAuthState(updatedAuthState);
    },
    onError: (error) => {
      console.error("Error fetching react config:", error);
    },
    successHandler: (data) => data.status || !1
  }), setUser = (user) => {
    setAuthState((prevAuthState) => ({
      ...prevAuthState,
      user: {
        ...prevAuthState.user,
        ...user
      }
    }));
  }, handleUserSession = () => {
    let authDataInStorage = getAuthFromStorage(), { data: { result } = { result: null } } = authDataInStorage || {};
    if (result)
      try {
        let transformedReactConfig = transformAuthData(result), updatedAuthState = {
          ...authState2,
          dataFetched: !0,
          fetchedOverNetwork: !1,
          user: {
            ...authState2.user,
            ...transformedReactConfig
          }
        };
        setAuthState(updatedAuthState);
      } catch {
        logger.error("Error Transforming react config from storage");
      }
    else
      setAuthState({ ...authState2, fetching: !0 }), fetcher.load(ACTION_ROUTES.reactConfig);
  }, authContextConfig = {
    ...authState2,
    setUser
  };
  return (0, import_react11.useEffect)(() => {
    handleUserSession(), initializeDataLayer();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react10.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react10.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 139,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        "link",
        {
          rel: "icon",
          href: "//images-static.naikaa.com/media/wysiwyg/uiTools/2024-3/beauty.png",
          type: "image/x-icon"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 150,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("noscript", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        "div",
        {
          dangerouslySetInnerHTML: {
            __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 159,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react9.ThemeProvider, { theme: theme2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          import_react9.Global,
          {
            styles: import_react9.css`
              body {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                  Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
                  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
                  'Noto Color Emoji';
              }
            `
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 169,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ConfigContext.Provider, { value: config, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(AuthContext.Provider, { value: authContextConfig, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Header_default, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 182,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react10.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 183,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Footer_default, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 184,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 181,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react10.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 187,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react10.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 188,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react10.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 189,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}

// app/routes/sns-api/fetchWishlistIds.ts
var fetchWishlistIds_exports = {};
__export(fetchWishlistIds_exports, {
  action: () => action
});
var import_node2 = require("@remix-run/node");

// app/network/api/index.ts
var apiHelper = async ({
  url,
  method = "get",
  body,
  headers,
  additionalOptions = defaultRequestOptions,
  timeout = 1e4
}) => {
  await loggerInitialized;
  try {
    if (!url)
      throw logger.error('"url" cannot be empty!'), new Error('"url" cannot be empty!');
    let customRequestHeaders = {
      ...headers && { ...headers },
      ...defaultRequestOptions,
      ...additionalOptions
    }, params = {
      method,
      timeout,
      headers: customRequestHeaders,
      ...body && { body }
    }, response = await fetch(url, params);
    if (!response.ok)
      throw logger.error("Network response was not ok"), new Error("Network response was not ok");
    let finalResponse = await response.json(), responseHeaders = new Headers(response.headers);
    return new Response(JSON.stringify(finalResponse), {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders
    });
  } catch {
    return new Response(JSON.stringify({ message: "Error in catch block" }), {
      status: 500,
      statusText: "Error in catch block",
      headers: { "Content-Type": "application/json" }
    });
  }
};

// app/network/constants/index.ts
var customHeaders = {
  CSRF_TOKEN: "x-csrf-token"
}, CONTENT_TYPES = {
  APPLICATION_JSON: "application/json"
};

// app/network/constants/apiUrls.ts
var REACT_CONFIG = "ReactConfig.php", ADD_TO_CART = "/gateway-api/cartapi/v1/item/add/refresh", NOTIFY_ME = "/ajaxaddcart/index/outofStockSubscription", ADD_TO_WISHLIST = (productId, formKey) => `/advancedwishlist/index/add/product/${productId}/form_key${formKey}/`, REMOVE_FROM_WISHLIST = (productId) => `/advancedwishlist/index/remove/item/${productId}`, FETCH_ADDRESS_DETAILS = "/edd/product/edd/default/fetch", FETCH_SAVED_ADDRESSES = "app-api/index.php/address/all", FETCH_AUTO_ADDRESS = "app-api/index.php/address/autoaddress_producttype";
var FETCH_RECO_WIDGETS = "/gateway-api/rest/appapi/V2/getProductWidgets", FETCH_PRODUCT_DETAILS = (productId) => `/facade/product/snsp/details?bffBU=nykaa&bffVersion=v1&bffDevice=MSITE&app_version=2.0.6&product_id=${productId}&source=react&variants=true&filters=all`, FETCH_PRODUCT_REVIEW_IMAGES = (productId) => `/gateway-api/products/${productId}/reviews/images`, FETCH_WISHLIST_IDS = "/app-api/index.php/customer/get_wishlist_data", LOGOUT_URL = "customer/account/logout/";

// app/routes/sns-api/fetchWishlistIds.ts
var action = async ({ request }) => {
  var _a2;
  let baseUrl2 = process.env.API_HOST, fullUrl = baseUrl2 + FETCH_WISHLIST_IDS;
  try {
    let body = await request.json(), { source, formKey } = body, formData = new FormData();
    formData.append("source", source);
    let headers = {
      [customHeaders.CSRF_TOKEN]: formKey || "",
      Cookie: request.headers.get("cookie"),
      referer: baseUrl2
    }, data = await (await apiHelper({
      url: fullUrl,
      method: "POST",
      body: formData,
      headers
    })).json();
    return (0, import_node2.json)({
      status: !0,
      response: {
        wishlist: ((_a2 = data == null ? void 0 : data.response) == null ? void 0 : _a2.wishlist_products) || []
      }
    });
  } catch (error) {
    return (0, import_node2.json)({ error: error.message }, { status: 400 });
  }
};

// app/routes/sns-api/recommendations.ts
var recommendations_exports = {};
__export(recommendations_exports, {
  action: () => action2
});
var import_node3 = require("@remix-run/node");

// app/utils/api.ts
var isBrowser2 = typeof window < "u", baseURL = isBrowser2 ? "https://www.nykaa.com/" : process.env.API_HOST || "https://www.nykaa.com/", fetchData = async (endpoint) => {
  await loggerInitialized;
  try {
    let url = `${baseURL}${endpoint}`;
    logger.info(`Fetching data from: ${url}`);
    let response = await fetch(url, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok)
      throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    throw logger && logger.error ? logger.error("Error fetching data:", error) : console.error("Error fetching data:", error), error;
  }
}, queryStringFromParams = (params) => {
  if (!params)
    return "";
  if (typeof params != "object" || Array.isArray(params))
    throw new Error(`Expected "params" to be an "object" got ${params}`);
  let queryString = "", keys = Object.keys(params);
  if (!(keys.length > 0))
    return queryString;
  queryString = "?";
  let queryStringPairs = [];
  return keys.sort().forEach((key) => {
    queryStringPairs.push(`${key}=${encodeURIComponent(params[key])}`);
  }), `${queryString}${queryStringPairs.join("&")}`;
};

// app/transformers/recommendation.ts
var getImageUrl = (media) => {
  var _a2;
  let imageUrl = "";
  return media && (imageUrl = ((_a2 = media == null ? void 0 : media[0]) == null ? void 0 : _a2.url) || ""), imageUrl;
}, transformProduct = (product) => ({
  name: product == null ? void 0 : product.name,
  imageUrl: getImageUrl(product == null ? void 0 : product.media),
  rating: (product == null ? void 0 : product.rating) || 0,
  ratingCount: product == null ? void 0 : product.rating_count,
  slug: product == null ? void 0 : product.slug,
  brandName: (product == null ? void 0 : product.brand_name) || "",
  packSize: product == null ? void 0 : product.pack_size,
  variantType: product == null ? void 0 : product.variant_type,
  id: product == null ? void 0 : product.id,
  price: product == null ? void 0 : product.final_price
}), transformRecommendations = (data) => {
  var _a2;
  return (_a2 = data == null ? void 0 : data.response) == null ? void 0 : _a2.relatedProducts.map((recommendation) => {
    var _a3;
    return {
      title: recommendation == null ? void 0 : recommendation.title,
      products: (_a3 = recommendation == null ? void 0 : recommendation.products) == null ? void 0 : _a3.map(transformProduct),
      widgetType: recommendation == null ? void 0 : recommendation.widget_type
    };
  });
};

// app/routes/sns-api/recommendations.ts
var action2 = async ({ request }) => {
  let formData = await request.formData() || {}, data = Object.fromEntries(formData), queryString = data && queryStringFromParams(data), fullUrl = process.env.API_HOST + FETCH_RECO_WIDGETS + queryString;
  try {
    let response = await apiHelper({ url: fullUrl, method: "GET" }), responseData = await (response == null ? void 0 : response.json()), transformedData = responseData && transformRecommendations(responseData);
    return (0, import_node3.json)({
      status: !0,
      response: { ...responseData == null ? void 0 : responseData.response, relatedProducts: transformedData }
    });
  } catch (error) {
    return (0, import_node3.json)({ error: error.message }, { status: 400 });
  }
};

// app/routes/snsr/reviews/$productId.tsx
var productId_exports = {};
__export(productId_exports, {
  default: () => ReviewPage,
  loader: () => loader2,
  shouldRevalidate: () => shouldRevalidate2
});
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), loader2 = async ({ params, request }) => null, shouldRevalidate2 = () => !1;
function ReviewPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: "Review Page" }, void 0, !1, {
    fileName: "app/routes/snsr/reviews/$productId.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

// app/routes/sns-api/addItemsToCart.ts
var addItemsToCart_exports = {};
__export(addItemsToCart_exports, {
  action: () => action3
});

// app/utils/apiWrapper.ts
var import_node4 = require("@remix-run/node");
var baseUrl = process.env.API_HOST, filterCookies = (cookieString) => {
  if (!cookieString)
    return "";
  let cookies = cookieString.split(";").map((cookie) => cookie.trim()).filter((cookie) => {
    let cookieName = cookie.split("=")[0];
    return WHITELISTED_COOKIES.includes(cookieName);
  });
  return cookies.length ? cookies.join("; ") : "";
}, getFullUrl = (path) => `${baseUrl}${path}`, handleAction = async (request, options) => {
  var _a2;
  let incomingCookies = request.headers.get("cookie"), headers = {
    ...baseHeaders,
    cookie: filterCookies(incomingCookies)
  };
  try {
    let requestBody;
    if (options.formData) {
      let formData = new FormData();
      Object.entries(options.formData).forEach(([key, value]) => {
        value != null && formData.append(key, value.toString());
      }), requestBody = formData, delete headers["content-type"];
    } else
      options.body && (requestBody = JSON.stringify(options.body));
    let response = await fetch(getFullUrl(options.path), {
      method: options.method || "POST",
      headers,
      body: requestBody,
      credentials: "include"
    });
    if (!response.ok)
      throw new Error(
        JSON.stringify({
          error: !0,
          message: ERROR_MESSAGE,
          status: response.status
        })
      );
    let data = await response.json();
    return (0, import_node4.json)(data);
  } catch (error) {
    let errorResponse;
    try {
      errorResponse = JSON.parse(error.message);
    } catch {
      errorResponse = {
        error: !0,
        message: ERROR_MESSAGE,
        status: error.status || ((_a2 = error.response) == null ? void 0 : _a2.status) || 503
      };
    }
    return (0, import_node4.json)(errorResponse, { status: errorResponse.status });
  }
};

// app/routes/sns-api/addItemsToCart.ts
var action3 = async ({ request }) => {
  let body = await request.json();
  return handleAction(request, {
    path: ADD_TO_CART,
    method: API_METHODS.POST,
    body
  });
};

// app/routes/sns-api/addressDetails.ts
var addressDetails_exports = {};
__export(addressDetails_exports, {
  action: () => action4
});
var import_node5 = require("@remix-run/node");
var action4 = async ({ request }) => {
  try {
    let formData = await request.formData(), pincode = formData.get("pincode"), skusData = formData.get("skus"), type = formData.get("type");
    if (!pincode || !skusData || !type)
      return (0, import_node5.json)(
        {
          status: "error",
          message: "Missing required fields"
        },
        { status: 400 }
      );
    let skus;
    try {
      skus = JSON.parse(skusData);
    } catch {
      return (0, import_node5.json)(
        {
          status: "error",
          message: "Invalid skus data format"
        },
        { status: 400 }
      );
    }
    let domainValue = process.env.API_HOST;
    if (!domainValue)
      return (0, import_node5.json)(
        {
          status: "error",
          message: "API host not configured"
        },
        { status: 500 }
      );
    let url = `${domainValue}${FETCH_ADDRESS_DETAILS}`, response = await apiHelper({
      url,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        skus,
        pincode,
        type,
        source: "pdp",
        domain: "nykaa"
      })
    }), apiResponse;
    try {
      apiResponse = await response.json();
    } catch {
      return (0, import_node5.json)(
        {
          status: "error",
          message: "Something went wrong"
        },
        { status: 500 }
      );
    }
    return response.ok ? apiResponse.success === !0 && apiResponse.data ? (0, import_node5.json)({
      status: "success",
      data: apiResponse.data
    }) : (0, import_node5.json)(
      {
        status: "error",
        message: "Failed to fetch address details"
      },
      { status: 400 }
    ) : (0, import_node5.json)(
      {
        status: "error",
        message: apiResponse.message || "API request failed"
      },
      { status: response.status }
    );
  } catch (error) {
    return console.error("Address details error:", error), (0, import_node5.json)(
      {
        status: "error",
        message: "Error fetching address details"
      },
      { status: 500 }
    );
  }
};

// app/routes/sns-api/productDetails.ts
var productDetails_exports = {};
__export(productDetails_exports, {
  action: () => action5
});
var import_node6 = require("@remix-run/node");

// app/transformers/PD.ts
var transformProductData = (data, skuId) => {
  let { info } = data || {}, { variants } = info || {};
  if (!(variants != null && variants.length))
    return {
      ...data,
      info: {
        ...info,
        selectedVariantId: skuId
      }
    };
  let selectedVariantId = skuId;
  if (skuId) {
    let selectedVariant = variants.find((variant) => (variant == null ? void 0 : variant.childId) === skuId) || variants[0];
    selectedVariantId = selectedVariant == null ? void 0 : selectedVariant.childId;
  } else {
    let [firstVariant] = variants;
    selectedVariantId = info.defaultPid || (firstVariant == null ? void 0 : firstVariant.childId);
  }
  return {
    ...data,
    info: {
      ...info,
      selectedVariantId
    }
  };
};

// app/routes/sns-api/productDetails.ts
var action5 = async ({ request }) => {
  var _a2, _b;
  let formData = await request.formData(), productId = ((_a2 = formData == null ? void 0 : formData.get(QUERY_PARAM_KEYS.PRODUCT_ID)) == null ? void 0 : _a2.toString()) || "", skuId = (_b = formData == null ? void 0 : formData.get(QUERY_PARAM_KEYS.SKU)) == null ? void 0 : _b.toString();
  if (!productId)
    return (0, import_node6.json)({ error: "Product ID is required" }, { status: 400 });
  try {
    let data = await fetchData(FETCH_PRODUCT_DETAILS(productId)), transformedData = transformProductData(data, skuId);
    return (0, import_node6.json)(transformedData);
  } catch (error) {
    return (0, import_node6.json)({ error: error.message }, { status: 400 });
  }
};

// app/routes/sns-api/savedAddresses.ts
var savedAddresses_exports = {};
__export(savedAddresses_exports, {
  action: () => action6
});
var import_node7 = require("@remix-run/node");
var action6 = async ({ request }) => {
  var _a2, _b;
  let domainValue = process.env.API_HOST, url = `${domainValue}${FETCH_SAVED_ADDRESSES}`;
  try {
    let formData = new URLSearchParams({
      source: "react"
    }), apiResponse = await (await fetch(url, {
      method: "POST",
      headers: {
        "x-csrf-token": request.headers.get("x-csrf-token"),
        Cookie: request.headers.get("cookie"),
        referer: domainValue
      },
      body: formData
    })).json();
    return console.log("API Response:", apiResponse), (apiResponse == null ? void 0 : apiResponse.status) === "success" && ((_a2 = apiResponse.response) != null && _a2.data) ? (0, import_node7.json)({
      status: "success",
      data: (_b = apiResponse == null ? void 0 : apiResponse.response) == null ? void 0 : _b.data
    }) : (0, import_node7.json)(
      {
        status: "error",
        message: apiResponse.message || "Failed to fetch saved addresses"
      },
      {
        status: 400
      }
    );
  } catch (error) {
    return console.error("API Error:", error), (0, import_node7.json)(
      {
        status: "error",
        message: "Error fetching saved addresses"
      },
      {
        status: 500
      }
    );
  }
};

// app/routes/$slug/snsp/$productId.tsx
var productId_exports2 = {};
__export(productId_exports2, {
  default: () => ProductPage2,
  loader: () => loader3,
  meta: () => meta2,
  shouldRevalidate: () => shouldRevalidate3
});
var import_react58 = require("@emotion/react"), import_node8 = require("@remix-run/node"), import_react59 = require("react"), import_react60 = require("@remix-run/react");

// app/templates/PD/Tmp_001/index.tsx
var import_styled126 = __toESM(require("@emotion/styled"));

// app/components/PD/Authenticity/index.tsx
var import_react17 = require("react");

// app/components/Icons/Authentic.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), AuthenticIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        "path",
        {
          d: "M20.12 18.1201L18 14.5194C18.9138 13.39 19.4885 12.0257 19.6577 10.5842C19.8269 9.14273 19.5837 7.68293 18.9561 6.37352C18.3286 5.06411 17.3424 3.95855 16.1114 3.18462C14.8805 2.4107 13.4551 2 12 2C10.5449 2 9.11954 2.4107 7.8886 3.18462C6.65766 3.95855 5.67143 5.06411 5.04389 6.37352C4.41635 7.68293 4.17311 9.14273 4.34231 10.5842C4.5115 12.0257 5.08621 13.39 6.00001 14.5194L3.89001 18.1101C3.79999 18.2615 3.75176 18.434 3.75022 18.6101C3.74868 18.7861 3.79388 18.9594 3.88123 19.1124C3.96858 19.2654 4.09497 19.3926 4.24756 19.481C4.40015 19.5695 4.5735 19.6162 4.75001 19.6162H6.94001L8.00001 21.5013C8.08811 21.6535 8.21498 21.7798 8.36775 21.8674C8.52053 21.9549 8.6938 22.0007 8.87001 22C9.04622 22.0007 9.21949 21.9549 9.37226 21.8674C9.52504 21.7798 9.6519 21.6535 9.74001 21.5013L12 17.6513L14.23 21.5013C14.3181 21.6535 14.445 21.7798 14.5978 21.8674C14.7505 21.9549 14.9238 22.0007 15.1 22C15.2762 22.0007 15.4495 21.9549 15.6023 21.8674C15.755 21.7798 15.8819 21.6535 15.97 21.5013L17.06 19.6162H19.25C19.4259 19.6169 19.5988 19.5713 19.7514 19.484C19.904 19.3968 20.0308 19.2709 20.119 19.1192C20.2073 18.9675 20.2538 18.7952 20.254 18.6198C20.2542 18.4443 20.2079 18.272 20.12 18.1201ZM5.79001 9.74181C5.79011 8.77822 6.01561 7.82794 6.44859 6.96653C6.88156 6.10513 7.51007 5.35636 8.28412 4.77978C9.05818 4.20319 9.95643 3.81468 10.9075 3.64516C11.8585 3.47563 12.836 3.52975 13.7624 3.80322C14.6888 4.07669 15.5384 4.56196 16.2437 5.22046C16.9491 5.87895 17.4906 6.69249 17.8253 7.5964C18.1601 8.50031 18.2788 9.46964 18.1719 10.4273C18.0651 11.385 17.7357 12.3046 17.21 13.1131C16.8769 13.6318 16.4692 14.0989 16 14.4995C14.8856 15.426 13.4808 15.9335 12.03 15.9335C10.5792 15.9335 9.17437 15.426 8.06001 14.4995C7.58019 14.1011 7.1623 13.6338 6.82001 13.1131C6.15504 12.1132 5.79707 10.9416 5.79001 9.74181ZM8.90001 20.0052L8.24001 18.8681L7.81001 18.1201H5.62001L7.05001 15.6365C8.03795 16.4617 9.21702 17.0274 10.48 17.2822L8.90001 20.0052ZM16.19 18.1201L15.76 18.8681L15.1 20.0052L13.52 17.2822C14.8006 17.0353 15.9978 16.4691 17 15.6365L18.43 18.1201H16.19Z",
          fill: "#001325",
          fillOpacity: "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/Authentic.tsx",
          lineNumber: 11,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        "path",
        {
          d: "M11.17 12.4049C10.91 12.4049 10.91 12.4049 8.54001 10.5996C8.46187 10.5393 8.3964 10.4643 8.34733 10.3788C8.29826 10.2933 8.26655 10.1991 8.25401 10.1013C8.24148 10.0036 8.24836 9.90441 8.27427 9.80935C8.30017 9.71429 8.3446 9.62525 8.40501 9.54732C8.52701 9.38992 8.7067 9.28731 8.90455 9.26206C9.00252 9.24956 9.10199 9.25642 9.1973 9.28226C9.2926 9.3081 9.38187 9.35242 9.46001 9.41267L11.1 10.6694L14.47 7.29816C14.6106 7.15807 14.8013 7.07939 15 7.07939C15.1988 7.07939 15.3894 7.15807 15.53 7.29816C15.6705 7.43842 15.7493 7.62855 15.7493 7.82679C15.7493 8.02502 15.6705 8.21515 15.53 8.35541L11.7 12.1855C11.6318 12.2568 11.5495 12.3132 11.4582 12.351C11.367 12.3888 11.2688 12.4071 11.17 12.4049Z",
          fill: "#001325",
          fillOpacity: "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/Authentic.tsx",
          lineNumber: 16,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Icons/Authentic.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Authentic_default = AuthenticIcon;

// app/components/Icons/CircleNoReturn.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), CircleNoReturn = () => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "path",
        {
          d: "M10.4688 7.4585C10.6899 7.68768 10.6834 8.05273 10.4542 8.27387L9.80855 8.89686H11.6944C12.1372 8.87859 12.5787 8.95745 12.9879 9.12797C13.4013 9.30028 13.7716 9.56191 14.072 9.89412C14.3725 10.2263 14.5957 10.6209 14.7258 11.0495C14.8558 11.4782 14.8895 11.9303 14.8243 12.3734C14.8205 12.3989 14.8151 12.4241 14.8079 12.4488C14.605 13.1547 14.168 13.7707 13.5689 14.1956C12.9745 14.6172 12.2553 14.8259 11.5279 14.7883H9.03511C8.71664 14.7883 8.45846 14.5301 8.45846 14.2116C8.45846 13.8931 8.71664 13.635 9.03511 13.635H11.5435C11.5545 13.635 11.5654 13.6353 11.5764 13.6359C12.0486 13.6629 12.5159 13.5285 12.9017 13.2549C13.2769 12.9888 13.5533 12.6063 13.6885 12.1674C13.7216 11.9048 13.6991 11.638 13.6222 11.3844C13.5415 11.1185 13.403 10.8738 13.2167 10.6677C13.0303 10.4617 12.8007 10.2994 12.5442 10.1925C12.2878 10.0856 12.0109 10.0368 11.7333 10.0495C11.7245 10.05 11.7157 10.0502 11.7069 10.0502H9.79591L10.4111 10.6877C10.6322 10.9169 10.6257 11.2819 10.3965 11.5031C10.1674 11.7242 9.8023 11.7177 9.58117 11.4885L7.99539 9.84509C7.77425 9.61591 7.78077 9.25085 8.00995 9.02971L9.65339 7.44394C9.88257 7.2228 10.2476 7.22932 10.4688 7.4585Z",
          fill: "#001325",
          fillOpacity: "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/CircleNoReturn.tsx",
          lineNumber: 11,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.6055 2C6.30053 2 2 6.25854 2 11.5117C2 16.7649 6.30053 21.0234 11.6055 21.0234C12.6716 21.0234 13.6971 20.8515 14.6553 20.534C14.7314 20.6234 14.8115 20.7098 14.8955 20.793C15.4775 21.3693 16.219 21.7618 17.0263 21.9208C17.8336 22.0798 18.6704 21.9982 19.4309 21.6863C20.1913 21.3744 20.8413 20.8462 21.2986 20.1685C21.7559 19.4907 22 18.694 22 17.8789C22.0026 17.3361 21.8968 16.7981 21.6889 16.2958C21.4809 15.7936 21.1747 15.337 20.788 14.9522C20.7343 14.8988 20.6792 14.8469 20.6228 14.7966C21.0033 13.7728 21.211 12.6663 21.211 11.5117C21.211 6.25854 16.9105 2 11.6055 2ZM19.3315 14.0129C19.5913 13.2256 19.7317 12.3849 19.7317 11.5117C19.7317 7.06755 16.0935 3.46484 11.6055 3.46484C7.11752 3.46484 3.47929 7.06755 3.47929 11.5117C3.47929 15.9559 7.11752 19.5586 11.6055 19.5586C12.4049 19.5586 13.1773 19.4443 13.907 19.2313C13.8444 19.0528 13.794 18.8696 13.7565 18.6829C13.5959 17.8835 13.6783 17.0549 13.9933 16.3018C14.3083 15.5488 14.8417 14.9052 15.5261 14.4523C16.2105 13.9995 17.0151 13.7578 17.8382 13.7578C18.3491 13.7578 18.8553 13.834 19.3315 14.0129ZM17.8382 15.0273C18.403 15.0273 18.9552 15.193 19.4251 15.5033C19.895 15.8136 20.2615 16.2548 20.4786 16.7711C20.6956 17.2875 20.7534 17.8559 20.6446 18.4047C20.5845 18.7078 20.4751 18.9975 20.3222 19.2629L16.3631 15.4482C16.8047 15.1792 17.3141 15.0273 17.8382 15.0273ZM15.4985 16.2503L19.5347 20.1393C19.2014 20.3825 18.8173 20.5522 18.4082 20.6346C17.8547 20.746 17.2803 20.6927 16.7574 20.4814C16.2345 20.27 15.7865 19.9101 15.4698 19.4469C15.1532 18.9838 14.9822 18.4382 14.9783 17.8789C14.9783 17.2921 15.1622 16.724 15.4985 16.2503Z",
          fill: "#001325",
          fillOpacity: "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/CircleNoReturn.tsx",
          lineNumber: 16,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Icons/CircleNoReturn.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), CircleNoReturn_default = CircleNoReturn;

// app/components/Icons/CircleUndo.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), CircleUndo = () => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        "path",
        {
          d: "M10.955 7.85717C11.1711 8.08123 11.1646 8.43806 10.9406 8.65417L10.087 9.47742H12.3639C12.8391 9.45326 13.314 9.5328 13.7556 9.7106C14.2022 9.89044 14.6038 10.1664 14.9318 10.5189C15.2598 10.8714 15.5062 11.2918 15.6534 11.7502C15.8007 12.2086 15.8452 12.6938 15.7839 13.1714C15.7808 13.1958 15.776 13.2199 15.7698 13.2437C15.5636 14.0232 15.0955 14.7079 14.4441 15.183C13.7968 15.655 13.0076 15.8914 12.2077 15.8532H9.44969C9.13839 15.8532 8.88603 15.6008 8.88603 15.2895C8.88603 14.9782 9.13839 14.7259 9.44969 14.7259H12.2218C12.2315 14.7259 12.2413 14.7261 12.2511 14.7266C12.7978 14.7551 13.3376 14.5946 13.7799 14.2721C14.2121 13.9569 14.5255 13.5056 14.6702 12.9913C14.7037 12.6897 14.6731 12.3842 14.5802 12.095C14.4835 11.7941 14.3218 11.5182 14.1065 11.2868C13.8912 11.0555 13.6277 10.8744 13.3345 10.7563C13.0414 10.6383 12.7258 10.5862 12.4103 10.6038C12.3998 10.6044 12.3893 10.6047 12.3788 10.6047H10.0964L10.8985 11.4321C11.1152 11.6556 11.1097 12.0124 10.8862 12.2291C10.6627 12.4458 10.3058 12.4403 10.0892 12.2168L8.32427 10.3965C8.22003 10.2889 8.16286 10.1444 8.16537 9.99465C8.16789 9.84493 8.22987 9.70235 8.33766 9.5984L10.158 7.84275C10.3821 7.62665 10.7389 7.6331 10.955 7.85717Z",
          fill: "#001325",
          fillOpacity: "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/CircleUndo.tsx",
          lineNumber: 11,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.38604 12C4.38604 7.79492 7.79492 4.38604 12 4.38604C16.2051 4.38604 19.614 7.79492 19.614 12C19.614 16.2051 16.2051 19.614 12 19.614C7.79492 19.614 4.38604 16.2051 4.38604 12Z",
          fill: "#001325",
          fillOpacity: "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/CircleUndo.tsx",
          lineNumber: 16,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Icons/CircleUndo.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), CircleUndo_default = CircleUndo;

// app/shared/Accordion/index.tsx
var import_react12 = require("react");

// app/components/Icons/ChevronDownSmall.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function ChevronDownSmall({
  color = "#001325",
  width = 24,
  height = 24
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    "svg",
    {
      width,
      height,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "path",
        {
          d: "M12 15.9988C11.8587 15.9996 11.7186 15.9727 11.5877 15.9196C11.4569 15.8665 11.3379 15.7883 11.2375 15.6894L5.33112 9.86502C5.1232 9.66415 5.00413 9.38946 5.00011 9.10139C4.99608 8.81331 5.10742 8.53544 5.30964 8.32891C5.51186 8.12238 5.78839 8.00411 6.07839 8.0001C6.3684 7.9961 6.64813 8.1067 6.85605 8.30758L12 13.428L17.144 8.30758C17.3519 8.1067 17.6316 7.9961 17.9216 8.0001C18.2116 8.00411 18.4881 8.12238 18.6904 8.32891C18.8926 8.53544 19.0039 8.81331 18.9999 9.10139C18.9959 9.38946 18.8768 9.66415 18.6689 9.86502L12.7625 15.7321C12.553 15.9163 12.2794 16.0119 12 15.9988Z",
          fill: color,
          fillOpacity: "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/ChevronDownSmall.tsx",
          lineNumber: 22,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Icons/ChevronDownSmall.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}
var ChevronDownSmall_default = ChevronDownSmall;

// app/components/Icons/ChevronUpSmall.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function ChevronUpSmall() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        "path",
        {
          d: "M17.9188 16C17.7774 16.0008 17.6371 15.974 17.5062 15.9213C17.3752 15.8685 17.2561 15.7908 17.1556 15.6925L12.0067 10.6036L6.85783 15.6925C6.64972 15.8922 6.36972 16.0021 6.07943 15.9981C5.78915 15.9941 5.51235 15.8766 5.30994 15.6713C5.10752 15.4661 4.99607 15.1899 5.00011 14.9036C5.00414 14.6173 5.12332 14.3443 5.33143 14.1446L11.2435 8.3136C11.3435 8.21423 11.4624 8.13536 11.5933 8.08154C11.7243 8.02771 11.8648 8 12.0067 8C12.1486 8 12.2891 8.02771 12.4201 8.08154C12.5511 8.13536 12.67 8.21423 12.7699 8.3136L18.682 14.1446C18.7828 14.2432 18.8628 14.3605 18.9173 14.4897C18.9719 14.6189 19 14.7574 19 14.8974C19 15.0373 18.9719 15.1759 18.9173 15.3051C18.8628 15.4343 18.7828 15.5516 18.682 15.6501C18.5852 15.7561 18.4677 15.8417 18.3366 15.9018C18.2055 15.9619 18.0634 15.9953 17.9188 16Z",
          fill: "#001325",
          fillOpacity: "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/ChevronUpSmall.tsx",
          lineNumber: 12,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Icons/ChevronUpSmall.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}
var ChevronUpSmall_default = ChevronUpSmall;

// app/shared/Accordion/styled.ts
var import_styled15 = __toESM(require("@emotion/styled"));
var AccordionWrapper = import_styled15.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  justify-content: flex-start;
  background: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface;
}};
  cursor: pointer;
  border-bottom: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.16);
}};
`, Header2 = import_styled15.default.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60;
}};
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80}`;
}};
`, TextWrapper = import_styled15.default.div`
  display: flex;
  justify-content: flex-start;
  flex: 2;
  flex-direction: column;
`, Title = import_styled15.default.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: 'pointer';
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.titleXSmall;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
`, SubTitle = import_styled15.default.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodySmall;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
`, ChevronWrapper = import_styled15.default.div`
  svg {
    path {
      fill: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
    }
  }
`, Children = import_styled15.default.div`
  width: 100%;
  height: ${({ isOpen }) => isOpen ? "auto" : 0};
  transition: height 0.25s linear;
  overflow: hidden;
`;

// app/shared/Accordion/index.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), Accordion = ({
  icon,
  title,
  subTitle,
  children,
  opened = !1,
  keyValue,
  storageKey = "accordionOpenedSections"
}) => {
  let [isOpen, setIsOpen] = (0, import_react12.useState)(opened);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(AccordionWrapper, { onClick: () => {
    var _a2, _b;
    let openedSectionsLocal = (_a2 = localStorageService) == null ? void 0 : _a2.getItem(storageKey), openedSections = [];
    isOpen || (openedSectionsLocal && (openedSections = JSON == null ? void 0 : JSON.parse(openedSectionsLocal)), openedSections.push(keyValue), (_b = localStorageService) == null || _b.setItem(
      storageKey,
      JSON.stringify([...new Set(openedSections)])
    )), setIsOpen(!isOpen);
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Header2, { isOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: [
      icon && icon,
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(TextWrapper, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Title, { "data-test-id": "AccordionTitle", children: title }, void 0, !1, {
          fileName: "app/shared/Accordion/index.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(SubTitle, { children: subTitle }, void 0, !1, {
          fileName: "app/shared/Accordion/index.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/shared/Accordion/index.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ChevronWrapper, { children: isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ChevronUpSmall_default, {}, void 0, !1, {
        fileName: "app/shared/Accordion/index.tsx",
        lineNumber: 68,
        columnNumber: 23
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ChevronDownSmall_default, {}, void 0, !1, {
        fileName: "app/shared/Accordion/index.tsx",
        lineNumber: 68,
        columnNumber: 44
      }, this) }, void 0, !1, {
        fileName: "app/shared/Accordion/index.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/shared/Accordion/index.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/shared/Accordion/index.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
      Children,
      {
        isOpen,
        onClick: (e) => {
          e.stopPropagation();
        },
        children
      },
      void 0,
      !1,
      {
        fileName: "app/shared/Accordion/index.tsx",
        lineNumber: 72,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/shared/Accordion/index.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}, Accordion_default = Accordion;

// app/components/PD/Authenticity/styled.tsx
var import_styled17 = __toESM(require("@emotion/styled"));
var Container2 = import_styled17.default.div`
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing50;
}};
  background: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface;
}};
  color: rgb(0, 19, 37);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`, SectionStyle = import_styled17.default.div`
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.16);
}};
  border-radius: 8px;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing30;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  gap: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  &:nth-of-type(1) {
    margin-right: 10px;
  }
`, HelperText = import_styled17.default.div`
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyXSmall;
}}
`, CardWrapper = import_styled17.default.div`
  display: flex;
  flex-direction: column;
`, TextStyleMain = import_styled17.default.div`
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary;
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.buttonSmall;
}}
`;

// app/components/PD/Authenticity/Attribute.tsx
var import_jsx_dev_runtime32 = require("@emotion/react/jsx-dev-runtime"), InfoItem = ({ item, handleClick }) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(SectionStyle, { onClick: () => handleClick(item), children: [
  item.icon,
  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardWrapper, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(TextStyleMain, { children: item.mainText }, void 0, !1, {
      fileName: "app/components/PD/Authenticity/Attribute.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(HelperText, { children: item.helperText }, void 0, !1, {
      fileName: "app/components/PD/Authenticity/Attribute.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/Authenticity/Attribute.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/PD/Authenticity/Attribute.tsx",
  lineNumber: 13,
  columnNumber: 3
}, this), Attribute_default = InfoItem;

// app/components/PD/Authenticity/Bottomsheet.tsx
var import_styled21 = __toESM(require("@emotion/styled"));

// app/shared/BottomSheet/index.tsx
var import_react15 = require("react");

// app/shared/BottomSheet/constants.ts
var BOTTOM_SHEET_NAVIGATION = {
  HANDLE: "handle",
  CLOSE_BUTTON: "closeButton",
  NONE: "none"
};

// app/shared/BottomSheet/styled.ts
var import_styled19 = __toESM(require("@emotion/styled")), Backdrop = import_styled19.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`, BottomSheetContainer = import_styled19.default.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  transition: transform 0.3s ease-out;
  transform: translateY(${(props) => props.isOpen ? "0" : "100%"});
  .navigation {
    position: relative;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    svg {
      position: relative;
      margin: 1rem 1.25rem;
      cursor: pointer;
    }
  }
  z-index: 6;
`, BottomSheetContent = import_styled19.default.div`
  padding-top: ${(props) => props.noPadding ? "0" : "35px"};
  padding-bottom: ${(props) => props.noPadding ? "0" : "16px"};
  width: 100%;
`, CloseButton = import_styled19.default.button`
  position: absolute;
  top: 16px;
  left: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

// app/components/Icons/Handle.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), HandleIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "8",
    viewBox: "0 0 40 8",
    fill: "none",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
      "rect",
      {
        width: "40",
        height: "8",
        rx: "4",
        fill: "#CDD3D8"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Icons/Handle.tsx",
        lineNumber: 11,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/Icons/Handle.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Handle_default = HandleIcon;

// app/shared/Carousel/hooks/useOpenModal.ts
var import_react13 = require("react"), import_react14 = require("@remix-run/react");
var useOpenModal = ({ onClose, isOpen } = {}) => {
  let location = (0, import_react14.useLocation)(), navigate = (0, import_react14.useNavigate)(), { key: MODAL_KEY, value: MODAL_VALUE } = MODAL_QUERY_PARAM, closeModal = () => {
    navigate(-1), onClose == null || onClose();
  }, openModal = () => {
    let searchParams = new URLSearchParams(location.search);
    searchParams.set(MODAL_KEY, MODAL_VALUE);
    let scrollY = window.scrollY, scrollX = window.scrollX;
    navigate(`${location.pathname}?${searchParams.toString()}`, {
      state: {
        ...location.state,
        scroll: { x: scrollX, y: scrollY }
      }
    });
  };
  return (0, import_react13.useEffect)(() => {
    isOpen && openModal();
  }, [isOpen]), (0, import_react13.useEffect)(() => {
    let searchParams = new URLSearchParams(location.search), hasParam = searchParams.has(MODAL_KEY), paramValue = searchParams.get(MODAL_KEY);
    (!hasParam || paramValue === null) && (onClose == null || onClose());
  }, [location]), {
    isModalOpan: isOpen && new URLSearchParams(location.search).get(MODAL_KEY) === MODAL_VALUE || !1,
    openModal,
    closeModal
  };
}, useOpenModal_default = useOpenModal;

// app/shared/BottomSheet/index.tsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), BottomSheet = ({
  isOpen,
  onClose,
  children,
  closeOnClickOutside = !0,
  noPadding = !1,
  showCloseIcon = !0,
  navigation = "handle"
}) => {
  let { isModalOpan, closeModal } = useOpenModal_default({ onClose, isOpen });
  return (0, import_react15.useEffect)(() => (isModalOpan ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [isModalOpan]), /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_jsx_dev_runtime34.Fragment, { children: [
    isModalOpan && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Backdrop, { onClick: () => {
      closeOnClickOutside && (closeModal(), onClose());
    } }, void 0, !1, {
      fileName: "app/shared/BottomSheet/index.tsx",
      lineNumber: 60,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(BottomSheetContainer, { isOpen: isModalOpan, children: [
      navigation && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "navigation", children: (() => {
        switch (navigation) {
          case BOTTOM_SHEET_NAVIGATION.HANDLE:
            return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Handle_default, {}, void 0, !1, {
              fileName: "app/shared/BottomSheet/index.tsx",
              lineNumber: 52,
              columnNumber: 16
            }, this);
          default:
            return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_jsx_dev_runtime34.Fragment, {}, void 0, !1, {
              fileName: "app/shared/BottomSheet/index.tsx",
              lineNumber: 54,
              columnNumber: 16
            }, this);
        }
      })() }, void 0, !1, {
        fileName: "app/shared/BottomSheet/index.tsx",
        lineNumber: 62,
        columnNumber: 24
      }, this),
      showCloseIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(CloseButton, { onClick: closeModal, children: "\xD7" }, void 0, !1, {
        fileName: "app/shared/BottomSheet/index.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(BottomSheetContent, { noPadding, children }, void 0, !1, {
        fileName: "app/shared/BottomSheet/index.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/shared/BottomSheet/index.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/shared/BottomSheet/index.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}, BottomSheet_default = BottomSheet;

// app/components/PD/Authenticity/constants.ts
var AUTHENTICITY_CONSTANTS = {
  WIDGET_TITLE: "Authenticity & Return Policy",
  AUTHENTIC: {
    TITLE: "100% Authentic",
    HELPER_TEXT: "view certificate"
  },
  RETURN_POLICY: {
    TITLE: "Return policy",
    EASY_TITLE: "Easy return policy",
    HELPER_TEXT: "view policy"
  },
  BUTTON_TEXT: "Okay"
};

// app/components/PD/Authenticity/Bottomsheet.tsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), SheetStyle = import_styled21.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1.25rem 1rem;
  text-align: center;
`, HeaderStyle = import_styled21.default.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`, TitleStyle = import_styled21.default.div`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.titleSmall;
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
  margin-left: 0.75rem;
`, ContentStyle = import_styled21.default.div`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodySmall;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
`, ButtonStyle = import_styled21.default.button`
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.buttonLarge;
}};
  background-color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface;
}};
  width: 100%;
`, ButtonContainer2 = import_styled21.default.div`
  padding: 1rem 1.25rem;
  width: 100%;
`, ItemInfoBottomSheet = ({
  isOpen,
  onClose,
  icon,
  title,
  content,
  noPadding,
  showCloseIcon
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
  BottomSheet_default,
  {
    isOpen,
    onClose,
    closeOnClickOutside: !0,
    noPadding,
    showCloseIcon,
    navigation: BOTTOM_SHEET_NAVIGATION.HANDLE,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(SheetStyle, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(HeaderStyle, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: icon }, void 0, !1, {
            fileName: "app/components/PD/Authenticity/Bottomsheet.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TitleStyle, { children: title }, void 0, !1, {
            fileName: "app/components/PD/Authenticity/Bottomsheet.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/PD/Authenticity/Bottomsheet.tsx",
          lineNumber: 77,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(ContentStyle, { children: content }, void 0, !1, {
          fileName: "app/components/PD/Authenticity/Bottomsheet.tsx",
          lineNumber: 81,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/PD/Authenticity/Bottomsheet.tsx",
        lineNumber: 76,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(ButtonContainer2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(ButtonStyle, { onClick: onClose, children: AUTHENTICITY_CONSTANTS.BUTTON_TEXT }, void 0, !1, {
        fileName: "app/components/PD/Authenticity/Bottomsheet.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/PD/Authenticity/Bottomsheet.tsx",
        lineNumber: 83,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/PD/Authenticity/Bottomsheet.tsx",
    lineNumber: 68,
    columnNumber: 3
  },
  this
), Bottomsheet_default = ItemInfoBottomSheet;

// app/hooks/useConfig.ts
var import_react16 = require("react");
var useConfig = () => {
  let config = (0, import_react16.useContext)(ConfigContext);
  return isValidObject(config) ? config : (logger.error(REMOTE_CONFIG_FETCH_ERR), DEFAULT_CONFIG);
};

// app/components/PD/Authenticity/index.tsx
var import_jsx_dev_runtime36 = require("@emotion/react/jsx-dev-runtime"), InfoSectionComponent = ({ product, selectedProductData }) => {
  var _a2, _b, _c;
  let [bottomSheetData, setBottomSheetData] = (0, import_react17.useState)(null), config = useConfig(), returnSection = (_b = (_a2 = config == null ? void 0 : config.configs) == null ? void 0 : _a2.collapsePdConfig) == null ? void 0 : _b.returnSection, infoItems = [
    {
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Authentic_default, {}, void 0, !1, {
        fileName: "app/components/PD/Authenticity/index.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this),
      mainText: AUTHENTICITY_CONSTANTS.AUTHENTIC.TITLE,
      helperText: AUTHENTICITY_CONSTANTS.AUTHENTIC.HELPER_TEXT,
      content: (_c = product == null ? void 0 : product.brandAuth) == null ? void 0 : _c.text
    },
    {
      icon: selectedProductData != null && selectedProductData.returnAvailable ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(CircleUndo_default, {}, void 0, !1, {
        fileName: "app/components/PD/Authenticity/index.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(CircleNoReturn_default, {}, void 0, !1, {
        fileName: "app/components/PD/Authenticity/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      mainText: selectedProductData != null && selectedProductData.returnAvailable ? AUTHENTICITY_CONSTANTS.RETURN_POLICY.EASY_TITLE : AUTHENTICITY_CONSTANTS.RETURN_POLICY.TITLE,
      helperText: AUTHENTICITY_CONSTANTS.RETURN_POLICY.HELPER_TEXT,
      content: (selectedProductData == null ? void 0 : selectedProductData.messageOnReturn) || ""
    }
  ], handleHelperTextClick = (item) => {
    setBottomSheetData(item);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
      Accordion_default,
      {
        title: returnSection.title,
        subTitle: returnSection.subTitle,
        opened: returnSection.isOpened,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(CircleUndo_default, {}, void 0, !1, {
          fileName: "app/components/PD/Authenticity/index.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this),
        keyValue: returnSection.key,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Container2, { children: infoItems.map((item, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          Attribute_default,
          {
            item,
            handleClick: handleHelperTextClick
          },
          index2,
          !1,
          {
            fileName: "app/components/PD/Authenticity/index.tsx",
            lineNumber: 54,
            columnNumber: 13
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/PD/Authenticity/index.tsx",
          lineNumber: 52,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/Authenticity/index.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
      Bottomsheet_default,
      {
        isOpen: !!bottomSheetData,
        onClose: () => setBottomSheetData(null),
        icon: bottomSheetData == null ? void 0 : bottomSheetData.icon,
        title: bottomSheetData == null ? void 0 : bottomSheetData.mainText,
        content: bottomSheetData == null ? void 0 : bottomSheetData.content,
        showCloseIcon: !1,
        noPadding: !0
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/Authenticity/index.tsx",
        lineNumber: 62,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/PD/Authenticity/index.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}, Authenticity_default = InfoSectionComponent;

// app/components/PD/BrandLogo/index.tsx
var import_styled23 = __toESM(require("@emotion/styled"));

// app/utils/pageUrls/index.ts
function getWriteReviewPageUrl(productId, childId) {
  return `/rating-reviews?ptype=rateAndReview&parentId=${productId}&childId=${childId}&pageSource=PD&trackingSource=pdp_rate_btn`;
}
function getAllReviewUrl(slug, productId, childId) {
  return `/${slug}/reviews/${productId}?skuId=${childId}`;
}
function getBrandPageUrl(brandName, brandId) {
  return `/brand/${brandName}/c/${brandId}`;
}

// app/components/PD/BrandLogo/index.tsx
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime"), Logo2 = import_styled23.default.img`
  width: 100%;
  height: auto;
`, BrandLogo = ({
  src,
  alt,
  brandId,
  brandName
}) => {
  let handleBrandClickForApp = () => {
    let appParams = {
      device: getDevice(),
      callbackFunctionName: webViewCallbacks.showBrand,
      callbackParams: isAndroid() ? { brandId: Number(brandId), brandName } : { id: brandId.toString(), int_cmp: "" }
    };
    webViewCallbackhandler(appParams);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
    Logo2,
    {
      src,
      alt,
      onClick: () => {
        if (!isWeb()) {
          handleBrandClickForApp();
          return;
        }
        window.location.href = getBrandPageUrl(brandName, brandId);
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/PD/BrandLogo/index.tsx",
      lineNumber: 46,
      columnNumber: 5
    },
    this
  );
}, BrandLogo_default = BrandLogo;

// app/components/PD/Delivery/index.tsx
var import_react19 = require("react");

// app/components/Icons/DeliveryIcon.tsx
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), DeliveryIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      "path",
      {
        d: "M21.68 11.6398L21.61 11.5498C19.87 9.45981 18.58 8.39981 17.79 8.39981H15.15V6.89981C15.15 5.83981 14.27 5.03216 13.21 5.03216L3.9 5.00023C2.84 5.00023 2 5.83981 2 6.89981V15.7698C2 16.8298 2.86 17.6898 3.92 17.6898H5.36C5.7 18.6298 6.59 19.3198 7.65 19.3198C8.71 19.3198 9.6075 18.6077 9.9375 17.6677C11.7748 17.6677 13.6289 17.6755 15.45 17.6498C15.78 18.6098 16.68 19.3198 17.76 19.3198C18.84 19.3198 19.75 18.6098 20.07 17.6398C21.11 17.5998 21.97 16.6498 21.97 15.5198C22.03 14.0898 22.04 12.2398 21.68 11.6398ZM7.65 17.7898C7.16 17.7898 6.75 17.3798 6.75 16.8898C6.75 16.3998 7.16 15.9898 7.65 15.9898C8.14 15.9898 8.55 16.3898 8.55 16.8898C8.55 17.3898 8.14 17.7898 7.65 17.7898ZM13.6 15.7798C13.6 15.9998 13.43 16.1598 13.22 16.1598H9.96C9.65 15.1698 8.73 14.4498 7.64 14.4498C6.55 14.4498 5.63 15.1798 5.32 16.1598H3.9C3.68 16.1598 3.52 15.9898 3.52 15.7798V6.90981C3.52 6.68981 3.69 6.52981 3.9 6.52981H13.21C13.43 6.52981 13.59 6.69981 13.59 6.90981L13.6 15.7798ZM17.74 17.7898C17.25 17.7898 16.84 17.3798 16.84 16.8898C16.84 16.3998 17.25 15.9898 17.74 15.9898C18.23 15.9898 18.64 16.3998 18.64 16.8898C18.64 17.3798 18.23 17.7898 17.74 17.7898ZM20.4 15.4798C20.4 15.8098 20.22 16.0498 20.04 16.0998C19.71 15.1398 18.81 14.4498 17.75 14.4498C16.69 14.4498 15.77 15.1598 15.44 16.1198H15.2V9.91981H17.7C18.07 10.0298 19.29 11.1898 20.34 12.4298C20.45 12.8398 20.45 14.2698 20.39 15.4698L20.4 15.4798Z",
        fill: "#001325",
        fillOpacity: "0.92"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Icons/DeliveryIcon.tsx",
        lineNumber: 11,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/Icons/DeliveryIcon.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), DeliveryIcon_default = DeliveryIcon;

// app/shared/InputBox/index.tsx
var import_react18 = require("react");

// app/components/Icons/Warning.tsx
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), WarningIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("svg", { width: "16", height: "14", viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("path", { d: "M15.625 12.3667L8.71667 0.783332C8.64288 0.65898 8.53801 0.555967 8.41235 0.484418C8.2867 0.412868 8.14459 0.375244 8 0.375244C7.8554 0.375244 7.7133 0.412868 7.58764 0.484418C7.46199 0.555967 7.35712 0.65898 7.28333 0.783332L0.374998 12.3667C0.288914 12.4939 0.239653 12.6424 0.232655 12.7958C0.225656 12.9492 0.261191 13.1016 0.335338 13.2361C0.409484 13.3706 0.519356 13.482 0.652824 13.5579C0.786291 13.6339 0.938161 13.6716 1.09166 13.6667H14.9083C15.0618 13.6716 15.2137 13.6339 15.3472 13.5579C15.4806 13.482 15.5905 13.3706 15.6647 13.2361C15.7388 13.1016 15.7743 12.9492 15.7673 12.7958C15.7603 12.6424 15.7111 12.4939 15.625 12.3667ZM7.375 5.85C7.375 5.68424 7.44085 5.52527 7.55806 5.40806C7.67527 5.29085 7.83424 5.225 8 5.225C8.16576 5.225 8.32473 5.29085 8.44194 5.40806C8.55915 5.52527 8.625 5.68424 8.625 5.85V7.93333C8.625 8.09909 8.55915 8.25806 8.44194 8.37527C8.32473 8.49249 8.16576 8.55833 8 8.55833C7.83424 8.55833 7.67527 8.49249 7.55806 8.37527C7.44085 8.25806 7.375 8.09909 7.375 7.93333V5.85ZM8 11.3167C7.87604 11.3183 7.7544 11.2831 7.65053 11.2154C7.54666 11.1477 7.46525 11.0507 7.41667 10.9367C7.36808 10.8226 7.35451 10.6967 7.37768 10.5749C7.40084 10.4531 7.4597 10.341 7.54677 10.2528C7.63383 10.1645 7.74518 10.1042 7.86664 10.0794C7.9881 10.0546 8.11419 10.0664 8.22888 10.1135C8.34357 10.1605 8.44168 10.2406 8.51073 10.3436C8.57978 10.4465 8.61665 10.5677 8.61667 10.6917C8.61777 10.7733 8.60263 10.8544 8.57214 10.9302C8.54164 11.006 8.49639 11.075 8.43902 11.1331C8.38165 11.1913 8.31329 11.2374 8.23793 11.2689C8.16256 11.3005 8.08169 11.3167 8 11.3167Z", fill: "#B60000" }, void 0, !1, {
  fileName: "app/components/Icons/Warning.tsx",
  lineNumber: 5,
  columnNumber: 98
}, this) }, void 0, !1, {
  fileName: "app/components/Icons/Warning.tsx",
  lineNumber: 5,
  columnNumber: 3
}, this), Warning_default = WarningIcon;

// app/shared/InputBox/styled.ts
var import_styled24 = __toESM(require("@emotion/styled"));
var InputContainer = import_styled24.default.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ theme: theme2 }) => {
  var _a2, _b;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60} ${(_b = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _b.spacing100} `;
}};
`, InputLabel = import_styled24.default.label`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.titleXSmall;
}};
`, InputWrapper = import_styled24.default.div`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
`, InputField = import_styled24.default.input`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  background-color: ${({ hasError, theme: theme2 }) => {
  var _a2, _b;
  return hasError ? hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.negative, 0.08) : (_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.surface20;
}};
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60}`;
}};
  display: flex;
  align-items: center;
  box-sizing: border-box;

  &::placeholder {
    font-family: 'Inter', sans-serif;
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyLarge;
}};
    width: 296px;
    height: 28px;
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid
      ${({ hasError, theme: theme2 }) => {
  var _a2, _b;
  return hasError ? (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.negative : (_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.surfaceInverse10;
}};
    caret-color: black;
    padding-top: ${({ theme: theme2 }) => {
  var _a2;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing100} `;
}};
    align-items: flex-start;
  }
  pointer-events: ${({ disabled }) => disabled ? "none" : "auto"};
`, Subtitle = import_styled24.default.span`
  position: absolute;
  top: 8px;
  left: 32px;
  font-family: 'Inter', sans-serif;

  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodySmall;
}};
  color: #999;
  pointer-events: none;
  margin-bottom: 4px;
`, CheckText = import_styled24.default.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.buttonSmall;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10;
}};
`, CheckButton = import_styled24.default.button`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodySmall;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10;
}};
  background: none;
  border: none;
  cursor: pointer;
  pointer-events: ${({ disabled }) => disabled ? "none" : "auto"};
`, ErrorContainer = import_styled24.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20;
}};
`, ErrorText = import_styled24.default.span`
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.negative;
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodySmall;
}};
`;

// app/shared/InputBox/index.tsx
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime"), InputBox = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  showSubtitle = !1,
  onlyNumbers = !0,
  maxLength,
  showButton = !1,
  onButtonClick,
  disabled = !1,
  error
}) => {
  let [isFocused, setIsFocused] = (0, import_react18.useState)(!1), inputRef = (0, import_react18.useRef)(null);
  (0, import_react18.useEffect)(() => {
    error && inputRef.current && inputRef.current.focus();
  }, [error]);
  let handleChange = (e) => {
    onlyNumbers && isNaN(Number(e.target.value)) || maxLength && e.target.value.length > maxLength || onChange(e);
  };
  return showButton = value.length === 6, /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(InputContainer, { children: [
    label && /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(InputLabel, { children: label }, void 0, !1, {
      fileName: "app/shared/InputBox/index.tsx",
      lineNumber: 69,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(InputWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
        InputField,
        {
          ref: inputRef,
          type,
          value,
          onChange: handleChange,
          placeholder: isFocused && showSubtitle ? "" : placeholder,
          onFocus: () => setIsFocused(!0),
          onBlur: () => setIsFocused(!1),
          inputMode: onlyNumbers ? "numeric" : "text",
          disabled,
          hasError: !!error
        },
        void 0,
        !1,
        {
          fileName: "app/shared/InputBox/index.tsx",
          lineNumber: 71,
          columnNumber: 9
        },
        this
      ),
      showButton && /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(CheckButton, { onClick: onButtonClick, disabled, children: "CHECK" }, void 0, !1, {
        fileName: "app/shared/InputBox/index.tsx",
        lineNumber: 83,
        columnNumber: 24
      }, this),
      isFocused && showSubtitle && /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(Subtitle, { children: placeholder }, void 0, !1, {
        fileName: "app/shared/InputBox/index.tsx",
        lineNumber: 84,
        columnNumber: 39
      }, this),
      error && /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(ErrorContainer, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(ErrorText, { children: error }, void 0, !1, {
          fileName: "app/shared/InputBox/index.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(Warning_default, {}, void 0, !1, {
          fileName: "app/shared/InputBox/index.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/shared/InputBox/index.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/shared/InputBox/index.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/shared/InputBox/index.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}, InputBox_default = InputBox;

// app/utils/stringUtils.ts
var truncateText = (text, maxLength) => text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

// app/components/PD/Delivery/styled.ts
var import_styled26 = __toESM(require("@emotion/styled"));

// app/components/Icons/TickMark.tsx
var Tick = "data:image/svg+xml;base64," + btoa(`
  <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.99234 9C3.55863 9 3.55863 9 2.22951 7.67838L0.312789 5.78638C0.213795 5.69046 0.135118 5.57581 0.0813976 5.44918C0.0276768 5.32254 0 5.18649 0 5.04906C0 4.91162 0.0276768 4.77557 0.0813976 4.64894C0.135118 4.5223 0.213795 4.40765 0.312789 4.31173C0.509534 4.11634 0.77623 4.00659 1.0543 4.00659C1.33236 4.00659 1.59906 4.11634 1.7958 4.31173L3.99234 6.49588L10.2042 0.305141C10.4009 0.10975 10.6676 0 10.9457 0C11.2238 0 11.4905 0.10975 11.6872 0.305141C11.7862 0.401057 11.8649 0.515712 11.9186 0.642346C11.9723 0.768979 12 0.905026 12 1.04246C12 1.1799 11.9723 1.31595 11.9186 1.44259C11.8649 1.56922 11.7862 1.68387 11.6872 1.77979L4.69187 8.73568C4.49929 8.90628 4.25026 9.00037 3.99234 9Z" fill="white"/>
  </svg>
`), TickMark_default = Tick;

// app/components/PD/Delivery/styled.ts
var DeliveryContainer = import_styled26.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface;
}};
  max-width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
`, DeliveryText = import_styled26.default.p`
  flex-shrink: 0;
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.titleXSmall;
}};
  -webkit-letter-spacing: 0;
  -moz-letter-spacing: 0;
  -ms-letter-spacing: 0;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
`, DeliveryButton = import_styled26.default.button`
  border-radius: 8px;
  border: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.16);
}};
  background: none;
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.buttonSmall;
}};
  text-align: center;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10;
}};
  flex-shrink: 0;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40}`;
}};
`, AddressContainer = import_styled26.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  background-color: ${({ selected, theme: theme2 }) => {
  var _a2, _b;
  return selected ? (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface20 : (_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.white;
}};
  box-sizing: border-box;
  padding: ${({ theme: theme2 }) => {
  var _a2, _b;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60} ${(_b = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _b.spacing100} `;
}};
`, AddressText = import_styled26.default.p`
  margin: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0;
}};
`, NameAndPostcode = import_styled26.default.span`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.subTitleMedium;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
`, StreetText = import_styled26.default.span`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyMedium;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
`, AddressCheckbox = import_styled26.default.input`
  margin-left: 10px;
  width: 22px;
  height: 22px;
  border-radius: 20px;
  border: 1.5px solid ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textOutline;
}};
  background-color: #f3f4f5;
  appearance: none;
  cursor: pointer;

  &:checked {
    background-color: #111314;
    border: 1.5px solid ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textOutline;
}};
    position: relative;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 16px;
    height: 16px;
    background: url(${TickMark_default}) no-repeat center center;
    background-size: contain;
  }
`, SavedAddressesHeading = import_styled26.default.h3`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.titleSmall;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
  padding: ${({ theme: theme2 }) => {
  var _a2, _b, _c, _d;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40} ${(_b = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _b.spacing100} ${(_c = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _c.spacing80} ${(_d = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _d.spacing100}`;
}};
`, Divider = import_styled26.default.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: ${({ theme: theme2 }) => {
  var _a2, _b;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40} ${(_b = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _b.spacing0}`;
}};
`, DividerText = import_styled26.default.span`
  padding: ${({ theme: theme2 }) => {
  var _a2, _b;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0} ${(_b = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _b.spacing40}`;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
  background: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.white;
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.buttonMedium;
}};
`, DividerLine = import_styled26.default.div`
  flex: 1;
  border-bottom: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.16);
}};
`, DeliveryDetailsContainer = import_styled26.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.white;
}};
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textSecondary, 0.08);
}};
  padding-bottom: ${({ theme: theme2 }) => {
  var _a2;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60}`;
}};
`, DeliveryDetailsContent = import_styled26.default.div`
  display: flex;
  align-items: center;
  gap: 12px;
`, DeliveryDetailsMessage = import_styled26.default.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.1px;
  margin-bottom: 2px;
`, DeliveryDetailsPincodeState = import_styled26.default.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`, AccordionContent = import_styled26.default.div`
  padding: ${({ theme: theme2 }) => {
  var _a2, _b;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60} ${(_b = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _b.spacing80}`;
}};
`, DeliveryInfoSection = import_styled26.default.div`
  margin-top: 12px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`, InfoItem2 = import_styled26.default.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0px 6px;
`, InfoIconWrapper = import_styled26.default.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #f3f4f5;
  display: flex;
  align-items: center;
  justify-content: center;
`, InfoContent = import_styled26.default.div`
  display: flex;
  flex-direction: column;
  color: var(--Text-Primary, rgba(0, 19, 37, 0.92));
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`, InfoTitle = import_styled26.default.span``, InfoSubtitle = import_styled26.default.span``;

// app/components/PD/Delivery/AddressContainer.tsx
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime"), AddressContainerComponent = ({
  address,
  onClick
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
  AddressContainer,
  {
    onClick: () => onClick(address.entity_id),
    selected: address.selected,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(AddressText, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(NameAndPostcode, { children: [
          address.firstname,
          ", ",
          address.postcode
        ] }, void 0, !0, {
          fileName: "app/components/PD/Delivery/AddressContainer.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/PD/Delivery/AddressContainer.tsx",
          lineNumber: 31,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(StreetText, { children: truncateText(address.street, 35) }, void 0, !1, {
          fileName: "app/components/PD/Delivery/AddressContainer.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/PD/Delivery/AddressContainer.tsx",
        lineNumber: 27,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
        AddressCheckbox,
        {
          type: "checkbox",
          checked: address.selected,
          readOnly: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/PD/Delivery/AddressContainer.tsx",
          lineNumber: 34,
          columnNumber: 5
        },
        this
      )
    ]
  },
  address.entity_id,
  !0,
  {
    fileName: "app/components/PD/Delivery/AddressContainer.tsx",
    lineNumber: 22,
    columnNumber: 3
  },
  this
), AddressContainer_default = AddressContainerComponent;

// app/components/Icons/COD.tsx
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime"), COD = () => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("svg", { width: "18", height: "18", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("g", { id: "hand-cash", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("g", { id: "Vector", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("path", { d: "M14.6595 7.78772C14.8263 7.78772 14.962 7.65232 14.962 7.48557C14.962 7.31882 14.8263 7.18343 14.6595 7.18343H12.5485C12.3818 7.18343 12.246 7.31882 12.246 7.48557C12.246 7.65232 12.3818 7.78772 12.5485 7.78772H13.1432C13.372 7.78772 13.5638 7.91836 13.6705 8.10352H12.5567C12.3899 8.10352 12.2541 8.23891 12.2541 8.40567C12.2541 8.57242 12.3899 8.70781 12.5567 8.70781H13.6705C13.5638 8.89297 13.372 9.02361 13.1432 9.02361H12.5832C12.5437 9.02361 12.5044 9.03168 12.4674 9.04699C12.4352 9.06041 12.4072 9.08079 12.3817 9.10385C12.3779 9.10731 12.3729 9.10846 12.3692 9.11216C12.3643 9.11714 12.3626 9.12378 12.358 9.12899C12.3365 9.15348 12.3169 9.17963 12.3042 9.21011C12.2735 9.28407 12.2735 9.36741 12.3041 9.44137C12.3169 9.47204 12.3367 9.49842 12.3584 9.523C12.3628 9.52807 12.3644 9.53453 12.3692 9.53937L13.555 10.7251C13.614 10.7841 13.6915 10.8136 13.7689 10.8136C13.8464 10.8136 13.9239 10.7841 13.9829 10.7251C14.101 10.607 14.101 10.4159 13.9829 10.2979L13.2974 9.61233C13.7965 9.5485 14.2005 9.18636 14.3235 8.70782H14.6514C14.8181 8.70782 14.9539 8.57242 14.9539 8.40567C14.9539 8.23892 14.8181 8.10353 14.6514 8.10353H14.3235C14.2945 7.99091 14.2498 7.88544 14.1919 7.78773L14.6595 7.78772Z", fill: "#001325", "fill-opacity": "0.64" }, void 0, !1, {
    fileName: "app/components/Icons/COD.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("path", { d: "M17.6559 6.04271L13.8317 3.88672C13.2938 3.58273 12.6245 3.76018 12.3058 4.28626L10.1732 7.80506H8.38081C7.86358 7.80506 7.35484 7.94451 6.90954 8.20829L5.29107 9.16883V8.93544C5.29107 8.6023 5.01991 8.33115 4.68641 8.33115H3.62871C3.29557 8.33115 3.02441 8.60231 3.02441 8.93544V13.7709C3.02441 14.1044 3.29558 14.3752 3.62871 14.3752H4.68641C5.01992 14.3752 5.29107 14.1044 5.29107 13.7709V13.4699H6.47753C6.53619 13.4699 6.59411 13.4839 6.64686 13.5105L7.16741 13.7709C7.46771 13.9229 7.8027 14.0011 8.13915 14.0011C8.22009 14.0011 8.3006 13.9878 8.38126 13.9785L11.8306 15.8841C12.0047 15.9808 12.1936 16.0265 12.3796 16.0265C12.764 16.0265 13.1366 15.8295 13.3498 15.4761L18.0713 7.61358C18.2299 7.34943 18.2742 7.03953 18.1953 6.74107C18.117 6.44261 17.9252 6.19471 17.6559 6.04271ZM4.53551 13.6197H3.77995V9.0867H4.53551V13.6197ZM7.50682 13.0958L6.98664 12.8353C6.82984 12.7564 6.65387 12.7143 6.47752 12.7143H5.29107V10.0474L7.29506 8.85833C7.6234 8.66354 7.99896 8.56061 8.3808 8.56061H9.70117L8.20962 10.9398C8.09082 11.1309 8.08271 11.3722 8.18932 11.5699C8.29557 11.7677 8.50107 11.8946 8.725 11.9005L11.3266 11.972C11.5074 11.975 11.6535 12.113 11.6668 12.293C11.6801 12.4701 11.5583 12.628 11.3849 12.6612L8.39518 13.222C8.09341 13.2758 7.77909 13.2338 7.50682 13.0958ZM17.4235 7.22474L12.702 15.0865C12.5965 15.2628 12.3722 15.3204 12.1958 15.223L9.56681 13.7706L11.5244 13.4035C12.0756 13.2994 12.4607 12.7984 12.4209 12.2377C12.3774 11.6644 11.9125 11.2253 11.3429 11.2165L9.02734 11.1532L10.7758 8.26852L11.0662 7.80506H11.0567L12.9521 4.67769C13.0577 4.50246 13.2783 4.44269 13.4605 4.54488L17.2848 6.70088C17.3748 6.75142 17.439 6.83443 17.4648 6.93403C17.4914 7.03327 17.4766 7.13657 17.4235 7.22474Z", fill: "#001325", "fill-opacity": "0.64" }, void 0, !1, {
    fileName: "app/components/Icons/COD.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Icons/COD.tsx",
  lineNumber: 5,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Icons/COD.tsx",
  lineNumber: 4,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/Icons/COD.tsx",
  lineNumber: 3,
  columnNumber: 3
}, this), COD_default = COD;

// app/components/Icons/DeliveryTruck.tsx
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime"), DeliveryTruck = () => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("svg", { width: "18", height: "18", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("g", { id: "delivery-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { id: "Icon", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.9468 7.0261L17.3395 9.11862C17.4801 9.32981 17.5552 9.57755 17.5554 9.83097V12.3242C17.5554 12.6686 17.4181 12.9989 17.1737 13.2424C16.9293 13.4859 16.5978 13.6227 16.2521 13.6227H16.1776C16.1484 14.0742 15.9477 14.4977 15.6164 14.8071C15.2851 15.1165 14.848 15.2887 14.394 15.2887C13.9399 15.2887 13.5028 15.1165 13.1715 14.8071C12.8402 14.4977 12.6396 14.0742 12.6103 13.6227H7.83637C7.80708 14.0742 7.60641 14.4977 7.27513 14.8071C6.94384 15.1165 6.50677 15.2887 6.05268 15.2887C5.59859 15.2887 5.16152 15.1165 4.83024 14.8071C4.49895 14.4977 4.29829 14.0742 4.26899 13.6227H3.27102C3.05177 13.6227 2.8415 13.536 2.68646 13.3815C2.53143 13.227 2.44434 13.0175 2.44434 12.7991V5.54204C2.44433 5.43228 2.46615 5.3236 2.50854 5.22228C2.55092 5.12097 2.61303 5.02902 2.69127 4.95175C2.76952 4.87448 2.86235 4.81342 2.96442 4.77209C3.06648 4.73076 3.17575 4.70999 3.28591 4.71097H11.6495C11.8695 4.71293 12.0797 4.80135 12.2345 4.95699C12.3894 5.11264 12.4762 5.32291 12.4762 5.54204V6.4399H14.8669C15.0815 6.44086 15.2926 6.49492 15.4811 6.59724C15.6696 6.69956 15.8296 6.84692 15.9468 7.0261ZM6.47865 14.013C6.59973 13.914 6.68222 13.776 6.71179 13.6227C6.73562 13.5801 6.75556 13.5354 6.77137 13.4892C6.78132 13.3951 6.77129 13.2999 6.74195 13.2099C6.71261 13.1199 6.6646 13.037 6.60105 12.9667C6.5375 12.8964 6.45982 12.8401 6.37305 12.8016C6.28628 12.7631 6.19235 12.7432 6.09737 12.7432C6.00238 12.7432 5.90846 12.7631 5.82169 12.8016C5.73491 12.8401 5.65723 12.8964 5.59368 12.9667C5.53013 13.037 5.48213 13.1199 5.45278 13.2099C5.42344 13.2999 5.41342 13.3951 5.42336 13.4892C5.4197 13.5336 5.4197 13.5783 5.42336 13.6227C5.45033 13.7704 5.52698 13.9046 5.6407 14.003C5.75442 14.1015 5.89842 14.1584 6.04896 14.1644C6.20555 14.1655 6.35758 14.1119 6.47865 14.013ZM7.46399 12.391H11.2325V5.95016H3.70297V12.391H4.67861C4.83973 12.1801 5.04678 12.0085 5.28415 11.889C5.52152 11.7694 5.78302 11.7051 6.04896 11.7009C6.32216 11.7 6.5919 11.7618 6.83728 11.8815C7.08266 12.0011 7.2971 12.1755 7.46399 12.391ZM14.8199 14.013C14.941 13.914 15.0235 13.776 15.0531 13.6227C15.0667 13.5791 15.0767 13.5344 15.0829 13.4892C15.0928 13.3951 15.0828 13.2999 15.0534 13.2099C15.0241 13.1199 14.9761 13.037 14.9125 12.9667C14.849 12.8964 14.7713 12.8401 14.6845 12.8016C14.5978 12.7631 14.5038 12.7432 14.4089 12.7432C14.3139 12.7432 14.2199 12.7631 14.1332 12.8016C14.0464 12.8401 13.9687 12.8964 13.9052 12.9667C13.8416 13.037 13.7936 13.1199 13.7643 13.2099C13.7349 13.2999 13.7249 13.3951 13.7348 13.4892C13.7312 13.5336 13.7312 13.5783 13.7348 13.6227C13.7628 13.7753 13.8439 13.9133 13.9637 14.0123C14.0835 14.1114 14.2345 14.1652 14.3902 14.1644C14.5468 14.1655 14.6989 14.1119 14.8199 14.013ZM16.3838 12.4554C16.4187 12.4206 16.4383 12.3734 16.4383 12.3242L16.4309 9.83097C16.4408 9.79705 16.4408 9.76101 16.4309 9.72709L15.0382 7.64199C15.023 7.61575 15.0013 7.5938 14.9753 7.57822C14.9492 7.56264 14.9196 7.55394 14.8892 7.55294H12.4986V12.5097H12.9156C13.0798 12.2664 13.3016 12.067 13.5613 11.9291C13.821 11.7913 14.1108 11.7192 14.4051 11.7192C14.6994 11.7192 14.9892 11.7913 15.249 11.9291C15.5087 12.067 15.7304 12.2664 15.8946 12.5097H16.2521C16.3015 12.5097 16.3489 12.4902 16.3838 12.4554Z", fill: "#001325", "fill-opacity": "0.64" }, void 0, !1, {
  fileName: "app/components/Icons/DeliveryTruck.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Icons/DeliveryTruck.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/Icons/DeliveryTruck.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this), DeliveryTruck_default = DeliveryTruck;

// app/components/PD/Delivery/constants.ts
var ENTER_PINCODE_FOR_DELIVERY = "Enter Pincode for Delivery", ENTER_PINCODE = "Enter Pincode", pincodeMaxLength = 6, OR = "OR", SELECT_FROM_SAVED_ADD = "Select from saved addresses", CONFIGURABLE = "configurable", ADDRESS_DETAIL_FETCH_ERROR = "Error fetching address details", SAVED_ADDRESSES_FETCH_ERROR = "Error fetching saved addresses", DEFAULT_API_ERROR_MSG = "Something went wrong, try again", AUTO_ADDRESS_FETCH_ERROR = "Auto address API failed", PIN_CODE_FOR_DELIVERY2 = "pinCodeDel", PINCODE_COOKIE_EXPIRY = 30, ADDRESS_ID_FOR_DELIVERY2 = "addressIdDel", FREE_DELIVERY = "Free Delivery", FREE_DELIVERY_ABOVE_AMOUNT = "above \u20B9299", COD_ON_ORDERS = "COD on orders", COD_ABOVE_AMOUNT = "above \u20B9249", CHANGE = "Change", DELIVERY_INFO = [
  {
    id: "free-delivery",
    title: FREE_DELIVERY,
    subtitle: FREE_DELIVERY_ABOVE_AMOUNT,
    icon: DeliveryTruck_default
  },
  {
    id: "cod",
    title: COD_ON_ORDERS,
    subtitle: COD_ABOVE_AMOUNT,
    icon: COD_default
  }
];

// app/components/Icons/GreenTick.tsx
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime"), GreenTickIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
      "path",
      {
        d: "M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.387 3 12 3ZM16.07 10L11.07 15C10.9295 15.1407 10.7388 15.2198 10.54 15.22C10.4399 15.2212 10.3405 15.2024 10.2477 15.1646C10.155 15.1268 10.0708 15.0709 10 15L7.9 12.91C7.82925 12.8411 7.77301 12.7586 7.73461 12.6676C7.69622 12.5766 7.67643 12.4788 7.67643 12.38C7.67643 12.2812 7.69622 12.1834 7.73461 12.0924C7.77301 12.0014 7.82925 11.9189 7.9 11.85C8.04063 11.7095 8.23125 11.6307 8.43 11.6307C8.62876 11.6307 8.81938 11.7095 8.96 11.85L10.53 13.42L15 9C15.1406 8.85955 15.3313 8.78066 15.53 8.78066C15.7288 8.78066 15.9194 8.85955 16.06 9C16.1865 9.13522 16.2576 9.31293 16.2595 9.49806C16.2613 9.68318 16.1937 9.86228 16.07 10Z",
        fill: "#068743"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Icons/GreenTick.tsx",
        lineNumber: 11,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/Icons/GreenTick.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), GreenTick_default = GreenTickIcon;

// app/components/PD/Delivery/DeliveryInfoItem.tsx
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime"), DeliveryInfoItem = ({ icon, title, subtitle }) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(InfoItem2, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(InfoIconWrapper, { children: icon }, void 0, !1, {
    fileName: "app/components/PD/Delivery/DeliveryInfoItem.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(InfoContent, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(InfoTitle, { children: title }, void 0, !1, {
      fileName: "app/components/PD/Delivery/DeliveryInfoItem.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(InfoSubtitle, { children: subtitle }, void 0, !1, {
      fileName: "app/components/PD/Delivery/DeliveryInfoItem.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/Delivery/DeliveryInfoItem.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/PD/Delivery/DeliveryInfoItem.tsx",
  lineNumber: 12,
  columnNumber: 3
}, this), DeliveryInfoItem_default = DeliveryInfoItem;

// app/components/PD/Delivery/DeliveryDetails.tsx
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime"), DeliveryDetails = ({
  message,
  pincode,
  state,
  onChange
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(DeliveryDetailsContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(DeliveryDetailsContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(GreenTick_default, {}, void 0, !1, {
        fileName: "app/components/PD/Delivery/DeliveryDetails.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(DeliveryDetailsMessage, { children: message }, void 0, !1, {
          fileName: "app/components/PD/Delivery/DeliveryDetails.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/PD/Delivery/DeliveryDetails.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(DeliveryDetailsPincodeState, { children: [
          pincode,
          " ",
          state && `(${state})`
        ] }, void 0, !0, {
          fileName: "app/components/PD/Delivery/DeliveryDetails.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/PD/Delivery/DeliveryDetails.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/PD/Delivery/DeliveryDetails.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(DeliveryButton, { onClick: onChange, children: CHANGE }, void 0, !1, {
      fileName: "app/components/PD/Delivery/DeliveryDetails.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/Delivery/DeliveryDetails.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(DeliveryInfoSection, { children: DELIVERY_INFO.map(({ id, icon: Icon3, title, subtitle }) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
    DeliveryInfoItem_default,
    {
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Icon3, {}, void 0, !1, {
        fileName: "app/components/PD/Delivery/DeliveryDetails.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      title,
      subtitle
    },
    id,
    !1,
    {
      fileName: "app/components/PD/Delivery/DeliveryDetails.tsx",
      lineNumber: 45,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/PD/Delivery/DeliveryDetails.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/PD/Delivery/DeliveryDetails.tsx",
  lineNumber: 28,
  columnNumber: 3
}, this), DeliveryDetails_default = DeliveryDetails;

// app/components/PD/Delivery/index.tsx
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime"), DeliveryAccordion = ({
  product,
  currSkuId
}) => {
  var _a2, _b, _c;
  let [isBottomSheetOpen, setBottomSheetOpen] = (0, import_react19.useState)(!1), [pincode, setPincode] = (0, import_react19.useState)(""), [savedAddresses, setSavedAddresses] = (0, import_react19.useState)([]), [skuDetails, setSkuDetails] = (0, import_react19.useState)(null), [inputPincode, setInputPincode] = (0, import_react19.useState)(""), [errorMessage, setErrorMessage] = (0, import_react19.useState)(""), [isAutoAddressSuccess, setIsAutoAddressSuccess] = (0, import_react19.useState)(!1), [isAddressDetailsSuccess, setIsAddressDetailsSuccess] = (0, import_react19.useState)(!1), [state, setState] = (0, import_react19.useState)(""), [addressDetailsResponse, setAddressDetailsResponse] = (0, import_react19.useState)(null), isLoggedIn = useIsLoggedIn(), callAddressDetailsAPI = (pincodeValue) => {
    setPincode(pincodeValue), setErrorMessage(""), setIsAutoAddressSuccess(!0), setIsAddressDetailsSuccess(!1), addressDetailsFetcher.submit(
      {
        pincode: pincodeValue,
        skus: pskuArray && JSON.stringify(pskuArray),
        type: product == null ? void 0 : product.productType
      },
      { method: API_METHODS.POST, action: ACTION_ROUTES.addressDetail }
    );
  };
  (0, import_react19.useEffect)(() => {
    var _a3;
    let savedPincode = ((_a3 = getCookie(PIN_CODE_FOR_DELIVERY2)) == null ? void 0 : _a3.toString()) || "";
    savedPincode && callAddressDetailsAPI(savedPincode == null ? void 0 : savedPincode.toString());
  }, []), (0, import_react19.useEffect)(() => {
    isAutoAddressSuccess && isAddressDetailsSuccess && !errorMessage && (handleCloseBottomSheet(), setSkuDetails((prevDetails) => ({
      ...prevDetails,
      state
    })), setCookie(PIN_CODE_FOR_DELIVERY2, pincode, PINCODE_COOKIE_EXPIRY));
  }, [isAutoAddressSuccess, isAddressDetailsSuccess, errorMessage]);
  let { fetcher: addressDetailsFetcher, isLoading: isAddressDetailsLoading } = useFetcherHandler({
    onSuccess: (data) => {
      var _a3, _b2;
      if ((data == null ? void 0 : data.status) === API_STATES.SUCCESS) {
        setAddressDetailsResponse(data);
        let skuDetailsResponse = (_a3 = data == null ? void 0 : data.data) == null ? void 0 : _a3.details[currSkuId];
        setSkuDetails({
          ...skuDetailsResponse,
          pincode: pincode || (skuDetailsResponse == null ? void 0 : skuDetailsResponse.pincode),
          state,
          message: (skuDetailsResponse == null ? void 0 : skuDetailsResponse.message) || ((_b2 = data == null ? void 0 : data.data) == null ? void 0 : _b2.message)
        }), setIsAddressDetailsSuccess(!0);
      } else
        setIsAddressDetailsSuccess(!1), setErrorMessage((data == null ? void 0 : data.message) || DEFAULT_API_ERROR_MSG);
    },
    onError: (error) => {
      logger.error(error, ADDRESS_DETAIL_FETCH_ERROR), setErrorMessage(DEFAULT_API_ERROR_MSG);
    },
    successHandler: (data) => (data == null ? void 0 : data.status) === API_STATES.SUCCESS
  });
  (0, import_react19.useEffect)(() => {
    var _a3, _b2, _c2;
    let skuDetails2 = (_b2 = (_a3 = addressDetailsResponse == null ? void 0 : addressDetailsResponse.data) == null ? void 0 : _a3.details) == null ? void 0 : _b2[currSkuId];
    skuDetails2 && setSkuDetails({
      ...skuDetails2,
      pincode,
      state,
      message: (skuDetails2 == null ? void 0 : skuDetails2.message) || ((_c2 = addressDetailsResponse == null ? void 0 : addressDetailsResponse.data) == null ? void 0 : _c2.message)
    });
  }, [currSkuId, addressDetailsResponse]);
  let { fetcher: savedAddressesFetcher } = useFetcherHandler({
    onSuccess: (data) => {
      setSavedAddresses((data == null ? void 0 : data.data) || []);
    },
    onError: (error) => {
      logger.error(error, SAVED_ADDRESSES_FETCH_ERROR);
    },
    successHandler: (data) => (data == null ? void 0 : data.status) === "success"
  }), { fetcher: autoAddressFetcher, isLoading: isAutoAddressLoading } = useFetcherHandler({
    onSuccess: (data) => {
      data.status ? (setState(data.state), setIsAutoAddressSuccess(!0)) : (setIsAutoAddressSuccess(!1), setErrorMessage(data.message || DEFAULT_API_ERROR_MSG));
    },
    onError: (error) => {
      logger.error(error, AUTO_ADDRESS_FETCH_ERROR), setErrorMessage(error || DEFAULT_API_ERROR_MSG), setIsAutoAddressSuccess(!1);
    },
    successHandler: (data) => (data == null ? void 0 : data.status) === !0
  }), pskuArray = (product == null ? void 0 : product.productType) === CONFIGURABLE ? (_a2 = product == null ? void 0 : product.variants) == null ? void 0 : _a2.map((item) => item.sku) : [product == null ? void 0 : product.sku], config = useConfig(), deliveryDetailsAccConfig = ((_c = (_b = config == null ? void 0 : config.configs) == null ? void 0 : _b.collapsePdConfig) == null ? void 0 : _c.deliverySection) || {};
  (0, import_react19.useEffect)(() => {
    isLoggedIn && savedAddressesFetcher.submit(
      { source: "react" },
      { method: API_METHODS.POST, action: ACTION_ROUTES.savedAddress }
    );
  }, [isLoggedIn]);
  let handleOpenBottomSheet = () => {
    setInputPincode(""), setBottomSheetOpen(!0);
  }, handleCloseBottomSheet = () => {
    setBottomSheetOpen(!1), setErrorMessage("");
  }, callAddressAPIs = (pincodeValue) => {
    setPincode(pincodeValue), setErrorMessage(""), setSkuDetails(null), setIsAutoAddressSuccess(!1), setIsAddressDetailsSuccess(!1), setState("");
    let queryParams = new URLSearchParams({
      pincode: pincodeValue,
      productType: product == null ? void 0 : product.productType,
      sku: currSkuId
    }).toString();
    Promise.all([
      autoAddressFetcher.load(`${ACTION_ROUTES.autoAddress}?${queryParams}`),
      addressDetailsFetcher.submit(
        {
          pincode: pincodeValue,
          skus: pskuArray && JSON.stringify(pskuArray),
          type: product == null ? void 0 : product.productType
        },
        { method: API_METHODS.POST, action: ACTION_ROUTES.addressDetail }
      )
    ]);
  }, handleAddressClick = (addressId) => {
    setCookie(ADDRESS_ID_FOR_DELIVERY2, addressId, PINCODE_COOKIE_EXPIRY);
    let selectedAddress = savedAddresses == null ? void 0 : savedAddresses.find(
      (address) => address.entity_id === addressId
    );
    if (selectedAddress) {
      let newPincode = selectedAddress.postcode;
      setSavedAddresses(
        (prevAddresses) => prevAddresses.map(
          (address) => address.entity_id === addressId ? { ...address, selected: !0 } : { ...address, selected: !1 }
        )
      ), callAddressAPIs(newPincode);
    }
  }, handleCheckButtonClick = () => {
    callAddressAPIs(inputPincode);
  }, isLoading = isAutoAddressLoading || isAddressDetailsLoading;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_jsx_dev_runtime47.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
      Accordion_default,
      {
        title: deliveryDetailsAccConfig.title,
        subTitle: deliveryDetailsAccConfig.subTitle,
        opened: deliveryDetailsAccConfig.isOpened,
        keyValue: deliveryDetailsAccConfig.key,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DeliveryIcon_default, {}, void 0, !1, {
          fileName: "app/components/PD/Delivery/index.tsx",
          lineNumber: 250,
          columnNumber: 15
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(AccordionContent, { children: skuDetails && isAutoAddressSuccess && isAddressDetailsSuccess && !errorMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          DeliveryDetails_default,
          {
            message: skuDetails == null ? void 0 : skuDetails.message,
            pincode: skuDetails == null ? void 0 : skuDetails.pincode,
            state,
            onChange: handleOpenBottomSheet
          },
          void 0,
          !1,
          {
            fileName: "app/components/PD/Delivery/index.tsx",
            lineNumber: 257,
            columnNumber: 13
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DeliveryContainer, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DeliveryText, { children: ENTER_PINCODE_FOR_DELIVERY }, void 0, !1, {
            fileName: "app/components/PD/Delivery/index.tsx",
            lineNumber: 265,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DeliveryButton, { onClick: handleOpenBottomSheet, children: ENTER_PINCODE }, void 0, !1, {
            fileName: "app/components/PD/Delivery/index.tsx",
            lineNumber: 266,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/PD/Delivery/index.tsx",
          lineNumber: 264,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/PD/Delivery/index.tsx",
          lineNumber: 252,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/Delivery/index.tsx",
        lineNumber: 245,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
      BottomSheet_default,
      {
        isOpen: isBottomSheetOpen,
        onClose: handleCloseBottomSheet,
        closeOnClickOutside: !isLoading,
        children: [
          savedAddresses.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_jsx_dev_runtime47.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(SavedAddressesHeading, { children: SELECT_FROM_SAVED_ADD }, void 0, !1, {
              fileName: "app/components/PD/Delivery/index.tsx",
              lineNumber: 280,
              columnNumber: 13
            }, this),
            savedAddresses.map((address) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
              AddressContainer_default,
              {
                address,
                onClick: isLoading ? () => {
                } : handleAddressClick
              },
              address.entity_id,
              !1,
              {
                fileName: "app/components/PD/Delivery/index.tsx",
                lineNumber: 284,
                columnNumber: 15
              },
              this
            )),
            /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Divider, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DividerLine, {}, void 0, !1, {
                fileName: "app/components/PD/Delivery/index.tsx",
                lineNumber: 291,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DividerText, { children: OR }, void 0, !1, {
                fileName: "app/components/PD/Delivery/index.tsx",
                lineNumber: 292,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DividerLine, {}, void 0, !1, {
                fileName: "app/components/PD/Delivery/index.tsx",
                lineNumber: 293,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/PD/Delivery/index.tsx",
              lineNumber: 290,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/PD/Delivery/index.tsx",
            lineNumber: 279,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            InputBox_default,
            {
              value: inputPincode,
              onChange: (e) => {
                setInputPincode(e.target.value), setErrorMessage("");
              },
              placeholder: ENTER_PINCODE,
              showSubtitle: !0,
              onlyNumbers: !0,
              maxLength: pincodeMaxLength,
              showButton: inputPincode.length === pincodeMaxLength,
              onButtonClick: handleCheckButtonClick,
              disabled: isLoading,
              error: errorMessage
            },
            void 0,
            !1,
            {
              fileName: "app/components/PD/Delivery/index.tsx",
              lineNumber: 297,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/PD/Delivery/index.tsx",
        lineNumber: 273,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/PD/Delivery/index.tsx",
    lineNumber: 244,
    columnNumber: 5
  }, this);
}, Delivery_default = DeliveryAccordion;

// app/components/PD/FooterBanner/index.tsx
var import_styled31 = __toESM(require("@emotion/styled")), import_jsx_dev_runtime48 = require("react/jsx-dev-runtime"), Wrapper = import_styled31.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`, Logo3 = import_styled31.default.img`
  max-width: 100%;
  height: auto;
  display: block;
`, FooterBanner = ({ src, alt }) => src ? /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(Wrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
  Logo3,
  {
    src,
    alt
  },
  void 0,
  !1,
  {
    fileName: "app/components/PD/FooterBanner/index.tsx",
    lineNumber: 26,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/PD/FooterBanner/index.tsx",
  lineNumber: 25,
  columnNumber: 5
}, this) : null, FooterBanner_default = FooterBanner;

// app/components/PD/Gallery/index.tsx
var import_react37 = require("@remix-run/react"), import_react38 = require("react");

// app/components/PD/FullScreenCarousel/index.tsx
var import_react35 = require("react");

// app/shared/Carousel/constants.ts
var CAROUSEL_VIEW = {
  DEFAULT: "default",
  FULL_SCREEN: "fullScreen"
}, VIEW_SIMILAR = "View Similar", MEDIA_FORMAT = {
  VIDEO: "video",
  YOUTUBE_VIDEO: "youtube video",
  IMAGE: "image"
}, MIN_SWIPE_DISTANCE = 20;

// app/shared/Carousel/utils/index.ts
var validateSlide = (index2, slidesLength) => {
  let isValid = !1;
  return index2 > -1 && index2 < slidesLength && (isValid = !0), isValid;
}, onSwipeRight = (activeSlide, slidesLength) => {
  let nextSlide = activeSlide - 1;
  return validateSlide(nextSlide, slidesLength) ? nextSlide : activeSlide;
}, onSwipeLeft = (activeSlide, slidesLength) => {
  let nextSlide = activeSlide;
  return validateSlide(nextSlide + 1, slidesLength) && (nextSlide = activeSlide + 1), nextSlide;
}, getImageData = (data) => data.filter((item) => item.mediaType === MEDIA_FORMAT.IMAGE), getVideoData = (data) => data.filter((item) => item.mediaType === MEDIA_FORMAT.VIDEO || item.type === MEDIA_FORMAT.YOUTUBE_VIDEO), getVideoIndexes = (media) => {
  var _a2;
  return (_a2 = media == null ? void 0 : media.map((item, index2) => item.mediaType === MEDIA_FORMAT.VIDEO || item.mediaType === MEDIA_FORMAT.YOUTUBE_VIDEO ? index2 : -1)) == null ? void 0 : _a2.filter((index2) => index2 !== -1);
}, isCurrentMediaVideo = (media) => media.mediaType === MEDIA_FORMAT.VIDEO || media.mediaType === MEDIA_FORMAT.YOUTUBE_VIDEO;

// app/shared/Carousel/index.tsx
var import_react25 = require("react");

// app/shared/Carousel/Dots/index.tsx
var import_react20 = require("@emotion/react");

// app/components/Icons/Circle.tsx
var import_styled32 = __toESM(require("@emotion/styled")), import_jsx_dev_runtime49 = require("@emotion/react/jsx-dev-runtime"), StyledSvg = import_styled32.default.svg`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`, StyledPath = import_styled32.default.path`
  fill: ${(props) => props.fill || "#D3D3D3"};
`, Circle = ({ height, width, fill }) => /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
  StyledSvg,
  {
    width,
    height,
    viewBox: "0 0 8 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
      StyledPath,
      {
        fill,
        d: "M4 0.5C2.06722 0.5 0.5 2.06722 0.5 4C0.5 5.93278 2.06722 7.5 4 7.5C5.93278 7.5 7.5 5.93278 7.5 4C7.5 2.06722 5.93278 0.5 4 0.5Z"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Icons/Circle.tsx",
        lineNumber: 27,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/Icons/Circle.tsx",
    lineNumber: 20,
    columnNumber: 3
  },
  this
), Circle_default = Circle;

// app/shared/Carousel/Dots/styled.ts
var import_styled33 = __toESM(require("@emotion/styled")), Wrapper2 = import_styled33.default.div`
  display: flex;
  overflow: hidden;
  width: 50px;
`, DotList = import_styled33.default.ul`
  display: flex;
  transform: translateX(${(props) => props.transform}px);
  transition: all 0.2s ease 0s;
  gap: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20;
}};
`, Dot = import_styled33.default.li`
  display: flex;
  align-items: center;
  line-height: 0;
`;

// app/shared/Carousel/Dots/constants.ts
var DOTS = {
  MAX_VISIBLE: 5,
  WIDTH: 10
};

// app/shared/Carousel/Dots/utils.ts
var calculateTranslateX = (active, totalDots) => {
  if (!totalDots || totalDots <= DOTS.MAX_VISIBLE)
    return 0;
  let startDot = Math.max(
    0,
    Math.min(active - 2, totalDots - DOTS.MAX_VISIBLE)
  );
  return totalDots <= DOTS.MAX_VISIBLE ? 0 : -startDot * DOTS.WIDTH;
};

// app/components/Icons/Polygon.tsx
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime"), Polygon = ({
  width = 8,
  height = 9,
  fill = "#111314",
  className
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 8 9",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
      "path",
      {
        id: "Polygon 1",
        d: "M7.5 4.5L0.75 8.39711L0.75 0.602885L7.5 4.5Z",
        fill
      },
      void 0,
      !1,
      {
        fileName: "app/components/Icons/Polygon.tsx",
        lineNumber: 22,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/Icons/Polygon.tsx",
    lineNumber: 14,
    columnNumber: 3
  },
  this
), Polygon_default = Polygon;

// app/shared/Carousel/Dots/index.tsx
var import_jsx_dev_runtime51 = require("@emotion/react/jsx-dev-runtime"), Dots = ({ count, activeIndex, onClick, videoIndexes }) => {
  let theme2 = (0, import_react20.useTheme)();
  if (count <= 0)
    return null;
  let translateX = calculateTranslateX(activeIndex, count), renderDotContent = (index2) => {
    var _a2, _b;
    let isActive = index2 === activeIndex;
    return videoIndexes != null && videoIndexes.includes(index2) ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
      Polygon_default,
      {
        width: 6,
        height: 6,
        fill: isActive ? (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.primary : "#D3D3D3"
      },
      void 0,
      !1,
      {
        fileName: "app/shared/Carousel/Dots/index.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
      Circle_default,
      {
        height: 6,
        width: 6,
        fill: isActive ? (_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.primary : "#D3D3D3"
      },
      void 0,
      !1,
      {
        fileName: "app/shared/Carousel/Dots/index.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Wrapper2, { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(DotList, { transform: translateX, children: Array.from({ length: count }).map((_, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
    Dot,
    {
      onClick: () => onClick(index2),
      role: "button",
      children: renderDotContent(index2)
    },
    index2,
    !1,
    {
      fileName: "app/shared/Carousel/Dots/index.tsx",
      lineNumber: 46,
      columnNumber: 11
    },
    this
  )) }, void 0, !1, {
    fileName: "app/shared/Carousel/Dots/index.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/shared/Carousel/Dots/index.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}, Dots_default = Dots;

// app/shared/Carousel/VideoPlayer/index.tsx
var import_react22 = require("react");

// app/shared/Carousel/VideoPlayer/PlayControls/styled.ts
var import_styled35 = __toESM(require("@emotion/styled")), Button2 = import_styled35.default.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`, Wrapper3 = import_styled35.default.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`, Controls = import_styled35.default.div`
  display: flex;
  align-items: center;
  gap: 32px;
  pointer-events: auto;
  border-radius: 8px;
`;

// app/components/Icons/Forward.tsx
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime"), Forward = () => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("path", { d: "M16.4 8.63999C16.4026 8.8381 16.4824 9.02736 16.6225 9.16745C16.7626 9.30755 16.9519 9.3874 17.15 9.38999H21C21.1989 9.38999 21.3897 9.31097 21.5303 9.17032C21.671 9.02967 21.75 8.8389 21.75 8.63999V4.81999C21.75 4.62108 21.671 4.43031 21.5303 4.28966C21.3897 4.14901 21.1989 4.06999 21 4.06999C20.8019 4.07258 20.6126 4.15243 20.4725 4.29252C20.3324 4.43262 20.2526 4.62188 20.25 4.81999V6.76999C18.8968 4.63723 16.7688 3.11281 14.3141 2.51778C11.8594 1.92276 9.26955 2.30356 7.09 3.57999C5.98359 4.22149 5.0145 5.07482 4.23817 6.09118C3.46183 7.10753 2.89348 8.26696 2.56562 9.50316C2.23776 10.7394 2.15683 12.0281 2.32746 13.2956C2.49808 14.5631 2.91692 15.7845 3.56 16.89C4.60235 18.6717 6.18275 20.077 8.07405 20.904C9.96535 21.731 12.0701 21.9371 14.0859 21.4926C16.1017 21.0481 17.9246 19.9759 19.2927 18.4302C20.6608 16.8845 21.5036 14.9448 21.7 12.89C21.7165 12.7886 21.712 12.6848 21.6868 12.5852C21.6615 12.4856 21.6161 12.3922 21.5532 12.3109C21.4904 12.2296 21.4115 12.162 21.3215 12.1125C21.2315 12.0629 21.1322 12.0324 21.0299 12.0228C20.9276 12.0131 20.8244 12.0247 20.7267 12.0566C20.629 12.0885 20.539 12.1402 20.4621 12.2084C20.3852 12.2766 20.3232 12.3598 20.2798 12.453C20.2364 12.5462 20.2127 12.6473 20.21 12.75C20.0423 14.488 19.3282 16.1282 18.1701 17.4349C17.0121 18.7417 15.4697 19.6479 13.7645 20.0234C12.0592 20.3989 10.2789 20.2244 8.67904 19.5248C7.07921 18.8253 5.7422 17.6368 4.86 16.13C4.31635 15.194 3.96268 14.16 3.81923 13.0871C3.67579 12.0142 3.74539 10.9236 4.02406 9.87762C4.30273 8.83169 4.78499 7.85099 5.44322 6.99171C6.10145 6.13242 6.92272 5.41142 7.86 4.86999C9.75773 3.7755 12.0115 3.47667 14.1289 4.0388C16.2463 4.60094 18.0551 5.97833 19.16 7.86999H17.16C17.059 7.8686 16.9587 7.88765 16.8652 7.92599C16.7717 7.96432 16.6869 8.02115 16.6159 8.09306C16.545 8.16498 16.4893 8.2505 16.4521 8.34448C16.415 8.43847 16.3973 8.53898 16.4 8.63999Z", fill: "white" }, void 0, !1, {
    fileName: "app/components/Icons/Forward.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("path", { d: "M10.06 9.60001V14.68H8.82995V10.75L7.69995 11.44V10.38L8.91995 9.60001H10.06Z", fill: "white" }, void 0, !1, {
    fileName: "app/components/Icons/Forward.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("path", { d: "M13.3701 14.81C12.9636 14.8186 12.5637 14.7073 12.2201 14.49C11.888 14.2674 11.6303 13.9505 11.4801 13.58C11.2965 13.1261 11.2081 12.6394 11.2201 12.15C11.208 11.6638 11.2965 11.1804 11.4801 10.73C11.6336 10.3669 11.8911 10.0572 12.2201 9.84C12.5694 9.63715 12.9661 9.5303 13.3701 9.5303C13.774 9.5303 14.1708 9.63715 14.5201 9.84C14.852 10.054 15.1103 10.3646 15.2601 10.73C15.4436 11.1804 15.5322 11.6638 15.5201 12.15C15.5321 12.6394 15.4436 13.1261 15.2601 13.58C15.1075 13.9517 14.8504 14.2712 14.5201 14.5C14.1736 14.7096 13.775 14.817 13.3701 14.81ZM13.3701 13.81C13.5033 13.8091 13.6337 13.7712 13.7467 13.7006C13.8597 13.63 13.9509 13.5294 14.0101 13.41C14.2041 13.0233 14.2905 12.5916 14.2601 12.16C14.2685 11.8522 14.228 11.5451 14.1401 11.25C14.0949 11.0452 13.9864 10.8598 13.8301 10.72C13.7064 10.6018 13.5411 10.5371 13.3701 10.54C13.2368 10.5409 13.1065 10.5788 12.9935 10.6494C12.8805 10.72 12.7893 10.8206 12.7301 10.94C12.5443 11.3185 12.4615 11.7393 12.4901 12.16C12.4769 12.4732 12.5107 12.7867 12.5901 13.09C12.646 13.2956 12.7566 13.4822 12.9101 13.63C13.0353 13.7446 13.2004 13.8056 13.3701 13.8V13.81Z", fill: "white" }, void 0, !1, {
    fileName: "app/components/Icons/Forward.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Icons/Forward.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this), Forward_default = Forward;

// app/components/Icons/Pause.tsx
var import_jsx_dev_runtime53 = require("react/jsx-dev-runtime"), PauseIcon = ({ width = 21, height = 24 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 21 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
      "path",
      {
        d: "M20.0266 10.8667L2.71993 0.20001C1.8266 -0.346657 0.679932 0.293343 0.679932 1.33334V22.6667C0.679932 23.7067 1.8266 24.3467 2.7066 23.8L20.0133 13.1333C20.8666 12.6133 20.8666 11.3867 20.0266 10.8667Z",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Icons/Pause.tsx",
        lineNumber: 16,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/Icons/Pause.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
), Pause_default = PauseIcon;

// app/components/Icons/Play.tsx
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime"), Play = ({ width = 40, height = 40 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
        "path",
        {
          d: "M30.8333 35H24.1667C23.25 35 22.5 34.25 22.5 33.3333V6.66667C22.5 5.75 23.25 5 24.1667 5H30.8333C31.75 5 32.5 5.75 32.5 6.66667V33.3333C32.5 34.25 31.75 35 30.8333 35Z",
          fill: "white"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/Play.tsx",
          lineNumber: 16,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
        "path",
        {
          d: "M15.8333 35H9.16667C8.25 35 7.5 34.25 7.5 33.3333V6.66667C7.5 5.75 8.25 5 9.16667 5H15.8333C16.75 5 17.5 5.75 17.5 6.66667V33.3333C17.5 34.25 16.75 35 15.8333 35Z",
          fill: "white"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/Play.tsx",
          lineNumber: 20,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Icons/Play.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
), Play_default = Play;

// app/components/Icons/Replay.tsx
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime");
function Replay() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.7169 34.0165C15.1947 35.4638 18.014 36.2233 20.8836 36.2165H20.9336C23.4169 36.2206 25.8681 35.6548 28.0984 34.5627C30.3288 33.4707 32.2789 31.8815 33.7986 29.9174C35.3183 27.9534 36.3672 25.6669 36.8644 23.2338C37.3617 20.8008 37.2941 18.2861 36.6669 15.8832C35.857 12.7641 34.1389 9.95582 31.7305 7.81464C29.3221 5.67347 26.332 4.29589 23.1395 3.85665C19.947 3.41742 16.696 3.93633 13.7989 5.34755C11.0846 6.66972 8.79549 8.71933 7.18335 11.2627V8.06652C7.18559 7.90175 7.15479 7.7382 7.09277 7.58553C7.03074 7.43286 6.93875 7.29416 6.82223 7.17764C6.70571 7.06112 6.56701 6.96913 6.41434 6.9071C6.26167 6.84508 6.09812 6.81428 5.93335 6.81652C5.60183 6.81652 5.28389 6.94822 5.04947 7.18264C4.81505 7.41706 4.68335 7.735 4.68335 8.06652V14.4165C4.68767 14.7467 4.82075 15.0621 5.05424 15.2956C5.28773 15.5291 5.60317 15.6622 5.93335 15.6665H12.2833C12.6149 15.6665 12.9328 15.5348 13.1672 15.3004C13.4017 15.066 13.5333 14.748 13.5333 14.4165C13.5333 14.085 13.4017 13.7671 13.1672 13.5326C12.9328 13.2982 12.6149 13.1665 12.2833 13.1665H8.94748L9.00024 13.0832C10.3778 10.7399 12.4175 8.85625 14.8628 7.66911C17.3081 6.48197 20.0498 6.04436 22.7431 6.41131C25.4365 6.77826 27.9612 7.93339 29.9998 9.73143C32.0383 11.5295 33.4998 13.8901 34.2002 16.5165C34.6648 18.2575 34.7788 20.0734 34.5356 21.8587C34.2924 23.6441 33.6969 25.3633 32.7836 26.9165C31.3093 29.4302 29.0753 31.4112 26.4034 32.5744C23.7314 33.7375 20.7593 34.0227 17.9149 33.389C15.0705 32.7552 12.5005 31.2352 10.5751 29.0478C8.64963 26.8604 7.46797 24.1184 7.20024 21.2165C7.18602 21.0524 7.1396 20.8927 7.06363 20.7464C6.98767 20.6002 6.88366 20.4704 6.75752 20.3644C6.63139 20.2584 6.48561 20.1782 6.32851 20.1286C6.17141 20.0789 6.00606 20.0607 5.84191 20.0749C5.67776 20.0891 5.51801 20.1355 5.3718 20.2115C5.22559 20.2875 5.09577 20.3915 4.98976 20.5176C4.88374 20.6437 4.80361 20.7895 4.75394 20.9466C4.70426 21.1037 4.68602 21.2691 4.70024 21.4332C4.94232 24.0162 5.79559 26.5046 7.18956 28.6926C8.58353 30.8807 10.4782 32.7056 12.7169 34.0165Z", fill: "white" }, void 0, !1, {
      fileName: "app/components/Icons/Replay.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("path", { d: "M27.0666 20.1055L19.3166 15.1055C19.2208 15.042 19.1095 15.0057 18.9946 15.0006C18.8798 14.9955 18.7657 15.0218 18.6646 15.0766C18.5636 15.1314 18.4793 15.2127 18.421 15.3118C18.3626 15.4108 18.3323 15.5239 18.3333 15.6388V25.6388C18.3323 25.7538 18.3626 25.8669 18.421 25.9659C18.4793 26.065 18.5636 26.1463 18.6646 26.2011C18.7657 26.2559 18.8798 26.2822 18.9946 26.2771C19.1095 26.272 19.2208 26.2357 19.3166 26.1722L27.0666 21.1722C27.1561 21.1149 27.2297 21.036 27.2807 20.9428C27.3317 20.8496 27.3584 20.7451 27.3584 20.6388C27.3584 20.5326 27.3317 20.4281 27.2807 20.3349C27.2297 20.2417 27.1561 20.1628 27.0666 20.1055Z", fill: "white" }, void 0, !1, {
      fileName: "app/components/Icons/Replay.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Icons/Replay.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var Replay_default = Replay;

// app/components/Icons/Rewind.tsx
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime"), Rewind = () => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("path", { d: "M28.56 12.7067C27.9121 10.264 26.567 8.06283 24.6889 6.37192C22.8108 4.68101 20.481 3.57353 17.9839 3.1847C15.4869 2.79586 12.9307 3.14249 10.6273 4.18227C8.32403 5.22205 6.3733 6.90999 5.01333 9.03998V6.45332C5.01518 6.32035 4.99013 6.18839 4.93969 6.06535C4.88925 5.94231 4.81445 5.83074 4.7198 5.73734C4.62516 5.64393 4.5126 5.57063 4.38891 5.52182C4.26521 5.47301 4.13293 5.44971 4 5.45332C3.73478 5.45332 3.48043 5.55868 3.29289 5.74621C3.10536 5.93375 3 6.1881 3 6.45332V11.5333C3.00345 11.7975 3.10992 12.0498 3.29671 12.2366C3.4835 12.4234 3.73586 12.5299 4 12.5333H9.09333C9.35855 12.5333 9.6129 12.428 9.80044 12.2404C9.98798 12.0529 10.0933 11.7985 10.0933 11.5333C10.0933 11.2681 9.98798 11.0137 9.80044 10.8262C9.6129 10.6387 9.35855 10.5333 9.09333 10.5333H6.42667V10.4667C7.51883 8.56579 9.15282 7.03363 11.1199 6.06586C13.087 5.0981 15.298 4.73866 17.4703 5.03346C19.6427 5.32826 21.6779 6.26392 23.316 7.72092C24.954 9.17793 26.1206 11.0901 26.6667 13.2133C27.0383 14.6061 27.1295 16.0588 26.935 17.4871C26.7404 18.9153 26.264 20.2907 25.5333 21.5333C24.361 23.5611 22.5727 25.1624 20.4281 26.1044C18.2836 27.0464 15.8946 27.2802 13.6081 26.7718C11.3217 26.2633 9.25687 25.0392 7.71365 23.2771C6.17044 21.515 5.2292 19.3069 5.02667 16.9733C5.00368 16.7081 4.87628 16.4629 4.67249 16.2916C4.57158 16.2068 4.45496 16.1427 4.32928 16.1029C4.2036 16.0632 4.07132 16.0486 3.94 16.06C3.67478 16.083 3.42956 16.2104 3.25828 16.4142C3.08699 16.6179 3.00368 16.8814 3.02667 17.1467C3.22033 19.2131 3.90295 21.2038 5.01812 22.9542C6.13329 24.7046 7.649 26.1645 9.44 27.2133C12.4194 28.9414 15.962 29.4191 19.2927 28.5421C22.6235 27.665 25.4713 25.5046 27.2133 22.5333C28.0768 21.0659 28.6404 19.4418 28.8716 17.755C29.1028 16.0681 28.9969 14.3522 28.56 12.7067Z", fill: "white" }, void 0, !1, {
    fileName: "app/components/Icons/Rewind.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("path", { d: "M13.9601 12.8267V19.6H12.3335V14.3467L10.8135 15.28V13.8533L12.4801 12.8267H13.9601Z", fill: "white" }, void 0, !1, {
    fileName: "app/components/Icons/Rewind.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("path", { d: "M18.3732 19.76C17.8365 19.7784 17.3067 19.6344 16.8532 19.3467C16.4078 19.0436 16.0604 18.6173 15.8532 18.12C15.607 17.5156 15.4933 16.8654 15.5199 16.2133C15.4986 15.5647 15.6168 14.919 15.8666 14.32C16.0713 13.8359 16.4146 13.423 16.8532 13.1333C17.3195 12.8717 17.8452 12.7343 18.3799 12.7343C18.9146 12.7343 19.4403 12.8717 19.9066 13.1333C20.3452 13.423 20.6885 13.8359 20.8932 14.32C21.143 14.919 21.2612 15.5647 21.2399 16.2133C21.2609 16.8706 21.1428 17.5249 20.8932 18.1333C20.693 18.6273 20.3493 19.0499 19.9066 19.3467C19.4493 19.637 18.9145 19.7811 18.3732 19.76ZM18.3732 18.4267C18.5536 18.4222 18.7293 18.369 18.8819 18.2728C19.0345 18.1765 19.1582 18.0408 19.2399 17.88C19.488 17.3612 19.5982 16.7872 19.5599 16.2133C19.5672 15.8041 19.5178 15.3958 19.4132 15C19.3348 14.7344 19.193 14.4919 18.9999 14.2933C18.8287 14.1373 18.6049 14.0516 18.3732 14.0533C18.1969 14.0602 18.0254 14.1131 17.8757 14.2066C17.726 14.3001 17.6034 14.4312 17.5199 14.5867C17.2757 15.0925 17.1655 15.6527 17.1999 16.2133C17.1853 16.6317 17.2348 17.0499 17.3466 17.4533C17.4112 17.7324 17.5547 17.9869 17.7599 18.1867C17.9263 18.3419 18.1457 18.4277 18.3732 18.4267Z", fill: "white" }, void 0, !1, {
    fileName: "app/components/Icons/Rewind.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Icons/Rewind.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this), Rewind_default = Rewind;

// app/shared/Carousel/VideoPlayer/PlayControls/index.tsx
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime"), PlayControls = ({
  isPlaying,
  isEnded,
  handlePlayPause,
  handleReplay,
  handleSkip,
  commonProps = {
    onTouchStart: () => {
    },
    onTouchMove: () => {
    },
    onTouchEnd: () => {
    }
  }
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(Wrapper3, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(Controls, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
    Button2,
    {
      onClick: () => handleSkip(-10),
      ...commonProps,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(Rewind_default, {}, void 0, !1, {
        fileName: "app/shared/Carousel/VideoPlayer/PlayControls/index.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/shared/Carousel/VideoPlayer/PlayControls/index.tsx",
      lineNumber: 37,
      columnNumber: 7
    },
    this
  ),
  isEnded ? /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
    Button2,
    {
      onClick: handleReplay,
      ...commonProps,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(Replay_default, {}, void 0, !1, {
        fileName: "app/shared/Carousel/VideoPlayer/PlayControls/index.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/shared/Carousel/VideoPlayer/PlayControls/index.tsx",
      lineNumber: 45,
      columnNumber: 9
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
    Button2,
    {
      onClick: handlePlayPause,
      ...commonProps,
      children: isPlaying ? /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(Play_default, { width: 48, height: 48 }, void 0, !1, {
        fileName: "app/shared/Carousel/VideoPlayer/PlayControls/index.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(Pause_default, { width: 48, height: 48 }, void 0, !1, {
        fileName: "app/shared/Carousel/VideoPlayer/PlayControls/index.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/shared/Carousel/VideoPlayer/PlayControls/index.tsx",
      lineNumber: 52,
      columnNumber: 9
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
    Button2,
    {
      onClick: () => handleSkip(10),
      ...commonProps,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(Forward_default, {}, void 0, !1, {
        fileName: "app/shared/Carousel/VideoPlayer/PlayControls/index.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/shared/Carousel/VideoPlayer/PlayControls/index.tsx",
      lineNumber: 64,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/shared/Carousel/VideoPlayer/PlayControls/index.tsx",
  lineNumber: 36,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/shared/Carousel/VideoPlayer/PlayControls/index.tsx",
  lineNumber: 35,
  columnNumber: 3
}, this), PlayControls_default = PlayControls;

// app/shared/Carousel/VideoPlayer/ProgressControls/styled.ts
var import_styled37 = __toESM(require("@emotion/styled")), ProgressContainer = import_styled37.default.div`
  margin-bottom: 12px;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0px 12px;
  width: 100%;
  justify-content: space-around;
  height: 30px;
  gap: 10px;
`, ProgressBar = import_styled37.default.input`
  width: 100%;
  background-color: #acb2b7;
  outline: none;
  -webkit-appearance: none;
  border-radius: 8px;
  height: 7px;
  transition: background 450ms ease-in;
  background: ${({ sliderValue }) => `linear-gradient(to right, #ACB2B7 ${sliderValue}%, #fff 0%, #fff 100%)`};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: white;
  }
`, ControlsRow = import_styled37.default.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
`, Timer = import_styled37.default.span`
  color: white;
  font-size: 14px;
`, IconButton = import_styled37.default.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// app/components/Icons/Mute.tsx
var import_jsx_dev_runtime58 = require("react/jsx-dev-runtime"), Mute = () => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("path", { d: "M15.3586 9.99998L17.3252 8.02498C17.3842 7.96752 17.4311 7.89884 17.4631 7.82299C17.4951 7.74713 17.5115 7.66564 17.5115 7.58331C17.5115 7.50098 17.4951 7.41949 17.4631 7.34363C17.4311 7.26778 17.3842 7.1991 17.3252 7.14165C17.208 7.0246 17.0492 6.95886 16.8836 6.95886C16.7179 6.95886 16.5591 7.0246 16.4419 7.14165L14.4669 9.11665L12.5002 7.14165C12.3818 7.03125 12.225 6.97114 12.0631 6.974C11.9012 6.97686 11.7467 7.04245 11.6322 7.15696C11.5177 7.27147 11.4521 7.42596 11.4493 7.58788C11.4464 7.74979 11.5065 7.9065 11.6169 8.02498L13.5836 9.99998L11.6086 11.975C11.4915 12.0922 11.4258 12.251 11.4258 12.4166C11.4258 12.5823 11.4915 12.7411 11.6086 12.8583C11.6663 12.9167 11.7351 12.9631 11.8109 12.9945C11.8867 13.026 11.9681 13.042 12.0502 13.0416C12.1326 13.0435 12.2144 13.0282 12.2904 12.9966C12.3665 12.965 12.4351 12.9179 12.4919 12.8583L14.4669 10.8833L16.4419 12.8583C16.4996 12.9167 16.5684 12.9631 16.6442 12.9945C16.7201 13.026 16.8014 13.042 16.8836 13.0416C16.9659 13.0435 17.0477 13.0282 17.1237 12.9966C17.1998 12.965 17.2684 12.9179 17.3252 12.8583C17.3842 12.8009 17.4311 12.7322 17.4631 12.6563C17.4951 12.5805 17.5115 12.499 17.5115 12.4166C17.5115 12.3343 17.4951 12.2528 17.4631 12.177C17.4311 12.1011 17.3842 12.0324 17.3252 11.975L15.3586 9.99998Z", fill: "white" }, void 0, !1, {
    fileName: "app/components/Icons/Mute.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("path", { d: "M8.33333 5.34167V14.6667L6.09167 12.5L5.725 12.1417H3.74167V7.975H5.73333L6.1 7.6L8.33333 5.34167ZM8.74167 3.5C8.52186 3.50313 8.31219 3.59299 8.15833 3.75L5.21667 6.66667H3.33333C3.11232 6.66667 2.90036 6.75446 2.74408 6.91074C2.5878 7.06703 2.5 7.27899 2.5 7.5V12.5C2.5 12.721 2.5878 12.933 2.74408 13.0893C2.90036 13.2455 3.11232 13.3333 3.33333 13.3333H5.21667L8.15833 16.2167C8.31149 16.3686 8.51761 16.4552 8.73333 16.4583C8.95435 16.4583 9.16631 16.3705 9.32259 16.2143C9.47887 16.058 9.56667 15.846 9.56667 15.625V4.33333C9.56667 4.11232 9.47887 3.90036 9.32259 3.74408C9.16631 3.5878 8.95435 3.5 8.73333 3.5H8.74167Z", fill: "white" }, void 0, !1, {
    fileName: "app/components/Icons/Mute.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Icons/Mute.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this), Mute_default = Mute;

// app/components/Icons/Unmute.tsx
var import_jsx_dev_runtime59 = require("react/jsx-dev-runtime"), Unmute = () => /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
        "path",
        {
          d: "M13.9834 16.3083C13.8855 16.308 13.7892 16.2845 13.7022 16.2395C13.6153 16.1946 13.5403 16.1296 13.4834 16.05C13.4346 15.9838 13.3993 15.9087 13.3796 15.8289C13.3599 15.749 13.3561 15.6661 13.3685 15.5848C13.3809 15.5036 13.4092 15.4255 13.4518 15.3552C13.4944 15.2849 13.5504 15.2236 13.6167 15.175C14.4359 14.5834 15.103 13.8058 15.563 12.9062C16.023 12.0065 16.2629 11.0105 16.2629 10C16.2629 8.98954 16.023 7.99352 15.563 7.09385C15.103 6.19418 14.4359 5.41658 13.6167 4.825C13.5439 4.77961 13.4812 4.71969 13.4325 4.64899C13.3838 4.57828 13.3502 4.49831 13.3338 4.41405C13.3174 4.32979 13.3185 4.24306 13.3371 4.15925C13.3557 4.07545 13.3913 3.99637 13.4418 3.92695C13.4923 3.85753 13.5565 3.79925 13.6305 3.75575C13.7045 3.71225 13.7867 3.68446 13.8719 3.67411C13.9571 3.66377 14.0436 3.67108 14.1258 3.69561C14.2081 3.72014 14.2844 3.76135 14.3501 3.81667C15.3293 4.52324 16.1267 5.45226 16.6766 6.52726C17.2266 7.60226 17.5133 8.7925 17.5133 10C17.5133 11.2075 17.2266 12.3978 16.6766 13.4728C16.1267 14.5478 15.3293 15.4768 14.3501 16.1833C14.2453 16.265 14.1162 16.309 13.9834 16.3083Z",
          fill: "white"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/Unmute.tsx",
          lineNumber: 9,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
        "path",
        {
          d: "M11.9829 13.7583C11.8522 13.7513 11.727 13.7034 11.625 13.6214C11.523 13.5394 11.4493 13.4274 11.4143 13.3013C11.3794 13.1752 11.3849 13.0412 11.4301 12.9184C11.4752 12.7956 11.5579 12.69 11.6663 12.6167C12.0874 12.3225 12.4314 11.931 12.6689 11.4755C12.9064 11.0199 13.0304 10.5137 13.0304 10C13.0304 9.48625 12.9064 8.9801 12.6689 8.52454C12.4314 8.06899 12.0874 7.67749 11.6663 7.38333C11.599 7.33627 11.5416 7.27642 11.4974 7.20719C11.4532 7.13796 11.4231 7.06071 11.4088 6.97984C11.3945 6.89898 11.3963 6.81609 11.414 6.7359C11.4317 6.65571 11.465 6.5798 11.5121 6.5125C11.5591 6.44519 11.619 6.38782 11.6882 6.34365C11.7575 6.29948 11.8347 6.26937 11.9156 6.25506C11.9964 6.24074 12.0793 6.24249 12.1595 6.26021C12.2397 6.27793 12.3156 6.31127 12.3829 6.35833C12.9692 6.76769 13.4479 7.31253 13.7784 7.94654C14.109 8.58055 14.2816 9.28499 14.2816 10C14.2816 10.715 14.109 11.4194 13.7784 12.0535C13.4479 12.6875 12.9692 13.2323 12.3829 13.6417C12.2652 13.7218 12.1252 13.7626 11.9829 13.7583Z",
          fill: "white"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/Unmute.tsx",
          lineNumber: 13,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
        "path",
        {
          d: "M8.33333 5.34167V14.6667L6.09167 12.5L5.725 12.1417H3.74167V7.975H5.73333L6.1 7.6L8.33333 5.34167ZM8.74167 3.5C8.52186 3.50313 8.31219 3.59299 8.15833 3.75L5.21667 6.66667H3.33333C3.11232 6.66667 2.90036 6.75446 2.74408 6.91074C2.5878 7.06703 2.5 7.27899 2.5 7.5V12.5C2.5 12.721 2.5878 12.933 2.74408 13.0893C2.90036 13.2455 3.11232 13.3333 3.33333 13.3333H5.21667L8.15833 16.2167C8.31149 16.3686 8.51761 16.4552 8.73333 16.4583C8.95435 16.4583 9.16631 16.3705 9.32259 16.2143C9.47887 16.058 9.56667 15.846 9.56667 15.625V4.33333C9.56667 4.11232 9.47887 3.90036 9.32259 3.74408C9.16631 3.5878 8.95435 3.5 8.73333 3.5H8.74167Z",
          fill: "white"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/Unmute.tsx",
          lineNumber: 17,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Icons/Unmute.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), Unmute_default = Unmute;

// app/components/Icons/Expand.tsx
var import_jsx_dev_runtime60 = require("react/jsx-dev-runtime"), FullScreen = () => /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
      "path",
      {
        d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Icons/Expand.tsx",
        lineNumber: 11,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/Icons/Expand.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Expand_default = FullScreen;

// app/components/Icons/Collapse.tsx
var import_jsx_dev_runtime61 = require("react/jsx-dev-runtime");
function CollapseFullScreen() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("path", { d: "M17.0834 8.70835H11.9334C11.851 8.70947 11.7692 8.69407 11.6929 8.66306C11.6166 8.63205 11.5472 8.58605 11.489 8.52779C11.4307 8.46953 11.3847 8.40019 11.3537 8.32385C11.3227 8.24752 11.3073 8.16574 11.3084 8.08335V2.91669C11.3106 2.7516 11.3771 2.59388 11.4939 2.47713C11.6106 2.36039 11.7683 2.29385 11.9334 2.29169C12.0992 2.29169 12.2581 2.35753 12.3753 2.47475C12.4926 2.59196 12.5584 2.75093 12.5584 2.91669V7.45002H17.0834C17.1658 7.4489 17.2476 7.4643 17.3239 7.49531C17.4002 7.52632 17.4696 7.57232 17.5278 7.63058C17.5861 7.68884 17.6321 7.75819 17.6631 7.83452C17.6941 7.91086 17.7095 7.99263 17.7084 8.07502C17.7084 8.24156 17.6428 8.4014 17.5259 8.51993C17.4089 8.63847 17.2499 8.70616 17.0834 8.70835Z", fill: "white" }, void 0, !1, {
      fileName: "app/components/Icons/Collapse.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("path", { d: "M2.91664 8.70835C2.78334 8.67305 2.66546 8.59465 2.58136 8.48537C2.49726 8.3761 2.45166 8.24208 2.45166 8.10419C2.45166 7.96629 2.49726 7.83227 2.58136 7.723C2.66546 7.61372 2.78334 7.53533 2.91664 7.50002H7.44164V2.91669C7.44164 2.75093 7.50748 2.59196 7.62469 2.47475C7.7419 2.35753 7.90088 2.29169 8.06664 2.29169C8.23173 2.29385 8.38945 2.36039 8.50619 2.47713C8.62294 2.59388 8.68948 2.7516 8.69164 2.91669V8.07502C8.69276 8.15741 8.67736 8.23918 8.64634 8.31552C8.61533 8.39185 8.56934 8.4612 8.51108 8.51946C8.45281 8.57772 8.38347 8.62372 8.30713 8.65473C8.2308 8.68574 8.14902 8.70114 8.06664 8.70002L2.91664 8.70835Z", fill: "white" }, void 0, !1, {
      fileName: "app/components/Icons/Collapse.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("path", { d: "M8.07508 17.7083C7.90932 17.7083 7.75035 17.6425 7.63314 17.5253C7.51593 17.408 7.45008 17.2491 7.45008 17.0833V12.55H2.91675C2.75099 12.55 2.59202 12.4841 2.47481 12.3669C2.3576 12.2497 2.29175 12.0907 2.29175 11.925C2.29175 11.7592 2.3576 11.6003 2.47481 11.483C2.59202 11.3658 2.75099 11.3 2.91675 11.3H8.06675C8.14913 11.2989 8.23091 11.3143 8.30724 11.3453C8.38358 11.3763 8.45293 11.4223 8.51119 11.4805C8.56945 11.5388 8.61544 11.6082 8.64646 11.6845C8.67747 11.7608 8.69287 11.8426 8.69175 11.925V17.0833C8.68959 17.2484 8.62305 17.4061 8.5063 17.5229C8.38956 17.6396 8.23184 17.7062 8.06675 17.7083H8.07508Z", fill: "white" }, void 0, !1, {
      fileName: "app/components/Icons/Collapse.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("path", { d: "M11.9251 17.7083C11.76 17.7062 11.6023 17.6396 11.4856 17.5229C11.3688 17.4061 11.3023 17.2484 11.3001 17.0833V11.925C11.299 11.8426 11.3144 11.7608 11.3454 11.6845C11.3764 11.6082 11.4224 11.5388 11.4807 11.4805C11.5389 11.4223 11.6083 11.3763 11.6846 11.3453C11.7609 11.3143 11.8427 11.2989 11.9251 11.3H17.0834C17.2485 11.3021 17.4062 11.3687 17.523 11.4854C17.6397 11.6022 17.7063 11.7599 17.7084 11.925C17.7096 12.0074 17.6942 12.0891 17.6631 12.1655C17.6321 12.2418 17.5861 12.3112 17.5279 12.3694C17.4696 12.4277 17.4003 12.4737 17.3239 12.5047C17.2476 12.5357 17.1658 12.5511 17.0834 12.55H12.5584V17.0833C12.5584 17.1661 12.542 17.2481 12.5101 17.3244C12.4782 17.4008 12.4314 17.4701 12.3724 17.5282C12.3135 17.5864 12.2436 17.6322 12.1668 17.6632C12.09 17.6941 12.0079 17.7094 11.9251 17.7083Z", fill: "white" }, void 0, !1, {
      fileName: "app/components/Icons/Collapse.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Icons/Collapse.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var Collapse_default = CollapseFullScreen;

// app/shared/Carousel/VideoPlayer/ProgressControls/index.tsx
var import_jsx_dev_runtime62 = require("react/jsx-dev-runtime"), ProgressControls = ({
  progress,
  duration,
  currentTime,
  isMuted,
  isFullscreen,
  handleProgressChange,
  handleMuteToggle,
  handleFullScreen,
  commonProps
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(ProgressContainer, { ...commonProps, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
    ProgressBar,
    {
      type: "range",
      min: "0",
      max: duration,
      step: 1,
      value: progress,
      sliderValue: progress,
      onChange: handleProgressChange
    },
    void 0,
    !1,
    {
      fileName: "app/shared/Carousel/VideoPlayer/ProgressControls/index.tsx",
      lineNumber: 42,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(ControlsRow, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Timer, { children: currentTime }, void 0, !1, {
      fileName: "app/shared/Carousel/VideoPlayer/ProgressControls/index.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(IconButton, { onClick: handleMuteToggle, children: isMuted ? /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Unmute_default, {}, void 0, !1, {
      fileName: "app/shared/Carousel/VideoPlayer/ProgressControls/index.tsx",
      lineNumber: 54,
      columnNumber: 20
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Mute_default, {}, void 0, !1, {
      fileName: "app/shared/Carousel/VideoPlayer/ProgressControls/index.tsx",
      lineNumber: 54,
      columnNumber: 33
    }, this) }, void 0, !1, {
      fileName: "app/shared/Carousel/VideoPlayer/ProgressControls/index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(IconButton, { onClick: handleFullScreen, children: isFullscreen ? /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Collapse_default, {}, void 0, !1, {
      fileName: "app/shared/Carousel/VideoPlayer/ProgressControls/index.tsx",
      lineNumber: 57,
      columnNumber: 25
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Expand_default, {}, void 0, !1, {
      fileName: "app/shared/Carousel/VideoPlayer/ProgressControls/index.tsx",
      lineNumber: 57,
      columnNumber: 40
    }, this) }, void 0, !1, {
      fileName: "app/shared/Carousel/VideoPlayer/ProgressControls/index.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/shared/Carousel/VideoPlayer/ProgressControls/index.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/shared/Carousel/VideoPlayer/ProgressControls/index.tsx",
  lineNumber: 41,
  columnNumber: 3
}, this), ProgressControls_default = ProgressControls;

// app/shared/Carousel/VideoPlayer/styled.ts
var import_styled39 = __toESM(require("@emotion/styled")), Container3 = import_styled39.default.div`
  position: relative;
  background: black;
`, ControlsContainer = import_styled39.default.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: ${({ isVisible }) => isVisible ? "block" : "none"};
  transition: opacity 0.3s ease;
  width: 100%;
  height: 100%;
`;

// app/shared/Carousel/VideoPlayer/Video/styled.ts
var import_styled40 = __toESM(require("@emotion/styled")), VideoWrapper = import_styled40.default.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// app/shared/Carousel/VideoPlayer/Video/index.tsx
var import_jsx_dev_runtime63 = require("react/jsx-dev-runtime"), Video = ({ videoRef, url, width = 360, height = 360, id, isActive, onVideoClick }) => /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(VideoWrapper, { onClick: onVideoClick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(
  "video",
  {
    ref: videoRef,
    width,
    height,
    playsInline: !0,
    preload: "metadata",
    src: url,
    id,
    autoPlay: isActive,
    muted: !0
  },
  void 0,
  !1,
  {
    fileName: "app/shared/Carousel/VideoPlayer/Video/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/shared/Carousel/VideoPlayer/Video/index.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this), Video_default = Video;

// app/shared/Carousel/hooks/useVideoControls.ts
var import_react21 = require("react"), useVideoControls = () => {
  let videoRef = (0, import_react21.useRef)(null), [isPlaying, setIsPlaying] = (0, import_react21.useState)(!1), [isEnded, setIsEnded] = (0, import_react21.useState)(!1), [progress, setProgress] = (0, import_react21.useState)(0), [currentTime, setCurrentTime] = (0, import_react21.useState)("00:00"), [duration, setDuration] = (0, import_react21.useState)("00:00"), formatTime = (seconds) => {
    if (Number.isNaN(seconds) || seconds === void 0)
      return "00:00";
    let minutes = Math.floor(seconds / 60), remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }, updateVideoStatus = (0, import_react21.useCallback)(() => {
    let video = videoRef.current;
    if (!video)
      return;
    let currentTimeValue = video.currentTime ?? 0, durationValue = video.duration ?? 0;
    setIsPlaying(!video.paused), setIsEnded(video.ended), setProgress(durationValue ? currentTimeValue / durationValue * 100 : 0), setCurrentTime(formatTime(currentTimeValue)), setDuration(formatTime(durationValue));
  }, []), play = (0, import_react21.useCallback)(() => {
    let video = videoRef.current;
    video && (video.play().catch((error) => {
      console.error("Error playing video:", error);
    }), updateVideoStatus());
  }, [updateVideoStatus]), pause = (0, import_react21.useCallback)(() => {
    let video = videoRef.current;
    video && (video.pause(), updateVideoStatus());
  }, [updateVideoStatus]), handlePlayPause = (0, import_react21.useCallback)(() => {
    let video = videoRef.current;
    video && (video.paused ? play() : pause());
  }, [play, pause]), handleSkip = (0, import_react21.useCallback)(
    (seconds) => {
      let video = videoRef.current;
      video && (video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + seconds)), updateVideoStatus());
    },
    [updateVideoStatus]
  ), handleReplay = (0, import_react21.useCallback)(() => {
    let video = videoRef.current;
    video && (video.currentTime = 0, video.play().catch((error) => {
      console.error("Error replaying video:", error);
    }), updateVideoStatus());
  }, [updateVideoStatus]), handleTimeUpdate = (0, import_react21.useCallback)(
    (time) => {
      let video = videoRef.current;
      video && (video.currentTime = Math.max(0, Math.min(video.duration, time)), updateVideoStatus());
    },
    [updateVideoStatus]
  );
  return (0, import_react21.useEffect)(() => {
    let interval = setInterval(updateVideoStatus, 250);
    return () => clearInterval(interval);
  }, [updateVideoStatus]), {
    videoRef,
    isPlaying,
    isEnded,
    progress,
    currentTime,
    duration,
    handlePlayPause,
    play,
    pause,
    handleSkip,
    handleReplay,
    handleTimeUpdate,
    updateVideoStatus
  };
};

// app/constants/mediaType.ts
var MEDIA_TYPE = {
  IMAGE: "image",
  VIDEO: "video"
};

// app/shared/Carousel/VideoPlayer/index.tsx
var import_jsx_dev_runtime64 = require("react/jsx-dev-runtime"), VideoPlayer = ({
  url,
  width,
  height,
  id,
  handleFullScreen,
  view,
  isActive
}) => {
  let {
    videoRef,
    isPlaying,
    isEnded,
    currentTime,
    duration,
    progress,
    handlePlayPause,
    handleSkip,
    handleReplay,
    handleTimeUpdate,
    pause
  } = useVideoControls(), [showControls, setShowControls] = (0, import_react22.useState)(!1), [isMuted, setIsMuted] = (0, import_react22.useState)(!1), isFullscreen = view === CAROUSEL_VIEW.FULL_SCREEN, handleVideoClick = () => {
    setShowControls((prev) => !prev);
  }, handleControlsTouch = (e) => {
    e.stopPropagation();
  }, handleProgressChange = (e) => {
    if (!videoRef.current)
      return;
    let time = parseFloat(e.target.value) * videoRef.current.duration / 100;
    handleTimeUpdate(time);
  }, handleMuteToggle = () => {
    videoRef.current && (videoRef.current.muted = !videoRef.current.muted, setIsMuted(!isMuted));
  }, commonProps = {
    onTouchStart: handleControlsTouch,
    onTouchMove: handleControlsTouch,
    onTouchEnd: handleControlsTouch
  };
  return (0, import_react22.useEffect)(() => {
    if (showControls) {
      let timer = setTimeout(() => {
        setShowControls(!1);
      }, 2e3);
      return () => clearTimeout(timer);
    }
  }, [showControls]), (0, import_react22.useEffect)(() => {
    isActive || pause();
  }, [isActive, pause]), /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(Container3, { onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
      Video_default,
      {
        videoRef,
        url,
        width,
        height,
        id,
        isActive,
        onVideoClick: handleVideoClick
      },
      void 0,
      !1,
      {
        fileName: "app/shared/Carousel/VideoPlayer/index.tsx",
        lineNumber: 91,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(ControlsContainer, { isVisible: showControls || !isPlaying, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
        PlayControls_default,
        {
          isPlaying,
          isEnded,
          handlePlayPause,
          handleReplay,
          handleSkip,
          commonProps
        },
        void 0,
        !1,
        {
          fileName: "app/shared/Carousel/VideoPlayer/index.tsx",
          lineNumber: 102,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
        ProgressControls_default,
        {
          progress,
          duration,
          currentTime,
          isMuted,
          isFullscreen,
          handleProgressChange,
          handleMuteToggle,
          handleFullScreen: () => {
            pause(), handleFullScreen(id, view, MEDIA_TYPE.VIDEO);
          },
          commonProps
        },
        void 0,
        !1,
        {
          fileName: "app/shared/Carousel/VideoPlayer/index.tsx",
          lineNumber: 111,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/shared/Carousel/VideoPlayer/index.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/shared/Carousel/VideoPlayer/index.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}, VideoPlayer_default = VideoPlayer;

// app/shared/Carousel/utils/video.ts
var YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/", queryStringObjectFromUrl = (url = "") => {
  let queryString = url == null ? void 0 : url.split("?")[1], params = new URLSearchParams(queryString), result = {};
  return params == null || params.forEach((val, key) => {
    result[key] = val;
  }), result;
}, embeddedVideoUrl = (url) => {
  let queryStringObject = queryStringObjectFromUrl(url), videoId = queryStringObject == null ? void 0 : queryStringObject.v;
  return `${YOUTUBE_EMBED_URL}${videoId}`;
};

// app/shared/Carousel/VideoPlayer/YoutubePlayer/index.tsx
var import_jsx_dev_runtime65 = require("react/jsx-dev-runtime"), YouTubePlayer = ({
  url,
  width = 360,
  height = 360
}) => {
  let embedUrl = embeddedVideoUrl(url);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
    "iframe",
    {
      width,
      height,
      src: embedUrl,
      allowFullScreen: !0,
      style: { border: 0 }
    },
    void 0,
    !1,
    {
      fileName: "app/shared/Carousel/VideoPlayer/YoutubePlayer/index.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
}, YoutubePlayer_default = YouTubePlayer;

// app/utils/imageUtil/constants.ts
var FORMAT = /([/]tr[:])(.*)(,cm[-]pad[_]resize)/;
var PAD_RESIZE = "cm-pad_resize", GIF = "gif";
var CROP_STRATEGY = {
  padResize: "padResize"
};

// app/utils/imageUtil/helper.ts
var isValidString2 = (str) => typeof str == "string" && !!str.length, getRawUrl = (url) => {
  if (!isValidString2(url))
    return "";
  let noQueryUrl = url.split("?")[0];
  return noQueryUrl == null ? void 0 : noQueryUrl.replace(FORMAT, "");
}, getAbsoluteSize = (cWidth, cHeight, isAbsoluteSize) => {
  if (isAbsoluteSize)
    return {
      width: cWidth,
      height: cHeight
    };
  if (!cWidth)
    return {
      width: null,
      height: cHeight
    };
  let size;
  switch (!0) {
    case cWidth <= 50:
      size = 50;
      break;
    case cWidth <= 150:
      size = 150;
      break;
    case cWidth <= 200:
      size = 200;
      break;
    case cWidth <= 300:
      size = 300;
      break;
    case cWidth <= 500:
      size = 500;
      break;
    case cWidth <= 600:
      size = 600;
      break;
    default:
      size = cWidth <= 1200 ? cWidth : 1200;
  }
  return {
    width: size,
    height: cHeight && size
  };
}, isValidMimeType = (url) => {
  var _a2;
  if (!isValidString2(url))
    return !1;
  let splittedUrl = url.split(".");
  return ((_a2 = splittedUrl[splittedUrl.length - 1]) == null ? void 0 : _a2.toLowerCase()) !== GIF;
}, getCroppingStrategy = (cropStrategy) => {
  switch (cropStrategy) {
    case CROP_STRATEGY.padResize:
      return PAD_RESIZE;
    default:
      return "";
  }
}, getImgQueryString = ({
  cropStrategy,
  width,
  height,
  trim,
  scale = 1
}) => {
  let query = "?tr=", separator = "";
  return cropStrategy && (query += getCroppingStrategy(cropStrategy), separator = ","), width && (query += `${separator}w-${width * scale}`, separator = ","), height && (query += `${separator}h-${height * scale}`, separator = ","), !width && !height && (query += `${separator}w-${500 * scale},h-${500 * scale}`, separator = ","), trim && (query += `${separator}t-${trim}`), query;
};

// app/utils/imageUtil/index.ts
var scaleImage = ({
  url,
  width: cWidth,
  height: cHeight,
  trim,
  cropStrategy,
  isAbsoluteSize
}) => {
  let newUrl = getRawUrl(url);
  if (!isValidMimeType(newUrl))
    return {
      src: newUrl,
      srcSet: ""
    };
  let { width, height } = getAbsoluteSize(cWidth, cHeight, isAbsoluteSize), src = `${newUrl}${getImgQueryString({
    cropStrategy,
    width,
    height,
    trim
  })}`, srcSet = `${src} 1x, ${newUrl}${getImgQueryString({
    cropStrategy,
    width,
    height,
    trim,
    scale: 1.5
  })} ${1.5}x`;
  return {
    src,
    srcSet
  };
};

// app/shared/Carousel/Slides/styled.ts
var import_styled43 = __toESM(require("@emotion/styled")), SlideStyle = import_styled43.default.img`
  vertical-align: middle;
`, SlideContainerStyle = import_styled43.default.div`
  align-items: center;
  flex: 0 0 auto;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  transition: transform 1s ease;
`;

// app/shared/Carousel/Slides/index.tsx
var import_jsx_dev_runtime66 = require("@emotion/react/jsx-dev-runtime");
function Slides({ media, handleFullScreen, view, activeSlide }) {
  if (!isValidArrayLength(media))
    return null;
  let renderSlideContent = (mediaItem, index2) => {
    if (mediaItem.mediaType === MEDIA_FORMAT.IMAGE) {
      let { src, srcSet } = scaleImage({ url: mediaItem == null ? void 0 : mediaItem.url, width: 500 });
      return /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(
        "img",
        {
          src,
          alt: `Slide ${index2 + 1}`,
          css: SlideStyle,
          className: "slide-wrapper",
          loading: index2 === 0 ? "eager" : "lazy",
          height: 360,
          width: 360,
          srcSet,
          decoding: "async"
        },
        void 0,
        !1,
        {
          fileName: "app/shared/Carousel/Slides/index.tsx",
          lineNumber: 26,
          columnNumber: 9
        },
        this
      );
    }
    if (mediaItem.mediaType === MEDIA_FORMAT.YOUTUBE_VIDEO)
      return /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(
        YoutubePlayer_default,
        {
          url: mediaItem == null ? void 0 : mediaItem.url,
          width: "100%"
        },
        void 0,
        !1,
        {
          fileName: "app/shared/Carousel/Slides/index.tsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      );
    if (mediaItem.mediaType === MEDIA_FORMAT.VIDEO) {
      let isActive = activeSlide === index2;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(
        VideoPlayer_default,
        {
          url: mediaItem.url,
          id: mediaItem.id,
          view,
          handleFullScreen,
          isActive
        },
        void 0,
        !1,
        {
          fileName: "app/shared/Carousel/Slides/index.tsx",
          lineNumber: 52,
          columnNumber: 9
        },
        this
      );
    }
    return null;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(import_jsx_dev_runtime66.Fragment, { children: media == null ? void 0 : media.map((mediaItem, index2) => {
    let content = renderSlideContent(mediaItem, index2), isCurrentVideo = isCurrentMediaVideo(mediaItem);
    return content && /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(
      SlideContainerStyle,
      {
        onClick: () => {
          !isCurrentVideo && handleFullScreen(mediaItem.id, view);
        },
        children: content
      },
      index2,
      !1,
      {
        fileName: "app/shared/Carousel/Slides/index.tsx",
        lineNumber: 72,
        columnNumber: 13
      },
      this
    );
  }) }, void 0, !1, {
    fileName: "app/shared/Carousel/Slides/index.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
var Slides_default = Slides;

// app/shared/Carousel/styled.ts
var import_styled45 = __toESM(require("@emotion/styled")), import_react23 = require("@emotion/react");
var CarouselStyle = import_styled45.default.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`, CarouselCover = import_styled45.default.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  flex: 1;
  min-height: 0;
  justify-content: center;
  align-items: center;
`, SlideContainer = import_styled45.default.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center; /* Center vertically */
`, SlidesStyle = import_styled45.default.div`
  display: flex;
  transform: translateX(-${(props) => props.activeSlide * 100}%);
  transition: transform 0.3s ease;
  width: 100%;
`, DotsWrapper = import_styled45.default.div`
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}};
  display: flex;
  justify-content: center;
  align-items: center;
`, ViewSimilarWrapper = import_styled45.default.div`
  position: absolute;
  left: 10px;
  bottom: 0px;
  display: flex;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.16);
}};
  background: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface;
}};
`, ViewSimilarText = import_styled45.default.span`
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
  text-align: center;
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.buttonSmall;
}};
  font-style: normal;
`, carouselActionsWrapper = import_react23.css`
  padding: 14px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// app/hooks/PD/useProduct.tsx
var import_react24 = require("react"), ProductContext = (0, import_react24.createContext)({
  recommendationsRef: null
}), useProductContext = () => (0, import_react24.useContext)(ProductContext);

// app/shared/Carousel/index.tsx
var import_jsx_dev_runtime67 = require("@emotion/react/jsx-dev-runtime"), Carousel = ({
  view = CAROUSEL_VIEW.DEFAULT,
  onSlideChange,
  handleFullScreen,
  media,
  activeSlide,
  setActiveSlide
}) => {
  let slidesLength = media == null ? void 0 : media.length, startX = (0, import_react25.useRef)(0), endX = (0, import_react25.useRef)(0), isSwiping = (0, import_react25.useRef)(!1), { recommendationsRef } = useProductContext();
  if (!isValidArrayLength(media))
    return null;
  let handleTouchStart = (e) => {
    var _a2, _b;
    startX.current = (_a2 = e == null ? void 0 : e.touches[0]) == null ? void 0 : _a2.clientX, endX.current = (_b = e == null ? void 0 : e.touches[0]) == null ? void 0 : _b.clientX, isSwiping.current = !1;
  }, handleTouchMove = (e) => {
    var _a2;
    endX.current = (_a2 = e == null ? void 0 : e.touches[0]) == null ? void 0 : _a2.clientX, isSwiping.current = !0;
  }, videoIndexes = getVideoIndexes(media), handleTouchEnd = () => {
    if (isSwiping != null && isSwiping.current) {
      let swipeDistance = (startX == null ? void 0 : startX.current) - (endX == null ? void 0 : endX.current);
      Math.abs(swipeDistance) >= MIN_SWIPE_DISTANCE && (swipeDistance > 0 ? handleSlideChange(onSwipeLeft(activeSlide, slidesLength)) : handleSlideChange(onSwipeRight(activeSlide, slidesLength)));
    }
    startX.current = 0, endX.current = 0, isSwiping.current = !1;
  }, handleSlideChange = (index2) => {
    setActiveSlide(index2), onSlideChange == null || onSlideChange(index2);
  }, handleDotClick = (index2) => {
    handleSlideChange(index2);
  }, handleViewSimilar = (e) => {
    var _a2;
    e.stopPropagation(), (_a2 = recommendationsRef == null ? void 0 : recommendationsRef.current) == null || _a2.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(CarouselCover, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
      CarouselStyle,
      {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(SlideContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(SlidesStyle, { activeSlide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
          Slides_default,
          {
            media,
            handleFullScreen,
            view,
            activeSlide
          },
          void 0,
          !1,
          {
            fileName: "app/shared/Carousel/index.tsx",
            lineNumber: 101,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/shared/Carousel/index.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/shared/Carousel/index.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/shared/Carousel/index.tsx",
        lineNumber: 94,
        columnNumber: 7
      },
      this
    ),
    view === CAROUSEL_VIEW.DEFAULT && /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(DotsWrapper, { onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(ViewSimilarWrapper, { onClick: handleViewSimilar, children: /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(ViewSimilarText, { children: VIEW_SIMILAR }, void 0, !1, {
        fileName: "app/shared/Carousel/index.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/shared/Carousel/index.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
        Dots_default,
        {
          count: slidesLength,
          activeIndex: activeSlide,
          onClick: handleDotClick,
          videoIndexes
        },
        void 0,
        !1,
        {
          fileName: "app/shared/Carousel/index.tsx",
          lineNumber: 115,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/shared/Carousel/index.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/shared/Carousel/index.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}, Carousel_default = Carousel;

// app/components/PD/FullScreenCarousel/Header/constants.ts
var ToggleOptions = {
  IMAGES: "Images",
  VIDEO: "Video"
}, imageStyles = {
  selected: {
    backgroundColor: "#F3F4F5",
    color: "#000",
    border: "1px solid #000",
    borderRadius: "20px"
  },
  unselected: {
    color: "#fff",
    borderRadius: "20px"
  }
}, videoStyles = {
  selected: {
    background: "#111314EB",
    color: "#fff",
    border: "1px solid #111314EB",
    borderRadius: "20px"
  },
  unselected: {
    text: "#fff"
  }
}, toggleOptions = [
  {
    id: MEDIA_TYPE.IMAGE,
    label: ToggleOptions.IMAGES,
    colors: imageStyles
  },
  {
    id: MEDIA_TYPE.VIDEO,
    label: ToggleOptions.VIDEO,
    colors: videoStyles
  }
];

// app/components/PD/FullScreenCarousel/Header/styled.ts
var import_styled47 = __toESM(require("@emotion/styled")), HeaderContainer = import_styled47.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  width: 100%;
  margin: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0;
}} auto;
  min-height: 48px;
`, CloseIconWrapper = import_styled47.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  position: absolute;
  right: 16px;
  svg {
    width: 16px;
    height: 16px;
  }
  ${({ isVideo }) => isVideo && `
    svg path {
      fill: white;
    }
  `}
`, VideoOption = import_styled47.default.div`
  svg path {
    fill: white;
  }
`;

// app/components/Icons/CloseIcon.tsx
var import_jsx_dev_runtime68 = require("react/jsx-dev-runtime"), CloseIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(
      "path",
      {
        d: "M20.6907 3.30935C20.5934 3.21133 20.4778 3.13352 20.3503 3.08043C20.2229 3.02734 20.0862 3 19.9481 3C19.8101 3 19.6734 3.02734 19.5459 3.08043C19.4185 3.13352 19.3028 3.21133 19.2056 3.30935L12 10.5254L4.79439 3.30935C4.69688 3.21184 4.58112 3.13449 4.45372 3.08172C4.32632 3.02895 4.18977 3.00178 4.05187 3.00178C3.91397 3.00178 3.77742 3.02895 3.65002 3.08172C3.52262 3.13449 3.40686 3.21184 3.30935 3.30935C3.11242 3.50628 3.00178 3.77337 3.00178 4.05187C3.00178 4.33037 3.11242 4.59746 3.30935 4.79439L10.5254 12L3.30935 19.2056C3.21133 19.3028 3.13352 19.4185 3.08043 19.5459C3.02734 19.6734 3 19.8101 3 19.9481C3 20.0862 3.02734 20.2229 3.08043 20.3503C3.13352 20.4778 3.21133 20.5934 3.30935 20.6907C3.40657 20.7887 3.52224 20.8665 3.64968 20.9196C3.77712 20.9727 3.91381 21 4.05187 21C4.18993 21 4.32662 20.9727 4.45406 20.9196C4.5815 20.8665 4.69717 20.7887 4.79439 20.6907L12 13.4746L19.2056 20.6907C19.3028 20.7887 19.4185 20.8665 19.5459 20.9196C19.6734 20.9727 19.8101 21 19.9481 21C20.0862 21 20.2229 20.9727 20.3503 20.9196C20.4778 20.8665 20.5934 20.7887 20.6907 20.6907C20.7887 20.5934 20.8665 20.4778 20.9196 20.3503C20.9727 20.2229 21 20.0862 21 19.9481C21 19.8101 20.9727 19.6734 20.9196 19.5459C20.8665 19.4185 20.7887 19.3028 20.6907 19.2056L13.4746 12L20.6907 4.79439C20.7887 4.69717 20.8665 4.5815 20.9196 4.45406C20.9727 4.32662 21 4.18993 21 4.05187C21 3.91381 20.9727 3.77712 20.9196 3.64968C20.8665 3.52224 20.7887 3.40657 20.6907 3.30935Z",
        fill: "#001325",
        fillOpacity: "0.92"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Icons/CloseIcon.tsx",
        lineNumber: 11,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/Icons/CloseIcon.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), CloseIcon_default = CloseIcon;

// app/shared/ToggleButton/constants.ts
var TOGGLER_VARIANT = {
  LIGHT: "light",
  DARK: "dark"
};

// app/shared/ToggleButton/styled.ts
var import_styled48 = __toESM(require("@emotion/styled"));
var ToggleContainer = import_styled48.default.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  background: ${({ isDark, theme: theme2 }) => {
  var _a2, _b;
  return isDark ? (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10 : (_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.surface;
}};
  margin: auto;
  border-radius: 20px;
`, ToggleSection = import_styled48.default.div`
  display: flex;
  border-radius: 1.25rem;
  border: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.16);
}};
  background: ${({ isDark, theme: theme2 }) => {
  var _a2, _b;
  return isDark ? (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse30 : (_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.surface;
}};
`, ToggleVariant = import_styled48.default.div`
  padding: ${({ theme: theme2 }) => {
  var _a2, _b;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40} ${(_b = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _b.spacing80}`;
}};
  cursor: pointer;
  transition: all 0.3s ease;
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodySmall;
}};
  font-style: normal;
  ${({ option, isActive }) => isActive ? option.colors.selected : option.colors.unselected}
`, ActiveToggleOption = import_styled48.default.div`
  background: #fff;
  color: #000;
`, ActiveToggleDark = import_styled48.default.div`
  background: #000;
  color: #fff;
`;

// app/shared/ToggleButton/index.tsx
var import_jsx_dev_runtime69 = require("@emotion/react/jsx-dev-runtime"), ToggleButton = ({
  options,
  activeId,
  onChange,
  variant = TOGGLER_VARIANT.LIGHT
}) => {
  let isDark = variant === TOGGLER_VARIANT.DARK;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(ToggleContainer, { isDark, children: /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(ToggleSection, { isDark, children: options == null ? void 0 : options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
    ToggleVariant,
    {
      option,
      isActive: (option == null ? void 0 : option.id) === activeId,
      onClick: () => onChange(option == null ? void 0 : option.id),
      children: option == null ? void 0 : option.label
    },
    option == null ? void 0 : option.id,
    !1,
    {
      fileName: "app/shared/ToggleButton/index.tsx",
      lineNumber: 20,
      columnNumber: 11
    },
    this
  )) }, void 0, !1, {
    fileName: "app/shared/ToggleButton/index.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/shared/ToggleButton/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}, ToggleButton_default = ToggleButton;

// app/components/PD/FullScreenCarousel/Header/index.tsx
var import_jsx_dev_runtime70 = require("@emotion/react/jsx-dev-runtime"), Header3 = ({
  onClose,
  mediaType,
  onMediaTypeChange,
  showToggle
}) => {
  let isVideo = mediaType === MEDIA_TYPE.VIDEO;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(HeaderContainer, { children: [
    showToggle && /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
      ToggleButton_default,
      {
        options: toggleOptions,
        activeId: mediaType,
        onChange: onMediaTypeChange,
        variant: isVideo ? TOGGLER_VARIANT.DARK : TOGGLER_VARIANT.LIGHT
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/FullScreenCarousel/Header/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
      CloseIconWrapper,
      {
        isVideo,
        onClick: onClose,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(CloseIcon_default, {}, void 0, !1, {
          fileName: "app/components/PD/FullScreenCarousel/Header/index.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/FullScreenCarousel/Header/index.tsx",
        lineNumber: 38,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/PD/FullScreenCarousel/Header/index.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}, Header_default2 = Header3;

// app/components/PD/FullScreenCarousel/styled.ts
var import_react26 = require("@emotion/react"), import_styled51 = __toESM(require("@emotion/styled"));
var FullScreenWrapper = import_styled51.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ mediaType, theme: theme2 }) => {
  var _a2, _b;
  return mediaType === MEDIA_TYPE.VIDEO ? (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10 : (_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.surface;
}};
  transition: background-color 0.3s ease;
  z-index: 3;
  display: flex;
  flex-direction: column;
`, headerContainer = import_react26.css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
`, closeButton = import_react26.css`
  background: none;
  border: none;
  padding: 8px;
  margin-left: auto; // Push to right
`, closeIcon = import_react26.css`
  width: 16px;
  height: 16px;
`, toggleLeft = import_react26.css`
  display: flex;
  width: 4.0625rem;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`, toggleRight = import_react26.css`
  display: flex;
  width: 7.875rem;
  padding: 0.25rem 0.9375rem 0.25rem 4.5rem;
  justify-content: flex-end;
  align-items: center;
`, thumbnailsWrapper = import_react26.css`
  padding: 16px;
  overflow-x: auto;
  display: flex;
  gap: 8px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
`, thumbnailContainer = import_react26.css`
  border-radius: 0.4375rem;
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  margin: 0.25rem;
`, thumbnail = import_react26.css`
  width: 62px;
  height: 62px;
  object-fit: cover;
  border-radius: 0.4375rem;
`, activeThumbnailContainer = import_react26.css`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid #111314;
`, ActionsWrapper = import_styled51.default.div`
  padding: 16px;
  margin-top: auto;
  background: ${({ mediaType, theme: theme2 }) => {
  var _a2, _b;
  return mediaType === MEDIA_TYPE.VIDEO ? (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10 : (_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.surface;
}};
`;

// app/components/PD/FullScreenCarousel/Thumbnails/index.tsx
var import_react27 = require("react");

// app/shared/ImageTile/styled.ts
var import_styled52 = __toESM(require("@emotion/styled"));
var ImageTileWrapper = import_styled52.default.div`
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}};
  overflow-x: auto;
  display: flex;
  gap: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
`, ImageTileContainer = import_styled52.default.div`
  border-radius: 0.4375rem;
  background: ${({ currentSlide, theme: theme2 }) => {
  var _a2, _b;
  return currentSlide ? hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse30, 0.2) : (_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.surface;
}};
  ${({ currentSlide, theme: theme2 }) => {
  var _a2;
  return currentSlide && `border: 1px solid ${(_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10}`;
}}
`, ImageTileStyle = import_styled52.default.img`
  width: 62px;
  height: 62px;
  object-fit: cover;
  border-radius: 0.4375rem;
`, ActiveTileContainer = import_styled52.default.div`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid #111314;
`;

// app/shared/ImageTile/index.tsx
var import_jsx_dev_runtime71 = require("@emotion/react/jsx-dev-runtime"), ImageTile = ({
  images,
  currentSlide,
  onSlideChange,
  wrapperRef,
  imageRefs,
  width = 100
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(ImageTileWrapper, { ref: wrapperRef, children: images == null ? void 0 : images.map((image, index2) => {
  let { src, srcSet } = scaleImage({ url: image, width });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
    ImageTileContainer,
    {
      currentSlide: index2 === currentSlide,
      onClick: () => onSlideChange(index2),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
        ImageTileStyle,
        {
          ref: (el) => imageRefs == null ? void 0 : imageRefs(el, index2),
          src,
          alt: `Tile ${index2 + 1}`,
          srcSet
        },
        void 0,
        !1,
        {
          fileName: "app/shared/ImageTile/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        },
        this
      )
    },
    index2,
    !1,
    {
      fileName: "app/shared/ImageTile/index.tsx",
      lineNumber: 28,
      columnNumber: 9
    },
    this
  );
}) }, void 0, !1, {
  fileName: "app/shared/ImageTile/index.tsx",
  lineNumber: 24,
  columnNumber: 3
}, this), ImageTile_default = ImageTile;

// app/components/PD/FullScreenCarousel/constants/index.ts
var THUMBNAIL_IMAGE_WIDTH = 200;

// app/components/PD/FullScreenCarousel/utils.ts
var scrollThumbnailIntoView = (container, element, direction) => {
  let containerRect = container == null ? void 0 : container.getBoundingClientRect(), thumbnailRect = element == null ? void 0 : element.getBoundingClientRect();
  if (direction === "right" /* RIGHT */ && (thumbnailRect == null ? void 0 : thumbnailRect.right) > (containerRect == null ? void 0 : containerRect.right)) {
    let overflowRight = thumbnailRect.right - containerRect.right;
    container.scrollLeft += overflowRight + 16;
  } else if (direction === "left" /* LEFT */ && thumbnailRect.left < (containerRect == null ? void 0 : containerRect.left)) {
    let overflowLeft = containerRect.left - thumbnailRect.left;
    container.scrollLeft -= overflowLeft + 16;
  }
};

// app/components/PD/FullScreenCarousel/Thumbnails/index.tsx
var import_jsx_dev_runtime72 = require("@emotion/react/jsx-dev-runtime"), Thumbnails = (props) => {
  let { images, currentSlide } = props || {}, wrapperRef = (0, import_react27.useRef)(null), thumbnailRefs = (0, import_react27.useRef)([]), prevSlide = (0, import_react27.useRef)(0), isInitialLoad = (0, import_react27.useRef)(!0);
  if (!isValidArrayLength(images))
    return null;
  let setImageRef = (element, index2) => {
    thumbnailRefs != null && thumbnailRefs.current && (thumbnailRefs.current[index2] = element);
  };
  return (0, import_react27.useEffect)(() => {
    thumbnailRefs != null && thumbnailRefs.current && (thumbnailRefs.current = images == null ? void 0 : images.map(
      (_, i) => (thumbnailRefs == null ? void 0 : thumbnailRefs.current[i]) ?? null
    ));
  }, [images]), (0, import_react27.useEffect)(() => {
    var _a2;
    if (isInitialLoad.current && (wrapperRef != null && wrapperRef.current) && ((_a2 = thumbnailRefs == null ? void 0 : thumbnailRefs.current) != null && _a2[currentSlide])) {
      let container = wrapperRef.current, currentThumbnail = thumbnailRefs.current[currentSlide];
      scrollThumbnailIntoView(container, currentThumbnail, "right" /* RIGHT */), isInitialLoad.current = !1;
    }
  }, [currentSlide, thumbnailRefs.current]), (0, import_react27.useEffect)(() => {
    var _a2, _b;
    if (!(wrapperRef != null && wrapperRef.current) || !((_a2 = thumbnailRefs == null ? void 0 : thumbnailRefs.current) != null && _a2[currentSlide]))
      return;
    let container = wrapperRef == null ? void 0 : wrapperRef.current, currentThumbnail = (_b = thumbnailRefs == null ? void 0 : thumbnailRefs.current) == null ? void 0 : _b[currentSlide];
    if (currentThumbnail) {
      if (typeof (prevSlide == null ? void 0 : prevSlide.current) == "number") {
        let direction = currentSlide > prevSlide.current ? "right" /* RIGHT */ : "left" /* LEFT */;
        scrollThumbnailIntoView(container, currentThumbnail, direction);
      }
      prevSlide.current = currentSlide;
    }
  }, [currentSlide]), /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(
    ImageTile_default,
    {
      ...props,
      wrapperRef,
      imageRefs: setImageRef,
      width: THUMBNAIL_IMAGE_WIDTH
    },
    void 0,
    !1,
    {
      fileName: "app/components/PD/FullScreenCarousel/Thumbnails/index.tsx",
      lineNumber: 65,
      columnNumber: 5
    },
    this
  );
}, Thumbnails_default = Thumbnails;

// app/shared/NotifyMe/index.tsx
var import_react29 = require("react");

// app/shared/NotifyMe/constants.ts
var NOTIFY_ME_MESSAGES = {
  SUCCESS: "You will be notified when this product is back in stock",
  FAILURE: "Something went wrong. Please try again.",
  DESCRIPTION: "Enter your e-mail & we will notify you once it returns in stock.",
  PLACEHOLDER: "Enter an email",
  BUTTON_TEXT: "Notify me",
  EMAIL_ERROR: "Please enter valid email"
}, TOAST_COLORS = {
  SUCCESS: "#4CAF50",
  ERROR: "#f44336"
};

// app/shared/NotifyMe/styled.ts
var import_styled54 = __toESM(require("@emotion/styled"));
var Wrapper4 = import_styled54.default.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing50;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing50;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing50;
}};
  background: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface;
}};
  border-top: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.16);
}};
`, Description = import_styled54.default.p`
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodySmall;
}};
  margin-bottom: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing10;
}};
`, ErrorText2 = import_styled54.default.p`
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.negative;
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyXSmall;
}};
  margin-top: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing10;
}};
`, FormContainer = import_styled54.default.div`
  display: flex;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60;
}};
  border: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
  position: relative;
  width: 100%;
  align-items: center;
`, Input = import_styled54.default.input`
  width: 80%;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  padding-left: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0;
}};
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyMedium;
}};
  }
`, Button3 = import_styled54.default.button`
  padding: 8px;
  background-color: white;
  color: #111314;
  border: none;
  position: absolute;
  right: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.00625rem;
  &:disabled {
    cursor: not-allowed;
  }
`;

// app/shared/NotifyMe/utils.ts
var getNotifyMeFormData = ({
  email,
  productId,
  productName,
  productPrice
}) => {
  let formData = new FormData();
  return formData.append("email", email), formData.append("productId", productId), productName && formData.append("variantName", productName), productPrice && formData.append("offerPrice", productPrice.toString()), formData;
}, submitNotifyMeAction = (fetcher, formData) => {
  fetcher.submit(formData, {
    method: API_METHODS.POST,
    action: ACTION_ROUTES.notifyMe,
    preventScrollReset: !0
  });
}, isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// app/shared/Button/styles.ts
var import_styled55 = __toESM(require("@emotion/styled")), getCustomStyles = (props = {}) => `
  ${props.padding ? `padding: ${props.padding};` : ""}
  ${props.fontSize ? `font-size: ${props.fontSize};` : ""}
  ${props.fontWeight ? `font-weight: ${props.fontWeight};` : ""}
  ${props.lineHeight ? `line-height: ${props.lineHeight};` : ""}
  ${props.color ? `color: ${props.color};` : ""}
  ${props.background ? `background: ${props.background};` : ""}
  ${props.border ? `border: ${props.border};` : ""}
  ${props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
  ${props.width ? `width: ${props.width};` : ""}
  ${props.height ? `height: ${props.height};` : ""}
  ${props.position ? `position: ${props.position};` : ""}
  ${props.margin ? `margin: ${props.margin};` : ""}
`, BaseButton = import_styled55.default.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20;
}};
  cursor: pointer;
  border: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  &:disabled {
    cursor: not-allowed;
  }
`, SmallButton = (0, import_styled55.default)(BaseButton)`
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.buttonSmall;
}};
`, MediumButton = (0, import_styled55.default)(BaseButton)`
  padding: ${({ theme: theme2 }) => {
  var _a2, _b, _c, _d;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60} ${(_b = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _b.spacing40} ${(_c = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _c.spacing60} ${(_d = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _d.spacing80}`;
}};

  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.titleSmall;
}};
`, LargeButton = (0, import_styled55.default)(BaseButton)`
  padding: 12px 24px;
  font-size: 1.125rem;
  line-height: 1.75rem;
`, PrimaryButton = (0, import_styled55.default)(BaseButton)`
  background: #000;
  color: #fff;
  border: none;
`, NotifyButton = (0, import_styled55.default)(BaseButton)`
  background-color: white;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10;
}};
  border: none;
  position: absolute;
  right: 4px;
  font-weight: 600;
  letter-spacing: 0.00625rem;
`, CustomButton = (0, import_styled55.default)(BaseButton)`
  ${({ customStyle }) => getCustomStyles(customStyle)}
`;

// app/shared/Button/constants.ts
var BUTTON_VARIANTS = {
  PRIMARY: "PRIMARY",
  NOTIFY: "NOTIFY",
  SECONDARY: "SECONDARY"
}, BUTTON_SIZES = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE"
};

// app/shared/Button/index.tsx
var import_jsx_dev_runtime73 = require("react/jsx-dev-runtime"), Button4 = ({
  variant = BUTTON_VARIANTS.PRIMARY,
  size = BUTTON_SIZES.MEDIUM,
  customStyles,
  children,
  ...props
}) => {
  let getButtonComponent = () => {
    switch (variant) {
      case BUTTON_VARIANTS.NOTIFY:
        return NotifyButton;
      case BUTTON_VARIANTS.PRIMARY:
      default:
        return PrimaryButton;
    }
  }, getSizeComponent = (ButtonComponent2) => {
    switch (size) {
      case BUTTON_SIZES.SMALL:
        return SmallButton.withComponent(ButtonComponent2);
      case BUTTON_SIZES.LARGE:
        return LargeButton.withComponent(ButtonComponent2);
      case BUTTON_SIZES.MEDIUM:
      default:
        return MediumButton.withComponent(ButtonComponent2);
    }
  }, CustomBtn = (Button5) => CustomButton.withComponent(Button5), ButtonComponent = getSizeComponent(getButtonComponent()), StyledButton = CustomBtn(ButtonComponent);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(
    StyledButton,
    {
      customStyle: customStyles,
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/shared/Button/index.tsx",
      lineNumber: 48,
      columnNumber: 5
    },
    this
  );
}, Button_default = Button4;

// app/shared/Toast/index.tsx
var import_styled56 = __toESM(require("@emotion/styled")), import_react28 = require("react");

// app/components/Icons/YesTick.tsx
var import_jsx_dev_runtime74 = require("react/jsx-dev-runtime");
function YesTick() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "23",
      viewBox: "0 0 612 792",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("title", { children: "Yes tick icon" }, void 0, !1, {
          fileName: "app/components/Icons/YesTick.tsx",
          lineNumber: 11,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
          "path",
          {
            fill: "#ffffff",
            d: "M562 396c0-141.4-114.6-256-256-256S50 254.6 50 396s114.6 256 256 256 256-114.6 256-256zm-60.3-99.7l-241 241-17.2 17.2-133.2-133.2 58.8-58.8 74.5 74.5L443 237.6l58.7 58.7z"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Icons/YesTick.tsx",
            lineNumber: 12,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Icons/YesTick.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}
var YesTick_default = YesTick;

// app/shared/Toast/index.tsx
var import_jsx_dev_runtime75 = require("@emotion/react/jsx-dev-runtime"), ToastContainer = import_styled56.default.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ background }) => background || "#ff6b00"};
  color: #fff;
  font-weight: 600;
  padding: 16px;
  margin-bottom: ${({ isVisible }) => isVisible ? "0" : "-80px"};
  transition: all 0.3s;
  z-index: 2;
  &.visible {
    margin-bottom: 0;
  }
`, MessageContainer = import_styled56.default.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`, Toast = ({
  message,
  background,
  duration = 3e3,
  onDismiss,
  autoHide = !0
  // default to true for backward compatibility
}) => {
  let [isVisible, setIsVisible] = (0, import_react28.useState)(!0);
  return (0, import_react28.useEffect)(() => {
    if (autoHide) {
      let timer = setTimeout(() => {
        setIsVisible(!1), onDismiss == null || onDismiss();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onDismiss, autoHide]), /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(
    ToastContainer,
    {
      background,
      isVisible,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(MessageContainer, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(YesTick_default, {}, void 0, !1, {
          fileName: "app/shared/Toast/index.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("span", { children: message }, void 0, !1, {
          fileName: "app/shared/Toast/index.tsx",
          lineNumber: 74,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/shared/Toast/index.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/shared/Toast/index.tsx",
      lineNumber: 68,
      columnNumber: 5
    },
    this
  );
};

// app/shared/NotifyMe/index.tsx
var import_jsx_dev_runtime76 = require("@emotion/react/jsx-dev-runtime");
function NotifyMe({
  productId,
  productName,
  productPrice
}) {
  let [email, setEmail] = (0, import_react29.useState)(""), [showToast, setShowToast] = (0, import_react29.useState)(!1), [toastMessage, setToastMessage] = (0, import_react29.useState)(""), [isSuccess, setIsSuccess] = (0, import_react29.useState)(!0), [emailError, setEmailError] = (0, import_react29.useState)(""), { fetcher, isLoading } = useFetcherHandler({
    onSuccess: () => {
      setToastMessage(NOTIFY_ME_MESSAGES.SUCCESS), setIsSuccess(!0), setEmail(""), setShowToast(!0);
    },
    onError: () => {
      setToastMessage(NOTIFY_ME_MESSAGES.FAILURE), setIsSuccess(!1), setShowToast(!0);
    },
    successHandler: (data) => data || !1
  }), validateAndSubmit = () => {
    if (!email) {
      setEmailError(NOTIFY_ME_MESSAGES.EMAIL_ERROR);
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError(NOTIFY_ME_MESSAGES.EMAIL_ERROR);
      return;
    }
    setEmailError("");
    let formData = getNotifyMeFormData({
      email,
      productId,
      productName,
      productPrice
    });
    submitNotifyMeAction(fetcher, formData);
  }, handleEmailChange = (e) => {
    setEmail(e.target.value), setEmailError("");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(import_jsx_dev_runtime76.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(Wrapper4, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(Description, { children: NOTIFY_ME_MESSAGES.DESCRIPTION }, void 0, !1, {
        fileName: "app/shared/NotifyMe/index.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(FormContainer, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(
          Input,
          {
            type: "email",
            placeholder: NOTIFY_ME_MESSAGES.PLACEHOLDER,
            value: email,
            onChange: handleEmailChange
          },
          void 0,
          !1,
          {
            fileName: "app/shared/NotifyMe/index.tsx",
            lineNumber: 85,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(
          Button_default,
          {
            variant: BUTTON_VARIANTS.NOTIFY,
            onClick: validateAndSubmit,
            size: BUTTON_SIZES.SMALL,
            disabled: isLoading,
            children: NOTIFY_ME_MESSAGES.BUTTON_TEXT
          },
          void 0,
          !1,
          {
            fileName: "app/shared/NotifyMe/index.tsx",
            lineNumber: 91,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/shared/NotifyMe/index.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      emailError && /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(ErrorText2, { children: emailError }, void 0, !1, {
        fileName: "app/shared/NotifyMe/index.tsx",
        lineNumber: 100,
        columnNumber: 24
      }, this)
    ] }, void 0, !0, {
      fileName: "app/shared/NotifyMe/index.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    showToast && /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(
      Toast,
      {
        message: toastMessage,
        background: isSuccess ? TOAST_COLORS.SUCCESS : TOAST_COLORS.ERROR,
        onDismiss: () => setShowToast(!1)
      },
      void 0,
      !1,
      {
        fileName: "app/shared/NotifyMe/index.tsx",
        lineNumber: 103,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/shared/NotifyMe/index.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

// app/shared/ProductCTA/index.tsx
var import_react34 = require("react");

// app/shared/ProductCTA/AddToBagButton.tsx
var import_react30 = require("react"), import_react31 = require("@emotion/react");

// app/components/Icons/ShoppingBag.tsx
var import_jsx_dev_runtime77 = require("react/jsx-dev-runtime");
function ShoppingBag2({
  height = 24,
  width = 25,
  fill = "white"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)(
    "svg",
    {
      width,
      height,
      viewBox: "0 0 25 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)(
        "path",
        {
          d: "M21.4474 6.97354H16.9211V6.65608C17.0263 4.1164 15.0263 2 12.5 2C9.97368 2.10582 8.07895 4.1164 8.07895 6.65608V6.97354H3.55263C2.92105 6.97354 2.5 7.39683 2.5 8.03175V16.709C2.5 19.672 4.81579 22 7.76316 22H17.2368C20.1842 22 22.5 19.672 22.5 16.709V8.03175C22.5 7.50265 22.0789 6.97354 21.4474 6.97354ZM9.6579 6.65608C9.6579 5.06878 10.9211 3.69312 12.5 3.5873C14.0789 3.69312 15.3421 5.06878 15.3421 6.65608V6.97354H9.6579V6.65608ZM20.9211 16.8148C20.9211 18.8254 19.2368 20.5185 17.2368 20.5185H7.76316C5.76316 20.5185 4.07895 18.8254 4.07895 16.8148V8.56085H8.07895V10.6772C7.86842 10.8889 7.76316 11.2063 7.76316 11.418C7.76316 12.0529 8.28947 12.4762 8.81579 12.4762C9.34211 12.4762 9.86842 11.9471 9.86842 11.418C9.86842 11.1005 9.76316 10.8889 9.55263 10.6772V8.56085H15.2368V10.5714C15.0263 10.7831 14.9211 11.1005 14.9211 11.418C14.9211 12.0529 15.3421 12.582 15.9737 12.582C16.6053 12.582 17.1316 12.1587 17.1316 11.5238C17.1316 11.2063 17.0263 10.9947 16.8158 10.7831V8.66667H20.9211V16.8148Z",
          fill
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/ShoppingBag.tsx",
          lineNumber: 19,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Icons/ShoppingBag.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}
var ShoppingBag_default2 = ShoppingBag2;

// app/components/PD/constants/index.ts
var ItemAddedToBag = "Item Added to Bag", ViewBag = "View Bag";

// app/shared/ProductCTA/constants.ts
var ButtonState = {
  DEFAULT: "Add to Bag",
  LOADING: "Adding...",
  SUCCESS: "Go to bag"
}, TOAST_DEFAULT_VALUE = { show: !1, message: "" }, SNACKBAR_DEFAULT_VALUE = {
  show: !1,
  message: "",
  actionText: ""
};

// app/shared/ProductCTA/styled.ts
var import_styled58 = __toESM(require("@emotion/styled"));
var Container4 = import_styled58.default.div`
  position: sticky;
  bottom: 0px;
  left: 0;
  right: 0;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}};
  background: white;
  display: flex;
  gap: 16px;
  align-items: center;

  ${({ view, theme: theme2 }) => {
  var _a2;
  return view === MEDIA_TYPE.VIDEO && `
      background-color: ${(_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10};
    `;
}}
`, WishlistButtonStyled = import_styled58.default.button`
  width: 50px;
  border-radius: 8px;
  border: 1px
    ${({ theme: theme2, view }) => {
  var _a2, _b;
  return view === MEDIA_TYPE.VIDEO ? `solid ${(_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface}` : `solid ${hexToRgba((_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.textPrimary, 0.16)}`;
}};
  background: ${({ view, theme: theme2 }) => {
  var _a2, _b;
  return view === MEDIA_TYPE.VIDEO ? `${(_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10} !important` : `${(_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.surface}`;
}};

  color: ${({ view, theme: theme2 }) => {
  var _a2, _b;
  return view === MEDIA_TYPE.VIDEO ? `${(_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface}` : `${(_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.surfaceInverse10}`;
}};
  display: flex;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60;
}};
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ view, theme: theme2 }) => {
  var _a2, _b;
  return view === MEDIA_TYPE.VIDEO && `
      background-color: ${(_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10};
      color: ${(_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.surface} ;
    `;
}}
`, getButtonStyles = (view, theme2) => {
  var _a2, _b, _c, _d;
  return {
    width: "100%",
    background: view === MEDIA_TYPE.VIDEO ? (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface : (_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.surfaceInverse10,
    color: view === MEDIA_TYPE.VIDEO ? (_c = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _c.surfaceInverse10 : (_d = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _d.surface
  };
};

// app/constants/platform.ts
var DEVICE_TYPE = {
  MOBILE: "MSITE"
}, PLATFORM2 = {
  beauty: "nykaa"
}, STORES = {
  nykaa: "nykaa"
};

// app/constants/sources.ts
var SOURCES = {
  PD: "pdp_page"
};

// app/shared/ProductCTA/utils.ts
var getAddToCartParams = (productId) => ({
  deviceType: DEVICE_TYPE.MOBILE,
  domain: PLATFORM2.beauty,
  items: [{ productId, quantity: 1 }],
  pro: !1,
  trackingParam: {
    site_navigation: "",
    site_sub_navigation: "",
    nykaa_store: STORES.nykaa
  },
  originSource: SOURCES.PD,
  pincode: ""
}), submitAddToCartAction = (fetcher, params) => {
  fetcher.submit(
    { ...params },
    {
      method: API_METHODS.POST,
      action: ACTION_ROUTES.addToCart,
      encType: "application/json",
      preventScrollReset: !0
    }
  );
}, handleUpdateCartCount = (count) => {
  let appParams = {
    device: getDevice(),
    callbackFunctionName: webViewCallbacks.updateCartCount,
    callbackParams: { count }
  };
  webViewCallbackhandler(appParams);
};

// app/shared/ProductCTA/AddToBagButton.tsx
var import_jsx_dev_runtime78 = require("@emotion/react/jsx-dev-runtime");
function AddToBagButton({
  productId,
  onStatusChange,
  view,
  styleOverride,
  iconSize
}) {
  let { user, setUser } = useAuth() || {}, { cartItemsCount } = user || {}, [buttonState, setButtonState] = (0, import_react30.useState)(ButtonState.DEFAULT), theme2 = (0, import_react31.useTheme)(), { fetcher, isLoading } = useFetcherHandler({
    onSuccess: (data) => {
      onStatusChange(ItemAddedToBag, ViewBag), setButtonState(ButtonState.SUCCESS);
      let counter = cartItemsCount ? cartItemsCount + 1 : 1;
      setUser({ ...user, cartItemsCount: counter }), updateCartCountInStorage(counter), isWeb() || handleUpdateCartCount(counter);
    },
    onError: (error) => {
      setButtonState(ButtonState.DEFAULT), onStatusChange(error);
    },
    successHandler: (data) => data.success || !1
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
    Button_default,
    {
      onClick: () => {
        if (buttonState === ButtonState.SUCCESS) {
          redirectToShoppingBag();
          return;
        }
        setButtonState(ButtonState.LOADING);
        let params = getAddToCartParams(productId);
        submitAddToCartAction(fetcher, params);
      },
      disabled: isLoading,
      customStyles: { ...getButtonStyles(view, theme2), ...styleOverride },
      children: [
        buttonState,
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
          ShoppingBag_default2,
          {
            height: iconSize,
            width: iconSize,
            fill: view === MEDIA_TYPE.VIDEO ? "black" : "#fff"
          },
          void 0,
          !1,
          {
            fileName: "app/shared/ProductCTA/AddToBagButton.tsx",
            lineNumber: 77,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/shared/ProductCTA/AddToBagButton.tsx",
      lineNumber: 71,
      columnNumber: 5
    },
    this
  );
}

// app/shared/Snackbar/index.tsx
var import_styled60 = __toESM(require("@emotion/styled")), import_react32 = require("react"), import_jsx_dev_runtime79 = require("@emotion/react/jsx-dev-runtime"), SnackbarStyles = import_styled60.default.div`
  display: flex;
  padding: 0.75rem;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.5rem;
  background: #1b1e21;
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px);
  max-width: 600px;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  padding: 16px;
`, MessageStyles = import_styled60.default.span`
  color: #fff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
`, ActionStyles = import_styled60.default.div`
  color: #f061a7;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: 0.00625rem;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
`, Snackbar = ({
  onActionClick,
  onDismiss,
  duration = 3e3,
  autoHide = !0,
  text,
  actionText
}) => ((0, import_react32.useEffect)(() => {
  if (autoHide) {
    let timer = setTimeout(() => {
      onDismiss();
    }, duration);
    return () => clearTimeout(timer);
  }
}, [autoHide, duration, onDismiss]), /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(SnackbarStyles, { children: [
  text && /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(MessageStyles, { children: text }, void 0, !1, {
    fileName: "app/shared/Snackbar/index.tsx",
    lineNumber: 74,
    columnNumber: 16
  }, this),
  actionText && /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(ActionStyles, { onClick: onActionClick, children: actionText }, void 0, !1, {
    fileName: "app/shared/Snackbar/index.tsx",
    lineNumber: 76,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/shared/Snackbar/index.tsx",
  lineNumber: 73,
  columnNumber: 5
}, this)), Snackbar_default = Snackbar;

// app/shared/ProductCTA/Notifications.tsx
var import_jsx_dev_runtime80 = require("react/jsx-dev-runtime");
function Notifications({
  toast,
  snackbar,
  onToastDismiss,
  onSnackbarDismiss,
  onSnackbarAction
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)(import_jsx_dev_runtime80.Fragment, { children: [
    (toast == null ? void 0 : toast.show) && /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)(
      Toast,
      {
        message: toast == null ? void 0 : toast.message,
        background: "black",
        onDismiss: onToastDismiss
      },
      void 0,
      !1,
      {
        fileName: "app/shared/ProductCTA/Notifications.tsx",
        lineNumber: 24,
        columnNumber: 9
      },
      this
    ),
    (snackbar == null ? void 0 : snackbar.show) && /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)(
      Snackbar_default,
      {
        onActionClick: onSnackbarAction,
        onDismiss: onSnackbarDismiss,
        duration: 3e3,
        autoHide: !0,
        text: snackbar == null ? void 0 : snackbar.message,
        actionText: snackbar == null ? void 0 : snackbar.actionText
      },
      void 0,
      !1,
      {
        fileName: "app/shared/ProductCTA/Notifications.tsx",
        lineNumber: 31,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/shared/ProductCTA/Notifications.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/shared/WishlistButton/index.tsx
var import_react33 = require("react");

// app/components/Icons/HeartFilled.tsx
var import_styled61 = __toESM(require("@emotion/styled"));
var import_jsx_dev_runtime81 = require("react/jsx-dev-runtime"), Path = import_styled61.default.path`
  fill: ${({ view, theme: theme2 }) => {
  var _a2, _b;
  return view === MEDIA_TYPE.VIDEO ? (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface : (_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.surfaceInverse10;
}};
`;
function HeartFilled({ view }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(
        Path,
        {
          view,
          d: "M16.8638 3.82041C16.0437 3.1719 15.0142 2.85357 13.9747 2.92708C12.9352 3.00059 11.9598 3.4607 11.2373 4.2183L9.99279 5.50923L8.74829 4.25367C8.03039 3.49084 7.0573 3.02415 6.01769 2.9441C4.97809 2.86404 3.94606 3.17634 3.12173 3.82041C2.68926 4.18521 2.33688 4.63691 2.08704 5.14673C1.8372 5.65655 1.69539 6.21329 1.67066 6.78146C1.64592 7.34964 1.7388 7.91678 1.94337 8.44673C2.14793 8.97669 2.45971 9.45782 2.85881 9.85947L9.99279 17.0834L17.1092 9.90368C17.5166 9.50273 17.8358 9.01981 18.0461 8.48629C18.2565 7.95277 18.3532 7.38058 18.3301 6.80688C18.3069 6.23319 18.1644 5.67082 17.9118 5.15631C17.6592 4.64179 17.3022 4.18664 16.8638 3.82041Z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/HeartFilled.tsx",
          lineNumber: 25,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Icons/HeartFilled.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}
var HeartFilled_default = HeartFilled;

// app/components/Icons/HeartPlus.tsx
var import_styled62 = __toESM(require("@emotion/styled"));
var import_jsx_dev_runtime82 = require("react/jsx-dev-runtime"), Path2 = import_styled62.default.path`
  fill: ${({ view, theme: theme2 }) => {
  var _a2, _b;
  return view === MEDIA_TYPE.VIDEO ? (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface : (_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.surfaceInverse10;
}};
`, HeartPlus = ({ width = 24, height = 24, view }) => /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)(
        Path2,
        {
          view,
          d: "M11.236 20L10.7088 19.5061L3.40816 12.2658C2.93322 11.7856 2.56345 11.213 2.32209 10.5841C2.08074 9.95511 1.97302 9.28336 2.00572 8.61106C2.02807 7.93784 2.19282 7.27683 2.48928 6.67099C2.78574 6.06516 3.20726 5.52806 3.72645 5.09461C4.70809 4.32587 5.94186 3.94582 7.18926 4.02792C8.43666 4.11002 9.60913 4.64844 10.48 5.53911L11.236 6.28981L11.9521 5.54899C12.8225 4.64399 14.0026 4.09542 15.2599 4.01133C16.5173 3.92723 17.7607 4.31369 18.7455 5.09461C19.3795 5.61903 19.869 6.29471 20.1682 7.05832C20.4674 7.82194 20.5666 8.6485 20.4563 9.46054C20.4299 9.65047 20.3286 9.82221 20.1747 9.93799C20.0208 10.0538 19.8269 10.1041 19.6357 10.0779C19.4444 10.0517 19.2715 9.95112 19.1549 9.7983C19.0383 9.64547 18.9877 9.45292 19.014 9.26299C19.0889 8.69472 19.0178 8.11689 18.8074 7.58324C18.597 7.04959 18.254 6.57747 17.8105 6.21079C17.1101 5.67163 16.2333 5.40955 15.3496 5.47523C14.4659 5.54092 13.6381 5.92969 13.0263 6.56638L11.236 8.34436L9.45556 6.57626C8.84378 5.93957 8.016 5.55079 7.13229 5.48511C6.24859 5.41943 5.37175 5.68151 4.67135 6.22067C4.30134 6.51984 3.99992 6.89401 3.78722 7.31816C3.57453 7.74232 3.45547 8.20668 3.438 8.6802C3.41812 9.15159 3.49617 9.622 3.66729 10.0621C3.83841 10.5023 4.09893 10.9027 4.43264 11.2385L11.236 17.9948L13.454 15.8316C13.5898 15.7081 13.7672 15.6395 13.9513 15.6395C14.1355 15.6395 14.3129 15.7081 14.4486 15.8316C14.5752 15.9654 14.6457 16.142 14.6457 16.3255C14.6457 16.509 14.5752 16.6857 14.4486 16.8194L11.3454 19.9111L11.236 20Z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/HeartPlus.tsx",
          lineNumber: 27,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)(
        Path2,
        {
          view,
          d: "M18.5051 18C18.3079 18 18.1187 17.9227 17.9783 17.7848C17.8379 17.647 17.7577 17.4596 17.7551 17.2633V15.2449H15.8427C15.7369 15.2572 15.6296 15.2471 15.528 15.2153C15.4264 15.1835 15.3327 15.1306 15.2531 15.0603C15.1735 14.9899 15.1098 14.9036 15.0662 14.807C15.0226 14.7105 15 14.6058 15 14.5C15 14.3942 15.0226 14.2895 15.0662 14.193C15.1098 14.0964 15.1735 14.0101 15.2531 13.9397C15.3327 13.8694 15.4264 13.8165 15.528 13.7847C15.6296 13.7529 15.7369 13.7428 15.8427 13.7551H17.7551V11.8335C17.7428 11.7288 17.7529 11.6228 17.7847 11.5222C17.8165 11.4217 17.8694 11.3291 17.9397 11.2503C18.0101 11.1716 18.0964 11.1086 18.193 11.0655C18.2895 11.0223 18.3942 11 18.5 11C18.6058 11 18.7105 11.0223 18.807 11.0655C18.9036 11.1086 18.9899 11.1716 19.0603 11.2503C19.1306 11.3291 19.1835 11.4217 19.2153 11.5222C19.2471 11.6228 19.2572 11.7288 19.2449 11.8335V13.7551H21.3325C21.5164 13.7764 21.6859 13.8641 21.809 14.0014C21.932 14.1387 22 14.3162 22 14.5C22 14.6838 21.932 14.8613 21.809 14.9986C21.6859 15.1359 21.5164 15.2236 21.3325 15.2449H19.2449V17.2633C19.2449 17.4586 19.167 17.646 19.0282 17.7842C18.8895 17.9224 18.7013 18 18.5051 18Z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/HeartPlus.tsx",
          lineNumber: 31,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Icons/HeartPlus.tsx",
    lineNumber: 20,
    columnNumber: 3
  },
  this
), HeartPlus_default = HeartPlus;

// app/shared/WishlistButton/styled.ts
var import_styled63 = __toESM(require("@emotion/styled")), WishlistText = import_styled63.default.div`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyLarge;
}};
  letter-spacing: 0;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10;
}};
  padding: 0 1.5rem;
  padding: ${({ theme: theme2 }) => {
  var _a2, _b;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0} ${(_b = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _b.spacing120}`;
}};
`, fullWidth = {
  width: "100%"
};

// app/shared/WishlistButton/constants.ts
var PRODUCT_ADD_IN_WISHLIST = "Product has been added to wishlist", PRODUCT_REMOVED_IN_WISHLIST = "Product has been removed from wishlist", WISHLIST_INTENT = {
  ADD: "add",
  REMOVE: "remove"
}, ADDED_TO_WISHLIST = "Added to Wishlist", ADD_TO_WISHLIST2 = "Add to Wishlist";

// app/shared/WishlistButton/utils.ts
var getWishlistFormData = (productId, isInWishlist, userDetails) => {
  let apiData = {};
  return apiData && (apiData.product = productId), userDetails != null && userDetails.formKey && (apiData.formKey = userDetails.formKey), apiData.intent = isInWishlist ? WISHLIST_INTENT.REMOVE : WISHLIST_INTENT.ADD, apiData;
}, submitWishlistAction = (fetcher, apiData) => {
  fetcher.submit(apiData, {
    method: API_METHODS.POST,
    action: ACTION_ROUTES.wishlist,
    encType: "application/json",
    preventScrollReset: !0
  });
}, getWishlistMessage = (isInWishlist) => isInWishlist ? PRODUCT_REMOVED_IN_WISHLIST : PRODUCT_ADD_IN_WISHLIST;

// app/shared/WishlistButton/index.tsx
var import_jsx_dev_runtime83 = require("@emotion/react/jsx-dev-runtime");
function WishlistButton({
  productId,
  userDetails,
  onStatusChange,
  styleOverride = {},
  view,
  onlyWishlistButton
}) {
  let [isInWishlist, setIsInWishlist] = (0, import_react33.useState)(!1), isLoggedIn = useIsLoggedIn(), { fetcher, isLoading } = useFetcherHandler({
    onSuccess: (data) => {
      setIsInWishlist(!isInWishlist);
      let message = getWishlistMessage(isInWishlist);
      onStatusChange(message);
    },
    onError: (error) => {
      onStatusChange(error);
    },
    successHandler: (data) => !data.error || !1
  });
  (0, import_react33.useEffect)(() => {
    var _a2;
    userDetails != null && userDetails.wishlist && productId && setIsInWishlist((_a2 = userDetails == null ? void 0 : userDetails.wishlist) == null ? void 0 : _a2.includes(productId));
  }, [userDetails == null ? void 0 : userDetails.wishlist, productId]);
  let handleClick = () => {
    if (!isLoggedIn) {
      redirectAuthPage();
      return;
    }
    let apiData = getWishlistFormData(productId, isInWishlist, userDetails);
    submitWishlistAction(fetcher, apiData);
  };
  return onlyWishlistButton && (styleOverride = { ...styleOverride, ...fullWidth }), /* @__PURE__ */ (0, import_jsx_dev_runtime83.jsxDEV)(
    WishlistButtonStyled,
    {
      view,
      style: styleOverride,
      onClick: handleClick,
      disabled: isLoading,
      children: [
        onlyWishlistButton && /* @__PURE__ */ (0, import_jsx_dev_runtime83.jsxDEV)(WishlistText, { children: isInWishlist ? ADDED_TO_WISHLIST : ADD_TO_WISHLIST2 }, void 0, !1, {
          fileName: "app/shared/WishlistButton/index.tsx",
          lineNumber: 77,
          columnNumber: 9
        }, this),
        isInWishlist ? /* @__PURE__ */ (0, import_jsx_dev_runtime83.jsxDEV)(HeartFilled_default, { view }, void 0, !1, {
          fileName: "app/shared/WishlistButton/index.tsx",
          lineNumber: 81,
          columnNumber: 23
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime83.jsxDEV)(HeartPlus_default, { view }, void 0, !1, {
          fileName: "app/shared/WishlistButton/index.tsx",
          lineNumber: 81,
          columnNumber: 53
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/shared/WishlistButton/index.tsx",
      lineNumber: 70,
      columnNumber: 5
    },
    this
  );
}

// app/shared/ProductCTA/index.tsx
var import_jsx_dev_runtime84 = require("@emotion/react/jsx-dev-runtime");
function ProductCTA({
  productId,
  userDetails,
  view,
  onlyWishlistButton
}) {
  let [toast, setToast] = (0, import_react34.useState)(TOAST_DEFAULT_VALUE), [snackbar, setSnackbar] = (0, import_react34.useState)(SNACKBAR_DEFAULT_VALUE);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(Container4, { view, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
      WishlistButton,
      {
        productId,
        userDetails,
        onStatusChange: (message) => {
          setToast({ show: !0, message });
        },
        view,
        onlyWishlistButton
      },
      void 0,
      !1,
      {
        fileName: "app/shared/ProductCTA/index.tsx",
        lineNumber: 38,
        columnNumber: 7
      },
      this
    ),
    !onlyWishlistButton && /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
      AddToBagButton,
      {
        productId,
        onStatusChange: (message, actionText = "") => {
          setSnackbar({ show: !0, message, actionText });
        },
        view
      },
      void 0,
      !1,
      {
        fileName: "app/shared/ProductCTA/index.tsx",
        lineNumber: 46,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
      Notifications,
      {
        toast,
        snackbar,
        onToastDismiss: () => setToast({ show: !1, message: "" }),
        onSnackbarDismiss: () => setSnackbar({ show: !1, message: "", actionText: "" }),
        onSnackbarAction: () => redirectToShoppingBag()
      },
      void 0,
      !1,
      {
        fileName: "app/shared/ProductCTA/index.tsx",
        lineNumber: 52,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/shared/ProductCTA/index.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
var ProductCTA_default = ProductCTA;

// app/components/PD/ProductActions/index.tsx
var import_jsx_dev_runtime85 = require("react/jsx-dev-runtime");
function ProductActions({ product, view }) {
  let {
    id: productId,
    name: productName,
    price: productPrice,
    onlyWishlistButton
  } = product || {}, { user } = useAuth() || {}, { formKey, wishlist } = user || {};
  return product != null && product.inStock ? /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)(
    ProductCTA_default,
    {
      productId,
      userDetails: {
        wishlist,
        formKey
      },
      onlyWishlistButton,
      view
    },
    void 0,
    !1,
    {
      fileName: "app/components/PD/ProductActions/index.tsx",
      lineNumber: 16,
      columnNumber: 7
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)(
    NotifyMe,
    {
      productId,
      productName,
      productPrice
    },
    void 0,
    !1,
    {
      fileName: "app/components/PD/ProductActions/index.tsx",
      lineNumber: 29,
      columnNumber: 7
    },
    this
  );
}
var ProductActions_default = ProductActions;

// app/components/PD/FullScreenCarousel/index.tsx
var import_jsx_dev_runtime86 = require("@emotion/react/jsx-dev-runtime"), FullScreenCarousel = ({
  onClose,
  product,
  media,
  currentSlide,
  mediaType,
  setMediaType,
  handleFullScreen
}) => {
  let [activeSlide, setActiveSlide] = (0, import_react35.useState)(currentSlide), imagesMedia = getImageData(media), videoMedia = getVideoData(media), productImages = imagesMedia == null ? void 0 : imagesMedia.map((image) => image == null ? void 0 : image.url), [currenMediaData, setCurrentSlideData] = (0, import_react35.useState)(imagesMedia), isImageMediaType = mediaType === MEDIA_TYPE.IMAGE;
  return (0, import_react35.useEffect)(() => {
    mediaType === MEDIA_TYPE.IMAGE ? setCurrentSlideData(imagesMedia) : (setCurrentSlideData(videoMedia), setActiveSlide(0));
  }, [mediaType]), /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(FullScreenWrapper, { mediaType, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(
      Header_default2,
      {
        onClose,
        mediaType,
        onMediaTypeChange: setMediaType,
        showToggle: !!(videoMedia != null && videoMedia.length)
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/FullScreenCarousel/index.tsx",
        lineNumber: 50,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(
      Carousel_default,
      {
        view: CAROUSEL_VIEW.FULL_SCREEN,
        media: currenMediaData,
        activeSlide,
        setActiveSlide,
        handleFullScreen
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/FullScreenCarousel/index.tsx",
        lineNumber: 56,
        columnNumber: 7
      },
      this
    ),
    isImageMediaType && /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(
      Thumbnails_default,
      {
        images: productImages,
        currentSlide: activeSlide,
        onSlideChange: setActiveSlide
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/FullScreenCarousel/index.tsx",
        lineNumber: 64,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(ActionsWrapper, { mediaType, children: /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(
      ProductActions_default,
      {
        product,
        view: mediaType
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/FullScreenCarousel/index.tsx",
        lineNumber: 72,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/PD/FullScreenCarousel/index.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/FullScreenCarousel/index.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}, FullScreenCarousel_default = FullScreenCarousel;

// app/shared/Modal/index.tsx
var import_styled68 = __toESM(require("@emotion/styled")), import_react36 = require("react");
var import_jsx_dev_runtime87 = require("react/jsx-dev-runtime"), ModalContent = import_styled68.default.div`
  position: fixed;
  max-width: 100%;
  border-radius: 2px;
  z-index: 10;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 30px 6px rgba(0, 0, 0, 0.15);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: white;

  &.partial-modal {
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    height: auto;
    max-width: 500px;
    overflow: hidden;
  }
  &.stick-to-bottom {
    top: unset;
    bottom: 0;
    margin: auto;
    max-width: 500px;
    transform: translateX(-50%);
    overflow: hidden;
  }
  &.bottom-drawer {
    top: unset;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60vh;
    background: #fff;
    border: none;
    border-radius: 14px 14px 0 0;
    overflow: hidden;
  }
`, Overlay = import_styled68.default.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;

  .hide-overlay {
    z-index: 1;
    background-color: rgba(0, 0, 0, 0);
  }
`, ModalHeader = import_styled68.default.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 3;
  height: 56px;

  ${({ centerTitle }) => centerTitle && `
    justify-content: center;
    
    button {
      position: absolute;
      left: 8px;
    }
  `}
`, BackButton2 = import_styled68.default.button`
  background: none;
  border: none;
  margin-right: 8px;
  cursor: pointer;
`, ModalTitle = import_styled68.default.h2`
  margin: 0;
  font-size: 18px;
`, ModalContentWrapper = import_styled68.default.div`
  margin-top: 56px;
  height: calc(100% - 56px);
  overflow-y: auto;
`, Modal = ({
  children,
  showHeader = !1,
  title,
  onBack,
  centerTitle = !1,
  isOpen = !1
}) => {
  let { closeModal, isModalOpan } = useOpenModal_default({
    onClose: onBack,
    isOpen
  });
  return (0, import_react36.useEffect)(() => {
    document != null && document.body && isOpen ? document.body.style.overflow = "hidden" : document != null && document.body && (document.body.style.overflow = "unset");
  }, [isOpen]), isModalOpan ? /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(import_jsx_dev_runtime87.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(ModalContent, { children: [
      showHeader && /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(ModalHeader, { centerTitle, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(BackButton2, { onClick: closeModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(BackArrow_default, {}, void 0, !1, {
          fileName: "app/shared/Modal/index.tsx",
          lineNumber: 143,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/shared/Modal/index.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(ModalTitle, { children: title }, void 0, !1, {
          fileName: "app/shared/Modal/index.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/shared/Modal/index.tsx",
        lineNumber: 141,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(ModalContentWrapper, { children }, void 0, !1, {
        fileName: "app/shared/Modal/index.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/shared/Modal/index.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(Overlay, { onClick: closeModal }, void 0, !1, {
      fileName: "app/shared/Modal/index.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/shared/Modal/index.tsx",
    lineNumber: 138,
    columnNumber: 5
  }, this) : null;
}, Modal_default = Modal;

// app/components/PD/Gallery/index.tsx
var import_jsx_dev_runtime88 = require("@emotion/react/jsx-dev-runtime"), Gallery = ({ product, media }) => {
  let [showFullScreen, setShowFullScreen] = (0, import_react38.useState)(!1), [activeSlide, setActiveSlide] = (0, import_react38.useState)(0), [fullScreenActiveSlide, setFullScreenActiveSlide] = (0, import_react38.useState)(0), [mediaType, setMediaType] = (0, import_react38.useState)(MEDIA_TYPE.IMAGE), carouselSelectedId = (0, import_react38.useRef)(null), navigate = (0, import_react37.useNavigate)();
  if (!isValidArrayLength(media))
    return null;
  let getMediaIndex = (id, mediaList) => mediaList == null ? void 0 : mediaList.findIndex((item) => (item == null ? void 0 : item.id) === id), handleFullScreen = (id, view, type) => {
    if (view === CAROUSEL_VIEW.FULL_SCREEN) {
      setShowFullScreen(!1);
      return;
    }
    carouselSelectedId.current = id;
    let isVideo = type === MEDIA_TYPE.VIDEO, filteredMedia = isVideo ? getVideoData(media) : getImageData(media);
    setMediaType(isVideo ? MEDIA_TYPE.VIDEO : MEDIA_TYPE.IMAGE), setFullScreenActiveSlide(getMediaIndex(id, filteredMedia)), setShowFullScreen(!0);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(import_jsx_dev_runtime88.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(
      Carousel_default,
      {
        handleFullScreen,
        media,
        activeSlide,
        setActiveSlide
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/Gallery/index.tsx",
        lineNumber: 48,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(
      Modal_default,
      {
        showHeader: !1,
        onBack: () => {
          setShowFullScreen(!1);
        },
        isOpen: showFullScreen,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(
          FullScreenCarousel_default,
          {
            onClose: () => {
              navigate(-1), setShowFullScreen(!1);
            },
            product,
            media,
            currentSlide: fullScreenActiveSlide,
            setActiveSlide: setFullScreenActiveSlide,
            handleFullScreen,
            mediaType,
            setMediaType
          },
          void 0,
          !1,
          {
            fileName: "app/components/PD/Gallery/index.tsx",
            lineNumber: 61,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/Gallery/index.tsx",
        lineNumber: 54,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/PD/Gallery/index.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}, Gallery_default = Gallery;

// app/components/PD/Manufacture/index.tsx
var import_styled69 = __toESM(require("@emotion/styled"));
var import_jsx_dev_runtime89 = require("@emotion/react/jsx-dev-runtime"), Container5 = import_styled69.default.div`
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}};
  padding-right:${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0;
}}
  border-top: 1px ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.16);
}};
  border-bottom: 1px ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.16);
}};
  background-color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface;
}}; ;
`, SoldBy = import_styled69.default.span`
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyMedium;
}};
`, NykaaRetail = import_styled69.default.span`
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.subTitleMedium;
}};
`, SoldByComponent = () => /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(Container5, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(SoldBy, { children: "Sold by -: " }, void 0, !1, {
    fileName: "app/components/PD/Manufacture/index.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(NykaaRetail, { children: "Nykaa E retail private limited" }, void 0, !1, {
    fileName: "app/components/PD/Manufacture/index.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/PD/Manufacture/index.tsx",
  lineNumber: 26,
  columnNumber: 3
}, this), Manufacture_default = SoldByComponent;

// app/components/PD/Price.tsx
var import_styled70 = __toESM(require("@emotion/styled"));
var import_jsx_dev_runtime90 = require("@emotion/react/jsx-dev-runtime"), Price = import_styled70.default.div`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.titleMedium;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
  display: flex;
  padding: ${({ theme: { spacing: spacing2 } }) => `${spacing2.spacing0} ${spacing2.spacing80}`};
`, DashedLineContainer = import_styled70.default.div`
  padding: ${({ theme: { spacing: spacing2 } }) => `${spacing2.spacing60} ${spacing2.spacing80}`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: ${({ theme: { spacing: spacing2 } }) => `${spacing2.spacing50}`};
`, DashedLine = import_styled70.default.div`
  width: 100%;
  height: 0.5px;
  background-image: repeating-linear-gradient(
    to right,
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.36);
}},
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.36);
}} 5px,
    transparent 4px,
    transparent 9px
  );
`;
function ProductPrice({ price }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(Price, { children: `\u20B9${price}` }, void 0, !1, {
      fileName: "app/components/PD/Price.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(DashedLineContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(DashedLine, {}, void 0, !1, {
      fileName: "app/components/PD/Price.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/PD/Price.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/Price.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/components/PD/ProductDescription/index.tsx
var import_styled74 = __toESM(require("@emotion/styled"));

// app/components/PD/ProductDescription/Name.tsx
var import_styled72 = __toESM(require("@emotion/styled"));

// app/components/PD/ProductDescription/Highlights.tsx
var import_styled71 = __toESM(require("@emotion/styled"));
var import_jsx_dev_runtime91 = require("react/jsx-dev-runtime"), Highlights = import_styled71.default.div`
  display: -webkit-box;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyMedium;
}};
  margin-top: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20;
}};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: uppercase;
`;
function Highlight({ data }) {
  return data ? /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)(Highlights, { children: data }, void 0, !1, {
    fileName: "app/components/PD/ProductDescription/Highlights.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this) : null;
}

// app/components/PD/ProductDescription/Name.tsx
var import_jsx_dev_runtime92 = require("react/jsx-dev-runtime"), Name = import_styled72.default.div`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyLarge;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 0;
`, Brand = import_styled72.default.div`
  display: -webkit-box;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.titleXSmall;
}};
  margin-bottom: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20;
}};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`, Root = import_styled72.default.div`
  gap: ${({ theme: theme2 }) => {
  var _a2;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20}`;
}};
  text-transform: uppercase;
`;
function ProductName({
  name,
  brandName,
  highlights
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(Root, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(Brand, { children: brandName }, void 0, !1, {
      fileName: "app/components/PD/ProductDescription/Name.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(Name, { children: name }, void 0, !1, {
      fileName: "app/components/PD/ProductDescription/Name.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(Highlight, { data: highlights }, void 0, !1, {
      fileName: "app/components/PD/ProductDescription/Name.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/ProductDescription/Name.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/shared/ShareButton/index.tsx
var import_styled73 = __toESM(require("@emotion/styled")), import_react39 = require("react");

// app/components/Icons/Share.tsx
var import_jsx_dev_runtime93 = require("react/jsx-dev-runtime");
function Share() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("g", { id: "share-android", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("path", { id: "Icon", d: "M16.7355 14.4755C16.3023 14.4789 15.8742 14.5693 15.4764 14.7414C15.0785 14.9136 14.7191 15.1639 14.4192 15.4777L10.3356 12.9822C10.5501 12.352 10.5501 11.6681 10.3356 11.0379L14.4292 8.53228C14.7268 8.84625 15.0845 9.0968 15.4807 9.269C15.877 9.44119 16.3037 9.53149 16.7355 9.53451C17.3776 9.53641 18.0058 9.34767 18.5412 8.99203C19.0767 8.63639 19.4954 8.12974 19.7446 7.53582C19.9939 6.94191 20.0627 6.28725 19.9422 5.65422C19.8217 5.02118 19.5174 4.43805 19.0676 3.97819C18.6178 3.51832 18.0425 3.20227 17.4142 3.06978C16.7859 2.9373 16.1326 2.9943 15.5364 3.23362C14.9403 3.47295 14.428 3.8839 14.064 4.41477C13.7 4.94565 13.5005 5.57273 13.4906 6.21714C13.496 6.55794 13.5533 6.89591 13.6604 7.21937L9.57679 9.72494C9.12735 9.2587 8.54944 8.93781 7.91714 8.8034C7.28484 8.66899 6.62695 8.72718 6.02781 8.97053C5.42868 9.21387 4.91558 9.63127 4.5543 10.1692C4.19301 10.7072 4 11.3412 4 11.99C4 12.6388 4.19301 13.2728 4.5543 13.8107C4.91558 14.3487 5.42868 14.7661 6.02781 15.0094C6.62695 15.2528 7.28484 15.311 7.91714 15.1765C8.54944 15.0421 9.12735 14.7212 9.57679 14.255L13.6504 16.7506C13.5446 17.074 13.4907 17.4123 13.4906 17.7528C13.4926 18.3966 13.6846 19.0253 14.0423 19.5597C14.4001 20.094 14.9076 20.5099 15.5007 20.7549C16.0938 20.9999 16.7459 21.063 17.3747 20.9362C18.0035 20.8094 18.5807 20.4984 19.0335 20.0424C19.4863 19.5865 19.7944 19.0061 19.9188 18.3745C20.0432 17.743 19.9783 17.0886 19.7324 16.494C19.4866 15.8994 19.0706 15.3912 18.5372 15.0338C18.0038 14.6763 17.3769 14.4855 16.7355 14.4855V14.4755ZM16.7355 4.46324C17.0721 4.46545 17.4008 4.55517 17.6823 4.74045C17.9637 4.92573 18.1859 5.18867 18.322 5.49764C18.4581 5.80662 18.5025 6.14849 18.4497 6.48215C18.3969 6.81582 18.2492 7.12708 18.0244 7.37852C17.7997 7.62996 17.5073 7.81088 17.1825 7.89953C16.8577 7.98817 16.5144 7.98077 16.1937 7.87822C15.873 7.77566 15.5886 7.58232 15.3748 7.32143C15.161 7.06053 15.0267 6.74319 14.9883 6.40756C14.9883 6.34743 14.9883 6.28729 14.9883 6.21714C14.9883 5.75198 15.1724 5.30586 15.5 4.97694C15.8277 4.64802 16.2721 4.46324 16.7355 4.46324ZM8.9977 12.1303C8.9756 12.3893 8.89707 12.6402 8.76768 12.8653C8.63828 13.0905 8.46117 13.2843 8.24888 13.4332C7.95723 13.6402 7.60764 13.749 7.25046 13.7439C6.97812 13.7407 6.7103 13.6736 6.46837 13.5481C6.22644 13.4225 6.0171 13.2419 5.85706 13.0207C5.69702 12.7995 5.5907 12.5438 5.54661 12.2741C5.50251 12.0043 5.52185 11.7279 5.60309 11.4669C5.68432 11.206 5.8252 10.9677 6.01448 10.7712C6.20376 10.5746 6.4362 10.4252 6.69324 10.3348C6.95028 10.2444 7.22481 10.2156 7.49491 10.2507C7.76501 10.2857 8.0232 10.3837 8.24888 10.5367C8.46021 10.6866 8.63661 10.8807 8.7659 11.1056C8.89518 11.3306 8.97428 11.581 8.9977 11.8396V11.99V12.1303ZM16.7455 19.4967C16.5152 19.498 16.2869 19.4536 16.0738 19.366C15.8607 19.2785 15.6669 19.1495 15.5036 18.9865C15.3402 18.8235 15.2107 18.6297 15.1222 18.4163C15.0338 18.2028 14.9883 17.9739 14.9883 17.7428C14.9883 17.6826 14.9883 17.6325 14.9883 17.5724C15.0136 17.3145 15.0946 17.0652 15.2257 16.842C15.3567 16.6187 15.5346 16.4268 15.7471 16.2795C15.9732 16.1297 16.2309 16.0346 16.4998 16.0019C16.7688 15.9693 17.0416 15.9998 17.2968 16.0912C17.552 16.1825 17.7825 16.3322 17.9702 16.5284C18.1578 16.7245 18.2974 16.9618 18.378 17.2215C18.4586 17.4811 18.4779 17.756 18.4345 18.0245C18.391 18.2929 18.286 18.5475 18.1276 18.7682C17.9693 18.9888 17.762 19.1695 17.5221 19.296C17.2822 19.4224 17.0164 19.4911 16.7455 19.4967Z", fill: "#001325", fillOpacity: "0.92" }, void 0, !1, {
    fileName: "app/components/Icons/Share.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Icons/Share.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Icons/Share.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Share_default = Share;

// app/shared/ShareButton/constants.ts
var SHARE_MESSAGE = "Hey, Look What I found on Nykaa", LINK_COPIED = "Link has been copied to clipboard", LINK_COULD_NOT_BE_SHARED = "Link could not be shared", SHARE_SUCCESS = "SUCCESS";

// app/constants/error.ts
var ERROR_TYPES = {
  ABORT_ERROR: "AbortError"
};

// app/shared/ShareButton/utils.ts
var copyToClipboard = async (text) => {
  var _a2;
  if (window.isSecureContext && ((_a2 = navigator.clipboard) != null && _a2.writeText))
    try {
      return await navigator.clipboard.writeText(text), !0;
    } catch {
      return !1;
    }
  return !1;
}, shareContent = async ({ message, title, url }) => {
  let textToShare = `${message}
${url}`;
  if (!navigator)
    return LINK_COULD_NOT_BE_SHARED;
  let handleClipboardFallback = async () => await copyToClipboard(textToShare) ? LINK_COPIED : LINK_COULD_NOT_BE_SHARED;
  if (window.isSecureContext && (navigator != null && navigator.share))
    try {
      return await navigator.share({
        title,
        text: message,
        url
      }), SHARE_SUCCESS;
    } catch (error) {
      return error instanceof Error && error.name !== ERROR_TYPES.ABORT_ERROR ? handleClipboardFallback() : LINK_COULD_NOT_BE_SHARED;
    }
  return handleClipboardFallback();
};

// app/shared/ShareButton/index.tsx
var import_jsx_dev_runtime94 = require("react/jsx-dev-runtime"), ShareButton = import_styled73.default.div`
  display: flex;
`;
function index({ title, message, productImage }) {
  let [toastData, setShowToast] = (0, import_react39.useState)({ state: !1, message: "" }), handleShare = async () => {
    let data = {
      message,
      title,
      url: window.location.href
    }, responseData = await shareContent(data);
    responseData != SHARE_SUCCESS && setShowToast({ state: !0, message: responseData });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_jsx_dev_runtime94.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(ShareButton, { onClick: () => {
      if (isWeb())
        handleShare();
      else {
        let appParams = {
          device: getDevice(),
          callbackFunctionName: webViewCallbacks.sharePost,
          callbackParams: {
            title,
            url: window.location.href,
            image_url: productImage
          }
        };
        webViewCallbackhandler(appParams);
      }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(Share_default, {}, void 0, !1, {
      fileName: "app/shared/ShareButton/index.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/shared/ShareButton/index.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    toastData.state && /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
      Toast,
      {
        message: toastData == null ? void 0 : toastData.message,
        onDismiss: () => setShowToast({ state: !1, message: "" }),
        background: "black"
      },
      void 0,
      !1,
      {
        fileName: "app/shared/ShareButton/index.tsx",
        lineNumber: 59,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/shared/ShareButton/index.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
var ShareButton_default = index;

// app/components/PD/ProductDescription/Share.tsx
var import_jsx_dev_runtime95 = require("react/jsx-dev-runtime");
function Share2({ name, productImage }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(
    ShareButton_default,
    {
      message: SHARE_MESSAGE,
      title: name,
      productImage
    },
    void 0,
    !1,
    {
      fileName: "app/components/PD/ProductDescription/Share.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}
var Share_default2 = Share2;

// app/components/PD/ProductDescription/index.tsx
var import_jsx_dev_runtime96 = require("@emotion/react/jsx-dev-runtime"), Wrapper5 = import_styled74.default.div`
  display: flex;
  padding: ${({ theme: theme2 }) => {
  var _a2, _b;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40} ${(_b = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _b.spacing80}`;
}};
  justify-content: space-between;
`;
function ProductDescription({
  name,
  brandName,
  productImage,
  highlights
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(Wrapper5, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
      ProductName,
      {
        name,
        brandName,
        highlights
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/ProductDescription/index.tsx",
        lineNumber: 28,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
      Share_default2,
      {
        name,
        productImage
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/ProductDescription/index.tsx",
        lineNumber: 33,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/PD/ProductDescription/index.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/components/PD/ProductDetails/index.tsx
var import_react40 = require("react");

// app/components/PD/ProductDetails/constants.ts
var DESCRIPTION_TAB = "DESCRIPTION", INGREDIENTS_TAB = "INGREDIENTS", HOW_TO_USE_TAB = "HOW_TO_USE", CLEAN_STRING_REGEX = /(\\n|\\t|\\r)/g, TAB_HEADERS_MAP = {
  description: "Description",
  ingredients: "Ingredients",
  how_to_use: "How to Use"
}, READ_MORE_THRESHOLD = 100, READ_MORE = "Read More", READ_LESS = "Read Less", DESCFRIPTION = "description";

// app/components/PD/ProductDetails/helpers.ts
var getTabsValues = (description, ingredients, howToUse) => {
  let count = -1, tabHeaders = {}, tabsData = {}, addTab = (tabName, value) => {
    value && value.length > 10 && (count += 1, tabHeaders[tabName] = count, tabsData[count] = { id: tabName, value });
  };
  return addTab(DESCRIPTION_TAB, description), addTab(INGREDIENTS_TAB, ingredients), addTab(HOW_TO_USE_TAB, howToUse), { tabsData, tabHeaders };
}, generateLegalInfoHtml = (label, content, addBreak = !1) => {
  let cleanContent = content.replace(CLEAN_STRING_REGEX, "");
  return `<p class="mrp-n-expiry"><span style="font-weight: 600;">${label}</span>&nbsp;<span class="content-info">${cleanContent}</span></p>${addBreak ? "<br>" : ""}`;
}, getLegalInfoForPDP = (data, countryOfManufacture) => {
  let legalInfoHtmlString = "", {
    originOfCountryName,
    manufacturerName,
    manufacturerAddress,
    packerName,
    packerAddress,
    importerName,
    importerAddress,
    countryOfOriginLabel,
    manufacturerNameLabel,
    manufacturerAddressLabel,
    importerNameLabel,
    importerAddressLabel,
    packerNameLabel,
    packerAddressLabel
  } = data;
  return originOfCountryName && (legalInfoHtmlString += generateLegalInfoHtml(
    countryOfOriginLabel,
    originOfCountryName,
    !0
  )), manufacturerName && (legalInfoHtmlString += generateLegalInfoHtml(
    manufacturerNameLabel,
    manufacturerName
  )), manufacturerAddress && (legalInfoHtmlString += generateLegalInfoHtml(
    manufacturerAddressLabel,
    manufacturerAddress,
    !0
  )), countryOfManufacture && (legalInfoHtmlString += generateLegalInfoHtml(
    "Country of Manufacture:",
    countryOfManufacture,
    !0
  )), importerName && (legalInfoHtmlString += generateLegalInfoHtml(
    importerNameLabel,
    importerName
  )), importerAddress && (legalInfoHtmlString += generateLegalInfoHtml(
    importerAddressLabel,
    importerAddress,
    !0
  )), packerName && (legalInfoHtmlString += generateLegalInfoHtml(packerNameLabel, packerName)), packerAddress && (legalInfoHtmlString += generateLegalInfoHtml(
    packerAddressLabel,
    packerAddress
  )), legalInfoHtmlString;
}, createMrpExpiryHtml = (expiry) => expiry ? `<p class="mrp-n-expiry" style="font-weight: 600;">Expiry Date: ${expiry}</p>` : "";

// app/components/PD/ProductDetails/Icons/ProductDetails.tsx
var import_jsx_dev_runtime97 = require("react/jsx-dev-runtime"), ProductDetailIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("g", { clipPath: "url(#clip0_704_20605)", children: /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
        "path",
        {
          d: "M19 4.00098H5C4.73478 4.00098 4.48043 4.10633 4.29289 4.29387C4.10536 4.48141 4 4.73576 4 5.00098V19.001C4 19.2662 4.10536 19.5205 4.29289 19.7081C4.48043 19.8956 4.73478 20.001 5 20.001H19C19.2652 20.001 19.5196 19.8956 19.7071 19.7081C19.8946 19.5205 20 19.2662 20 19.001V5.00098C20 4.73576 19.8946 4.48141 19.7071 4.29387C19.5196 4.10633 19.2652 4.00098 19 4.00098ZM13.9 5.50098V10.331L12.75 9.67098L12 9.24098L11.25 9.67098L10.1 10.331V5.50098H13.9ZM18.5 18.501H5.5V5.50098H8.6V11.201C8.6 11.4662 8.70536 11.7205 8.89289 11.9081C9.08043 12.0956 9.33478 12.201 9.6 12.201C9.77658 12.2027 9.95001 12.1542 10.1 12.061L12 11.001L13.9 12.101C14.0523 12.1889 14.2251 12.2351 14.401 12.235C14.5769 12.2348 14.7496 12.1882 14.9017 12.1C15.0539 12.0117 15.18 11.8849 15.2675 11.7324C15.355 11.5798 15.4007 11.4068 15.4 11.231V5.50098H18.5V18.501Z",
          fill: "#001325",
          fillOpacity: "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/PD/ProductDetails/Icons/ProductDetails.tsx",
          lineNumber: 10,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/PD/ProductDetails/Icons/ProductDetails.tsx",
        lineNumber: 9,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("clipPath", { id: "clip0_704_20605", children: /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
        "rect",
        {
          width: "24",
          height: "24",
          fill: "white",
          transform: "translate(0 0.000976562)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/PD/ProductDetails/Icons/ProductDetails.tsx",
          lineNumber: 18,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/PD/ProductDetails/Icons/ProductDetails.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/PD/ProductDetails/Icons/ProductDetails.tsx",
        lineNumber: 16,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/PD/ProductDetails/Icons/ProductDetails.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), ProductDetails_default = ProductDetailIcon;

// app/components/PD/ProductDetails/styled.ts
var import_styled75 = __toESM(require("@emotion/styled"));
var TabButton = import_styled75.default.button`
  background-color: ${({ active }) => active ? "transparent" : "#fff"};
  padding: 10px;
  cursor: pointer;
  width: auto;
  text-align: center;
  border: none;
  color: ${({ active }) => active ? "#000000" : "#001325A3"};
  border-bottom: ${({ active }) => active ? "2px solid #000000" : "none"};
  margin: 0 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.1px;
  &:hover {
    background-color: transparent;
  }
`, TabContent = import_styled75.default.div`
  width: 100%;
  padding: 16px;
  color: #666;
  line-height: 24px;
  background: #fff;
  margin-bottom: 10px;
  overflow: hidden;
  font-size: 14px;
`, TabsContainer = import_styled75.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`, HorizontalLine = import_styled75.default.div`
  position: absolute;
  bottom: -1px;
  width: 100%;
  height: 1px;
  background-color: #00132529;
`, AccordionContent2 = import_styled75.default.div`
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0}`;
}};
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20.57px;
  letter-spacing: 0.16px;
  text-align: left;
  color: #666666;
  a {
    color: #000;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }
`, ReadMoreButtonContainer = import_styled75.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: ${({ theme: { spacing: spacing2 } }) => `${spacing2.spacing40} ${spacing2.spacing80}`};
  border-top: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.16);
}};
`, ReadMoreButton = import_styled75.default.button`
  background: none;
  border: none;
  color: #000;
  font-style: normal;
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.buttonSmall;
}};
  letter-spacing: 0.1px;
  text-align: center;
  cursor: pointer;
  padding: 4px 8px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`, ContentWrapper = import_styled75.default.div`
  max-height: ${({ expanded }) => expanded ? "none" : "100px"};
  overflow: hidden;
  position: relative;
  transition: max-height 0.3s ease-out;
`;

// app/shared/Tabs/styled.ts
var import_styled76 = __toESM(require("@emotion/styled")), TabsWrapper = import_styled76.default.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`, TabButtonsContainer = import_styled76.default.div`
  display: flex;
  ${({ variant, alignment }) => variant === "modal" ? `
    padding: 0 55px;
    justify-content: center;
    width: 100%;
    gap: 110px;
    ` : `
    gap: 24px;
    justify-content: ${alignment};
    width: 100%;
    `}
`, TabButton2 = import_styled76.default.button`
  background: none;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  white-space: nowrap;
  color: ${({ active }) => active ? "#000" : "#666"};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border-bottom: 2px solid ${({ active }) => active ? "#000" : "transparent"};
`, HorizontalLine2 = import_styled76.default.div`
  height: 1px;
  background-color: #e5e5e5;
  width: 100%;
  margin-top: -2px;
`;

// app/shared/Tabs/constants.ts
var TAB_VARIANTS = {
  MODAL: "modal",
  DEFAULT: "default"
}, TAB_ALIGNMENTS = {
  SPACE_BETWEEN: "space-between",
  CENTER: "center",
  SPACE_AROUND: "space-around"
};

// app/shared/Tabs/index.tsx
var import_jsx_dev_runtime98 = require("react/jsx-dev-runtime"), TabsContainer2 = ({
  tabs,
  activeTab,
  onTabChange,
  variant = TAB_VARIANTS.DEFAULT,
  alignment = TAB_ALIGNMENTS.SPACE_BETWEEN
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(TabsWrapper, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(
    TabButtonsContainer,
    {
      variant,
      alignment,
      children: tabs.map((tab, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(
        TabButton2,
        {
          onClick: () => onTabChange(index2),
          active: activeTab === index2,
          children: tab.label
        },
        tab.key,
        !1,
        {
          fileName: "app/shared/Tabs/index.tsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      ))
    },
    void 0,
    !1,
    {
      fileName: "app/shared/Tabs/index.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(HorizontalLine2, {}, void 0, !1, {
    fileName: "app/shared/Tabs/index.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/shared/Tabs/index.tsx",
  lineNumber: 36,
  columnNumber: 3
}, this), Tabs_default = TabsContainer2;

// app/components/PD/ProductDetails/index.tsx
var import_jsx_dev_runtime99 = require("react/jsx-dev-runtime"), ProductDetailsAccordion = ({
  description,
  ingredients,
  howToUse,
  currentSkuData
}) => {
  var _a2, _b, _c, _d, _e, _f;
  let config = useConfig(), productDetailsAccConfig = (_b = (_a2 = config == null ? void 0 : config.configs) == null ? void 0 : _a2.collapsePdConfig) == null ? void 0 : _b.productDetails, [activeTab, setActiveTab] = (0, import_react40.useState)(0), [isExpanded, setIsExpanded] = (0, import_react40.useState)(!1), contentRef = (0, import_react40.useRef)(null), [showReadMore, setShowReadMore] = (0, import_react40.useState)(!1), tabsValues = getTabsValues(description, ingredients, howToUse), tabHeaders = tabsValues.tabHeaders || {}, { expiry, manufacture } = currentSkuData, renderMrpAndExpiry = () => createMrpExpiryHtml(expiry), tabs = tabHeaders && ((_c = Object.keys(tabHeaders)) == null ? void 0 : _c.map((tabName) => ({
    key: tabName.toLowerCase(),
    label: TAB_HEADERS_MAP[tabName.toLowerCase()] || tabName
  }))), isSingleTab = tabs.length === 1, renderManufactureDetails = () => {
    var _a3;
    return (_a3 = manufacture == null ? void 0 : manufacture.map(
      (manufactureData) => getLegalInfoForPDP(
        manufactureData,
        manufactureData.originOfCountryName
      )
    )) == null ? void 0 : _a3.join("");
  };
  (0, import_react40.useEffect)(() => {
    var _a3;
    contentRef != null && contentRef.current && setShowReadMore(((_a3 = contentRef.current) == null ? void 0 : _a3.scrollHeight) > READ_MORE_THRESHOLD);
  }, [activeTab]);
  let toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
    Accordion_default,
    {
      title: productDetailsAccConfig.title,
      subTitle: productDetailsAccConfig.subTitle,
      opened: productDetailsAccConfig.isOpened,
      keyValue: productDetailsAccConfig.key,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(ProductDetails_default, {}, void 0, !1, {
        fileName: "app/components/PD/ProductDetails/index.tsx",
        lineNumber: 96,
        columnNumber: 15
      }, this),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(AccordionContent2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { children: [
        !isSingleTab && /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
          Tabs_default,
          {
            tabs,
            alignment: TAB_ALIGNMENTS.SPACE_AROUND,
            activeTab,
            onTabChange: (tab) => {
              setActiveTab(tab), setIsExpanded(!1);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/PD/ProductDetails/index.tsx",
            lineNumber: 101,
            columnNumber: 15
          },
          this
        ),
        activeTab !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(import_jsx_dev_runtime99.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(TabContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
            ContentWrapper,
            {
              ref: contentRef,
              expanded: isExpanded,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
                "div",
                {
                  dangerouslySetInnerHTML: {
                    __html: ((_e = (_d = tabsValues == null ? void 0 : tabsValues.tabsData) == null ? void 0 : _d[activeTab]) == null ? void 0 : _e.value) + (tabHeaders && ((_f = Object.keys(tabHeaders)[activeTab]) == null ? void 0 : _f.toLowerCase()) === DESCFRIPTION ? renderMrpAndExpiry() + renderManufactureDetails() : "")
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/components/PD/ProductDetails/index.tsx",
                  lineNumber: 118,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/PD/ProductDetails/index.tsx",
              lineNumber: 114,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/PD/ProductDetails/index.tsx",
            lineNumber: 113,
            columnNumber: 17
          }, this),
          showReadMore && /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(ReadMoreButtonContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(ReadMoreButton, { onClick: toggleReadMore, children: isExpanded ? /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(import_jsx_dev_runtime99.Fragment, { children: [
            READ_LESS,
            /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(ChevronUpSmall_default, {}, void 0, !1, {
              fileName: "app/components/PD/ProductDetails/index.tsx",
              lineNumber: 137,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/PD/ProductDetails/index.tsx",
            lineNumber: 135,
            columnNumber: 25
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(import_jsx_dev_runtime99.Fragment, { children: [
            READ_MORE,
            /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(ChevronDownSmall_default, {}, void 0, !1, {
              fileName: "app/components/PD/ProductDetails/index.tsx",
              lineNumber: 142,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/PD/ProductDetails/index.tsx",
            lineNumber: 140,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/PD/ProductDetails/index.tsx",
            lineNumber: 133,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/PD/ProductDetails/index.tsx",
            lineNumber: 132,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/PD/ProductDetails/index.tsx",
          lineNumber: 112,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/PD/ProductDetails/index.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/PD/ProductDetails/index.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/PD/ProductDetails/index.tsx",
      lineNumber: 91,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/PD/ProductDetails/index.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}, ProductDetails_default2 = ProductDetailsAccordion;

// app/components/PD/Rating.tsx
var import_styled79 = __toESM(require("@emotion/styled"));

// app/components/Icons/FilledStar.tsx
var import_jsx_dev_runtime100 = require("react/jsx-dev-runtime");
function FilledStar({
  width = 24,
  height = 24,
  color = "#001325"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
    "svg",
    {
      width,
      height,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
        "path",
        {
          d: "M11.9914 2.90002C11.5826 2.90002 11.1738 3.11014 10.9644 3.54038L8.65104 8.25296L3.47591 9.02338C2.53861 9.16346 2.16967 10.3241 2.84772 10.9845L6.60691 14.6465L5.72944 19.8093C5.59981 20.5497 6.18812 21.15 6.8562 21.15C7.03568 21.15 7.21517 21.11 7.39465 21.0099L12.0214 18.5586L16.658 20.9899C16.8375 21.08 17.017 21.12 17.1865 21.12C17.8546 21.12 18.4429 20.5197 18.3133 19.7693L17.4158 14.5964L21.1551 10.9244C21.8332 10.2541 21.4542 9.10342 20.5169 8.97335L15.3418 8.24295L13.0185 3.53037C12.7991 3.11014 12.3903 2.90002 11.9914 2.90002Z",
          fill: "#001325",
          fillOpacity: "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/FilledStar.tsx",
          lineNumber: 22,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Icons/FilledStar.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}
var FilledStar_default = FilledStar;

// app/components/Icons/HalfFilledStar.tsx
var import_jsx_dev_runtime101 = require("react/jsx-dev-runtime");
function HalfFilledStar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      fill: "none",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)(
        "path",
        {
          fill: "#001325",
          fillOpacity: ".92",
          d: "m20.5 9-5.2-.7L13 3.5c-.2-.4-.6-.6-1-.6s-.8.2-1 .6L8.7 8.2 3.5 9c-.9.1-1.3 1.3-.6 2l3.8 3.7-.9 5.2c-.1.7.5 1.3 1.1 1.3.2 0 .381-.032.5-.1l4.6-2.5 4.6 2.4c.2.1.4.1.5.1.7 0 1.2-.6 1.1-1.3l-.9-5.2 3.7-3.7c.8-.7.5-1.8-.5-1.9Zm-4.7 5.1.1.8.8 4.5-4-2.1-.7-.4v-12l2 4 .3.7.8.1 4.5.6-3.8 3.8Z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/HalfFilledStar.tsx",
          lineNumber: 12,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Icons/HalfFilledStar.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}
var HalfFilledStar_default = HalfFilledStar;

// app/components/Icons/EmptyStar.tsx
var import_jsx_dev_runtime102 = require("react/jsx-dev-runtime");
function EmptyStar({ width = 24, height = 24 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(
    "svg",
    {
      width,
      height,
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("g", { id: "star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(
        "path",
        {
          id: "Icon",
          d: "M11.9914 5.45217L14.0057 9.5244L14.3546 10.2348L15.1324 10.3448L19.5996 10.9752L16.3788 14.1369L15.8204 14.6872L15.9501 15.4677L16.7179 19.9301L12.7193 17.8289L12.0214 17.4587L11.3234 17.8289L7.32485 19.9501L8.08267 15.4777L8.2123 14.7072L7.64393 14.1569L4.40325 11.0052L8.87041 10.3448L9.64817 10.2248L9.99717 9.51439L11.9914 5.45217ZM11.9914 3.5011C11.5826 3.5011 11.1738 3.71121 10.9644 4.14145L8.65104 8.85403L3.47591 9.62445C2.53861 9.76453 2.16967 10.9252 2.84772 11.5855L6.60691 15.2475L5.72944 20.4104C5.59981 21.1508 6.18812 21.7511 6.8562 21.7511C7.03568 21.7511 7.21517 21.7111 7.39465 21.611L12.0214 19.1597L16.658 21.591C16.8375 21.6811 17.017 21.7211 17.1865 21.7211C17.8546 21.7211 18.4429 21.1208 18.3133 20.3703L17.4158 15.1975L21.1551 11.5255C21.8332 10.8551 21.4542 9.7045 20.5169 9.57443L15.3418 8.84403L13.0185 4.13144C12.7991 3.71121 12.3903 3.5011 11.9914 3.5011Z",
          fill: "#001325",
          fillOpacity: "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/EmptyStar.tsx",
          lineNumber: 18,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Icons/EmptyStar.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Icons/EmptyStar.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}
var EmptyStar_default = EmptyStar;

// app/components/PD/Rating.tsx
var import_jsx_dev_runtime103 = require("react/jsx-dev-runtime"), Rating = import_styled79.default.div`
  display: flex;
  align-items: center;
  padding: ${({ theme: { spacing: spacing2 } }) => `${spacing2.spacing0} ${spacing2.spacing80} ${spacing2.spacing50} ${spacing2.spacing80}`};
`, Star = import_styled79.default.span`
  svg path {
    fill: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
  }
`, ReviewCount = import_styled79.default.span`
  margin-left: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.subTitleMedium;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
`, RatingText = import_styled79.default.span`
  margin-left: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.titleXSmall;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
`;
function ProductRating({
  rating,
  reviewCount
}) {
  let formattedReviewCount = reviewCount == null ? void 0 : reviewCount.toLocaleString(), fullStars = Math == null ? void 0 : Math.floor(rating), remainingStar = MAX_RATING - fullStars, halfStar = rating > fullStars;
  return rating ? /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(Rating, { children: [
    [...Array(fullStars)].map((_, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(Star, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(FilledStar_default, {}, void 0, !1, {
      fileName: "app/components/PD/Rating.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/PD/Rating.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)),
    halfStar && /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(Star, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(HalfFilledStar_default, {}, void 0, !1, {
      fileName: "app/components/PD/Rating.tsx",
      lineNumber: 58,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/PD/Rating.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    [...Array(remainingStar - (halfStar ? 1 : 0))].map((_, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(Star, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(EmptyStar_default, {}, void 0, !1, {
      fileName: "app/components/PD/Rating.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/PD/Rating.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)),
    rating && /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(RatingText, { children: [
      rating,
      "/5"
    ] }, void 0, !0, {
      fileName: "app/components/PD/Rating.tsx",
      lineNumber: 67,
      columnNumber: 18
    }, this),
    reviewCount && reviewCount > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(ReviewCount, { children: [
      "(",
      formattedReviewCount,
      ")"
    ] }, void 0, !0, {
      fileName: "app/components/PD/Rating.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/Rating.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this) : null;
}

// app/components/PD/RatingReviews/index.tsx
var import_react44 = require("react");

// app/components/PD/RatingReviews/AllReviews.tsx
var import_styled81 = __toESM(require("@emotion/styled"));

// app/components/PD/RatingReviews/constants.ts
var DEFAULT_VERIFIED_BUYER = "Verified Buyers", OVERALL_RATING_TEXT = "Overall Rating", VERIFIED_RATINGS_TEXT = "verified ratings", RATE_BUTTON_TEXT = "Rate", PHOTOS_FROM_CUSTOMERS_TEXT = "Photos from Customers", RATING_REVIEWS_TITLE = "Rating & Reviews", RATING_SUFFIX = "/5", PEOPLE_FOUND_HELPFUL_TEXT = "people found this helpful", MOST_USEFUL_REVIEW_TEXT = "Most Useful Review", SHADE = "shade", READ_ALL_REVIEWS = "Read all Reviews", SHADE_TEXT = "Shade:", HELPFUL = "Helpful", RATING_FIVE = "/5";
var RATE_TEXT = "Be the first to", RATE_SUB_TEXT = "and help your fellow shoppers, show off how it looks on you and get a few reward points!", RATE_PRODUCT = "Rate Product", MORE = "more", WRITE_A_REVIEW = "Write A Review", REVIEW_TEXT = "write a review about", RATE = "rate";

// app/components/PD/RatingReviews/styled.ts
var import_styled80 = __toESM(require("@emotion/styled"));
var FlexCenter = import_styled80.default.div`
  display: flex;
  align-items: center;
`, Rating2 = import_styled80.default.div`
  border-radius: 4px;
  background: linear-gradient(269deg, #08b559 0.72%, #3dbb95 99.4%);
  display: flex;
  width: 43px;
  height: 18px;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  justify-content: center;
  align-items: center;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface, 0.92);
}};
  margin-left: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60;
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.labelSmall;
}};
`, PhotoContainer = import_styled80.default.div`
  text-size-adjust: 100%;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  color: rgb(102, 102, 102);
  line-height: 24px;
  margin: 0px;
  box-sizing: border-box;
  padding: 12px 10px 9px;
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`, PhotoThumbnail = import_styled80.default.img`
  margin-right: 10px;
  width: 90px;
  height: 90px;
  object-fit: cover;
`, ReviewInfoContainer = import_styled80.default.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0 5px 10px;
  &.hide-block {
    display: none;
  }
`, UserContainer = (0, import_styled80.default)(FlexCenter)`
  margin: 5px;
  align-items: flex-end;
`, UserInfo = import_styled80.default.div`
  width: 50%;
`, LikeInfoContainer = import_styled80.default.div`
  width: 50%;
`, RatingWrap = (0, import_styled80.default)(FlexCenter)`
  background-color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface;
}};
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}};
  border-bottom: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.16);
}};
`, Text = import_styled80.default.div`
  margin-right: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  & > span {
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.titleXLarge;
}};
    color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
  }
  & > strong {
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.titleXLarge;
}};
    color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
  }
`, Count = import_styled80.default.div`
  line-height: 16px;
  flex: 2 1 0%;

  & > strong {
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.subTitleMedium;
}};
    display: block;
    margin-top: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20;
}};
    padding-top: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing10;
}};
  }
  & > span {
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodySmall;
}};
    color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
  }
`, RateButton = import_styled80.default.button`
  box-sizing: border-box;
  margin: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0;
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.labelMedium;
}};
  overflow: visible;
  appearance: button;
  background: none;
  border: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.16);
}};
  border-radius: 4px;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing50;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}};
  color: '#000000';
  margin-top: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing50;
}};
  text-transform: capitalize;
`, Container6 = import_styled80.default.div`
  margin: 0px 0.5rem 0px 0px;
  display: inline-block;
  border: 1px solid rgba(111, 121, 129, 0.22);
  width: 90px;
  height: 90px;
  position: relative;
`, ReadReviews = import_styled80.default.div`
  cursor: pointer;
  margin: 0px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  padding: 1rem;
  display: block;
  color: black;
  text-transform: capitalize;
  text-align: left;
  align-items: center;
  display: flex;
  padding-left: 12px;
`, RemainingItems = import_styled80.default.span`
  position: absolute;
  flex-direction: column;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: #fff;
  background: rgba(0, 0, 0, 0.75);
`;

// app/components/Recommendations/assets/ChevronRightSmall.tsx
var import_jsx_dev_runtime104 = require("react/jsx-dev-runtime");
function ChevronRightSmall({
  fill = "white",
  height = "24",
  width = "24"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime104.jsxDEV)(
    "svg",
    {
      width,
      height,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime104.jsxDEV)("g", { id: "chevron-right-small", children: /* @__PURE__ */ (0, import_jsx_dev_runtime104.jsxDEV)(
        "path",
        {
          id: "Icon",
          d: "M9.06552 18.9989C8.9261 18.9997 8.78789 18.9726 8.65882 18.9191C8.52975 18.8656 8.41235 18.7867 8.31336 18.6871C8.21407 18.5871 8.13526 18.4682 8.08147 18.3371C8.02769 18.2061 8 18.0656 8 17.9236C8 17.7816 8.02769 17.6411 8.08147 17.5101C8.13526 17.379 8.21407 17.2601 8.31336 17.1601L13.3984 12.0093L8.31336 6.85852C8.11388 6.65033 8.00404 6.37022 8.00801 6.07983C8.01199 5.78944 8.12945 5.51254 8.33455 5.31005C8.53965 5.10756 8.8156 4.99607 9.10169 5.00011C9.38778 5.00414 9.66057 5.12337 9.86006 5.33156L15.6866 11.2458C15.7859 11.3458 15.8647 11.4647 15.9185 11.5958C15.9723 11.7268 16 11.8674 16 12.0093C16 12.1513 15.9723 12.2918 15.9185 12.4229C15.8647 12.5539 15.7859 12.6728 15.6866 12.7728L9.86006 18.6871C9.75609 18.792 9.63179 18.874 9.49503 18.9276C9.35826 18.9813 9.21201 19.0056 9.06552 18.9989Z",
          fill
        },
        void 0,
        !1,
        {
          fileName: "app/components/Recommendations/assets/ChevronRightSmall.tsx",
          lineNumber: 22,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Recommendations/assets/ChevronRightSmall.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Recommendations/assets/ChevronRightSmall.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}
var ChevronRightSmall_default = ChevronRightSmall;

// app/components/PD/RatingReviews/AllReviews.tsx
var import_jsx_dev_runtime105 = require("react/jsx-dev-runtime"), Icon2 = import_styled81.default.i`
  top: 2px;
  position: relative;
`, AllReviews = ({ clickHandler }) => /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)(ReadReviews, { onClick: clickHandler, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)("span", { children: READ_ALL_REVIEWS }, void 0, !1, {
    fileName: "app/components/PD/RatingReviews/AllReviews.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this),
  " \xA0",
  /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)(Icon2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)(
    ChevronRightSmall_default,
    {
      fill: "black",
      height: "18",
      width: "18"
    },
    void 0,
    !1,
    {
      fileName: "app/components/PD/RatingReviews/AllReviews.tsx",
      lineNumber: 19,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/PD/RatingReviews/AllReviews.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/PD/RatingReviews/AllReviews.tsx",
  lineNumber: 16,
  columnNumber: 3
}, this), AllReviews_default = AllReviews;

// app/components/PD/RatingReviews/AvgRating.tsx
var import_jsx_dev_runtime106 = require("react/jsx-dev-runtime"), AvgRatingInfo = ({
  avgRating,
  ratingCount,
  handleRateClick
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(RatingWrap, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(Text, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("strong", { children: avgRating }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/AvgRating.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("span", { children: RATING_FIVE }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/AvgRating.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/AvgRating.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(Count, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("strong", { children: OVERALL_RATING_TEXT }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/AvgRating.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)("span", { children: [
      ratingCount,
      " ",
      VERIFIED_RATINGS_TEXT
    ] }, void 0, !0, {
      fileName: "app/components/PD/RatingReviews/AvgRating.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/AvgRating.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime106.jsxDEV)(RateButton, { onClick: handleRateClick, children: RATE_BUTTON_TEXT }, void 0, !1, {
    fileName: "app/components/PD/RatingReviews/AvgRating.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/PD/RatingReviews/AvgRating.tsx",
  lineNumber: 19,
  columnNumber: 3
}, this), AvgRating_default = AvgRatingInfo;

// app/components/PD/RatingReviews/ImageViewer/index.tsx
var import_react42 = require("react");

// app/components/PD/RatingReviews/ImageViewer/styled.ts
var import_styled84 = __toESM(require("@emotion/styled")), Overlay2 = import_styled84.default.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;

  .hide-overlay {
    z-index: 1;
    background-color: rgba(0, 0, 0, 0);
  }
`, ModalContainer = import_styled84.default.div`
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`, Header4 = import_styled84.default.div`
  background: #f7f7f7;
  padding: 12px 12px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #ddd;
`, Body = import_styled84.default.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  background: #000;
`, CloseButton2 = import_styled84.default.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 16px;
  position: relative;
  display: flex;
  top: 1px;
`, Title2 = import_styled84.default.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`, Slide = import_styled84.default.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`, ImageContainer = import_styled84.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
`, StyledImage = import_styled84.default.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

// app/shared/SwipeableContainer/index.tsx
var import_styled85 = __toESM(require("@emotion/styled")), import_react41 = require("react"), import_jsx_dev_runtime107 = require("react/jsx-dev-runtime"), SwipeContainer = import_styled85.default.div`
  display: flex;
  height: 100%;
  transition: transform 0.3s ease;
  transform: ${({ currentIndex, dragOffset }) => `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`};
`, SwipeableContainer = ({
  currentIndex,
  setCurrentIndex,
  totalItems,
  hasMore,
  loadMore,
  children
}) => {
  let [dragStart, setDragStart] = (0, import_react41.useState)(null), [dragOffset, setDragOffset] = (0, import_react41.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime107.jsxDEV)(
    SwipeContainer,
    {
      currentIndex,
      dragOffset,
      onTouchStart: (e) => {
        setDragStart(e.touches[0].clientX);
      },
      onTouchMove: (e) => {
        if (dragStart !== null) {
          let currentX = e.touches[0].clientX;
          setDragOffset(currentX - dragStart);
        }
      },
      onTouchEnd: () => {
        dragStart !== null && (dragOffset < -50 ? setCurrentIndex(
          onSwipeLeft2(currentIndex, totalItems, hasMore, loadMore)
        ) : dragOffset > 50 && setCurrentIndex(onSwipeRight2(currentIndex))), setDragStart(null), setDragOffset(0);
      },
      onMouseDown: (e) => {
        setDragStart(e.clientX);
      },
      onMouseMove: (e) => {
        if (dragStart !== null) {
          let currentX = e.clientX;
          setDragOffset(currentX - dragStart);
        }
      },
      onMouseUp: () => {
        dragStart !== null && (dragOffset < -50 ? setCurrentIndex(
          onSwipeLeft2(currentIndex, totalItems, hasMore, loadMore)
        ) : dragOffset > 50 && setCurrentIndex(onSwipeRight2(currentIndex))), setDragStart(null), setDragOffset(0);
      },
      onMouseLeave: () => {
        dragStart !== null && (dragOffset < -50 ? setCurrentIndex(
          onSwipeLeft2(currentIndex, totalItems, hasMore, loadMore)
        ) : dragOffset > 50 && setCurrentIndex(onSwipeRight2(currentIndex))), setDragStart(null), setDragOffset(0);
      },
      children
    },
    void 0,
    !1,
    {
      fileName: "app/shared/SwipeableContainer/index.tsx",
      lineNumber: 102,
      columnNumber: 5
    },
    this
  );
}, onSwipeRight2 = (activeIndex) => activeIndex > 0 ? activeIndex - 1 : activeIndex, onSwipeLeft2 = (activeIndex, totalItems, hasMore, loadMore) => activeIndex < totalItems - 1 ? activeIndex + 1 : (hasMore && loadMore && loadMore(), activeIndex), SwipeableContainer_default = SwipeableContainer;

// app/components/PD/RatingReviews/ImageViewer/Description.tsx
var import_styled86 = __toESM(require("@emotion/styled")), import_jsx_dev_runtime108 = require("react/jsx-dev-runtime"), Wrap = import_styled86.default.section`
  padding: 0 5px;
`, Title3 = import_styled86.default.h4`
  color: #ffffff;
  margin: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
`, Description2 = import_styled86.default.p`
  color: rgba(255, 255, 255, 0.72);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
`, Description_default = (props) => {
  let { title, description } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime108.jsxDEV)(Wrap, { children: [
    title && /* @__PURE__ */ (0, import_jsx_dev_runtime108.jsxDEV)(Title3, { children: [
      '"',
      title,
      '"'
    ] }, void 0, !0, {
      fileName: "app/components/PD/RatingReviews/ImageViewer/Description.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime108.jsxDEV)(Description2, { children: description }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ImageViewer/Description.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/ImageViewer/Description.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
};

// app/components/PD/RatingReviews/ImageViewer/Like.tsx
var import_styled87 = __toESM(require("@emotion/styled"));

// app/components/PD/RatingReviews/assets/likeSvg.tsx
var import_jsx_dev_runtime109 = require("react/jsx-dev-runtime"), LikeSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "12",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)("title", { children: "Like Icon" }, void 0, !1, {
        fileName: "app/components/PD/RatingReviews/assets/likeSvg.tsx",
        lineNumber: 9,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime109.jsxDEV)(
        "path",
        {
          fill: "#FFF",
          d: "M6.027 0a.287.287 0 0 0-.287.286V2.5L4.306 5.358v-.5a.287.287 0 0 0-.287-.286H.289a.291.291 0 0 0-.287.322l.86 6.857a.29.29 0 0 0 .287.25h2.87a.286.286 0 0 0 .287-.286v-.285h.331a.868.868 0 0 0 .816.571h5.452c.632 0 1.146-.51 1.147-1.143 0-.235-.075-.452-.196-.634.46-.16.768-.593.77-1.08 0-.28-.1-.534-.269-.732.333-.2.556-.567.556-.983 0-.28-.1-.534-.268-.732a1.146 1.146 0 0 0-.592-2.125H7.855c.175-.551.467-1.538.467-2C8.323 1.496 7.53 0 6.753 0h-.726zm.287.571h.44c.263 0 .994.995.994 2 0 .448-.4 1.738-.555 2.197a.284.284 0 0 0 .036.259.284.284 0 0 0 .233.116h4.59c.317 0 .575.257.575.572a.574.574 0 0 1-.575.57h-.286a.286.286 0 1 0 0 .573c.316 0 .573.256.573.57a.573.573 0 0 1-.573.572h-.287a.286.286 0 1 0 0 .572c.316 0 .573.257.573.571a.573.573 0 0 1-.573.571h-.574a.286.286 0 0 0 0 .572c.316 0 .574.257.574.571a.574.574 0 0 1-.574.572H5.453a.287.287 0 0 1-.286-.286.286.286 0 0 0-.287-.286h-.574V6h.144a.295.295 0 0 0 .26-.16l1.577-3.144a.265.265 0 0 0 .027-.124v-2zM.612 5.143h3.12v6.286H1.4L.61 5.142v.001z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/PD/RatingReviews/assets/likeSvg.tsx",
          lineNumber: 10,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/PD/RatingReviews/assets/likeSvg.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), likeSvg_default = LikeSvg;

// app/components/PD/RatingReviews/ImageViewer/Like.tsx
var import_jsx_dev_runtime110 = require("react/jsx-dev-runtime"), Wrap2 = import_styled87.default.section`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  margin-top: -1px;
`, LikeIcon = import_styled87.default.span`
  display: inline-block;
  font-weight: 600;
  color: rgb(232, 0, 113);
  text-transform: uppercase;
  line-height: 14px;
`, LikeTitle = import_styled87.default.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  padding: 5px 0px 5px 5px;
  color: rgb(255, 255, 255);
`, LikeCount = import_styled87.default.strong`
  margin-right: 5px;
`, Like_default = ({ count }) => count === 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime110.jsxDEV)(Wrap2, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime110.jsxDEV)(LikeIcon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime110.jsxDEV)(likeSvg_default, {}, void 0, !1, {
    fileName: "app/components/PD/RatingReviews/ImageViewer/Like.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/PD/RatingReviews/ImageViewer/Like.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime110.jsxDEV)(LikeTitle, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime110.jsxDEV)(LikeCount, { children: count }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ImageViewer/Like.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    PEOPLE_FOUND_HELPFUL_TEXT
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/ImageViewer/Like.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/PD/RatingReviews/ImageViewer/Like.tsx",
  lineNumber: 41,
  columnNumber: 5
}, this);

// app/components/PD/RatingReviews/ImageViewer/User.tsx
var import_styled88 = __toESM(require("@emotion/styled"));

// app/components/PD/RatingReviews/assets/proSvg.tsx
var import_jsx_dev_runtime111 = require("react/jsx-dev-runtime"), ProSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime111.jsxDEV)(
  "svg",
  {
    width: "21",
    height: "9",
    viewBox: "0 0 21 9",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime111.jsxDEV)(
        "rect",
        {
          width: "21",
          height: "9",
          rx: "3",
          fill: "white"
        },
        void 0,
        !1,
        {
          fileName: "app/components/PD/RatingReviews/assets/proSvg.tsx",
          lineNumber: 11,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime111.jsxDEV)(
        "path",
        {
          d: "M4.8212 7H5.47958V5.46591H6.37447C7.38654 5.46591 7.88725 4.8544 7.88725 4.04901C7.88725 3.24574 7.3908 2.63636 6.3766 2.63636H4.8212V7ZM5.47958 4.90767V3.20099H6.30629C6.95827 3.20099 7.22461 3.55469 7.22461 4.04901C7.22461 4.54332 6.95827 4.90767 6.31481 4.90767H5.47958ZM9.15909 7H9.81747V5.34872H10.7124C10.7273 5.34872 10.7401 5.34872 10.755 5.34872L11.6413 7H12.3913L11.424 5.23366C11.9588 5.03551 12.2251 4.5902 12.2251 4.00426C12.2251 3.20099 11.7266 2.63636 10.7145 2.63636H9.15909V7ZM9.81747 4.78196V3.20099H10.6442C11.294 3.20099 11.5625 3.50994 11.5625 4.00426C11.5625 4.49645 11.294 4.78196 10.6527 4.78196H9.81747ZM17.3168 4.81818C17.3168 3.42259 16.4815 2.5767 15.3523 2.5767C14.2188 2.5767 13.3857 3.42259 13.3857 4.81818C13.3857 6.21165 14.2188 7.05966 15.3523 7.05966C16.4815 7.05966 17.3168 6.21378 17.3168 4.81818ZM16.6648 4.81818C16.6648 5.88139 16.1023 6.45881 15.3523 6.45881C14.6001 6.45881 14.0398 5.88139 14.0398 4.81818C14.0398 3.75497 14.6001 3.17756 15.3523 3.17756C16.1023 3.17756 16.6648 3.75497 16.6648 4.81818Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/components/PD/RatingReviews/assets/proSvg.tsx",
          lineNumber: 17,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/PD/RatingReviews/assets/proSvg.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), proSvg_default = ProSvg;

// app/components/PD/RatingReviews/assets/verifiedSvg.tsx
var import_jsx_dev_runtime112 = require("react/jsx-dev-runtime"), VerifiedSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "13",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)("title", { children: "right icon" }, void 0, !1, {
        fileName: "app/components/PD/RatingReviews/assets/verifiedSvg.tsx",
        lineNumber: 9,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(
        "g",
        {
          fill: "none",
          fillRule: "evenodd",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(
              "circle",
              {
                cx: "6.5",
                cy: "6.5",
                r: "6.5",
                fill: "#FFD3E4"
              },
              void 0,
              !1,
              {
                fileName: "app/components/PD/RatingReviews/assets/verifiedSvg.tsx",
                lineNumber: 14,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime112.jsxDEV)(
              "path",
              {
                fill: "#FF5295",
                fillRule: "nonzero",
                stroke: "#FFD3E4",
                strokeWidth: ".3",
                d: "M9.087 3.852L5.547 7.36l-.21.003-1.37-1.294-1.024 1.074 2.525 2.385 4.67-4.627-1.051-1.05z"
              },
              void 0,
              !1,
              {
                fileName: "app/components/PD/RatingReviews/assets/verifiedSvg.tsx",
                lineNumber: 20,
                columnNumber: 7
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/PD/RatingReviews/assets/verifiedSvg.tsx",
          lineNumber: 10,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/PD/RatingReviews/assets/verifiedSvg.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), verifiedSvg_default = VerifiedSvg;

// app/components/PD/RatingReviews/ImageViewer/User.tsx
var import_jsx_dev_runtime113 = require("react/jsx-dev-runtime"), Wrap3 = import_styled88.default.div`
  display: inline-block;
  width: 100%;
`, UserName = import_styled88.default.span`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.subTitleMedium;
}};
  display: block;
  color: ${(props) => props.color || "#fff"};
  margin-top: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20;
}};
`, Label = import_styled88.default.span`
  display: flex;
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodySmall;
}};
  margin-left: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20;
}};
  margin-bottom: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing10;
}};
`, UserType = import_styled88.default.span`
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.1px;
  color: ${(props) => props.color || "#fff"};
  display: flex;
  align-items: center;
  vertical-align: middle;
  i {
    margin-right: 4px;
    svg {
      background: white;
      border-radius: 50%;
    }
  }
`, User = ({
  name,
  isBuyer,
  isProUser,
  customText,
  color
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)(Wrap3, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)(UserName, { color, children: name }, void 0, !1, {
    fileName: "app/components/PD/RatingReviews/ImageViewer/User.tsx",
    lineNumber: 68,
    columnNumber: 7
  }, this),
  (isBuyer || isProUser) && /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)(UserType, { color, children: [
    isProUser ? /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)(proSvg_default, {}, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ImageViewer/User.tsx",
      lineNumber: 60,
      columnNumber: 5
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)("i", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)(verifiedSvg_default, {}, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ImageViewer/User.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ImageViewer/User.tsx",
      lineNumber: 62,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime113.jsxDEV)(Label, { children: customText }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ImageViewer/User.tsx",
      lineNumber: 72,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/ImageViewer/User.tsx",
    lineNumber: 70,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/PD/RatingReviews/ImageViewer/User.tsx",
  lineNumber: 67,
  columnNumber: 5
}, this), User_default = User;

// app/components/PD/RatingReviews/ImageViewer/Rating.tsx
var import_styled89 = __toESM(require("@emotion/styled"));

// app/components/PD/RatingReviews/assets/ratingSvg.tsx
var import_jsx_dev_runtime114 = require("react/jsx-dev-runtime"), RatingSvg = ({ color = "#FFF" }) => /* @__PURE__ */ (0, import_jsx_dev_runtime114.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "14",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime114.jsxDEV)("title", { children: "star" }, void 0, !1, {
        fileName: "app/components/PD/RatingReviews/assets/ratingSvg.tsx",
        lineNumber: 12,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime114.jsxDEV)(
        "path",
        {
          fill: color,
          d: "M2.555 11.878c-.05 0-.1-.025-.15-.05a.277.277 0 01-.1-.275l1.098-4.092L.109 4.79c-.1-.05-.125-.175-.1-.275a.24.24 0 01.225-.174l4.242-.225L5.998.15c.05-.075.15-.15.25-.15s.2.075.225.15l1.522 3.967 4.242.225c.1 0 .2.075.225.174.025.1 0 .2-.075.275L9.093 7.46l1.098 4.092c.025.1 0 .2-.1.275-.075.05-.2.075-.274 0L6.248 9.532l-3.569 2.296c-.05.05-.075.05-.124.05z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/PD/RatingReviews/assets/ratingSvg.tsx",
          lineNumber: 13,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/PD/RatingReviews/assets/ratingSvg.tsx",
    lineNumber: 7,
    columnNumber: 3
  },
  this
), ratingSvg_default = RatingSvg;

// app/components/PD/RatingReviews/ImageViewer/Rating.tsx
var import_jsx_dev_runtime115 = require("react/jsx-dev-runtime"), Wrap4 = import_styled89.default.section`
  margin: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
`, Rating3 = import_styled89.default.span`
  display: inline-block;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  padding: 3px 5px;
`, StarIcon = import_styled89.default.i`
  margin-left: 4px;
  bottom: 2px;
  position: relative;
  svg {
    display: inline-block;
    vertical-align: bottom;
  }
`, Variant = import_styled89.default.span`
  display: inline-block;
  margin-left: 5px;
  padding-left: 10px;
  color: #ffffff;
  border-left: 1px solid #eeeeee;
  margin-bottom: -5px;
`, Img = import_styled89.default.img`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  float: left;
`, CreatedOn = import_styled89.default.span`
  display: inline-block;
  margin-left: 10px;
  padding-left: 10px;
  float: right;
  color: rgba(255, 255, 255, 0.72);
`, RatingInfo = ({
  rating,
  variantName,
  variantIcon,
  createdOn,
  isShade
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime115.jsxDEV)(Wrap4, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime115.jsxDEV)(Rating3, { children: [
    rating,
    /* @__PURE__ */ (0, import_jsx_dev_runtime115.jsxDEV)(StarIcon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime115.jsxDEV)(ratingSvg_default, {}, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ImageViewer/Rating.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ImageViewer/Rating.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/ImageViewer/Rating.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this),
  isShade && /* @__PURE__ */ (0, import_jsx_dev_runtime115.jsxDEV)(Variant, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime115.jsxDEV)(
      Img,
      {
        src: variantIcon,
        alt: variantName,
        "data-loading": "lazy"
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/RatingReviews/ImageViewer/Rating.tsx",
        lineNumber: 75,
        columnNumber: 9
      },
      this
    ),
    variantName
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/ImageViewer/Rating.tsx",
    lineNumber: 74,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime115.jsxDEV)(CreatedOn, { children: createdOn }, void 0, !1, {
    fileName: "app/components/PD/RatingReviews/ImageViewer/Rating.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/PD/RatingReviews/ImageViewer/Rating.tsx",
  lineNumber: 66,
  columnNumber: 3
}, this), Rating_default = RatingInfo;

// app/components/PD/RatingReviews/ImageViewer/Preview.tsx
var import_jsx_dev_runtime116 = require("react/jsx-dev-runtime"), Preview = ({ review, imageUrl, product }) => {
  let { options, variantType } = product || {}, { variantId } = review || {}, isShade = variantType === SHADE, variant = isShade && options && options.find((option) => parseInt(option == null ? void 0 : option.childId, 10) === variantId), variantName = variant && variant.variantName, variantIcon = variant && variant.shadeImage;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime116.jsxDEV)(Slide, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime116.jsxDEV)(ImageContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime116.jsxDEV)(
      StyledImage,
      {
        src: imageUrl.src,
        srcSet: imageUrl.srcSet,
        "data-loading": "lazy",
        alt: "review-img"
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/RatingReviews/ImageViewer/Preview.tsx",
        lineNumber: 29,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ImageViewer/Preview.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime116.jsxDEV)(ReviewInfoContainer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime116.jsxDEV)(
        Rating_default,
        {
          rating: review.rating,
          variantIcon: variantIcon || "",
          variantName: variantName || "",
          createdOn: review.createdOnText,
          isShade
        },
        void 0,
        !1,
        {
          fileName: "app/components/PD/RatingReviews/ImageViewer/Preview.tsx",
          lineNumber: 37,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime116.jsxDEV)(
        Description_default,
        {
          title: review.title,
          description: review.description
        },
        void 0,
        !1,
        {
          fileName: "app/components/PD/RatingReviews/ImageViewer/Preview.tsx",
          lineNumber: 44,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime116.jsxDEV)(UserContainer, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime116.jsxDEV)(UserInfo, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime116.jsxDEV)(
          User_default,
          {
            name: review.name,
            isBuyer: review.isBuyer,
            isProUser: review.isProUser,
            customText: (review == null ? void 0 : review.label) || DEFAULT_VERIFIED_BUYER
          },
          void 0,
          !1,
          {
            fileName: "app/components/PD/RatingReviews/ImageViewer/Preview.tsx",
            lineNumber: 50,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/PD/RatingReviews/ImageViewer/Preview.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime116.jsxDEV)(LikeInfoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime116.jsxDEV)(
          Like_default,
          {
            count: review.likeCount,
            isLiked: review.isLikedByUser
          },
          void 0,
          !1,
          {
            fileName: "app/components/PD/RatingReviews/ImageViewer/Preview.tsx",
            lineNumber: 58,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/PD/RatingReviews/ImageViewer/Preview.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/PD/RatingReviews/ImageViewer/Preview.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/PD/RatingReviews/ImageViewer/Preview.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/ImageViewer/Preview.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}, Preview_default = Preview;

// app/components/PD/RatingReviews/ImageViewer/index.tsx
var import_jsx_dev_runtime117 = require("@emotion/react/jsx-dev-runtime"), ImageViewer = ({
  activeIndex,
  imagesWithInfo,
  onClose,
  product,
  hasMore,
  loadMore
}) => {
  let [currentIndex, setCurrentIndex] = (0, import_react42.useState)(activeIndex), containerRef = (0, import_react42.useRef)(null), validateImage = (index2, reviewsLength) => {
    let imagesLength = reviewsLength || 0, isValid = !1;
    return index2 > -1 && index2 < imagesLength && (isValid = !0), isValid;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime117.jsxDEV)(Overlay2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime117.jsxDEV)(ModalContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime117.jsxDEV)(Header4, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime117.jsxDEV)(CloseButton2, { onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime117.jsxDEV)(BackArrow_default, {}, void 0, !1, {
        fileName: "app/components/PD/RatingReviews/ImageViewer/index.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/PD/RatingReviews/ImageViewer/index.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime117.jsxDEV)(Title2, { children: PHOTOS_FROM_CUSTOMERS_TEXT }, void 0, !1, {
        fileName: "app/components/PD/RatingReviews/ImageViewer/index.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/PD/RatingReviews/ImageViewer/index.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime117.jsxDEV)(Body, { ref: containerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime117.jsxDEV)(
      SwipeableContainer_default,
      {
        currentIndex,
        setCurrentIndex: (index2) => {
          validateImage(index2, imagesWithInfo.length) && setCurrentIndex(index2);
        },
        totalItems: imagesWithInfo.length,
        hasMore,
        loadMore,
        children: imagesWithInfo.map((slide, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime117.jsxDEV)(
          Preview_default,
          {
            imageUrl: slide.imageUrl,
            review: slide.review,
            product
          },
          index2,
          !1,
          {
            fileName: "app/components/PD/RatingReviews/ImageViewer/index.tsx",
            lineNumber: 62,
            columnNumber: 15
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/RatingReviews/ImageViewer/index.tsx",
        lineNumber: 54,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ImageViewer/index.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/ImageViewer/index.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/PD/RatingReviews/ImageViewer/index.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}, ImageViewer_default = ImageViewer;

// app/components/PD/RatingReviews/NoReview.tsx
var import_styled93 = __toESM(require("@emotion/styled"));
var import_jsx_dev_runtime118 = require("react/jsx-dev-runtime"), Wrapper6 = import_styled93.default.div`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyMedium;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
  background-color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface;
}};
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}};
`, RatingButton = import_styled93.default.button`
  background: none;
  border: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.16);
}};
  border-radius: 4px;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.buttonSmall;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse;
}};
  margin-top: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60;
}};
  margin-bottom: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60;
}};
  text-transform: capitalize;
  display: block;
  width: 100%;
`, ProductName2 = import_styled93.default.strong`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.subTitleMedium;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
`, NoReview = ({
  productName,
  handleRateClick,
  text,
  buttonTitle
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime118.jsxDEV)(Wrapper6, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime118.jsxDEV)(import_jsx_dev_runtime118.Fragment, { children: [
    RATE_TEXT,
    " ",
    text,
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime118.jsxDEV)(ProductName2, { children: productName }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/NoReview.tsx",
      lineNumber: 48,
      columnNumber: 26
    }, this),
    " ",
    RATE_SUB_TEXT
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/NoReview.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime118.jsxDEV)(RatingButton, { onClick: handleRateClick, children: buttonTitle }, void 0, !1, {
    fileName: "app/components/PD/RatingReviews/NoReview.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/PD/RatingReviews/NoReview.tsx",
  lineNumber: 46,
  columnNumber: 3
}, this), NoReview_default = NoReview;

// app/components/PD/RatingReviews/assets/ThumbsUp.tsx
var import_jsx_dev_runtime119 = require("react/jsx-dev-runtime"), ThumbsUp = ({ color = "#FC2779" }) => /* @__PURE__ */ (0, import_jsx_dev_runtime119.jsxDEV)(
  "svg",
  {
    width: "22",
    height: "21",
    viewBox: "0 0 22 21",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime119.jsxDEV)("title", { children: "thumb" }, void 0, !1, {
        fileName: "app/components/PD/RatingReviews/assets/ThumbsUp.tsx",
        lineNumber: 13,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime119.jsxDEV)(
        "g",
        {
          stroke: color,
          strokeWidth: ".8",
          fill: "none",
          fillRule: "evenodd",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime119.jsxDEV)("path", { d: "M.934 9.09l5.361-.085a.3.3 0 01.305.3v10.87a.3.3 0 01-.3.3H2.283a.3.3 0 01-.298-.262L.641 9.428a.3.3 0 01.293-.337z" }, void 0, !1, {
              fileName: "app/components/PD/RatingReviews/assets/ThumbsUp.tsx",
              lineNumber: 20,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime119.jsxDEV)(
              "path",
              {
                d: "M6.6 11.883l3.377-6.799V1.468c1.039-.36 1.987.153 2.845 1.538.859 1.385.698 3.383-.482 5.994h7.897c.863-.003 1.294.429 1.294 1.294 0 .866-.657 1.396-1.973 1.59.99-.084 1.486.377 1.486 1.382 0 1.006-.72 1.52-2.162 1.543 1.064.045 1.596.46 1.596 1.243 0 .784-.78 1.308-2.338 1.572.942.125 1.413.6 1.413 1.425 0 .825-.475 1.3-1.427 1.427-5.74-.087-8.889-.13-9.444-.13-.321 0-.321-.961-.803-.961H6.595l.005-7.502z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              },
              void 0,
              !1,
              {
                fileName: "app/components/PD/RatingReviews/assets/ThumbsUp.tsx",
                lineNumber: 21,
                columnNumber: 7
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/PD/RatingReviews/assets/ThumbsUp.tsx",
          lineNumber: 14,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/PD/RatingReviews/assets/ThumbsUp.tsx",
    lineNumber: 7,
    columnNumber: 3
  },
  this
), ThumbsUp_default = ThumbsUp;

// app/components/PD/RatingReviews/ReviewCard/styled.ts
var import_styled94 = __toESM(require("@emotion/styled"));
var ReviewContainer = import_styled94.default.div`
  background: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface;
}};
  padding: ${({ theme: { spacing: spacing2 } }) => `${spacing2 == null ? void 0 : spacing2.spacing60} ${spacing2 == null ? void 0 : spacing2.spacing80}`};
`, UserInfo2 = import_styled94.default.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing: spacing2 } }) => `${spacing2 == null ? void 0 : spacing2.spacing40}`};
  margin-bottom: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60;
}};
  padding: ${({ theme: { spacing: spacing2 } }) => `${spacing2 == null ? void 0 : spacing2.spacing80} ${spacing2 == null ? void 0 : spacing2.spacing0}`};
`, Avatar = import_styled94.default.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`, Rating4 = import_styled94.default.div`
  display: flex;
  align-items: center;
  background: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.positive;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface;
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.buttonMedium;
}};
  padding: ${({ theme: { spacing: spacing2 } }) => `${spacing2 == null ? void 0 : spacing2.spacing20}`};
  border-radius: 2px;
  width: fit-content;
  margin: ${({ theme: { spacing: spacing2 } }) => `${spacing2 == null ? void 0 : spacing2.spacing60} ${spacing2 == null ? void 0 : spacing2.spacing0}`};
`, Shade = import_styled94.default.div`
  display: inline-block;
  margin-top: 0.25rem;
  color: rgba(0, 19, 37, 0.72);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
`, ShadeColor = import_styled94.default.img`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: -2px;
`, ReviewText = import_styled94.default.div`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.subTitleSmall;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
  padding-bottom: ${({ theme: { spacing: spacing2 } }) => `${spacing2 == null ? void 0 : spacing2.spacing40}`};
  margin-top: ${({ theme: { spacing: spacing2 } }) => `${spacing2 == null ? void 0 : spacing2.spacing40}`};
`, Wrap5 = import_styled94.default.div`
  display: flex;
  font-size: 14px;
  cursor: pointer;
  color: rgb(102, 102, 102);
  line-height: 24px;
  margin: 0px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  padding: 0.5rem 1rem;
  padding-left: 0px;
  white-space: nowrap;
  overflow: auto hidden;
  scrollbar-width: none;
  width: 100%;
`, ReviewImage = import_styled94.default.img`
  width: 100%;
  height: 100%;
`, FeedbackSection = import_styled94.default.div`
  display: flex;
  align-items: center;
  border-top: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.08);
}};
  border-bottom: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.08);
}};
  font-size: 14px;
  justify-content: space-between;
`, HelpfulText = import_styled94.default.strong`
  cursor: pointer;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10;
}};
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.labelMedium;
}};
`, Span = import_styled94.default.span`
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: rgba(0, 19, 37, 0.64);
`, ShadeName = import_styled94.default.span`
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: rgba(0, 19, 37, 0.92);
`, ReviewDesc = import_styled94.default.p`
  cursor: pointer;
  box-sizing: border-box;
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodySmall;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
`, Img2 = import_styled94.default.div`
  font-size: 14px;
  overflow: hidden;
  width: 54px;
  height: 54px;
  vertical-align: top;
  cursor: pointer;
  margin: 0px 0.5rem 0px 0px;
`, Div = import_styled94.default.div`
  display: flex;
  align-items: center;
  padding: ${({ theme: { spacing: spacing2 } }) => `${spacing2 == null ? void 0 : spacing2.spacing40} ${spacing2 == null ? void 0 : spacing2.spacing80} ${spacing2 == null ? void 0 : spacing2.spacing40} 0px`};
`, Section = import_styled94.default.div`
  display: flex;
  align-items: center;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.subTitleSmall;
}};
  padding: 0.5rem 0px 0.5rem 1rem;
  border-left: 1px solid
    ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.08);
}};
`, PeopleCount = import_styled94.default.span`
  cursor: pointer;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.64);
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.subTitleSmall;
}};
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  margin-right: 0.25rem;
`, VariantName = import_styled94.default.div`
  margin-top: 0.5rem;
  color: black;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
`, ReviewTitle = import_styled94.default.div`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.buttonMedium;
}};
  text-size-adjust: 100%;
  cursor: pointer;
  margin: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0;
}};
  box-sizing: border-box;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
`;

// app/components/PD/RatingReviews/ReviewCard/Feedback.tsx
var import_jsx_dev_runtime120 = require("@emotion/react/jsx-dev-runtime");
function Feedback({
  likeCount,
  handleLikeClick,
  isLikedByUser,
  reviewId
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime120.jsxDEV)(FeedbackSection, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime120.jsxDEV)(Div, { onClick: () => handleLikeClick(reviewId, isLikedByUser, likeCount), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime120.jsxDEV)("i", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime120.jsxDEV)(ThumbsUp_default, { color: "black" }, void 0, !1, {
        fileName: "app/components/PD/RatingReviews/ReviewCard/Feedback.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/PD/RatingReviews/ReviewCard/Feedback.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      " ",
      "\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime120.jsxDEV)(HelpfulText, { children: HELPFUL }, void 0, !1, {
        fileName: "app/components/PD/RatingReviews/ReviewCard/Feedback.tsx",
        lineNumber: 35,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/PD/RatingReviews/ReviewCard/Feedback.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    !!likeCount && /* @__PURE__ */ (0, import_jsx_dev_runtime120.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime120.jsxDEV)(PeopleCount, { children: [
        likeCount,
        " "
      ] }, void 0, !0, {
        fileName: "app/components/PD/RatingReviews/ReviewCard/Feedback.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      " \xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime120.jsxDEV)("span", { children: PEOPLE_FOUND_HELPFUL_TEXT }, void 0, !1, {
        fileName: "app/components/PD/RatingReviews/ReviewCard/Feedback.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/PD/RatingReviews/ReviewCard/Feedback.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/ReviewCard/Feedback.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/components/PD/RatingReviews/ReviewCard/ReviewImages.tsx
var import_jsx_dev_runtime121 = require("@emotion/react/jsx-dev-runtime");
function ReviewImages({
  images,
  handleImageClick
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime121.jsxDEV)(Wrap5, { children: images && images.map((img, index2) => {
    let { src, srcSet } = scaleImage({ url: img });
    return /* @__PURE__ */ (0, import_jsx_dev_runtime121.jsxDEV)(Img2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime121.jsxDEV)(
      ReviewImage,
      {
        src,
        srcSet,
        alt: "Review",
        "data-loading": "lazy",
        onClick: () => handleImageClick(index2)
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/RatingReviews/ReviewCard/ReviewImages.tsx",
        lineNumber: 22,
        columnNumber: 15
      },
      this
    ) }, index2, !1, {
      fileName: "app/components/PD/RatingReviews/ReviewCard/ReviewImages.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this);
  }) }, void 0, !1, {
    fileName: "app/components/PD/RatingReviews/ReviewCard/ReviewImages.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/components/PD/RatingReviews/ReviewCard/Shade.tsx
var import_jsx_dev_runtime122 = require("@emotion/react/jsx-dev-runtime");
function Shade2({ shadeImage, variantName }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime122.jsxDEV)(Shade, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime122.jsxDEV)(Span, { children: SHADE_TEXT }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ReviewCard/Shade.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime122.jsxDEV)(
      ShadeColor,
      {
        src: shadeImage,
        alt: variantName,
        "data-loading": "lazy"
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/RatingReviews/ReviewCard/Shade.tsx",
        lineNumber: 14,
        columnNumber: 7
      },
      this
    ),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime122.jsxDEV)(ShadeName, { children: variantName }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ReviewCard/Shade.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/ReviewCard/Shade.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/PD/RatingReviews/ReviewCard/index.tsx
var import_jsx_dev_runtime123 = require("@emotion/react/jsx-dev-runtime");
function ReviewCard(props) {
  let { review, product, handleImageClick, handleLikeClick } = props, { productType = "", variantType = "", options } = product || {}, isShade = variantType === SHADE, {
    description,
    images,
    isBuyer,
    likeCount,
    name,
    profilePic,
    rating,
    title,
    isProUser,
    label,
    variantId,
    isLikedByUser,
    id
  } = review || {}, selectedVariant = options && options.find((option) => parseInt(option == null ? void 0 : option.childId, 10) === variantId);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime123.jsxDEV)(ReviewContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime123.jsxDEV)(ReviewTitle, { children: MOST_USEFUL_REVIEW_TEXT }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ReviewCard/index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime123.jsxDEV)(UserInfo2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime123.jsxDEV)(
        Avatar,
        {
          src: profilePic,
          alt: name,
          "data-loading": "lazy"
        },
        void 0,
        !1,
        {
          fileName: "app/components/PD/RatingReviews/ReviewCard/index.tsx",
          lineNumber: 46,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime123.jsxDEV)(
        User_default,
        {
          color: "black",
          customText: label,
          isBuyer,
          name,
          isProUser
        },
        void 0,
        !1,
        {
          fileName: "app/components/PD/RatingReviews/ReviewCard/index.tsx",
          lineNumber: 51,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/PD/RatingReviews/ReviewCard/index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime123.jsxDEV)(Rating4, { children: [
      rating,
      "\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime123.jsxDEV)(ratingSvg_default, {}, void 0, !1, {
        fileName: "app/components/PD/RatingReviews/ReviewCard/index.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/PD/RatingReviews/ReviewCard/index.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    productType && productType === "bundle" && selectedVariant ? /* @__PURE__ */ (0, import_jsx_dev_runtime123.jsxDEV)(VariantName, { children: selectedVariant == null ? void 0 : selectedVariant.variantName }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ReviewCard/index.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) : null,
    isShade && selectedVariant && /* @__PURE__ */ (0, import_jsx_dev_runtime123.jsxDEV)(
      Shade2,
      {
        shadeImage: selectedVariant == null ? void 0 : selectedVariant.shadeImage,
        variantName: selectedVariant == null ? void 0 : selectedVariant.variantName
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/RatingReviews/ReviewCard/index.tsx",
        lineNumber: 68,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime123.jsxDEV)(ReviewText, { children: title }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ReviewCard/index.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime123.jsxDEV)(ReviewDesc, { children: description }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ReviewCard/index.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime123.jsxDEV)(
      ReviewImages,
      {
        images,
        handleImageClick
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/RatingReviews/ReviewCard/index.tsx",
        lineNumber: 75,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime123.jsxDEV)(
      Feedback,
      {
        likeCount,
        handleLikeClick,
        isLikedByUser,
        reviewId: id
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/RatingReviews/ReviewCard/index.tsx",
        lineNumber: 79,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/ReviewCard/index.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/components/PD/RatingReviews/ReviewPhotos.tsx
var import_react43 = require("react");

// app/components/PD/RatingReviews/helper.ts
var getUpdatedUrl = ({
  url,
  slug,
  parentId,
  childId,
  source
}) => (slug && (url = url.replace("{slug}", slug)), parentId && (url = url.replace("{id}", parentId)), childId && (url = url.replace("{childId}", childId)), source && (url = url.replace("{trackingSource}", source)), url);

// app/components/PD/RatingReviews/ReviewPhotos.tsx
var import_jsx_dev_runtime124 = require("react/jsx-dev-runtime"), ReviewPhotos = (props) => {
  let { product } = props, [imagesData, setImagesData] = (0, import_react43.useState)({ images: [], imagesWithInfo: [], totalImagesAvailable: 0 }), [showImageModal, setShowImageModal] = (0, import_react43.useState)(!1), [activeIndex, setActiveIndex] = (0, import_react43.useState)(0), { fetcher } = useFetcherHandler({
    onSuccess: (data) => {
      var _a2, _b, _c;
      setImagesData({
        images: ((_a2 = data == null ? void 0 : data.response) == null ? void 0 : _a2.images) || [],
        imagesWithInfo: ((_b = data == null ? void 0 : data.response) == null ? void 0 : _b.imagesWithInfo) || [],
        totalImagesAvailable: ((_c = data == null ? void 0 : data.response) == null ? void 0 : _c.totalImagesAvailable) || 0
      });
    },
    onError: () => {
    },
    successHandler: (data) => data.status || !1
  });
  (0, import_react43.useEffect)(() => {
    let queryParams = {
      domain: PLATFORM2.beauty,
      productId: product == null ? void 0 : product.id,
      size: 20,
      source: "react"
    }, queryString = queryStringFromParams(queryParams);
    fetcher.load(ACTION_ROUTES.productReviewImages + queryString);
  }, [product.id]);
  let trimmedImageList = imagesData.images.slice(0, 9), trackLength = trimmedImageList.length, renderRemainingItems = (index2, totalImagesAvailable) => index2 === trackLength - 1 && totalImagesAvailable > trackLength ? /* @__PURE__ */ (0, import_jsx_dev_runtime124.jsxDEV)(RemainingItems, { children: [
    "+ ",
    totalImagesAvailable - trackLength,
    /* @__PURE__ */ (0, import_jsx_dev_runtime124.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ReviewPhotos.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this),
    MORE
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/ReviewPhotos.tsx",
    lineNumber: 63,
    columnNumber: 9
  }, this) : null, handleImageClick = (index2) => {
    index2 === trackLength - 1 && imagesData.totalImagesAvailable > trackLength ? handleShowMoreImages() : (setShowImageModal(!0), setActiveIndex(index2));
  }, handleShowMoreImages = () => {
    let { slug: parentProductPageSlug = "", parentId } = product, [productSlug] = parentProductPageSlug.split("/");
    window.location.href = getUpdatedUrl({
      url: REVIEW_IMAGES_PAGE,
      slug: productSlug,
      parentId,
      childId: parentId
    });
  }, loadMore = () => {
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime124.jsxDEV)(import_jsx_dev_runtime124.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime124.jsxDEV)(PhotoContainer, { children: trimmedImageList.map((image, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime124.jsxDEV)(
      Container6,
      {
        onClick: () => handleImageClick(index2),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime124.jsxDEV)(
            PhotoThumbnail,
            {
              src: image == null ? void 0 : image.url.src,
              srcSet: image == null ? void 0 : image.url.srcSet,
              alt: `Review ${index2}`,
              "data-loading": "lazy"
            },
            void 0,
            !1,
            {
              fileName: "app/components/PD/RatingReviews/ReviewPhotos.tsx",
              lineNumber: 107,
              columnNumber: 13
            },
            this
          ),
          renderRemainingItems(index2, imagesData.totalImagesAvailable)
        ]
      },
      index2,
      !0,
      {
        fileName: "app/components/PD/RatingReviews/ReviewPhotos.tsx",
        lineNumber: 103,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/PD/RatingReviews/ReviewPhotos.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    showImageModal && /* @__PURE__ */ (0, import_jsx_dev_runtime124.jsxDEV)(
      ImageViewer_default,
      {
        activeIndex,
        onClose: () => setShowImageModal(!1),
        imagesWithInfo: imagesData.imagesWithInfo,
        product,
        hasMore: imagesData.totalImagesAvailable > trackLength,
        loadMore
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/RatingReviews/ReviewPhotos.tsx",
        lineNumber: 118,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/PD/RatingReviews/ReviewPhotos.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}, ReviewPhotos_default = ReviewPhotos;

// app/components/PD/RatingReviews/transformer.ts
var transformReviewImagesResponse = (apiResponseData) => {
  if (!apiResponseData)
    throw new Error("No data in apiResponseData");
  if (typeof apiResponseData != "object" || Array.isArray(apiResponseData))
    throw new Error('"apiResponseData" should be an object');
  let {
    total: totalImagesAvailable = 0,
    reviewImages: imageList = [],
    reviewData,
    pageKey
  } = apiResponseData, transformedImages = [], transformedImagesWithInfo = [], nextPageKey = pageKey || "";
  return imageList.forEach((imageItem, index2) => {
    let { reviewId, imageUrl } = imageItem, reviewInfo = reviewData[reviewId];
    if (reviewInfo) {
      let {
        childId: variantId,
        title = "",
        description,
        name = "",
        createdOn,
        likeCount = 0,
        rating = 0,
        isBuyer = !1,
        createdOnText = "",
        // FIXME: This is not coming from API
        proUser,
        label
      } = reviewInfo, imageInfo = {
        url: scaleImage({ url: imageUrl, width: 150, height: 150 })
      };
      transformedImages.push({
        ...imageInfo,
        id: `${reviewId}-${index2}${nextPageKey ? `-${nextPageKey}` : ""}`
      }), transformedImagesWithInfo.push({
        imageUrl: scaleImage({ url: imageUrl, width: 500 }),
        review: {
          variantId,
          title,
          description,
          name,
          createdOn,
          likeCount,
          rating,
          isBuyer,
          id: reviewId,
          isLikedByUser: !1,
          profilePic: "",
          createdOnText,
          isProUser: proUser,
          label
        }
      });
    }
  }), {
    totalImagesAvailable,
    images: transformedImages,
    imagesWithInfo: transformedImagesWithInfo,
    nextPageKey
  };
}, getReviewImagesData = (review) => {
  let { images = [] } = review || {}, reviews = [];
  return images.map((img) => {
    let reviewData = {
      review,
      imageUrl: scaleImage({ url: img })
    };
    reviews.push(reviewData);
  }), reviews;
};

// app/components/PD/RatingReviews/index.tsx
var import_jsx_dev_runtime125 = require("react/jsx-dev-runtime");
function RatingReviews(props) {
  let { product, currSkuData } = props, { rating, ratingCount, reviewCount, name, topReviews } = product || {}, { childId } = currSkuData || {}, [showImageModal, setShowImageModal] = (0, import_react44.useState)(!1), [activeIndex, setActiveIndex] = (0, import_react44.useState)(0), isLoggedIn = useIsLoggedIn(), reviews = topReviews || [], handleRateClick = () => {
    if (!isLoggedIn) {
      redirectAuthPage();
      return;
    }
    window.location.href = getWriteReviewPageUrl(product.id, childId);
  }, handleImageClick = (index2) => {
    setShowImageModal(!0), setActiveIndex(index2);
  }, handleLikeClick = (reviewId, isLikedByUser, likeCount) => {
    if (!isLoggedIn) {
      redirectAuthPage();
      return;
    }
  }, handleAllReviewsClick = () => {
    var _a2;
    let slug = ((_a2 = product.slug) == null ? void 0 : _a2.split("/")[0]) || "";
    window.location.href = getAllReviewUrl(slug, product.id, childId);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime125.jsxDEV)(import_jsx_dev_runtime125.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime125.jsxDEV)(
    Accordion_default,
    {
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime125.jsxDEV)(EmptyStar_default, {}, void 0, !1, {
        fileName: "app/components/PD/RatingReviews/index.tsx",
        lineNumber: 68,
        columnNumber: 15
      }, this),
      keyValue: "ratingAndReviews",
      subTitle: ratingCount ? `${ratingCount} ${VERIFIED_RATINGS_TEXT}` : "",
      title: /* @__PURE__ */ (0, import_jsx_dev_runtime125.jsxDEV)(import_jsx_dev_runtime125.Fragment, { children: [
        RATING_REVIEWS_TITLE,
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime125.jsxDEV)(import_jsx_dev_runtime125.Fragment, { children: !!rating && /* @__PURE__ */ (0, import_jsx_dev_runtime125.jsxDEV)(Rating2, { children: `${rating}${RATING_SUFFIX}` }, void 0, !1, {
          fileName: "app/components/PD/RatingReviews/index.tsx",
          lineNumber: 74,
          columnNumber: 28
        }, this) }, void 0, !1, {
          fileName: "app/components/PD/RatingReviews/index.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/PD/RatingReviews/index.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      children: [
        !ratingCount && /* @__PURE__ */ (0, import_jsx_dev_runtime125.jsxDEV)(
          NoReview_default,
          {
            productName: name,
            handleRateClick,
            text: RATE,
            buttonTitle: RATE_PRODUCT
          },
          void 0,
          !1,
          {
            fileName: "app/components/PD/RatingReviews/index.tsx",
            lineNumber: 79,
            columnNumber: 11
          },
          this
        ),
        !!ratingCount && /* @__PURE__ */ (0, import_jsx_dev_runtime125.jsxDEV)(import_jsx_dev_runtime125.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime125.jsxDEV)(
            AvgRating_default,
            {
              avgRating: rating,
              ratingCount,
              handleRateClick
            },
            void 0,
            !1,
            {
              fileName: "app/components/PD/RatingReviews/index.tsx",
              lineNumber: 88,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime125.jsxDEV)(ReviewPhotos_default, { product }, void 0, !1, {
            fileName: "app/components/PD/RatingReviews/index.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, this),
          !reviews.length && /* @__PURE__ */ (0, import_jsx_dev_runtime125.jsxDEV)(
            NoReview_default,
            {
              productName: name,
              handleRateClick,
              text: REVIEW_TEXT,
              buttonTitle: WRITE_A_REVIEW
            },
            void 0,
            !1,
            {
              fileName: "app/components/PD/RatingReviews/index.tsx",
              lineNumber: 96,
              columnNumber: 15
            },
            this
          ),
          reviews.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime125.jsxDEV)(
            ReviewCard,
            {
              review: reviews[0],
              product,
              handleImageClick,
              handleLikeClick
            },
            void 0,
            !1,
            {
              fileName: "app/components/PD/RatingReviews/index.tsx",
              lineNumber: 104,
              columnNumber: 15
            },
            this
          ),
          reviewCount && parseInt(reviewCount) > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime125.jsxDEV)(AllReviews_default, { clickHandler: handleAllReviewsClick }, void 0, !1, {
            fileName: "app/components/PD/RatingReviews/index.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this),
          showImageModal && reviews[0] && product && /* @__PURE__ */ (0, import_jsx_dev_runtime125.jsxDEV)(
            ImageViewer_default,
            {
              activeIndex,
              onClose: () => setShowImageModal(!1),
              imagesWithInfo: getReviewImagesData(reviews[0]),
              product
            },
            void 0,
            !1,
            {
              fileName: "app/components/PD/RatingReviews/index.tsx",
              lineNumber: 115,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/PD/RatingReviews/index.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/PD/RatingReviews/index.tsx",
      lineNumber: 67,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/PD/RatingReviews/index.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
var RatingReviews_default = RatingReviews;

// app/components/PD/SizeAndShade/constants.ts
var CONFIGURABLE2 = "configurable", SELECT_SHADE = "Select Shade", SELECT_SIZE = "Select Size", SOLD_OUT = "Sold Out";
var LEFT = "Left", ALL_SHADES = "All Shades", SELECT_A_SHADE = "Select a Shade", SHADES = "Shades", TABS = [
  { key: "all-shades", label: "All Shades" },
  { key: "bestsellers", label: "Bestsellers" }
], MODAL = "modal", CENTER = "center";
var LOW_STOCK_THRESHOLD = 10, FEW_LEFT = "Few Left", MINI = "mini", CHILDID_MISSING_ERR = "childId missing for variant:", SKUID_PARAM = "skuId", VARIANT_CHANGE_ERR = "Error while variant change: ";

// app/components/PD/SizeAndShade/helper.ts
var getVariantTypeForConfig = (productType) => {
  switch (productType) {
    case "shade":
      return "SHADE" /* SHADE */;
    case "size":
    case "weight_configure":
      return "SIZE" /* SIZE */;
    default:
      return "";
  }
}, getVariantType = (productType, variantType) => productType === CONFIGURABLE2 ? getVariantTypeForConfig(variantType) : null, extractImageUrls = (variant) => {
  var _a2;
  return !variant || !variant.media || !Array.isArray(variant.media) ? [] : (_a2 = variant.media.filter((item) => item.mediaType === "image")) == null ? void 0 : _a2.map((item) => item.url);
}, getAvailabilityInfo = (variant, fewLeftLimit) => variant.inStock ? variant.quantity && variant.quantity < fewLeftLimit ? {
  status: "FEW_LEFT" /* FEW_LEFT */,
  quantity: variant.quantity
} : { status: "AVAILABLE" /* AVAILABLE */ } : { status: "SOLD_OUT" /* SOLD_OUT */ }, getQuantityLabel = (quantity) => quantity < LOW_STOCK_THRESHOLD ? `${quantity} ${LEFT}` : FEW_LEFT;

// app/components/PD/SizeAndShade/Shade/index.tsx
var import_react48 = require("react");

// app/components/Icons/ChevronRight.tsx
var import_jsx_dev_runtime126 = require("react/jsx-dev-runtime");
function ChevronRight() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime126.jsxDEV)(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime126.jsxDEV)(
        "path",
        {
          d: "M10.9991 8C10.9997 8.10095 10.9795 8.20103 10.9397 8.29448C10.8999 8.38794 10.8412 8.47294 10.7671 8.54462L6.39877 12.7635C6.24811 12.912 6.0421 12.997 5.82604 12.9999C5.60998 13.0028 5.40158 12.9233 5.24668 12.7788C5.09179 12.6344 5.00308 12.4369 5.00008 12.2297C4.99708 12.0226 5.08003 11.8228 5.23068 11.6743L9.07096 8L5.23068 4.32575C5.08003 4.17724 4.99708 3.97743 5.00008 3.77028C5.00308 3.56313 5.09179 3.36561 5.24669 3.22117C5.40158 3.07673 5.60998 2.9972 5.82604 3.00008C6.0421 3.00295 6.24812 3.088 6.39877 3.23651L10.7991 7.45538C10.9372 7.60502 11.009 7.80041 10.9991 8Z",
          fill: "#001325",
          fillOpacity: "0.92"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Icons/ChevronRight.tsx",
          lineNumber: 10,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Icons/ChevronRight.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}
var ChevronRight_default = ChevronRight;

// app/components/PD/SizeAndShade/hooks/useVariantSelection.ts
var import_react45 = require("react"), import_react46 = require("@remix-run/react");
var useVariantSelection = (variants, onSelect) => {
  let [searchParams] = (0, import_react46.useSearchParams)(), navigate = (0, import_react46.useNavigate)(), getInitialIndex = () => {
    let skuId = searchParams == null ? void 0 : searchParams.get(SKUID_PARAM);
    if (!skuId)
      return 0;
    let index2 = variants == null ? void 0 : variants.findIndex((variant) => variant.childId === skuId);
    return index2 >= 0 ? index2 : 0;
  }, [selectedIndex, setSelectedIndex] = (0, import_react45.useState)(getInitialIndex());
  return { selectedIndex, handleSelect: (index2, childId) => {
    try {
      if (!childId) {
        logger.error(CHILDID_MISSING_ERR, variants[index2]);
        return;
      }
      let params = new URLSearchParams(searchParams);
      params && (params.set(SKUID_PARAM, childId), navigate(`?${params.toString()}`, {
        replace: !0,
        preventScrollReset: !0
      })), setSelectedIndex(index2), onSelect == null || onSelect(index2);
    } catch (error) {
      logger.error(VARIANT_CHANGE_ERR, error);
    }
  } };
};

// app/components/PD/SizeAndShade/selectionModal/index.tsx
var import_react47 = require("react");

// app/components/PD/SizeAndShade/selectionModal/styled.ts
var import_styled101 = __toESM(require("@emotion/styled")), ModalContent2 = import_styled101.default.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`, Container7 = import_styled101.default.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 56px);
  overflow-y: auto;
  position: relative;
  padding-bottom: ${({ isOutOfStock }) => isOutOfStock ? "200px" : "160px"};
`, Section2 = import_styled101.default.div`
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`, StickySection = import_styled101.default.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.05);
  z-index: 2;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`, TopHorizontalLine = import_styled101.default.div`
  height: 1px;
  background-color: #e5e5e5;
  width: 100%;
  margin-bottom: 14px;
`, TabsSection = import_styled101.default.div`
  background: white;
  margin-top: 135px;
`, TabsContent = import_styled101.default.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  padding: 0 8px;
  width: 100%;
  overflow-x: hidden;
`, StickyInfoBar = import_styled101.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
`, SelectedShadeName = import_styled101.default.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary;
}};
`, ShadePrice = import_styled101.default.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary;
}};
`;

// app/components/PD/SizeAndShade/selectionModal/ProductPreview/styled.ts
var import_styled102 = __toESM(require("@emotion/styled")), Wrapper7 = import_styled102.default.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  position: fixed;
  top: 56px;
  background: white;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 8px;
  max-width: 100vw;
`, MainImage = import_styled102.default.img`
  width: 102px;
  height: 102px;
  border-radius: 4px;
  object-fit: cover;
`, RightContent = import_styled102.default.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  width: 100%;
  overflow: hidden;
`, ProductName3 = import_styled102.default.h3`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary;
}};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  line-height: 20px;
`, ShadeCount = import_styled102.default.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textSecondary;
}};
`, ImageList = import_styled102.default.div`
  display: flex;
  gap: 8px;
  overflow-x: scroll;
  padding-bottom: 4px;
  width: 100%;
  flex-wrap: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  img {
    width: 35px !important;
    height: 35px !important;
    min-width: 35px;
    min-height: 35px;
    max-width: 35px;
    max-height: 35px;
    flex: 0 0 auto;
  }
`, ThumbnailImage = import_styled102.default.img`
  width: 35px !important;
  height: 35px !important;
  min-width: 35px;
  min-height: 35px;
  max-width: 35px;
  max-height: 35px;
  border-radius: 4px;
  object-fit: cover;
  border: ${({ isSelected, theme: theme2 }) => {
  var _a2;
  return isSelected ? `1px solid ${(_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary}` : "none";
}};
  cursor: pointer;
  flex: 0 0 auto;
`;

// app/components/PD/SizeAndShade/selectionModal/ProductPreview/index.tsx
var import_jsx_dev_runtime127 = require("react/jsx-dev-runtime"), ProductPreview = ({
  productTitle,
  variantsLength = 0,
  imageUrls,
  selectedImageIndex,
  onImageSelect,
  variantName
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime127.jsxDEV)(Wrapper7, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime127.jsxDEV)(
    MainImage,
    {
      src: imageUrls == null ? void 0 : imageUrls[selectedImageIndex ?? 0],
      alt: variantName
    },
    void 0,
    !1,
    {
      fileName: "app/components/PD/SizeAndShade/selectionModal/ProductPreview/index.tsx",
      lineNumber: 23,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime127.jsxDEV)(RightContent, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime127.jsxDEV)(ProductName3, { children: productTitle }, void 0, !1, {
      fileName: "app/components/PD/SizeAndShade/selectionModal/ProductPreview/index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime127.jsxDEV)(ShadeCount, { children: [
      variantsLength,
      " ",
      SHADES
    ] }, void 0, !0, {
      fileName: "app/components/PD/SizeAndShade/selectionModal/ProductPreview/index.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime127.jsxDEV)(ImageList, { children: imageUrls == null ? void 0 : imageUrls.map((url, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime127.jsxDEV)(
      ThumbnailImage,
      {
        src: url,
        alt: `${variantName} - ${index2 + 1}`,
        onClick: () => onImageSelect(index2),
        isSelected: selectedImageIndex === index2
      },
      index2,
      !1,
      {
        fileName: "app/components/PD/SizeAndShade/selectionModal/ProductPreview/index.tsx",
        lineNumber: 34,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/PD/SizeAndShade/selectionModal/ProductPreview/index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/SizeAndShade/selectionModal/ProductPreview/index.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/PD/SizeAndShade/selectionModal/ProductPreview/index.tsx",
  lineNumber: 22,
  columnNumber: 3
}, this), ProductPreview_default = ProductPreview;

// app/components/PD/SizeAndShade/selectionModal/VariantsView/styled.ts
var import_styled104 = __toESM(require("@emotion/styled")), Grid = import_styled104.default.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 16px;
  row-gap: 16px;
  padding: 0 8px;
  width: 100%;
  box-sizing: border-box;
`, Item = import_styled104.default.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  min-width: 0;
`, ImageWrapper = import_styled104.default.div`
  position: relative;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: visible;
  ${({ isSelected }) => isSelected && `
    border: 3px solid #fff;
    box-shadow: 0px 12px 32px -2px #11131414, 0px 4px 16px -2px #1113;
  `}
`, Image = import_styled104.default.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
`, Name2 = import_styled104.default.div`
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Details = import_styled104.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
`, QuantityText = import_styled104.default.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #faac01;
`, SoldOutText = import_styled104.default.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #e73e30;
`;

// app/components/PD/SizeAndShade/styled.ts
var import_styled105 = __toESM(require("@emotion/styled"));
var Container8 = import_styled105.default.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60;
}};
  padding: ${({ theme: { spacing: spacing2 }, hasLabel }) => hasLabel ? `${spacing2.spacing0} ${spacing2.spacing80} ${spacing2.spacing160}` : `${spacing2.spacing0} ${spacing2.spacing80} ${spacing2.spacing60} ${spacing2.spacing80}`};

  margin-top: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20;
}};
  overflow-x: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  align-items: flex-end;

  &::-webkit-scrollbar {
    display: none;
  }
`, TitleContainer = import_styled105.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme: theme2 }) => {
  var _a2, _b;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0} ${(_b = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _b.spacing80} `;
}};
`, AllShades = import_styled105.default.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.primary;
}};
  cursor: pointer;
  flex-shrink: 0;
`, Title4 = import_styled105.default.h2`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyMedium;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Content = import_styled105.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`, VariantItem = import_styled105.default.div`
  max-width: 50px;
  max-height: 42px;
  width: 50px;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 8.5px;
  border: 1px solid
    ${(props) => {
  var _a2, _b, _c, _d, _e, _f;
  return props.isSelected ? (_b = (_a2 = props.theme) == null ? void 0 : _a2.colors) == null ? void 0 : _b.surfaceInverse10 : props.inStock ? hexToRgba((_f = (_e = props.theme) == null ? void 0 : _e.colors) == null ? void 0 : _f.textPrimary, 0.36) : hexToRgba((_d = (_c = props.theme) == null ? void 0 : _c.colors) == null ? void 0 : _d.textPrimary, 0.36);
}};
  border-radius: 8px;
  cursor: pointer;
  width: fit-content;
  background-color: ${(props) => {
  var _a2, _b, _c, _d;
  return props.isSelected ? (_b = (_a2 = props.theme) == null ? void 0 : _a2.colors) == null ? void 0 : _b.surfaceInverse10 : (_d = (_c = props.theme) == null ? void 0 : _c.colors) == null ? void 0 : _d.white;
}};
  opacity: ${(props) => !props.inStock && !props.isSelected ? 0.5 : 1};
  position: relative;

  &:hover {
    border-color: ${(props) => props.isSelected ? "transparent" : props.inStock ? "#000" : "#0013255C"};
  }
`, StockLabel = import_styled105.default.div`
  position: absolute;
  bottom: -28px;
  left: 50%;
  transform: translateX(-50%);
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyXSmall;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.white;
}};
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return `1px ${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20} `;
}};

  border-radius: 2px;
  white-space: nowrap;
`, SoldOutLabel = (0, import_styled105.default)(StockLabel)`
  background-color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10, 0.44);
}};
`, FewLeftLabel = (0, import_styled105.default)(StockLabel)`
  background-color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.warning;
}};
`, ShadeItem = import_styled105.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  max-width: 48px;
  min-height: 48px;
  max-height: 48px;
  padding: 0;
  border: 3px solid ${(props) => props.isSelected ? "#fff" : "transparent"};
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  box-shadow: ${(props) => props.isSelected ? "0px 12px 32px -2px #11131414, 0px 4px 16px -2px #11131429" : "none"};
  flex-shrink: 0;
  position: relative; // Added for tick positioning
  opacity: ${(props) => props.inStock ? 1 : 0.5};
`, OutOfStockLine = import_styled105.default.div`
  position: absolute;
  top: 50%;
  left: -2px;
  right: -2px;
  height: 2px; // Increased thickness for better visibility
  background-color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.white;
}}; // Changed to white
  transform: rotate(45deg); // Changed from -45deg to 45deg
  transform-origin: center;
`, TickOverlay = import_styled105.default.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  opacity: ${(props) => props.isSelected ? 1 : 0};
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${TickMark_default}) no-repeat center center;
  background-size: 12px 9px; // Match SVG dimensions
`, ShadeImage = import_styled105.default.img`
  width: 44px;
  height: 44px;
  border-radius: 4px;
  object-fit: cover;
`, Size = import_styled105.default.span`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodySmall;
}};
  font-weight: ${(props) => {
  var _a2, _b, _c, _d;
  return props.isSelected ? (_b = (_a2 = props.theme) == null ? void 0 : _a2.typography) == null ? void 0 : _b.subTitleSmall.fontWeight : (_d = (_c = props.theme) == null ? void 0 : _c.typography) == null ? void 0 : _d.bodySmall.fontWeight;
}};
  white-space: nowrap;
  color: ${(props) => {
  var _a2, _b, _c, _d;
  return props.isSelected ? (_b = (_a2 = props.theme) == null ? void 0 : _a2.colors) == null ? void 0 : _b.snow100 : props.inStock ? "inherit" : hexToRgba((_d = (_c = props.theme) == null ? void 0 : _c.colors) == null ? void 0 : _d.textPrimary, 0.36);
}};
`, Price2 = import_styled105.default.span`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyXSmall;
}};
  margin-top: ${({ theme: theme2 }) => {
  var _a2;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing10} `;
}};
  white-space: nowrap;
  color: ${({ theme: theme2, isSelected, inStock }) => {
  var _a2, _b, _c;
  return isSelected ? hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textInversePrimary, 0.72) : inStock ? hexToRgba((_c = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _c.textPrimary, 0.36) : hexToRgba((_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.textPrimary, 0.36);
}};
`, VariantWrapper = import_styled105.default.div`
  display: flex;
  flex-direction: column;
  min-height: 54px; // Height that accommodates MiniLabel + VariantItem
  justify-content: flex-end; // Aligns items to bottom
`;

// app/components/PD/SizeAndShade/selectionModal/VariantsView/shades.tsx
var import_jsx_dev_runtime128 = require("react/jsx-dev-runtime"), ShadesView = ({
  variants,
  onSelect,
  selectedVariantIndex
}) => {
  if (!variants || !variants.length)
    return null;
  let renderAvailabilityStatus = (variant) => {
    if (!variant)
      return null;
    let { status, quantity } = getAvailabilityInfo(variant, 100);
    switch (status) {
      case "SOLD_OUT" /* SOLD_OUT */:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime128.jsxDEV)(SoldOutText, { children: SOLD_OUT }, void 0, !1, {
          fileName: "app/components/PD/SizeAndShade/selectionModal/VariantsView/shades.tsx",
          lineNumber: 42,
          columnNumber: 16
        }, this);
      case "FEW_LEFT" /* FEW_LEFT */:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime128.jsxDEV)(QuantityText, { children: [
          quantity,
          " ",
          LEFT
        ] }, void 0, !0, {
          fileName: "app/components/PD/SizeAndShade/selectionModal/VariantsView/shades.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this);
      default:
        return null;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime128.jsxDEV)(Grid, { children: variants.map((variant, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime128.jsxDEV)(
    Item,
    {
      onClick: () => onSelect == null ? void 0 : onSelect(index2),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime128.jsxDEV)(ImageWrapper, { isSelected: selectedVariantIndex === index2, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime128.jsxDEV)(
            Image,
            {
              src: variant.shadeImage,
              alt: variant.variantName
            },
            void 0,
            !1,
            {
              fileName: "app/components/PD/SizeAndShade/selectionModal/VariantsView/shades.tsx",
              lineNumber: 62,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime128.jsxDEV)(
            TickOverlay,
            {
              isSelected: selectedVariantIndex === index2 && variant.inStock
            },
            void 0,
            !1,
            {
              fileName: "app/components/PD/SizeAndShade/selectionModal/VariantsView/shades.tsx",
              lineNumber: 66,
              columnNumber: 13
            },
            this
          ),
          !variant.inStock && /* @__PURE__ */ (0, import_jsx_dev_runtime128.jsxDEV)(OutOfStockLine, {}, void 0, !1, {
            fileName: "app/components/PD/SizeAndShade/selectionModal/VariantsView/shades.tsx",
            lineNumber: 69,
            columnNumber: 34
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/PD/SizeAndShade/selectionModal/VariantsView/shades.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime128.jsxDEV)(Details, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime128.jsxDEV)(Name2, { children: variant.variantName }, void 0, !1, {
            fileName: "app/components/PD/SizeAndShade/selectionModal/VariantsView/shades.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          renderAvailabilityStatus(variant)
        ] }, void 0, !0, {
          fileName: "app/components/PD/SizeAndShade/selectionModal/VariantsView/shades.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ]
    },
    index2,
    !0,
    {
      fileName: "app/components/PD/SizeAndShade/selectionModal/VariantsView/shades.tsx",
      lineNumber: 57,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/PD/SizeAndShade/selectionModal/VariantsView/shades.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}, shades_default = ShadesView;

// app/components/PD/SizeAndShade/MiniLabel/styled.ts
var import_styled108 = __toESM(require("@emotion/styled")), Wrapper8 = import_styled108.default.div`
  border: 1.5px solid black;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: none;
  height: 24px;
  text-align: center;
  margin-bottom: -5px;
`, Text2 = import_styled108.default.span`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.subTitleSmall;
}};
`;

// app/components/PD/SizeAndShade/MiniLabel/index.tsx
var import_jsx_dev_runtime129 = require("react/jsx-dev-runtime"), MiniLabel = ({ text }) => /* @__PURE__ */ (0, import_jsx_dev_runtime129.jsxDEV)(Wrapper8, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime129.jsxDEV)(Text2, { children: text }, void 0, !1, {
  fileName: "app/components/PD/SizeAndShade/MiniLabel/index.tsx",
  lineNumber: 11,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/PD/SizeAndShade/MiniLabel/index.tsx",
  lineNumber: 10,
  columnNumber: 3
}, this), MiniLabel_default = MiniLabel;

// app/shared/SizeVariantButtons/styled.ts
var import_styled110 = __toESM(require("@emotion/styled"));
var VariantWrapper2 = import_styled110.default.div`
  display: flex;
  flex-direction: column;
  min-height: 54px;
  justify-content: flex-end;
`, VariantItem2 = import_styled110.default.div`
  max-width: 50px;
  max-height: 42px;
  width: 50px;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 8.5px;
  border: ${({ isSelected, theme: theme2 }) => {
  var _a2, _b;
  return isSelected ? `1px solid ${(_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10}` : `1px solid ${hexToRgba((_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.textPrimary, 0.36)}`;
}};
  border-radius: 8px;
  cursor: pointer;
  width: fit-content;
  background-color: ${(props) => {
  var _a2, _b, _c, _d, _e, _f;
  return props.isSelected ? props.inStock ? (_b = (_a2 = props.theme) == null ? void 0 : _a2.colors) == null ? void 0 : _b.surfaceInverse10 : (_d = (_c = props.theme) == null ? void 0 : _c.colors) == null ? void 0 : _d.surface20 : (_f = (_e = props.theme) == null ? void 0 : _e.colors) == null ? void 0 : _f.white;
}};
  opacity: ${(props) => !props.inStock && !props.isSelected ? 0.5 : 1};
  position: relative;
`, Size2 = import_styled110.default.span`
  ${({ theme: theme2, isSelected }) => {
  var _a2, _b;
  return isSelected ? (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.subTitleSmall : (_b = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _b.bodySmall;
}};
  white-space: nowrap;
  color: ${(props) => {
  var _a2, _b, _c, _d, _e, _f;
  return props.isSelected ? props.inStock ? (_b = (_a2 = props.theme) == null ? void 0 : _a2.colors) == null ? void 0 : _b.surface : hexToRgba((_d = (_c = props.theme) == null ? void 0 : _c.colors) == null ? void 0 : _d.textPrimary, 0.92) : props.inStock ? "inherit" : hexToRgba((_f = (_e = props.theme) == null ? void 0 : _e.colors) == null ? void 0 : _f.textPrimary, 0.36);
}};
`, Price3 = import_styled110.default.span`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyXSmall;
}};
  margin-top: ${({ theme: theme2 }) => {
  var _a2;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing10} `;
}};
  white-space: nowrap;
  color: ${({ theme: theme2, isSelected, inStock }) => {
  var _a2, _b, _c, _d;
  return isSelected ? inStock ? hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textInversePrimary, 0.72) : hexToRgba((_b = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _b.textPrimary, 0.64) : inStock ? hexToRgba((_d = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _d.textPrimary, 0.64) : hexToRgba((_c = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _c.textPrimary, 0.36);
}};
`, StockLabel2 = import_styled110.default.div`
  position: absolute;
  bottom: -28px;
  left: 50%;
  transform: translateX(-50%);
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodyXSmall;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.white;
}};
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return `1px ${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20} `;
}};
  border-radius: 2px;
  white-space: nowrap;
`, SoldOutLabel2 = (0, import_styled110.default)(StockLabel2)`
  background-color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10, 0.44);
}};
`, FewLeftLabel2 = (0, import_styled110.default)(StockLabel2)`
  background-color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.warning;
}};
`;

// app/shared/SizeVariantButtons/index.tsx
var import_jsx_dev_runtime130 = require("react/jsx-dev-runtime"), VariantButton = ({
  variant,
  isSelected,
  onClick,
  index: index2
}) => variant ? /* @__PURE__ */ (0, import_jsx_dev_runtime130.jsxDEV)(VariantWrapper2, { children: [
  variant.isMini && /* @__PURE__ */ (0, import_jsx_dev_runtime130.jsxDEV)(MiniLabel_default, { text: MINI }, void 0, !1, {
    fileName: "app/shared/SizeVariantButtons/index.tsx",
    lineNumber: 36,
    columnNumber: 26
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime130.jsxDEV)(
    VariantItem2,
    {
      isSelected,
      inStock: variant.inStock,
      onClick,
      children: [
        variant.variantName && /* @__PURE__ */ (0, import_jsx_dev_runtime130.jsxDEV)(
          Size2,
          {
            isSelected,
            inStock: variant.inStock,
            children: variant.variantName
          },
          void 0,
          !1,
          {
            fileName: "app/shared/SizeVariantButtons/index.tsx",
            lineNumber: 43,
            columnNumber: 11
          },
          this
        ),
        variant.offerPrice && /* @__PURE__ */ (0, import_jsx_dev_runtime130.jsxDEV)(
          Price3,
          {
            isSelected,
            inStock: variant.inStock,
            children: [
              "\u20B9",
              variant.offerPrice
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/shared/SizeVariantButtons/index.tsx",
            lineNumber: 51,
            columnNumber: 11
          },
          this
        ),
        !variant.inStock && /* @__PURE__ */ (0, import_jsx_dev_runtime130.jsxDEV)(SoldOutLabel2, { children: SOLD_OUT }, void 0, !1, {
          fileName: "app/shared/SizeVariantButtons/index.tsx",
          lineNumber: 58,
          columnNumber: 30
        }, this),
        variant.inStock && variant.quantity < 100 && /* @__PURE__ */ (0, import_jsx_dev_runtime130.jsxDEV)(FewLeftLabel2, { children: getQuantityLabel(variant.quantity) }, void 0, !1, {
          fileName: "app/shared/SizeVariantButtons/index.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/shared/SizeVariantButtons/index.tsx",
      lineNumber: 37,
      columnNumber: 7
    },
    this
  )
] }, index2, !0, {
  fileName: "app/shared/SizeVariantButtons/index.tsx",
  lineNumber: 35,
  columnNumber: 5
}, this) : null, SizeVariantButtons_default = VariantButton;

// app/components/PD/SizeAndShade/selectionModal/VariantsView/sizes.tsx
var import_jsx_dev_runtime131 = require("react/jsx-dev-runtime"), SizesView = ({
  variants,
  onSelect,
  selectedVariantIndex
}) => !variants || !variants.length ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime131.jsxDEV)(Container8, { hasLabel: !0, children: variants.map((variant, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime131.jsxDEV)(
  SizeVariantButtons_default,
  {
    variant,
    isSelected: selectedVariantIndex === index2,
    onClick: () => onSelect(index2),
    index: index2
  },
  index2,
  !1,
  {
    fileName: "app/components/PD/SizeAndShade/selectionModal/VariantsView/sizes.tsx",
    lineNumber: 16,
    columnNumber: 9
  },
  this
)) }, void 0, !1, {
  fileName: "app/components/PD/SizeAndShade/selectionModal/VariantsView/sizes.tsx",
  lineNumber: 14,
  columnNumber: 5
}, this), sizes_default = SizesView;

// app/components/PD/SizeAndShade/selectionModal/index.tsx
var import_jsx_dev_runtime132 = require("react/jsx-dev-runtime"), VariantSelectionModal = ({
  isOpen,
  onClose,
  variants,
  productTitle,
  isSizeView = !1
}) => {
  let [selectedImageIndex, setSelectedImageIndex] = (0, import_react47.useState)(0), [selectedVariantIndex, setSelectedVariantIndex] = (0, import_react47.useState)(0), [activeTab, setActiveTab] = (0, import_react47.useState)(0), selectedVariant = variants ? variants[selectedVariantIndex] : {}, imageUrls = extractImageUrls(selectedVariant), handleVariantSelect = (index2) => {
    setSelectedVariantIndex(index2), setSelectedImageIndex(0);
  }, handleClose = () => {
    onClose();
  }, bestsellers = variants == null ? void 0 : variants.filter((variant) => variant.isBestSeller), showTabs = (bestsellers == null ? void 0 : bestsellers.length) > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(
    Modal_default,
    {
      showHeader: !0,
      title: SELECT_A_SHADE,
      onBack: handleClose,
      centerTitle: !0,
      isOpen: isOpen && !!variants,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(Container7, { isOutOfStock: !(selectedVariant != null && selectedVariant.inStock), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(
          ProductPreview_default,
          {
            productTitle,
            variantsLength: variants == null ? void 0 : variants.length,
            imageUrls,
            selectedImageIndex,
            onImageSelect: setSelectedImageIndex,
            variantName: selectedVariant == null ? void 0 : selectedVariant.variantName
          },
          void 0,
          !1,
          {
            fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
            lineNumber: 56,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(TabsSection, { children: [
          showTabs ? /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(import_jsx_dev_runtime132.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(TopHorizontalLine, {}, void 0, !1, {
              fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(
              Tabs_default,
              {
                tabs: TABS,
                activeTab,
                onTabChange: setActiveTab,
                variant: MODAL,
                alignment: CENTER
              },
              void 0,
              !1,
              {
                fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
                lineNumber: 68,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(TabsContent, { children: isSizeView ? /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(
            sizes_default,
            {
              variants: showTabs && activeTab === 1 ? bestsellers : variants,
              onSelect: handleVariantSelect,
              selectedVariantIndex
            },
            void 0,
            !1,
            {
              fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
              lineNumber: 79,
              columnNumber: 15
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(
            shades_default,
            {
              variants: showTabs && activeTab === 1 ? bestsellers : variants,
              onSelect: handleVariantSelect,
              selectedVariantIndex
            },
            void 0,
            !1,
            {
              fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
              lineNumber: 85,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
            lineNumber: 77,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
          lineNumber: 64,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(StickySection, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(StickyInfoBar, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(SelectedShadeName, { children: selectedVariant == null ? void 0 : selectedVariant.variantName }, void 0, !1, {
              fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
              lineNumber: 95,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(ShadePrice, { children: [
              "\u20B9",
              selectedVariant == null ? void 0 : selectedVariant.offerPrice
            ] }, void 0, !0, {
              fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
              lineNumber: 98,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
            lineNumber: 94,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime132.jsxDEV)(
            ProductActions_default,
            {
              product: variants[selectedVariantIndex],
              view: MODAL
            },
            void 0,
            !1,
            {
              fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
              lineNumber: 100,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
          lineNumber: 93,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/PD/SizeAndShade/selectionModal/index.tsx",
      lineNumber: 48,
      columnNumber: 5
    },
    this
  );
}, selectionModal_default = VariantSelectionModal;

// app/components/PD/SizeAndShade/Shade/index.tsx
var import_jsx_dev_runtime133 = require("react/jsx-dev-runtime"), ShadeComponent = ({
  variants,
  onShadeSelect,
  productTitle
}) => {
  var _a2;
  let { selectedIndex, handleSelect } = useVariantSelection(
    variants,
    onShadeSelect
  ), [showModal, setShowModal] = (0, import_react48.useState)(!1), hasLabel = variants.some(
    (variant) => !variant.inStock || variant.inStock && variant.quantity < 100
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime133.jsxDEV)(import_jsx_dev_runtime133.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime133.jsxDEV)(TitleContainer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime133.jsxDEV)(Title4, { children: ((_a2 = variants[selectedIndex]) == null ? void 0 : _a2.variantName) || SELECT_SHADE }, void 0, !1, {
        fileName: "app/components/PD/SizeAndShade/Shade/index.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime133.jsxDEV)(AllShades, { onClick: () => setShowModal(!0), children: [
        ALL_SHADES,
        /* @__PURE__ */ (0, import_jsx_dev_runtime133.jsxDEV)(ChevronRight_default, {}, void 0, !1, {
          fileName: "app/components/PD/SizeAndShade/Shade/index.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/PD/SizeAndShade/Shade/index.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/PD/SizeAndShade/Shade/index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime133.jsxDEV)(Container8, { hasLabel, children: variants == null ? void 0 : variants.map((variant, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime133.jsxDEV)(
      ShadeItem,
      {
        isSelected: selectedIndex === index2,
        inStock: variant.inStock,
        onClick: () => handleSelect(index2, variant.childId),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime133.jsxDEV)(
            ShadeImage,
            {
              src: variant.shadeImage,
              alt: variant.variantName
            },
            void 0,
            !1,
            {
              fileName: "app/components/PD/SizeAndShade/Shade/index.tsx",
              lineNumber: 60,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime133.jsxDEV)(
            TickOverlay,
            {
              isSelected: selectedIndex === index2 && variant.inStock
            },
            void 0,
            !1,
            {
              fileName: "app/components/PD/SizeAndShade/Shade/index.tsx",
              lineNumber: 64,
              columnNumber: 13
            },
            this
          ),
          !variant.inStock && /* @__PURE__ */ (0, import_jsx_dev_runtime133.jsxDEV)(import_jsx_dev_runtime133.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime133.jsxDEV)(OutOfStockLine, {}, void 0, !1, {
              fileName: "app/components/PD/SizeAndShade/Shade/index.tsx",
              lineNumber: 69,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime133.jsxDEV)(SoldOutLabel, { children: SOLD_OUT }, void 0, !1, {
              fileName: "app/components/PD/SizeAndShade/Shade/index.tsx",
              lineNumber: 70,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/PD/SizeAndShade/Shade/index.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this),
          variant.inStock && variant.quantity < 100 && /* @__PURE__ */ (0, import_jsx_dev_runtime133.jsxDEV)(FewLeftLabel, { children: getQuantityLabel(variant.quantity) }, void 0, !1, {
            fileName: "app/components/PD/SizeAndShade/Shade/index.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this)
        ]
      },
      index2,
      !0,
      {
        fileName: "app/components/PD/SizeAndShade/Shade/index.tsx",
        lineNumber: 54,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/PD/SizeAndShade/Shade/index.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime133.jsxDEV)(
      selectionModal_default,
      {
        isOpen: showModal,
        onClose: () => setShowModal(!1),
        variants,
        productTitle
      },
      void 0,
      !1,
      {
        fileName: "app/components/PD/SizeAndShade/Shade/index.tsx",
        lineNumber: 80,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/PD/SizeAndShade/Shade/index.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}, Shade_default = ShadeComponent;

// app/components/PD/SizeAndShade/Size/index.tsx
var import_jsx_dev_runtime134 = require("react/jsx-dev-runtime"), SizeComponent = ({
  variants,
  onSizeSelect,
  productTitle
}) => {
  let { selectedIndex, handleSelect } = useVariantSelection(
    variants,
    onSizeSelect
  ), hasLabel = variants == null ? void 0 : variants.some(
    (variant) => !variant.inStock || variant.inStock && variant.quantity < 100
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime134.jsxDEV)(import_jsx_dev_runtime134.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime134.jsxDEV)(TitleContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime134.jsxDEV)(Title4, { children: SELECT_SIZE }, void 0, !1, {
      fileName: "app/components/PD/SizeAndShade/Size/index.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/PD/SizeAndShade/Size/index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime134.jsxDEV)(Container8, { hasLabel, children: variants == null ? void 0 : variants.map((variant, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime134.jsxDEV)(
      SizeVariantButtons_default,
      {
        variant,
        isSelected: selectedIndex === index2,
        onClick: () => handleSelect(index2, variant == null ? void 0 : variant.childId),
        index: index2
      },
      index2,
      !1,
      {
        fileName: "app/components/PD/SizeAndShade/Size/index.tsx",
        lineNumber: 37,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/PD/SizeAndShade/Size/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PD/SizeAndShade/Size/index.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}, Size_default = SizeComponent;

// app/components/PD/SizeAndShade/index.tsx
var import_jsx_dev_runtime135 = require("react/jsx-dev-runtime"), SizeAndShade = ({
  variantType,
  productType,
  variants,
  productTitle
}) => {
  let typeOfVariant = getVariantType(productType, variantType);
  return typeOfVariant === "SHADE" /* SHADE */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime135.jsxDEV)(
    Shade_default,
    {
      variants,
      productTitle
    },
    void 0,
    !1,
    {
      fileName: "app/components/PD/SizeAndShade/index.tsx",
      lineNumber: 24,
      columnNumber: 7
    },
    this
  ) : typeOfVariant === "SIZE" /* SIZE */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime135.jsxDEV)(
    Size_default,
    {
      variants,
      productTitle
    },
    void 0,
    !1,
    {
      fileName: "app/components/PD/SizeAndShade/index.tsx",
      lineNumber: 33,
      columnNumber: 7
    },
    this
  ) : null;
}, SizeAndShade_default = SizeAndShade;

// app/components/Recommendations/index.tsx
var import_react52 = require("react");

// app/components/Recommendations/constants.ts
var VIEW_ALL_PRODUCTS = "View All Products", SHADE2 = "shade", moreFromBrand = "more_from_brand", WidgetTitle = "More From Brand", CONFIGURE_TYPE = {
  SHADE: "shade",
  WEIGHT_CONFIGURE: "weight_configure",
  SIZE: "size"
};
var VIEW_SHADES = "Select Shade", VIEW_SIZES = "Select Size";

// app/shared/ProductCardCTA/index.tsx
var import_react50 = require("react");

// app/shared/ProductCardCTA/styled.ts
var import_styled117 = __toESM(require("@emotion/styled")), Container9 = import_styled117.default.div`
  position: sticky;
  bottom: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0;
}};
  left: 0;
  right: 0;
  background: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface;
}};
  display: flex;
  gap: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  align-items: center;
`, wishlistButtonStyle = {
  padding: "4px"
}, addToBagButtonStyle = (theme2) => {
  var _a2, _b, _c;
  return {
    padding: `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40} ${(_b = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _b.spacing40}`,
    maxWidth: "110px",
    ...(_c = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _c.buttonSmall
  };
}, ButtonText = import_styled117.default.span``, ButtonContent = import_styled117.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// app/shared/ProductCardCTA/index.tsx
var import_react51 = require("@emotion/react");

// app/shared/ProductCardCTA/SelectionButton.tsx
var import_react49 = require("react");

// app/components/Recommendations/helper.ts
var getVariantType2 = (variantType = "") => {
  if (!variantType)
    return "";
  switch (variantType.toLowerCase()) {
    case CONFIGURE_TYPE.SHADE.toLowerCase():
      return "SHADE" /* SHADE */;
    case CONFIGURE_TYPE.WEIGHT_CONFIGURE.toLowerCase():
    case CONFIGURE_TYPE.SIZE.toLowerCase():
      return "SIZE" /* SIZE */;
    default:
      return "";
  }
}, getCtaText = (variantType) => {
  let label = "";
  return variantType === "SHADE" /* SHADE */ ? label = VIEW_SHADES : variantType === "SIZE" /* SIZE */ && (label = VIEW_SIZES), label;
};

// app/shared/ProductCardCTA/SelectionButton.tsx
var import_jsx_dev_runtime136 = require("@emotion/react/jsx-dev-runtime");
function SelectionButton({
  productId,
  variantType,
  onStatusChange,
  view,
  styleOverride
}) {
  let [isModalOpen, setIsModalOpen] = (0, import_react49.useState)(!1), [variants, setVariants] = (0, import_react49.useState)([]), [title, setTitle] = (0, import_react49.useState)(""), { fetcher, isLoading } = useFetcherHandler({
    onSuccess: (data) => {
      var _a2, _b;
      setVariants(((_a2 = data == null ? void 0 : data.info) == null ? void 0 : _a2.variants) || []), setTitle(((_b = data == null ? void 0 : data.info) == null ? void 0 : _b.name) || ""), setIsModalOpen(!0);
    },
    onError: (error) => {
      onStatusChange(error);
    },
    successHandler: (data) => data.status == "success"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime136.jsxDEV)(import_jsx_dev_runtime136.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime136.jsxDEV)(
      Button_default,
      {
        onClick: () => {
          fetcher.submit(
            { [QUERY_PARAM_KEYS.PRODUCT_ID]: productId },
            { method: API_METHODS.POST, action: ACTION_ROUTES.productDetails }
          );
        },
        disabled: isLoading,
        customStyles: { ...getButtonStyles(view), ...styleOverride },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime136.jsxDEV)(ButtonContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime136.jsxDEV)(ButtonText, { children: getCtaText(variantType) }, void 0, !1, {
            fileName: "app/shared/ProductCardCTA/SelectionButton.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime136.jsxDEV)(
            ChevronDownSmall_default,
            {
              color: "#FFFFFF",
              width: 16,
              height: 16
            },
            void 0,
            !1,
            {
              fileName: "app/shared/ProductCardCTA/SelectionButton.tsx",
              lineNumber: 62,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/shared/ProductCardCTA/SelectionButton.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/shared/ProductCardCTA/SelectionButton.tsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime136.jsxDEV)(
      selectionModal_default,
      {
        isOpen: isModalOpen,
        onClose: () => setIsModalOpen(!1),
        variants,
        productTitle: title,
        isSizeView: variantType === "SIZE" /* SIZE */
      },
      void 0,
      !1,
      {
        fileName: "app/shared/ProductCardCTA/SelectionButton.tsx",
        lineNumber: 69,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/shared/ProductCardCTA/SelectionButton.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// app/shared/ProductCardCTA/index.tsx
var import_jsx_dev_runtime137 = require("@emotion/react/jsx-dev-runtime");
function ProductCardCTA({ productId, userDetails, variantType }) {
  let [toast, setToast] = (0, import_react50.useState)(TOAST_DEFAULT_VALUE), [snackbar, setSnackbar] = (0, import_react50.useState)(SNACKBAR_DEFAULT_VALUE), handleToastMessage = (message) => {
    setToast({ show: !0, message });
  }, handleSnackbarMessage = (message, actionText = "") => {
    setSnackbar({ show: !0, message, actionText });
  }, isSelectionButton = variantType === "SIZE" /* SIZE */ || variantType === "SHADE" /* SHADE */, theme2 = (0, import_react51.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime137.jsxDEV)(Container9, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime137.jsxDEV)(
      WishlistButton,
      {
        productId,
        userDetails,
        onStatusChange: handleToastMessage,
        styleOverride: wishlistButtonStyle
      },
      void 0,
      !1,
      {
        fileName: "app/shared/ProductCardCTA/index.tsx",
        lineNumber: 43,
        columnNumber: 7
      },
      this
    ),
    isSelectionButton ? /* @__PURE__ */ (0, import_jsx_dev_runtime137.jsxDEV)(
      SelectionButton,
      {
        styleOverride: addToBagButtonStyle(theme2),
        productId,
        onStatusChange: handleSnackbarMessage,
        variantType
      },
      void 0,
      !1,
      {
        fileName: "app/shared/ProductCardCTA/index.tsx",
        lineNumber: 50,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime137.jsxDEV)(
      AddToBagButton,
      {
        styleOverride: addToBagButtonStyle(theme2),
        iconSize: 16,
        productId,
        onStatusChange: handleSnackbarMessage
      },
      void 0,
      !1,
      {
        fileName: "app/shared/ProductCardCTA/index.tsx",
        lineNumber: 57,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime137.jsxDEV)(
      Notifications,
      {
        toast,
        snackbar,
        onToastDismiss: () => setToast({ show: !1, message: "" }),
        onSnackbarDismiss: () => setSnackbar({ show: !1, message: "", actionText: "" }),
        onSnackbarAction: () => redirectToShoppingBag()
      },
      void 0,
      !1,
      {
        fileName: "app/shared/ProductCardCTA/index.tsx",
        lineNumber: 64,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/shared/ProductCardCTA/index.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
var ProductCardCTA_default = ProductCardCTA;

// app/components/Recommendations/assets/QuantityIcon.tsx
var import_jsx_dev_runtime138 = require("react/jsx-dev-runtime"), QuantityIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime138.jsxDEV)(
  "svg",
  {
    width: "14",
    height: "15",
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime138.jsxDEV)("g", { id: "Group 1000006227", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime138.jsxDEV)("g", { id: "Group 1000006223", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime138.jsxDEV)(
          "rect",
          {
            id: "Rectangle 323302",
            x: "0.45",
            y: "-0.45",
            width: "7.9",
            height: "11.9",
            rx: "2.45",
            transform: "matrix(-1 0 0 1 8.9 3)",
            fill: "#ACB2B7",
            stroke: "white",
            strokeWidth: "0.9"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Recommendations/assets/QuantityIcon.tsx",
            lineNumber: 13,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime138.jsxDEV)(
          "rect",
          {
            id: "Rectangle 323303",
            width: "3.81242",
            height: "1.9508",
            rx: "0.975399",
            transform: "matrix(-1 0 0 1 6.46094 0.5)",
            fill: "#ACB2B7"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Recommendations/assets/QuantityIcon.tsx",
            lineNumber: 25,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Recommendations/assets/QuantityIcon.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime138.jsxDEV)(
        "rect",
        {
          id: "Rectangle 323304",
          x: "0.45",
          y: "-0.45",
          width: "7.9",
          height: "6.9",
          rx: "1.45",
          transform: "matrix(-1 0 0 1 13.9 8)",
          fill: "#CDD3D8",
          stroke: "white",
          strokeWidth: "0.9"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Recommendations/assets/QuantityIcon.tsx",
          lineNumber: 34,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime138.jsxDEV)(
        "rect",
        {
          id: "Rectangle 323305",
          x: "0.45",
          y: "-0.45",
          width: "7.9",
          height: "2.9",
          rx: "1.45",
          transform: "matrix(-1 0 0 1 13.9 7)",
          fill: "#CDD3D8",
          stroke: "white",
          strokeWidth: "0.9"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Recommendations/assets/QuantityIcon.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Recommendations/assets/QuantityIcon.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/Recommendations/assets/QuantityIcon.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), QuantityIcon_default = QuantityIcon;

// app/components/Recommendations/styled.ts
var import_styled121 = __toESM(require("@emotion/styled"));
var ProductCardContainer = import_styled121.default.div`
  width: 156px;
  display: flex;
  flex-direction: column;
`, ImageRatingContainer = import_styled121.default.div`
  width: 156px;
  height: 208px;
  border-radius: 8px;
  border: 1px ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.16);
}}
    solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`, ProductRatingBottom = import_styled121.default.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  background-color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface;
}};
  width: 100%;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  min-height: 24px;
`, RatingText2 = import_styled121.default.span`
  margin-left: 2px;
  font-size: 10px;
  color: #333;
  font-weight: 500;
  line-height: 16px;
`, ProductImage = import_styled121.default.img`
  text-align: center;
  max-width: 140px;
  vertical-align: middle;
  height: auto;
  width: auto;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}};
`, BrandName = import_styled121.default.span`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.buttonMedium;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
`, ProductName4 = import_styled121.default.span`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodySmall;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.62);
}};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  margin-bottom: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20;
}};
`, Quantity = import_styled121.default.span`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.bodySmall;
}};
  display: flex;
  align-items: center;
  gap: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20;
}};
`, Price4 = import_styled121.default.div`
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.titleXSmall;
}};
  margin-top: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20;
}};
`, ScrollableContainer = import_styled121.default.div`
  display: flex;
  align-items: center;
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
  overflow-y: scroll;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing0;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing120;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}};
  gap: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing40;
}};
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`, TitleContainer2 = import_styled121.default.div`
  width: 360px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}};
`, TitleText2 = import_styled121.default.span`
  flex-shrink: 0;
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.titleSmall;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return hexToRgba((_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.textPrimary, 0.92);
}};
`, ViewAllButton = import_styled121.default.div`
  height: 42px;
  background-color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surfaceInverse10;
}};
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing50;
}}
    ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing60;
}};
  justify-content: space-between;
`, ViewAllText = import_styled121.default.span`
  padding-left: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}};
  ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.typography) == null ? void 0 : _a2.buttonMedium;
}};
  color: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.colors) == null ? void 0 : _a2.surface;
}};
`, ModalHeader2 = import_styled121.default.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #eaeaea;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 2;
`, BackButton3 = import_styled121.default.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 16px;
  position: relative;
  display: flex;
  top: 1px;
`, ModalTitle2 = import_styled121.default.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`, ProductsGrid = import_styled121.default.div`
  gap: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}};
  padding: ${({ theme: theme2 }) => {
  var _a2;
  return (_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing80;
}};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
`, ProductSection = import_styled121.default.div`
  flex-direction: column;
`, ModalFooter = import_styled121.default.div`
  padding: 16px;
  border-top: 1px solid #eaeaea;
  text-align: center;
`, ActionWrapper = import_styled121.default.div``, ProductInfo = import_styled121.default.div`
  margin: ${({ theme: theme2 }) => {
  var _a2, _b;
  return `${(_a2 = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _a2.spacing20} ${(_b = theme2 == null ? void 0 : theme2.spacing) == null ? void 0 : _b.spacing0}`;
}};
`;

// app/components/Recommendations/assets/ShadesIcon.tsx
var import_jsx_dev_runtime139 = require("react/jsx-dev-runtime"), ShadesIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime139.jsxDEV)(
  "svg",
  {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime139.jsxDEV)(
        "g",
        {
          id: "Frame 1000007212",
          clipPath: "url(#clip0_1477_41710)",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime139.jsxDEV)(
              "rect",
              {
                width: "16",
                height: "16",
                transform: "translate(0 0.501465)",
                fill: "white"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Recommendations/assets/ShadesIcon.tsx",
                lineNumber: 15,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime139.jsxDEV)("g", { id: "Group 48096762", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime139.jsxDEV)(
                "ellipse",
                {
                  id: "Ellipse 34",
                  cx: "9.76229",
                  cy: "8.50068",
                  rx: "4.63728",
                  ry: "4.8",
                  fill: "#D07B7B"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Recommendations/assets/ShadesIcon.tsx",
                  lineNumber: 22,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime139.jsxDEV)(
                "path",
                {
                  id: "Ellipse 35",
                  d: "M4.63728 13.7007C7.43219 13.7007 9.67457 11.3595 9.67457 8.50068C9.67457 5.64192 7.43219 3.30068 4.63728 3.30068C1.84238 3.30068 -0.4 5.64192 -0.4 8.50068C-0.4 11.3595 1.84238 13.7007 4.63728 13.7007Z",
                  fill: "#EE7F71",
                  stroke: "white",
                  strokeWidth: "0.8"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Recommendations/assets/ShadesIcon.tsx",
                  lineNumber: 30,
                  columnNumber: 9
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/Recommendations/assets/ShadesIcon.tsx",
              lineNumber: 21,
              columnNumber: 7
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Recommendations/assets/ShadesIcon.tsx",
          lineNumber: 11,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime139.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime139.jsxDEV)("clipPath", { id: "clip0_1477_41710", children: /* @__PURE__ */ (0, import_jsx_dev_runtime139.jsxDEV)(
        "rect",
        {
          width: "16",
          height: "16",
          fill: "white",
          transform: "translate(0 0.501465)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Recommendations/assets/ShadesIcon.tsx",
          lineNumber: 41,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Recommendations/assets/ShadesIcon.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/Recommendations/assets/ShadesIcon.tsx",
        lineNumber: 39,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Recommendations/assets/ShadesIcon.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), ShadesIcon_default = ShadesIcon;

// app/components/Recommendations/ProductCard.tsx
var import_jsx_dev_runtime140 = require("react/jsx-dev-runtime"), ProductCard = ({
  product,
  getPdpUrl: getPdpUrl2,
  position,
  widgetName,
  widgetType
}) => {
  let isShade = (product == null ? void 0 : product.variantType) === SHADE2, { user } = useAuth() || {}, { formKey, wishlist } = user || {}, formatRatingCount = (count) => count >= 1e3 ? `${(count / 1e3).toFixed(1)}k` : count.toString(), renderStars = ({ rating, ratingCount }) => /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(import_jsx_dev_runtime140.Fragment, { children: [
    rating ? /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(
      FilledStar_default,
      {
        height: 10,
        width: 10
      },
      void 0,
      !1,
      {
        fileName: "app/components/Recommendations/ProductCard.tsx",
        lineNumber: 71,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(import_jsx_dev_runtime140.Fragment, {}, void 0, !1, {
      fileName: "app/components/Recommendations/ProductCard.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(RatingText2, { children: [
      rating ? rating == null ? void 0 : rating.toFixed(1) : "",
      " ",
      ratingCount ? `(${formatRatingCount(ratingCount)})` : ""
    ] }, void 0, !0, {
      fileName: "app/components/Recommendations/ProductCard.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Recommendations/ProductCard.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(ProductCardContainer, { onClick: () => {
    let pdpUrl = getPdpUrl2(product.slug, position, widgetType, widgetName);
    handleNavigationForModal(pdpUrl);
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(ImageRatingContainer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(
        ProductImage,
        {
          src: product == null ? void 0 : product.imageUrl,
          alt: product == null ? void 0 : product.name
        },
        void 0,
        !1,
        {
          fileName: "app/components/Recommendations/ProductCard.tsx",
          lineNumber: 93,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(ProductRatingBottom, { children: renderStars(product) }, void 0, !1, {
        fileName: "app/components/Recommendations/ProductCard.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Recommendations/ProductCard.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(ProductInfo, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(BrandName, { children: product == null ? void 0 : product.brandName }, void 0, !1, {
        fileName: "app/components/Recommendations/ProductCard.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(ProductName4, { children: product == null ? void 0 : product.name }, void 0, !1, {
        fileName: "app/components/Recommendations/ProductCard.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(Quantity, { children: [
        isShade ? /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(ShadesIcon_default, {}, void 0, !1, {
          fileName: "app/components/Recommendations/ProductCard.tsx",
          lineNumber: 103,
          columnNumber: 22
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(QuantityIcon_default, {}, void 0, !1, {
          fileName: "app/components/Recommendations/ProductCard.tsx",
          lineNumber: 103,
          columnNumber: 39
        }, this),
        " ",
        product == null ? void 0 : product.packSize
      ] }, void 0, !0, {
        fileName: "app/components/Recommendations/ProductCard.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(Price4, { children: `\u20B9${product == null ? void 0 : product.price}` }, void 0, !1, {
        fileName: "app/components/Recommendations/ProductCard.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Recommendations/ProductCard.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(ActionWrapper, { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime140.jsxDEV)(
      ProductCardCTA_default,
      {
        productId: product == null ? void 0 : product.id,
        userDetails: {
          wishlist,
          formKey
        },
        variantType: getVariantType2(product == null ? void 0 : product.variantType)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Recommendations/ProductCard.tsx",
        lineNumber: 108,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Recommendations/ProductCard.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Recommendations/ProductCard.tsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
}, ProductCard_default = ProductCard;

// app/components/Recommendations/utils.ts
var getPdpUrl = (slug, position, widgetType, widgetName) => getRecommendationsUrl({
  slug,
  root: `${widgetType}_pd`,
  position,
  name: widgetName
}), getRecommendationsUrl = ({
  slug,
  childId,
  root,
  position,
  name
}) => {
  let queryString = `root=${root}${childId ? `&skuId=${childId}` : ""}${position ? `&pps=${position}` : ""}${name ? `&widgetName=${name}` : ""}`;
  return `/${appendQueryStringToUrl(slug, queryString)}`;
}, appendQueryStringToUrl = (url, queryString = "") => {
  if (!url)
    throw new Error('"url" can not be empty');
  let queryStringExists = url.indexOf("?") > -1;
  return `${url}${queryStringExists ? "&" : "?"}${queryString}`;
};

// app/components/Recommendations/RecommendationsModal.tsx
var import_jsx_dev_runtime141 = require("react/jsx-dev-runtime"), RecommendationsModal = ({
  title,
  products,
  widgetType,
  widgetName,
  onClose,
  isOpen
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime141.jsxDEV)(
  Modal_default,
  {
    showHeader: !0,
    title,
    onBack: onClose,
    isOpen,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime141.jsxDEV)(ProductsGrid, { children: products.map((product, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime141.jsxDEV)(ProductSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime141.jsxDEV)(
      ProductCard_default,
      {
        product,
        getPdpUrl,
        position: index2 + 1,
        widgetType,
        widgetName
      },
      index2,
      !1,
      {
        fileName: "app/components/Recommendations/RecommendationsModal.tsx",
        lineNumber: 34,
        columnNumber: 11
      },
      this
    ) }, index2, !1, {
      fileName: "app/components/Recommendations/RecommendationsModal.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)) }, void 0, !1, {
      fileName: "app/components/Recommendations/RecommendationsModal.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/Recommendations/RecommendationsModal.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
), RecommendationsModal_default = RecommendationsModal;

// app/shared/Shimmer/index.tsx
var import_styled124 = __toESM(require("@emotion/styled"));

// app/shared/Shimmer/constants.ts
var SHIMMER_OPTIONS = {
  height: "100%",
  width: "100%",
  animationDuration: "1s",
  baseColor: "#eeeeee",
  highlightColor: "#dddddd",
  backgroundColor: "#eeeeee",
  show: !1
};

// app/shared/Shimmer/index.tsx
var import_jsx_dev_runtime142 = require("react/jsx-dev-runtime"), ShimmerContainer = import_styled124.default.div`
  display: block;
  height: ${({ height }) => height || "100%"};
  width: ${({ width }) => width || "100%"};

  @keyframes shimmerAnimation {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  ${({ animationDuration, baseColor, highlightColor, backgroundColor }) => `
    animation-duration: ${animationDuration || "1s"};
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: shimmerAnimation;
    animation-timing-function: linear;
    background: linear-gradient(
      to right,
      ${baseColor || "#eeeeee"} 8%,
      ${highlightColor || "#dddddd"} 18%,
      ${backgroundColor || "#eeeeee"} 33%
    );
    background-size: 800px 104px;
    position: relative;
  `}
`, Shimmer = ({
  children,
  show = SHIMMER_OPTIONS.show,
  height = SHIMMER_OPTIONS.height,
  width = SHIMMER_OPTIONS.width,
  animationDuration = SHIMMER_OPTIONS.animationDuration,
  baseColor = SHIMMER_OPTIONS.baseColor,
  highlightColor = SHIMMER_OPTIONS.highlightColor,
  backgroundColor = SHIMMER_OPTIONS.backgroundColor
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime142.jsxDEV)(import_jsx_dev_runtime142.Fragment, { children: show ? /* @__PURE__ */ (0, import_jsx_dev_runtime142.jsxDEV)(
  ShimmerContainer,
  {
    height,
    width,
    animationDuration,
    baseColor,
    highlightColor,
    backgroundColor
  },
  void 0,
  !1,
  {
    fileName: "app/shared/Shimmer/index.tsx",
    lineNumber: 63,
    columnNumber: 7
  },
  this
) : children }, void 0, !1, {
  fileName: "app/shared/Shimmer/index.tsx",
  lineNumber: 61,
  columnNumber: 3
}, this), Shimmer_default = Shimmer;

// app/components/Recommendations/index.tsx
var import_jsx_dev_runtime143 = require("react/jsx-dev-runtime"), Recommendations = (props) => {
  var _a2;
  let { recommendationsRef } = useProductContext(), { product } = props, [isModalOpen, setIsModalOpen] = (0, import_react52.useState)(!1), [recommData, setRecommData] = (0, import_react52.useState)([]), config = useConfig(), pdpWidgetConfig = (_a2 = config == null ? void 0 : config.configs) == null ? void 0 : _a2.pdp_widget_config, { algo } = pdpWidgetConfig || {}, { fetcher, isContentLoading } = useFetcherHandler({
    onSuccess: (data) => {
      var _a3, _b;
      let filteredData = (_b = (_a3 = data == null ? void 0 : data.response) == null ? void 0 : _a3.relatedProducts) == null ? void 0 : _b.filter(
        (data2) => data2.widgetType === moreFromBrand
      );
      setRecommData(filteredData);
    },
    onError: () => {
    },
    successHandler: (data) => data.status || !1
  });
  (0, import_react52.useEffect)(() => {
    let formData = new FormData();
    formData.append("product_id", product == null ? void 0 : product.id), formData.append("recommendation_json", algo ? JSON.stringify(algo) : ""), fetcher.submit(formData, {
      method: API_METHODS.POST,
      action: ACTION_ROUTES.recommendations
    });
  }, [product == null ? void 0 : product.id]);
  let handleViewAllClick = () => {
    setIsModalOpen(!0);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime143.jsxDEV)(
    Shimmer_default,
    {
      show: isContentLoading,
      height: "480px",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime143.jsxDEV)("div", { ref: recommendationsRef, children: recommData == null ? void 0 : recommData.map((recomm) => {
        let { title, products, widgetType } = recomm, heading = title || WidgetTitle;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime143.jsxDEV)(import_jsx_dev_runtime143.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime143.jsxDEV)(TitleContainer2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime143.jsxDEV)(TitleText2, { children: heading }, void 0, !1, {
            fileName: "app/components/Recommendations/index.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Recommendations/index.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime143.jsxDEV)(ScrollableContainer, { children: products == null ? void 0 : products.map((product2, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime143.jsxDEV)(
            ProductCard_default,
            {
              product: product2,
              getPdpUrl,
              position: index2 + 1,
              widgetType,
              widgetName: heading
            },
            index2,
            !1,
            {
              fileName: "app/components/Recommendations/index.tsx",
              lineNumber: 77,
              columnNumber: 19
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/Recommendations/index.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime143.jsxDEV)(ViewAllButton, { onClick: handleViewAllClick, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime143.jsxDEV)(ViewAllText, { children: VIEW_ALL_PRODUCTS }, void 0, !1, {
              fileName: "app/components/Recommendations/index.tsx",
              lineNumber: 88,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime143.jsxDEV)(ChevronRightSmall_default, {}, void 0, !1, {
              fileName: "app/components/Recommendations/index.tsx",
              lineNumber: 89,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Recommendations/index.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime143.jsxDEV)(
            RecommendationsModal_default,
            {
              title,
              products,
              widgetType,
              widgetName: heading,
              onClose: () => setIsModalOpen(!1),
              isOpen: isModalOpen
            },
            void 0,
            !1,
            {
              fileName: "app/components/Recommendations/index.tsx",
              lineNumber: 91,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Recommendations/index.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this);
      }) }, void 0, !1, {
        fileName: "app/components/Recommendations/index.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Recommendations/index.tsx",
      lineNumber: 62,
      columnNumber: 5
    },
    this
  );
}, Recommendations_default = Recommendations;

// app/utils/PD/index.ts
var appendQueryStringToUrl2 = (pathname, queryString) => {
  if (!queryString)
    return pathname;
  let separator = pathname.includes("?") ? "&" : "?";
  return `${pathname}${separator}${queryString}`;
}, handleSkuIdInUrl = ({
  currentSku,
  parentId,
  pathname,
  search
}) => {
  let urlParams = new URLSearchParams(search), { childId } = currentSku || {}, skuId = urlParams.get(QUERY_PARAM_KEYS.SKU), shouldUpdateUrl = !1;
  if (skuId ? skuId !== childId && (urlParams.set(QUERY_PARAM_KEYS.SKU, childId), shouldUpdateUrl = !0) : parentId !== childId && (urlParams.append(QUERY_PARAM_KEYS.SKU, childId), shouldUpdateUrl = !0), shouldUpdateUrl) {
    let updatedQueryString = urlParams.toString();
    return appendQueryStringToUrl2(pathname, updatedQueryString);
  }
  return null;
}, getSelectedProductData = (productData, skuId) => {
  let { selectedVariantId, variants } = productData || {};
  if (!productData)
    return null;
  let variantId = skuId || selectedVariantId;
  if (variantId && variants && (variants == null ? void 0 : variants.length) > 0) {
    let selectedVariantIndex = variants.findIndex(
      (variant) => (variant == null ? void 0 : variant.childId) === variantId
    );
    return variants[Math.max(0, selectedVariantIndex)];
  }
  return {
    childId: (productData == null ? void 0 : productData.id) || "",
    ...productData
  };
}, getMediaFromSource = (source) => {
  if (!source)
    return [];
  let { carousel, media } = source || {};
  return isValidArrayLength(carousel) ? carousel : isValidArrayLength(media) ? media : [];
}, getVariantMedia = (variants, selectedVariantId) => {
  if (!isValidArrayLength(variants))
    return [];
  let selectedVariant = selectedVariantId ? variants == null ? void 0 : variants.find((variant) => (variant == null ? void 0 : variant.childId) == selectedVariantId) : null;
  return getMediaFromSource(selectedVariant);
}, getSelectedMedia = (product, currentSkuData) => {
  if (!product)
    return [];
  let skuMedia = getMediaFromSource(currentSkuData);
  if ((skuMedia == null ? void 0 : skuMedia.length) > 0)
    return skuMedia;
  let { selectedVariantId, variants } = product || {}, variantMedia = getVariantMedia(variants, selectedVariantId);
  return (variantMedia == null ? void 0 : variantMedia.length) > 0 ? variantMedia : getMediaFromSource(product);
};

// app/templates/PD/Tmp_001/constants.ts
var SectionsMap = {
  Images: {
    component: Gallery_default,
    getProps: (data, currentSkuData) => {
      let media = getSelectedMedia(data, currentSkuData);
      return {
        product: currentSkuData,
        media
      };
    }
  },
  Name: {
    component: ProductDescription,
    getProps: (data, currentSkuData) => {
      var _a2, _b;
      let media = getSelectedMedia(data, currentSkuData), imagesData = getImageData(media);
      return {
        brandName: currentSkuData == null ? void 0 : currentSkuData.brandName,
        name: currentSkuData == null ? void 0 : currentSkuData.productTitle,
        productImage: (_a2 = imagesData == null ? void 0 : imagesData[0]) == null ? void 0 : _a2.url,
        highlights: (_b = currentSkuData == null ? void 0 : currentSkuData.brandCustomInfo) == null ? void 0 : _b.subtitle
      };
    }
  },
  Rating: {
    component: ProductRating,
    getProps: (data) => ({
      rating: data == null ? void 0 : data.rating,
      reviewCount: data == null ? void 0 : data.reviewCount
    })
  },
  Price: {
    component: ProductPrice,
    getProps: (_, currentSkuData) => ({
      price: currentSkuData == null ? void 0 : currentSkuData.finalPrice
    })
  },
  Shades: {
    component: SizeAndShade_default,
    getProps: (data) => ({
      variantType: data == null ? void 0 : data.variantType,
      productType: data == null ? void 0 : data.productType,
      variants: data == null ? void 0 : data.variants,
      productTitle: data == null ? void 0 : data.name
    })
  },
  Details: {
    component: ProductDetails_default2,
    getProps: (data, currentSkuData) => ({
      description: data == null ? void 0 : data.description,
      ingredients: data == null ? void 0 : data.ingredients,
      howToUse: data == null ? void 0 : data.howToUse,
      currentSkuData
    })
  },
  Delivery: {
    component: Delivery_default,
    getProps: (data, currentSkuData) => ({
      product: data,
      currSkuData: currentSkuData == null ? void 0 : currentSkuData.sku
    })
  },
  Review: {
    component: RatingReviews_default,
    getProps: (data, currentSkuData) => ({
      product: data,
      currSkuData: currentSkuData
    })
  },
  Recos: {
    component: Recommendations_default,
    getProps: (data) => ({
      product: data
    })
  },
  AddToBag: {
    component: ProductActions_default,
    getProps: (_, currentSkuData) => ({
      product: currentSkuData
    })
  },
  Authenticity: {
    component: Authenticity_default,
    getProps: (data, selectedProductData) => ({
      product: data,
      selectedProductData
    })
  },
  SoldBy: {
    component: Manufacture_default
  },
  HeaderBanner: {
    component: BrandLogo_default,
    getProps: (data, __, metaData) => ({
      src: metaData == null ? void 0 : metaData.brandStripUrl,
      alt: "Logo",
      brandId: data == null ? void 0 : data.brandId,
      brandName: data == null ? void 0 : data.brandName
    })
  },
  FooterBanner: {
    component: FooterBanner_default,
    getProps: (data, _, metaData) => ({
      src: metaData == null ? void 0 : metaData.footerBrandUrl,
      alt: "Logo",
      brandId: data == null ? void 0 : data.brandId,
      brandName: data == null ? void 0 : data.brandName
    })
  }
};

// app/templates/PD/Tmp_001/index.tsx
var import_jsx_dev_runtime144 = require("@emotion/react/jsx-dev-runtime"), PdpWrapper = import_styled126.default.div`
  background-color: white;
`;
function ProductPage({
  data,
  metaData,
  templateData,
  currentSkuData
}) {
  let sections = templateData.sections || [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime144.jsxDEV)(PdpWrapper, { children: sections.map((section) => {
    var _a2, _b;
    let Component = (_a2 = SectionsMap[section.name]) == null ? void 0 : _a2.component, getProps = (_b = SectionsMap[section.name]) == null ? void 0 : _b.getProps, props = getProps ? getProps(data, currentSkuData, metaData) : {};
    return Component ? /* @__PURE__ */ (0, import_jsx_dev_runtime144.jsxDEV)(
      Component,
      {
        ...props
      },
      section.name,
      !1,
      {
        fileName: "app/templates/PD/Tmp_001/index.tsx",
        lineNumber: 25,
        columnNumber: 11
      },
      this
    ) : null;
  }) }, void 0, !1, {
    fileName: "app/templates/PD/Tmp_001/index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/factories/constants.ts
var TEMPLATE_MAP = {
  TMP_001: ProductPage
  // Add more template mappings here
}, constants_default = TEMPLATE_MAP;

// app/factories/PDTemplateFactory.tsx
var import_jsx_dev_runtime145 = require("react/jsx-dev-runtime"), TemplateFactory = class {
  constructor() {
    this.templates = constants_default;
  }
  renderTemplate({
    id,
    data,
    metaData,
    templateData,
    currentSkuData
  }) {
    let TemplateComponent = this.templates[id];
    return TemplateComponent ? /* @__PURE__ */ (0, import_jsx_dev_runtime145.jsxDEV)(
      TemplateComponent,
      {
        data,
        metaData,
        templateData,
        currentSkuData
      },
      void 0,
      !1,
      {
        fileName: "app/factories/PDTemplateFactory.tsx",
        lineNumber: 42,
        columnNumber: 7
      },
      this
    ) : (console.error(`Template with ID ${id} not found.`), null);
  }
  getRegisteredTemplateIds() {
    return Object.keys(this.templates);
  }
}, PDTemplateFactory_default = TemplateFactory;

// app/hooks/PD/useUpdateSkuId.ts
var import_react53 = require("@remix-run/react"), import_react54 = require("react");
var useUpdateSkuId = ({
  currentSkuData,
  parentId
}) => {
  let navigate = (0, import_react53.useNavigate)(), location = (0, import_react53.useLocation)();
  (0, import_react54.useEffect)(() => {
    if (currentSkuData) {
      let newUrl = handleSkuIdInUrl({
        currentSku: currentSkuData,
        parentId,
        pathname: location == null ? void 0 : location.pathname,
        search: location == null ? void 0 : location.search
      });
      newUrl && navigate(newUrl, { replace: !0 });
    }
  }, [parentId]);
};

// app/routes/$slug/snsp/$productId.tsx
var import_styled127 = __toESM(require("@emotion/styled"));

// app/utils/PD/metaInfo/constants.ts
var PRODUCT_NAME_REGEX = /Product_Name/g, NO_INDEX_NO_FOLLOW = "noindex, nofollow", DEFAULT_CURRENCY = "INR", SITE_NAME = "Nykaa", BASE_URL = "https://www.nykaa.com", SOCIAL_MEDIA_CARD_TYPE = "summary_large_image", SOCIAL_MEDIA_TYPE = "product";

// app/utils/PD/metaInfo/index.ts
var replacePlaceholders = (text, productName) => text.replace(PRODUCT_NAME_REGEX, productName), getSocialTags = (product, description) => ({
  "og:title": product.name,
  "twitter:title": product.name,
  "og:image:alt": product.imageUrl && product.name,
  "og:description": description,
  "twitter:description": description,
  "og:image": product.imageUrl,
  "twitter:image": product.imageUrl,
  "og:type": SOCIAL_MEDIA_TYPE,
  "twitter:card": SOCIAL_MEDIA_CARD_TYPE
}), getPriceInfo = (product) => ({
  "product:price:amount": typeof product == "object" && !Array.isArray(product) ? product.offerPrice : "",
  "product:price:currency": DEFAULT_CURRENCY
}), getProductMeta = ({
  product,
  config,
  location
}) => {
  var _a2, _b, _c, _d, _e, _f;
  let title = ((_c = (_b = (_a2 = config == null ? void 0 : config.configs) == null ? void 0 : _a2.meta) == null ? void 0 : _b.productPage) == null ? void 0 : _c.title) || "", baseDescription = ((_f = (_e = (_d = config == null ? void 0 : config.configs) == null ? void 0 : _d.meta) == null ? void 0 : _e.productPage) == null ? void 0 : _f.description) || "", productName = (product == null ? void 0 : product.name) || "", processedDescription = replacePlaceholders(
    baseDescription,
    productName
  );
  return {
    title: replacePlaceholders(title, productName),
    description: processedDescription,
    keywords: product == null ? void 0 : product.metaKeywords,
    robots: product != null && product.isSearchable ? NO_INDEX_NO_FOLLOW : "",
    "og:site_name": SITE_NAME,
    "og:url": `${BASE_URL}${location.pathname}`,
    ...getSocialTags(product, processedDescription),
    ...getPriceInfo(product)
  };
};

// app/shared/Carousel/hooks/useRemoveOpenModal.ts
var import_react55 = require("react"), import_react56 = require("@remix-run/react");
var useRemoveOpenModal = () => {
  let location = (0, import_react56.useLocation)(), { key: MODAL_KEY, value: MODAL_VALUE } = MODAL_QUERY_PARAM, navigate = (0, import_react56.useNavigate)();
  (0, import_react55.useEffect)(() => {
    let searchParams = new URLSearchParams(location.search), hasParam = searchParams.has(MODAL_KEY), queryValue = searchParams.get(MODAL_KEY);
    if (hasParam && queryValue === MODAL_VALUE)
      if (window.history.length <= 1 || document.referrer === "") {
        searchParams.delete(MODAL_KEY);
        let searchParamsData = searchParams.toString(), newUrl = `${location.pathname}${searchParamsData ? `?${searchParamsData}` : ""}`;
        navigate(newUrl, { replace: !0 });
      } else
        navigate(-1);
  }, []), (0, import_react55.useEffect)(() => {
    var _a2;
    (_a2 = location.state) != null && _a2.scroll && window.scrollTo(location.state.scroll.x, location.state.scroll.y);
  }, [location]);
}, useRemoveOpenModal_default = useRemoveOpenModal;

// app/actions/navigate/goToStandardPD.ts
var getStandardPDUrl = (url) => url.replace(SNSP_SLUG, PD_SLUG), redirectToStandardPD = (url) => redirectToUrl(getStandardPDUrl(url));

// app/hooks/PD/useWishlistData.tsx
var import_react57 = require("react");
var useWishlistData = () => {
  let { user, setUser } = useAuth(), isLoggedIn = useIsLoggedIn(), { fetcher } = useFetcherHandler({
    onSuccess: (data) => {
      var _a2;
      let wishlistData = ((_a2 = data == null ? void 0 : data.response) == null ? void 0 : _a2.wishlist) || [];
      setUser({ ...user, wishlist: wishlistData });
    },
    onError: () => {
    },
    successHandler: (data) => data.status || !1
  });
  (0, import_react57.useEffect)(() => {
    isLoggedIn && fetcher.submit(
      { source: "react", formKey: (user == null ? void 0 : user.formKey) || "" },
      {
        method: API_METHODS.POST,
        action: ACTION_ROUTES.fetchWishlistIds,
        encType: CONTENT_TYPES.APPLICATION_JSON
      }
    );
  }, [isLoggedIn]);
};

// app/routes/$slug/snsp/$productId.tsx
var import_jsx_dev_runtime146 = require("@emotion/react/jsx-dev-runtime"), loader3 = async ({ params, request }) => {
  await loggerInitialized;
  let { productId } = params, url = new URL(request.url), skuId = url.searchParams.get(QUERY_PARAM_KEYS.SKU);
  try {
    let fetchDetailsUrl = FETCH_PRODUCT_DETAILS(productId), [data, config] = await Promise.all([
      fetchData(fetchDetailsUrl),
      fetchConfig()
    ]), transformedData = transformProductData(data, skuId);
    return (0, import_node8.json)({
      ...transformedData,
      config
    });
  } catch (error) {
    if (logger && logger.error ? logger.error("Error fetching product data:", error) : console.error("Error fetching product data:", error), error) {
      let path = url.pathname + url.search;
      return redirectToStandardPD(path);
    }
    throw error;
  }
}, meta2 = ({ data, location }) => !data || !data.info || !data.config ? {} : getProductMeta({
  product: data.info,
  config: data.config,
  location
}), shouldRevalidate3 = () => !1, PdpWrapper2 = import_styled127.default.div`
  background-color: white;
`;
function ProductPage2() {
  var _a2, _b, _c;
  let config = useConfig(), productData = (0, import_react60.useLoaderData)(), recommendationsRef = (0, import_react59.useRef)(null), [searchParams] = (0, import_react60.useSearchParams)(), [currentSkuData, setCurrentSkuData] = (0, import_react59.useState)(
    getSelectedProductData(productData == null ? void 0 : productData.info)
  );
  (0, import_react59.useEffect)(() => {
    let skuId = searchParams.get(QUERY_PARAM_KEYS.SKU), updatedSkuData = getSelectedProductData(productData == null ? void 0 : productData.info, skuId);
    setCurrentSkuData(updatedSkuData);
  }, [searchParams, productData == null ? void 0 : productData.info]);
  let templateFactory = new PDTemplateFactory_default(), customTheme = ((_a2 = productData == null ? void 0 : productData.templateData) == null ? void 0 : _a2.theme) || {}, theme2 = ThemeFactory_default.extendTheme(customTheme);
  return useUpdateSkuId({
    currentSkuData,
    parentId: (_b = productData == null ? void 0 : productData.info) == null ? void 0 : _b.id
  }), useRemoveOpenModal_default(), useWishlistData(), /* @__PURE__ */ (0, import_jsx_dev_runtime146.jsxDEV)(import_react58.ThemeProvider, { theme: theme2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime146.jsxDEV)(ProductContext.Provider, { value: { recommendationsRef }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime146.jsxDEV)("div", { children: productData.status === "success" && productData.info ? /* @__PURE__ */ (0, import_jsx_dev_runtime146.jsxDEV)(PdpWrapper2, { children: templateFactory.renderTemplate({
    id: (_c = productData == null ? void 0 : productData.templateData) == null ? void 0 : _c.id,
    data: productData == null ? void 0 : productData.info,
    metaData: productData == null ? void 0 : productData.metaData,
    templateData: productData == null ? void 0 : productData.templateData,
    currentSkuData
  }) }, void 0, !1, {
    fileName: "app/routes/$slug/snsp/$productId.tsx",
    lineNumber: 110,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime146.jsxDEV)("p", { children: "Loading..." }, void 0, !1, {
    fileName: "app/routes/$slug/snsp/$productId.tsx",
    lineNumber: 108,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/$slug/snsp/$productId.tsx",
    lineNumber: 106,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/$slug/snsp/$productId.tsx",
    lineNumber: 105,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/$slug/snsp/$productId.tsx",
    lineNumber: 104,
    columnNumber: 5
  }, this);
}

// app/routes/sns-api/reviewImages.ts
var reviewImages_exports = {};
__export(reviewImages_exports, {
  loader: () => loader4
});
var import_node9 = require("@remix-run/node");
var loader4 = async ({ request }) => {
  let url = new URL(request.url), queryParams = Object.fromEntries(url.searchParams), fetchReviewImagesUrl = FETCH_PRODUCT_REVIEW_IMAGES(
    queryParams.productId
  );
  delete queryParams.productId;
  let queryString = queryStringFromParams(queryParams), fullUrl = process.env.API_HOST + fetchReviewImagesUrl + queryString;
  try {
    let data = await (await apiHelper({ url: fullUrl, method: "GET" })).json(), transformedData = transformReviewImagesResponse(data.response);
    return (0, import_node9.json)({
      status: !0,
      response: { ...transformedData }
    });
  } catch (error) {
    return (0, import_node9.json)({ error: error.message }, { status: 400 });
  }
};

// app/routes/sns-api/autoAddress.ts
var autoAddress_exports = {};
__export(autoAddress_exports, {
  loader: () => loader5
});
var import_node10 = require("@remix-run/node");

// app/network/constants/errors.ts
var SOMETHING_WENT_WRONG = "Something went wrong", TRY_AGAIN = "Something went wrong. try again";

// app/routes/sns-api/autoAddress.ts
var loader5 = async ({ request }) => {
  var _a2;
  try {
    let url = new URL(request.url), pincode = url.searchParams.get("pincode"), productType = url.searchParams.get("productType"), sku = url.searchParams.get("sku"), domainValue = process.env.API_HOST;
    if (!pincode || !productType || !sku)
      return (0, import_node10.json)({
        status: !1,
        message: SOMETHING_WENT_WRONG
      });
    let data = await (await apiHelper({
      url: `${domainValue}${FETCH_AUTO_ADDRESS}?pincode=${pincode}&productType=${productType}&sku=${sku}`
    })).json();
    return data.status !== "success" ? (0, import_node10.json)({
      status: !1,
      message: data.message || TRY_AGAIN
    }) : (0, import_node10.json)({
      status: !0,
      state: ((_a2 = data == null ? void 0 : data.response) == null ? void 0 : _a2.state) || ""
    });
  } catch (error) {
    return logger.error(error, "Auto address API error"), (0, import_node10.json)({
      status: !1,
      message: TRY_AGAIN
    });
  }
};

// app/routes/sns-api/reactConfig.ts
var reactConfig_exports = {};
__export(reactConfig_exports, {
  loader: () => loader6
});
var import_node11 = require("@remix-run/node");
var loader6 = async ({ request }) => {
  try {
    let baseUrl2 = process.env.API_HOST, requestCookies = request.headers.get("cookie") || "", whitelistCookies = filterCookies(requestCookies), response = await apiHelper({
      url: `${baseUrl2}/${REACT_CONFIG}`,
      method: API_METHODS.POST,
      headers: { cookie: whitelistCookies }
    }), res = await response.json(), headers = {};
    return response.headers.forEach((value, key) => {
      key !== "content-length" && (headers[key] = value);
    }), (0, import_node11.json)(res, { headers });
  } catch (error) {
    return (0, import_node11.json)({ error: error.message }, { status: 500 });
  }
};

// app/routes/sns-api/heartbeat.ts
var heartbeat_exports = {};
__export(heartbeat_exports, {
  loader: () => loader7
});
var import_node12 = require("@remix-run/node"), loader7 = async () => (0, import_node12.json)({ status: "ok" }, { status: 200 });

// app/routes/sns-api/notifyMe.ts
var notifyMe_exports = {};
__export(notifyMe_exports, {
  action: () => action7
});
var action7 = async ({ request }) => {
  let formData = await request.formData(), params = {
    isAjax: "1",
    subscription_email: formData.get("email"),
    variantName: formData.get("variantName"),
    offerPrice: formData.get("offerPrice"),
    product: formData.get("productId")
  };
  return handleAction(request, {
    path: NOTIFY_ME,
    method: API_METHODS.POST,
    formData: params
  });
};

// app/routes/sns-api/wishlist.ts
var wishlist_exports = {};
__export(wishlist_exports, {
  action: () => action8
});
var import_node13 = require("@remix-run/node");
var action8 = async ({ request }) => {
  try {
    let body = await request.json(), path = body.intent === "add" ? ADD_TO_WISHLIST(body.product, body.formKey) : REMOVE_FROM_WISHLIST(body.product);
    return handleAction(request, {
      path,
      method: API_METHODS.POST,
      body: { product: body.product }
    });
  } catch (error) {
    return console.error("Error in wishlist:", error), (0, import_node13.json)({ error: "Failed to update wishlist" }, { status: 400 });
  }
};

// app/routes/sns-api/logout.ts
var logout_exports = {};
__export(logout_exports, {
  action: () => action9
});
var import_node14 = require("@remix-run/node");
var createErrorResponse = (message, status) => (0, import_node14.json)({ status: "error", message }, { status }), action9 = async ({ request }) => {
  try {
    let domainValue = process.env.API_HOST, response = await apiHelper({
      url: `${domainValue}${LOGOUT_URL}`,
      method: API_METHODS.GET,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }), apiResponse = await response.json().catch(() => ({
      success: !1,
      message: "Invalid response format"
    }));
    return response.ok ? apiResponse.success ? (0, import_node14.json)({ status: "success", message: "Logged out successfully" }) : createErrorResponse("Failed to logout", 400) : createErrorResponse(
      apiResponse.message || "Logout failed",
      response.status
    );
  } catch (error) {
    return console.error("Logout error:", error), createErrorResponse("Error during logout", 500);
  }
};

// app/routes/api/heartbeat.ts
var heartbeat_exports2 = {};
__export(heartbeat_exports2, {
  loader: () => loader8
});
var import_node15 = require("@remix-run/node"), loader8 = async () => (0, import_node15.json)({ status: "ok" }, { status: 200 });

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_styled128 = __toESM(require("@emotion/styled")), import_jsx_dev_runtime147 = require("@emotion/react/jsx-dev-runtime"), CenterStyle = import_styled128.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime147.jsxDEV)(CenterStyle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime147.jsxDEV)("h1", { children: "Welcome to Remix" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/snsp/build/entry.client-H43REIQC.js", imports: ["/snsp/build/_shared/chunk-A3WXP2RJ.js", "/snsp/build/_shared/chunk-YU2KZJZU.js", "/snsp/build/_shared/chunk-BSWNUATL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/snsp/build/root-MKP64JTL.js", imports: ["/snsp/build/_shared/chunk-SKAMIQXF.js", "/snsp/build/_shared/chunk-RCFQ4GVJ.js", "/snsp/build/_shared/chunk-JLLMDLZO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$slug/snsp/$productId": { id: "routes/$slug/snsp/$productId", parentId: "root", path: ":slug/snsp/:productId", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/$slug/snsp/$productId-U7MF2TY5.js", imports: ["/snsp/build/_shared/chunk-S5DKQ4MC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/heartbeat": { id: "routes/api/heartbeat", parentId: "root", path: "api/heartbeat", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/api/heartbeat-MKWEXG3I.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/snsp/build/routes/index-SQS7MGT2.js", imports: ["/snsp/build/_shared/chunk-S5DKQ4MC.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sns-api/addItemsToCart": { id: "routes/sns-api/addItemsToCart", parentId: "root", path: "sns-api/addItemsToCart", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/sns-api/addItemsToCart-ZL5ICUDI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sns-api/addressDetails": { id: "routes/sns-api/addressDetails", parentId: "root", path: "sns-api/addressDetails", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/sns-api/addressDetails-QMWC67HU.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sns-api/autoAddress": { id: "routes/sns-api/autoAddress", parentId: "root", path: "sns-api/autoAddress", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/sns-api/autoAddress-D42JRDFR.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sns-api/fetchWishlistIds": { id: "routes/sns-api/fetchWishlistIds", parentId: "root", path: "sns-api/fetchWishlistIds", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/sns-api/fetchWishlistIds-6TYBRWNX.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sns-api/heartbeat": { id: "routes/sns-api/heartbeat", parentId: "root", path: "sns-api/heartbeat", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/sns-api/heartbeat-6KQTUEG3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sns-api/logout": { id: "routes/sns-api/logout", parentId: "root", path: "sns-api/logout", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/sns-api/logout-DCSD6YTI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sns-api/notifyMe": { id: "routes/sns-api/notifyMe", parentId: "root", path: "sns-api/notifyMe", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/sns-api/notifyMe-AQ2ZW4P3.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sns-api/productDetails": { id: "routes/sns-api/productDetails", parentId: "root", path: "sns-api/productDetails", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/sns-api/productDetails-CLVO6CTF.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sns-api/reactConfig": { id: "routes/sns-api/reactConfig", parentId: "root", path: "sns-api/reactConfig", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/sns-api/reactConfig-LPV2DM65.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sns-api/recommendations": { id: "routes/sns-api/recommendations", parentId: "root", path: "sns-api/recommendations", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/sns-api/recommendations-U62OCGEZ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sns-api/reviewImages": { id: "routes/sns-api/reviewImages", parentId: "root", path: "sns-api/reviewImages", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/sns-api/reviewImages-AVWBF5CP.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sns-api/savedAddresses": { id: "routes/sns-api/savedAddresses", parentId: "root", path: "sns-api/savedAddresses", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/sns-api/savedAddresses-YA6SVJBY.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sns-api/wishlist": { id: "routes/sns-api/wishlist", parentId: "root", path: "sns-api/wishlist", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/sns-api/wishlist-PD3ZJEUM.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/snsr/reviews/$productId": { id: "routes/snsr/reviews/$productId", parentId: "root", path: "snsr/reviews/:productId", index: void 0, caseSensitive: void 0, module: "/snsp/build/routes/snsr/reviews/$productId-W3R54LSH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "45b272d3", hmr: void 0, url: "/snsp/build/manifest-45B272D3.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/snsp/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/sns-api/fetchWishlistIds": {
    id: "routes/sns-api/fetchWishlistIds",
    parentId: "root",
    path: "sns-api/fetchWishlistIds",
    index: void 0,
    caseSensitive: void 0,
    module: fetchWishlistIds_exports
  },
  "routes/sns-api/recommendations": {
    id: "routes/sns-api/recommendations",
    parentId: "root",
    path: "sns-api/recommendations",
    index: void 0,
    caseSensitive: void 0,
    module: recommendations_exports
  },
  "routes/snsr/reviews/$productId": {
    id: "routes/snsr/reviews/$productId",
    parentId: "root",
    path: "snsr/reviews/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: productId_exports
  },
  "routes/sns-api/addItemsToCart": {
    id: "routes/sns-api/addItemsToCart",
    parentId: "root",
    path: "sns-api/addItemsToCart",
    index: void 0,
    caseSensitive: void 0,
    module: addItemsToCart_exports
  },
  "routes/sns-api/addressDetails": {
    id: "routes/sns-api/addressDetails",
    parentId: "root",
    path: "sns-api/addressDetails",
    index: void 0,
    caseSensitive: void 0,
    module: addressDetails_exports
  },
  "routes/sns-api/productDetails": {
    id: "routes/sns-api/productDetails",
    parentId: "root",
    path: "sns-api/productDetails",
    index: void 0,
    caseSensitive: void 0,
    module: productDetails_exports
  },
  "routes/sns-api/savedAddresses": {
    id: "routes/sns-api/savedAddresses",
    parentId: "root",
    path: "sns-api/savedAddresses",
    index: void 0,
    caseSensitive: void 0,
    module: savedAddresses_exports
  },
  "routes/$slug/snsp/$productId": {
    id: "routes/$slug/snsp/$productId",
    parentId: "root",
    path: ":slug/snsp/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: productId_exports2
  },
  "routes/sns-api/reviewImages": {
    id: "routes/sns-api/reviewImages",
    parentId: "root",
    path: "sns-api/reviewImages",
    index: void 0,
    caseSensitive: void 0,
    module: reviewImages_exports
  },
  "routes/sns-api/autoAddress": {
    id: "routes/sns-api/autoAddress",
    parentId: "root",
    path: "sns-api/autoAddress",
    index: void 0,
    caseSensitive: void 0,
    module: autoAddress_exports
  },
  "routes/sns-api/reactConfig": {
    id: "routes/sns-api/reactConfig",
    parentId: "root",
    path: "sns-api/reactConfig",
    index: void 0,
    caseSensitive: void 0,
    module: reactConfig_exports
  },
  "routes/sns-api/heartbeat": {
    id: "routes/sns-api/heartbeat",
    parentId: "root",
    path: "sns-api/heartbeat",
    index: void 0,
    caseSensitive: void 0,
    module: heartbeat_exports
  },
  "routes/sns-api/notifyMe": {
    id: "routes/sns-api/notifyMe",
    parentId: "root",
    path: "sns-api/notifyMe",
    index: void 0,
    caseSensitive: void 0,
    module: notifyMe_exports
  },
  "routes/sns-api/wishlist": {
    id: "routes/sns-api/wishlist",
    parentId: "root",
    path: "sns-api/wishlist",
    index: void 0,
    caseSensitive: void 0,
    module: wishlist_exports
  },
  "routes/sns-api/logout": {
    id: "routes/sns-api/logout",
    parentId: "root",
    path: "sns-api/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/api/heartbeat": {
    id: "routes/api/heartbeat",
    parentId: "root",
    path: "api/heartbeat",
    index: void 0,
    caseSensitive: void 0,
    module: heartbeat_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
