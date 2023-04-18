import{j as e,a as o,F as y}from"./jsx-runtime-c2efdcba.js";import{b as v}from"./chance-e22ba91b.js";import{F as h}from"./FeaturedItems-6ddcd6ac.js";import{H as g}from"./Heading-0b105ff6.js";import{T as I}from"./Text-ba2fdcf0.js";import{s as l}from"./styled-e2ebe642.js";import{r as x}from"./index-2812c619.js";import{N as b}from"./NavItem-a6229ea2.js";import{P as C,M as F,a as N}from"./MenuItem-f4110aa3.js";const q=l("div")`
	padding: 1.5rem;
`,_=l("div")`
	aspect-ratio: 2/1;
	max-width: 30rem;

	display: flex;
	flex-direction: column;
	gap: 2rem;
`,E=l("main")`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`,z=()=>e(q,{children:o(_,{children:[o(E,{children:[e(g,{level:3,children:"Sed ut perspiciatis unde omnis."}),e(I,{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,"})]}),e(h,{items:v()})]})}),m=({FlyoutComponent:t,children:c,items:r})=>{const[i,s]=x.useState(void 0),a=!!i,p=n=>{s(n.currentTarget)},u=()=>{s(void 0)},d={open:a,anchorEl:i,onClose:u,anchorOrigin:{vertical:"bottom",horizontal:"left"},disableScrollLock:!0,disablePortal:!0,transitionDuration:200};return o(y,{children:[e(b,{hasSubmenu:!0,selected:a,"aria-controls":a?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":a?"true":void 0,onClick:p,children:c}),t?e(C,{...d,children:e(t,{})}):e(F,{...d,MenuListProps:{"aria-labelledby":"basic-button",sx:{minWidth:"10rem"}},children:r==null?void 0:r.map((n,f)=>e(N,{onClick:()=>{u()},children:n.label},f))})]})};try{m.displayName="NavItemDropdown",m.__docgenInfo={description:"",displayName:"NavItemDropdown",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"NavItemOptions[]"}},FlyoutComponent:{defaultValue:null,description:"",name:"FlyoutComponent",required:!1,type:{name:"ComponentType<unknown>"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{z as F,m as N};
//# sourceMappingURL=NavItemDropdown-8097da8c.js.map
