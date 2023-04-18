import{a as n,j as r}from"./jsx-runtime-c2efdcba.js";import{s as i}from"./styled-e2ebe642.js";import{T as l}from"./Typography-ce4bf3ba.js";import{W as p}from"./Warning-842bfe40.js";import{c as o}from"./emotion-react.browser.esm-511d925c.js";const d=i("div")(({theme:e,isContained:a,isActionable:t})=>o`
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
	`),s=({IconComponent:e=p,text:a,...t})=>n(d,{className:"StatusMessage-root",...t,children:[r(e,{fontSize:"small"}),r(l,{className:"StatusMessage-text",variant:"body1",component:"span",children:a})]});try{s.displayName="StatusMessage",s.__docgenInfo={description:"",displayName:"StatusMessage",props:{IconComponent:{defaultValue:null,description:"",name:"IconComponent",required:!1,type:{name:"ComponentType<SvgIconProps>"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},isContained:{defaultValue:null,description:"",name:"isContained",required:!1,type:{name:"boolean"}},isActionable:{defaultValue:null,description:"",name:"isActionable",required:!1,type:{name:"boolean"}}}}}catch{}export{s as S};
//# sourceMappingURL=StatusMessage-ae80a29c.js.map
