import{_ as Y}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import{_ as ee}from"./defaultTheme-8fe9975f.js";import{r as s,R as X}from"./index-2812c619.js";import{c as C}from"./clsx.m-1229b3e0.js";import{s as te}from"./styled-e2ebe642.js";import{b as me}from"./useThemeProps-debefb1f.js";import{j as U,a as Ue}from"./jsx-runtime-c2efdcba.js";import{a as be,g as _e,c as ze}from"./generateUtilityClasses-bdae82bf.js";import{k as ne}from"./emotion-react.browser.esm-511d925c.js";import{_ as je,a as Oe}from"./assertThisInitialized-e784747a.js";import{u as ue,a as Ke}from"./useIsFocusVisible-4c83d0fb.js";const Xe=typeof window<"u"?s.useLayoutEffect:s.useEffect,Ye=Xe;function H(e){const o=s.useRef(e);return Ye(()=>{o.current=e}),s.useCallback((...a)=>(0,o.current)(...a),[])}const ce=X.createContext(null);function oe(e,o){var a=function(t){return o&&s.isValidElement(t)?o(t):t},l=Object.create(null);return e&&s.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=a(n)}),l}function Ae(e,o){e=e||{},o=o||{};function a(d){return d in o?o[d]:e[d]}var l=Object.create(null),n=[];for(var t in e)t in o?n.length&&(l[t]=n,n=[]):n.push(t);var i,c={};for(var u in o){if(l[u])for(i=0;i<l[u].length;i++){var p=l[u][i];c[l[u][i]]=a(p)}c[u]=a(u)}for(i=0;i<n.length;i++)c[n[i]]=a(n[i]);return c}function $(e,o,a){return a[o]!=null?a[o]:e.props[o]}function We(e,o){return oe(e.children,function(a){return s.cloneElement(a,{onExited:o.bind(null,a),in:!0,appear:$(a,"appear",e),enter:$(a,"enter",e),exit:$(a,"exit",e)})})}function He(e,o,a){var l=oe(e.children),n=Ae(o,l);return Object.keys(n).forEach(function(t){var i=n[t];if(s.isValidElement(i)){var c=t in o,u=t in l,p=o[t],d=s.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[t]=s.cloneElement(i,{onExited:a.bind(null,i),in:!0,exit:$(i,"exit",e),enter:$(i,"enter",e)}):!u&&c&&!d?n[t]=s.cloneElement(i,{in:!1}):u&&c&&s.isValidElement(p)&&(n[t]=s.cloneElement(i,{onExited:a.bind(null,i),in:p.props.in,exit:$(i,"exit",e),enter:$(i,"enter",e)}))}}),n}var Ge=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},qe={component:"div",childFactory:function(o){return o}},ie=function(e){je(o,e);function o(l,n){var t;t=e.call(this,l,n)||this;var i=t.handleExited.bind(Oe(t));return t.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},t}var a=o.prototype;return a.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},a.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(n,t){var i=t.children,c=t.handleExited,u=t.firstRender;return{children:u?We(n,c):He(n,i,c),firstRender:!1}},a.handleExited=function(n,t){var i=oe(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=Y({},c.children);return delete u[n.key],{children:u}}))},a.render=function(){var n=this.props,t=n.component,i=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=Ge(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,t===null?X.createElement(ce.Provider,{value:u},p):X.createElement(ce.Provider,{value:u},X.createElement(t,c,p))},o}(X.Component);ie.propTypes={};ie.defaultProps=qe;const Je=ie;function Qe(e){const{className:o,classes:a,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:i,in:c,onExited:u,timeout:p}=e,[d,g]=s.useState(!1),b=C(o,a.ripple,a.rippleVisible,l&&a.ripplePulsate),B={width:i,height:i,top:-(i/2)+t,left:-(i/2)+n},h=C(a.child,d&&a.childLeaving,l&&a.childPulsate);return!c&&!d&&g(!0),s.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),U("span",{className:b,style:B,children:U("span",{className:h})})}const Ze=be("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=Ze,et=["center","classes","className"];let G=e=>e,pe,fe,de,he;const Z=550,tt=80,nt=ne(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ot=ne(fe||(fe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),it=ne(de||(de=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),rt=te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),st=te(Qe,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,nt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,ot,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,it,({theme:e})=>e.transitions.easing.easeInOut),at=s.forwardRef(function(o,a){const l=me({props:o,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:i}=l,c=ee(l,et),[u,p]=s.useState([]),d=s.useRef(0),g=s.useRef(null);s.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=s.useRef(!1),B=s.useRef(null),h=s.useRef(null),R=s.useRef(null);s.useEffect(()=>()=>{clearTimeout(B.current)},[]);const _=s.useCallback(f=>{const{pulsate:M,rippleX:y,rippleY:w,rippleSize:I,cb:j}=f;p(E=>[...E,U(st,{classes:{ripple:C(t.ripple,m.ripple),rippleVisible:C(t.rippleVisible,m.rippleVisible),ripplePulsate:C(t.ripplePulsate,m.ripplePulsate),child:C(t.child,m.child),childLeaving:C(t.childLeaving,m.childLeaving),childPulsate:C(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:y,rippleY:w,rippleSize:I},d.current)]),d.current+=1,g.current=j},[t]),F=s.useCallback((f={},M={},y=()=>{})=>{const{pulsate:w=!1,center:I=n||M.pulsate,fakeElement:j=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const E=j?null:R.current,P=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let x,S,k;if(I||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)x=Math.round(P.width/2),S=Math.round(P.height/2);else{const{clientX:D,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;x=Math.round(D-P.left),S=Math.round(V-P.top)}if(I)k=Math.sqrt((2*P.width**2+P.height**2)/3),k%2===0&&(k+=1);else{const D=Math.max(Math.abs((E?E.clientWidth:0)-x),x)*2+2,V=Math.max(Math.abs((E?E.clientHeight:0)-S),S)*2+2;k=Math.sqrt(D**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{_({pulsate:w,rippleX:x,rippleY:S,rippleSize:k,cb:y})},B.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},tt)):_({pulsate:w,rippleX:x,rippleY:S,rippleSize:k,cb:y})},[n,_]),z=s.useCallback(()=>{F({},{pulsate:!0})},[F]),N=s.useCallback((f,M)=>{if(clearTimeout(B.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,B.current=setTimeout(()=>{N(f,M)});return}h.current=null,p(y=>y.length>0?y.slice(1):y),g.current=M},[]);return s.useImperativeHandle(a,()=>({pulsate:z,start:F,stop:N}),[z,F,N]),U(rt,Y({className:C(m.root,t.root,i),ref:R},c,{children:U(Je,{component:null,exit:!0,children:u})}))}),lt=at;function ut(e){return _e("MuiButtonBase",e)}const ct=be("MuiButtonBase",["root","disabled","focusVisible"]),pt=ct,ft=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],dt=e=>{const{disabled:o,focusVisible:a,focusVisibleClassName:l,classes:n}=e,i=ze({root:["root",o&&"disabled",a&&"focusVisible"]},ut,n);return a&&l&&(i.root+=` ${l}`),i},ht=te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${pt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),mt=s.forwardRef(function(o,a){const l=me({props:o,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:B="a",onBlur:h,onClick:R,onContextMenu:_,onDragLeave:F,onFocus:z,onFocusVisible:N,onKeyDown:f,onKeyUp:M,onMouseDown:y,onMouseLeave:w,onMouseUp:I,onTouchEnd:j,onTouchMove:E,onTouchStart:P,tabIndex:x=0,TouchRippleProps:S,touchRippleRef:k,type:D}=l,V=ee(l,ft),O=s.useRef(null),T=s.useRef(null),ge=ue(T,k),{isFocusVisibleRef:re,onFocus:Re,onBlur:Me,ref:ye}=Ke(),[L,A]=s.useState(!1);p&&L&&A(!1),s.useImperativeHandle(n,()=>({focusVisible:()=>{A(!0),O.current.focus()}}),[]);const[q,Ee]=s.useState(!1);s.useEffect(()=>{Ee(!0)},[]);const Te=q&&!d&&!p;s.useEffect(()=>{L&&b&&!d&&q&&T.current.pulsate()},[d,b,L,q]);function v(r,ae,Ie=g){return H(le=>(ae&&ae(le),!Ie&&T.current&&T.current[r](le),!0))}const Ce=v("start",y),xe=v("stop",_),Ve=v("stop",F),ve=v("stop",I),Be=v("stop",r=>{L&&r.preventDefault(),w&&w(r)}),Pe=v("start",P),Se=v("stop",j),ke=v("stop",E),we=v("stop",r=>{Me(r),re.current===!1&&A(!1),h&&h(r)},!1),De=H(r=>{O.current||(O.current=r.currentTarget),Re(r),re.current===!0&&(A(!0),N&&N(r)),z&&z(r)}),J=()=>{const r=O.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Q=s.useRef(!1),Le=H(r=>{b&&!Q.current&&L&&T.current&&r.key===" "&&(Q.current=!0,T.current.stop(r,()=>{T.current.start(r)})),r.target===r.currentTarget&&J()&&r.key===" "&&r.preventDefault(),f&&f(r),r.target===r.currentTarget&&J()&&r.key==="Enter"&&!p&&(r.preventDefault(),R&&R(r))}),$e=H(r=>{b&&r.key===" "&&T.current&&L&&!r.defaultPrevented&&(Q.current=!1,T.current.stop(r,()=>{T.current.pulsate(r)})),M&&M(r),R&&r.target===r.currentTarget&&J()&&r.key===" "&&!r.defaultPrevented&&R(r)});let W=u;W==="button"&&(V.href||V.to)&&(W=B);const K={};W==="button"?(K.type=D===void 0?"button":D,K.disabled=p):(!V.href&&!V.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Fe=ue(a,ye,O),se=Y({},l,{centerRipple:t,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:x,focusVisible:L}),Ne=dt(se);return Ue(ht,Y({as:W,className:C(Ne.root,c),ownerState:se,onBlur:we,onClick:R,onContextMenu:xe,onFocus:De,onKeyDown:Le,onKeyUp:$e,onMouseDown:Ce,onMouseLeave:Be,onMouseUp:ve,onDragLeave:Ve,onTouchEnd:Se,onTouchMove:ke,onTouchStart:Pe,ref:Fe,tabIndex:p?-1:x,type:D},K,V,{children:[i,Te?U(lt,Y({ref:ge,center:t},S)):null]}))}),Pt=mt;export{Pt as M,ce as T,H as a,Ye as u};
//# sourceMappingURL=ButtonBase-7c1dc156.js.map
