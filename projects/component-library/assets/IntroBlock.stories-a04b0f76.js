import{h as d}from"./chance-dbb8c3cf.js";import{j as e,a as r}from"./defaultTheme-30e43ede.js";import{T as u,Y as g}from"./TidBit-f0402002.js";import{A as f}from"./ActionStack-e2087fb9.js";import{C as m,B as h}from"./Block-81203b25.js";import{B as a}from"./Button-ebd51bfd.js";import{H as y}from"./Heading-06e530da.js";import{T as k}from"./Text-95875774.js";import{s as b}from"./styled-8f152a82.js";import{c as B}from"./emotion-react.browser.esm-18e2571c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./ButtonBase-d3dd63a4.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-63fd7aa9.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-cbfa8a8e.js";import"./generateUtilityClasses-0f0148c0.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-d7a6185f.js";import"./useIsFocusVisible-9b2ab6cf.js";import"./useForkRef-9773819b.js";import"./Stack-71a65dae.js";import"./Typography-b4c27325.js";import"./colors-55af66f1.js";const I=""+new URL("sitting-and-laughing-intro-60d59c26.webp",import.meta.url).href,_=b(m)(t=>B`
		.content {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.image {
			display: none;
		}

		${t.theme.breakpoints.up("md")} {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;

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
	`),i=({title:t,description:c,className:p})=>e(h,{className:p,color:"secondary",children:e(m,{children:r(_,{children:[r("div",{className:"content",children:[e(y,{level:1,children:t}),e(k,{children:c}),r(f,{children:[e(a,{size:"large",children:"Get Started"}),e(a,{size:"large",color:"text",children:"Book an appointment"})]}),e("br",{}),e("div",{children:r(u,{href:"#yelp-test",icon:e(g,{}),children:["Trusted by ",e("strong",{children:"150+ People"})," on ",e("strong",{children:"Yelp"})]})})]}),e("figure",{className:"image",children:e("img",{className:"Image-root",src:I.src,alt:"thing"})})]})})});try{i.displayName="IntroBlock",i.__docgenInfo={description:"",displayName:"IntroBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},ImageProps:{defaultValue:null,description:"",name:"ImageProps",required:!1,type:{name:"ImageProps"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action<HTMLElement>[]"}},ActionStackProps:{defaultValue:null,description:"",name:"ActionStackProps",required:!1,type:{name:"ActionStackProps"}}}}}catch{}const Q={component:i},o={args:d()};var n,s,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: generateIntroBlock()
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,Q as default};
//# sourceMappingURL=IntroBlock.stories-a04b0f76.js.map
