import{a as f,j as r,F as y}from"./jsx-runtime-c2efdcba.js";import{r as b}from"./index-2812c619.js";import{c as g}from"./colorIterator-eb2144cc.js";import{s as x}from"./styled-e2ebe642.js";import{K as I}from"./KeyboardArrowDown-cc6fb243.js";import{P as _,M as N,a as $}from"./MenuItem-b16b1f4f.js";const e="text",n="large",q=x("a")`
	text-decoration: unset;
	cursor: pointer;

	display: var(--input-display);
	align-items: var(--input-align-items);

	font-weight: var(--button-font-weight);
	font-size: var(--input-font-size-${n});
	letter-spacing: var(--button-letter-spacing);

	background-color: var(--button-background-color-${e});
	box-shadow: var(--button-shadow-${e});
	color: var(--button-text-color-${e});
	border: var(--button-border-${e});

	padding-inline: var(--input-spacing-padding-inline-${n});
	line-height: var(--input-height-${n});
	height: var(--input-height-${n});
	white-space: nowrap;

	& svg {
		height: var(--input-group-action-size-${n});
		width: var(--input-group-action-size-${n});
	}

	&:hover,
	&[aria-current='true'] {
		${g("text-decoration-color")}
		text-decoration: var(--button-text-decoration-${e});
		text-underline-offset: var(--button-text-offset-${e});
		text-decoration-thickness: var(--button-text-thickness-${e});
	}
`,d=({label:t,children:s,selected:o,icon:i,hasSubmenu:l,...a})=>f(q,{"aria-current":o,...a,children:[i,s??t,l&&r(I,{})]});try{d.displayName="NavItem",d.__docgenInfo={description:"",displayName:"NavItem",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},hasSubmenu:{defaultValue:null,description:"",name:"hasSubmenu",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},subItems:{defaultValue:null,description:"",name:"subItems",required:!1,type:{name:"NavItemOptions[]"}}}}}catch{}const m=({FlyoutComponent:t,children:s,items:o})=>{const[i,l]=b.useState(void 0),a=!!i,h=u=>{l(u.currentTarget)},c=()=>{l(void 0)},p={open:a,anchorEl:i,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},disableScrollLock:!0,disablePortal:!0,transitionDuration:200};return f(y,{children:[r(d,{hasSubmenu:!0,selected:a,"aria-controls":a?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":a?"true":void 0,onClick:h,children:s}),t?r(_,{...p,children:r(t,{})}):r(N,{...p,MenuListProps:{"aria-labelledby":"basic-button",sx:{minWidth:"10rem"}},children:o==null?void 0:o.map((u,v)=>r($,{onClick:()=>{c()},children:u.label},v))})]})};try{m.displayName="NavItemDropdown",m.__docgenInfo={description:"",displayName:"NavItemDropdown",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"NavItemOptions[]"}},FlyoutComponent:{defaultValue:null,description:"",name:"FlyoutComponent",required:!1,type:{name:"ComponentType<unknown>"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{m as N,d as a};
//# sourceMappingURL=NavItemDropdown-3a97467e.js.map
