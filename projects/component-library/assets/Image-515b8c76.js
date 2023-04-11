import{a as m,j as l}from"./defaultTheme-30e43ede.js";import{c as d}from"./clsx.m-1229b3e0.js";import{s as p}from"./styled-8f152a82.js";import{c as g}from"./emotion-react.browser.esm-18e2571c.js";const f=({className:e,onLoad:a,onError:t,caption:i,...s})=>{const c=o=>{console.log("loaded"),a==null||a(o)},r=o=>{console.log("loaded"),t==null||t(o)};return m("figure",{className:d("Image-root",e),children:[l("div",{children:l("img",{className:"Image-element",onLoad:c,onError:r,...s})}),l("figcaption",{className:"Image-caption",children:i})]})},n=p(f)(({theme:e})=>g`
		margin: unset;
		padding: unset;
		border: unset;
		outline: unset;

		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.5rem;


		/* FIXME: doesn't work well with caption, needs wrapper around image */

		.Image-element {
			outline: unset;
			object-fit: cover;
			width: 100%;
			height: 100%;
			border-radius: 0.25rem;
			aspect-ratio: 1;
			background-color: ${e.palette.grey[200]};
		}

		&[loaded] {
		}
	`);try{n.displayName="Image",n.__docgenInfo={description:"",displayName:"Image",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLImageElement | null) => void) | RefObject<HTMLImageElement> | null"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"ReactNode"}}}}}catch{}export{n as I};
//# sourceMappingURL=Image-515b8c76.js.map
