import{j as l}from"./defaultTheme-30e43ede.js";import{B as o}from"./Button-ebd51bfd.js";import{c as s}from"./colorIterator-9c2a9cac.js";import{s as u}from"./styled-8f152a82.js";import{c as i}from"./emotion-react.browser.esm-18e2571c.js";const m=u(o)(({theme:e,selected:t})=>i`
		border: unset;
		box-shadow: unset;
		text-decoration: ${t?"underline":"unset"};
		text-underline-offset: 2px;
		text-decoration-thickness: 2px;

		${s("text-decoration-color")};
	`),r=({label:e,children:t,selected:a,...n})=>l(m,{selected:a,size:"small",color:a?"tertiary":"text",...n,children:t??e});try{r.displayName="NavItem",r.__docgenInfo={description:"",displayName:"NavItem",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},subItems:{defaultValue:null,description:"",name:"subItems",required:!1,type:{name:"NavItemOptions[]"}}}}}catch{}export{r as N};
//# sourceMappingURL=NavItem-ceba7341.js.map
