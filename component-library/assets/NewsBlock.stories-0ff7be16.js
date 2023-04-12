import{c as s,n as _,p as w}from"./chance-a681a54c.js";import{a as i,j as t}from"./jsx-runtime-c2efdcba.js";import{A as k}from"./ActionStack-fcf795f3.js";import{N as B}from"./NewsCard-6934dd8e.js";import{T as n}from"./Typography-e61b6c49.js";import{s as l}from"./styled-899f007b.js";import{c as d}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./Button-77e6833e.js";import"./ButtonBase-7b58a963.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-890a84e2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./defaultTheme-d0849189.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-4c706523.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./colors-55af66f1.js";import"./Stack-a3a99865.js";import"./Profile-ae5d7b1d.js";import"./Avatar-a46b5d44.js";import"./createSvgIcon-4ae69272.js";import"./Link-3d66d850.js";import"./dividerClasses-3a51a39a.js";import"./ArrowForward-2a49aea2.js";const o=l("div")(({theme:e})=>d`
		${e.utils.styles.block}

		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;

		.NewsCard-root {
			max-width: 100%;
		}

		${e.breakpoints.up("sm")} {
			grid-template-columns: repeat(2, 1fr);
		}

		${e.breakpoints.up("md")} {
			grid-template-columns: repeat(4, 1fr);
		}
	`),h=l("div")(({theme:e})=>d`
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: ${e.spacing(2)};
	`),a=({articles:e,meta:u,title:f,actions:g})=>i(o,{className:"NewsBlock-root",children:[i(h,{children:[t(n,{variant:"h2",className:"NewsBlock-contentMeta",children:u}),t(n,{variant:"body1",className:"NewsBlock-contentTitle",children:f}),t(k,{actions:g})]}),e==null?void 0:e.map((N,y)=>t(B,{article:N},y))]});try{o.displayName="NewsBlockWrapper",o.__docgenInfo={description:"",displayName:"NewsBlockWrapper",props:{}}}catch{}try{a.displayName="NewsBlock",a.__docgenInfo={description:"",displayName:"NewsBlock",props:{meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"Action[]"}},articles:{defaultValue:null,description:"",name:"articles",required:!0,type:{name:"Article[]"}}}}}catch{}const Z={component:a},r={args:{title:s.sentence(),meta:s.sentence({words:3}),actions:_(),articles:w()}};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: chance.sentence(),
    meta: chance.sentence({
      words: 3
    }),
    actions: generateActions(),
    articles: generateArticles()
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const ee=["Default"];export{r as Default,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=NewsBlock.stories-0ff7be16.js.map
