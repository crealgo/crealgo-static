import{j as n,a as m,F as M}from"./jsx-runtime-c2efdcba.js";import{r as a}from"./index-2812c619.js";import{B as f}from"./Button-90cddc56.js";import{s as u}from"./styled-e2ebe642.js";import{_ as v}from"./defaultTheme-8fe9975f.js";import{_ as i}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import{c as D}from"./clsx.m-1229b3e0.js";import{b as x}from"./useThemeProps-debefb1f.js";import{g as S,a as k,c as y}from"./generateUtilityClasses-bdae82bf.js";import{c as w}from"./emotion-react.browser.esm-511d925c.js";import{P as $}from"./Paper-31fd4769.js";import{T as B}from"./Typography-ce4bf3ba.js";import{M as R,C as N,a as A}from"./MailTwoTone-512a0ecd.js";import"./_commonjsHelpers-725317a4.js";import"./ButtonBase-a4cb8c49.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-0d2a43de.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./useEnhancedEffect-767500c3.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./createSvgIcon-45dd28ac.js";const U=a.createContext({}),O=U;function q(o){return S("MuiDialogActions",o)}k("MuiDialogActions",["root","spacing"]);const j=["className","disableSpacing"],I=o=>{const{classes:e,disableSpacing:t}=o;return y({root:["root",!t&&"spacing"]},q,e)},P=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,!t.disableSpacing&&e.spacing]}})(({ownerState:o})=>i({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),E=a.forwardRef(function(e,t){const s=x({props:e,name:"MuiDialogActions"}),{className:l,disableSpacing:c=!1}=s,d=v(s,j),r=i({},s,{disableSpacing:c}),p=I(r);return n(P,i({className:D(p.root,l),ownerState:r,ref:t},d))}),F=E;function L(o){return S("MuiDialogContent",o)}k("MuiDialogContent",["root","dividers"]);function W(o){return S("MuiDialogTitle",o)}const z=k("MuiDialogTitle",["root"]),V=z,Y=["className","dividers"],G=o=>{const{classes:e,dividers:t}=o;return y({root:["root",t&&"dividers"]},L,e)},H=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${V.root} + &`]:{paddingTop:0}})),J=a.forwardRef(function(e,t){const s=x({props:e,name:"MuiDialogContent"}),{className:l,dividers:c=!1}=s,d=v(s,Y),r=i({},s,{dividers:c}),p=G(r);return n(H,i({className:D(p.root,l),ownerState:r,ref:t},d))}),K=J,Q=["className","id"],X=o=>{const{classes:e}=o;return y({root:["root"]},W,e)},Z=u(B,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),oo=a.forwardRef(function(e,t){const s=x({props:e,name:"MuiDialogTitle"}),{className:l,id:c}=s,d=v(s,Q),r=s,p=X(r),{titleId:_=c}=a.useContext(O);return n(Z,i({component:"h2",className:D(p.root,l),ownerState:r,ref:t,variant:"h6",id:_},d))}),eo=oo,to=u(K)(({theme:o})=>w`
		background-color: ${o.palette.grey[100]};
		border-top: solid 1px ${o.palette.grey[300]};
		border-bottom: solid 1px ${o.palette.grey[300]};

		.stepper {
			padding-block: 1rem;
		}

		.step-content {
			padding-inline: 0.5rem;
			padding-block: 2rem;
		}
	`),so=u($)`
	position: absolute;
	z-index: 99999;
`,C=o=>m(so,{children:[m(eo,{children:[n("span",{children:"Contact Us"}),n(R,{color:"primary"})]}),n(to,{}),m(F,{children:[n(f,{color:"text",endIcon:n(N,{color:"error"}),onClick:o.onCloseClick,children:"Cancel"}),n(f,{color:"tertiary",endIcon:n(A,{color:"success"}),children:"Submit"})]})]});try{C.displayName="SquareBookingService",C.__docgenInfo={description:"",displayName:"SquareBookingService",props:{onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((event: MouseEvent<unknown, MouseEvent>) => void)"}}}}}catch{}const wo={component:C},g={render:()=>{const[o,e]=a.useState(!1);return m(M,{children:[n(f,{color:"primary",onClick:()=>{e(!0)},children:"Open Booking Service"}),n(C,{onCloseClick:()=>{e(!1)}})]})}};var h,b,T;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const handleClick = (): void => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return <>
                <Button color="primary" onClick={handleClick}>
                    Open Booking Service
                </Button>
                <SquareBookingService onCloseClick={handleClose} />
            </>;
  }
}`,...(T=(b=g.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const $o=["Default"];export{g as Default,$o as __namedExportsOrder,wo as default};
//# sourceMappingURL=SquareBookingService.stories-7ec25757.js.map
