import{b as z}from"./chance-dbb8c3cf.js";import{_ as V,a as f,j as n,F as J}from"./defaultTheme-30e43ede.js";import{B as K,C as P}from"./Block-81203b25.js";import{C as Q}from"./ContentGrid-f5dd3726.js";import{A as X}from"./ActionStack-e2087fb9.js";import{_ as l}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import{r as p}from"./index-2812c619.js";import"./index-1aacdabe.js";import{c as q}from"./clsx.m-1229b3e0.js";import{s as u}from"./styled-8f152a82.js";import{b as w}from"./useThemeProps-cbfa8a8e.js";import{g as B,a as G,c as I}from"./generateUtilityClasses-0f0148c0.js";import{P as Y}from"./Paper-279463c0.js";import{C as Z}from"./Collapse-9d371e2b.js";import{u as oo}from"./useControlled-a2691953.js";import{M as eo}from"./ButtonBase-63fd7aa9.js";import{A as ro}from"./AddCircleOutline-f6a41b59.js";import{c as H}from"./emotion-react.browser.esm-18e2571c.js";import{H as to}from"./Heading-06e530da.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./Box-fdcb16a5.js";import"./Typography-b4c27325.js";import"./Button-ebd51bfd.js";import"./ButtonBase-d3dd63a4.js";import"./colors-55af66f1.js";import"./Stack-71a65dae.js";import"./_commonjsHelpers-725317a4.js";import"./utils-7846287f.js";import"./inheritsLoose-c82a83d4.js";import"./index-62c31eed.js";import"./TransitionGroupContext-d7a6185f.js";import"./useTheme-565714fd.js";import"./useForkRef-9773819b.js";import"./assertThisInitialized-081f9914.js";import"./useIsFocusVisible-9b2ab6cf.js";import"./createSvgIcon-7fe6f70f.js";const no=p.createContext({}),U=no;function ao(o){return G("MuiAccordion",o)}const so=B("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),v=so,io=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],co=o=>{const{classes:e,square:r,expanded:t,disabled:a,disableGutters:c}=o;return I({root:["root",!r&&"rounded",t&&"expanded",a&&"disabled",!c&&"gutters"],region:["region"]},ao,e)},lo=u(Y,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[{[`& .${v.region}`]:e.region},e.root,!r.square&&e.rounded,!r.disableGutters&&e.gutters]}})(({theme:o})=>{const e={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],e),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],e)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${v.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${v.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o,ownerState:e})=>l({},!e.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!e.disableGutters&&{[`&.${v.expanded}`]:{margin:"16px 0"}})),po=p.forwardRef(function(e,r){const t=w({props:e,name:"MuiAccordion"}),{children:a,className:c,defaultExpanded:i=!1,disabled:d=!1,disableGutters:g=!1,expanded:_,onChange:b,square:A=!1,TransitionComponent:h=Z,TransitionProps:C}=t,$=V(t,io),[s,m]=oo({controlled:_,default:i,name:"Accordion",state:"expanded"}),x=p.useCallback(O=>{m(!s),b&&b(O,!s)},[s,b,m]),[k,...L]=p.Children.toArray(a),j=p.useMemo(()=>({expanded:s,disabled:d,disableGutters:g,toggle:x}),[s,d,g,x]),D=l({},t,{square:A,disabled:d,disableGutters:g,expanded:s}),F=co(D);return f(lo,l({className:q(F.root,c),ref:r,ownerState:D,square:A},$,{children:[n(U.Provider,{value:j,children:k}),n(h,l({in:s,timeout:"auto"},C,{children:n("div",{"aria-labelledby":k.props.id,id:k.props["aria-controls"],role:"region",className:F.region,children:L})}))]}))}),uo=po;function mo(o){return G("MuiAccordionDetails",o)}B("MuiAccordionDetails",["root"]);const fo=["className"],go=o=>{const{classes:e}=o;return I({root:["root"]},mo,e)},bo=u("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),yo=p.forwardRef(function(e,r){const t=w({props:e,name:"MuiAccordionDetails"}),{className:a}=t,c=V(t,fo),i=t,d=go(i);return n(bo,l({className:q(d.root,a),ref:r,ownerState:i},c))}),xo=yo;function Ao(o){return G("MuiAccordionSummary",o)}const ho=B("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),y=ho,Co=["children","className","expandIcon","focusVisibleClassName","onClick"],vo=o=>{const{classes:e,expanded:r,disabled:t,disableGutters:a}=o;return I({root:["root",r&&"expanded",t&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},Ao,e)},So=u(eo,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o,ownerState:e})=>{const r={duration:o.transitions.duration.shortest};return l({display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],r),[`&.${y.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${y.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${y.disabled})`]:{cursor:"pointer"}},!e.disableGutters&&{[`&.${y.expanded}`]:{minHeight:64}})}),Ro=u("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,e)=>e.content})(({theme:o,ownerState:e})=>l({display:"flex",flexGrow:1,margin:"12px 0"},!e.disableGutters&&{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${y.expanded}`]:{margin:"20px 0"}})),qo=u("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,e)=>e.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${y.expanded}`]:{transform:"rotate(180deg)"}})),_o=p.forwardRef(function(e,r){const t=w({props:e,name:"MuiAccordionSummary"}),{children:a,className:c,expandIcon:i,focusVisibleClassName:d,onClick:g}=t,_=V(t,Co),{disabled:b=!1,disableGutters:A,expanded:h,toggle:C}=p.useContext(U),$=x=>{C&&C(x),g&&g(x)},s=l({},t,{expanded:h,disabled:b,disableGutters:A}),m=vo(s);return f(So,l({focusRipple:!1,disableRipple:!0,disabled:b,component:"div","aria-expanded":h,className:q(m.root,c),focusVisibleClassName:q(m.focusVisible,d),onClick:$,ref:r,ownerState:s},_,{children:[n(Ro,{className:m.content,ownerState:s,children:a}),i&&n(qo,{className:m.expandIconWrapper,ownerState:s,children:i})]}))}),$o=_o,ko="18px",S="28px",Mo=u(uo)(({theme:o,expanded:e})=>H`
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
			font-size: ${ko};
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
	`),No=u($o)(({theme:o})=>({...o.typography.body2})),M=({question:o,answer:e,actions:r,resources:t})=>f(Mo,{variant:"outlined",children:[f(No,{children:[n(ro,{}),o]}),f(xo,{children:[e,r&&f(J,{children:[n("br",{}),n("br",{}),n(X,{size:"small",actions:r})]})]})]});try{M.displayName="FaqAccordion",M.__docgenInfo={description:"",displayName:"FaqAccordion",props:{question:{defaultValue:null,description:"",name:"question",required:!0,type:{name:"string"}},answer:{defaultValue:null,description:"",name:"answer",required:!0,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},resources:{defaultValue:null,description:"",name:"resources",required:!1,type:{name:"SimpleLink"}}}}}catch{}const Vo=u("div")(({theme:o})=>H`
		margin-bottom: 2rem;
		justify-content: center;
		text-align: center;
	`),N=({title:o,subtitle:e,description:r,actions:t,faqs:a,children:c})=>n(K,{color:"grey",children:f(Q,{children:[n(P,{children:n(Vo,{children:n(to,{level:2,children:o})})}),n(P,{children:a==null?void 0:a.map((i,d)=>n(M,{...i},d))})]})});try{N.displayName="FaqBlock",N.__docgenInfo={description:"",displayName:"FaqBlock",props:{faqs:{defaultValue:null,description:"",name:"faqs",required:!0,type:{name:"FaqOptions[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action<HTMLElement>[]"}},ActionStackProps:{defaultValue:null,description:"",name:"ActionStackProps",required:!1,type:{name:"ActionStackProps"}}}}}catch{}const fe={component:N},R={args:z()};var W,T,E;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: generateFaqBlock()
}`,...(E=(T=R.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const ge=["Default"];export{R as Default,ge as __namedExportsOrder,fe as default};
//# sourceMappingURL=FaqBlock.stories-45be07b4.js.map
