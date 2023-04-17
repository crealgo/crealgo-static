import{s as S}from"./chance-e22ba91b.js";import{a as o,j as e}from"./jsx-runtime-c2efdcba.js";import{r as d}from"./index-2812c619.js";import{A as v}from"./ActionStack-b71d8d0b.js";import{B as A,C as m}from"./Container-96bf4f71.js";import{B as k}from"./Button-b3c0cd51.js";import{H as b}from"./Heading-78206ec4.js";import{c as C}from"./colorIterator-86c98f12.js";import{I}from"./Image-d662c5af.js";import{c as N}from"./clsx.m-1229b3e0.js";import{s as g}from"./styled-899f007b.js";import{T as a}from"./Typography-e61b6c49.js";import{K as z}from"./KeyboardArrowRight-41fc08cb.js";import{c as _}from"./emotion-react.browser.esm-511d925c.js";import{B as H}from"./Box-18209bee.js";import{M as j}from"./Message-adc5ff2c.js";import"./_commonjsHelpers-725317a4.js";import"./Stack-a3a99865.js";import"./defaultTheme-d0849189.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./useThemeProps-4c706523.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-ef184424.js";import"./ButtonBase-890a84e2.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./colors-077d21ae.js";import"./createSvgIcon-4ae69272.js";const w=d.createContext(void 0),q=()=>{const r=d.useContext(w);if(r===void 0)throw new Error("Not used inside the AppStateContextProvider!");return r},E=g("a")`
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

	${C("background",".image")}
`,p=({title:r,subtitle:s,description:c,className:t,ImageProps:u,actions:l,...x})=>{const{toggleBooking:B}=q();return o(E,{className:N("HorizontalCard-root",t),...x,children:[e(I,{className:"image"}),o("div",{className:"content",children:[e(a,{variant:"caption",children:s}),e(a,{variant:"h5",children:r}),e(a,{variant:"caption",children:c}),e(v,{actions:l,children:e(k,{color:"secondary",size:"small",endIcon:e(z,{}),onClick:()=>{B()},children:"Book Appointment"})})]})]})};try{p.displayName="HorizontalCard",p.__docgenInfo={description:"",displayName:"HorizontalCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},ImageProps:{defaultValue:null,description:"",name:"ImageProps",required:!1,type:{name:"ImageProps"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLAnchorElement | null) => void) | RefObject<HTMLAnchorElement> | null"}}}}}catch{}g("div")(({theme:r})=>_`
		max-width: ${r.breakpoints.values.sm}px;

		.ActionStack-root {
			margin-top: 1.5rem;
		}

		.Heading-root {
			margin-bottom: 0.5rem;
		}
	`);const V=g("div")(({theme:r})=>_`
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;

		.container {
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
	`),n=({title:r,subtitle:s,description:c,services:t})=>e(A,{children:e(m,{children:o(V,{children:[o(m,{className:"container",size:"small",children:[e(a,{variant:"overline",children:s}),e(b,{level:1,children:r}),e(a,{variant:"body2",children:c})]}),e("div",{className:"services",children:t==null?void 0:t.map((u,l)=>d.createElement(p,{...u,key:l}))}),e(m,{size:"small",children:o(v,{align:"center",color:"secondary",children:[e(H,{mr:-2,zIndex:1,children:"Looking for something else?"}),e(k,{color:"text",endIcon:e(j,{}),children:"Contact Us"})]})})]})})});n.displayName="ServicesBlock";try{n.displayName="ServicesBlock",n.__docgenInfo={description:"",displayName:"ServicesBlock",props:{}}}catch{}const ge={component:n},i={args:S()};var f,h,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: generateServicesBlock()
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const ue=["Default"];export{i as Default,ue as __namedExportsOrder,ge as default};
//# sourceMappingURL=ServiceBlock.stories-3b51b86e.js.map
