import{a as d,j as n}from"./jsx-runtime-c2efdcba.js";import{c as p}from"./clsx.m-1229b3e0.js";import{s as u}from"./styled-899f007b.js";import{c as o}from"./emotion-react.browser.esm-511d925c.js";const g=({className:t,onLoad:e,onError:a,caption:r,...i})=>{const c=l=>{console.log("loaded"),e==null||e(l)},m=l=>{console.log("loaded"),a==null||a(l)};return d("figure",{className:p("Image-root",t),children:[n("img",{className:"Image-element",onLoad:c,onError:m,...i}),n("figcaption",{className:"Image-caption",children:r})]})},s=u(g)(({theme:t,shape:e})=>{const a={square:o`
			aspect-ratio: 1;
		`,portrait:o``,landscape:o``}[e??"square"];return o`
		margin: unset;
		padding: unset;
		border: unset;
		outline: unset;

		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.5rem;

		background-color: ${t.palette.grey[200]};

		/* FIXME: doesn't work well with caption, needs wrapper around image */
		${a}

		.Image-element {
			outline: unset;
			object-fit: cover;
			width: 100%;
			height: 100%;
			border-radius: 0.25rem;
			aspect-ratio: 1;
		}

		&[loaded] {
		}
	`});try{s.displayName="Image",s.__docgenInfo={description:"",displayName:"Image",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLImageElement | null) => void) | RefObject<HTMLImageElement> | null"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"ReactNode"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"portrait"'},{value:'"landscape"'}]}}}}}catch{}export{s as I};
//# sourceMappingURL=Image-d662c5af.js.map
