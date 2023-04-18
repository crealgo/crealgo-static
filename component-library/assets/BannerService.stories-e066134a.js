import{a as l,F as d,j as e}from"./jsx-runtime-c2efdcba.js";import{r as u}from"./index-2812c619.js";import{g as B}from"./chance-e22ba91b.js";import{a as s,B as a}from"./BannerService-01f82463.js";import{B as f}from"./Button-ce6e9453.js";import"./_commonjsHelpers-725317a4.js";import"./ActionStack-23545f53.js";import"./Stack-bc1126ed.js";import"./defaultTheme-8fe9975f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-125eff8b.js";import"./styled-e2ebe642.js";import"./emotion-styled.browser.esm-fa7ff235.js";import"./emotion-element-6a883da9.browser.esm-be32348c.js";import"./useThemeProps-debefb1f.js";import"./Typography-ce4bf3ba.js";import"./clsx.m-1229b3e0.js";import"./generateUtilityClasses-bdae82bf.js";import"./Container-a6f3098c.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./emotion-react.browser.esm-511d925c.js";import"./IconButton-c5a2f2ee.js";import"./IconButtonBase-7bd83080.js";import"./ButtonBase-7c1dc156.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-4c83d0fb.js";import"./Close-25d400ee.js";import"./createSvgIcon-45dd28ac.js";import"./Collapse-e97c9768.js";import"./utils-7fe413ee.js";import"./index-62c31eed.js";import"./useTheme-e8b6c181.js";import"./ButtonBase-7aae2927.js";const W={component:s,subcomponents:{Banner:a}},r={render:i=>{const[m,n]=u.useState(!0),c=()=>{n(!0)};return l(d,{children:[e(s,{open:m,children:e(a,{...i,onCloseClick:()=>{n(!1)}})}),e("br",{}),e(f,{onClick:c,children:"Open Banner"})]})},args:B()};var o,t,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(t=r.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const X=["Default"];export{r as Default,X as __namedExportsOrder,W as default};
//# sourceMappingURL=BannerService.stories-e066134a.js.map
