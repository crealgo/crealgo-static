import{k as z}from"./chance-56e14726.js";import{a as f,j as n,F as O}from"./jsx-runtime-c2efdcba.js";import{B as J}from"./Block-7499e844.js";import{C as M}from"./Container-c8e048b9.js";import{C as X}from"./ContentGrid-f72bdd55.js";import{A as K}from"./ActionStack-da0a00f9.js";import{_ as w}from"./defaultTheme-8fe9975f.js";import{_ as l}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import{r as p}from"./index-2812c619.js";import"./index-1aacdabe.js";import{c as k}from"./clsx.m-1229b3e0.js";import{s as u}from"./styled-e2ebe642.js";import{b as B}from"./useThemeProps-debefb1f.js";import{a as F,g as G,c as I}from"./generateUtilityClasses-bdae82bf.js";import{P as Q}from"./Paper-31fd4769.js";import{C as Y}from"./Collapse-c108770e.js";import{u as Z}from"./useControlled-a2691953.js";import{M as oo}from"./ButtonBase-0d2a43de.js";import{A as eo}from"./AddCircleOutline-3a098d9c.js";import{c as ro}from"./emotion-react.browser.esm-511d925c.js";import{H as to}from"./Heading-b0f300b8.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./Box-4b73dcd4.js";import"./Typography-ce4bf3ba.js";import"./Button-90cddc56.js";import"./ButtonBase-a4cb8c49.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./Stack-bc1126ed.js";import"./_commonjsHelpers-725317a4.js";import"./utils-354236b1.js";import"./assertThisInitialized-e784747a.js";import"./index-62c31eed.js";import"./useTheme-e8b6c181.js";import"./useIsFocusVisible-4c83d0fb.js";import"./useEnhancedEffect-767500c3.js";import"./createSvgIcon-45dd28ac.js";const no=p.createContext({}),H=no;function ao(o){return G("MuiAccordion",o)}const so=F("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),R=so,io=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],co=o=>{const{classes:e,square:r,expanded:t,disabled:a,disableGutters:c}=o;return I({root:["root",!r&&"rounded",t&&"expanded",a&&"disabled",!c&&"gutters"],region:["region"]},ao,e)},lo=u(Q,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[{[`& .${R.region}`]:e.region},e.root,!r.square&&e.rounded,!r.disableGutters&&e.gutters]}})(({theme:o})=>{const e={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],e),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],e)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${R.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${R.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o,ownerState:e})=>l({},!e.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!e.disableGutters&&{[`&.${R.expanded}`]:{margin:"16px 0"}})),po=p.forwardRef(function(e,r){const t=B({props:e,name:"MuiAccordion"}),{children:a,className:c,defaultExpanded:i=!1,disabled:d=!1,disableGutters:g=!1,expanded:q,onChange:b,square:A=!1,TransitionComponent:h=Y,TransitionProps:C}=t,_=w(t,io),[s,m]=Z({controlled:q,default:i,name:"Accordion",state:"expanded"}),x=p.useCallback(j=>{m(!s),b&&b(j,!s)},[s,b,m]),[$,...U]=p.Children.toArray(a),L=p.useMemo(()=>({expanded:s,disabled:d,disableGutters:g,toggle:x}),[s,d,g,x]),P=l({},t,{square:A,disabled:d,disableGutters:g,expanded:s}),D=co(P);return f(lo,l({className:k(D.root,c),ref:r,ownerState:P,square:A},_,{children:[n(H.Provider,{value:L,children:$}),n(h,l({in:s,timeout:"auto"},C,{children:n("div",{"aria-labelledby":$.props.id,id:$.props["aria-controls"],role:"region",className:D.region,children:U})}))]}))}),uo=po;function mo(o){return G("MuiAccordionDetails",o)}F("MuiAccordionDetails",["root"]);const fo=["className"],go=o=>{const{classes:e}=o;return I({root:["root"]},mo,e)},bo=u("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),yo=p.forwardRef(function(e,r){const t=B({props:e,name:"MuiAccordionDetails"}),{className:a}=t,c=w(t,fo),i=t,d=go(i);return n(bo,l({className:k(d.root,a),ref:r,ownerState:i},c))}),xo=yo;function Ao(o){return G("MuiAccordionSummary",o)}const ho=F("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),y=ho,Co=["children","className","expandIcon","focusVisibleClassName","onClick"],Ro=o=>{const{classes:e,expanded:r,disabled:t,disableGutters:a}=o;return I({root:["root",r&&"expanded",t&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},Ao,e)},So=u(oo,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o,ownerState:e})=>{const r={duration:o.transitions.duration.shortest};return l({display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],r),[`&.${y.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${y.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${y.disabled})`]:{cursor:"pointer"}},!e.disableGutters&&{[`&.${y.expanded}`]:{minHeight:64}})}),vo=u("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,e)=>e.content})(({theme:o,ownerState:e})=>l({display:"flex",flexGrow:1,margin:"12px 0"},!e.disableGutters&&{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${y.expanded}`]:{margin:"20px 0"}})),ko=u("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,e)=>e.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${y.expanded}`]:{transform:"rotate(180deg)"}})),qo=p.forwardRef(function(e,r){const t=B({props:e,name:"MuiAccordionSummary"}),{children:a,className:c,expandIcon:i,focusVisibleClassName:d,onClick:g}=t,q=w(t,Co),{disabled:b=!1,disableGutters:A,expanded:h,toggle:C}=p.useContext(H),_=x=>{C&&C(x),g&&g(x)},s=l({},t,{expanded:h,disabled:b,disableGutters:A}),m=Ro(s);return f(So,l({focusRipple:!1,disableRipple:!0,disabled:b,component:"div","aria-expanded":h,className:k(m.root,c),focusVisibleClassName:k(m.focusVisible,d),onClick:_,ref:r,ownerState:s},q,{children:[n(vo,{className:m.content,ownerState:s,children:a}),i&&n(ko,{className:m.expandIconWrapper,ownerState:s,children:i})]}))}),_o=qo,$o="18px",S="28px",Mo=u(uo)(({theme:o})=>ro`
		padding: 1rem 1rem;
		border-left: none;
		border-right: none;
		border-bottom: none;
		background-color: transparent;

		&:nth-of-type(1) {
			border-top: none;
		}

		.MuiSvgIcon-root {
			padding: 4px;
			height: ${S};
			width: ${S};

			display: block;
			margin-right: 0.25rem;
			opacity: 0.5;

			transition: all 300ms;
			transform: rotate(0deg);
		}

		.MuiAccordionSummary-root {
			display: flex;
			gap: 2rem;
			padding: 0;
			font-size: ${$o};
			line-height: ${S};

			font-weight: normal;
		}

		&.Mui-expanded {
			.MuiSvgIcon-root {
				transform: rotate(45deg);
				opacity: 1;
				color: ${o.palette.primary.main};
			}
		}

		.MuiAccordionDetails-root {
			padding-left: calc(0.25rem + ${S});
		}
	`),No=u(_o)(({theme:o})=>({...o.typography.body2})),N=({question:o,answer:e,actions:r,resources:t})=>f(Mo,{variant:"outlined",children:[f(No,{children:[n(eo,{}),o]}),f(xo,{children:[e,r&&f(O,{children:[n("br",{}),n("br",{}),n(K,{size:"small",actions:r})]})]})]});try{N.displayName="FaqAccordion",N.__docgenInfo={description:"",displayName:"FaqAccordion",props:{question:{defaultValue:null,description:"",name:"question",required:!0,type:{name:"string"}},answer:{defaultValue:null,description:"",name:"answer",required:!0,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},resources:{defaultValue:null,description:"",name:"resources",required:!1,type:{name:"SimpleLink"}}}}}catch{}const Vo=u("div")`
	margin-bottom: 2rem;
	justify-content: center;
	text-align: center;
`,V=({title:o,subtitle:e,description:r,actions:t,faqs:a,children:c})=>n(M,{children:n(J,{isRounded:!0,color:"grey",children:f(X,{children:[n(M,{size:"small",children:n(Vo,{children:n(to,{level:2,children:o})})}),n(M,{size:"small",children:a==null?void 0:a.map((i,d)=>n(N,{...i},d))})]})})});try{V.displayName="FaqBlock",V.__docgenInfo={description:"",displayName:"FaqBlock",props:{faqs:{defaultValue:null,description:"",name:"faqs",required:!0,type:{name:"FaqOptions[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | (ReactElement<any, string | JSXElementConstructor<any>> & string) | (ReactFragment & string) | (ReactPortal & string)"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action<HTMLElement>[]"}},ActionStackProps:{defaultValue:null,description:"",name:"ActionStackProps",required:!1,type:{name:"ActionStackProps"}}}}}catch{}const ge={component:V},v={args:z()};var E,W,T;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: generateFaqBlock()
}`,...(T=(W=v.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};const be=["Default"];export{v as Default,be as __namedExportsOrder,ge as default};
//# sourceMappingURL=FaqBlock.stories-e50a2bc6.js.map
