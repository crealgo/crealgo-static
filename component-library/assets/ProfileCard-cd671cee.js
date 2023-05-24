import{a as t,j as r}from"./jsx-runtime-c2efdcba.js";import{I as p}from"./Image-f19a3ca7.js";import{s as d}from"./styled-e2ebe642.js";import{T as n}from"./Typography-ce4bf3ba.js";import{W as c,B as m}from"./Warning-7be2acc4.js";import{c as i}from"./emotion-react.browser.esm-511d925c.js";const u=d("div")(({theme:e,isContained:a,isActionable:o})=>i`
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

		${o?i`
					cursor: pointer;

					&:hover {
						color: ${e.palette.primary.main};
					}
			  `:null}
	`),s=({IconComponent:e=c,text:a,...o})=>t(u,{className:"StatusMessage-root",...o,children:[r(e,{fontSize:"small"}),r(n,{className:"StatusMessage-text",variant:"body1",component:"span",children:a})]});try{s.displayName="StatusMessage",s.__docgenInfo={description:"",displayName:"StatusMessage",props:{IconComponent:{defaultValue:null,description:"",name:"IconComponent",required:!1,type:{name:"ComponentType<SvgIconProps>"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},isContained:{defaultValue:null,description:"",name:"isContained",required:!1,type:{name:"boolean"}},isActionable:{defaultValue:null,description:"",name:"isActionable",required:!1,type:{name:"boolean"}}}}}catch{}const g=d("div")`
	.Image-root {
		aspect-ratio: 0.75;
		border: none;
	}

	.ProfileCard-info {
		display: grid;
		gap: 0.25rem;

		padding-block: 0.5rem;
		padding-right: 1rem;
	}
`,l=({profile:e})=>e?t(g,{className:"ProfileCard-root",children:[r(p,{}),t("div",{className:"ProfileCard-info",children:[r(n,{noWrap:!0,variant:"h5",children:e.name}),r(s,{IconComponent:m,text:e.jobTitle}),r(n,{color:"primary",children:"Interests"})]})]}):null;try{l.displayName="ProfileCard",l.__docgenInfo={description:"",displayName:"ProfileCard",props:{profile:{defaultValue:null,description:"",name:"profile",required:!1,type:{name:"Employee"}}}}}catch{}export{l as P};
//# sourceMappingURL=ProfileCard-cd671cee.js.map
