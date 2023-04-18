import{a as u,j as d}from"./jsx-runtime-c2efdcba.js";import{c}from"./colorIterator-2a338caa.js";import{s as p}from"./styled-e2ebe642.js";import{K as m}from"./KeyboardArrowDown-cc6fb243.js";const e="text",t="medium",f=p("a")`
	text-decoration: unset;
	cursor: pointer;

	display: var(--input-display);
	align-items: var(--input-align-items);

	font-weight: var(--button-font-weight);
	font-size: var(--input-font-size-${t});
	letter-spacing: var(--button-letter-spacing);

	background-color: var(--button-background-color-${e});
	box-shadow: var(--button-shadow-${e});
	color: var(--button-text-color-${e});
	border: var(--button-border-${e});

	padding-inline: var(--input-spacing-padding-inline-${t});
	line-height: var(--input-height-${t});
	height: var(--input-height-${t});

	& svg {
		height: var(--input-group-action-size-${t});
		width: var(--input-group-action-size-${t});
	}

	&:hover, &[aria-current=true] {
		${c("text-decoration-color")}
		text-decoration: var(--button-text-decoration-${e});
		text-underline-offset:  var(--button-text-offset-${e});
		text-decoration-thickness:  var(--button-text-thickness-${e});
	}
`,r=({label:a,children:n,selected:o,icon:i,hasSubmenu:s,...l})=>u(f,{"aria-current":o,...l,children:[i,n??a,s&&d(m,{})]});try{r.displayName="NavItem",r.__docgenInfo={description:"",displayName:"NavItem",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},hasSubmenu:{defaultValue:null,description:"",name:"hasSubmenu",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},subItems:{defaultValue:null,description:"",name:"subItems",required:!1,type:{name:"NavItemOptions[]"}}}}}catch{}export{r as N};
//# sourceMappingURL=NavItem-a6229ea2.js.map
