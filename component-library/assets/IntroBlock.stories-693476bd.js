import{o as d}from"./chance-e22ba91b.js";import{j as e,a}from"./jsx-runtime-c2efdcba.js";import{A as u}from"./ActionStack-23545f53.js";import{C as l,B as g}from"./Container-a6f3098c.js";import{H as f}from"./Heading-0b105ff6.js";import{T as y}from"./Text-ba2fdcf0.js";import{s as h}from"./styled-e2ebe642.js";import{c as k}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./Button-ce6e9453.js";import"./clsx.m-1229b3e0.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-7aae2927.js";import"./ButtonBase-7c1dc156.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./defaultTheme-8fe9975f.js";import"./useThemeProps-debefb1f.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./Stack-bc1126ed.js";import"./Typography-ce4bf3ba.js";const b=""+new URL("sitting-and-laughing-intro-60d59c26.webp",import.meta.url).href,_=h(l)(t=>k`
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
				/* background: blue; */

				img {
					height: 100%;
					width: 100%;
					object-fit: contain;
				}
			}
		}
	`),o=({title:t,description:m,className:c,color:p="secondary"})=>e(g,{className:c,color:p,children:e(l,{children:a(_,{children:[a("div",{className:"content",children:[e(f,{level:1,children:t}),e(y,{children:m}),e(u,{size:"large",actions:[{label:"Get Started",color:"primary"},{label:"Book an appointment",color:"text"}]})]}),e("figure",{className:"image",children:e("img",{className:"Image-root",src:b.src,alt:"thing"})})]})})});try{o.displayName="IntroBlock",o.__docgenInfo={description:"",displayName:"IntroBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},color:{defaultValue:{value:"secondary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"grey"'}]}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action<HTMLElement>[]"}},ActionStackProps:{defaultValue:null,description:"",name:"ActionStackProps",required:!1,type:{name:"ActionStackProps"}}}}}catch{}const F={component:o},r={args:d()};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: generateIntroBlock()
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const J=["Default"];export{r as Default,J as __namedExportsOrder,F as default};
//# sourceMappingURL=IntroBlock.stories-693476bd.js.map
