import{c as n,r as d}from"./chance-e22ba91b.js";import{j as e,a as f}from"./jsx-runtime-c2efdcba.js";import{B as u,C as y}from"./Container-a6f3098c.js";import{P as g}from"./ProfileCard-1ad00edd.js";import{c as k}from"./clsx.m-1229b3e0.js";import{C as G}from"./ContentGrid-8e0a1ab6.js";import{H as B}from"./Heading-0b105ff6.js";import{T as P}from"./Text-ba2fdcf0.js";import{s as _}from"./styled-e2ebe642.js";import{c as h}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./Image-cc1fdedc.js";import"./StatusMessage-ae80a29c.js";import"./Typography-ce4bf3ba.js";import"./defaultTheme-8fe9975f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./useThemeProps-debefb1f.js";import"./generateUtilityClasses-bdae82bf.js";import"./Warning-842bfe40.js";import"./createSvgIcon-45dd28ac.js";import"./Business-1487cf7e.js";import"./Box-4b73dcd4.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";const C=_("div")(({theme:r})=>h`
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
	`),s=r=>e(C,{className:k(r.className,"ProfilesBlock-root"),children:Array.isArray(r.profileGroups)?r.profileGroups.map((o,t)=>e(u,{color:2%t===0?"grey":void 0,className:"ProfilesBlock-profileGroup",children:e(y,{children:f(G,{size:"small",children:[e(B,{level:3,children:o.title}),e(P,{variant:"body",children:o.description}),Array.isArray(o.profiles)?e("div",{className:"ProfilesBlock-profiles",children:o.profiles.map((m,c)=>e(g,{profile:m},c))}):null]})})},t)):null});try{s.displayName="ProfilesBlock",s.__docgenInfo={description:"",displayName:"ProfilesBlock",props:{profileGroups:{defaultValue:null,description:"",name:"profileGroups",required:!0,type:{name:"EmployeeGroup[]"}}}}}catch{}const W={component:s},i={args:{title:n.sentence({words:3}),profileGroups:d()}};var l,a,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: chance.sentence({
      words: 3
    }),
    // description: chance.sentence(),
    profileGroups: generateEmployeeGroups()
  }
}`,...(p=(a=i.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const X=["Default"];export{i as Default,X as __namedExportsOrder,W as default};
//# sourceMappingURL=ProfilesBlock.stories-889a8d82.js.map
