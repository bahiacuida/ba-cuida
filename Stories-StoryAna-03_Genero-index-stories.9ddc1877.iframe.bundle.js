"use strict";(self.webpackChunk_orioro_ba_cuida_ui=self.webpackChunk_orioro_ba_cuida_ui||[]).push([[347],{"./components/PaperCard/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>PaperCard});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),_orioro_react_ui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@orioro/react-ui-core/dist/index.mjs");let t;const Card=(0,__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js").Ay)(_orioro_react_ui_core__WEBPACK_IMPORTED_MODULE_1__.azJ)(t||(t=(t=>t)`
  background-color: #f9efd9;
  padding: 10px 40px;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`));function PaperCard({children,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Card,{...props,children})}PaperCard.__docgenInfo={description:"",methods:[],displayName:"PaperCard"}},"./components/PaperFramedSection/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>PaperFramedSection});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");let t,t1,t2,_=t=>t;const Container=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.section(t||(t=_`
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
`));function PaperFramedSection({style={},children}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container,{style:{backgroundImage:'url("/assets/paper_framed_section/noise.png")',backgroundSize:"100%",backgroundRepeat:"repeat",backgroundColor:"var(--marrom)",color:"white",backgroundBlendMode:"hard-light",...style},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TopImg,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"/assets/paper_framed_section/top_1.png"})}),children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BottomImg,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"/assets/paper_framed_section/bottom_1.png"})})]})}PaperFramedSection.__docgenInfo={description:"",methods:[],displayName:"PaperFramedSection",props:{style:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./components/SiteWidthContainer/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>SiteWidthContainer});var jsx_runtime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),dist=__webpack_require__("../../node_modules/@radix-ui/react-slot/dist/index.mjs");const container_props_n={...__webpack_require__("../../node_modules/@radix-ui/themes/dist/esm/props/as-child.prop.js").f,size:{type:"enum",className:"rt-r-size",values:["1","2","3","4"],default:"4",responsive:!0},display:{type:"enum",className:"rt-r-display",values:["none","initial"],parseValue:function a(e){return"initial"===e?"flex":e},responsive:!0},align:{type:"enum",className:"rt-r-ai",values:["left","center","right"],parseValue:function i(e){return"left"===e?"start":"right"===e?"end":e},responsive:!0}};var extract_props=__webpack_require__("../../node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js"),get_subtree=__webpack_require__("../../node_modules/@radix-ui/themes/dist/esm/helpers/get-subtree.js"),height_props=__webpack_require__("../../node_modules/@radix-ui/themes/dist/esm/props/height.props.js"),layout_props=__webpack_require__("../../node_modules/@radix-ui/themes/dist/esm/props/layout.props.js"),margin_props=__webpack_require__("../../node_modules/@radix-ui/themes/dist/esm/props/margin.props.js"),width_props=__webpack_require__("../../node_modules/@radix-ui/themes/dist/esm/props/width.props.js");const container_p=react.forwardRef(({width:n,minWidth:s,maxWidth:i,height:m,minHeight:a,maxHeight:f,...P},l)=>{const{asChild:r,children:C,className:c,...y}=(0,extract_props.o)(P,container_props_n,layout_props.i,margin_props.y),{className:d,style:h}=(0,extract_props.o)({width:n,minWidth:s,maxWidth:i,height:m,minHeight:a,maxHeight:f},width_props.w,height_props.B),u=r?dist.bL:"div";return react.createElement(u,{...y,ref:l,className:classnames_default()("rt-Container",c)},(0,get_subtree.T)({asChild:r,children:C},v=>react.createElement("div",{className:classnames_default()("rt-ContainerInner",d),style:h},v)))});container_p.displayName="Container";const SiteWidthContainer=(0,react.forwardRef)(function SiteWidthContainerInner(props,ref){return(0,jsx_runtime.jsx)(container_p,{px:{initial:"5",md:"9"},ref,...props})});SiteWidthContainer.__docgenInfo={description:"",methods:[],displayName:"SiteWidthContainer"}},"./components/Stories/StoryAna/03_Genero/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Genero});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),_orioro_react_ui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@orioro/react-ui-core/dist/index.mjs"),_components_SiteWidthContainer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/SiteWidthContainer/index.jsx"),_components_PaperFramedSection__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/PaperFramedSection/index.jsx"),_components_PaperCard__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/PaperCard/index.jsx");function Genero(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SiteWidthContainer__WEBPACK_IMPORTED_MODULE_2__.z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_orioro_react_ui_core__WEBPACK_IMPORTED_MODULE_1__.son,{py:"5",direction:"column",gap:"4",alignItems:"center",maxWidth:"750px",style:{margin:"auto",textAlign:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{style:{height:300},src:"/assets/home/03_capitulo_ana/ilustracoes_ana/Ana_03.svg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_orioro_react_ui_core__WEBPACK_IMPORTED_MODULE_1__.ozN,{style:{fontSize:"1.25rem",fontWeight:300},children:"Ana é quem realiza quase todos os afazeres domésticos, e o seu marido não faz nem metade das tarefas que Ana faz."})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PaperFramedSection__WEBPACK_IMPORTED_MODULE_3__.P,{style:{position:"relative",overflow:"hidden"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SiteWidthContainer__WEBPACK_IMPORTED_MODULE_2__.z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_orioro_react_ui_core__WEBPACK_IMPORTED_MODULE_1__.son,{py:"7",direction:{xs:"column",md:"row"},gap:"9",alignItems:"center",style:{position:"relative",zIndex:2,marginLeft:"auto",marginRight:"auto",color:"white"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_orioro_react_ui_core__WEBPACK_IMPORTED_MODULE_1__.azJ,{style:{transform:{md:"translate(0, -50%)"},maxWidth:"400px",fontSize:"1.5rem",textAlign:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Na Bahia, as mulheres gastam"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{style:{background:"#E6DAEC",color:"var(--marrom-texto)",padding:"0 20px",marginLeft:"-20px",marginRight:"-20px"},children:"mais do que o dobro de horas"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"do que os homens em tarefas domésticas e de cuidado de pessoas."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{flexGrow:1,position:"relative"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_PaperCard__WEBPACK_IMPORTED_MODULE_4__.v,{style:{width:"70%",position:"relative",zIndex:2},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"/assets/home/03_capitulo_ana/graficos_ana/Ana_Grafico_03.svg",style:{width:"100%",position:"relative",zIndex:2}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("cite",{style:{position:"absolute",top:"80%",left:"calc(100% + 20px)",width:"150px"},children:"Fonte: IBGE - Pesquisa Nacional por Amostra de Domicílios Contínua Anual - 5ª visita - 2022."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"/assets/home/03_capitulo_ana/montagens_ana/Ana_Montagem_04.png",style:{width:"50%",position:"absolute",zIndex:1e3,right:"83%",top:"15%",zIndex:3}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"/assets/home/03_capitulo_ana/montagens_ana/Ana_Montagem_05.png",style:{width:"30%",position:"absolute",zIndex:1e3,left:"65%",top:"-12%",zIndex:1,transform:"rotate(15deg)"}})]})]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SiteWidthContainer__WEBPACK_IMPORTED_MODULE_2__.z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_orioro_react_ui_core__WEBPACK_IMPORTED_MODULE_1__.son,{py:"5",direction:"column",gap:"4",alignItems:"center",maxWidth:"600px",style:{margin:"auto",textAlign:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{style:{height:300},src:"/assets/home/03_capitulo_ana/ilustracoes_ana/Ana_04.svg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_orioro_react_ui_core__WEBPACK_IMPORTED_MODULE_1__.ozN,{style:{fontSize:"1.25rem",fontWeight:300},children:"Por conta da sobrecarga dos trabalhos dos cuidados, Ana precisou deixar o seu emprego formal, pois não consegue cumprir todos os horários exigidos."})]})})]})}Genero.__docgenInfo={description:"",methods:[],displayName:"Genero"}},"./components/Stories/StoryAna/03_Genero/index.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"StoryAna / Genero",component:__webpack_require__("./components/Stories/StoryAna/03_Genero/index.jsx").N,parameters:{layout:"fullscreen"}},Basic={},__namedExportsOrder=["Basic"]}}]);
//# sourceMappingURL=Stories-StoryAna-03_Genero-index-stories.9ddc1877.iframe.bundle.js.map