import{a as r,F as b,j as t}from"./jsx-runtime-c2efdcba.js";import{r as d}from"./index-2812c619.js";import{K as v}from"./KeyboardArrowDown-6114ca28.js";import{M as y,a as u}from"./MenuItem-35285981.js";import{s as g}from"./styled-899f007b.js";import{c as I}from"./emotion-react.browser.esm-511d925c.js";import{h as c}from"./defaultTheme-d0849189.js";const x=g("button")(({theme:e})=>I`
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

	${e.utils.inheritFont};

	&::before {
		content: '';
		display: block;
		position: absolute;
		width: 102%;
		height: 90%;
		left: 50%;
		transform: translateX(-50%);

		background-color: ${c(e.palette.secondary.main,.5)};
		z-index: -1;
	}

	.endIcon {
		font-size: 0.875em;
		margin-right: -0.5rem;
	}

	&:hover,
	&:focus-visible {
		&::before {
			background-color: ${c(e.palette.secondary.main,.875)};
		}
	}
`),m=({options:e,..._})=>{const[l,p]=d.useState(e?e[0].label:""),[o,s]=d.useState(void 0),n=!!o,f=a=>{s(a.currentTarget)},i=()=>{s(void 0)};return r(b,{children:[r(x,{onClick:f,"aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,children:[l,t(v,{className:"endIcon"})]}),r(y,{...{open:n,anchorEl:o,onClose:i},MenuListProps:{"aria-labelledby":"basic-button",sx:{minWidth:"10rem"}},children:[t(u,{disabled:!0,children:"Choose one:"}),e==null?void 0:e.map((a,h)=>t(u,{value:a.value,selected:a.value===l,onClick:()=>{i(),p(a.label)},children:a.label},h))]})]})};try{m.displayName="InteractiveSelector",m.__docgenInfo={description:"",displayName:"InteractiveSelector",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"OptionValue[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},margin:{defaultValue:{value:"'none'"},description:"If `dense` or `normal`, will adjust vertical spacing of this and contained components.",name:"margin",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"dense"'},{value:'"normal"'}]}},focused:{defaultValue:null,description:"If `true`, the component is displayed in focused state.",name:"focused",required:!1,type:{name:"boolean"}},hiddenLabel:{defaultValue:{value:"false"},description:"If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.",name:"hiddenLabel",required:!1,type:{name:"boolean"}}}}}catch{}export{m as I};
//# sourceMappingURL=InteractiveSelector-abf1927a.js.map
