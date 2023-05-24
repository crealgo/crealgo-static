import{j as i}from"./jsx-runtime-c2efdcba.js";import{a as t}from"./Container-c8e048b9.js";import{c as d}from"./clsx.m-1229b3e0.js";import{_ as s}from"./excludePropsFromForwarding-6c5743cd.js";import{s as p}from"./styled-e2ebe642.js";const u=p("div",s("isRounded","color"))(({theme:e,color:a,hasNoDefaultMargin:r,isRounded:n=!1})=>{const o={default:"transparent",primary:e.palette.primary.light,secondary:e.palette.secondary.light,grey:e.palette.grey[100]}[a??"default"];return t`
		background-color: ${o};
		position: relative;

		padding-block: 4rem;
		padding-inline: 1.5rem;

		${e.breakpoints.up("md")} {
			padding-block: 7rem;
			padding-inline: 2rem;
			margin-inline: ${r?"unset":"0.5rem"};
			border-radius: ${n?"0.5rem":"0rem"};
		}

		${e.breakpoints.up("xl")} {
			padding-inline: 4rem;
		}
	`}),l=({className:e,children:a,...r})=>i(u,{...r,className:d("Block-root",e),children:a});try{l.displayName="Block",l.__docgenInfo={description:"",displayName:"Block",props:{hasNoDefaultMargin:{defaultValue:null,description:"Disables the block's inline margin",name:"hasNoDefaultMargin",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"grey"'}]}},isRounded:{defaultValue:null,description:"",name:"isRounded",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}export{l as B};
//# sourceMappingURL=Block-7499e844.js.map
