import{l as x}from"./chance-a681a54c.js";import{a as i,F as b,j as e}from"./jsx-runtime-c2efdcba.js";import{B as y,C as m}from"./Container-f017ee1c.js";import{T as t}from"./Typography-e61b6c49.js";import{S as F}from"./Stack-a3a99865.js";import{I as s}from"./IconButton-ce06c0a3.js";import{F as C,T as _,I as T}from"./Twitter-e5fde102.js";import{L as u}from"./Link-3d66d850.js";import{s as a}from"./styled-899f007b.js";import{c as n}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./defaultTheme-d0849189.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-4c706523.js";import"./generateUtilityClasses-bdae82bf.js";import"./ButtonBase-890a84e2.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./createSvgIcon-4ae69272.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";const c=a("div")(({theme:r})=>n`
		display: flex;
		flex-direction: column;
		gap: 2rem;

		${r.breakpoints.up("md")} {
			gap: 0.75rem;
		}
	`),B=a(y)(({theme:r})=>n`
		${r.utils.styles.block};

		border-bottom: solid 1px ${r.palette.grey[300]};
	`).withComponent("footer"),S=a("div")(({theme:r})=>n`
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 1fr;

		${r.breakpoints.up("md")} {
			grid-template-columns: repeat(3, 1fr);
		}
	`),w=a(y)(({theme:r})=>n`
		padding-block: 2rem !important;

		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: center;

		${r.breakpoints.up("md")} {
			flex-direction: row;
			gap: 1.5rem;
		}
	`),p=({title:r,description:v,meta:l=[]})=>i(b,{children:[e(B,{children:e(m,{children:i(S,{children:[i(c,{children:[e(t,{variant:"h3",children:r}),e(t,{variant:"body1",children:v}),i("div",{children:[e(t,{variant:"subtitle1",color:"grey.700",children:"Social Media"}),i(F,{gap:"0.25rem",direction:"row",children:[e(s,{size:"small",children:e(C,{fontSize:"small"})}),e(s,{size:"small",children:e(_,{fontSize:"small"})}),e(s,{size:"small",children:e(T,{fontSize:"small"})})]})]})]}),e(c,{children:l==null?void 0:l.map((d,k)=>i("div",{children:[e(t,{variant:"subtitle1",color:"grey.700",children:d.term}),e(t,{children:d.description})]},k))}),e(c,{children:i("div",{children:[e(t,{variant:"subtitle1",color:"grey.700",children:"Newsletter"}),e(t,{children:"Input goes here"})]})})]})})}),e(w,{children:i(m,{children:[e(t,{variant:"caption",children:e(u,{children:"Privacy & Cookie Policy"})}),e(t,{variant:"caption",children:e(u,{children:"Terms of Service"})}),e(t,{variant:"caption",children:"©Copyright 2015-2020, FashionGreek, USC."}),e(t,{variant:"caption",children:"Made with ❤️ by Crealgo, LLC. All rights reserved."})]})})]});try{p.displayName="FooterBlock",p.__docgenInfo={description:"",displayName:"FooterBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},meta:{defaultValue:{value:"[]"},description:"",name:"meta",required:!1,type:{name:"Term[]"}},copyrightText:{defaultValue:null,description:"",name:"copyrightText",required:!1,type:{name:"string"}},extraText:{defaultValue:null,description:"",name:"extraText",required:!1,type:{name:"string"}}}}}catch{}const Z={component:p},o={args:x()};var h,f,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: generateFooter()
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const ee=["Default"];export{o as Default,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=FooterBlock.stories-8769831d.js.map
