import{l as b}from"./chance-e22ba91b.js";import{a as i,F,j as r}from"./jsx-runtime-c2efdcba.js";import{B as y,C as m}from"./Container-96bf4f71.js";import{T as e}from"./Typography-e61b6c49.js";import{S as C}from"./Stack-a3a99865.js";import{I as c}from"./IconButton-ce06c0a3.js";import{F as _,T as x,I as B}from"./Twitter-e5fde102.js";import{L as h}from"./Link-3d66d850.js";import{s as a}from"./styled-899f007b.js";import{c as n}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./clsx.m-1229b3e0.js";import"./defaultTheme-d0849189.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./useThemeProps-4c706523.js";import"./generateUtilityClasses-bdae82bf.js";import"./ButtonBase-890a84e2.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./createSvgIcon-4ae69272.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";const s=a("div")(({theme:o})=>n`
		display: flex;
		flex-direction: column;
		gap: 2rem;

		${o.breakpoints.up("md")} {
			gap: 0.75rem;
		}
	`),S=a(y)(({theme:o})=>n`
		border-bottom: solid 1px ${o.palette.grey[300]};
	`).withComponent("footer"),w=a("div")(({theme:o})=>n`
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 1fr;

		${o.breakpoints.up("md")} {
			grid-template-columns: repeat(3, 1fr);
		}
	`),z=a(y)(({theme:o})=>n`
		padding-block: 2rem !important;

		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: center;

		${o.breakpoints.up("md")} {
			flex-direction: row;
			gap: 1.5rem;
		}
	`),p=({title:o,description:v,meta:l=[]})=>i(F,{children:[r(S,{children:r(m,{children:i(w,{children:[i(s,{children:[r(e,{variant:"h3",children:o}),r(e,{variant:"body1",children:v}),i("div",{children:[r(e,{variant:"subtitle1",color:"grey.700",children:"Social Media"}),i(C,{gap:"0.25rem",direction:"row",children:[r(c,{size:"small",children:r(_,{fontSize:"small"})}),r(c,{size:"small",children:r(x,{fontSize:"small"})}),r(c,{size:"small",children:r(B,{fontSize:"small"})})]})]})]}),r(s,{children:l==null?void 0:l.map((d,k)=>i("div",{children:[r(e,{variant:"subtitle1",color:"grey.700",children:d.term}),r(e,{children:d.description})]},k))}),r(s,{children:i("div",{children:[r(e,{variant:"subtitle1",color:"grey.700",children:"Newsletter"}),r(e,{children:"Input goes here"})]})})]})})}),r(z,{children:i(m,{children:[r(e,{variant:"caption",children:r(h,{children:"Privacy & Cookie Policy"})}),r(e,{variant:"caption",children:r(h,{children:"Terms of Service"})}),r(e,{variant:"caption",children:"©Copyright 2015-2020, FashionGreek, USC."}),r(e,{variant:"caption",children:"Made with ❤️ by Crealgo, LLC. All rights reserved."})]})})]});try{p.displayName="FooterBlock",p.__docgenInfo={description:"",displayName:"FooterBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},meta:{defaultValue:{value:"[]"},description:"",name:"meta",required:!1,type:{name:"Term[]"}}}}}catch{}const Z={component:p},t={args:b()};var f,u,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: generateFooter()
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const rr=["Default"];export{t as Default,rr as __namedExportsOrder,Z as default};
//# sourceMappingURL=FooterBlock.stories-804ffbcd.js.map
