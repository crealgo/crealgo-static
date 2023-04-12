import{j as o,a as s}from"./jsx-runtime-c2efdcba.js";import{P as r}from"./Phone-5a2a9802.js";import{s as t}from"./styled-899f007b.js";import{c as i}from"./emotion-react.browser.esm-511d925c.js";const l=t("div")(({theme:e})=>i`
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
	`),d=t("div")`
	position: relative;
	height: 100%;
	width: 100%;
`,a=({phone1Props:e,phone2Props:n,...p})=>o(l,{className:"DualPhoneDisplay-root",role:"img","aria-label":"Phone app display",...p,children:s(d,{children:[o(r,{elevation:10,...e}),o(r,{hasBorder:!0,elevation:20,...n})]})});try{a.displayName="DualPhoneDisplay",a.__docgenInfo={description:"",displayName:"DualPhoneDisplay",props:{phone1Props:{defaultValue:null,description:"",name:"phone1Props",required:!1,type:{name:"PhoneProps"}},phone2Props:{defaultValue:null,description:"",name:"phone2Props",required:!1,type:{name:"PhoneProps"}}}}}catch{}export{a as D};
//# sourceMappingURL=DualPhoneDisplay-9361d75b.js.map
