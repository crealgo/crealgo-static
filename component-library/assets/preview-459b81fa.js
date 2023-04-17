import{j as n,a as u,F as $}from"./jsx-runtime-c2efdcba.js";import{c as t,w as p}from"./colors-077d21ae.js";import{c as f}from"./defaultTheme-d0849189.js";import{G as S}from"./GlobalStyles-3746baf4.js";import{c as k}from"./emotion-react.browser.esm-511d925c.js";import{r as v}from"./index-2812c619.js";import{u as z,T as C,a as H,b as I}from"./useThemeProps-4c706523.js";import{_ as m}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import{T as w}from"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./_commonjsHelpers-725317a4.js";const W=typeof Symbol=="function"&&Symbol.for,O=W?Symbol.for("mui.nested"):"__THEME_NESTED__";function P(e,r){return typeof r=="function"?r(e):m({},e,r)}function E(e){const{children:r,theme:o}=e,i=z(),l=v.useMemo(()=>{const a=i===null?o:P(i,o);return a!=null&&(a[O]=i!==null),a},[o,i]);return n(C.Provider,{value:l,children:r})}const F={};function M(e){const r=H();return n(w.Provider,{value:typeof r=="object"?r:F,children:e.children})}function j(e){const{children:r,theme:o}=e;return n(E,{theme:o,children:n(M,{children:r})})}const B=(e,r)=>m({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},r&&!e.vars&&{colorScheme:e.palette.mode}),R=e=>m({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),N=(e,r=!1)=>{var o,i;const l={};r&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([_,T])=>{var b;l[e.getColorSchemeSelector(_).replace(/\s*&/,"")]={colorScheme:(b=T.palette)==null?void 0:b.mode}});let a=m({html:B(e,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:m({margin:0},R(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},l);const y=(o=e.components)==null||(i=o.MuiCssBaseline)==null?void 0:i.styleOverrides;return y&&(a=[a,y]),a};function A(e){const r=I({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:i=!1}=r;return u(v.Fragment,{children:[n(S,{styles:l=>N(l,i)}),o]})}const x='system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',G={fontFamily:`Inter, ${x}`,letterSpacing:"-0.05rem",fontWeight:600,lineHeight:"1.125"},L={fontFamily:`Inter, ${x}`,color:"#111827",fontWeight:400},{breakpoints:c,palette:s,shadows:d}=f({palette:{primary:{main:t.red[700]},secondary:{main:t.amber[400],light:t.amber[200]}}}),{typography:U}=f({typography:{allVariants:L,h1:{fontSize:"3rem",fontWeight:700,lineHeight:"1.125",letterSpacing:"-0.02em"},h2:{fontSize:"2.5rem",fontWeight:700,lineHeight:"1.125",letterSpacing:"-0.02em"},h3:{fontSize:"2.0625rem",fontWeight:700,lineHeight:"1.125",letterSpacing:"-0.02em"},h4:{fontSize:"1.75rem",fontWeight:"700",lineHeight:"1.125",letterSpacing:"-0.02em"},h5:{fontSize:"1.4375rem",fontWeight:"700",lineHeight:"1.125",letterSpacing:"-0.02em"},h6:G,body1:{fontSize:"1rem",lineHeight:"1.375"},body2:{fontSize:"1.1rem",lineHeight:"1.375"},caption:{fontSize:"0.875rem",lineHeight:"1.25",color:"#6b7280",letterSpacing:0},overline:{fontSize:"1rem",fontWeight:"bold"}}});c.up("md")+"",c.up("md")+"",c.up("xl")+"",`${s.grey[200]}`,`${s.grey[200]}`,`${s.grey[200]}`,`${s.primary.dark}`,`${s.secondary.dark}`,d[2],d[4],d[10],d[15],d[20];const Y=f({breakpoints:c,palette:s,typography:U,components:{MuiButton:{defaultProps:{disableElevation:!0,variant:"contained"},styleOverrides:{root:{display:"inline-flex",textTransform:"unset",letterSpacing:"0",fontWeight:"normal",fontSize:"0.875rem"}}},MuiLink:{defaultProps:{underline:"none"},styleOverrides:{root:{cursor:"pointer"}}},MuiInputBase:{styleOverrides:{root:{backgroundColor:"white"}}}}});const h=()=>n(S,{styles:k`
			:root {
				font-family: Inter;

				/*
					namespace-object-base-modifier

					namespace: system-theme-domain
					object: group-component-element
					base: category-concept-property
					modifier: variant-state-scale-mode
				*/

				/* PRIMARY COLORS */
				/* --brand-color-primary: ${t.rose[700]}; */
				/* --brand-color-secondary: ${t.yellow[300]}; */

				/* --text-color-primary: ${t.slate[900]}; */
				/* --text-color-secondary: ${t.slate[400]}; */

				/* SHADOWS COLORS */
				/* --shadow-elevation-0: 0px 1px 2px ${p(t.slate[900]).alpha(.05).toHex()}; */

				/* --input-shadow-color: ${p(t.slate[800]).alpha(.5).toHex()}; */
				/* --input-shadow: 0rem 0.0625rem 0.125rem var(--shadow-input-color); */

				/* INPUT STYLES */
				/* --input-border-style: solid; */
				/* --input-border-width: 1px; */
				/* --input-border-color: ${p(t.slate[900]).alpha(.25).toHex()}; */
				/* --input-border: var(--input-border-style) var(--input-border-width) var(--input-border-color); */

				/* --input-bezel-small: 0.25rem;
				--input-padding-x-small: 0.5rem;
				--input-padding-y-small: 0.25rem;
				--input-height-small: 1.75rem;

				--input-bezel-medium: 0.25rem;
				--input-padding-x-medium: 0.75rem;
				--input-padding-y-medium: 0.5rem;
				--input-height-medium: 2rem;

				--input-bezel-large: 0.375rem;
				--input-padding-x-large: 0.875rem;
				--input-padding-y-large: 0.625rem;
				--input-height-large: 2.25rem; */
			}
		`});try{h.displayName="GlobalStyles",h.__docgenInfo={description:"",displayName:"GlobalStyles",props:{}}}catch{}const g=e=>u($,{children:[n(h,{}),u(j,{theme:Y,children:[n(A,{}),e.children]})]});try{g.displayName="ThemeProvider",g.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}}}catch{}const te={parameters:{backgrounds:{default:"slate",values:[{name:"slate",value:t.slate[100]},{name:"dark",value:t.slate[900]}]}},decorators:[e=>n(g,{children:n(e,{})})]};export{te as default};
//# sourceMappingURL=preview-459b81fa.js.map
