"use strict";
(() => {
var exports = {};
exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const PStyle = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  white-space: pre-wrap;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
function PText({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PStyle, {
        className: "para",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: children
        })
    }));
};


/***/ }),

/***/ 342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(41);
;// CONCATENATED MODULE: ./src/components/ContactForm.js



const FormStyle = (external_styled_components_default()).form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;
function ContactForm() {
    const { 0: name , 1: setName  } = (0,external_react_.useState)('');
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)('');
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)('');
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FormStyle, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        htmlFor: "name",
                        children: [
                            "Your Name",
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                id: "name",
                                name: "name",
                                value: name,
                                onChange: (e)=>setName(e.target.value)
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        htmlFor: "email",
                        children: [
                            "Your Email",
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "email",
                                id: "email",
                                name: "email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value)
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        htmlFor: "message",
                        children: [
                            "Your message",
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                type: "text",
                                id: "message",
                                name: "message",
                                value: message,
                                onChange: (e)=>setMessage(e.target.value)
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "submit",
                    children: "Send"
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./src/components/PText.js
var components_PText = __webpack_require__(305);
;// CONCATENATED MODULE: ./src/components/ContactInfoItem.js





const ItemStyles = (external_styled_components_default()).div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`;
function ContactInfoItem({ icon =/*#__PURE__*/ jsx_runtime_.jsx(md_.MdPlace, {}) , text ='I need text ' ,  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ItemStyles, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "icon",
                children: icon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "info",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_PText/* default */.Z, {
                    children: text
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/components/SectionTitle.js
var SectionTitle = __webpack_require__(871);
;// CONCATENATED MODULE: ./src/components/ContactSection.js







const ContactSectionStyle = (external_styled_components_default()).div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;
function ContactSection() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(ContactSectionStyle, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                    heading: "contact",
                    subheading: "get in touch"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "contactSection__wrapper",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "left",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ContactInfoItem, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdLocalPhone, {}),
                                    text: "Phone"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ContactInfoItem, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdEmail, {}),
                                    text: "karira.charles@gmail.com"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ContactInfoItem, {
                                    text: "Nairobi, Kenya 🇰🇪"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "right",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ContactForm, {})
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/assets/images/map.png
/* harmony default export */ const map = ({"src":"/_next/static/media/map.c59e1b0d.png","height":569,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADBAMAAABc5lN7AAAAJFBMVEVcXFxeW1tbW1tcWlpbWlpaWlpZWVlYWFhVVVVOTk5NTU1MTEwPqfIDAAAAF0lEQVR42mOYpuYcxLBc1VGVYQerkioAHd8DiI78eDAAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/Map.js





const MapStyles = (external_styled_components_default()).div`
  background: url(${map}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;
function Map() {
    return(/*#__PURE__*/ _jsx(MapStyles, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "container",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "map__card",
                children: [
                    /*#__PURE__*/ _jsx("h3", {
                        className: "map__card__heading",
                        children: "Here is me"
                    }),
                    /*#__PURE__*/ _jsx(PText, {
                        children: "Nairobi, Kenya"
                    }),
                    /*#__PURE__*/ _jsx("a", {
                        className: "map__card__link",
                        href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237615.84551245123!2d36.9132373250316!3d-1.287911760075058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1643723563878!5m2!1sen!2ske",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Open in google map"
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./src/pages/Contact.js




function Contact() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(ContactSection, {})
    }));
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 41:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [871], () => (__webpack_exec__(342)));
module.exports = __webpack_exports__;

})();