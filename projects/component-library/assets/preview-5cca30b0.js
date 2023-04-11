import{j as t,T,a as p,c as g,F as k}from"./defaultTheme-30e43ede.js";import{c as d}from"./colors-55af66f1.js";import{G as b}from"./GlobalStyles-a5409c8f.js";import{c as C}from"./emotion-react.browser.esm-18e2571c.js";import{r as S}from"./index-2812c619.js";import{u as z,T as $,a as w,b as I}from"./useThemeProps-cbfa8a8e.js";import{_ as m}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./_commonjsHelpers-725317a4.js";const W=typeof Symbol=="function"&&Symbol.for,H=W?Symbol.for("mui.nested"):"__THEME_NESTED__";function E(e,r){return typeof r=="function"?r(e):m({},e,r)}function F(e){const{children:r,theme:o}=e,n=z(),a=S.useMemo(()=>{const i=n===null?o:E(n,o);return i!=null&&(i[H]=n!==null),i},[o,n]);return t($.Provider,{value:a,children:r})}const P={};function M(e){const r=w();return t(T.Provider,{value:typeof r=="object"?r:P,children:e.children})}function O(e){const{children:r,theme:o}=e;return t(F,{theme:o,children:t(M,{children:r})})}const j=(e,r)=>m({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},r&&!e.vars&&{colorScheme:e.palette.mode}),B=e=>m({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),G=(e,r=!1)=>{var o,n;const a={};r&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([_,x])=>{var y;a[e.getColorSchemeSelector(_).replace(/\s*&/,"")]={colorScheme:(y=x.palette)==null?void 0:y.mode}});let i=m({html:j(e,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:m({margin:0},B(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},a);const f=(o=e.components)==null||(n=o.MuiCssBaseline)==null?void 0:n.styleOverrides;return f&&(i=[i,f]),i};function N(e){const r=I({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:n=!1}=r;return p(S.Fragment,{children:[t(b,{styles:a=>G(a,n)}),o]})}const v='system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',A={fontFamily:`Inter, ${v}`,letterSpacing:"-0.05rem",fontWeight:600,lineHeight:"1.125"},R={fontFamily:`Inter, ${v}`,color:"#111827",fontWeight:400},{breakpoints:c,palette:l,shadows:s}=g({palette:{primary:{main:d.red[700]},secondary:{main:d.amber[400],light:d.amber[200]}}}),{typography:U}=g({typography:{allVariants:R,h1:{fontSize:"3rem",fontWeight:700,lineHeight:"1.125",letterSpacing:"-0.02em"},h2:{fontSize:"2.5rem",fontWeight:700,lineHeight:"1.125",letterSpacing:"-0.02em"},h3:{fontSize:"2.0625rem",fontWeight:700,lineHeight:"1.125",letterSpacing:"-0.02em"},h4:{fontSize:"1.75rem",fontWeight:"700",lineHeight:"1.125",letterSpacing:"-0.02em"},h5:{fontSize:"1.4375rem",fontWeight:"700",lineHeight:"1.125",letterSpacing:"-0.02em"},h6:A,body1:{fontSize:"1rem",lineHeight:"1.375"},body2:{fontSize:"1.1rem",lineHeight:"1.375"},caption:{fontSize:"0.875rem",lineHeight:"1.25",color:"#6b7280",letterSpacing:0},overline:{fontSize:"1rem",fontWeight:"bold"}}}),L={transitions:{easeInOut:"cubic-bezier(0.81, 0, 0.14, 0.96)"},inheritFont:{fontSize:"inherit",fontFamily:"inherit",letterSpacing:"inherit",fontWeight:"inherit",color:"inherit",lineHeight:"1.125"},absoluteCenter:{left:"50%",top:"50%",transform:"translate(-50%, -50%)"},styles:{block:{paddingBlock:"4rem",[c.up("md")]:{paddingBlock:"7rem"}},blockContainer:{paddingInline:"1.5rem",[c.up("md")]:{paddingInline:"2rem"},[c.up("xl")]:{paddingInline:"4rem"}},card:{outlined:{backgroundColor:"white",border:`solid 0.0625rem ${l.grey[200]}`,borderRadius:"0.25rem",padding:"1rem"},elevated:{backgroundColor:"white",border:`solid 0.0625rem ${l.grey[200]}`,borderRadius:"0.25rem",padding:"1rem"}},border:{default:`solid 0.0625rem ${l.grey[200]}`,primary:`solid 0.0625rem ${l.primary.dark}`,secondary:`solid 0.0625rem ${l.secondary.dark}`},shadows:{small:s[2],medium:s[4],large:s[10],xlarge:s[15],xxlarge:s[20]}}},D=g({breakpoints:c,palette:l,typography:U,utils:L,components:{MuiButton:{defaultProps:{disableElevation:!0,variant:"contained"},styleOverrides:{root:{display:"inline-flex",textTransform:"unset",letterSpacing:"0",fontWeight:"normal",fontSize:"0.875rem"}}},MuiLink:{defaultProps:{underline:"none"},styleOverrides:{root:{cursor:"pointer"}}},MuiInputBase:{styleOverrides:{root:{backgroundColor:"white"}}}}});const u=e=>t(b,{...e,styles:C`
			:root {
				font-family: Inter;

				--color-primary: #b20838;
				--color-secondary: #fde047;

				--shadow-border-color: rgba(30, 41, 59, 0.25);
				--shadow-border: inset 0rem 0rem 0rem 0.0625rem var(--shadow-border-color);

				--shadow-elevation-0: 0px 1px 2px rgba(0, 0, 0, 0.05);

				--shadow-input-color: rgba(0, 0, 0, 0.05);
				--shadow-input: 0rem 0.0625rem 0.125rem var(--shadow-input-color);

				// input shape
				--rounding-small-input: 0.5rem;
				--padding-x-small-input: 0.5rem;
				--padding-y-small-input: 0.25rem;
				--height-small-input: 1.75rem;

				--rounding-medium-input: 0.5rem;
				--padding-x-medium-input: 0.75rem;
				--padding-y-medium-input: 0.5rem;
				--height-medium-input: 2rem;

				--rounding-large-input: 0.5rem;
				--padding-x-large-input: 0.875rem;
				--padding-y-large-input: 0.625rem;
				--height-large-input: 2.25rem;
			}
		`});try{u.displayName="GlobalStyles",u.__docgenInfo={description:"",displayName:"GlobalStyles",props:{}}}catch{}const h=e=>p(k,{children:[t(u,{}),p(O,{theme:D,children:[t(N,{}),e.children]})]});try{h.displayName="ThemeProvider",h.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}}}catch{}const ee={parameters:{backgrounds:{default:"slate",values:[{name:"slate",value:d.slate[100]},{name:"dark",value:d.slate[900]}]}},decorators:[e=>t(h,{children:t(e,{})})]};export{ee as default};
//# sourceMappingURL=preview-5cca30b0.js.map
