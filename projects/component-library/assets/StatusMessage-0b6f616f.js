import{a as n,j as r}from"./defaultTheme-30e43ede.js";import{s as l}from"./styled-8f152a82.js";import{T as i}from"./Typography-b4c27325.js";import{W as p}from"./Warning-724d5da6.js";import{c as o}from"./emotion-react.browser.esm-18e2571c.js";const d=l("div")(({theme:e,contained:a,actionable:t})=>o`
		${a&&`
		padding-inline: 1rem;
		padding-block: 0.75rem;

		border-radius: 0.25rem;
		background-color: ${e.palette.grey[300]};
		border: solid 1px ${e.palette.grey[50]};
		outline: solid 1px ${e.palette.grey[400]};
	`}

		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.25rem;

		align-items: center;
		color: ${e.palette.grey[700]};

		${t?o`
			cursor: pointer;

			&:hover {
				color: ${e.palette.primary.main};
			}
		`:null}
	`),s=({IconComponent:e=p,text:a,...t})=>n(d,{className:"StatusMessage-root",...t,children:[r(e,{fontSize:"small"}),r(i,{className:"StatusMessage-text",variant:"body1",component:"span",children:a})]});try{s.displayName="StatusMessage",s.__docgenInfo={description:"",displayName:"StatusMessage",props:{IconComponent:{defaultValue:null,description:"",name:"IconComponent",required:!1,type:{name:"ComponentType<SvgIconProps>"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},contained:{defaultValue:null,description:"",name:"contained",required:!1,type:{name:"boolean"}},actionable:{defaultValue:null,description:"",name:"actionable",required:!1,type:{name:"boolean"}}}}}catch{}export{s as S};
//# sourceMappingURL=StatusMessage-0b6f616f.js.map
