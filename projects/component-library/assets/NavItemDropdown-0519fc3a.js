import{j as e,a as o,F as y}from"./jsx-runtime-c2efdcba.js";import{b as v}from"./chance-a681a54c.js";import{F as h}from"./FeaturedItems-9978578b.js";import{H as g}from"./Heading-33cbf91d.js";import{T as I}from"./Text-40b59492.js";import{s as l}from"./styled-899f007b.js";import{r as x}from"./index-2812c619.js";import{N as C}from"./NavItem-f38373ae.js";import{K as F}from"./KeyboardArrowDown-6114ca28.js";import{P as b,M as N,a as q}from"./MenuItem-35285981.js";const _=l("div")`
	padding: 1.5rem;
`,w=l("div")`
	aspect-ratio: 2/1;
	max-width: 30rem;

	display: flex;
	flex-direction: column;
	gap: 2rem;
`,E=l("main")`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`,A=()=>e(_,{children:o(w,{children:[o(E,{children:[e(g,{level:3,children:"Sed ut perspiciatis unde omnis."}),e(I,{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,"})]}),e(h,{items:v()})]})}),u=({FlyoutComponent:a,children:c,items:t})=>{const[i,s]=x.useState(void 0),r=!!i,p=n=>{s(n.currentTarget)},m=()=>{s(void 0)},d={open:r,anchorEl:i,onClose:m};return o(y,{children:[e(C,{endIcon:e(F,{}),onClick:p,"aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,children:c}),a?e(b,{...d,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:e(a,{})}):e(N,{...d,MenuListProps:{"aria-labelledby":"basic-button",sx:{minWidth:"10rem"}},children:t==null?void 0:t.map((n,f)=>e(q,{onClick:()=>{m()},children:n.label},f))})]})};try{u.displayName="NavItemDropdown",u.__docgenInfo={description:"",displayName:"NavItemDropdown",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"NavItemOptions[]"}},FlyoutComponent:{defaultValue:null,description:"",name:"FlyoutComponent",required:!1,type:{name:"ComponentType<unknown>"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{A as F,u as N};
//# sourceMappingURL=NavItemDropdown-0519fc3a.js.map
