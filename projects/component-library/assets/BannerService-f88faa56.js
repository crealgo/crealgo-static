import{j as n,a as c}from"./defaultTheme-30e43ede.js";import{r as s}from"./index-2812c619.js";import{A as d}from"./ActionStack-e2087fb9.js";import{B as u,C as f}from"./Block-81203b25.js";import{I as B}from"./IconButton-88d48bec.js";import{C as g}from"./Close-8324657b.js";import{s as m}from"./styled-8f152a82.js";import{c as y}from"./emotion-react.browser.esm-18e2571c.js";import{C as h}from"./Collapse-9d371e2b.js";const _=m(u)(({theme:e})=>y`
		display: block;
		position: relative;
		background-color: ${e.palette.error.light};
		padding-block: 0.5rem !important;
		color: white;

		.Banner-container {
			display: grid;
			grid-template-columns: 1fr auto;
			align-items: center;
			gap: 1rem;
		}

		.Banner-content {
			display: grid;
			grid-template-columns: auto auto;
			justify-content: center;

			width: 100%;
		}

		.Banner-textContent {
			font-size: 14px;
			font-weight: 500;
			line-height: var(--height-small-input);

			display: inline-block;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.Banner-actionStack .Button-root,
		.Banner-closeButton {
			color: white;
		}

		.Banner-closeButton {
			flex: none;
		}
	`),C=m(B)`
	height: 1.5rem;
	font-size: 1rem;
`,i=({actions:e,onCloseClick:o,text:a,children:l})=>{const r=s.useRef(null),t=s.useRef(null);return s.useMemo(()=>r.current&&t.current?(console.log(r.current,t.current),r.current.offsetWidth>t.current.offsetWidth):!1,[r,t]),n(_,{className:"Banner-root",title:typeof l=="string"?l:"",children:c(f,{className:"Banner-container",ref:t,children:[c("div",{className:"Banner-content",children:[n("span",{ref:r,className:"Banner-textContent",children:l??a}),(e==null?void 0:e.length)&&n(d,{className:"Banner-actionStack",size:"small",color:"text",actions:e})]}),n(C,{className:"Banner-closeButton","aria-label":"Close Banner",color:"text",Icon:g,onClick:o})]})})};try{i.displayName="Banner",i.__docgenInfo={description:"",displayName:"Banner",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},ImageProps:{defaultValue:null,description:"",name:"ImageProps",required:!1,type:{name:"ImageProps"}}}}}catch{}const p=({open:e,children:o,BannerProps:a})=>n(h,{in:e,children:o??n(i,{...a})});try{p.displayName="BannerService",p.__docgenInfo={description:"",displayName:"BannerService",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},BannerProps:{defaultValue:null,description:"",name:"BannerProps",required:!1,type:{name:"BannerProps"}}}}}catch{}export{i as B,p as a};
//# sourceMappingURL=BannerService-f88faa56.js.map
