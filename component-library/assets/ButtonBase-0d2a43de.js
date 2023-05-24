import{_ as Y}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import{_ as ee}from"./defaultTheme-8fe9975f.js";import{r as a,R as X}from"./index-2812c619.js";import{c as E}from"./clsx.m-1229b3e0.js";import{s as te}from"./styled-e2ebe642.js";import{b as me}from"./useThemeProps-debefb1f.js";import{j as U,a as Ue}from"./jsx-runtime-c2efdcba.js";import{a as be,g as _e,c as ze}from"./generateUtilityClasses-bdae82bf.js";import{k as ne}from"./emotion-react.browser.esm-511d925c.js";import{_ as je,a as Oe}from"./assertThisInitialized-e784747a.js";import{u as ue,a as Ke}from"./useIsFocusVisible-4c83d0fb.js";import{u as Xe}from"./useEnhancedEffect-767500c3.js";function H(e){const o=a.useRef(e);return Xe(()=>{o.current=e}),a.useCallback((...s)=>(0,o.current)(...s),[])}const ce=X.createContext(null);function oe(e,o){var s=function(t){return o&&a.isValidElement(t)?o(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=s(n)}),l}function Ye(e,o){e=e||{},o=o||{};function s(d){return d in o?o[d]:e[d]}var l=Object.create(null),n=[];for(var t in e)t in o?n.length&&(l[t]=n,n=[]):n.push(t);var i,c={};for(var u in o){if(l[u])for(i=0;i<l[u].length;i++){var p=l[u][i];c[l[u][i]]=s(p)}c[u]=s(u)}for(i=0;i<n.length;i++)c[n[i]]=s(n[i]);return c}function $(e,o,s){return s[o]!=null?s[o]:e.props[o]}function Ae(e,o){return oe(e.children,function(s){return a.cloneElement(s,{onExited:o.bind(null,s),in:!0,appear:$(s,"appear",e),enter:$(s,"enter",e),exit:$(s,"exit",e)})})}function We(e,o,s){var l=oe(e.children),n=Ye(o,l);return Object.keys(n).forEach(function(t){var i=n[t];if(a.isValidElement(i)){var c=t in o,u=t in l,p=o[t],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[t]=a.cloneElement(i,{onExited:s.bind(null,i),in:!0,exit:$(i,"exit",e),enter:$(i,"enter",e)}):!u&&c&&!d?n[t]=a.cloneElement(i,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(i,{onExited:s.bind(null,i),in:p.props.in,exit:$(i,"exit",e),enter:$(i,"enter",e)}))}}),n}var He=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},Ge={component:"div",childFactory:function(o){return o}},ie=function(e){je(o,e);function o(l,n){var t;t=e.call(this,l,n)||this;var i=t.handleExited.bind(Oe(t));return t.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},t}var s=o.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(n,t){var i=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Ae(n,c):We(n,i,c),firstRender:!1}},s.handleExited=function(n,t){var i=oe(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=Y({},c.children);return delete u[n.key],{children:u}}))},s.render=function(){var n=this.props,t=n.component,i=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=He(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,t===null?X.createElement(ce.Provider,{value:u},p):X.createElement(ce.Provider,{value:u},X.createElement(t,c,p))},o}(X.Component);ie.propTypes={};ie.defaultProps=Ge;const qe=ie;function Je(e){const{className:o,classes:s,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:i,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=E(o,s.ripple,s.rippleVisible,l&&s.ripplePulsate),B={width:i,height:i,top:-(i/2)+t,left:-(i/2)+n},h=E(s.child,d&&s.childLeaving,l&&s.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),U("span",{className:b,style:B,children:U("span",{className:h})})}const Qe=be("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=Qe,Ze=["center","classes","className"];let G=e=>e,pe,fe,de,he;const Z=550,et=80,tt=ne(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),nt=ne(fe||(fe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ot=ne(de||(de=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),it=te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),rt=te(Je,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
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
`),m.rippleVisible,tt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,nt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ot,({theme:e})=>e.transitions.easing.easeInOut),st=a.forwardRef(function(o,s){const l=me({props:o,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:i}=l,c=ee(l,Ze),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),B=a.useRef(null),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{clearTimeout(B.current)},[]);const _=a.useCallback(f=>{const{pulsate:M,rippleX:T,rippleY:D,rippleSize:I,cb:j}=f;p(C=>[...C,U(rt,{classes:{ripple:E(t.ripple,m.ripple),rippleVisible:E(t.rippleVisible,m.rippleVisible),ripplePulsate:E(t.ripplePulsate,m.ripplePulsate),child:E(t.child,m.child),childLeaving:E(t.childLeaving,m.childLeaving),childPulsate:E(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:T,rippleY:D,rippleSize:I},d.current)]),d.current+=1,g.current=j},[t]),F=a.useCallback((f={},M={},T=()=>{})=>{const{pulsate:D=!1,center:I=n||M.pulsate,fakeElement:j=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const C=j?null:R.current,P=C?C.getBoundingClientRect():{width:0,height:0,left:0,top:0};let x,S,k;if(I||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)x=Math.round(P.width/2),S=Math.round(P.height/2);else{const{clientX:L,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;x=Math.round(L-P.left),S=Math.round(V-P.top)}if(I)k=Math.sqrt((2*P.width**2+P.height**2)/3),k%2===0&&(k+=1);else{const L=Math.max(Math.abs((C?C.clientWidth:0)-x),x)*2+2,V=Math.max(Math.abs((C?C.clientHeight:0)-S),S)*2+2;k=Math.sqrt(L**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{_({pulsate:D,rippleX:x,rippleY:S,rippleSize:k,cb:T})},B.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},et)):_({pulsate:D,rippleX:x,rippleY:S,rippleSize:k,cb:T})},[n,_]),z=a.useCallback(()=>{F({},{pulsate:!0})},[F]),N=a.useCallback((f,M)=>{if(clearTimeout(B.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,B.current=setTimeout(()=>{N(f,M)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=M},[]);return a.useImperativeHandle(s,()=>({pulsate:z,start:F,stop:N}),[z,F,N]),U(it,Y({className:E(m.root,t.root,i),ref:R},c,{children:U(qe,{component:null,exit:!0,children:u})}))}),at=st;function lt(e){return _e("MuiButtonBase",e)}const ut=be("MuiButtonBase",["root","disabled","focusVisible"]),ct=ut,pt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ft=e=>{const{disabled:o,focusVisible:s,focusVisibleClassName:l,classes:n}=e,i=ze({root:["root",o&&"disabled",s&&"focusVisible"]},lt,n);return s&&l&&(i.root+=` ${l}`),i},dt=te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ct.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ht=a.forwardRef(function(o,s){const l=me({props:o,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:B="a",onBlur:h,onClick:R,onContextMenu:_,onDragLeave:F,onFocus:z,onFocusVisible:N,onKeyDown:f,onKeyUp:M,onMouseDown:T,onMouseLeave:D,onMouseUp:I,onTouchEnd:j,onTouchMove:C,onTouchStart:P,tabIndex:x=0,TouchRippleProps:S,touchRippleRef:k,type:L}=l,V=ee(l,pt),O=a.useRef(null),y=a.useRef(null),ge=ue(y,k),{isFocusVisibleRef:re,onFocus:Re,onBlur:Me,ref:Te}=Ke(),[w,A]=a.useState(!1);p&&w&&A(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{A(!0),O.current.focus()}}),[]);const[q,Ce]=a.useState(!1);a.useEffect(()=>{Ce(!0)},[]);const ye=q&&!d&&!p;a.useEffect(()=>{w&&b&&!d&&q&&y.current.pulsate()},[d,b,w,q]);function v(r,ae,Ie=g){return H(le=>(ae&&ae(le),!Ie&&y.current&&y.current[r](le),!0))}const Ee=v("start",T),xe=v("stop",_),Ve=v("stop",F),ve=v("stop",I),Be=v("stop",r=>{w&&r.preventDefault(),D&&D(r)}),Pe=v("start",P),Se=v("stop",j),ke=v("stop",C),De=v("stop",r=>{Me(r),re.current===!1&&A(!1),h&&h(r)},!1),Le=H(r=>{O.current||(O.current=r.currentTarget),Re(r),re.current===!0&&(A(!0),N&&N(r)),z&&z(r)}),J=()=>{const r=O.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Q=a.useRef(!1),we=H(r=>{b&&!Q.current&&w&&y.current&&r.key===" "&&(Q.current=!0,y.current.stop(r,()=>{y.current.start(r)})),r.target===r.currentTarget&&J()&&r.key===" "&&r.preventDefault(),f&&f(r),r.target===r.currentTarget&&J()&&r.key==="Enter"&&!p&&(r.preventDefault(),R&&R(r))}),$e=H(r=>{b&&r.key===" "&&y.current&&w&&!r.defaultPrevented&&(Q.current=!1,y.current.stop(r,()=>{y.current.pulsate(r)})),M&&M(r),R&&r.target===r.currentTarget&&J()&&r.key===" "&&!r.defaultPrevented&&R(r)});let W=u;W==="button"&&(V.href||V.to)&&(W=B);const K={};W==="button"?(K.type=L===void 0?"button":L,K.disabled=p):(!V.href&&!V.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Fe=ue(s,Te,O),se=Y({},l,{centerRipple:t,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:x,focusVisible:w}),Ne=ft(se);return Ue(dt,Y({as:W,className:E(Ne.root,c),ownerState:se,onBlur:De,onClick:R,onContextMenu:xe,onFocus:Le,onKeyDown:we,onKeyUp:$e,onMouseDown:Ee,onMouseLeave:Be,onMouseUp:ve,onDragLeave:Ve,onTouchEnd:Se,onTouchMove:ke,onTouchStart:Pe,ref:Fe,tabIndex:p?-1:x,type:L},K,V,{children:[i,ye?U(at,Y({ref:ge,center:t},S)):null]}))}),Pt=ht;export{Pt as M,ce as T,H as u};
//# sourceMappingURL=ButtonBase-0d2a43de.js.map
