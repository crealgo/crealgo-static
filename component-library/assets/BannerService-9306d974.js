import{j as n,a as c}from"./jsx-runtime-c2efdcba.js";import{r as s}from"./index-2812c619.js";import{A as m}from"./ActionStack-b71d8d0b.js";import{B as u,C as f}from"./Container-96bf4f71.js";import{I as B}from"./IconButton-f561e6f7.js";import{C as g}from"./Close-da405464.js";import{s as d}from"./styled-899f007b.js";import{c as h}from"./emotion-react.browser.esm-511d925c.js";import{C as y}from"./Collapse-7c6ba631.js";const _=d(u)(({theme:e})=>h`
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
	`),C=d(B)`
	height: 1.5rem;
	font-size: 1rem;
`,i=({actions:e,onCloseClick:o,text:a,children:l})=>{const t=s.useRef(null),r=s.useRef(null);return s.useMemo(()=>t.current&&r.current?(console.log(t.current,r.current),t.current.offsetWidth>r.current.offsetWidth):!1,[t,r]),n(_,{className:"Banner-root",title:typeof l=="string"?l:"",children:c(f,{ref:r,className:"Banner-container",children:[c("div",{className:"Banner-content",children:[n("span",{ref:t,className:"Banner-textContent",children:l??a}),(e==null?void 0:e.length)&&n(m,{className:"Banner-actionStack",size:"small",color:"text",actions:e})]}),n(C,{className:"Banner-closeButton","aria-label":"Close Banner",color:"text",Icon:g,onClick:o})]})})};try{i.displayName="Banner",i.__docgenInfo={description:"",displayName:"Banner",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}const p=({open:e,children:o,BannerProps:a})=>n(y,{in:e,children:o??n(i,{...a})});try{p.displayName="BannerService",p.__docgenInfo={description:"",displayName:"BannerService",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},BannerProps:{defaultValue:null,description:"",name:"BannerProps",required:!1,type:{name:"BannerProps"}}}}}catch{}export{i as B,p as a};
//# sourceMappingURL=BannerService-9306d974.js.map
