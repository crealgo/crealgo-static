import{a as t,j as r}from"./defaultTheme-30e43ede.js";import{c as m}from"./clsx.m-1229b3e0.js";import{A as n}from"./Avatar-ff3aae0b.js";import{T as o}from"./Typography-b4c27325.js";import{L as c}from"./Link-4f63bb94.js";import{s as i}from"./styled-8f152a82.js";const d=i("div")`
	display: grid;
	column-gap: 0.75rem;
	grid-template-columns: auto 1fr;

	align-items: center;

	& .Avatar-root {
		width: 2.875rem;
		aspect-ratio: 1;
	}

	& .Profile-content {
		display: grid;
		grid-template-columns: 1fr;

		.Profile-username {
			margin-top: -3px;
		}
	}
`,s=({className:e,profile:a})=>t(d,{className:m(e,"Profile-root"),children:[r(n,{src:a==null?void 0:a.avatar,alt:a==null?void 0:a.name}),t("div",{className:"Profile-content",children:[r(o,{className:"Profile-name",variant:"body2",fontWeight:"bold",children:a==null?void 0:a.name}),r(c,{className:"Profile-username",variant:"body2",children:a==null?void 0:a.username})]})]});try{s.displayName="Profile",s.__docgenInfo={description:"",displayName:"Profile",props:{profile:{defaultValue:null,description:"",name:"profile",required:!1,type:{name:"Person"}}}}}catch{}export{s as P};
//# sourceMappingURL=Profile-bf946036.js.map
