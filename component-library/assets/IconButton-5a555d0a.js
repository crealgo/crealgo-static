import{j as d}from"./jsx-runtime-c2efdcba.js";import{c}from"./clsx.m-1229b3e0.js";import{r as p}from"./index-2812c619.js";import{_ as y}from"./excludePropsFromForwarding-6c5743cd.js";import{h as r}from"./defaultTheme-d0849189.js";import{I as f}from"./IconButtonBase-062b793c.js";import{s as v}from"./styled-899f007b.js";import{c as g}from"./emotion-react.browser.esm-511d925c.js";const n=({theme:e,color:t="text"})=>({primary:e.palette.primary.main,secondary:e.palette.secondary.main,tertiary:r(e.palette.common.white,.675),text:"transparent"})[t],i=({theme:e,color:t="text"})=>({primary:e.palette.primary.contrastText,secondary:e.palette.secondary.contrastText,tertiary:e.palette.grey[900],text:e.palette.grey[900]})[t],l=({theme:e,color:t="text"})=>({primary:e.palette.primary.dark,secondary:e.palette.secondary.dark,tertiary:r(e.palette.common.white,.95),text:r(e.palette.common.white,.25)})[t],o=({theme:e,size:t="medium"})=>({small:{height:"2.125rem",fontSize:"0.875rem",padding:"0px 0.875rem"},medium:{height:"2.5rem",fontSize:"1rem",padding:"0px 1rem"},large:{height:"2.875rem",fontSize:"1.125rem",padding:"0px 1.125rem"}})[t];try{n.displayName="getButtonColors",n.__docgenInfo={description:"",displayName:"getButtonColors",props:{color:{defaultValue:{value:"text"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"Theme"}}}}}catch{}try{i.displayName="getButtonTextColors",i.__docgenInfo={description:"",displayName:"getButtonTextColors",props:{color:{defaultValue:{value:"text"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"Theme"}}}}}catch{}try{l.displayName="getButtonHoverColors",l.__docgenInfo={description:"",displayName:"getButtonHoverColors",props:{color:{defaultValue:{value:"text"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"Theme"}}}}}catch{}try{o.displayName="getButtonSizes",o.__docgenInfo={description:"",displayName:"getButtonSizes",props:{color:{defaultValue:{value:"text"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"Theme"}}}}}catch{}const _=v(f,y("color"))(({theme:e,color:t="text",size:a="medium"})=>g`
		font-weight: bold;
		background-color: ${n({theme:e,color:t})};

		${o({theme:e,size:a})}
		padding: 0;

		&:hover,
		&:focus-visible {
			background-color: ${l({theme:e,color:t})};
		}
	`),u=p.forwardRef(({children:e,className:t,color:a="tertiary",...s},m)=>d(_,{...s,color:a,role:"button",ref:m,className:c(t,"IconButton-root"),children:e}));u.displayName="IconButton";try{u.displayName="IconButton",u.__docgenInfo={description:"",displayName:"IconButton",props:{color:{defaultValue:{value:"tertiary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"ElementType"}}}}}catch{}export{u as I};
//# sourceMappingURL=IconButton-5a555d0a.js.map
