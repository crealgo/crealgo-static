import{e as l,k as d}from"./chance-dbb8c3cf.js";import{j as r,a as f}from"./defaultTheme-30e43ede.js";import{B as u,C as y}from"./Block-81203b25.js";import{P as g}from"./ProfileCard-975b0ce4.js";import{c as k}from"./clsx.m-1229b3e0.js";import{C as G}from"./ContentGrid-f5dd3726.js";import{H as B}from"./Heading-06e530da.js";import{T as P}from"./Text-95875774.js";import{s as _}from"./styled-8f152a82.js";import{c as h}from"./emotion-react.browser.esm-18e2571c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./Image-515b8c76.js";import"./StatusMessage-0b6f616f.js";import"./Typography-b4c27325.js";import"./useThemeProps-cbfa8a8e.js";import"./generateUtilityClasses-0f0148c0.js";import"./Warning-724d5da6.js";import"./createSvgIcon-7fe6f70f.js";import"./Business-55a08437.js";import"./Box-fdcb16a5.js";const C=_("div")(({theme:e})=>h`
		display: grid;

		.ProfilesBlock-profileGroup {
			display: grid;
			row-gap: 1rem;

			.ProfilesBlock-profiles {
				display: grid;
				grid-template-columns: repeat(1, 1fr);
				row-gap: 2rem;

				${e.breakpoints.up("sm")} {
					grid-template-columns: repeat(3, 1fr);
				}

				${e.breakpoints.up("md")} {
					grid-template-columns: repeat(4, 1fr);
				}
			}
		}
	`),s=e=>r(C,{className:k(e.className,"ProfilesBlock-root"),children:Array.isArray(e.profileGroups)?e.profileGroups.map((o,t)=>r(u,{color:2%t===0?"grey":void 0,className:"ProfilesBlock-profileGroup",children:r(y,{children:f(G,{size:"small",children:[r(B,{level:3,children:o.title}),r(P,{variant:"body",children:o.description}),Array.isArray(o.profiles)?r("div",{className:"ProfilesBlock-profiles",children:o.profiles.map((c,m)=>r(g,{profile:c},m))}):null]})})},t)):null});try{s.displayName="ProfilesBlock",s.__docgenInfo={description:"",displayName:"ProfilesBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},profileGroups:{defaultValue:null,description:"",name:"profileGroups",required:!0,type:{name:"EmployeeGroup[]"}}}}}catch{}const Q={component:s},i={args:{title:l.sentence({words:3}),description:l.sentence(),profileGroups:d()}};var a,p,n;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: chance.sentence({
      words: 3
    }),
    description: chance.sentence(),
    profileGroups: generateEmployeeGroups()
  }
}`,...(n=(p=i.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const R=["Default"];export{i as Default,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=ProfilesBlock.stories-8aea273b.js.map
