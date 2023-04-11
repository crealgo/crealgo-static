import{m as z}from"./chance-dbb8c3cf.js";import{a as l,j as t}from"./defaultTheme-30e43ede.js";import{B,C as V}from"./Block-81203b25.js";import{B as I}from"./Button-ebd51bfd.js";import{H as P}from"./Heading-06e530da.js";import{s as p}from"./styled-8f152a82.js";import{u as q}from"./useTheme-565714fd.js";import{r as f,a as C}from"./index-2812c619.js";import{c as L,g as Q}from"./useThemeProps-cbfa8a8e.js";import{u as U}from"./TransitionGroupContext-d7a6185f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./emotion-react.browser.esm-18e2571c.js";import"./ButtonBase-d3dd63a4.js";import"./ButtonBase-63fd7aa9.js";import"./clsx.m-1229b3e0.js";import"./generateUtilityClasses-0f0148c0.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./useIsFocusVisible-9b2ab6cf.js";import"./useForkRef-9773819b.js";import"./colors-55af66f1.js";import"./Typography-b4c27325.js";import"./_commonjsHelpers-725317a4.js";function j(e,r,n,i,a){const o=typeof window<"u"&&typeof window.matchMedia<"u",[u,g]=f.useState(()=>a&&o?n(e).matches:i?i(e).matches:r);return U(()=>{let c=!0;if(!o)return;const s=n(e),d=()=>{c&&g(s.matches)};return d(),s.addListener(d),()=>{c=!1,s.removeListener(d)}},[e,n,o]),u}const M=C["useSyncExternalStore"];function A(e,r,n,i){const a=f.useCallback(()=>r,[r]),o=f.useMemo(()=>{if(i!==null){const{matches:s}=i(e);return()=>s}return a},[a,e,i]),[u,g]=f.useMemo(()=>{if(n===null)return[a,()=>()=>{}];const s=n(e);return[()=>s.matches,d=>(s.addListener(d),()=>{s.removeListener(d)})]},[a,n,e]);return M(g,u,o)}function D(e,r={}){const n=L(),i=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:a=!1,matchMedia:o=i?window.matchMedia:null,ssrMatchMedia:u=null,noSsr:g}=Q({name:"MuiUseMediaQuery",props:r,theme:n});let c=typeof e=="function"?e(n):e;return c=c.replace(/^@media( ?)/m,""),(M!==void 0?A:j)(c,a,o,u,g)}const X=[{title:"Design Creation",description:"The first step in screen printing is to create the design that will be printed. This design is typically created using graphic design software and is saved as a high-resolution file."},{title:"Screen Preparation",description:"Once the design is created, a mesh screen is prepared by coating it with a light-sensitive emulsion. The emulsion is then allowed to dry, and the design is printed onto a transparent film."},{title:"Exposure",description:"The printed film is placed on the prepared screen and exposed to a bright light. The light hardens the emulsion on the screen, except for the areas where the design has been printed. These areas remain soft and can be washed away later."},{title:"Washing",description:"After exposure, the screen is washed with water, which removes the soft emulsion, leaving the design on the screen."},{title:"Ink Preparation",description:"The ink is mixed and prepared according to the color and type of substrate being printed on."},{title:"Printing",description:"The substrate is placed on the printing press, and the screen is placed on top of it. Ink is then poured onto the screen and spread across it using a squeegee. The ink is forced through the mesh and onto the substrate, creating the printed design."},{title:"Drying and Curing",description:"After printing, the substrate is dried and cured to ensure that the ink is fully set and will not smudge or wash away."}],v=({label:e,helperText:r,...n})=>l("div",{children:[e&&t("label",{htmlFor:"location",className:"block mb-2 text-sm font-medium leading-6 text-gray-900",children:"Email"}),l("select",{id:"location",name:"location",className:"block w-full rounded-md border-0 py-2.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:ring-2 focus:ring-indigo-600",defaultValue:"T-Shirt Printing",children:[t("option",{children:"T-Shirt Printing"}),t("option",{children:"Logo Design"}),t("option",{children:"Poster Printing"})]}),r&&t("p",{className:"mt-2 text-sm text-gray-500",id:"email-description",children:"We'll only use this for spam."})]});try{v.displayName="Select",v.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}}}}}catch{}const T="0.25rem",b="2rem",O=p("div")`
	height: ${b};
	width: ${b};

	background-color: var(--color-secondary);
	border-radius: 0.5rem 0 0 0.5rem;

	position: absolute;
	top: 0;
	left: 0;
	transform: translateX(-100%);

	display: flex;
	align-items: center;
	justify-content: center;

	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 1rem;
	text-align: center;
	letter-spacing: -0.02em;

	color: #111827;
`,R=p("div")`
	z-index: -1;
	box-sizing: border-box;
	position: absolute;
	top: 0;

	height: calc(100%);
	width: 0;
	left: calc(-1 * (${b} + ${T}) / 2);

	border-left: dotted ${T} #cbd5e1;
`,H=e=>l("li",{id:e.id,className:e.className,children:[t("figure",{className:"image",children:t(O,{className:"marker",children:e.stepNumber??1})}),l("div",{className:"content",children:[t("div",{className:"title",children:e.title}),t("div",{className:"description",children:e.description}),e.children]}),t(R,{className:"connector"})]}),_=p(H)`
	--image-border-radius: 0.5rem;

	list-style: none;

	position: relative;
	z-index: 0;
	display: grid;
	grid-template-columns: 1fr;
	align-content: start;

	.image,
	.content {
		order: 1;
	}

	.image {
		padding: unset;
		margin: unset;

		display: block;
		width: 100%;
		background-color: #cbd5e1;
		border-radius: 0 var(--image-border-radius) var(--image-border-radius) var(--image-border-radius);

		min-height: 160px;
	}

	.content {
		padding-inline: var(--image-border-radius) 0;
		padding-block: 1rem 3rem;

		.title {
			font-family: Inter;
			font-size: 1.75rem;
			font-weight: 700;
			line-height: ${b};
			letter-spacing: -0.02em;
			text-align: left;

			margin-bottom: 0.5rem;
		}

		.description {
			font-family: Inter;
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5rem;
			letter-spacing: 0em;
			text-align: left;
		}
	}

	&:last-of-type {
		margin-bottom: 0;
	}
`;try{_.displayName="MobileTimelineEvent",_.__docgenInfo={description:"",displayName:"MobileTimelineEvent",props:{stepNumber:{defaultValue:null,description:"",name:"stepNumber",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},imgUrl:{defaultValue:null,description:"",name:"imgUrl",required:!1,type:{name:"string"}},imgAlt:{defaultValue:null,description:"",name:"imgAlt",required:!1,type:{name:"string"}}}}}catch{}const m="0.25rem",y="3.5rem",w="4rem",W=p("div")`
	height: ${y};
	width: ${y};

	position: absolute;
	top: ${w};

	background-color: #cbd5e1;
	border-radius: 99999px;

	display: flex;
	align-items: center;
	justify-content: center;

	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 1.5rem;
	text-align: center;
	letter-spacing: -0.02em;

	color: #111827;
`,Y=p("div")`
	z-index: -1;
	box-sizing: border-box;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);

	height: calc(100% + ${m});
	width: calc(25% + ${m});

	border: dotted ${m} #cbd5e1;
`,F=e=>l("li",{id:e.id,className:e.className,children:[t(W,{className:"marker",children:e.stepNumber??1}),t("div",{className:"image"}),l("div",{className:"content",children:[t("div",{className:"title",children:e.title}),t("div",{className:"description",children:e.description}),e.children]}),t(Y,{className:"connector"})]}),N=p(F)`
	padding-inline: 1rem;
	gap: 5.75rem;

	list-style: none;

	position: relative;
	z-index: 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-content: start;

	padding-block: ${w};

	.image,
	.content {
		order: 1;
	}

	.image {
		background-color: #cbd5e1;
		border-radius: 1rem;

		min-height: 160px;
	}

	.content {
		.title {
			font-family: Inter;
			font-size: 2.0625rem;
			font-weight: 700;
			line-height: ${y};
			letter-spacing: -0.02em;
			text-align: left;
		}

		.description {
			font-family: Inter;
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5rem;
			letter-spacing: 0em;
			text-align: left;
		}
	}

	&:first-of-type {
		.marker {
			left: 50%;
			transform: translateX(-50%);
		}

		.connector {
			border-left-color: transparent;
			border-top-color: transparent;
			left: calc(25% - ${m} / 2);
			border-radius: 0 0 5rem 0;
		}
	}

	&:nth-of-type(2n + 2) {
		padding-inline: 3rem;
		gap: 2.25rem;

		.marker {
			transform: translateX(-50%);
		}

		.image {
			order: 2;
		}

		.connector {
			border-right-color: transparent;
			left: calc(-${m} / 2);
			border-radius: 5rem 0 0 5rem;
		}
	}

	&:nth-of-type(2n + 3) {
		padding-inline: 1rem;
		gap: 5.75rem;

		.marker {
			left: 50%;
			transform: translateX(-50%);
		}

		.connector {
			border-left-color: transparent;
			left: calc(25% - ${m} / 2);
			border-radius: 0 5rem 5rem 0;
		}
	}

	&:last-of-type {
		.connector {
			border-bottom-color: transparent;
			height: calc(${w} + ${y});
			top: calc(-${m} / 2);
			transform: translateY(0);
		}
	}
`;try{N.displayName="TimelineEvent",N.__docgenInfo={description:"",displayName:"TimelineEvent",props:{stepNumber:{defaultValue:null,description:"",name:"stepNumber",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},imgUrl:{defaultValue:null,description:"",name:"imgUrl",required:!1,type:{name:"string"}},imgAlt:{defaultValue:null,description:"",name:"imgAlt",required:!1,type:{name:"string"}}}}}catch{}const x=p("ol")`
	max-width: 63.75rem;
	margin-inline: auto;
	padding-inline: 0;
`;try{x.displayName="Timeline",x.__docgenInfo={description:"",displayName:"Timeline",props:{}}}catch{}const k=({events:e=X})=>{const{breakpoints:r}=q(),i=D(r.down("sm"))?_:N;return l(B,{className:"EventBlock-root",children:[l(V,{className:"text-center",children:[t(P,{level:2,className:"mb-4",children:"See how we work!"}),l("div",{className:"flex gap-2 items-center justify-center",children:[t("span",{className:"mr-2 font-semibold",children:"Pick a process:"}),t(v,{}),t(I,{color:"secondary",children:"Update"})]})]}),t(x,{children:e.map((a,o)=>t(i,{stepNumber:o+1,...a},o))})]})};try{k.displayName="TimelineBlock",k.__docgenInfo={description:"",displayName:"TimelineBlock",props:{events:{defaultValue:null,description:"",name:"events",required:!1,type:{name:"EventBlockProps[]"}}}}}catch{}const _e={component:k},h={args:z()};var $,E,S;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: generateTimelineBlock()
}`,...(S=(E=h.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const we=["Default"];export{h as Default,we as __namedExportsOrder,_e as default};
//# sourceMappingURL=TimelineBlock.stories-6b54a124.js.map
