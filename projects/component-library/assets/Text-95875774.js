import{s as r}from"./styled-8f152a82.js";import{c as e}from"./emotion-react.browser.esm-18e2571c.js";const t=r("p")(({theme:a,variant:i,size:l})=>{const n={small:e`
			font-size: 14px;
			line-height: 21px;
		`,medium:e`
			font-size: 16px;
			line-height: 24px;
		`,large:e`
			font-size: 19px;
			line-height: 28px;

			${a.breakpoints.up("md")} {
				font-size: 21px;
				line-height: 32px;
			}
		`}[l??"medium"],o={body:e`
			color: #111827;
		`,caption:e`
			color: #6b7280;
		`}[i??"body"];return e`
		font-family: Inter;
		font-weight: 400;
		margin: 0;
		${n}
		${o}
	`});t.defaultProps={className:"Text-root"};try{t.displayName="Text",t.__docgenInfo={description:"",displayName:"Text",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"caption"'}]}}}}}catch{}export{t as T};
//# sourceMappingURL=Text-95875774.js.map
