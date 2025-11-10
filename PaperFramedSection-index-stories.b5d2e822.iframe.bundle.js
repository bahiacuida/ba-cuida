"use strict";(self.webpackChunk_orioro_ba_cuida_ui=self.webpackChunk_orioro_ba_cuida_ui||[]).push([[572],{"./components/PaperFramedSection/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>PaperFramedSection});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");let t,t1,t2,_=t=>t;const Container=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.section(t||(t=_`
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
`)),TopImg=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(t1||(t1=_`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;

  > img {
    width: 100%;

    @media (max-width: 600px) {
      width: 200%;
    }
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 65%;
    width: 100%;
    background-color: white;
  }
`)),BottomImg=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(t2||(t2=_`
  position: absolute;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;

  > img {
    width: 100%;

    @media (max-width: 600px) {
      width: 200%;
    }
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    bottom: 0;
    width: 100%;
    background-color: white;
  }
`));function PaperFramedSection({style={},children}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container,{style:{backgroundImage:'url("/assets/paper_framed_section/noise.png")',backgroundSize:"100%",backgroundRepeat:"repeat",backgroundColor:"var(--marrom)",color:"white",backgroundBlendMode:"hard-light",...style},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TopImg,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"/assets/paper_framed_section/top_1.png"})}),children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BottomImg,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"/assets/paper_framed_section/bottom_1.png"})})]})}PaperFramedSection.__docgenInfo={description:"",methods:[],displayName:"PaperFramedSection",props:{style:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./components/PaperFramedSection/index.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"PaperFramedSection",component:__webpack_require__("./components/PaperFramedSection/index.jsx").P},Basic={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Hello world"}),style:{backgroundColor:"var(--roxo)"}}},__namedExportsOrder=["Basic"]}}]);
//# sourceMappingURL=PaperFramedSection-index-stories.b5d2e822.iframe.bundle.js.map