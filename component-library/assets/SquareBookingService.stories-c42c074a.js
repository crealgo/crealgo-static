import{j as n,a as g,F as M}from"./jsx-runtime-c2efdcba.js";import{r as a}from"./index-2812c619.js";import{B as C}from"./Button-77e6833e.js";import{s as u}from"./styled-899f007b.js";import{_ as v}from"./defaultTheme-d0849189.js";import{_ as i}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import{c as S}from"./clsx.m-1229b3e0.js";import{b as D}from"./useThemeProps-4c706523.js";import{g as x,a as y,c as k}from"./generateUtilityClasses-bdae82bf.js";import{c as w}from"./emotion-react.browser.esm-511d925c.js";import{P as $}from"./Paper-4e9ccf95.js";import{T as B}from"./Typography-e61b6c49.js";import{M as R,C as N,a as A}from"./MailTwoTone-f97fa36c.js";import"./_commonjsHelpers-725317a4.js";import"./ButtonBase-7b58a963.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-890a84e2.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./colors-55af66f1.js";import"./createSvgIcon-4ae69272.js";const U=a.createContext({}),q=U;function O(o){return x("MuiDialogActions",o)}y("MuiDialogActions",["root","spacing"]);const j=["className","disableSpacing"],I=o=>{const{classes:e,disableSpacing:t}=o;return k({root:["root",!t&&"spacing"]},O,e)},P=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,!t.disableSpacing&&e.spacing]}})(({ownerState:o})=>i({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),E=a.forwardRef(function(e,t){const s=D({props:e,name:"MuiDialogActions"}),{className:l,disableSpacing:c=!1}=s,p=v(s,j),r=i({},s,{disableSpacing:c}),d=I(r);return n(P,i({className:S(d.root,l),ownerState:r,ref:t},p))}),V=E;function F(o){return x("MuiDialogContent",o)}y("MuiDialogContent",["root","dividers"]);function L(o){return x("MuiDialogTitle",o)}const W=y("MuiDialogTitle",["root"]),z=W,Y=["className","dividers"],G=o=>{const{classes:e,dividers:t}=o;return k({root:["root",t&&"dividers"]},F,e)},H=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${z.root} + &`]:{paddingTop:0}})),J=a.forwardRef(function(e,t){const s=D({props:e,name:"MuiDialogContent"}),{className:l,dividers:c=!1}=s,p=v(s,Y),r=i({},s,{dividers:c}),d=G(r);return n(H,i({className:S(d.root,l),ownerState:r,ref:t},p))}),K=J,Q=["className","id"],X=o=>{const{classes:e}=o;return k({root:["root"]},L,e)},Z=u(B,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),oo=a.forwardRef(function(e,t){const s=D({props:e,name:"MuiDialogTitle"}),{className:l,id:c}=s,p=v(s,Q),r=s,d=X(r),{titleId:_=c}=a.useContext(q);return n(Z,i({component:"h2",className:S(d.root,l),ownerState:r,ref:t,variant:"h6",id:_},p))}),eo=oo,to=u(K)(({theme:o})=>w`
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
`,f=o=>g(so,{children:[g(eo,{children:[n("span",{children:"Contact Us"}),n(R,{color:"primary"})]}),n(to,{}),g(V,{children:[n(C,{color:"text",endIcon:n(N,{color:"error"}),onClick:o.onCloseClick,children:"Cancel"}),n(C,{color:"tertiary",endIcon:n(A,{color:"success"}),children:"Submit"})]})]});try{f.displayName="SquareBookingService",f.__docgenInfo={description:"",displayName:"SquareBookingService",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((event: MouseEvent<unknown, MouseEvent>) => void)"}},activeStep:{defaultValue:null,description:"",name:"activeStep",required:!1,type:{name:"number"}}}}}catch{}const wo={component:f},m={render:()=>{const[o,e]=a.useState(!1);return g(M,{children:[n(C,{color:"primary",onClick:()=>{e(!0)},children:"Open Booking Service"}),n(f,{open:o,onCloseClick:()=>{e(!1)}})]})}};var h,b,T;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
                    {"Open Booking Service"}
                </Button>
                <SquareBookingService open={open} onCloseClick={handleClose} />
            </>;
  }
}`,...(T=(b=m.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const $o=["Default"];export{m as Default,$o as __namedExportsOrder,wo as default};
//# sourceMappingURL=SquareBookingService.stories-c42c074a.js.map
