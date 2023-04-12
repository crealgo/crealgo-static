import{j as t}from"./jsx-runtime-c2efdcba.js";import{_ as o}from"./excludePropsFromForwarding-6c5743cd.js";import{s as d}from"./styled-899f007b.js";import{c as s}from"./emotion-react.browser.esm-511d925c.js";const m=e=>t("div",{...e,className:`Block-root ${e.className}`,children:e.children}),i=d(m,o("rounded","color"))(e=>{const a={default:"transparent",primary:e.theme.palette.primary.light,secondary:e.theme.palette.secondary.light,grey:e.theme.palette.grey[100]}[e.color??"default"];return s`
		background-color: ${a};
		position: relative;

		padding-block: 4rem;
		padding-inline: 1.5rem;

		${e.theme.breakpoints.up("md")} {
			padding-block: 7rem;
			padding-inline: 2rem;

			border-radius: ${e.rounded?"0.5rem":"0rem"};
		}

		${e.theme.breakpoints.up("xl")} {
			padding-inline: 4rem;
		}
	`});try{i.displayName="Block",i.__docgenInfo={description:"",displayName:"Block",props:{rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}}}}}catch{}const c=({className:e,children:a,ref:r,...n})=>t("div",{ref:r,className:`Container-root ${e}`,...n,children:a}),l=d(c,o("ref","size"))(({theme:e,size:a})=>{const r={small:e.breakpoints.values.md,medium:e.breakpoints.values.lg,large:e.breakpoints.values.xl}[a??"medium"],n=a?`
			max-width: ${r}px;
		`:`
		${e.breakpoints.up("md")} {
			max-width: ${e.breakpoints.values.md}px;
		}

		${e.breakpoints.up("lg")} {
			max-width: ${e.breakpoints.values.lg}px;
		}

		${e.breakpoints.up("xl")} {
			max-width: ${e.breakpoints.values.xl}px;
		}
	`;return s`
		width: 100%;
		margin-inline: auto;
		${n}
	`});try{l.displayName="Container",l.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{i as B,l as C};
//# sourceMappingURL=Container-f017ee1c.js.map
