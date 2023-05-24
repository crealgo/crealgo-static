import{c as n,r as d}from"./chance-56e14726.js";import{j as e,a as f}from"./jsx-runtime-c2efdcba.js";import{B as u}from"./Block-7499e844.js";import{P as y}from"./ProfileCard-cd671cee.js";import{c as g}from"./clsx.m-1229b3e0.js";import{C as k}from"./Container-c8e048b9.js";import{C as G}from"./ContentGrid-f72bdd55.js";import{H as B}from"./Heading-b0f300b8.js";import{T as P}from"./Text-005051e4.js";import{s as _}from"./styled-e2ebe642.js";import{c as h}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./Image-f19a3ca7.js";import"./Typography-ce4bf3ba.js";import"./defaultTheme-8fe9975f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./useThemeProps-debefb1f.js";import"./generateUtilityClasses-bdae82bf.js";import"./Warning-7be2acc4.js";import"./createSvgIcon-45dd28ac.js";import"./Box-4b73dcd4.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";const C=_("div")(({theme:r})=>h`
		display: grid;

		.ProfilesBlock-profileGroup {
			display: grid;
			row-gap: 1rem;

			.ProfilesBlock-profiles {
				display: grid;
				grid-template-columns: repeat(1, 1fr);
				row-gap: 2rem;

				${r.breakpoints.up("sm")} {
					grid-template-columns: repeat(3, 1fr);
				}

				${r.breakpoints.up("md")} {
					grid-template-columns: repeat(4, 1fr);
				}
			}
		}
	`),i=r=>e(C,{className:g(r.className,"ProfilesBlock-root"),children:Array.isArray(r.profileGroups)?r.profileGroups.map((o,t)=>e(u,{color:2%t===0?"grey":void 0,className:"ProfilesBlock-profileGroup",children:e(k,{children:f(G,{size:"small",children:[e(B,{level:3,children:o.title}),e(P,{variant:"body",children:o.description}),Array.isArray(o.profiles)?e("div",{className:"ProfilesBlock-profiles",children:o.profiles.map((m,c)=>e(y,{profile:m},c))}):null]})})},t)):null});try{i.displayName="ProfilesBlock",i.__docgenInfo={description:"",displayName:"ProfilesBlock",props:{profileGroups:{defaultValue:null,description:"",name:"profileGroups",required:!0,type:{name:"EmployeeGroup[]"}}}}}catch{}const U={component:i},s={args:{title:n.sentence({words:3}),profileGroups:d()}};var l,a,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: chance.sentence({
      words: 3
    }),
    // description: chance.sentence(),
    profileGroups: generateEmployeeGroups()
  }
}`,...(p=(a=s.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const W=["Default"];export{s as Default,W as __namedExportsOrder,U as default};
//# sourceMappingURL=ProfilesBlock.stories-3f03834f.js.map
