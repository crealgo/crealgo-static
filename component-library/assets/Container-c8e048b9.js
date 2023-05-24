import{j as i}from"./jsx-runtime-c2efdcba.js";import{_ as l}from"./excludePropsFromForwarding-6c5743cd.js";import{c as s}from"./clsx.m-1229b3e0.js";import{s as o}from"./styled-e2ebe642.js";var p=function(e){return String.raw.apply(String,[{raw:e}].concat([].slice.call(arguments,1)))},m=p;const u=({className:a="",children:e,ref:n,...r})=>i("div",{ref:n,className:s("Container-root",a),...r,children:e}),t=o(u,l("ref","size"))(({theme:a,size:e})=>{const n={small:a.breakpoints.values.md,medium:a.breakpoints.values.lg,large:a.breakpoints.values.xl}[e??"medium"],r=e?`max-width: ${n}px;`:`
			${a.breakpoints.up("md")} {
				max-width: ${a.breakpoints.values.md}px;
			}

			${a.breakpoints.up("lg")} {
				max-width: ${a.breakpoints.values.lg}px;
			}
		`;return m`
		width: 100%;
		margin-inline: auto;
		${r};
	`});try{t.displayName="Container",t.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{t as C,m as a};
//# sourceMappingURL=Container-c8e048b9.js.map
