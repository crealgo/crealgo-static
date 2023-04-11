import{j as e,a as i}from"./defaultTheme-30e43ede.js";import{A as u}from"./ActionStack-e2087fb9.js";import{C as g,B as f}from"./Block-81203b25.js";import{D as h}from"./DualPhoneDisplay-52d3f050.js";import{T as o}from"./Typography-b4c27325.js";import{s as m}from"./styled-8f152a82.js";import{c as y}from"./emotion-react.browser.esm-18e2571c.js";import{g as k}from"./chance-dbb8c3cf.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./Button-ebd51bfd.js";import"./ButtonBase-d3dd63a4.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-63fd7aa9.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-cbfa8a8e.js";import"./generateUtilityClasses-0f0148c0.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-d7a6185f.js";import"./useIsFocusVisible-9b2ab6cf.js";import"./useForkRef-9773819b.js";import"./colors-55af66f1.js";import"./Stack-71a65dae.js";import"./Phone-03123482.js";m("div")(({theme:t})=>`
    ${t.breakpoints.up("md")} {
		margin: 1rem;
    }
`);const B=m("div")(({theme:t})=>y`
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
	`),a=({title:t,description:p,meta:c,actions:d})=>e(g,{children:e(f,{color:"secondary",rounded:!0,children:i(B,{children:[i("div",{className:"content",children:[e(o,{variant:"overline",className:"CalloutBlock-title",children:c}),e(o,{variant:"h2",className:"CalloutBlock-title",children:t}),e(o,{variant:"body2",className:"CalloutBlock-description",sx:{mb:2},children:p}),e(u,{size:"large",actions:d})]}),e("div",{className:"image",children:e(h,{})})]})})});try{a.displayName="CalloutBlock",a.__docgenInfo={description:"",displayName:"CalloutBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}}}}}catch{}const L={component:a},r={args:k()};var l,s,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: generateCalloutBlock()
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const M=["Default"];export{r as Default,M as __namedExportsOrder,L as default};
//# sourceMappingURL=CalloutBlock.stories-19cae7dc.js.map
