(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[921],{5624:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/About",function(){return t(5653)}])},6675:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(5893),r=(t(7294),t(6484));function a(){var e,n,t=(e=["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return a=function(){return t},t}var o=t(7379).ZP.div(a(),(function(e){return e.outline?"transperant":"var(--gray-1)"}),(function(e){return e.outline?"var(--gary-1)":"black"}));function s(e){var n=e.btnText,t=void 0===n?"test":n,a=e.btnLink,s=void 0===a?"test":a,c=e.outline,l=void 0!==c&&c;return(0,i.jsx)(o,{outline:l,className:"button-wrapper",children:(0,i.jsx)(r.rU,{className:"button",to:s,children:t})})}},5154:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var i=t(5893),r=(t(7294),t(7379)),a=t(6675),o=t(9305);function s(){var e,n,t=(e=["\n  padding: 5rem 0;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return s=function(){return t},t}var c=r.ZP.div(s());function l(){return(0,i.jsx)(c,{children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"contactBanner__wrapper",children:[(0,i.jsx)(o.Z,{children:"Have a project or idea in mind"}),(0,i.jsx)("h3",{className:"contactBanner__heading",children:"Let me help you"}),(0,i.jsx)(a.Z,{btnText:"Contact Now",btnLink:"/contact"})]})})})}},9305:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var i=t(5893);t(7294);function r(){var e,n,t=(e=["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  white-space: pre-wrap;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return r=function(){return t},t}var a=t(7379).ZP.div(r());function o(e){var n=e.children;return(0,i.jsx)(a,{className:"para",children:(0,i.jsx)("p",{children:n})})}},5653:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var i=t(5893),r=t(7294),a=t(7379);async function o(e,...n){for(const t of n)switch(typeof t){case"string":await s(e,t);break;case"number":await c(t);break;case"function":await t(e,...n);break;default:await t}}async function s(e,n){const t=function(e,[...n]){return[...e,NaN].findIndex(((e,t)=>n[t]!==e))}(e.textContent,n);await async function(e,n,t=60){for(const i of function*(e){for(const n of e)yield e=>requestAnimationFrame((()=>e.textContent=n))}(n))i(e),await c(t+t*(Math.random()-.5))}(e,[...d(e.textContent,t),...l(n,t)])}async function c(e){await new Promise((n=>setTimeout(n,e)))}function*l([...e],n=0,t=e.length){for(;n<t;)yield e.slice(0,++n).join("")}function*d([...e],n=0,t=e.length){for(;t>n;)yield e.slice(0,--t).join("")}var u="styles_typicalWrapper__1_Uvh";!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}('.styles_typicalWrapper__1_Uvh::after {\n  content: "|";\n  animation: styles_blink__2CKyC 1s infinite step-start;\n}\n\n@keyframes styles_blink__2CKyC {\n  50% { opacity: 0; }\n}');var m=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)},f=(0,r.memo)((function(e){var n=e.steps,t=e.loop,i=e.className,a=e.wrapper,s=void 0===a?"p":a,c=(0,r.useRef)(null),l=s,d=[u];return i&&d.unshift(i),(0,r.useEffect)((function(){t===1/0?o.apply(void 0,[c.current].concat(m(n),[o])):"number"===typeof t?o.apply(void 0,[c.current].concat(m(Array(t).fill(n).flat()))):o.apply(void 0,[c.current].concat(m(n)))})),r.createElement(l,{ref:c,className:d.join(" ")})})),p=t(9305),h=t(6675),x={src:"/_next/static/media/about-page-img.f8fe48d9.png",height:769,width:566,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAAAAAD/rdHkAAAAQElEQVR42mNQN9AwC7JgUNbUdvW3ZTDQtK2fsIHBxcE4b/E+BjtTUV2GLgZrWwtNz1YGRYfI4OxWBi1tFXVxEwBxkQ0xY3qi0QAAAABJRU5ErkJggg=="};function _(){var e,n,t=(e=["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  /* gap: 5rem; */\n  margin-top: 3rem;\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 18rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return _=function(){return t},t}var b=a.ZP.div(_());function g(e){var n=e.title,t=void 0===n?"Title":n,r=e.items,a=void 0===r?["HTML","CSS"]:r;return(0,i.jsxs)(b,{children:[(0,i.jsx)("h1",{className:"title",children:t}),(0,i.jsx)("div",{className:"items",children:a.map((function(e,n){return(0,i.jsx)("div",{className:"item",children:(0,i.jsx)(p.Z,{children:e})},n)}))})]})}var v=t(5154);function j(){var e,n,t=(e=["\n  padding: 20rem 0 10rem 0;\n\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n  }\n  .about__subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n  .about__info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n    .about__heading {\n      font-size: 2.8rem;\n    }\n    .about__info__heading {\n      font-size: 3rem;\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return j=function(){return t},t}var y=a.ZP.div(j());function w(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(y,{children:[(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"top-section",children:[(0,i.jsxs)("div",{className:"left",children:[(0,i.jsxs)("p",{className:"about__subheading",children:["Hi, I am ",(0,i.jsx)("span",{children:"Charles Karira"})]}),(0,i.jsx)("h2",{className:"about__heading",children:(0,i.jsx)(f,{loop:1/0,wrapper:"b",steps:["Software developer \ud83d\udc68\u200d\ud83d\udcbb",1e3,"Electrical Engineer \ud83d\udc68\u200d\ud83c\udfed",2e3,"designer",1e3]})}),(0,i.jsx)("div",{className:"about__info",children:(0,i.jsxs)(p.Z,{children:["I am from Nairobi, Kenya. A place of 'cool waters'. I also love to create things that can be useful to others.",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),"I love coding and everything tech!",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place."]})}),(0,i.jsx)(h.Z,{btnText:"Download CV",btnLink:"#"})]}),(0,i.jsx)("div",{className:"right",children:(0,i.jsx)("img",{src:x,alt:"me"})})]}),(0,i.jsxs)("div",{className:"about__info__items",children:[(0,i.jsxs)("div",{className:"about__info__item",children:[(0,i.jsx)("h1",{className:"about__info__heading",children:"Education"}),(0,i.jsx)(g,{title:"High School",items:["Pioneer High School"]}),(0,i.jsx)(g,{title:"Varsity",items:["Jomo Kenyatta University of Agriculture and Technology"]})]}),(0,i.jsxs)("div",{className:"about__info__item",children:[(0,i.jsx)("h1",{className:"about__info__heading",children:"My Skills"}),(0,i.jsx)(g,{title:"FrontEnd",items:["HTML","CSS","JavaScript","REACT"]}),(0,i.jsx)(g,{title:"BackEnd",items:["Node","Express","Visual Basic .NET"]}),(0,i.jsx)(g,{title:"Design",items:["Figma"]})]}),(0,i.jsxs)("div",{className:"about__info__item",children:[(0,i.jsx)("h1",{className:"about__info__heading",children:"Experiences"}),(0,i.jsx)(g,{title:"2016-2021",items:["Engineering Student and Tech Hobbyist"]}),(0,i.jsx)(g,{title:"2019-2021",items:["IT support and Engineering Intern"]}),(0,i.jsx)(g,{title:"2021-2022",items:["Freelance web Developer"]})]})]})]}),(0,i.jsx)(v.Z,{})]})})}}},function(e){e.O(0,[774,379,484,888,179],(function(){return n=5624,e(e.s=n);var n}));var n=e.O();_N_E=n}]);