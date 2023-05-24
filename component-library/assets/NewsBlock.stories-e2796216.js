import{c as s,n as _,p as y}from"./chance-56e14726.js";import{a as i,j as t}from"./jsx-runtime-c2efdcba.js";import{A as w}from"./ActionStack-da0a00f9.js";import{N as k}from"./NewsCard-e04be276.js";import{T as n}from"./Typography-ce4bf3ba.js";import{s as l}from"./styled-e2ebe642.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./Button-90cddc56.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-a4cb8c49.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-0d2a43de.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./defaultTheme-8fe9975f.js";import"./useThemeProps-debefb1f.js";import"./generateUtilityClasses-bdae82bf.js";import"./emotion-react.browser.esm-511d925c.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./useEnhancedEffect-767500c3.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./Stack-bc1126ed.js";import"./Profile-32a59e5a.js";import"./Avatar-2d0a1c93.js";import"./createSvgIcon-45dd28ac.js";import"./Link-79621f82.js";import"./dividerClasses-3a51a39a.js";import"./ArrowForward-c0482cb7.js";const o=l("div")(({theme:e})=>`
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
	`),h=l("div")(({theme:e})=>`
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: ${e.spacing(2)};
	`),a=({articles:e,meta:d,title:u,actions:f})=>i(o,{className:"NewsBlock-root",children:[i(h,{children:[t(n,{variant:"h2",className:"NewsBlock-contentMeta",children:d}),t(n,{variant:"body1",className:"NewsBlock-contentTitle",children:u}),t(w,{actions:f})]}),e==null?void 0:e.map((g,N)=>t(k,{article:g},N))]});try{o.displayName="NewsBlockWrapper",o.__docgenInfo={description:"",displayName:"NewsBlockWrapper",props:{}}}catch{}try{a.displayName="NewsBlock",a.__docgenInfo={description:"",displayName:"NewsBlock",props:{meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"Action[]"}},articles:{defaultValue:null,description:"",name:"articles",required:!0,type:{name:"Article[]"}}}}}catch{}const Y={component:a},r={args:{title:s.sentence(),meta:s.sentence({words:3}),actions:_(),articles:y()}};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: chance.sentence(),
    meta: chance.sentence({
      words: 3
    }),
    actions: generateActions(),
    articles: generateArticles()
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const Z=["Default"];export{r as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=NewsBlock.stories-e2796216.js.map
