import{j as m}from"./chance-a681a54c.js";import{a,j as r}from"./jsx-runtime-c2efdcba.js";import{A as p}from"./ActionStack-fcf795f3.js";import{I as d}from"./index-32747846.js";import{T as n}from"./Typography-e61b6c49.js";import{s as u}from"./styled-899f007b.js";import{c as g}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./Button-77e6833e.js";import"./ButtonBase-7b58a963.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-890a84e2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./defaultTheme-d0849189.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-4c706523.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./colors-55af66f1.js";import"./Stack-a3a99865.js";import"./Image-d662c5af.js";import"./IconButton-ce06c0a3.js";import"./KeyboardArrowLeft-aa055f2b.js";import"./createSvgIcon-4ae69272.js";import"./KeyboardArrowRight-41fc08cb.js";import"./useControlled-a2691953.js";const k=u("div")(({theme:e})=>g`
		display: grid;
		grid-template-columns: 1fr;

		.ImageCarousel-root {
			background-color: ${e.palette.grey[200]};
			min-height: 300px;
		}

		.FanServiceBlock-content {
			.FanServiceBlock-intro,
			.FanServiceBlock-cta {
				padding: 1.5rem 1rem;
			}

			.FanServiceBlock-intro {
				max-width: 30rem;
			}

			.FanServiceBlock-cta {
				background-color: ${e.palette.grey[200]};
			}
		}

		${e.breakpoints.up("md")} {
			grid-template-columns: 1fr 1fr;

			.ImageCarousel-root {
				background-color: ${e.palette.grey[200]};
			}

			.FanServiceBlock-content {
				.FanServiceBlock-intro,
				.FanServiceBlock-cta {
					padding: 2.5rem;
				}
			}
		}
	`),i=e=>{var o;return a(k,{children:[(o=e.images)!=null&&o.length?r(d,{images:e.images}):null,a("div",{className:"FanServiceBlock-content",children:[a("div",{className:"FanServiceBlock-intro",children:[r(n,{gutterBottom:!0,variant:"h3",children:e.title}),r(n,{variant:"body1",marginTop:"0.25rem",children:e.description})]}),r("div",{className:"FanServiceBlock-cta",children:r(p,{color:"secondary",...e.ActionStackProps,actions:e.actions})})]})]})};try{i.displayName="FanServiceBlock",i.__docgenInfo={description:"",displayName:"FanServiceBlock",props:{images:{defaultValue:null,description:"",name:"images",required:!1,type:{name:"string[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action<HTMLElement>[]"}},ActionStackProps:{defaultValue:null,description:"",name:"ActionStackProps",required:!1,type:{name:"ActionStackProps"}}}}}catch{}const J={component:i},t={args:m()};var c,l,s;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: generateFanServiceBlock()
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const K=["Default"];export{t as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=FanServiceBlock.stories-4f09cb8e.js.map
