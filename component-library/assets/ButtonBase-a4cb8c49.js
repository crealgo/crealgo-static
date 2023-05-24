import{a as c,j as l}from"./jsx-runtime-c2efdcba.js";import{_ as o}from"./excludePropsFromForwarding-6c5743cd.js";import{s as u}from"./styled-e2ebe642.js";import{M as d}from"./ButtonBase-0d2a43de.js";const p=u(d,o("endIcon","startIcon","size"))(({size:e="medium"})=>`
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: var(--button-spacing-gap-${e});

		letter-spacing: -0.0156rem;
		white-space: nowrap;

		border-radius: 0.25rem;
	`),s=u("span",o("end","start"))(({start:e,end:t})=>`
	svg {
		height: 0.875em;
		width: 0.875em;
	}

	display: inline-flex;
	${e?"margin-left: -0.25rem;":""}
	${t?"margin-right: -0.25rem;":""}
`),i=({children:e,startIcon:t,endIcon:a,onClick:n,...m})=>c(p,{...m,role:"button",onClick:r=>{n&&(r.preventDefault(),n(r))},children:[t&&l(s,{start:!0,className:"Button-icon Button-startIcon",children:t}),e,a&&l(s,{end:!0,className:"Button-icon Button-endIcon",children:a})]});try{i.displayName="ButtonBase",i.__docgenInfo={description:"",displayName:"ButtonBase",props:{endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}export{i as B};
//# sourceMappingURL=ButtonBase-a4cb8c49.js.map
