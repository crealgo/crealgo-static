import{j as m}from"./chance-56e14726.js";import{a,j as r}from"./jsx-runtime-c2efdcba.js";import{A as p}from"./ActionStack-da0a00f9.js";import{I as d}from"./index-1c16b19b.js";import{T as c}from"./Typography-ce4bf3ba.js";import{s as u}from"./styled-e2ebe642.js";import{c as g}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./Button-90cddc56.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-a4cb8c49.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-0d2a43de.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./defaultTheme-8fe9975f.js";import"./useThemeProps-debefb1f.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./useEnhancedEffect-767500c3.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./Stack-bc1126ed.js";import"./Image-f19a3ca7.js";import"./IconButton-b49a5aeb.js";import"./KeyboardArrowRight-c9a81447.js";import"./createSvgIcon-45dd28ac.js";import"./useControlled-a2691953.js";const k=u("div")(({theme:e})=>g`
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
	`),o=e=>{var i;return a(k,{children:[(i=e.images)!=null&&i.length?r(d,{images:e.images}):null,a("div",{className:"FanServiceBlock-content",children:[a("div",{className:"FanServiceBlock-intro",children:[r(c,{gutterBottom:!0,variant:"h3",children:e.title}),r(c,{variant:"body1",marginTop:"0.25rem",children:e.description})]}),r("div",{className:"FanServiceBlock-cta",children:r(p,{color:"secondary",...e.ActionStackProps,actions:e.actions})})]})]})};try{o.displayName="FanServiceBlock",o.__docgenInfo={description:"",displayName:"FanServiceBlock",props:{images:{defaultValue:null,description:"",name:"images",required:!1,type:{name:"string[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action<HTMLElement>[]"}},ActionStackProps:{defaultValue:null,description:"",name:"ActionStackProps",required:!1,type:{name:"ActionStackProps"}}}}}catch{}const z={component:o},t={args:m()};var n,l,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: generateFanServiceBlock()
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const G=["Default"];export{t as Default,G as __namedExportsOrder,z as default};
//# sourceMappingURL=FanServiceBlock.stories-bdfe4948.js.map
