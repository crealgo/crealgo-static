import{j as d}from"./jsx-runtime-c2efdcba.js";import{B as p}from"./ButtonBase-ef184424.js";import{c as l}from"./emotion-react.browser.esm-511d925c.js";import{s as m}from"./emotion-styled.browser.esm-fa7ff235.js";import{_ as y}from"./excludePropsFromForwarding-6c5743cd.js";import{c as v}from"./clsx.m-1229b3e0.js";import{w as a,c as i}from"./colors-077d21ae.js";const f=m(p,y("color"))(t=>{const e={primary:{value:"#B20838",opacity:1},secondary:{value:"#FDE047",opacity:1},tertiary:{value:"#FFFFFF",opacity:1},text:{value:"#FFFFFF",opacity:0}}[t.color??"primary"],o=a(e.value).alpha(e.opacity).toHex(),r=a(e.value).darken(.035).alpha(e.opacity).toHex(),u=a(e.value).darken(.075).alpha(e.opacity).toHex(),c=a(e.value).isLight()?i.slate[900]:i.slate[50],n=t.size??"medium";return l`
		background-color: ${o};
		box-shadow: var(--input-shadow), var(--shadow-elevation-0);
		border-radius: 4px;

		font-weight: 500;
		font-size: 14px;
		letter-spacing: -0.01em;
		color: ${c};

		padding-inline: var(--input-padding-x-${n});
		height: var(--input-height-${n});
		line-height: var(--input-height-${n});
		border: var(--input-border);

		${t.color==="text"?l`
					box-shadow: unset;
					text-decoration: underline;
					text-underline-offset: 3px;
					text-decoration-thickness: 1.5px;
			  `:l``}

		&:hover {
			background-color: ${r};
		}

		&:active {
			background-color: ${u};
		}
	`}),s=({children:t,className:e,color:o="tertiary",...r})=>d(f,{...r,color:o,role:"button",className:v(e,"Button-root"),children:t});try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:{value:"tertiary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{s as B};
//# sourceMappingURL=Button-b3c0cd51.js.map
