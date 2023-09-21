"use strict";
(() => {
var exports = {};
exports.id = 16;
exports.ids = [16];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 1830:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props");

/***/ }),

/***/ 199:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 6864:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head");

/***/ }),

/***/ 9569:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 2210:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config");

/***/ }),

/***/ 5359:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context");

/***/ }),

/***/ 7160:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8658:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 4517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'publications',
        {
        children: [
        'babe_rainbow',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5402)), "/Users/mcaplan/Documents/yourlocalpub/app/publications/babe_rainbow/page.js"],
          
        }]
      },
        {
          
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5715)), "/Users/mcaplan/Documents/yourlocalpub/app/publications/layout.js"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5764)), "/Users/mcaplan/Documents/yourlocalpub/app/layout.js"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }
      ]
      }.children;
const pages = ["/Users/mcaplan/Documents/yourlocalpub/app/publications/babe_rainbow/page.js"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/publications/babe_rainbow/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/publications/babe_rainbow/page",
        pathname: "/publications/babe_rainbow",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 5402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_cart_components_add_to_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4883);
/* harmony import */ var _app_components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8446);
/* harmony import */ var _app_components_info_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9147);
/* harmony import */ var _components_itemDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3216);
/* harmony import */ var _public_publication_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(233);






const fs = __webpack_require__(7147);
const path = __webpack_require__(1017);
// data structure
const publication_key = "babe_rainbow";
const publication = _public_publication_list__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z[publication_key];
// default function
function Home() {
    const image_paths = getImages(publication.images_location);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-2 sm:p-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_info_gallery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
                publication: publication,
                image_paths: image_paths
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_itemDescription__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                publication: publication,
                publication_key: publication_key
            })
        ]
    });
}
function getImages(images_location) {
    // look in the publication.images_location for all images
    const image_dir = path.join(process.cwd(), "/public" + images_location);
    const all_images = fs.readdirSync(image_dir);
    const image_paths = all_images.map((image)=>path.join(images_location, image));
    return image_paths;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,482,380,451,178,995,233,753,446,257], () => (__webpack_exec__(4517)));
module.exports = __webpack_exports__;

})();