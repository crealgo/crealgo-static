import{j as n}from"./jsx-runtime-c2efdcba.js";import{B as o}from"./Button-b3c0cd51.js";import{c as s}from"./colorIterator-86c98f12.js";import{s as u}from"./styled-899f007b.js";import{c as i}from"./emotion-react.browser.esm-511d925c.js";const m=u(o)(({theme:e,selected:t})=>i`
		border: unset;
		box-shadow: unset;
		text-decoration: ${t?"underline":"unset"};
		text-underline-offset: 2px;
		text-decoration-thickness: 2px;

		${s("text-decoration-color")};
	`),r=({label:e,children:t,selected:a,...l})=>n(m,{selected:a,size:"small",color:a?"tertiary":"text",...l,children:t??e});try{r.displayName="NavItem",r.__docgenInfo={description:"",displayName:"NavItem",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},subItems:{defaultValue:null,description:"",name:"subItems",required:!1,type:{name:"NavItemOptions[]"}}}}}catch{}export{r as N};
//# sourceMappingURL=NavItem-49d1a87f.js.map
