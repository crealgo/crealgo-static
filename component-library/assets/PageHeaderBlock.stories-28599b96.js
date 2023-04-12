import{q as O}from"./chance-a681a54c.js";import{j as a,a as _,F as j}from"./jsx-runtime-c2efdcba.js";import{B as E,C as W}from"./Container-f017ee1c.js";import{r as d}from"./index-2812c619.js";import{_ as c}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import{w as I,_ as U}from"./defaultTheme-d0849189.js";import"./index-1aacdabe.js";import{c as F}from"./clsx.m-1229b3e0.js";import{s as i}from"./styled-899f007b.js";import{b as L}from"./useThemeProps-4c706523.js";import{c as D}from"./createSvgIcon-4ae69272.js";import{M as G}from"./ButtonBase-890a84e2.js";import{a as J,g as K,c as Q}from"./generateUtilityClasses-bdae82bf.js";import{T as M}from"./Typography-e61b6c49.js";import{I as X}from"./Image-d662c5af.js";import{N as Y}from"./NavItem-f38373ae.js";import{c as N}from"./emotion-react.browser.esm-511d925c.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./Button-77e6833e.js";import"./ButtonBase-7b58a963.js";import"./colors-55af66f1.js";import"./colorIterator-d2938b85.js";const Z=D(a("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),ee=i(G)(({theme:e})=>c({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":c({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":c({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:I(e.palette.grey[200],.12)}:{backgroundColor:I(e.palette.grey[600],.12)})})),re=i(Z)({width:24,height:16});function ae(e){const r=e;return a("li",{children:a(ee,c({focusRipple:!0},e,{ownerState:r,children:a(re,{ownerState:r})}))})}function te(e){return K("MuiBreadcrumbs",e)}const oe=J("MuiBreadcrumbs",["root","ol","li","separator"]),se=oe,le=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],ne=e=>{const{classes:r}=e;return Q({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},te,r)},ie=i(M,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${se.li}`]:r.li},r.root]})({}),pe=i("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),de=i("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function ce(e,r,s,o){return e.reduce((t,p,n)=>(n<e.length-1?t=t.concat(p,a(de,{"aria-hidden":!0,className:r,ownerState:o,children:s},`separator-${n}`)):t.push(p),t),[])}const me=d.forwardRef(function(r,s){const o=L({props:r,name:"MuiBreadcrumbs"}),{children:t,className:p,component:n="nav",expandText:w="Show path",itemsAfterCollapse:b=1,itemsBeforeCollapse:v=1,maxItems:x=8,separator:k="/"}=o,$=U(o,le),[S,z]=d.useState(!1),m=c({},o,{component:n,expanded:S,expandText:w,itemsAfterCollapse:b,itemsBeforeCollapse:v,maxItems:x,separator:k}),u=ne(m),q=d.useRef(null),A=l=>{const C=()=>{z(!0);const T=q.current.querySelector("a[href],button,[tabindex]");T&&T.focus()};return v+b>=l.length?l:[...l.slice(0,v),a(ae,{"aria-label":w,onClick:C},"ellipsis"),...l.slice(l.length-b,l.length)]},B=d.Children.toArray(t).filter(l=>d.isValidElement(l)).map((l,C)=>a("li",{className:u.li,children:l},`child-${C}`));return a(ie,c({ref:s,component:n,color:"text.secondary",className:F(u.root,p),ownerState:m},$,{children:a(pe,{className:u.ol,ref:q,ownerState:m,children:ce(S||x&&B.length<=x?B:A(B),u.separator,k,m)})}))}),ue=me,g=d.forwardRef(({children:e,items:r,...s},o)=>a(ue,{...s,ref:o,children:e??(r==null?void 0:r.map(({href:t,label:p},n)=>a("span",{children:p},n)))}));g.displayName="Breadcrumbs";try{g.displayName="Breadcrumbs",g.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<BreadcrumbsClasses> & Partial<ClassNameMap<never>>)"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},separator:{defaultValue:{value:"'/'"},description:"Custom separator node.",name:"separator",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"BreadcrumbOptions[]"}},expandText:{defaultValue:{value:"'Show path'"},description:`Override the default label for the expand button.

For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).`,name:"expandText",required:!1,type:{name:"string"}},itemsAfterCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show after the ellipsis.",name:"itemsAfterCollapse",required:!1,type:{name:"number"}},itemsBeforeCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show before the ellipsis.",name:"itemsBeforeCollapse",required:!1,type:{name:"number"}},maxItems:{defaultValue:{value:"8"},description:"Specifies the maximum number of breadcrumbs to display. When there are more\nthan the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`\nwill be shown, with an ellipsis in between.",name:"maxItems",required:!1,type:{name:"number"}}}}}catch{}const H="start",fe=i("nav")(({theme:e,align:r=H})=>N`
		display: flex;
		gap: 0.25rem;
		align-items: center;
		justify-content: ${r};
	`),h=d.forwardRef(({children:e,items:r,align:s=H,...o},t)=>a(fe,{...o,className:"TopNav-root",align:s,ref:t,children:e??(r==null?void 0:r.map((p,n)=>a(Y,{size:"small",...p},n)))}));h.displayName="TopNav";try{h.displayName="TopNav",h.__docgenInfo={description:"",displayName:"TopNav",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"NavItemOptions[]"}},align:{defaultValue:{value:"start"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}}}}}catch{}const ge=i(E)(({theme:e,color:r})=>N`
		padding-block: 2rem !important;
		background-color: ${r||"transparent"};
	`),he=i("div")(({theme:e})=>N`
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 2rem;

		.TopNav-root {
			display: none;

			${e.breakpoints.up("md")} {
				display: flex;
			}
		}
	`),ye=i("div")`
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.25rem;
`,y=({title:e,color:r,breadcrumbs:s,navigationItems:o,ImageProps:t})=>_(j,{children:[a(ge,{children:a(W,{children:_(he,{children:[_(ye,{className:"PageHeader-textContent",children:[a(g,{items:s}),a(M,{variant:"h2",component:"h1",children:e})]}),a(h,{align:"end",items:o})]})})}),t&&a(X,{...t,height:"10rem",width:"cover"})]});y.displayName="PageHeaderBlock";try{y.displayName="PageHeaderBlock",y.__docgenInfo={description:"",displayName:"PageHeaderBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!1,type:{name:"BreadcrumbOptions[]"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!1,type:{name:"NavItemOptions[]"}},navigationType:{defaultValue:null,description:"",name:"navigationType",required:!0,type:{name:"enum",value:[{value:'"scroll"'},{value:'"anchor-link"'}]}},BlockProps:{defaultValue:null,description:"",name:"BlockProps",required:!1,type:{name:"BlockProps"}},ImageProps:{defaultValue:null,description:"",name:"ImageProps",required:!1,type:{name:"ImageProps"}}}}}catch{}const Le={component:y},f={args:O()};var V,P,R;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: generatePageHeaderBlock()
}`,...(R=(P=f.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const De=["Default"];export{f as Default,De as __namedExportsOrder,Le as default};
//# sourceMappingURL=PageHeaderBlock.stories-28599b96.js.map
