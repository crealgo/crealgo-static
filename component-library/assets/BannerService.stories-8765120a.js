import{a as l,F as d,j as r}from"./jsx-runtime-c2efdcba.js";import{r as u}from"./index-2812c619.js";import{g as B}from"./chance-a681a54c.js";import{a as s,B as a}from"./BannerService-b2d6962a.js";import{B as f}from"./Button-77e6833e.js";import"./_commonjsHelpers-725317a4.js";import"./ActionStack-fcf795f3.js";import"./Stack-a3a99865.js";import"./defaultTheme-d0849189.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./styled-899f007b.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./useThemeProps-4c706523.js";import"./Typography-e61b6c49.js";import"./clsx.m-1229b3e0.js";import"./generateUtilityClasses-bdae82bf.js";import"./Container-f017ee1c.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./emotion-react.browser.esm-511d925c.js";import"./IconButton-5a555d0a.js";import"./IconButtonBase-062b793c.js";import"./ButtonBase-890a84e2.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./Close-da405464.js";import"./createSvgIcon-4ae69272.js";import"./Collapse-7c6ba631.js";import"./utils-74941807.js";import"./index-62c31eed.js";import"./useTheme-009cd14c.js";import"./ButtonBase-7b58a963.js";import"./colors-55af66f1.js";const X={component:s,subcomponents:{Banner:a}},e={render:i=>{const[m,n]=u.useState(!0),c=()=>{n(!0)};return l(d,{children:[r(s,{open:m,children:r(a,{...i,onCloseClick:()=>{n(!1)}})}),r("br",{}),r(f,{onClick:c,children:"Open Banner"})]})},args:B()};var o,t,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
//# sourceMappingURL=BannerService.stories-8765120a.js.map
