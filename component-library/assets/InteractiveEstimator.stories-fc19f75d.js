import{n as c}from"./chance-56e14726.js";import{j as t,a as n}from"./jsx-runtime-c2efdcba.js";import{A as d}from"./ActionStack-da0a00f9.js";import{B as u}from"./Block-7499e844.js";import{C as g}from"./Container-c8e048b9.js";import{H as s}from"./Heading-b0f300b8.js";import{I as r}from"./InteractiveSelector-32c5f697.js";import{C as h,P as b}from"./PaletteOutlined-e5ebeda2.js";import{s as a}from"./styled-e2ebe642.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./Button-90cddc56.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-a4cb8c49.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-0d2a43de.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./defaultTheme-8fe9975f.js";import"./useThemeProps-debefb1f.js";import"./generateUtilityClasses-bdae82bf.js";import"./emotion-react.browser.esm-511d925c.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./useEnhancedEffect-767500c3.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./Stack-bc1126ed.js";import"./Typography-ce4bf3ba.js";import"./KeyboardArrowDown-cc6fb243.js";import"./createSvgIcon-45dd28ac.js";import"./MenuItem-b16b1f4f.js";import"./index-1aacdabe.js";import"./useTheme-e8b6c181.js";import"./Modal-4ef2d020.js";import"./utils-354236b1.js";import"./index-62c31eed.js";import"./Paper-31fd4769.js";import"./dividerClasses-3a51a39a.js";const f=a(u)`
	overflow: hidden;
`,v=a("div")`
	display: grid;
	gap: 2rem;
	max-width: ${({theme:e})=>e.breakpoints.values.md}px;
	z-index: 1;

	padding-block-end: 15rem;

	.ActionStack-root {
		margin-top: 1rem;
	}

	${({theme:e})=>e.breakpoints.up("md")} {
		padding-block-end: 5rem;

		.ActionStack-root {
			margin-top: 1.5rem;
		}
	}

	${({theme:e})=>e.breakpoints.up("lg")} {
		padding-block-end: unset;
	}
`,k=a("img")`
	position: relative;
	width: 100%;
	margin-bottom: -20rem;
	height: auto;
	z-index: 0;

	bottom: 0;
	/* left: 50%; */
	/* transform: translateX(-20%) translateY(50%); */

	${({theme:e})=>e.breakpoints.up("md")} {
		margin-bottom: unset;

		position: absolute;
		width: 30rem;
		right: 0;
		bottom: 0;
		transform: translateX(20%);
		height: auto;
	}

	${({theme:e})=>e.breakpoints.up("lg")} {
		width: 40rem;
		transform: translateX(25%) translateY(6%);
	}
`,i=()=>t(g,{children:t(f,{isRounded:!0,color:"grey",className:"InteractiveEstimator-root",children:n(v,{children:[t(s,{level:4,children:"Get an estimate!"}),n(s,{level:2,children:["I would like a custom ",t(r,{options:[{label:"Sash",value:"sash"},{label:"T-Shirt",value:"t-shirt"},{label:"Poster",value:"poster"},{label:"Sticker",value:"sticker"}]})," that is ",t(r,{options:[{label:"embroidered",value:"embroidered"},{label:"printed",value:"printed"}]})," with ",t(r,{options:[{label:"my name",value:"name"},{label:"my initials",value:"initials"},{label:"a quote",value:"initials"}]})]}),t("em",{children:"Change the options below to what you’re looking for."}),t(d,{actions:[{label:"Get an Estimate",size:"large",color:"secondary",endIcon:t(h,{})},{label:"Talk to a Designer",size:"large",color:"text",endIcon:t(b,{})}]}),t(k,{src:"assets/juicy-business-coach-explains-the-material.gif",alt:""})]})})});try{i.displayName="InteractiveEstimator",i.__docgenInfo={description:"",displayName:"InteractiveEstimator",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}}}}}catch{}const it={component:i},o={args:{actions:c()}};var m,l,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    actions: generateActions()
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const at=["Default"];export{o as Default,at as __namedExportsOrder,it as default};
//# sourceMappingURL=InteractiveEstimator.stories-fc19f75d.js.map
