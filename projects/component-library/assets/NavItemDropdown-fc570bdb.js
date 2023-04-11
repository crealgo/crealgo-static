import{j as e,a as o,F as y}from"./defaultTheme-30e43ede.js";import{p as v}from"./chance-dbb8c3cf.js";import{F as h}from"./FeaturedItems-99a50589.js";import{H as g}from"./Heading-06e530da.js";import{T as I}from"./Text-95875774.js";import{s as l}from"./styled-8f152a82.js";import{r as x}from"./index-2812c619.js";import{N as C}from"./NavItem-ceba7341.js";import{K as F}from"./KeyboardArrowDown-9129b487.js";import{P as N,M as b}from"./Menu-7802da2e.js";import{M as q}from"./MenuItem-fcd869c8.js";const _=l("div")`
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
`,J=()=>e(_,{children:o(w,{children:[o(E,{children:[e(g,{level:3,children:"Sed ut perspiciatis unde omnis."}),e(I,{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,"})]}),e(h,{items:v()})]})}),u=({FlyoutComponent:a,children:c,items:t})=>{const[i,s]=x.useState(void 0),r=!!i,p=n=>{s(n.currentTarget)},m=()=>{s(void 0)},d={open:r,anchorEl:i,onClose:m};return o(y,{children:[e(C,{endIcon:e(F,{}),onClick:p,"aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,children:c}),a?e(N,{...d,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:e(a,{})}):e(b,{...d,MenuListProps:{"aria-labelledby":"basic-button",sx:{minWidth:"10rem"}},children:t==null?void 0:t.map((n,f)=>e(q,{onClick:()=>{m()},children:n.label},f))})]})};try{u.displayName="NavItemDropdown",u.__docgenInfo={description:"",displayName:"NavItemDropdown",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"NavItemOptions[]"}},FlyoutComponent:{defaultValue:null,description:"",name:"FlyoutComponent",required:!1,type:{name:"ComponentType<unknown>"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{J as F,u as N};
//# sourceMappingURL=NavItemDropdown-fc570bdb.js.map
