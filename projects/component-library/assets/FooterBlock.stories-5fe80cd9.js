import{c as x}from"./chance-dbb8c3cf.js";import{a as i,F as b,j as e}from"./defaultTheme-30e43ede.js";import{B as y,C as m}from"./Block-81203b25.js";import{T as t}from"./Typography-b4c27325.js";import{S as F}from"./Stack-71a65dae.js";import{I as s}from"./IconButton-b53876ff.js";import{F as C,T as _,I as T}from"./Twitter-40d46019.js";import{L as u}from"./Link-4f63bb94.js";import{s as a}from"./styled-8f152a82.js";import{c as n}from"./emotion-react.browser.esm-18e2571c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-cbfa8a8e.js";import"./generateUtilityClasses-0f0148c0.js";import"./ButtonBase-63fd7aa9.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-d7a6185f.js";import"./useIsFocusVisible-9b2ab6cf.js";import"./useForkRef-9773819b.js";import"./createSvgIcon-7fe6f70f.js";const c=a("div")(({theme:r})=>n`
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
//# sourceMappingURL=FooterBlock.stories-5fe80cd9.js.map
