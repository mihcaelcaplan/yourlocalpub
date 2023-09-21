exports.id = 753;
exports.ids = [753];
exports.modules = {

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 4176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AddToCart)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./app/components/cart_context.js
var cart_context = __webpack_require__(3333);
;// CONCATENATED MODULE: ./app/cart/components/go_to_cart.js

function GoToCart({ publication_key, isHidden, setHidden }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: isHidden + " fixed top-1/3 md:top-[25%] left-[17%] flex flex-col h-2/6 md:h-1/2 w-4/6 bg-slate-100 z-10 shadow-2xl",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-stone-200 p-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-[0.7rem] rounded-full bg-red-500 hover:bg-red-800 w-4 h-4 text-center ml-auto",
                    onClick: ()=>{
                        setHidden("hidden");
                    },
                    children: "X"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-center m-auto",
                children: [
                    "You're a right good pub-goer.",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "Well on ya, mate!",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-2 mt-auto mb-auto text-center p-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "mr-4 bg-amber-200 hover:bg-amber-400",
                        href: "/",
                        children: "Continue Shopping"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: " ml-4 bg-cyan-500 hover:bg-cyan-600",
                        href: "/cart",
                        children: "Go To Cart"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/cart/components/add_to_cart.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





function AddToCart({ publication_key }) {
    // set up state and storage
    const [cart, setCart] = (0,react_.useContext)(cart_context/* CartContext */.A);
    const [popupHidden, setpopupHidden] = (0,react_.useState)("hidden");
    function AddToCart() {
        const newCart = {
            ...cart
        };
        if (newCart[publication_key]) {
            newCart[publication_key].quantity += 1;
        } else {
            newCart[publication_key] = {
                quantity: 1
            };
        }
        console.log(newCart);
        setCart((cart)=>({
                ...newCart
            }));
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GoToCart, {
                isHidden: popupHidden,
                setHidden: setpopupHidden,
                publication_key: publication_key
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                href: "/cart",
                className: "h-6 w-auto p-4 bg-slate-100 text-stone-800 hover:bg-amber-50 border-rose-100 border-2 rounded-full text-center align-middle  text-[.75] leading-[0rem] sm:text-[1.25rem] sm:leading-[0rem] ",
                onClick: ()=>{
                    AddToCart();
                    setpopupHidden("visible");
                },
                children: "Add To Cart"
            })
        ]
    });
}


/***/ }),

/***/ 8772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoGallery)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function InfoGallery({ publication, image_paths }) {
    const [activeImage, setActiveImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(publication.coverImage);
    const allImages = image_paths;
    const inactiveImages = image_paths.filter((element)=>element != activeImage);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pb-6 sm:pl-10 sm:pr-10 grid grid-cols-4 grid-rows-5 sm:grid-cols-5 sm:grid-rows-4 gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                className: "col-span-4 row-span-4",
                src: activeImage,
                alt: `$(publication.title) cover image`,
                width: 100,
                height: 100,
                sizes: "100vw",
                style: {
                    width: "100%",
                    height: "auto"
                }
            }),
            allImages.map((bookImage)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: bookImage === activeImage ? "opacity-100" : "opacity-50",
                    onClick: ()=>setActiveImage(bookImage),
                    src: bookImage,
                    alt: `$(publication.title) cover image`,
                    width: 100,
                    height: 100,
                    sizes: "100vw",
                    style: {
                        width: "100%",
                        height: "auto"
                    }
                }, bookImage))
        ]
    });
}


/***/ }),

/***/ 6332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemDescription)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_cart_components_add_to_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4176);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const getInventory = async (productId)=>{
    const response = await fetch("https://p3p22yr8sg.execute-api.eu-west-2.amazonaws.com/default/checkInventory?" + new URLSearchParams({
        productId: productId
    }));
    if (response.ok) {
        const data = await response.json();
        return data;
    }
};
function ItemDescription({ publication, publication_key }) {
    // get inventor on load
    const [inventory, setInventory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        soldOut: false,
        itemsLeft: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((publication, publication_key)=>{
        console.log("updating inv.");
        // go update the inventory    
        const response = getInventory(publication_key).then((response)=>{
            const soldOut = response.lockedInventory <= publication.stockQuantity ? false : true;
            const itemsLeft = publication.stockQuantity - response.lockedInventory;
            const updateInventory = {
                soldOut: soldOut,
                itemsLeft: itemsLeft
            };
            setInventory(updateInventory);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid grid-cols-1 m-2 sm:m-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                children: publication.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: "Published: " + publication.publicationYear
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: publication.detail
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-2 mb-4 w-inherit",
                children: publication.info
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: `Edition of ${publication.stockQuantity} (${inventory.itemsLeft} copies left!)`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "\xa3" + publication.price
                            })
                        ]
                    }),
                    inventory.soldOut && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-6 w-auto p-4 bg-rose-100 text-stone-800 border-rose-400 border-2 rounded-full text-center align-middle  text-[.75] leading-[0rem] sm:text-[1.25rem] sm:leading-[0rem]",
                        children: " Sold out!"
                    }),
                    !inventory.soldOut && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_cart_components_add_to_cart__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        publication_key: publication_key
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/mcaplan/Documents/yourlocalpub/app/components/info_gallery.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 3216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/mcaplan/Documents/yourlocalpub/app/publications/components/itemDescription.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 5715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ItemLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: children
    });
}


/***/ })

};
;