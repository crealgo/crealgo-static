import{q as $}from"./chance-56e14726.js";import{j as a,a as v,F as j}from"./jsx-runtime-c2efdcba.js";import{B as z}from"./Block-7499e844.js";import{r as d}from"./index-2812c619.js";import{L as A}from"./Link-003c17db.js";import{_ as m}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import{u as q,_ as O}from"./defaultTheme-8fe9975f.js";import"./index-1aacdabe.js";import{c as E}from"./clsx.m-1229b3e0.js";import{s as l}from"./styled-e2ebe642.js";import{b as L}from"./useThemeProps-debefb1f.js";import{c as U}from"./createSvgIcon-45dd28ac.js";import{M as W}from"./ButtonBase-0d2a43de.js";import{a as F,g as D,c as G}from"./generateUtilityClasses-bdae82bf.js";import{T as J}from"./Typography-ce4bf3ba.js";import{C as K}from"./Container-c8e048b9.js";import{H as Q}from"./Heading-b0f300b8.js";import{I as X}from"./Image-f19a3ca7.js";import{T as Y}from"./Text-005051e4.js";import{c as I}from"./emotion-react.browser.esm-511d925c.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./useEnhancedEffect-767500c3.js";const Z=U(a("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),ee=l(W)(({theme:e})=>m({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":m({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":m({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:q(e.palette.grey[200],.12)}:{backgroundColor:q(e.palette.grey[600],.12)})})),re=l(Z)({width:24,height:16});function ae(e){const r=e;return a("li",{children:a(ee,m({focusRipple:!0},e,{ownerState:r,children:a(re,{ownerState:r})}))})}function te(e){return D("MuiBreadcrumbs",e)}const oe=F("MuiBreadcrumbs",["root","ol","li","separator"]),se=oe,ie=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],le=e=>{const{classes:r}=e;return G({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},te,r)},ne=l(J,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${se.li}`]:r.li},r.root]})({}),ce=l("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),de=l("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function me(e,r,s,t){return e.reduce((i,c,n)=>(n<e.length-1?i=i.concat(c,a(de,{"aria-hidden":!0,className:r,ownerState:t,children:s},`separator-${n}`)):i.push(c),i),[])}const pe=d.forwardRef(function(r,s){const t=L({props:r,name:"MuiBreadcrumbs"}),{children:i,className:c,component:n="nav",expandText:w="Show path",itemsAfterCollapse:b=1,itemsBeforeCollapse:y=1,maxItems:x=8,separator:k="/"}=t,R=O(t,ie),[_,H]=d.useState(!1),p=m({},t,{component:n,expanded:_,expandText:w,itemsAfterCollapse:b,itemsBeforeCollapse:y,maxItems:x,separator:k}),u=le(p),S=d.useRef(null),M=o=>{const C=()=>{H(!0);const N=S.current.querySelector("a[href],button,[tabindex]");N&&N.focus()};return y+b>=o.length?o:[...o.slice(0,y),a(ae,{"aria-label":w,onClick:C},"ellipsis"),...o.slice(o.length-b,o.length)]},B=d.Children.toArray(i).filter(o=>d.isValidElement(o)).map((o,C)=>a("li",{className:u.li,children:o},`child-${C}`));return a(ne,m({ref:s,component:n,color:"text.secondary",className:E(u.root,c),ownerState:p},R,{children:a(ce,{className:u.ol,ref:S,ownerState:p,children:me(_||x&&B.length<=x?B:M(B),u.separator,k,p)})}))}),ue=pe,g=d.forwardRef(({children:e,items:r,...s},t)=>a(ue,{...s,ref:t,children:e??(r==null?void 0:r.map(({label:i,...c},n)=>a(A,{...c,children:i},n)))}));g.displayName="Breadcrumbs";try{g.displayName="Breadcrumbs",g.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<BreadcrumbsClasses> & Partial<ClassNameMap<never>>)"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},separator:{defaultValue:{value:"'/'"},description:"Custom separator node.",name:"separator",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"BreadcrumbOptions[]"}},expandText:{defaultValue:{value:"'Show path'"},description:`Override the default label for the expand button.

For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).`,name:"expandText",required:!1,type:{name:"string"}},itemsAfterCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show after the ellipsis.",name:"itemsAfterCollapse",required:!1,type:{name:"number"}},itemsBeforeCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show before the ellipsis.",name:"itemsBeforeCollapse",required:!1,type:{name:"number"}},maxItems:{defaultValue:{value:"8"},description:"Specifies the maximum number of breadcrumbs to display. When there are more\nthan the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`\nwill be shown, with an ellipsis in between.",name:"maxItems",required:!1,type:{name:"number"}}}}}catch{}const fe=l(z)(({theme:e,color:r})=>I`
		background-color: var(--color-brand-tertiary-light);
		padding-top: 10rem !important;
		margin-left: 0 !important;
		margin-right: 0 !important;
		margin-top: calc(5rem - 10rem);

		.image {
			img {
				width: 100%;
				object-position: center center;
				height: 100%;
				object-fit: contain;
			}

			position: relative;
			height: auto;
			width: 100%;
			right: 0;
			margin-top: 2rem;
			margin-bottom: -8rem;

			${e.breakpoints.up("lg")} {
				margin-top: 0;
				margin-bottom: 0;

				position: absolute;
				height: 40rem;
				width: 40rem;
				left: 55%;
				top: 20%;
			}
		}

		.Heading-root,
		.Text-root {
			color: var(--color-brand-tertiary-dark);
		}
	`),ge=l("div")(({theme:e})=>I`
		display: grid;
		grid-template-columns: minmax(auto, 40rem);
		gap: 2rem;

		.TopNav-root {
			display: none;

			${e.breakpoints.up("md")} {
				display: flex;
			}
		}
	`),he=l("div")`
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.25rem;
`,h=({title:e,breadcrumbs:r,description:s,ImageProps:t})=>v(j,{children:[a(fe,{children:v(K,{children:[a(ge,{children:v(he,{className:"PageHeader-textContent",children:[a(g,{items:r}),a(Q,{gutterBottom:!0,level:1,children:e}),a(Y,{children:s})]})}),a("div",{className:"image",children:a("img",{src:"assets/juicy-team-discussing-the-project.gif",alt:""})})]})}),t&&a(X,{...t,height:"10rem",width:"cover"})]});h.displayName="PageHeaderBlock";try{h.displayName="PageHeaderBlock",h.__docgenInfo={description:"",displayName:"PageHeaderBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!1,type:{name:"BreadcrumbOptions[]"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!1,type:{name:"NavItemOptions[]"}},navigationType:{defaultValue:null,description:"",name:"navigationType",required:!1,type:{name:"enum",value:[{value:'"scroll"'},{value:'"anchor-link"'}]}},BlockProps:{defaultValue:null,description:"",name:"BlockProps",required:!1,type:{name:"BlockProps"}},ImageProps:{defaultValue:null,description:"",name:"ImageProps",required:!1,type:{name:"ImageProps"}}}}}catch{}const We={component:h},f={args:$()};var P,V,T;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: generatePageHeaderBlock()
}`,...(T=(V=f.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const Fe=["Default"];export{f as Default,Fe as __namedExportsOrder,We as default};
//# sourceMappingURL=PageHeaderBlock.stories-0ff23e92.js.map
