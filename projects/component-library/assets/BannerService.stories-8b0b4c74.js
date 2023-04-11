import{a as l,F as d,j as r}from"./defaultTheme-30e43ede.js";import{r as u}from"./index-2812c619.js";import{n as B}from"./chance-dbb8c3cf.js";import{a as s,B as a}from"./BannerService-f88faa56.js";import{B as f}from"./Button-ebd51bfd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./_commonjsHelpers-725317a4.js";import"./ActionStack-e2087fb9.js";import"./Stack-71a65dae.js";import"./styled-8f152a82.js";import"./useThemeProps-cbfa8a8e.js";import"./Typography-b4c27325.js";import"./clsx.m-1229b3e0.js";import"./generateUtilityClasses-0f0148c0.js";import"./Block-81203b25.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./emotion-react.browser.esm-18e2571c.js";import"./IconButton-88d48bec.js";import"./IconButtonBase-fffc9118.js";import"./ButtonBase-63fd7aa9.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-d7a6185f.js";import"./useIsFocusVisible-9b2ab6cf.js";import"./useForkRef-9773819b.js";import"./Close-8324657b.js";import"./createSvgIcon-7fe6f70f.js";import"./Collapse-9d371e2b.js";import"./utils-7846287f.js";import"./index-62c31eed.js";import"./useTheme-565714fd.js";import"./ButtonBase-d3dd63a4.js";import"./colors-55af66f1.js";const X={component:s,subcomponents:{Banner:a}},e={render:i=>{const[m,n]=u.useState(!0),c=()=>{n(!0)};return l(d,{children:[r(s,{open:m,children:r(a,{...i,onCloseClick:()=>{n(!1)}})}),r("br",{}),r(f,{onClick:c,children:"Open Banner"})]})},args:B()};var o,t,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return <>
                <BannerService open={open}>
                    <Banner {...args} onCloseClick={handleClose} />
                </BannerService>
                <br />
                <Button onClick={handleOpen}>Open Banner</Button>
            </>;
  },
  args: generateBanner()
}`,...(p=(t=e.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const Y=["Default"];export{e as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=BannerService.stories-8b0b4c74.js.map
