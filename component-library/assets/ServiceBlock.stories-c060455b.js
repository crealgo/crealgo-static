import{a as t,j as r}from"./jsx-runtime-c2efdcba.js";import{A as b}from"./ActionStack-da0a00f9.js";import{B as x}from"./Block-7499e844.js";import{B as N}from"./Button-90cddc56.js";import{C as B}from"./Container-c8e048b9.js";import{H as S}from"./Heading-b0f300b8.js";import{c as A}from"./clsx.m-1229b3e0.js";import{c as H}from"./colorIterator-eb2144cc.js";import{s}from"./styled-e2ebe642.js";import{T as m}from"./Typography-ce4bf3ba.js";import{s as _}from"./emotion-styled.browser.esm-fa7ff235.js";import{c as k}from"./emotion-react.browser.esm-511d925c.js";import{B as q}from"./Box-4b73dcd4.js";import{M as w}from"./Message-87e79f86.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./Stack-bc1126ed.js";import"./defaultTheme-8fe9975f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./useThemeProps-debefb1f.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-a4cb8c49.js";import"./ButtonBase-0d2a43de.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./useEnhancedEffect-767500c3.js";import"./colors-9bc9497b.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./createSvgIcon-45dd28ac.js";const C=s("a")`
	cursor: pointer;
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 1.5rem;

	img {
		width: 75px;
		height: 75px;
	}

	.content {
		display: grid;
		align-content: start;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		gap: 0.5rem;

		.ActionStack-root {
			margin-top: 0.25rem;
			justify-content: start;
		}
	}

	${H("background",".image")}
`,d=({title:e,subtitle:l,description:c,className:a,image:o,actions:g,...v})=>t(C,{className:A("HorizontalCard-root",a),...v,children:[r("img",{...o}),t("div",{className:"content",children:[r(m,{className:"title",variant:"h5",children:e}),r(m,{className:"description",color:"var(--color-gray-700)",children:c})]})]});try{d.displayName="HorizontalCard",d.__docgenInfo={description:"",displayName:"HorizontalCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"{ src: string; alt: string; }"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLAnchorElement | null) => void) | RefObject<HTMLAnchorElement> | null"}}}}}catch{}const p=_(e=>t("div",{...e,children:[r("div",{}),r("div",{}),r("div",{}),r("div",{})]}))`
	position: absolute;
	display: flex;
	flex-direction: row;
	gap: 0.05em;
	left: 0.05em;
	transform: translateY(-0.125em);

	div {
		width: 0.175em;
		height: 0.175em;
		border-radius: 50%;

		&:nth-child(1) {
			background: var(--color-brand-primary-main);
		}

		&:nth-child(2) {
			background: var(--color-brand-secondary-main);
		}

		&:nth-child(3) {
			background: var(--color-brand-tertiary-main);
		}

		&:nth-child(4) {
			background: var(--color-text-primary);
		}
	}
`;try{p.displayName="Dots",p.__docgenInfo={description:"",displayName:"Dots",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}}}catch{}const V=_.span`
	position: relative;
`,u=({children:e,className:l})=>t(V,{className:l,children:[e,r(p,{})]});try{u.displayName="Marked",u.__docgenInfo={description:"",displayName:"Marked",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}s("div")(({theme:e})=>k`
		max-width: ${e.breakpoints.values.sm}px;

		.ActionStack-root {
			margin-top: 1.5rem;
		}

		.Heading-root {
			margin-bottom: 0.5rem;
		}
	`);const I=s(x)`
	padding-block: 3rem !important;
`,M=s("div")(({theme:e})=>k`
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;

		hgroup {
			max-width: 35rem;
		}

		.container {
			text-align: center;
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;

			.ActionStack-root {
				justify-content: center !important;
			}
		}

		.services {
			display: grid;
			grid-template-columns: 1fr;
			column-gap: 1rem;
			row-gap: 1rem;
		}

		${e.breakpoints.up("sm")} {
			.services {
				column-gap: 3rem;
				row-gap: 4rem;
				grid-template-columns: repeat(2, 1fr);
			}
		}

		${e.breakpoints.up("lg")} {
			.services {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	`),n=({title:e,subtitle:l,description:c,services:a})=>r(I,{children:r(B,{children:t(M,{children:[t("hgroup",{children:[r(S,{gutterBottom:!0,level:2,children:r(u,{children:e})}),r(m,{variant:"body1",children:c})]}),r("div",{className:"services",children:a==null?void 0:a.map((o,g)=>r(d,{title:o.name,description:o.summary,image:o.image},g))}),t(b,{color:"secondary",children:[r(q,{mr:-1,zIndex:1,children:"Looking for something else?"}),r(N,{color:"text",endIcon:r(w,{}),children:"Contact Us"})]})]})})});n.displayName="ServicesBlock";try{n.displayName="ServicesBlock",n.__docgenInfo={description:"",displayName:"ServicesBlock",props:{}}}catch{}const mr={component:n},i={};var f,h,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const dr=["Default"];export{i as Default,dr as __namedExportsOrder,mr as default};
//# sourceMappingURL=ServiceBlock.stories-c060455b.js.map
