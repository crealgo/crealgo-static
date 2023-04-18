import{t as B}from"./chance-e22ba91b.js";import{a as l,j as t}from"./jsx-runtime-c2efdcba.js";import{C as P,B as V}from"./Container-a6f3098c.js";import{B as C}from"./Button-ce6e9453.js";import{H as L}from"./Heading-0b105ff6.js";import{c as z}from"./emotion-react.browser.esm-511d925c.js";import{s as v}from"./emotion-styled.browser.esm-fa7ff235.js";import{r as f,a as D}from"./index-2812c619.js";import{g as j}from"./getInputStyles-28396403.js";import{K as Q}from"./KeyboardArrowDownRounded-46ba3897.js";import{s as g}from"./styled-e2ebe642.js";import{u as R}from"./useTheme-e8b6c181.js";import{c as q,g as H}from"./useThemeProps-debefb1f.js";import{u as O}from"./ButtonBase-7c1dc156.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-7aae2927.js";import"./Typography-ce4bf3ba.js";import"./defaultTheme-8fe9975f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./generateUtilityClasses-bdae82bf.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./_commonjsHelpers-725317a4.js";import"./createSvgIcon-45dd28ac.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";function W(e,a,r,i,o){const n=typeof window<"u"&&typeof window.matchMedia<"u",[c,d]=f.useState(()=>o&&n?r(e).matches:i?i(e).matches:a);return O(()=>{let m=!0;if(!n)return;const s=r(e),p=()=>{m&&d(s.matches)};return p(),s.addListener(p),()=>{m=!1,s.removeListener(p)}},[e,r,n]),c}const I=D["useSyncExternalStore"];function X(e,a,r,i){const o=f.useCallback(()=>a,[a]),n=f.useMemo(()=>{if(i!==null){const{matches:s}=i(e);return()=>s}return o},[o,e,i]),[c,d]=f.useMemo(()=>{if(r===null)return[o,()=>()=>{}];const s=r(e);return[()=>s.matches,p=>(s.addListener(p),()=>{s.removeListener(p)})]},[o,r,e]);return I(d,c,n)}function A(e,a={}){const r=q(),i=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:o=!1,matchMedia:n=i?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:d}=H({name:"MuiUseMediaQuery",props:a,theme:r});let m=typeof e=="function"?e(r):e;return m=m.replace(/^@media( ?)/m,""),(I!==void 0?X:W)(m,o,n,c,d)}const U=[{title:"Design Creation",description:"The first step in screen printing is to create the design that will be printed. This design is typically created using graphic design software and is saved as a high-resolution file."},{title:"Screen Preparation",description:"Once the design is created, a mesh screen is prepared by coating it with a light-sensitive emulsion. The emulsion is then allowed to dry, and the design is printed onto a transparent film."},{title:"Exposure",description:"The printed film is placed on the prepared screen and exposed to a bright light. The light hardens the emulsion on the screen, except for the areas where the design has been printed. These areas remain soft and can be washed away later."},{title:"Washing",description:"After exposure, the screen is washed with water, which removes the soft emulsion, leaving the design on the screen."},{title:"Ink Preparation",description:"The ink is mixed and prepared according to the color and type of substrate being printed on."},{title:"Printing",description:"The substrate is placed on the printing press, and the screen is placed on top of it. Ink is then poured onto the screen and spread across it using a squeegee. The ink is forced through the mesh and onto the substrate, creating the printed design."},{title:"Drying and Curing",description:"After printing, the substrate is dried and cured to ensure that the ink is fully set and will not smudge or wash away."}],Y=v("div")(({inputSize:e})=>z`
	position: relative;

	& svg {
		pointer-events: none;
		position: absolute;
		top: 50%;
		height: var(--input-group-action-size-${e});
		width: var(--input-group-action-size-${e});
		right: var(--input-spacing-gap-${e});
		transform: translateY(-50%);
		/* font-size: var(--input-group-action-size-${e}); */
		opacity: 0.5;
	}
`),K=v("select")(({inputSize:e})=>z`
	${j({inputSize:e})}

	padding-inline: var(--select-spacing-padding-inline-${e});
	appearance: none;
	cursor: pointer;
`),w=({options:e,inputSize:a="medium",...r})=>{const i=f.useRef(null);return l(Y,{inputSize:a,onClick:()=>{var n;(n=i.current)==null||n.focus()},children:[t(K,{ref:i,inputSize:a,...r,children:e==null?void 0:e.map(({label:n,value:c},d)=>t("option",{value:n,children:c},d))}),t(Q,{})]})};try{w.displayName="Select",w.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"OptionValue[]"}},inputSize:{defaultValue:{value:"medium"},description:"The size of the input.",name:"inputSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},status:{defaultValue:null,description:"The status of the input",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSelectElement | null) => void) | RefObject<HTMLSelectElement> | null"}}}}}catch{}const x="0.25rem",b="2rem",F=g("div")`
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
`,G=g("div")`
	z-index: -1;
	box-sizing: border-box;
	position: absolute;
	top: 0;

	height: calc(100%);
	width: 0;
	left: calc(-1 * (${b} + ${x}) / 2);

	border-left: dotted ${x} #cbd5e1;
`,J=e=>l("li",{id:e.id,className:e.className,children:[t("figure",{className:"image",children:t(F,{className:"marker",children:e.stepNumber??1})}),l("div",{className:"content",children:[t("div",{className:"title",children:e.title}),t("div",{className:"description",children:e.description}),e.children]}),t(G,{className:"connector"})]}),k=g(J)`
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
`;try{k.displayName="MobileTimelineEvent",k.__docgenInfo={description:"",displayName:"MobileTimelineEvent",props:{stepNumber:{defaultValue:null,description:"",name:"stepNumber",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}}}catch{}const u="0.25rem",y="3.5rem",_="4rem",Z=g("div")`
	height: ${y};
	width: ${y};

	position: absolute;
	top: ${_};

	background-color: var(--image-background-color);
	border-radius: var(--shape-rounding-full);

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
`,ee=g("div")`
	z-index: -1;
	box-sizing: border-box;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);

	height: calc(100% + ${u});
	width: calc(25% + ${u});

	border: dotted ${u} var(--image-background-color);
`,te=e=>l("li",{id:e.id,className:e.className,children:[t(Z,{className:"marker",children:e.stepNumber??1}),t("div",{className:"image"}),l("div",{className:"content",children:[t("div",{className:"title",children:e.title}),t("div",{className:"description",children:e.description}),e.children]}),t(ee,{className:"connector"})]}),N=g(te)`
	padding-inline: 1rem;
	gap: 5.75rem;

	list-style: none;

	position: relative;
	z-index: 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-content: start;

	padding-block: ${_};

	.image,
	.content {
		order: 1;
	}

	.image {
		background-color: var(--image-background-color);
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
			left: calc(25% - ${u} / 2);
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
			left: calc(-${u} / 2);
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
			left: calc(25% - ${u} / 2);
			border-radius: 0 5rem 5rem 0;
		}
	}

	&:last-of-type {
		.connector {
			border-bottom-color: transparent;
			height: calc(${_} + ${y});
			top: calc(-${u} / 2);
			transform: translateY(0);
		}
	}
`;try{N.displayName="TimelineEvent",N.__docgenInfo={description:"",displayName:"TimelineEvent",props:{stepNumber:{defaultValue:null,description:"",name:"stepNumber",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}}}catch{}const T=g("ol")`
	max-width: 63.75rem;
	margin-inline: auto;
	padding-inline: 0;
`;try{T.displayName="Timeline",T.__docgenInfo={description:"",displayName:"Timeline",props:{}}}catch{}const ne=v("div")`
	display: flex;
	gap: 0.25rem;
	align-items: center;
	justify-content: center;
`,re=v(P)`
	display: grid;
	gap: 1rem;

	.Heading-root {
		text-align: center;
	}
`,$=({events:e=U})=>{const{breakpoints:a}=R(),i=A(a.down("sm"))?k:N;return l(V,{className:"EventBlock-root",children:[l(re,{children:[t(L,{level:2,className:"mb-4",children:"See how we work!"}),l(ne,{children:[t("span",{className:"mr-2 font-semibold",children:"Pick a process:"}),t(w,{defaultValue:"T-Shirt Printing",options:[{label:"T-Shirt Printing",value:"T-Shirt Printing"},{label:"Logo Design",value:"Logo Design"},{label:"Poster Printing",value:"Poster Printing"}]}),t(C,{color:"secondary",children:"Update"})]})]}),t(T,{children:e.map((o,n)=>t(i,{stepNumber:n+1,...o},n))})]})};try{$.displayName="TimelineBlock",$.__docgenInfo={description:"",displayName:"TimelineBlock",props:{events:{defaultValue:null,description:"",name:"events",required:!1,type:{name:"EventBlockProps[]"}}}}}catch{}const ze={component:$},h={args:B()};var S,E,M;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: generateTimelineBlock()
}`,...(M=(E=h.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const Ie=["Default"];export{h as Default,Ie as __namedExportsOrder,ze as default};
//# sourceMappingURL=TimelineBlock.stories-0a38922f.js.map
