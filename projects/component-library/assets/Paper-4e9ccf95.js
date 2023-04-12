import{h as l,_ as m}from"./defaultTheme-d0849189.js";import{_ as s}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import{r as g}from"./index-2812c619.js";import{c as P}from"./clsx.m-1229b3e0.js";import{s as b}from"./styled-899f007b.js";import{b as x}from"./useThemeProps-4c706523.js";import{g as $,a as y,c as C}from"./generateUtilityClasses-bdae82bf.js";import{j as R}from"./jsx-runtime-c2efdcba.js";function _(e){return $("MuiPaper",e)}y("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const k=["className","component","elevation","square","variant"],v=e=>{let a;return e<1?a=5.11916*e**2:a=4.5*Math.log(e+1)+2,(a/100).toFixed(2)},q=e=>{const{square:a,elevation:o,variant:t,classes:n}=e,r={root:["root",t,!a&&"rounded",t==="elevation"&&`elevation${o}`]};return C(r,_,n)},M=b("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!o.square&&a.rounded,o.variant==="elevation"&&a[`elevation${o.elevation}`]]}})(({theme:e,ownerState:a})=>{var o;return s({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!a.square&&{borderRadius:e.shape.borderRadius},a.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},a.variant==="elevation"&&s({boxShadow:(e.vars||e).shadows[a.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${l("#fff",v(a.elevation))}, ${l("#fff",v(a.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[a.elevation]}))}),U=g.forwardRef(function(a,o){const t=x({props:a,name:"MuiPaper"}),{className:n,component:r="div",elevation:p=1,square:d=!1,variant:c="elevation"}=t,u=m(t,k),i=s({},t,{component:r,elevation:p,square:d,variant:c}),f=q(i);return R(M,s({as:r,ownerState:i,className:P(f.root,n),ref:o},u))}),O=U;export{O as P};
//# sourceMappingURL=Paper-4e9ccf95.js.map
