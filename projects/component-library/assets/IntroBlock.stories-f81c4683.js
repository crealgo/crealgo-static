import{o as d}from"./chance-a681a54c.js";import{j as e,a as r}from"./jsx-runtime-c2efdcba.js";import{T as u,Y as g}from"./index-6b6455ae.js";import{A as f}from"./ActionStack-fcf795f3.js";import{C as m,B as h}from"./Container-f017ee1c.js";import{B as a}from"./Button-77e6833e.js";import{H as y}from"./Heading-33cbf91d.js";import{T as k}from"./Text-40b59492.js";import{s as b}from"./styled-899f007b.js";import{c as B}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./ButtonBase-7b58a963.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-890a84e2.js";import"./defaultTheme-d0849189.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-4c706523.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./Stack-a3a99865.js";import"./Typography-e61b6c49.js";import"./colors-55af66f1.js";const I=""+new URL("sitting-and-laughing-intro-60d59c26.webp",import.meta.url).href,_=b(m)(t=>B`
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
//# sourceMappingURL=IntroBlock.stories-f81c4683.js.map
