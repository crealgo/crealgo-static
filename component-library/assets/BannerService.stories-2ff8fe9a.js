import{a as l,F as d,j as r}from"./jsx-runtime-c2efdcba.js";import{r as u}from"./index-2812c619.js";import{g as B}from"./chance-56e14726.js";import{a as s,B as a}from"./BannerService-27372522.js";import{B as f}from"./Button-90cddc56.js";import"./_commonjsHelpers-725317a4.js";import"./ActionStack-da0a00f9.js";import"./Stack-bc1126ed.js";import"./defaultTheme-8fe9975f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./styled-e2ebe642.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./useThemeProps-debefb1f.js";import"./Typography-ce4bf3ba.js";import"./clsx.m-1229b3e0.js";import"./generateUtilityClasses-bdae82bf.js";import"./Block-7499e844.js";import"./Container-c8e048b9.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./IconButton-5c2535fc.js";import"./IconButtonBase-04d632dd.js";import"./ButtonBase-0d2a43de.js";import"./emotion-react.browser.esm-511d925c.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./useEnhancedEffect-767500c3.js";import"./Close-25d400ee.js";import"./createSvgIcon-45dd28ac.js";import"./Collapse-c108770e.js";import"./utils-354236b1.js";import"./index-62c31eed.js";import"./useTheme-e8b6c181.js";import"./ButtonBase-a4cb8c49.js";const Y={component:s,subcomponents:{Banner:a}},e={render:i=>{const[m,n]=u.useState(!0),c=()=>{n(!0)};return l(d,{children:[r(s,{open:m,children:r(a,{...i,onCloseClick:()=>{n(!1)}})}),r("br",{}),r(f,{onClick:c,children:"Open Banner"})]})},args:B()};var o,t,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(t=e.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const Z=["Default"];export{e as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=BannerService.stories-2ff8fe9a.js.map
