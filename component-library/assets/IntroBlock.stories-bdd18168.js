import{o as d}from"./chance-e22ba91b.js";import{j as e,a as r}from"./jsx-runtime-c2efdcba.js";import{T as u,Y as g}from"./index-d2b2424c.js";import{A as f}from"./ActionStack-b71d8d0b.js";import{C as m,B as h}from"./Container-96bf4f71.js";import{B as a}from"./Button-b3c0cd51.js";import{H as y}from"./Heading-78206ec4.js";import{T as k}from"./Text-40b59492.js";import{s as B}from"./styled-899f007b.js";import{c as b}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./ButtonBase-ef184424.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-890a84e2.js";import"./defaultTheme-d0849189.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-4c706523.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./Stack-a3a99865.js";import"./Typography-e61b6c49.js";import"./colors-077d21ae.js";const _=B(m)(t=>b`
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
	`),i=({title:t,description:c,className:p})=>e(h,{className:p,color:"secondary",children:e(m,{children:r(_,{children:[r("div",{className:"content",children:[e(y,{level:1,children:t}),e(k,{children:c}),r(f,{children:[e(a,{size:"large",children:"Get Started"}),e(a,{size:"large",color:"text",children:"Book an appointment"})]}),e("br",{}),e("div",{children:r(u,{href:"#yelp-test",icon:e(g,{}),children:["Trusted by ",e("strong",{children:"150+ People"})," on ",e("strong",{children:"Yelp"})]})})]}),e("figure",{className:"image",children:e("img",{className:"Image-root",alt:"thing"})})]})})});try{i.displayName="IntroBlock",i.__docgenInfo={description:"",displayName:"IntroBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action<HTMLElement>[]"}},ActionStackProps:{defaultValue:null,description:"",name:"ActionStackProps",required:!1,type:{name:"ActionStackProps"}}}}}catch{}const R={component:i},o={args:d()};var n,s,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: generateIntroBlock()
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const U=["Default"];export{o as Default,U as __namedExportsOrder,R as default};
//# sourceMappingURL=IntroBlock.stories-bdd18168.js.map
