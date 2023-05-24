import{l as w}from"./chance-56e14726.js";import{j as e,a as t}from"./jsx-runtime-c2efdcba.js";import{C as u}from"./Container-c8e048b9.js";import{B as v}from"./Block-7499e844.js";import{I as C}from"./Input-840cf7d1.js";import{B as x}from"./Button-90cddc56.js";import{s as _}from"./emotion-styled.browser.esm-fa7ff235.js";import{T as a}from"./Text-005051e4.js";import{T as s}from"./Typography-ce4bf3ba.js";import{B}from"./Box-4b73dcd4.js";import{S as k}from"./Stack-bc1126ed.js";import{L as S}from"./Link-79621f82.js";import{I as d}from"./IconButton-b49a5aeb.js";import{F,T as z,I as q}from"./Twitter-b243c559.js";import{s as i}from"./styled-e2ebe642.js";import{c as m}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./clsx.m-1229b3e0.js";import"./getInputStyles-bb239c88.js";import"./ButtonBase-a4cb8c49.js";import"./ButtonBase-0d2a43de.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./defaultTheme-8fe9975f.js";import"./useThemeProps-debefb1f.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./useEnhancedEffect-767500c3.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./createSvgIcon-45dd28ac.js";const I=_.div`
	border-radius: var(--shape-rounding-medium);
	border: var(--input-border-composite);
	overflow: hidden;
	aspect-ratio: 1.5/1;

	iframe {
		border: none;
	}
`,p=()=>e(I,{children:e("iframe",{title:"google-embed",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.643569104135!2d-118.27879712514893!3d34.027358973166265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7e7881aa24d%3A0x44058a082ba5069e!2sFashion%20Greek%20USC!5e0!3m2!1sen!2sus!4v1681753959240!5m2!1sen!2sus",width:"100%",height:"100%",referrerPolicy:"no-referrer-when-downgrade"})});try{p.displayName="MapEmbed",p.__docgenInfo={description:"",displayName:"MapEmbed",props:{}}}catch{}const g=i("div")(({theme:r})=>m`
		display: flex;
		flex-direction: column;
		row-gap: 2rem;

		${r.breakpoints.up("md")} {
			row-gap: 2rem;
		}
	`),N=i("div")(({theme:r})=>m`
		display: grid;
		row-gap: 3rem;
		column-gap: 1.5rem;
		grid-template-columns: 1fr;

		${r.breakpoints.up("md")} {
			grid-template-columns: 1fr 1.5fr;
		}
	`),T=i(v)(({theme:r})=>m`
		background-color: var(--color-gray-100);
		border-bottom: var(--input-border-composite);
		margin-top: 1rem;
	`),Z=i(v)(({theme:r})=>m`
		background-color: var(--color-gray-100);
		padding-block: 2rem !important;

		.Container-root {
			display: grid;
			gap: 0.5rem;
			grid-template-columns: 1fr;
			align-items: center;

			.leftContent {
				display: grid;
				grid-template-columns: 1fr;
				gap: 0.25rem;
			}

			${r.breakpoints.up("md")} {
				grid-template-columns: minmax(auto, 1fr) auto;
				flex-direction: row;
				gap: 1.5rem;
			}
		}
	`),o={title:"Fashion Greek, USC",description:"As a leading printing-service company, we are dedicated to providing high-quality printing solutions to our clients. With a team of experienced professionals and state-of-the-art printing equipment, we deliver exceptional results that meet and exceed our clients' expectations.",sections:{connect:{title:"Connect",links:[{label:"The Process",href:""},{label:"Get Samples",href:""},{label:"Templates",href:""},{label:"Jobs",href:""}]},getAQuote:{title:"Get a Quote",description:"Need a quote for your printing project? Contact us today to request a quote. We offer competitive pricing and personalized solutions to meet your printing needs."},contact:{title:"Contact Us",description:"We're here to help! If you have any questions or inquiries about our printing services, feel free to get in touch with us. You can contact us through the following channels:",links:[{label:"Phone",href:"tel:323-379-3728"},{label:"Email",href:"mailto:fashiongreekusc@gmail.com"},{label:"Address",href:"https://goo.gl/maps/6Y5Z9Z2Z2Z2Z2Z2Z2"}]},copyright:{showSocial:!0,phrases:["©Copyright 2015-2020, FashionGreek, USC.","Made with ❤️ by Crealgo, LLC. All rights reserved."]}}},A=()=>t(k,{gap:"0.25rem",direction:"row",children:[e(d,{size:"small",children:e(F,{fontSize:"small"})}),e(d,{size:"small",children:e(z,{fontSize:"small"})}),e(d,{size:"small",children:e(q,{fontSize:"small"})})]}),l=i("div")`
	padding: 1rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.25rem;
`,E=i("ul")`
	display: grid;
	padding-block: 0.75rem;
	gap: 0.75rem;
	padding: unset;
	list-style: none;

	& *:first-child {
		font-weight: bold;
	}
`,h=()=>t("footer",{children:[e(T,{hasNoDefaultMargin:!0,children:e(u,{children:t(N,{children:[t(g,{children:[t(l,{children:[e(s,{gutterBottom:!0,variant:"h3",children:o.title}),e(a,{size:"medium",children:o.description})]}),t(l,{children:[e(s,{variant:"h5",children:o.sections.getAQuote.title}),e(a,{size:"medium",children:o.description}),t(B,{display:"flex",gap:"0.25rem",mt:"0.75rem",children:[e(C,{type:"text",inputSize:"large",placeholder:"your@email.com"}),e(x,{size:"large",color:"secondary",children:"Send"})]})]}),t(l,{children:[e(s,{variant:"h5",children:o.sections.connect.title}),e(k,{component:"nav",flexDirection:"row",gap:"0.5rem",children:o.sections.connect.links.map((r,n)=>e(S,{href:r.href,children:r.label},n))})]})]}),t(g,{children:[e(p,{}),t(l,{children:[e(s,{gutterBottom:!0,variant:"h3",children:o.sections.contact.title}),e(a,{size:"medium",children:o.sections.contact.description}),e(E,{children:o.sections.contact.links.map((r,n)=>t("li",{children:[e(a,{children:r.label}),e(a,{children:r.href})]},n))})]})]})]})})}),e(Z,{hasNoDefaultMargin:!0,children:t(u,{children:[e("div",{className:"leftContent",children:o.sections.copyright.phrases.map((r,n)=>e(s,{variant:"caption",children:r},n))}),e("div",{className:"rightContent",children:e(A,{})})]})})]});try{h.displayName="FooterBlock",h.__docgenInfo={description:"",displayName:"FooterBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"Term[]"}}}}}catch{}const ue={component:h},c={args:w()};var f,y,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: generateFooter()
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const ge=["Default"];export{c as Default,ge as __namedExportsOrder,ue as default};
//# sourceMappingURL=FooterBlock.stories-a2e7b836.js.map
