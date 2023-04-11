import{a,j as e}from"./defaultTheme-30e43ede.js";import{I as s}from"./Image-515b8c76.js";import{S as t}from"./StatusMessage-0b6f616f.js";import{s as d}from"./styled-8f152a82.js";import{T as o}from"./Typography-b4c27325.js";import{B as l}from"./Business-55a08437.js";const n=d("div")`
	.Image-root {
		aspect-ratio: 0.75;
		border: none;
	}

	.ProfileCard-info {
		display: grid;
		gap: 0.25rem;

		padding-block: 0.5rem;
		padding-right: 1rem;
	}
`,i=({profile:r})=>r?a(n,{className:"ProfileCard-root",children:[e(s,{}),a("div",{className:"ProfileCard-info",children:[e(o,{variant:"h5",noWrap:!0,children:r.name}),e(t,{IconComponent:l,text:r.jobTitle}),e(o,{color:"primary",children:"Interests"})]})]}):null;try{i.displayName="ProfileCard",i.__docgenInfo={description:"",displayName:"ProfileCard",props:{profile:{defaultValue:null,description:"",name:"profile",required:!1,type:{name:"Employee"}}}}}catch{}export{i as P};
//# sourceMappingURL=ProfileCard-975b0ce4.js.map
