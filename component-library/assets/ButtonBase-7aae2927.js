import{a as c,j as s}from"./jsx-runtime-c2efdcba.js";import{_ as i}from"./excludePropsFromForwarding-6c5743cd.js";import{s as u}from"./styled-e2ebe642.js";import{M as d}from"./ButtonBase-7c1dc156.js";import{c as p}from"./emotion-react.browser.esm-511d925c.js";const f=u(d,i("endIcon","startIcon","size"))(({size:e="medium"})=>p`
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: var(--button-spacing-gap-${e});

		letter-spacing: -0.0156rem;
		white-space: nowrap;

		border-radius: 0.25rem;
	`),l=u("span",i("end","start"))(({start:e,end:t})=>`
	svg {
		height: 0.875em;
		width: 0.875em;
	}

	display: inline-flex;
	${e?"margin-left: -0.25rem;":""}
	${t?"margin-right: -0.25rem;":""}
`),o=({children:e,startIcon:t,endIcon:a,onClick:n,...m})=>c(f,{...m,role:"button",onClick:r=>{n&&(r.preventDefault(),n(r))},children:[t&&s(l,{start:!0,className:"Button-icon Button-startIcon",children:t}),e,a&&s(l,{end:!0,className:"Button-icon Button-endIcon",children:a})]});try{o.displayName="ButtonBase",o.__docgenInfo={description:"",displayName:"ButtonBase",props:{endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}export{o as B};
//# sourceMappingURL=ButtonBase-7aae2927.js.map
