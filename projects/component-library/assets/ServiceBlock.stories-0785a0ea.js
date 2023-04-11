import{l as x}from"./chance-dbb8c3cf.js";import{a as o,j as e}from"./defaultTheme-30e43ede.js";import{r as d}from"./index-2812c619.js";import{B,C as m}from"./Block-81203b25.js";import{B as y}from"./Button-ebd51bfd.js";import{H as S}from"./Heading-06e530da.js";import{c as b}from"./colorIterator-9c2a9cac.js";import{A as v}from"./ActionStack-e2087fb9.js";import{s as g}from"./styled-8f152a82.js";import{T as i}from"./Typography-b4c27325.js";import{K as A}from"./KeyboardArrowRight-ec5b06ad.js";import{c as k}from"./emotion-react.browser.esm-18e2571c.js";import{B as C}from"./Box-fdcb16a5.js";import{M as I}from"./Message-48063715.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./_commonjsHelpers-725317a4.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-d3dd63a4.js";import"./ButtonBase-63fd7aa9.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-cbfa8a8e.js";import"./generateUtilityClasses-0f0148c0.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-d7a6185f.js";import"./useIsFocusVisible-9b2ab6cf.js";import"./useForkRef-9773819b.js";import"./colors-55af66f1.js";import"./Stack-71a65dae.js";import"./createSvgIcon-7fe6f70f.js";const N=d.createContext(void 0),z=()=>{const r=d.useContext(N);if(r===void 0)throw new Error("			Not used inside the AppStateContextProvider!		");return r},H=g("a")`
	cursor: pointer;
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 1rem;

	.image {
		aspect-ratio: 1;
		position: relative;
		border-radius: 0.5rem;
		overflow: hidden;

		.Image-root {
			z-index: 0;
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			object-fit: cover;

			transition: all 300ms;
		}
	}

	.content {
		display: grid;
		align-content: start;
		grid-template-columns: 1fr;
		gap: 0.5rem;

		.ActionStack {
			margin-top: 0.5rem;
			justify-content: start;
		}
	}

	${b("background",".image")}
`,p=({title:r,subtitle:s,description:c,...t})=>{const{toggleBooking:l}=z();return o(H,{...t,children:[e("div",{className:"image"}),o("div",{className:"content",children:[e(i,{variant:"caption",children:s}),e(i,{variant:"h5",children:r}),e(i,{variant:"caption",children:c}),e(v,{children:e(y,{color:"secondary",size:"small",endIcon:e(A,{}),onClick:()=>{l()},children:"Book Appointment"})})]})]})};try{p.displayName="HorizontalCard",p.__docgenInfo={description:"",displayName:"HorizontalCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},ImageProps:{defaultValue:null,description:"",name:"ImageProps",required:!1,type:{name:"ImageProps"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLAnchorElement | null) => void) | RefObject<HTMLAnchorElement> | null"}}}}}catch{}g("div")(({theme:r})=>k`
		max-width: ${r.breakpoints.values.sm}px;

		.ActionStack-root {
			margin-top: 1.5rem;
		}

		.Heading-root {
			margin-bottom: 0.5rem;
		}
	`);const j=g("div")(({theme:r})=>k`
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;

		.Container-root {
			text-align: center;
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;

			.ActionStack-root {
				justify-content: center !important;
			}
		}

		.services {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		${r.breakpoints.up("sm")} {
			.services {
				row-gap: 3rem;
				grid-template-columns: repeat(2, 1fr);
			}
		}

		${r.breakpoints.up("md")} {
			.services {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	`),n=({title:r,subtitle:s,description:c,services:t})=>e(B,{children:e(m,{children:o(j,{children:[o(m,{size:"small",children:[e(i,{variant:"overline",children:s}),e(S,{level:1,children:r}),e(i,{variant:"body2",children:c})]}),e("div",{className:"services",children:t==null?void 0:t.map((l,_)=>d.createElement(p,{...l,key:_}))}),e(m,{size:"small",children:o(v,{align:"center",color:"secondary",children:[e(C,{mr:-2,zIndex:1,children:"Looking for something else?"}),e(y,{color:"text",endIcon:e(I,{}),children:"Contact Us"})]})})]})})});n.displayName="ServicesBlock";try{n.displayName="ServicesBlock",n.__docgenInfo={description:"",displayName:"ServicesBlock",props:{}}}catch{}const ce={component:n},a={args:x()};var u,f,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: generateServicesBlock()
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const le=["Default"];export{a as Default,le as __namedExportsOrder,ce as default};
//# sourceMappingURL=ServiceBlock.stories-0785a0ea.js.map
