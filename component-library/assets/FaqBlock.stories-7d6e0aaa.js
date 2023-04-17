import{k as z}from"./chance-e22ba91b.js";import{a as f,j as n,F as J}from"./jsx-runtime-c2efdcba.js";import{B as K,C as P}from"./Container-96bf4f71.js";import{C as Q}from"./ContentGrid-992f7d1c.js";import{A as X}from"./ActionStack-b71d8d0b.js";import{_ as V}from"./defaultTheme-d0849189.js";import{_ as l}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import{r as p}from"./index-2812c619.js";import"./index-1aacdabe.js";import{c as k}from"./clsx.m-1229b3e0.js";import{s as u}from"./styled-899f007b.js";import{b as w}from"./useThemeProps-4c706523.js";import{a as B,g as G,c as I}from"./generateUtilityClasses-bdae82bf.js";import{P as Y}from"./Paper-4e9ccf95.js";import{C as Z}from"./Collapse-7c6ba631.js";import{u as oo}from"./useControlled-a2691953.js";import{M as eo}from"./ButtonBase-890a84e2.js";import{A as ro}from"./AddCircleOutline-d7ee7cb2.js";import{c as H}from"./emotion-react.browser.esm-511d925c.js";import{H as to}from"./Heading-78206ec4.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./Box-18209bee.js";import"./Typography-e61b6c49.js";import"./Button-b3c0cd51.js";import"./ButtonBase-ef184424.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./colors-077d21ae.js";import"./Stack-a3a99865.js";import"./_commonjsHelpers-725317a4.js";import"./utils-74941807.js";import"./assertThisInitialized-e784747a.js";import"./index-62c31eed.js";import"./useTheme-009cd14c.js";import"./useIsFocusVisible-4c83d0fb.js";import"./createSvgIcon-4ae69272.js";const no=p.createContext({}),U=no;function ao(o){return G("MuiAccordion",o)}const so=B("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),v=so,io=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],co=o=>{const{classes:e,square:r,expanded:t,disabled:a,disableGutters:c}=o;return I({root:["root",!r&&"rounded",t&&"expanded",a&&"disabled",!c&&"gutters"],region:["region"]},ao,e)},lo=u(Y,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[{[`& .${v.region}`]:e.region},e.root,!r.square&&e.rounded,!r.disableGutters&&e.gutters]}})(({theme:o})=>{const e={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],e),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],e)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${v.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${v.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o,ownerState:e})=>l({},!e.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!e.disableGutters&&{[`&.${v.expanded}`]:{margin:"16px 0"}})),po=p.forwardRef(function(e,r){const t=w({props:e,name:"MuiAccordion"}),{children:a,className:c,defaultExpanded:i=!1,disabled:d=!1,disableGutters:g=!1,expanded:q,onChange:b,square:A=!1,TransitionComponent:h=Z,TransitionProps:C}=t,_=V(t,io),[s,m]=oo({controlled:q,default:i,name:"Accordion",state:"expanded"}),x=p.useCallback(O=>{m(!s),b&&b(O,!s)},[s,b,m]),[$,...L]=p.Children.toArray(a),j=p.useMemo(()=>({expanded:s,disabled:d,disableGutters:g,toggle:x}),[s,d,g,x]),D=l({},t,{square:A,disabled:d,disableGutters:g,expanded:s}),F=co(D);return f(lo,l({className:k(F.root,c),ref:r,ownerState:D,square:A},_,{children:[n(U.Provider,{value:j,children:$}),n(h,l({in:s,timeout:"auto"},C,{children:n("div",{"aria-labelledby":$.props.id,id:$.props["aria-controls"],role:"region",className:F.region,children:L})}))]}))}),uo=po;function mo(o){return G("MuiAccordionDetails",o)}B("MuiAccordionDetails",["root"]);const fo=["className"],go=o=>{const{classes:e}=o;return I({root:["root"]},mo,e)},bo=u("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),yo=p.forwardRef(function(e,r){const t=w({props:e,name:"MuiAccordionDetails"}),{className:a}=t,c=V(t,fo),i=t,d=go(i);return n(bo,l({className:k(d.root,a),ref:r,ownerState:i},c))}),xo=yo;function Ao(o){return G("MuiAccordionSummary",o)}const ho=B("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),y=ho,Co=["children","className","expandIcon","focusVisibleClassName","onClick"],vo=o=>{const{classes:e,expanded:r,disabled:t,disableGutters:a}=o;return I({root:["root",r&&"expanded",t&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},Ao,e)},So=u(eo,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o,ownerState:e})=>{const r={duration:o.transitions.duration.shortest};return l({display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],r),[`&.${y.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${y.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${y.disabled})`]:{cursor:"pointer"}},!e.disableGutters&&{[`&.${y.expanded}`]:{minHeight:64}})}),Ro=u("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,e)=>e.content})(({theme:o,ownerState:e})=>l({display:"flex",flexGrow:1,margin:"12px 0"},!e.disableGutters&&{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${y.expanded}`]:{margin:"20px 0"}})),ko=u("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,e)=>e.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${y.expanded}`]:{transform:"rotate(180deg)"}})),qo=p.forwardRef(function(e,r){const t=w({props:e,name:"MuiAccordionSummary"}),{children:a,className:c,expandIcon:i,focusVisibleClassName:d,onClick:g}=t,q=V(t,Co),{disabled:b=!1,disableGutters:A,expanded:h,toggle:C}=p.useContext(U),_=x=>{C&&C(x),g&&g(x)},s=l({},t,{expanded:h,disabled:b,disableGutters:A}),m=vo(s);return f(So,l({focusRipple:!1,disableRipple:!0,disabled:b,component:"div","aria-expanded":h,className:k(m.root,c),focusVisibleClassName:k(m.focusVisible,d),onClick:_,ref:r,ownerState:s},q,{children:[n(Ro,{className:m.content,ownerState:s,children:a}),i&&n(ko,{className:m.expandIconWrapper,ownerState:s,children:i})]}))}),_o=qo,$o="18px",S="28px",Mo=u(uo)(({theme:o,expanded:e})=>H`
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
	`),No=u(_o)(({theme:o})=>({...o.typography.body2})),M=({question:o,answer:e,actions:r,resources:t})=>f(Mo,{variant:"outlined",children:[f(No,{children:[n(ro,{}),o]}),f(xo,{children:[e,r&&f(J,{children:[n("br",{}),n("br",{}),n(X,{size:"small",actions:r})]})]})]});try{M.displayName="FaqAccordion",M.__docgenInfo={description:"",displayName:"FaqAccordion",props:{question:{defaultValue:null,description:"",name:"question",required:!0,type:{name:"string"}},answer:{defaultValue:null,description:"",name:"answer",required:!0,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},resources:{defaultValue:null,description:"",name:"resources",required:!1,type:{name:"SimpleLink"}}}}}catch{}const Vo=u("div")(({theme:o})=>H`
		margin-bottom: 2rem;
		justify-content: center;
		text-align: center;
	`),N=({title:o,subtitle:e,description:r,actions:t,faqs:a,children:c})=>n(K,{color:"grey",children:f(Q,{children:[n(P,{children:n(Vo,{children:n(to,{level:2,children:o})})}),n(P,{children:a==null?void 0:a.map((i,d)=>n(M,{...i},d))})]})});try{N.displayName="FaqBlock",N.__docgenInfo={description:"",displayName:"FaqBlock",props:{faqs:{defaultValue:null,description:"",name:"faqs",required:!0,type:{name:"FaqOptions[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action<HTMLElement>[]"}},ActionStackProps:{defaultValue:null,description:"",name:"ActionStackProps",required:!1,type:{name:"ActionStackProps"}}}}}catch{}const fe={component:N},R={args:z()};var W,T,E;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: generateFaqBlock()
}`,...(E=(T=R.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const ge=["Default"];export{R as Default,ge as __namedExportsOrder,fe as default};
//# sourceMappingURL=FaqBlock.stories-7d6e0aaa.js.map
