import{l as _}from"./chance-e22ba91b.js";import{j as e,a as o,F as w}from"./jsx-runtime-c2efdcba.js";import{B as b,C as h}from"./Container-a6f3098c.js";import{I as C}from"./Input-51be0324.js";import{B as F}from"./Button-ce6e9453.js";import{s as x}from"./emotion-styled.browser.esm-fa7ff235.js";import{T as t}from"./Typography-ce4bf3ba.js";import{S as B}from"./Stack-bc1126ed.js";import{I as m}from"./IconButton-beab8aae.js";import{F as z,T as I,I as L}from"./Twitter-b243c559.js";import{B as E}from"./Box-4b73dcd4.js";import{L as f}from"./Link-79621f82.js";import{s as a}from"./styled-e2ebe642.js";import{c as n}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./clsx.m-1229b3e0.js";import"./getInputStyles-28396403.js";import"./ButtonBase-7aae2927.js";import"./ButtonBase-7c1dc156.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./defaultTheme-8fe9975f.js";import"./useThemeProps-debefb1f.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./createSvgIcon-45dd28ac.js";const N=x.div`
	border-radius: var(--shape-rounding-medium);
	border: var(--input-border-composite);
	overflow: hidden;
	aspect-ratio: 1;

	iframe {
		border: none;
	}
`,p=()=>e(N,{children:e("iframe",{title:"google-embed",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.643569104135!2d-118.27879712514893!3d34.027358973166265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7e7881aa24d%3A0x44058a082ba5069e!2sFashion%20Greek%20USC!5e0!3m2!1sen!2sus!4v1681753959240!5m2!1sen!2sus",width:"100%",height:"100%",referrerPolicy:"no-referrer-when-downgrade"})});try{p.displayName="MapEmbed",p.__docgenInfo={description:"",displayName:"MapEmbed",props:{}}}catch{}const c=a("div")(({theme:r})=>n`
		display: flex;
		flex-direction: column;
		row-gap: 2rem;

		${r.breakpoints.up("md")} {
			row-gap: 2rem;
		}
	`),A=a("div")(({theme:r})=>n`
		display: grid;
		row-gap: 3rem;
		column-gap: 1.5rem;
		grid-template-columns: 1fr;

		${r.breakpoints.up("md")} {
			grid-template-columns: 1.5fr 1fr 1fr;
		}
	`),T=a(b)(({theme:r})=>n`
	background-color: var(--color-gray-100);
	border-bottom: var(--input-border-composite);
	margin-top: 1rem;
`).withComponent("footer"),W=a(b)(({theme:r})=>n`
		background-color: var(--color-gray-100);
		padding-block: 2rem !important;

		.Container-root {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			justify-content: center;

			${r.breakpoints.up("md")} {
				flex-direction: row;
				gap: 1.5rem;
			}
		}
	`),l={title:"Fashion Greek, USC",description:"Your premier custom apparel store! We make customer apparel fast and easy. Designers on-site to help you out with your order. No minimum quantity.",meta:[{term:"Location",description:"2626 S Figueroa St #A, Los Angeles, California 90007"},{term:"Phone",description:"(323) 379-3728"},{term:"Email",description:"info@fashiongreekusc.com"}]},d=({title:r=l.title,description:k=l.description,meta:s=l.meta})=>o(w,{children:[e(T,{children:e(h,{children:o(A,{children:[o(c,{children:[o("div",{children:[e(t,{gutterBottom:!0,variant:"h3",children:r}),e(t,{variant:"body1",children:k})]}),o("div",{children:[e(t,{variant:"subtitle1",color:"grey.700",children:"Social Media"}),o(B,{gap:"0.25rem",direction:"row",children:[e(m,{size:"small",children:e(z,{fontSize:"small"})}),e(m,{size:"small",children:e(I,{fontSize:"small"})}),e(m,{size:"small",children:e(L,{fontSize:"small"})})]})]}),o("div",{children:[e(t,{variant:"subtitle1",color:"grey.700",children:"Newsletter"}),o(E,{display:"flex",gap:"0.25rem",children:[e(C,{type:"text",inputSize:"large",placeholder:"your@email.com"}),e(F,{size:"large",color:"secondary",children:"Sign Up"})]})]})]}),e(c,{children:e(p,{})}),e(c,{children:s==null?void 0:s.map((u,S)=>o("div",{children:[e(t,{variant:"subtitle1",fontWeight:500,letterSpacing:"-0.0125em",color:"grey.700",children:u.term}),e(t,{children:u.description})]},S))})]})})}),e(W,{children:o(h,{children:[e(t,{variant:"caption",children:e(f,{children:"Privacy & Cookie Policy"})}),e(t,{variant:"caption",children:e(f,{children:"Terms of Service"})}),e(t,{variant:"caption",children:"©Copyright 2015-2020, FashionGreek, USC."}),e(t,{variant:"caption",children:"Made with ❤️ by Crealgo, LLC. All rights reserved."})]})})]});try{d.displayName="FooterBlock",d.__docgenInfo={description:"",displayName:"FooterBlock",props:{title:{defaultValue:{value:"Fashion Greek, USC"},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:"Your premier custom apparel store! We make customer apparel fast and easy. Designers on-site to help you out with your order. No minimum quantity."},description:"",name:"description",required:!1,type:{name:"string"}},meta:{defaultValue:{value:`[
		{
			term: 'Location',
			description: '2626 S Figueroa St #A, Los Angeles, California 90007',
		},
		{
			term: 'Phone',
			description: '(323) 379-3728',
		},
		{
			term: 'Email',
			description: 'info@fashiongreekusc.com',
		},
	]`},description:"",name:"meta",required:!1,type:{name:"Term[]"}}}}}catch{}const pe={component:d},i={args:_()};var g,y,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: generateFooter()
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const de=["Default"];export{i as Default,de as __namedExportsOrder,pe as default};
//# sourceMappingURL=FooterBlock.stories-e6df38a2.js.map
