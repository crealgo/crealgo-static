import{j as o,a as m}from"./jsx-runtime-c2efdcba.js";import{P as t}from"./Phone-311a24d4.js";import{s as i}from"./styled-e2ebe642.js";import{c}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./defaultTheme-8fe9975f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";const h=i("div")(({theme:e})=>c`
		background-color: transparent;
		z-index: 1;
		position: relative;

		padding-block: 0 !important;

		.Phone-root {
			position: absolute;
			width: 55%;
			border-radius: 2rem;
		}

		.Phone-root:nth-of-type(1) {
			left: 0;
			top: 35%;
		}

		.Phone-root:nth-of-type(2) {
			right: 0;
			top: 15%;
		}
	`),u=i("div")`
	position: relative;
	height: 100%;
	width: 100%;
`,a=({phone1Props:e,phone2Props:l,...d})=>o(h,{className:"DualPhoneDisplay-root",role:"img","aria-label":"Phone app display",...d,children:m(u,{children:[o(t,{elevation:10,...e}),o(t,{hasBorder:!0,elevation:20,...l})]})});try{a.displayName="DualPhoneDisplay",a.__docgenInfo={description:"",displayName:"DualPhoneDisplay",props:{phone1Props:{defaultValue:null,description:"",name:"phone1Props",required:!1,type:{name:"PhoneProps"}},phone2Props:{defaultValue:null,description:"",name:"phone2Props",required:!1,type:{name:"PhoneProps"}}}}}catch{}const N={component:a,decorators:[e=>o("div",{style:{maxWidth:"40rem"},children:o(e,{})})]},r={args:{}};var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const W=["Default"];export{r as Default,W as __namedExportsOrder,N as default};
//# sourceMappingURL=DualPhoneDisplay.stories-8dc62977.js.map
