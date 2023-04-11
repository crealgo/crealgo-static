import{e as a}from"./chance-dbb8c3cf.js";import{j as o,a as l}from"./defaultTheme-30e43ede.js";import{T as i}from"./Typography-b4c27325.js";import{s as p}from"./styled-8f152a82.js";import{c as m}from"./emotion-react.browser.esm-18e2571c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-cbfa8a8e.js";import"./generateUtilityClasses-0f0148c0.js";const d=p("div")(({theme:e})=>m`
		${e.utils.styles.block};

		background-color: ${e.palette.secondary.main};
		display: flex;
		justify-content: center;

		.HighlightBlock-content {
			display: grid;
			gap: 1rem;
			width: 100%;
			max-width: 900px;
		}
	`),r=e=>o(d,{children:l("div",{className:"HighlightBlock-content",children:[o(i,{variant:"h4",className:"HighlightBlock-quote",children:e.quote}),o(i,{variant:"body1",className:"HighlightBlock-quoter",children:e.quoter})]})});try{r.displayName="HighlightBlock",r.__docgenInfo={description:"",displayName:"HighlightBlock",props:{quote:{defaultValue:null,description:"",name:"quote",required:!1,type:{name:"string"}},quoter:{defaultValue:null,description:"",name:"quoter",required:!1,type:{name:"string"}}}}}catch{}const N={component:r},t={args:{quote:a.sentence(),quoter:a.name()}};var s,c,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    quote: chance.sentence(),
    quoter: chance.name()
  }
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,N as default};
//# sourceMappingURL=HighlightBlock.stories-b2335a93.js.map
