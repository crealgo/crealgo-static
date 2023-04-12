import{a as c,j as r}from"./jsx-runtime-c2efdcba.js";import{I as m}from"./Image-d662c5af.js";import{s as t}from"./styled-899f007b.js";import{c as p}from"./emotion-react.browser.esm-511d925c.js";import{r as u}from"./index-2812c619.js";const g=t("div")(({theme:e})=>p`
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;

		&:hover {
			.Title-root {
				color: ${e.palette.grey[800]};
			}

			.Image-root {
				background-color: ${e.palette.grey[400]};
				outline: dashed 2px ${e.palette.grey[400]};
				outline-offset: 2px;
			}
		}
	`),f=t(m)(({theme:e})=>p`
		background-color: ${e.palette.grey[300]};
		width: 100%;
		aspect-ratio: 1;
	`),y=t("span")(({theme:e})=>p`
		font-size: 0.75rem;
		text-align: center;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;

		color: ${e.palette.grey[600]};
	`),s=({ImageProps:e,label:a})=>c(g,{children:[r(f,{...e}),r(y,{className:"Title-root",children:a})]});try{s.displayName="FeaturedItem",s.__docgenInfo={description:"",displayName:"FeaturedItem",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},ImageProps:{defaultValue:null,description:"",name:"ImageProps",required:!1,type:{name:"ImageProps"}}}}}catch{}const I=t("nav")`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
`,l=u.forwardRef(({className:e,children:a,items:o},d)=>r(I,{ref:d,className:e,children:a??(o==null?void 0:o.map((i,n)=>r(s,{...i},n)))}));l.displayName="FeaturedItems";try{l.displayName="FeaturedItems",l.__docgenInfo={description:"",displayName:"FeaturedItems",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"FeaturedItemProps[]"}}}}}catch{}export{l as F};
//# sourceMappingURL=FeaturedItems-9978578b.js.map
