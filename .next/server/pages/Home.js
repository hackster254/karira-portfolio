"use strict";
(() => {
var exports = {};
exports.id = 336;
exports.ids = [336];
exports.modules = {

/***/ 993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AboutSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/Button.js
var Button = __webpack_require__(675);
// EXTERNAL MODULE: ./src/components/PText.js
var PText = __webpack_require__(305);
// EXTERNAL MODULE: ./src/components/SectionTitle.js
var SectionTitle = __webpack_require__(871);
;// CONCATENATED MODULE: ./src/assets/images/coding.jpg
/* harmony default export */ const coding = ({"src":"/_next/static/media/coding.1487ea4a.jpg","height":4000,"width":6000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAJEUn//EABwQAAIABwAAAAAAAAAAAAAAAAECAAMEIjEygf/aAAgBAQABPwBa+a7C1QhTXmY//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEDBDL/2gAIAQIBAT8AViZrZ//EABcRAQADAAAAAAAAAAAAAAAAAAIAETH/2gAIAQMBAT8AQN5P/9k="});
;// CONCATENATED MODULE: ./src/components/AboutSection.js







const AboutSectionStyles = (external_styled_components_default()).div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
function AboutSection() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(AboutSectionStyles, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "aboutSection__left",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                            subheading: "Let me introduce myself",
                            heading: "About Me"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PText/* default */.Z, {
                            children: "I am a tech enthusiast and web developer. I also write articles in tech documenting my experiences. As a recent electrical engineering graduate I'm interested in Radio core network technologies and web development. In my free time I like to go on hikes for the thrill and adventure."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "aboutSection__buttons",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    btnText: "Works",
                                    btnLink: "/projects"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    btnText: "Read More",
                                    btnLink: "/about",
                                    outline: true
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "aboutSection__right",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "aboutImg",
                        src: coding,
                        alt: "Img"
                    })
                })
            ]
        })
    }));
};


/***/ }),

/***/ 773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(871);
/* harmony import */ var _PText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(305);






const ExperienceSectionStyles = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  padding: 10rem 0;
  textalign: center;
  .experience__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .experience__info {
    width: 100;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    margin-top: 5rem;
    border-radius: 12px;
  }
`;
function ExperienceSection() {
    return(/*#__PURE__*/ _jsx(ExperienceSectionStyles, {
        children: /*#__PURE__*/ _jsxs("div", {
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ _jsx(SectionTitle, {
                        heading: "My experience",
                        subheading: "skills earned"
                    })
                }),
                /*#__PURE__*/ _jsx("h1", {
                    children: "Hello from experiece"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "experiece__wrapper",
                    children: /*#__PURE__*/ _jsx(SwitchTransition, {
                        children: /*#__PURE__*/ _jsx(CSSTransition, {
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "experience__info",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "experience__heading",
                                        children: [
                                            /*#__PURE__*/ _jsx("p", {
                                                children: "COMPANY"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                children: "Role"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "experience__content",
                                        children: [
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "experience__duties",
                                                children: "Duties"
                                            }),
                                            /*#__PURE__*/ _jsx(PText, {
                                                children: "What i did as i worked over there"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                children: "WHAT I DID"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "experience__startstop",
                                                children: "START AND STOP"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    }));
};


/***/ }),

/***/ 846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HeroSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/assets/images/ck.jpg
/* harmony default export */ const ck = ({"src":"/_next/static/media/ck.b05df41c.jpg","height":3000,"width":4000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAAT/2gAMAwEAAhADEAAAAIxC/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDFAAFEiH/2gAIAQEAAT8As7GduLbxqV9KsSxz/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAMBEjL/2gAIAQIBAT8AY5ttyf/EABcRAAMBAAAAAAAAAAAAAAAAAAABElH/2gAIAQMBAT8AlYf/2Q=="});
// EXTERNAL MODULE: ./src/components/Button.js
var Button = __webpack_require__(675);
;// CONCATENATED MODULE: ./src/assets/images/social-media-arrow.svg
/* harmony default export */ const social_media_arrow = ({"src":"/_next/static/media/social-media-arrow.70610604.svg","height":46,"width":16});
;// CONCATENATED MODULE: ./src/assets/images/scroll-down-arrow.svg
/* harmony default export */ const scroll_down_arrow = ({"src":"/_next/static/media/scroll-down-arrow.33741916.svg","height":44,"width":8});
// EXTERNAL MODULE: ./src/components/PText.js
var PText = __webpack_require__(305);
;// CONCATENATED MODULE: ./src/components/HeroSection.js








const HeroStyles = (external_styled_components_default()).div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;
function HeroSection() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(HeroStyles, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "hero",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: "hero__heading",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Hello, This is"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "hero__name",
                                children: "Charles Karira"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hero__img",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: ck,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hero__info",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(PText/* default */.Z, {
                                children: "I am working as a Electrical engineer and web developer. I love to design, innovate, tinker and make websites and to integrate hardware."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                btnText: "see my works",
                                btnLink: "/projects"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hero__social",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "hero__social__indicator",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Follow"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: social_media_arrow,
                                        alt: "icon"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hero__social__text",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "http://github.com/hackster254",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "GH"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "http://twitter.com/webcifar",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "TW"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "http://webcifar.com",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "LI"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hero__scrollDown",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Scroll"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: scroll_down_arrow,
                                alt: "ScrollDown Arrow"
                            })
                        ]
                    })
                ]
            })
        })
    }));
};


/***/ }),

/***/ 318:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(41);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/SectionTitle.js
var components_SectionTitle = __webpack_require__(871);
// EXTERNAL MODULE: ./src/components/PText.js
var components_PText = __webpack_require__(305);
;// CONCATENATED MODULE: ./src/components/ServicesSectionItem.js





const ItemStyles = (external_styled_components_default()).div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;
function ServicesSectionItem_ServicesSectionItem({ icon =/*#__PURE__*/ _jsx(MdDesktopMac, {}) , title ='Web Design' , desc ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok" ,  }) {
    return(/*#__PURE__*/ _jsxs(ItemStyles, {
        className: "servicesItem",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "servicesItem__icon",
                children: icon
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "servicesItem__title",
                children: title
            }),
            /*#__PURE__*/ _jsx(PText, {
                children: desc
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/ServicesSection.js






const ServicesItemsStyles = (external_styled_components_default()).div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;
function ServicesSection() {
    return(/*#__PURE__*/ _jsx(ServicesItemsStyles, {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _jsx(SectionTitle, {
                    subheading: "What i will do for you",
                    heading: "Services"
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "services__allItems",
                    children: [
                        /*#__PURE__*/ _jsx(ServicesSectionItem, {
                            icon: /*#__PURE__*/ _jsx(MdDesktopMac, {}),
                            title: "web design",
                            desc: "I do ui/ux design for the website that helps website to get a unique look."
                        }),
                        /*#__PURE__*/ _jsx(ServicesSectionItem, {
                            icon: /*#__PURE__*/ _jsx(MdCode, {}),
                            title: "web dev",
                            desc: "I also develop the websites. I create high performance website with blazing fast speed."
                        }),
                        /*#__PURE__*/ _jsx(ServicesSectionItem, {
                            icon: /*#__PURE__*/ _jsx(MdPhonelinkSetup, {}),
                            title: "app Dev",
                            desc: "I develop mobile application. I create mobile app with eye catching ui. "
                        })
                    ]
                })
            ]
        })
    }));
};


/***/ }),

/***/ 690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TestimonialsSection)
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
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(466);
;// CONCATENATED MODULE: external "semantic-ui-react"
const external_semantic_ui_react_namespaceObject = require("semantic-ui-react");
// EXTERNAL MODULE: ./src/components/PText.js
var PText = __webpack_require__(305);
// EXTERNAL MODULE: ./src/components/SectionTitle.js
var SectionTitle = __webpack_require__(871);
;// CONCATENATED MODULE: ./src/assets/data/testimonials.js
const testimonials = [
    {
        id: 1,
        name: 'Core Network Engineering Internship',
        date: 'March - May 2021',
        org: 'NOWY lIMITED',
        desc: 'gsm architecture',
        desc1: [
            {
                role1: 'Participated and worked on radio core management and monitoring of interface links on GSM architecture.'
            },
            {
                role2: 'Troubleshooting, testing and deploying signaling and network probing solution for various telecom operators and their base stations.'
            }, 
        ],
        course: 'Electronic and Computer Engineering',
        uni: 'JKUAT',
        grad: '2022'
    },
    {
        id: 2,
        name: 'Electronics Engineering Intern',
        date: 'August - October 2019',
        org: 'Kenya Airports Authority',
        desc: 'Really amazing communication skills. Always understand what I am trying to achieve. Also, his work is really amazing. Do really high-quality work.',
        company: 'Huawei Seeds for future Internship',
        role: '',
        desc1: [
            {
                role1: 'Successfully serviced baggage handling system by repairing control units and load cell sensors on theconveyor belts.    '
            },
            {
                role2: 'Installation of radio telemetry system for various fire stations on the airport.'
            }, 
        ]
    },
    {
        id: 3,
        name: 'Instrumentation and Control Engineering Attache',
        date: 'July - September 2018',
        org: 'Kenya Pipeline Company',
        desc: 'Really hard-working person. Deliver the work as promised. Planning to work more with this person.',
        course: '',
        uni: '',
        grad: '',
        desc1: [
            {
                role1: 'Actively worked on pipeline instrumentation andcontrol of various sensors and actuators along the pipeline such as meters and valves.'
            },
            {
                role2: 'Successfully calibrated majority of pipeline instruments for accurate data collection.'
            }, 
        ]
    }, 
];
/* harmony default export */ const data_testimonials = (testimonials);

;// CONCATENATED MODULE: ./src/components/TestimonialsSection.js









const TestimonialSectionStyles = (external_styled_components_default()).div`
  overflow-x: hidden;
  padding: 10rem 0;
  text-align: center;
  .testimonial__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonial__desc {
    .para {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 4rem;
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }
  .testimonial__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }
  .role__text {
    font-size: 2rem;
    text-align: left;
    color: green;
    margin-bottom: 2px;
  }
`;
function TestimonialsSection() {
    const { 0: activeIndex , 1: setActiveIndex  } = (0,external_react_.useState)(0);
    const activeSlide = data_testimonials[activeIndex];
    function handleNext() {
        if (activeIndex >= data_testimonials.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex((oldIndex)=>oldIndex + 1
            );
        }
    }
    function handlePrev() {
        if (activeIndex === 0) {
            setActiveIndex(data_testimonials.length - 1);
        } else {
            setActiveIndex((oldIndex)=>oldIndex - 1
            );
        }
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(TestimonialSectionStyles, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                    subheading: "Work Experience",
                    heading: "EXPERIENCE"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "testimonial__wrapper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_.SwitchTransition, {
                        component: null,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
                            timeout: 300,
                            classNames: "fade",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "testimonial__info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "testimonial__desc",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "role__text",
                                                children: [
                                                    "Roles and Responsibilities ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(PText/* default */.Z, {
                                                children: activeSlide.desc1.map((p)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_namespaceObject.List, {
                                                            bulleted: true,
                                                            ordered: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_namespaceObject.List.Item, {
                                                                    children: p.role1
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_namespaceObject.List.Item, {
                                                                    children: p.role2
                                                                })
                                                            ]
                                                        })
                                                    })
                                                )
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "testimonial__name",
                                        children: activeSlide.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "testimonial__title",
                                        children: [
                                            activeSlide.date,
                                            ", ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " ",
                                            activeSlide.org
                                        ]
                                    })
                                ]
                            })
                        }, activeSlide.id)
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "arrows",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "prev",
                            onClick: handlePrev,
                            role: "button",
                            tabIndex: 0,
                            onKeyDown: handlePrev,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowBack, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "next",
                            onClick: handleNext,
                            role: "button",
                            tabIndex: 0,
                            onKeyDown: handleNext,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowForward, {})
                        })
                    ]
                })
            ]
        })
    }));
};


/***/ }),

/***/ 361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AboutSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(993);
/* harmony import */ var _components_ServicesSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(318);
/* harmony import */ var _components_ProjectsSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(856);
/* harmony import */ var _components_TestimonialsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(690);
/* harmony import */ var _components_ContactBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(154);
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(846);
/* harmony import */ var _components_ExperienceSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(773);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ProjectsSection__WEBPACK_IMPORTED_MODULE_4__]);
_components_ProjectsSection__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];









function Home() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HeroSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AboutSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectsSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TestimonialsSection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContactBanner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    }));
};

});

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 41:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 466:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 770:
/***/ ((module) => {

module.exports = require("swiper");

/***/ }),

/***/ 630:
/***/ ((module) => {

module.exports = require("swiper/react");

/***/ }),

/***/ 555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [871,518,154], () => (__webpack_exec__(361)));
module.exports = __webpack_exports__;

})();