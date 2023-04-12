import{c as a}from"./chance-a681a54c.js";import{j as o,a as l}from"./jsx-runtime-c2efdcba.js";import{T as i}from"./Typography-e61b6c49.js";import{s as p}from"./styled-899f007b.js";import{c as m}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./defaultTheme-d0849189.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-4c706523.js";import"./generateUtilityClasses-bdae82bf.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";const d=p("div")(({theme:e})=>m`
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
	`),r=e=>o(d,{children:l("div",{className:"HighlightBlock-content",children:[o(i,{variant:"h4",className:"HighlightBlock-quote",children:e.quote}),o(i,{variant:"body1",className:"HighlightBlock-quoter",children:e.quoter})]})});try{r.displayName="HighlightBlock",r.__docgenInfo={description:"",displayName:"HighlightBlock",props:{quote:{defaultValue:null,description:"",name:"quote",required:!1,type:{name:"string"}},quoter:{defaultValue:null,description:"",name:"quoter",required:!1,type:{name:"string"}}}}}catch{}const b={component:r},t={args:{quote:a.sentence(),quoter:a.name()}};var s,c,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    quote: chance.sentence(),
    quoter: chance.name()
  }
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,b as default};
//# sourceMappingURL=HighlightBlock.stories-7984818f.js.map
