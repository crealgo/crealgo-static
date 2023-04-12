import{c as l,r as d}from"./chance-a681a54c.js";import{j as e,a as f}from"./jsx-runtime-c2efdcba.js";import{B as u,C as y}from"./Container-f017ee1c.js";import{P as g}from"./ProfileCard-546e27de.js";import{c as k}from"./clsx.m-1229b3e0.js";import{C as G}from"./ContentGrid-965f1055.js";import{H as B}from"./Heading-8378740d.js";import{T as P}from"./Text-40b59492.js";import{s as _}from"./styled-899f007b.js";import{c as h}from"./emotion-react.browser.esm-511d925c.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./Image-d662c5af.js";import"./StatusMessage-4416f97a.js";import"./Typography-e61b6c49.js";import"./defaultTheme-d0849189.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./useThemeProps-4c706523.js";import"./generateUtilityClasses-bdae82bf.js";import"./Warning-89853c41.js";import"./createSvgIcon-4ae69272.js";import"./Business-241092f9.js";import"./Box-18209bee.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";const C=_("div")(({theme:r})=>h`
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
	`),s=r=>e(C,{className:k(r.className,"ProfilesBlock-root"),children:Array.isArray(r.profileGroups)?r.profileGroups.map((o,t)=>e(u,{color:2%t===0?"grey":void 0,className:"ProfilesBlock-profileGroup",children:e(y,{children:f(G,{size:"small",children:[e(B,{level:3,children:o.title}),e(P,{variant:"body",children:o.description}),Array.isArray(o.profiles)?e("div",{className:"ProfilesBlock-profiles",children:o.profiles.map((m,c)=>e(g,{profile:m},c))}):null]})})},t)):null});try{s.displayName="ProfilesBlock",s.__docgenInfo={description:"",displayName:"ProfilesBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},profileGroups:{defaultValue:null,description:"",name:"profileGroups",required:!0,type:{name:"EmployeeGroup[]"}}}}}catch{}const W={component:s},i={args:{title:l.sentence({words:3}),description:l.sentence(),profileGroups:d()}};var a,p,n;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: chance.sentence({
      words: 3
    }),
    description: chance.sentence(),
    profileGroups: generateEmployeeGroups()
  }
}`,...(n=(p=i.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const X=["Default"];export{i as Default,X as __namedExportsOrder,W as default};
//# sourceMappingURL=ProfilesBlock.stories-07b21e7e.js.map
