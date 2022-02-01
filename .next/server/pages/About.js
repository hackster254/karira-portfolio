"use strict";
(() => {
var exports = {};
exports.id = 921;
exports.ids = [921];
exports.modules = {

/***/ 736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "react-typical"
const external_react_typical_namespaceObject = require("react-typical");
var external_react_typical_default = /*#__PURE__*/__webpack_require__.n(external_react_typical_namespaceObject);
// EXTERNAL MODULE: ./src/components/PText.js
var PText = __webpack_require__(305);
// EXTERNAL MODULE: ./src/components/Button.js
var Button = __webpack_require__(675);
;// CONCATENATED MODULE: ./src/assets/images/about-page-img.png
/* harmony default export */ const about_page_img = ({"src":"/_next/static/media/about-page-img.f8fe48d9.png","height":769,"width":566,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAAAAAD/rdHkAAAAQElEQVR42mNQN9AwC7JgUNbUdvW3ZTDQtK2fsIHBxcE4b/E+BjtTUV2GLgZrWwtNz1YGRYfI4OxWBi1tFXVxEwBxkQ0xY3qi0QAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/components/AboutInfoItem.js




const AboutItemStyles = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;
function AboutInfoItem({ title ='Title' , items =[
    'HTML',
    'CSS'
] ,  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(AboutItemStyles, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "title",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "items",
                children: items.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(PText/* default */.Z, {
                            children: item
                        })
                    }, index)
                )
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/components/ContactBanner.js
var ContactBanner = __webpack_require__(154);
;// CONCATENATED MODULE: ./src/pages/About.js









const AboutPageStyles = (external_styled_components_default()).div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;
function About() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AboutPageStyles, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "top-section",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "left",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "about__subheading",
                                            children: [
                                                "Hi, I am ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Charles Karira"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "about__heading",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_typical_default()), {
                                                loop: Infinity,
                                                wrapper: "b",
                                                steps: [
                                                    'Software developer 👨‍💻',
                                                    1000,
                                                    'Electrical Engineer 👨‍🏭',
                                                    2000,
                                                    'designer',
                                                    1000, 
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "about__info",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PText/* default */.Z, {
                                                children: [
                                                    "I am from Nairobi, Kenya. A place of 'cool waters'. I also love to create things that can be useful to others.",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "I love coding and everything tech!",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place."
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            btnText: "Download CV",
                                            btnLink: "#"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "right",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: about_page_img,
                                        alt: "me"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "about__info__items",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "about__info__item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "about__info__heading",
                                            children: "Education"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(AboutInfoItem, {
                                            title: "High School",
                                            items: [
                                                'Pioneer High School'
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(AboutInfoItem, {
                                            title: "Varsity",
                                            items: [
                                                'Jomo Kenyatta University of Agriculture and Technology', 
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "about__info__item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "about__info__heading",
                                            children: "My Skills"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(AboutInfoItem, {
                                            title: "FrontEnd",
                                            items: [
                                                'HTML',
                                                'CSS',
                                                'JavaScript',
                                                'REACT'
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(AboutInfoItem, {
                                            title: "BackEnd",
                                            items: [
                                                'Node',
                                                'Express',
                                                'Visual Basic .NET'
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(AboutInfoItem, {
                                            title: "Design",
                                            items: [
                                                'Figma'
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "about__info__item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "about__info__heading",
                                            children: "Experiences"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(AboutInfoItem, {
                                            title: "2016-2021",
                                            items: [
                                                'Engineering Student and Tech Hobbyist'
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(AboutInfoItem, {
                                            title: "2019-2021",
                                            items: [
                                                'IT support and Engineering Intern'
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(AboutInfoItem, {
                                            title: "2021-2022",
                                            items: [
                                                'Freelance web Developer'
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ContactBanner/* default */.Z, {})
            ]
        })
    }));
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("react-router-dom");

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
var __webpack_exports__ = __webpack_require__.X(0, [154], () => (__webpack_exec__(736)));
module.exports = __webpack_exports__;

})();