import{j as n,a as l}from"./jsx-runtime-c2efdcba.js";import{A as c}from"./ActionStack-da0a00f9.js";import{B as p}from"./Block-7499e844.js";import{C as m}from"./Container-c8e048b9.js";import{I as d}from"./IconButton-5c2535fc.js";import{C as u}from"./Close-25d400ee.js";import{s}from"./styled-e2ebe642.js";import{c as B}from"./emotion-react.browser.esm-511d925c.js";import{C as f}from"./Collapse-c108770e.js";const g=s(p)(({theme:e})=>B`
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
	`),y=s(d)`
	height: 1.5rem;
	font-size: 1rem;
`,o=({actions:e,onCloseClick:t,text:r,children:a})=>n(g,{hasNoDefaultMargin:!0,className:"Banner-root",title:typeof a=="string"?a:"",children:l(m,{className:"Banner-container",children:[l("div",{className:"Banner-content",children:[n("span",{className:"Banner-textContent",children:a??r}),(e==null?void 0:e.length)&&n(c,{className:"Banner-actionStack",size:"small",color:"text",actions:e})]}),n(y,{className:"Banner-closeButton","aria-label":"Close Banner",color:"text",Icon:u,onClick:t})]})});try{o.displayName="Banner",o.__docgenInfo={description:"",displayName:"Banner",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}const i=({open:e,children:t,BannerProps:r})=>n(f,{in:e,children:t??n(o,{...r})});try{i.displayName="BannerService",i.__docgenInfo={description:"",displayName:"BannerService",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},BannerProps:{defaultValue:null,description:"",name:"BannerProps",required:!1,type:{name:"BannerProps"}}}}}catch{}export{o as B,i as a};
//# sourceMappingURL=BannerService-27372522.js.map
