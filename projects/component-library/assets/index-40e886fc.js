import{j as i,a as E,F as me}from"./jsx-runtime-c2efdcba.js";import{I as te}from"./IconButtonBase-61cc0ec0.js";import{s as h,r as fe}from"./styled-899f007b.js";import{c as B}from"./emotion-react.browser.esm-511d925c.js";import{u as he}from"./useControlled-a2691953.js";import{C as ne}from"./Close-da405464.js";import{M as ge}from"./Menu-ce48e677.js";import{_ as O,a as q}from"./defaultTheme-d0849189.js";import{_ as c}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import{r as v}from"./index-2812c619.js";import{c as V}from"./clsx.m-1229b3e0.js";import{u as oe}from"./useTheme-009cd14c.js";import{b as ye}from"./useThemeProps-4c706523.js";import{g as _e,a as ve,c as xe}from"./generateUtilityClasses-bdae82bf.js";import{d as ke,o as ae,M as we}from"./Modal-3db179b1.js";import{P as be}from"./Paper-4e9ccf95.js";import{T as Ce,r as De,g as Z}from"./utils-74941807.js";import{u as Ee}from"./useIsFocusVisible-4c83d0fb.js";import{F as Be}from"./FeaturedItems-9978578b.js";import{H as S}from"./Heading-33cbf91d.js";import{b as Ie}from"./chance-a681a54c.js";const Te=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function $e(e,r,o){const t=r.getBoundingClientRect(),a=o&&o.getBoundingClientRect(),g=ae(r);let l;if(r.fakeTransform)l=r.fakeTransform;else{const s=g.getComputedStyle(r);l=s.getPropertyValue("-webkit-transform")||s.getPropertyValue("transform")}let y=0,m=0;if(l&&l!=="none"&&typeof l=="string"){const s=l.split("(")[1].split(")")[0].split(",");y=parseInt(s[4],10),m=parseInt(s[5],10)}return e==="left"?a?`translateX(${a.right+y-t.left}px)`:`translateX(${g.innerWidth+y-t.left}px)`:e==="right"?a?`translateX(-${t.right-a.left-y}px)`:`translateX(-${t.left+t.width-y}px)`:e==="up"?a?`translateY(${a.bottom+m-t.top}px)`:`translateY(${g.innerHeight+m-t.top}px)`:a?`translateY(-${t.top-a.top+t.height-m}px)`:`translateY(-${t.top+t.height-m}px)`}function Pe(e){return typeof e=="function"?e():e}function z(e,r,o){const t=Pe(o),a=$e(e,r,t);a&&(r.style.webkitTransform=a,r.style.transform=a)}const Ne=v.forwardRef(function(r,o){const t=oe(),a={enter:t.transitions.easing.easeOut,exit:t.transitions.easing.sharp},g={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:l,appear:y=!0,children:m,container:s,direction:f="down",easing:I=a,in:x,onEnter:T,onEntered:b,onEntering:C,onExit:$,onExited:P,onExiting:N,style:k,timeout:D=g,TransitionComponent:w=Ce}=r,L=O(r,Te),p=v.useRef(null),G=Ee(m.ref,p,o),u=n=>d=>{n&&(d===void 0?n(p.current):n(p.current,d))},_=u((n,d)=>{z(f,n,s),De(n),T&&T(n,d)}),M=u((n,d)=>{const K=Z({timeout:D,style:k,easing:I},{mode:"enter"});n.style.webkitTransition=t.transitions.create("-webkit-transform",c({},K)),n.style.transition=t.transitions.create("transform",c({},K)),n.style.webkitTransform="none",n.style.transform="none",C&&C(n,d)}),R=u(b),de=u(N),ce=u(n=>{const d=Z({timeout:D,style:k,easing:I},{mode:"exit"});n.style.webkitTransition=t.transitions.create("-webkit-transform",d),n.style.transition=t.transitions.create("transform",d),z(f,n,s),$&&$(n)}),pe=u(n=>{n.style.webkitTransition="",n.style.transition="",P&&P(n)}),ue=n=>{l&&l(p.current,n)},J=v.useCallback(()=>{p.current&&z(f,p.current,s)},[f,s]);return v.useEffect(()=>{if(x||f==="down"||f==="right")return;const n=ke(()=>{p.current&&z(f,p.current,s)}),d=ae(p.current);return d.addEventListener("resize",n),()=>{n.clear(),d.removeEventListener("resize",n)}},[f,x,s]),v.useEffect(()=>{x||J()},[x,J]),i(w,c({nodeRef:p,onEnter:_,onEntered:R,onEntering:M,onExit:ce,onExited:pe,onExiting:de,addEndListener:ue,appear:y,in:x,timeout:D},L,{children:(n,d)=>v.cloneElement(m,c({ref:G,style:c({visibility:n==="exited"&&!x?"hidden":void 0},k,m.props.style)},d))}))}),Le=Ne;function Me(e){return _e("MuiDrawer",e)}ve("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Re=["BackdropProps"],Ve=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],ie=(e,r)=>{const{ownerState:o}=e;return[r.root,(o.variant==="permanent"||o.variant==="persistent")&&r.docked,r.modal]},ze=e=>{const{classes:r,anchor:o,variant:t}=e,a={root:["root"],docked:[(t==="permanent"||t==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${q(o)}`,t!=="temporary"&&`paperAnchorDocked${q(o)}`]};return xe(a,Me,r)},qe=h(we,{name:"MuiDrawer",slot:"Root",overridesResolver:ie})(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer})),ee=h("div",{shouldForwardProp:fe,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:ie})({flex:"0 0 auto"}),Ae=h(be,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.paper,r[`paperAnchor${q(o.anchor)}`],o.variant!=="temporary"&&r[`paperAnchorDocked${q(o.anchor)}`]]}})(({theme:e,ownerState:r})=>c({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},r.anchor==="left"&&{left:0},r.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="right"&&{right:0},r.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="left"&&r.variant!=="temporary"&&{borderRight:`1px solid ${(e.vars||e).palette.divider}`},r.anchor==="top"&&r.variant!=="temporary"&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`},r.anchor==="right"&&r.variant!=="temporary"&&{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},r.anchor==="bottom"&&r.variant!=="temporary"&&{borderTop:`1px solid ${(e.vars||e).palette.divider}`})),se={left:"right",right:"left",top:"down",bottom:"up"};function Se(e){return["left","right"].indexOf(e)!==-1}function Oe(e,r){return e.direction==="rtl"&&Se(r)?se[r]:r}const We=v.forwardRef(function(r,o){const t=ye({props:r,name:"MuiDrawer"}),a=oe(),g={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:l="left",BackdropProps:y,children:m,className:s,elevation:f=16,hideBackdrop:I=!1,ModalProps:{BackdropProps:x}={},onClose:T,open:b=!1,PaperProps:C={},SlideProps:$,TransitionComponent:P=Le,transitionDuration:N=g,variant:k="temporary"}=t,D=O(t.ModalProps,Re),w=O(t,Ve),L=v.useRef(!1);v.useEffect(()=>{L.current=!0},[]);const p=Oe(a,l),u=c({},t,{anchor:l,elevation:f,open:b,variant:k},w),_=ze(u),M=i(Ae,c({elevation:k==="temporary"?f:0,square:!0},C,{className:V(_.paper,C.className),ownerState:u,children:m}));if(k==="permanent")return i(ee,c({className:V(_.root,_.docked,s),ownerState:u,ref:o},w,{children:M}));const R=i(P,c({in:b,direction:se[p],timeout:N,appear:L.current},$,{children:M}));return k==="persistent"?i(ee,c({className:V(_.root,_.docked,s),ownerState:u,ref:o},w,{children:R})):i(qe,c({BackdropProps:c({},y,x,{transitionDuration:N}),className:V(_.root,_.modal,s),open:b,ownerState:u,onClose:T,hideBackdrop:I,ref:o},w,D,{children:R}))}),Fe=We,A=h("div")(({theme:e,isColored:r,hasBorder:o})=>B`
		padding: ${le};
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;

		${r?`background-color: ${e.palette.grey[100]};`:""}
		${o?`border-bottom: solid 1px ${e.palette.grey[300]};`:""}
	`);try{A.displayName="ContentBox",A.__docgenInfo={description:"",displayName:"ContentBox",props:{isColored:{defaultValue:null,description:"",name:"isColored",required:!1,type:{name:"boolean"}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}}}}}catch{}const W=h(te)(({theme:e})=>B`
		border-radius: 9999px;
		background-color: ${e.palette.grey[100]};
		height: 2rem;

		&:hover {
			background-color: ${e.palette.grey[300]};
		}
	`);try{W.displayName="DrawerBoxClose",W.__docgenInfo={description:"",displayName:"DrawerBoxClose",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"ElementType"}}}}}catch{}const F=h("div")(({theme:e,hasBorder:r})=>`
	padding: ${le};

	display: grid;
	grid-template-columns: 1fr auto;
	gap: 1rem;
	align-items: center;

	${r?`border-bottom: solid 1px ${e.palette.grey[300]};`:""}
`);try{F.displayName="TitleBox",F.__docgenInfo={description:"",displayName:"TitleBox",props:{hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}}}}}catch{}const H=h("div")(({theme:e})=>`
	width: 100vw;

	${e.breakpoints.up("sm")} {
		max-width: 25rem;
	}
`);try{H.displayName="Wrapper",H.__docgenInfo={description:"",displayName:"Wrapper",props:{}}}catch{}const Y=h("a")`
	font-size: inherit;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;try{Y.displayName="Link",Y.__docgenInfo={description:"",displayName:"Link",props:{}}}catch{}const U=h("li")(({theme:e})=>B`
		display: block;
		padding-block: 0.75rem;
		border-bottom: solid 1px ${e.palette.grey[300]};

		&:nth-of-type(1) {
			border-top: solid 1px ${e.palette.grey[300]};
		}
	`);try{U.displayName="LinkListItem",U.__docgenInfo={description:"",displayName:"LinkListItem",props:{}}}catch{}const He=h("ul")(({theme:e})=>B`
		list-style: none;
		padding: 0;
		margin: 0;
	`),X=({children:e,hasDivider:r,items:o})=>i(He,{children:o==null?void 0:o.map(({label:t},a)=>i(U,{children:i(Y,{children:t})},a))});try{X.displayName="LinkList",X.__docgenInfo={description:"",displayName:"LinkList",props:{hasDivider:{defaultValue:null,description:"",name:"hasDivider",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"NavItemOptions[]"}}}}}catch{}const j=({navigationItems:e,onCloseButtonClick:r})=>E(H,{children:[E(F,{hasBorder:!0,children:[i(S,{level:2,children:"Menu"}),i(W,{onClick:r,children:i(ne,{fontSize:"small"})})]}),E(A,{isColored:!0,hasBorder:!0,children:[i(S,{level:3,children:"Quick Links"}),i(Be,{items:Ie()})]}),E(A,{children:[i(S,{level:3,children:"SubMenu"}),i(X,{items:e})]})]});try{j.displayName="DrawerContent",j.__docgenInfo={description:"",displayName:"DrawerContent",props:{onCloseButtonClick:{defaultValue:null,description:"",name:"onCloseButtonClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!1,type:{name:"NavItemOptions[]"}}}}}catch{}const Q=h(te)(({theme:e})=>B`
		grid-area: mobile-menu;

		&:hover {
			background-color: ${e.palette.grey[300]};
		}
	`);try{Q.displayName="MenuTrigger",Q.__docgenInfo={description:"",displayName:"MenuTrigger",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"ElementType"}}}}}catch{}const le="1rem",re=({items:e,open:r,onClose:o})=>{const[t,a]=he({controlled:r,default:!1,name:"DrawerMenu Open State"}),g=()=>{a(!0)},l=()=>{a(!1)};return E(me,{children:[i(Q,{size:"small",className:"MenuTrigger-root",onClick:g,children:t?i(ne,{}):i(ge,{})}),i(Fe,{anchor:"left",open:t,onClose:l,children:i(j,{navigationItems:e,onCloseButtonClick:l})})]})};try{re.displayName="DrawerMenu",re.__docgenInfo={description:"",displayName:"DrawerMenu",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"NavItemOptions[]"}}}}}catch{}export{re as D};
//# sourceMappingURL=index-40e886fc.js.map
