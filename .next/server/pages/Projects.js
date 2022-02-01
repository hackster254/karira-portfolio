"use strict";
(() => {
var exports = {};
exports.id = 375;
exports.ids = [375];
exports.modules = {

/***/ 726:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(871);
/* harmony import */ var _assets_data_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(746);
/* harmony import */ var _components_ProjectItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(594);
/* harmony import */ var _components_ProjectsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(856);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_assets_data_projects__WEBPACK_IMPORTED_MODULE_5__, _components_ProjectsSection__WEBPACK_IMPORTED_MODULE_7__]);
([_assets_data_projects__WEBPACK_IMPORTED_MODULE_5__, _components_ProjectsSection__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const ProjectStyle = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;

    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;
function Projects() {
    const { 0: searchText , 1: setSearchText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: projectsData , 1: setProjectsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_assets_data_projects__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (searchText === '') return;
        setProjectsData(()=>_assets_data_projects__WEBPACK_IMPORTED_MODULE_5__/* ["default"].filter */ .Z.filter((item)=>item.name.toLowerCase().match(searchText.toLowerCase())
            )
        );
    }, [
        searchText
    ]);
    const handleChange = (e)=>{
        e.preventDefault();
        setSearchText(e.target.value);
        if (!e.target.value.length > 0) {
            setProjectsData(_assets_data_projects__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProjectStyle, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        heading: "Projects",
                        subheading: "some of my recent works"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "projects__searchBar",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    value: searchText,
                                    onChange: handleChange,
                                    placeholder: "Project Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdSearch, {
                                    className: "searchIcon"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "projects__allItems",
                        children: projectsData.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                title: item.name,
                                desc: item.desc,
                                img: item.img,
                                link: item.link
                            }, item.id)
                        )
                    })
                ]
            })
        })
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
var __webpack_exports__ = __webpack_require__.X(0, [871,518], () => (__webpack_exec__(726)));
module.exports = __webpack_exports__;

})();