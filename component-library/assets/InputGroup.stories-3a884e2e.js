import{a as c,j as t}from"./jsx-runtime-c2efdcba.js";import{s as p}from"./emotion-styled.browser.esm-fa7ff235.js";import{A as T}from"./Autocomplete-ed224218.js";import{I as v}from"./Input-840cf7d1.js";import{B as h}from"./Button-90cddc56.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./getInputStyles-bb239c88.js";import"./emotion-react.browser.esm-511d925c.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-a4cb8c49.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./styled-e2ebe642.js";import"./defaultTheme-8fe9975f.js";import"./ButtonBase-0d2a43de.js";import"./useThemeProps-debefb1f.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./useEnhancedEffect-767500c3.js";const y=p.div`
	display: inline-flex;
	position: relative;
	gap: 0.25rem;
`,g=p.span`
	width: clamp(2rem);
	/* position: absolute; */
	top: 0;
	bottom: 0;
`,P=p(g)`
	left: 0;
`,S=p(g)`
	right: 0;
`,o=({startContent:e,endContent:n,InputProps:_,ref:z,children:I,...f})=>c(y,{...f,children:[e&&t(P,{children:e}),I,n&&t(S,{children:n})]});try{o.displayName="InputGroup",o.__docgenInfo={description:"",displayName:"InputGroup",props:{startContent:{defaultValue:null,description:"",name:"startContent",required:!1,type:{name:"ReactNode"}},endContent:{defaultValue:null,description:"",name:"endContent",required:!1,type:{name:"ReactNode"}},InputProps:{defaultValue:null,description:"",name:"InputProps",required:!1,type:{name:"InputProps"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}}}}}catch{}const K={component:o},r={render:({InputProps:e,...n})=>t(o,{...n,children:t(v,{...e})}),args:{endContent:t(h,{size:"medium",children:"Action"}),InputProps:{placeholder:"Start Typing...",inputSize:"medium"}}},i={render:({InputProps:e,...n})=>t(o,{...n,children:c(T,{...e,children:[t("option",{value:"test-things",children:"Test Things"}),t("option",{value:"test-things-1",children:"Test Things 1"}),t("option",{value:"test-things-2",children:"Test Things 2"}),t("option",{value:"test-things-3",children:"Test Things 3"})]})}),args:{endContent:t(h,{size:"medium",children:"Action"}),InputProps:{placeholder:"Start Typing...",inputSize:"medium"}}};var s,a,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    InputProps,
    ...args
  }) => <InputGroup {...args}>
            <Input {...InputProps} />
        </InputGroup>,
  args: {
    endContent: <Button size="medium">Action</Button>,
    InputProps: {
      placeholder: 'Start Typing...',
      inputSize: 'medium'
    }
  }
}`,...(u=(a=r.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var l,m,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    InputProps,
    ...args
  }) => <InputGroup {...args}>
            <Autocomplete {...InputProps}>
                <option value="test-things">Test Things</option>
                <option value="test-things-1">Test Things 1</option>
                <option value="test-things-2">Test Things 2</option>
                <option value="test-things-3">Test Things 3</option>
            </Autocomplete>
        </InputGroup>,
  args: {
    endContent: <Button size="medium">Action</Button>,
    InputProps: {
      placeholder: 'Start Typing...',
      inputSize: 'medium'
    }
  }
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Q=["Default","WithAutocomplete"];export{r as Default,i as WithAutocomplete,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=InputGroup.stories-3a884e2e.js.map
