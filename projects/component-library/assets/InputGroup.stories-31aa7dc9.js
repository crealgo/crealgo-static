import{a as c,j as e,F as h}from"./jsx-runtime-c2efdcba.js";import{s as p}from"./emotion-styled.browser.esm-fa7ff235.js";import{A as v}from"./Autocomplete-28cccedf.js";import{I as y}from"./Input-496b71bf.js";import{B as g}from"./Button-77e6833e.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./emotion-react.browser.esm-511d925c.js";import"./ButtonBase-7b58a963.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./styled-899f007b.js";import"./defaultTheme-d0849189.js";import"./ButtonBase-890a84e2.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-4c706523.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./colors-55af66f1.js";const P=p.div`
	display: inline-flex;
	position: relative;
	gap: 0.25rem;
`,I=p.span`
	width: clamp(2rem);
	/* position: absolute; */
	top: 0;
	bottom: 0;
`,S=p(I)`
	left: 0;
`,_=p(I)`
	right: 0;
`,o=({startContent:t,endContent:n,InputProps:z,ref:A,children:f,...T})=>c(P,{...T,children:[t&&e(S,{children:t}),f,n&&e(_,{children:n})]});try{o.displayName="InputGroup",o.__docgenInfo={description:"",displayName:"InputGroup",props:{startContent:{defaultValue:null,description:"",name:"startContent",required:!1,type:{name:"ReactNode"}},endContent:{defaultValue:null,description:"",name:"endContent",required:!1,type:{name:"ReactNode"}},InputProps:{defaultValue:null,description:"",name:"InputProps",required:!1,type:{name:"InputProps"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}}}}}catch{}const K={component:o},r={render:({InputProps:t,...n})=>e(o,{...n,children:e(y,{...t})}),args:{endContent:e(h,{children:e(g,{size:"medium",children:"Action"})}),InputProps:{placeholder:"Start Typing...",inputSize:"medium"}}},i={render:({InputProps:t,...n})=>e(o,{...n,children:c(v,{...t,children:[e("option",{value:"test-things",children:"Test Things"}),e("option",{value:"test-things-1",children:"Test Things 1"}),e("option",{value:"test-things-2",children:"Test Things 2"}),e("option",{value:"test-things-3",children:"Test Things 3"})]})}),args:{endContent:e(h,{children:e(g,{size:"medium",children:"Action"})}),InputProps:{placeholder:"Start Typing...",inputSize:"medium"}}};var s,a,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    InputProps,
    ...args
  }) => <InputGroup {...args}>
            <Input {...InputProps} />
        </InputGroup>,
  args: {
    endContent: <>
                <Button size="medium">Action</Button>
            </>,
    InputProps: {
      placeholder: "Start Typing...",
      inputSize: "medium"
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
    endContent: <>
                <Button size="medium">Action</Button>
            </>,
    InputProps: {
      placeholder: "Start Typing...",
      inputSize: "medium"
    }
  }
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Q=["Default","WithAutocomplete"];export{r as Default,i as WithAutocomplete,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=InputGroup.stories-31aa7dc9.js.map
