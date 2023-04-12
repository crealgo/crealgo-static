import{s as t}from"./styled-899f007b.js";import{c as a}from"./emotion-react.browser.esm-511d925c.js";const l="10%",r=t("img")(({theme:e,hasBorder:o,elevation:n=0})=>a`
		box-sizing: border-box;
		width: 100%;
		border-radius: ${l};
		aspect-ratio: 9/19.5;
		background-color: ${e.palette.grey[300]};

		${o&&a`
			border: solid 0.5rem ${e.palette.grey[100]};
		`}
		box-shadow: ${e.shadows[n]};
	`);r.defaultProps={className:"Phone-root"};try{r.displayName="Phone",r.__docgenInfo={description:"",displayName:"Phone",props:{hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},elevation:{defaultValue:null,description:"",name:"elevation",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((((instance: HTMLImageElement | null) => void) | RefObject<HTMLImageElement>) & (string | ((instance: HTMLImageElement | null) => void) | RefObject<...>)) | null"}}}}}catch{}export{r as P};
//# sourceMappingURL=Phone-5a2a9802.js.map
