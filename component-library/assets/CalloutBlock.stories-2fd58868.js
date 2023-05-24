import{i as u}from"./chance-56e14726.js";import{j as e,a as i}from"./jsx-runtime-c2efdcba.js";import{A as g}from"./ActionStack-da0a00f9.js";import{C as f}from"./Container-c8e048b9.js";import{B as h}from"./Block-7499e844.js";import{T as o}from"./Typography-ce4bf3ba.js";import{s as m}from"./styled-e2ebe642.js";import{c as y}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./Button-90cddc56.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-a4cb8c49.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-0d2a43de.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./defaultTheme-8fe9975f.js";import"./useThemeProps-debefb1f.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./useEnhancedEffect-767500c3.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./Stack-bc1126ed.js";const k=m(h)`
	overflow: hidden;
`,C=m("div")(({theme:t})=>y`
		.content {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.image {
			display: none;
		}

		${t.breakpoints.up("md")} {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 3rem;

			.image {
				display: block;
				position: absolute;
				margin: unset;
				width: 50%;
				height: 100%;
				right: 0;
				bottom: 0;
				background: var(--color-gray-300);

				img {
					height: 100%;
					width: 100%;
					object-fit: contain;
				}
			}
		}
	`),a=({title:t,description:c,meta:p,actions:d})=>e(f,{children:e(k,{isRounded:!0,color:"secondary",children:i(C,{children:[i("div",{className:"content",children:[e(o,{variant:"overline",className:"CalloutBlock-title",children:p}),e(o,{variant:"h2",className:"CalloutBlock-title",children:t}),e(o,{variant:"body2",className:"CalloutBlock-description",sx:{mb:2},children:c}),e(g,{size:"large",actions:d})]}),e("div",{className:"image"})]})})});try{a.displayName="CalloutBlock",a.__docgenInfo={description:"",displayName:"CalloutBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}}}}}catch{}const K={component:a},r={args:u()};var l,s,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: generateCalloutBlock()
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const L=["Default"];export{r as Default,L as __namedExportsOrder,K as default};
//# sourceMappingURL=CalloutBlock.stories-2fd58868.js.map
