import{i as d}from"./chance-e22ba91b.js";import{j as e,a as i}from"./jsx-runtime-c2efdcba.js";import{A as u}from"./ActionStack-23545f53.js";import{C as g,B as f}from"./Container-a6f3098c.js";import{D as h}from"./DualPhoneDisplay-e1b53420.js";import{T as o}from"./Typography-ce4bf3ba.js";import{s as y}from"./styled-e2ebe642.js";import{c as k}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./Button-ce6e9453.js";import"./clsx.m-1229b3e0.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-7aae2927.js";import"./ButtonBase-7c1dc156.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./defaultTheme-8fe9975f.js";import"./useThemeProps-debefb1f.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./Stack-bc1126ed.js";import"./Phone-311a24d4.js";const B=y("div")(({theme:t})=>k`
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
				background: blue;

				img {
					height: 100%;
					width: 100%;
					object-fit: contain;
				}
			}
		}
	`),a=({title:t,description:m,meta:c,actions:p})=>e(g,{children:e(f,{rounded:!0,color:"secondary",children:i(B,{children:[i("div",{className:"content",children:[e(o,{variant:"overline",className:"CalloutBlock-title",children:c}),e(o,{variant:"h2",className:"CalloutBlock-title",children:t}),e(o,{variant:"body2",className:"CalloutBlock-description",sx:{mb:2},children:m}),e(u,{size:"large",actions:p})]}),e("div",{className:"image",children:e(h,{})})]})})});try{a.displayName="CalloutBlock",a.__docgenInfo={description:"",displayName:"CalloutBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}}}}}catch{}const K={component:a},r={args:d()};var l,s,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: generateCalloutBlock()
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const L=["Default"];export{r as Default,L as __namedExportsOrder,K as default};
//# sourceMappingURL=CalloutBlock.stories-bf7b33ab.js.map
