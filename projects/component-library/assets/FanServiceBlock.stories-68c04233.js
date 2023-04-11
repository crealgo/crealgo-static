import{a as m}from"./chance-dbb8c3cf.js";import{a,j as r}from"./defaultTheme-30e43ede.js";import{A as p}from"./ActionStack-e2087fb9.js";import{I as d}from"./index-e4e19d90.js";import{T as n}from"./Typography-b4c27325.js";import{s as u}from"./styled-8f152a82.js";import{c as g}from"./emotion-react.browser.esm-18e2571c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./Button-ebd51bfd.js";import"./ButtonBase-d3dd63a4.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-63fd7aa9.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-cbfa8a8e.js";import"./generateUtilityClasses-0f0148c0.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-d7a6185f.js";import"./useIsFocusVisible-9b2ab6cf.js";import"./useForkRef-9773819b.js";import"./colors-55af66f1.js";import"./Stack-71a65dae.js";import"./Image-515b8c76.js";import"./IconButton-b53876ff.js";import"./KeyboardArrowLeft-f4754dc1.js";import"./createSvgIcon-7fe6f70f.js";import"./KeyboardArrowRight-ec5b06ad.js";import"./useControlled-a2691953.js";const k=u("div")(({theme:e})=>g`
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
//# sourceMappingURL=FanServiceBlock.stories-68c04233.js.map
