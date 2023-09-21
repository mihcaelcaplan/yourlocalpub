exports.id = 995;
exports.ids = [995];
exports.modules = {

/***/ 6254:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9236))

/***/ }),

/***/ 7174:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 3333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CartContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([]);


/***/ }),

/***/ 9236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(4047);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./app/components/cart_context.js
var cart_context = __webpack_require__(3333);
;// CONCATENATED MODULE: ./app/cart/components/cart_icon.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




function CartIcon() {
    // use context
    const [cart, setCart] = (0,react_.useContext)(cart_context/* CartContext */.A);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row hover:text-slate-600",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/cart",
                    children: "Cart"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Counter, {
                cart: cart
            })
        ]
    });
}
function Counter({ cart }) {
    // get total quantity in cart
    var total_quantity = 0;
    // useEffect(()=>{
    //     total_quantity = (localStorage.getItem("cart") === null) ? 0 : ''
    // }, [])
    Object.keys(cart).map((cart_key)=>total_quantity += cart[cart_key].quantity);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "h-4 w-4 bg-red-500 rounded-full text-center text-white text-[0.75rem] leading-[1rem]",
        children: total_quantity
    });
}

;// CONCATENATED MODULE: ./app/components/nav.js


const nav_padding = "";
function Nav({ nav_padding }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: nav_padding + " flex flex-row justify-between",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pr-4  hover:text-slate-600",
                children: "About Us"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CartIcon, {})
        ]
    });
}

;// CONCATENATED MODULE: ./app/components/sidepane.js



function SidePane() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col text-white fixed top-0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {
                nav_padding: "p-8"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-8 ",
                children: [
                    "Your Local Pub is a independent publisher created by Brad Gilbert and Michael Caplan. The aim is to create high quality limited run publications for smaller artists and designers.",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "The Books range from Fine Art to Photography",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "Artists:",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Nelson Diplexcito"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Jungwon Jay Hur"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Mataio Austin Dean"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Ula Taylor Reilly"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Kay Liang"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Curtis Rayment"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "Social Media: @YourLocalPub"
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/components/header.js




function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row pt-4 pb-2 pl-8 pr-8 justify-between",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "animate-pulse text-xl sm:text-2xl md:text-3xl",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/",
                    children: "Your Local Pub"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-end md:hidden text-base sm:text-l md:text-3xl",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Nav, {})
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





function RootLayout({ children }) {
    const [cart, setCart] = (0,react_.useState)({});
    // load cart from storage on page load
    (0,react_.useEffect)(()=>{
        if (localStorage.getItem("cart") != null) {
            const stored_cart = JSON.parse(localStorage.getItem("cart"));
            setCart(stored_cart);
        }
    // console.log("page loaded")
    }, []);
    // save cart to storage when modified
    (0,react_.useEffect)(()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
    // console.log(cart)
    }, [
        cart
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "",
            children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "flex flex-row h-full",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cart_context/* CartContext */.A.Provider, {
                    value: [
                        cart,
                        setCart
                    ],
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content-panel w-screen md:w-2/3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                                children
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "info_panel hidden md:w-1/3 md:flex h-auto min-h-screen",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(SidePane, {})
                        })
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 5764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/mcaplan/Documents/yourlocalpub/app/layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 4047:
/***/ (() => {



/***/ })

};
;