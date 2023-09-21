"use strict";
exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 8446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4178);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_publication_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(233);



function Card({ publication_key }) {
    console.log(_public_publication_list__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.publication_key);
    const publication = _public_publication_list__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[publication_key];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white w-full h-auto m-auto rounded-lg drop-shadow-md",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                className: "",
                src: publication.coverImage,
                alt: `$(publication.title) cover image`,
                width: 100,
                height: 100,
                sizes: "100vw",
                style: {
                    width: "100%",
                    height: "auto"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-sm md:text-base p-2 active:bg-gray-200",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: publication.route,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: publication.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: "Published: " + publication.publicationYear
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: publication.detail
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: "Edition of: " + publication.stockQuantity
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: "\xa3" + publication.price
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;