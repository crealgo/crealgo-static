import{a as t,F as b,j as l}from"./jsx-runtime-c2efdcba.js";import{r as d}from"./index-2812c619.js";import{K as h}from"./KeyboardArrowDown-cc6fb243.js";import{M as v,a as u}from"./MenuItem-b16b1f4f.js";import{s as y}from"./styled-e2ebe642.js";import{c as g}from"./emotion-react.browser.esm-511d925c.js";const I=y("button")(({theme:e})=>g`
		border-radius: unset;
		border: unset;
		outline: unset;
		background: unset;
		padding: unset;

		cursor: pointer;
		position: relative;
		display: inline-flex;
		align-items: center;

		z-index: 0;

		font: inherit;

		&::before {
			content: '';
			display: block;
			position: absolute;
			width: 102%;
			height: 90%;
			left: 50%;
			transform: translateX(-50%);

			background-color: var(--color-brand-tertiary-light);
			z-index: -1;
		}

		.endIcon {
			font-size: 0.875em;
			margin-right: -0.5rem;
		}

		&:hover,
		&:focus-visible {
			&::before {
				background-color: var(--color-brand-tertiary-dark);
			}
		}
	`),c=({options:e,...x})=>{const[n,m]=d.useState(e?e[0].label:""),[o,i]=d.useState(void 0),r=!!o,p=a=>{i(a.currentTarget)},s=()=>{i(void 0)};return t(b,{children:[t(I,{"aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,type:"button",value:n,onClick:p,children:[n,l(h,{className:"endIcon"})]}),t(v,{...{open:r,anchorEl:o,onClose:s},MenuListProps:{"aria-labelledby":"basic-button",sx:{minWidth:"10rem"}},children:[l(u,{disabled:!0,children:"Choose one:"}),e==null?void 0:e.map((a,f)=>l(u,{value:a.value,selected:a.value===n,onClick:()=>{s(),m(a.label)},children:a.label},f))]})]})};try{c.displayName="InteractiveSelector",c.__docgenInfo={description:"",displayName:"InteractiveSelector",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"OptionValue[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},margin:{defaultValue:{value:"'none'"},description:"If `dense` or `normal`, will adjust vertical spacing of this and contained components.",name:"margin",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"dense"'},{value:'"normal"'}]}},focused:{defaultValue:null,description:"If `true`, the component is displayed in focused state.",name:"focused",required:!1,type:{name:"boolean"}},hiddenLabel:{defaultValue:{value:"false"},description:"If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.",name:"hiddenLabel",required:!1,type:{name:"boolean"}}}}}catch{}export{c as I};
//# sourceMappingURL=InteractiveSelector-32c5f697.js.map
