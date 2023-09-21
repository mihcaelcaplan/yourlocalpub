"use strict";
exports.id = 604;
exports.ids = [604];
exports.modules = {

/***/ 8604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CartItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_publication_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3571);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_cart_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3333);
/* __next_internal_client_entry_do_not_use__ default auto */ 





function CartItem({ item_key, checkout }) {
    // get context
    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app_components_cart_context__WEBPACK_IMPORTED_MODULE_4__/* .CartContext */ .A);
    // state
    console.log(item_key);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-gray-100 grid grid-cols-4 p-4 gap-2 justify-center text-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: _public_publication_list__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[item_key].route,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: "pr-4",
                    src: _public_publication_list__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[item_key].coverImage,
                    alt: `$(item.title) cover image`,
                    width: 100,
                    height: 100,
                    sizes: "100vw",
                    style: {
                        width: "100%",
                        height: "auto"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center border-r-2 pl-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: " text-sm text-stone-700 pb-2",
                        children: "Title"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: _public_publication_list__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[item_key].title
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center border-r-2 pl-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: " text-sm text-stone-700 pb-2",
                        children: "Quantity"
                    }),
                    checkout && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: cart[item_key].quantity
                    }),
                    !checkout && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(QuantityPicker, {
                        cart: cart,
                        setCart: setCart,
                        item_key: item_key
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center pl-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: " text-sm text-stone-700 pb-2",
                        children: "Price"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "\xa3",
                            _public_publication_list__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[item_key].price
                        ]
                    })
                ]
            })
        ]
    });
}
function QuantityPicker({ cart, setCart, item_key }) {
    // set up state
    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(cart[item_key].quantity);
    // // set cart quantity when quantity is updated within an item
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((cart, item_key, setCart)=>{
        const newCart = {
            ...cart
        };
        newCart[item_key].quantity = quantity;
        setCart((cart)=>({
                ...newCart
            }));
    }, [
        quantity
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-row items-center justify-center ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " bg-slate-200 hover:bg-slate-400 rounded-md p-1 pb",
                onClick: ()=>{
                    setQuantity(Number(quantity) - 1);
                },
                children: "-"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: "text-center w-6",
                    onChange: (e)=>{
                        // logic to check that the input value is a number
                        if (!isNaN(e.target.value)) {
                            setQuantity(Number(e.target.value));
                        } else {
                            setQuantity(quantity);
                        }
                    },
                    value: quantity
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " bg-rose-200 hover:bg-rose-600 rounded-md p-1",
                onClick: ()=>{
                    setQuantity(Number(quantity) + 1);
                },
                children: "+"
            })
        ]
    });
}


/***/ }),

/***/ 3571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    orpheus_st: {
        id: 1,
        status: "active",
        coverImage: "/orpheus_st_paintings/orpheus_1_cover.png",
        route: "/publications/orpheus_st_paintings",
        title: "Orpheus Street Paintings",
        publicationYear: 2023,
        detail: "Hardcover",
        stockQuantity: 15,
        info: "Orpheus Street Paintings is 57 paged hardback book that collates the work of Nelson Diplexcito. The book introduces you to the artists studio setting and then showcases his body of work ranging from large scale oil on canvas to smaller oil on paper pieces. The book also contains an interview conducted by Jungwon Jay Hur about Diplexcitos practice.",
        images_location: "/orpheus_st_paintings",
        variants: [],
        price: 35.00
    },
    below_bunyan: {
        id: 2,
        status: "active",
        coverImage: "/below_bunyan/belowbunyan_1_cover.png",
        route: "/publications/below_bunyan",
        title: "Below Bunyan",
        publicationYear: 2021,
        detail: "Hardcover",
        stockQuantity: 30,
        info: "Below Bunyan is a book that represents the diverse artistic spirit of the next generation, captured through compelling details that reveal the interior world of an oft-overlooked phenomenon.",
        images_location: "/below_bunyan",
        variants: [],
        price: 15.00
    },
    babe_rainbow: {
        id: 3,
        status: "active",
        coverImage: "/babe_rainbow/baberainbow_1_cover.png",
        route: "/publications/babe_rainbow",
        title: "Mildly High on the Babe Rainbow",
        publicationYear: 2023,
        detail: "Hardcover",
        stockQuantity: 15,
        info: "Below Bunyan is a book that represents the diverse artistic spirit of the next generation, captured through compelling details that reveal the interior world of an oft-overlooked phenomenon.",
        images_location: "/babe_rainbow",
        variants: [],
        price: 50.00
    }
});


/***/ })

};
;