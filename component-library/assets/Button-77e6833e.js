import{j as q}from"./jsx-runtime-c2efdcba.js";import{B as E}from"./ButtonBase-7b58a963.js";import{c as f}from"./emotion-react.browser.esm-511d925c.js";import{s as S}from"./emotion-styled.browser.esm-fa7ff235.js";import{_ as V}from"./excludePropsFromForwarding-6c5743cd.js";import{c as z}from"./clsx.m-1229b3e0.js";import{c as x}from"./colors-55af66f1.js";var R={grad:.9,turn:360,rad:360/(2*Math.PI)},d=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},i=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r+0},c=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e>t?e:t},C=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},N=function(e){return{r:c(e.r,0,255),g:c(e.g,0,255),b:c(e.b,0,255),a:c(e.a)}},v=function(e){return{r:i(e.r),g:i(e.g),b:i(e.b),a:i(e.a,3)}},D=/^#([0-9a-f]{3,8})$/i,p=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},M=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,o=Math.max(t,r,n),u=o-Math.min(t,r,n),l=u?o===t?(r-n)/u:o===r?2+(n-t)/u:4+(t-r)/u:0;return{h:60*(l<0?l+6:l),s:o?u/o*100:0,v:o/255*100,a}},j=function(e){var t=e.h,r=e.s,n=e.v,a=e.a;t=t/360*6,r/=100,n/=100;var o=Math.floor(t),u=n*(1-r),l=n*(1-(t-o)*r),g=n*(1-(1-t+o)*r),b=o%6;return{r:255*[n,l,u,u,g,n][b],g:255*[g,n,n,l,u,u][b],b:255*[u,u,g,n,n,l][b],a}},F=function(e){return{h:C(e.h),s:c(e.s,0,100),l:c(e.l,0,100),a:c(e.a)}},I=function(e){return{h:i(e.h),s:i(e.s),l:i(e.l),a:i(e.a,3)}},$=function(e){return j((r=(t=e).s,{h:t.h,s:(r*=((n=t.l)<50?n:100-n)/100)>0?2*r/(n+r)*100:0,v:n+r,a:t.a}));var t,r,n},h=function(e){return{h:(t=M(e)).h,s:(a=(200-(r=t.s))*(n=t.v)/100)>0&&a<200?r*n/100/(a<=100?a:200-a)*100:0,l:a/2,a:t.a};var t,r,n,a},J=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,L=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,X=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,P=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,B={string:[[function(e){var t=D.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?i(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?i(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=X.exec(e)||P.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:N({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=J.exec(e)||L.exec(e);if(!t)return null;var r,n,a=F({h:(r=t[1],n=t[2],n===void 0&&(n="deg"),Number(r)*(R[n]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return $(a)},"hsl"]],object:[[function(e){var t=e.r,r=e.g,n=e.b,a=e.a,o=a===void 0?1:a;return d(t)&&d(r)&&d(n)?N({r:Number(t),g:Number(r),b:Number(n),a:Number(o)}):null},"rgb"],[function(e){var t=e.h,r=e.s,n=e.l,a=e.a,o=a===void 0?1:a;if(!d(t)||!d(r)||!d(n))return null;var u=F({h:Number(t),s:Number(r),l:Number(n),a:Number(o)});return $(u)},"hsl"],[function(e){var t=e.h,r=e.s,n=e.v,a=e.a,o=a===void 0?1:a;if(!d(t)||!d(r)||!d(n))return null;var u=function(l){return{h:C(l.h),s:c(l.s,0,100),v:c(l.v,0,100),a:c(l.a)}}({h:Number(t),s:Number(r),v:Number(n),a:Number(o)});return j(u)},"hsv"]]},k=function(e,t){for(var r=0;r<t.length;r++){var n=t[r][0](e);if(n)return[n,t[r][1]]}return[null,void 0]},A=function(e){return typeof e=="string"?k(e.trim(),B.string):typeof e=="object"&&e!==null?k(e,B.object):[null,void 0]},m=function(e,t){var r=h(e);return{h:r.h,s:c(r.s+100*t,0,100),l:r.l,a:r.a}},y=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},H=function(e,t){var r=h(e);return{h:r.h,s:r.s,l:c(r.l+100*t,0,100),a:r.a}},_=function(){function e(t){this.parsed=A(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return i(y(this.rgba),2)},e.prototype.isDark=function(){return y(this.rgba)<.5},e.prototype.isLight=function(){return y(this.rgba)>=.5},e.prototype.toHex=function(){return t=v(this.rgba),r=t.r,n=t.g,a=t.b,u=(o=t.a)<1?p(i(255*o)):"","#"+p(r)+p(n)+p(a)+u;var t,r,n,a,o,u},e.prototype.toRgb=function(){return v(this.rgba)},e.prototype.toRgbString=function(){return t=v(this.rgba),r=t.r,n=t.g,a=t.b,(o=t.a)<1?"rgba("+r+", "+n+", "+a+", "+o+")":"rgb("+r+", "+n+", "+a+")";var t,r,n,a,o},e.prototype.toHsl=function(){return I(h(this.rgba))},e.prototype.toHslString=function(){return t=I(h(this.rgba)),r=t.h,n=t.s,a=t.l,(o=t.a)<1?"hsla("+r+", "+n+"%, "+a+"%, "+o+")":"hsl("+r+", "+n+"%, "+a+"%)";var t,r,n,a,o},e.prototype.toHsv=function(){return t=M(this.rgba),{h:i(t.h),s:i(t.s),v:i(t.v),a:i(t.a,3)};var t},e.prototype.invert=function(){return s({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),s(m(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),s(m(this.rgba,-t))},e.prototype.grayscale=function(){return s(m(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),s(H(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),s(H(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?s({r:(r=this.rgba).r,g:r.g,b:r.b,a:t}):i(this.rgba.a,3);var r},e.prototype.hue=function(t){var r=h(this.rgba);return typeof t=="number"?s({h:t,s:r.s,l:r.l,a:r.a}):i(r.h)},e.prototype.isEqual=function(t){return this.toHex()===s(t).toHex()},e}(),s=function(e){return e instanceof _?e:new _(e)};const G=S(E,V("color"))(e=>{const t={primary:{value:"#B20838",opacity:1},secondary:{value:"#FDE047",opacity:1},tertiary:{value:"#FFFFFF",opacity:1},text:{value:"#FFFFFF",opacity:0}}[e.color??"primary"],r=s(t.value).alpha(t.opacity).toHex(),n=s(t.value).darken(.035).alpha(t.opacity).toHex(),a=s(t.value).darken(.075).alpha(t.opacity).toHex(),o=s(t.value).isLight()?x.slate[900]:x.slate[50],u=e.size??"medium";return f`
		background-color: ${r};
		box-shadow: var(--shadow-border), var(--shadow-elevation-0);
		border-radius: 4px;

		font-weight: 500;
		font-size: 14px;
		letter-spacing: -0.01em;
		color: ${o};

		padding-inline: var(--padding-x-${u}-input);
		height: var(--height-${u}-input);
		line-height: var(--height-${u}-input);

		${e.color==="text"?f`
					box-shadow: unset;
					text-decoration: underline;
					text-underline-offset: 3px;
					text-decoration-thickness: 1.5px;
			  `:f``}

		&:hover {
			background-color: ${n};
		}

		&:active {
			background-color: ${a};
		}
	`}),w=({children:e,className:t,color:r="tertiary",...n})=>q(G,{...n,color:r,role:"button",className:z(t,"Button-root"),children:e});try{w.displayName="Button",w.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:{value:"tertiary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{w as B};
//# sourceMappingURL=Button-77e6833e.js.map
