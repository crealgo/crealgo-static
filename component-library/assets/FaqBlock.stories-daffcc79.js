import{k as O}from"./chance-e22ba91b.js";import{a as f,j as n,F as J}from"./jsx-runtime-c2efdcba.js";import{C as M,B as K}from"./Container-a6f3098c.js";import{C as Q}from"./ContentGrid-8e0a1ab6.js";import{A as X}from"./ActionStack-23545f53.js";import{_ as w}from"./defaultTheme-8fe9975f.js";import{_ as l}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import{r as p}from"./index-2812c619.js";import"./index-1aacdabe.js";import{c as k}from"./clsx.m-1229b3e0.js";import{s as u}from"./styled-e2ebe642.js";import{b as B}from"./useThemeProps-debefb1f.js";import{a as G,g as I,c as D}from"./generateUtilityClasses-bdae82bf.js";import{P as Y}from"./Paper-31fd4769.js";import{C as Z}from"./Collapse-e97c9768.js";import{u as oo}from"./useControlled-a2691953.js";import{M as eo}from"./ButtonBase-7c1dc156.js";import{A as ro}from"./AddCircleOutline-3a098d9c.js";import{c as H}from"./emotion-react.browser.esm-511d925c.js";import{H as to}from"./Heading-0b105ff6.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./Box-4b73dcd4.js";import"./Typography-ce4bf3ba.js";import"./Button-ce6e9453.js";import"./ButtonBase-7aae2927.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./Stack-bc1126ed.js";import"./_commonjsHelpers-725317a4.js";import"./utils-7fe413ee.js";import"./assertThisInitialized-e784747a.js";import"./index-62c31eed.js";import"./useTheme-e8b6c181.js";import"./useIsFocusVisible-4c83d0fb.js";import"./createSvgIcon-45dd28ac.js";const no=p.createContext({}),U=no;function so(o){return I("MuiAccordion",o)}const ao=G("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),v=ao,io=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],co=o=>{const{classes:e,square:r,expanded:t,disabled:s,disableGutters:c}=o;return D({root:["root",!r&&"rounded",t&&"expanded",s&&"disabled",!c&&"gutters"],region:["region"]},so,e)},lo=u(Y,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[{[`& .${v.region}`]:e.region},e.root,!r.square&&e.rounded,!r.disableGutters&&e.gutters]}})(({theme:o})=>{const e={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],e),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],e)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${v.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${v.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o,ownerState:e})=>l({},!e.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!e.disableGutters&&{[`&.${v.expanded}`]:{margin:"16px 0"}})),po=p.forwardRef(function(e,r){const t=B({props:e,name:"MuiAccordion"}),{children:s,className:c,defaultExpanded:i=!1,disabled:d=!1,disableGutters:g=!1,expanded:q,onChange:b,square:A=!1,TransitionComponent:h=Z,TransitionProps:C}=t,_=w(t,io),[a,m]=oo({controlled:q,default:i,name:"Accordion",state:"expanded"}),x=p.useCallback(z=>{m(!a),b&&b(z,!a)},[a,b,m]),[$,...L]=p.Children.toArray(s),j=p.useMemo(()=>({expanded:a,disabled:d,disableGutters:g,toggle:x}),[a,d,g,x]),F=l({},t,{square:A,disabled:d,disableGutters:g,expanded:a}),P=co(F);return f(lo,l({className:k(P.root,c),ref:r,ownerState:F,square:A},_,{children:[n(U.Provider,{value:j,children:$}),n(h,l({in:a,timeout:"auto"},C,{children:n("div",{"aria-labelledby":$.props.id,id:$.props["aria-controls"],role:"region",className:P.region,children:L})}))]}))}),uo=po;function mo(o){return I("MuiAccordionDetails",o)}G("MuiAccordionDetails",["root"]);const fo=["className"],go=o=>{const{classes:e}=o;return D({root:["root"]},mo,e)},bo=u("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),yo=p.forwardRef(function(e,r){const t=B({props:e,name:"MuiAccordionDetails"}),{className:s}=t,c=w(t,fo),i=t,d=go(i);return n(bo,l({className:k(d.root,s),ref:r,ownerState:i},c))}),xo=yo;function Ao(o){return I("MuiAccordionSummary",o)}const ho=G("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),y=ho,Co=["children","className","expandIcon","focusVisibleClassName","onClick"],vo=o=>{const{classes:e,expanded:r,disabled:t,disableGutters:s}=o;return D({root:["root",r&&"expanded",t&&"disabled",!s&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!s&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},Ao,e)},So=u(eo,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o,ownerState:e})=>{const r={duration:o.transitions.duration.shortest};return l({display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],r),[`&.${y.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${y.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${y.disabled})`]:{cursor:"pointer"}},!e.disableGutters&&{[`&.${y.expanded}`]:{minHeight:64}})}),Ro=u("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,e)=>e.content})(({theme:o,ownerState:e})=>l({display:"flex",flexGrow:1,margin:"12px 0"},!e.disableGutters&&{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${y.expanded}`]:{margin:"20px 0"}})),ko=u("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,e)=>e.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${y.expanded}`]:{transform:"rotate(180deg)"}})),qo=p.forwardRef(function(e,r){const t=B({props:e,name:"MuiAccordionSummary"}),{children:s,className:c,expandIcon:i,focusVisibleClassName:d,onClick:g}=t,q=w(t,Co),{disabled:b=!1,disableGutters:A,expanded:h,toggle:C}=p.useContext(U),_=x=>{C&&C(x),g&&g(x)},a=l({},t,{expanded:h,disabled:b,disableGutters:A}),m=vo(a);return f(So,l({focusRipple:!1,disableRipple:!0,disabled:b,component:"div","aria-expanded":h,className:k(m.root,c),focusVisibleClassName:k(m.focusVisible,d),onClick:_,ref:r,ownerState:a},q,{children:[n(Ro,{className:m.content,ownerState:a,children:s}),i&&n(ko,{className:m.expandIconWrapper,ownerState:a,children:i})]}))}),_o=qo,$o="18px",S="28px",Mo=u(uo)(({theme:o})=>H`
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
	`),No=u(_o)(({theme:o})=>({...o.typography.body2})),N=({question:o,answer:e,actions:r,resources:t})=>f(Mo,{variant:"outlined",children:[f(No,{children:[n(ro,{}),o]}),f(xo,{children:[e,r&&f(J,{children:[n("br",{}),n("br",{}),n(X,{size:"small",actions:r})]})]})]});try{N.displayName="FaqAccordion",N.__docgenInfo={description:"",displayName:"FaqAccordion",props:{question:{defaultValue:null,description:"",name:"question",required:!0,type:{name:"string"}},answer:{defaultValue:null,description:"",name:"answer",required:!0,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},resources:{defaultValue:null,description:"",name:"resources",required:!1,type:{name:"SimpleLink"}}}}}catch{}const Vo=u("div")(({theme:o})=>H`
		margin-bottom: 2rem;
		justify-content: center;
		text-align: center;
	`),V=({title:o,subtitle:e,description:r,actions:t,faqs:s,children:c})=>n(M,{children:n(K,{rounded:!0,color:"grey",children:f(Q,{children:[n(M,{size:"small",children:n(Vo,{children:n(to,{level:2,children:o})})}),n(M,{size:"small",children:s==null?void 0:s.map((i,d)=>n(N,{...i},d))})]})})});try{V.displayName="FaqBlock",V.__docgenInfo={description:"",displayName:"FaqBlock",props:{faqs:{defaultValue:null,description:"",name:"faqs",required:!0,type:{name:"FaqOptions[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action<HTMLElement>[]"}},ActionStackProps:{defaultValue:null,description:"",name:"ActionStackProps",required:!1,type:{name:"ActionStackProps"}}}}}catch{}const me={component:V},R={args:O()};var W,T,E;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: generateFaqBlock()
}`,...(E=(T=R.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const fe=["Default"];export{R as Default,fe as __namedExportsOrder,me as default};
//# sourceMappingURL=FaqBlock.stories-daffcc79.js.map
