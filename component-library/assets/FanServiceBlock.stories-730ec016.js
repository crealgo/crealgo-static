import{j as m}from"./chance-e22ba91b.js";import{a,j as r}from"./jsx-runtime-c2efdcba.js";import{A as p}from"./ActionStack-23545f53.js";import{I as d}from"./index-9ed90fcb.js";import{T as n}from"./Typography-ce4bf3ba.js";import{s as u}from"./styled-e2ebe642.js";import{c as g}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./Button-ce6e9453.js";import"./clsx.m-1229b3e0.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-7aae2927.js";import"./ButtonBase-7c1dc156.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./defaultTheme-8fe9975f.js";import"./useThemeProps-debefb1f.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./Stack-bc1126ed.js";import"./Image-cc1fdedc.js";import"./IconButton-beab8aae.js";import"./KeyboardArrowLeft-d45a4745.js";import"./createSvgIcon-45dd28ac.js";import"./KeyboardArrowRight-e472ddd7.js";import"./useControlled-a2691953.js";const k=u("div")(({theme:e})=>g`
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
	`),i=e=>{var o;return a(k,{children:[(o=e.images)!=null&&o.length?r(d,{images:e.images}):null,a("div",{className:"FanServiceBlock-content",children:[a("div",{className:"FanServiceBlock-intro",children:[r(n,{gutterBottom:!0,variant:"h3",children:e.title}),r(n,{variant:"body1",marginTop:"0.25rem",children:e.description})]}),r("div",{className:"FanServiceBlock-cta",children:r(p,{color:"secondary",...e.ActionStackProps,actions:e.actions})})]})]})};try{i.displayName="FanServiceBlock",i.__docgenInfo={description:"",displayName:"FanServiceBlock",props:{images:{defaultValue:null,description:"",name:"images",required:!1,type:{name:"string[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action<HTMLElement>[]"}},ActionStackProps:{defaultValue:null,description:"",name:"ActionStackProps",required:!1,type:{name:"ActionStackProps"}}}}}catch{}const G={component:i},t={args:m()};var c,l,s;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: generateFanServiceBlock()
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const J=["Default"];export{t as Default,J as __namedExportsOrder,G as default};
//# sourceMappingURL=FanServiceBlock.stories-730ec016.js.map
