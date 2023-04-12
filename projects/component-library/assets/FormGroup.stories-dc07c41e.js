import{a as c,j as t}from"./jsx-runtime-c2efdcba.js";import{c as _}from"./clsx.m-1229b3e0.js";import{r as x}from"./index-2812c619.js";import{s as o}from"./emotion-styled.browser.esm-fa7ff235.js";import{A as L}from"./Autocomplete-28cccedf.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./Input-496b71bf.js";import"./emotion-react.browser.esm-511d925c.js";const n=o.div`
	display: inline-grid;
	grid-template-columns: minmax(10rem, 1fr);
	min-width: 10rem;
	gap: 0.25rem;
`,l=o.label`
	display: inline-flex;
	color: var(--color-text-primary);
	font-size: 14px;
	line-height: 1rem;
	font-weight: 500;
`,s=o.span`
	font-weight: 500;
	font-size: 0.75rem;
	line-height: 1rem;

	color: var(--color-text-secondary);
`,a=({label:e,id:h,helperText:p,className:T,LabelProps:y,size:b,HelperTextProps:f,children:g,...I})=>{const i=h??x.useId();return c(n,{className:_(T,"FormGroup-root"),children:[e&&t(l,{className:"FormGroup-label",htmlFor:`input-${i}`,...y,children:e}),g,p&&t(s,{id:`helperText-${i}`,className:"FormGroup-helperText",...f,children:p})]})};try{n.displayName="Wrapper",n.__docgenInfo={description:"",displayName:"Wrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{l.displayName="InputLabel",l.__docgenInfo={description:"",displayName:"InputLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{s.displayName="InputHelperText",s.__docgenInfo={description:"",displayName:"InputHelperText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{a.displayName="FormGroup",a.__docgenInfo={description:"",displayName:"FormGroup",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},InputProps:{defaultValue:null,description:"",name:"InputProps",required:!1,type:{name:"AutocompleteProps | InputProps"}},LabelProps:{defaultValue:null,description:"",name:"LabelProps",required:!1,type:{name:'(Pick<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "key" | keyof LabelHTMLAttributes<...>> & { ...; })'}},HelperTextProps:{defaultValue:null,description:"",name:"HelperTextProps",required:!1,type:{name:'(Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<HTMLSpanElement>> & { ...; })'}}}}}catch{}const G={component:a},r={render:e=>t(a,{...e,children:c(L,{placeholder:"Start Typing",children:[t("option",{value:"test-things",children:"Test Things"}),t("option",{value:"test-things-1",children:"Test Things 1"}),t("option",{value:"test-things-2",children:"Test Things 2"}),t("option",{value:"test-things-3",children:"Test Things 3"})]})}),args:{label:"Input Label",helperText:"This is helper text"}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <FormGroup {...args}>
            <Autocomplete placeholder="Start Typing">
                <option value="test-things">Test Things</option>
                <option value="test-things-1">Test Things 1</option>
                <option value="test-things-2">Test Things 2</option>
                <option value="test-things-3">Test Things 3</option>
            </Autocomplete>
        </FormGroup>,
  args: {
    label: "Input Label",
    helperText: "This is helper text"
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const k=["Default"];export{r as Default,k as __namedExportsOrder,G as default};
//# sourceMappingURL=FormGroup.stories-dc07c41e.js.map
