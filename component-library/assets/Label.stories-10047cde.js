import{c as s}from"./chance-56e14726.js";import{j as c}from"./jsx-runtime-c2efdcba.js";import{c as d}from"./clsx.m-1229b3e0.js";import{s as m}from"./styled-e2ebe642.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./defaultTheme-8fe9975f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";const o=({theme:e,variant:r="primary"})=>{const a={primary:e.palette.primary.main,secondary:e.palette.secondary.main,grey:e.palette.grey[300]}[r];return{backgroundColor:a,color:e.palette.getContrastText(a)}},y=m("span")(({theme:e,variant:r="primary"})=>({...o({theme:e,variant:r}),paddingInline:"1rem",paddingBlock:"0.5rem",borderRadius:"4px",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:e.typography.body2.fontSize,fontWeight:500,letterSpacing:"-0.0125rem"})),n=({className:e,children:r,...a})=>c(y,{className:d(e,"Label-root"),...a,children:r});try{o.displayName="getLabelStyles",o.__docgenInfo={description:"",displayName:"getLabelStyles",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"Theme"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"grey"'}]}}}}}catch{}try{n.displayName="Label",n.__docgenInfo={description:"",displayName:"Label",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"grey"'}]}}}}}catch{}const V={component:n},t={argTypes:{variant:{control:{type:"select"},options:["primary","secondary","grey"],defaultValue:"primary"},children:{control:{type:"text"},defaultValue:s.word()}}};var l,p,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        type: 'select'
      },
      options: ['primary', 'secondary', 'grey'],
      defaultValue: 'primary'
    },
    children: {
      control: {
        type: 'text'
      },
      defaultValue: chance.word()
    }
  }
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,V as default};
//# sourceMappingURL=Label.stories-10047cde.js.map
