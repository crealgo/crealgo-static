import{e as s,f as _,i as w}from"./chance-dbb8c3cf.js";import{a as i,j as t}from"./defaultTheme-30e43ede.js";import{A as k}from"./ActionStack-e2087fb9.js";import{N as B}from"./NewsCard-78b3bee9.js";import{T as n}from"./Typography-b4c27325.js";import{s as l}from"./styled-8f152a82.js";import{c as d}from"./emotion-react.browser.esm-18e2571c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./Button-ebd51bfd.js";import"./ButtonBase-d3dd63a4.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-63fd7aa9.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-cbfa8a8e.js";import"./generateUtilityClasses-0f0148c0.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-d7a6185f.js";import"./useIsFocusVisible-9b2ab6cf.js";import"./useForkRef-9773819b.js";import"./colors-55af66f1.js";import"./Stack-71a65dae.js";import"./Profile-bf946036.js";import"./Avatar-ff3aae0b.js";import"./createSvgIcon-7fe6f70f.js";import"./Link-4f63bb94.js";import"./dividerClasses-41f02103.js";import"./ArrowForward-8e17ada2.js";const o=l("div")(({theme:e})=>d`
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
//# sourceMappingURL=NewsBlock.stories-65ed389e.js.map
