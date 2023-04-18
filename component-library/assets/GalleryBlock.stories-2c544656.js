import{m as ae}from"./chance-e22ba91b.js";import{j as i,a as F}from"./jsx-runtime-c2efdcba.js";import{c as ie}from"./clsx.m-1229b3e0.js";import{r as oe}from"./index-2812c619.js";import{B as le,C as T}from"./Container-a6f3098c.js";import{H as se}from"./Heading-0b105ff6.js";import{I as de}from"./Image-cc1fdedc.js";import{S as ce}from"./StatusMessage-ae80a29c.js";import{S as me}from"./SocialMediaBlock-43758cba.js";import{s as ue}from"./styled-e2ebe642.js";import{c as pe}from"./emotion-react.browser.esm-511d925c.js";import{T as fe}from"./Typography-ce4bf3ba.js";import{W as ve}from"./Warning-842bfe40.js";import"./_commonjsHelpers-725317a4.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./ActionStack-23545f53.js";import"./Button-ce6e9453.js";import"./ButtonBase-7aae2927.js";import"./ButtonBase-7c1dc156.js";import"./defaultTheme-8fe9975f.js";import"./useThemeProps-debefb1f.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./Stack-bc1126ed.js";import"./Text-ba2fdcf0.js";import"./Link-79621f82.js";import"./createSvgIcon-45dd28ac.js";var J={};function ge(e){if(!e||typeof window>"u")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}Object.defineProperty(J,"__esModule",{value:!0});var o=oe;function ye(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var s=ye(o);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var u=function(){return u=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},u.apply(this,arguments)};ge(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: 100%;
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}`);var he=function(e){var t,r,n,a,l=e.style,K=l===void 0?{}:l,k=e.className,Q=k===void 0?"":k,w=e.play,d=w===void 0?!0:w,x=e.pauseOnHover,B=x===void 0?!1:x,C=e.pauseOnClick,b=C===void 0?!1:C,q=e.direction,E=q===void 0?"left":q,N=e.speed,S=N===void 0?20:N,M=e.delay,G=M===void 0?0:M,O=e.loop,c=O===void 0?0:O,W=e.gradient,U=W===void 0?!0:W,j=e.gradientColor,p=j===void 0?[255,255,255]:j,I=e.gradientWidth,f=I===void 0?200:I,Y=e.onFinish,ee=e.onCycleComplete,R=e.children,P=o.useState(0),H=P[0],te=P[1],z=o.useState(0),A=z[0],ne=z[1],V=o.useState(!1),v=V[0],re=V[1],g=o.useRef(null),y=o.useRef(null);o.useEffect(function(){if(v){var h=function(){y.current&&g.current&&(te(g.current.getBoundingClientRect().width),ne(y.current.getBoundingClientRect().width))};return h(),window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}}},[v]),o.useEffect(function(){re(!0)},[]);var L="rgba("+p[0]+", "+p[1]+", "+p[2],D=A<H?H/S:A/S;return s.default.createElement(o.Fragment,null,v?s.default.createElement("div",{ref:g,style:u(u({},K),(t={},t["--pause-on-hover"]=!d||B?"paused":"running",t["--pause-on-click"]=!d||B&&!b||b?"paused":"running",t)),className:Q+" marquee-container"},U&&s.default.createElement("div",{style:(r={},r["--gradient-color"]=L+", 1), "+L+", 0)",r["--gradient-width"]=typeof f=="number"?f+"px":f,r),className:"overlay"}),s.default.createElement("div",{ref:y,style:(n={},n["--play"]=d?"running":"paused",n["--direction"]=E==="left"?"normal":"reverse",n["--duration"]=D+"s",n["--delay"]=G+"s",n["--iteration-count"]=c?""+c:"infinite",n),className:"marquee",onAnimationIteration:ee,onAnimationEnd:Y},R),s.default.createElement("div",{style:(a={},a["--play"]=d?"running":"paused",a["--direction"]=E==="left"?"normal":"reverse",a["--duration"]=D+"s",a["--delay"]=G+"s",a["--iteration-count"]=c?""+c:"infinite",a),className:"marquee","aria-hidden":"true"},R)):null)},_e=J.default=he;const ke=ue(le)(({theme:e})=>pe`
		.Container-root {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.content {
			text-align: center;
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.gallery {
			width: 100%;
			overflow: hidden;
			margin-top: 2.5rem;

			.GalleryBlock-image {
				margin-inline: 0.25rem;

				${e.breakpoints.up("md")} {
					width: 300px;
				}
			}
		}
	`),_=({className:e,...t})=>{var r;return i(ke,{className:ie(e,"GalleryBlock-root"),children:F(T,{children:[F("div",{className:"content",children:[i(se,{level:2,children:t.title}),i(T,{size:"small",children:i(fe,{variant:"body2",children:t.description})}),i(me,{...t.SocialMediaBlockProps})]}),i("div",{className:"gallery",children:(r=t.images)!=null&&r.length?i(_e,{pauseOnHover:!0,children:t.images.map((n,a)=>i(de,{className:"GalleryBlock-image",...n},a))}):i(ce,{isContained:!0,IconComponent:ve,text:"No Images Available"})})]})})};try{_.displayName="GalleryBlock",_.__docgenInfo={description:"",displayName:"GalleryBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},SocialMediaBlockProps:{defaultValue:null,description:"",name:"SocialMediaBlockProps",required:!1,type:{name:"SocialMediaBlockProps"}},images:{defaultValue:null,description:"",name:"images",required:!1,type:{name:"ImageProps[]"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}}}}}catch{}const Ue={component:_},m={args:ae()};var X,$,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: generateGalleryBlock()
}`,...(Z=($=m.parameters)==null?void 0:$.docs)==null?void 0:Z.source}}};const Ye=["Default"];export{m as Default,Ye as __namedExportsOrder,Ue as default};
//# sourceMappingURL=GalleryBlock.stories-2c544656.js.map
