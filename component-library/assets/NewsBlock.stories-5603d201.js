import{c as s,n as y,p as w}from"./chance-e22ba91b.js";import{a as i,j as t}from"./jsx-runtime-c2efdcba.js";import{A as k}from"./ActionStack-23545f53.js";import{N as h}from"./NewsCard-7fafd41f.js";import{T as n}from"./Typography-ce4bf3ba.js";import{s as l}from"./styled-e2ebe642.js";import{c as d}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./Button-ce6e9453.js";import"./clsx.m-1229b3e0.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-7aae2927.js";import"./ButtonBase-7c1dc156.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./defaultTheme-8fe9975f.js";import"./useThemeProps-debefb1f.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./Stack-bc1126ed.js";import"./Profile-32a59e5a.js";import"./Avatar-2d0a1c93.js";import"./createSvgIcon-45dd28ac.js";import"./Link-79621f82.js";import"./dividerClasses-3a51a39a.js";import"./ArrowForward-c0482cb7.js";const o=l("div")(({theme:e})=>d`
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
	`),B=l("div")(({theme:e})=>d`
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: ${e.spacing(2)};
	`),a=({articles:e,meta:u,title:f,actions:g})=>i(o,{className:"NewsBlock-root",children:[i(B,{children:[t(n,{variant:"h2",className:"NewsBlock-contentMeta",children:u}),t(n,{variant:"body1",className:"NewsBlock-contentTitle",children:f}),t(k,{actions:g})]}),e==null?void 0:e.map((N,_)=>t(h,{article:N},_))]});try{o.displayName="NewsBlockWrapper",o.__docgenInfo={description:"",displayName:"NewsBlockWrapper",props:{}}}catch{}try{a.displayName="NewsBlock",a.__docgenInfo={description:"",displayName:"NewsBlock",props:{meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"Action[]"}},articles:{defaultValue:null,description:"",name:"articles",required:!0,type:{name:"Article[]"}}}}}catch{}const Y={component:a},r={args:{title:s.sentence(),meta:s.sentence({words:3}),actions:y(),articles:w()}};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: chance.sentence(),
    meta: chance.sentence({
      words: 3
    }),
    actions: generateActions(),
    articles: generateArticles()
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const Z=["Default"];export{r as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=NewsBlock.stories-5603d201.js.map
