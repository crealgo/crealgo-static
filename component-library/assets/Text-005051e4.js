import{s}from"./styled-e2ebe642.js";import{c as e}from"./emotion-react.browser.esm-511d925c.js";const a=s("p")(({theme:t,contrast:i,variant:l,size:n})=>{const o={small:e`
				font-size: 14px;
				line-height: 21px;
			`,medium:e`
				font-size: 16px;
				line-height: 24px;
			`,large:e`
				font-size: 19px;
				line-height: 28px;

				${t.breakpoints.up("md")} {
					font-size: 21px;
					line-height: 32px;
				}
			`}[n??"medium"],r={body:"#111827",caption:"#6b7280"}[l??"body"];return e`
			font-family: Inter;
			font-weight: 400;
			margin: 0;
			${o}
			color: ${i?"white":r}
		`});a.defaultProps={className:"Text-root"};try{a.displayName="Text",a.__docgenInfo={description:"",displayName:"Text",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"caption"'}]}},contrast:{defaultValue:null,description:"",name:"contrast",required:!1,type:{name:"boolean"}}}}}catch{}export{a as T};
//# sourceMappingURL=Text-005051e4.js.map
