(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(2544)}])},3537:function(e,n,t){"use strict";t.d(n,{u:function(){return a}});var r=t(1953),a=(0,t(7074).ZP)(r.Z)(function(e){var n=e.size;return{display:"grid",gridTemplateColumns:"1fr",alignContent:"start",gap:({small:"1rem",medium:"2rem",large:"3rem"})[null!=n?n:"medium"]}});a.defaultProps={className:"ContentGrid-root"}},345:function(e,n,t){"use strict";t.d(n,{M:function(){return u}});var r=t(7297),a=t(5893),s=t(6042),i=t(9396),o=t(6829);function l(){var e=(0,r.Z)(["\n	position: absolute;\n	display: flex;\n	flex-direction: row;\n	gap: 0.05em;\n	left: 0.05em;\n	transform: translateY(-0.125em);\n\n	div {\n		width: 0.175em;\n		height: 0.175em;\n		border-radius: 50%;\n\n		&:nth-child(1) {\n			background: var(--color-brand-primary-main);\n		}\n\n		&:nth-child(2) {\n			background: var(--color-brand-secondary-main);\n		}\n\n		&:nth-child(3) {\n			background: var(--color-brand-tertiary-main);\n		}\n\n		&:nth-child(4) {\n			background: var(--color-text-primary);\n		}\n	}\n"]);return l=function(){return e},e}var c=(0,o.Z)(function(e){return(0,a.jsxs)("div",(0,i.Z)((0,s.Z)({},e),{children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]}))})(l());function d(){var e=(0,r.Z)(["\n	position: relative;\n"]);return d=function(){return e},e}var m=o.Z.span(d()),u=function(e){var n=e.children,t=e.className;return(0,a.jsxs)(m,{className:t,children:[n,(0,a.jsx)(c,{})]})}},5726:function(e,n,t){"use strict";t.d(n,{H:function(){return J}});var r=t(6042),a=t(9534),s=t(7297),i=t(5893),o=t(6829),l=t(8715),c=t(6195),d=t(4124),m=t(9630),u=t(6010),p=t(4944),g=t(1944),x=t(3537),h=t(2562),f=t(9396),v=t(917),y=t(7074);function b(){var e=(0,s.Z)(["\n					cursor: pointer;\n\n					&:hover {\n						color: ",";\n					}\n			  "]);return b=function(){return e},e}function w(){var e=(0,s.Z)(["\n		","\n\n		display: grid;\n		grid-template-columns: auto 1fr;\n		gap: 0.25rem;\n\n		align-items: center;\n		color: ",";\n\n		","\n	"]);return w=function(){return e},e}var j=(0,y.ZP)("div")(function(e){var n=e.theme,t=e.isContained,r=e.isActionable;return(0,v.iv)(w(),t&&"\n		padding-inline: 1rem;\n		padding-block: 0.75rem;\n\n		border-radius: 0.25rem;\n		background-color: ".concat(n.palette.grey[300],";\n		border: solid 1px ").concat(n.palette.grey[50],";\n		outline: solid 1px ").concat(n.palette.grey[400],";\n	"),n.palette.grey[700],r?(0,v.iv)(b(),n.palette.primary.main):null)}),Z=function(e){var n=e.IconComponent,t=void 0===n?c.Z:n,s=e.text,o=(0,a.Z)(e,["IconComponent","text"]);return(0,i.jsxs)(j,(0,f.Z)((0,r.Z)({className:"StatusMessage-root"},o),{children:[(0,i.jsx)(t,{fontSize:"small"}),(0,i.jsx)(m.Z,{className:"StatusMessage-text",variant:"body1",component:"span",children:s})]}))},N=t(5364);function k(){var e=(0,s.Z)(["\n		--background-color: #ffffff;\n		--border-color: #cbd5e1;\n\n		display: inline-flex;\n		flex-direction: row;\n		justify-content: center;\n		align-items: center;\n		padding: 10px 20px 10px ",";\n		gap: 4px;\n\n		font-weight: 600;\n		letter-spacing: -0.01rem;\n\n		border-radius: 9999px;\n		background-color: var(--background-color);\n		border: var(--button-border-primary);\n		box-shadow: var(--button-shadow-primary);\n\n		mark {\n			background-color: unset;\n		}\n\n		.Button-icon,\n		mark {\n			color: var(--button-background-color-",");\n		}\n\n		.Button-icon {\n			display: inline-flex;\n			font-size: 24px;\n		}\n	"]);return k=function(){return e},e}var H=(0,o.Z)(function(e){var n=e.className,t=e.icon,s=e.children,o=(0,a.Z)(e,["className","icon","children"]);return(0,i.jsx)(N.X,(0,f.Z)((0,r.Z)({type:"button",className:(0,u.Z)("TidBit-root",n),startIcon:t},o),{children:s}))})(function(e){var n=e.icon,t=e.color;return(0,v.iv)(k(),n?"14px":"20px",void 0===t?"primary":t)}),M=t(6706),C=t(2046),W=t(4048);function B(){var e=(0,s.Z)(["\n		--tooltip-line-height: 0.9rem;\n\n		."," {\n			background-color: #ffffff;\n			border: 1px solid rgba(0, 0, 0, 0.23);\n			color: rgba(0, 0, 0, 0.87);\n			box-shadow: ",";\n			display: inline-flex;\n			place-items: center;\n			place-content: center;\n			gap: 0.25em;\n\n			.Tooltip-text {\n				// light theme\n				display: inline-flex;\n				vertical-align: middle;\n				line-height: auto;\n			}\n			.Tooltip-icon {\n				display: inline-flex;\n				font-size: var(--tooltip-line-height);\n				line-height: auto;\n			}\n		}\n	"]);return B=function(){return e},e}function A(){var e=(0,s.Z)(["\n	all: unset;\n\n	cursor: pointer;\n	display: inline-flex;\n	place-content: center;\n	place-items: center;\n\n	aspect-ratio: 1 / 1;\n	padding: 0.5rem;\n	width: 15rem;\n	margin: 0 0.5rem;\n	filter: grayscale(100%);\n	opacity: 0.5;\n	transition: all 100ms ease-in-out;\n\n	&:hover {\n		opacity: 1;\n		filter: grayscale(0%);\n		transform: translateY(-3px);\n	}\n"]);return A=function(){return e},e}var O=(0,y.ZP)(function(e){var n=e.className,t=(0,a.Z)(e,["className"]);return(0,i.jsx)(M.Z,(0,f.Z)((0,r.Z)({},t),{classes:{popper:n}}))})(function(e){var n=e.theme;return(0,v.iv)(B(),C.Z.tooltip,n.shadows[2])}),S=(0,y.ZP)("a")(A()),G=function(e){var n=e.children,t=(0,a.Z)(e,["children"]),s=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"Tooltip-text",children:t.title}),t.href&&(0,i.jsx)(W.Z,{className:"Tooltip-icon"})]});return(0,i.jsx)(O,{followCursor:!0,title:s,children:(0,i.jsx)(S,(0,f.Z)((0,r.Z)({},t),{children:n}))})},T=t(5968);function _(){var e=(0,s.Z)(["\n	padding-top: 4rem !important;\n	padding-bottom: 4rem !important;\n"]);return _=function(){return e},e}var q=(0,o.Z)(T.g)(_()),D=function(e){return(0,i.jsx)("figure",{style:{display:"flex",height:"100%",width:"inherit",placeItems:"center",placeContent:"center",margin:"0 0.5rem"},children:(0,i.jsx)("img",{style:(0,r.Z)({objectFit:"contain"},e.styleOverrides),height:"100%",width:"100%",src:e.image,alt:e.name})})},E=t(7005);function F(){var e=(0,s.Z)(["\n	overflow: hidden;\n\n	.overlay {\n		pointer-events: none;\n	}\n"]);return F=function(){return e},e}var Y=(0,o.Z)(E.Z)(F()),z=function(e){return(0,i.jsx)(m.Z,{marginX:"2rem",variant:"h3",color:"grey.500",sx:(0,r.Z)({cursor:"pointer","&:hover":{color:"grey.700"}},e.styleOverrides),children:e.name})},I=t(9008),P=t.n(I);function X(){var e=(0,s.Z)(["\n	font-size: 2rem;\n	white-space: nowrap;\n"]);return X=function(){return e},e}var K=o.Z.span(X()),L=function(e){var n,t=null!==(n=e.font)&&void 0!==n?n:"Karla";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(P(),{children:[(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=".concat(t,"&display=swap"),rel:"stylesheet"})]}),(0,i.jsx)(K,{style:(0,r.Z)({fontFamily:t},e.styleOverrides),children:e.name})]})};function V(){var e=(0,s.Z)(["\n	display: grid;\n	gap: 1rem;\n\n	.ActionStack-root {\n		margin-top: 2.5rem;\n	}\n"]);return V=function(){return e},e}var R=(0,o.Z)(g.W)(V()),U=function(e,n){var t,a={logo:(0,i.jsx)(D,(0,r.Z)({},e)),type:(0,i.jsx)(L,(0,r.Z)({},e)),default:(0,i.jsx)(z,(0,r.Z)({},e))}[null!==(t=e.type)&&void 0!==t?t:"default"];return(0,i.jsx)(G,{href:e.url,title:e.name,children:a},n)},J=function(e){var n=e.className,t=e.companies,r=(0,a.Z)(e,["className","companies"]);return(0,i.jsx)(q,{className:(0,u.Z)(n,"FeaturedInBlock-root"),children:(0,i.jsxs)(R,{children:[(0,i.jsxs)(x.u,{size:"small",textAlign:"center",marginX:"auto",maxWidth:"50rem",children:[(0,i.jsxs)(h.X,{level:4,children:["We work with ",(0,i.jsx)("mark",{children:"creatives"})," like you."]}),(0,i.jsx)(m.Z,{variant:"body2",children:r.description})]}),(null==t?void 0:t.length)?(0,i.jsx)(Y,{pauseOnHover:!0,play:t.length>1,children:t.map(U)}):(0,i.jsx)(Z,{isContained:!0,IconComponent:c.Z,text:"No Images Available"}),(0,i.jsx)(p.k,{align:"center",size:"large",actions:[{label:"Leave a Review",color:"text",endIcon:(0,i.jsx)(d.Z,{})}],children:(0,i.jsxs)(H,{href:"#yelp-test",icon:(0,i.jsx)(l.mF,{}),children:["Trusted by ",(0,i.jsx)("mark",{children:"150+"})," on ",(0,i.jsx)("mark",{children:"Yelp"})]})})]})})}},2544:function(e,n,t){"use strict";t.r(n),t.d(n,{Example:function(){return y},default:function(){return b}});var r=t(603),a=t(7297),s=t(5893),i=t(5726),o=t(9656),l=t(7294),c=t(9008),d=t.n(c),m=t(345),u=t(2562),p=t(6829),g=t(9630),x=[{type:"logo",name:"Melissa King",url:"https://www.chefmelissaking.com/",image:"assets/collabs/melissa-king.png"},{type:"logo",name:"Bob's Liquor Store",url:"https://www.bobsliquorstore.com/",image:"assets/collabs/bobs-liquor-store.webp"},{type:"logo",name:"Black Beverly Hills",url:"https://www.blackbh.com/",image:"assets/collabs/bbh-gold.webp",styleOverrides:{transform:"scale(0.75)"}},{type:"logo",name:"San Gabriel Academy",url:"https://www.sangabrielacademy.org/",image:"assets/collabs/san-gabriel-academy.png",styleOverrides:{filter:"invert(1)"}},{type:"logo",name:"Solano Elementary School",url:"https://solano-lausd-ca.schoolloop.com/",image:"assets/collabs/solano-scholars.png",styleOverrides:{transform:"scale(1.5)"}},{type:"logo",name:"550 Wheels",url:"https://550wheels.com/",image:"assets/collabs/550-wheels.webp"},{type:"logo",name:"Have It All",url:"https://haveittall.com/",image:"assets/collabs/have-it-tall.webp"},{type:"logo",name:"Hot 8 Yoga",url:"https://www.hot8yoga.com/",image:"assets/collabs/hot-8-yoga.png"},{type:"logo",name:"LuluLemon",image:"assets/collabs/lululemon.svg",styleOverrides:{transform:"scale(0.675)"}},{type:"logo",name:"AeroVironment",url:"https://www.avinc.com/",image:"assets/collabs/aerovironment.png"},{type:"type",name:"JON SKYWALKER",url:"https://jonskywalker.com/",font:"https://fonts.googleapis.com/css2?family=Karla&display=swap",styleOverrides:{color:"#19162e",fontFamily:"Karla, sans-serif",fontWeight:400,letterSpacing:"-0.025em"}}];function h(){var e=(0,a.Z)(["\n	background: var(--color-brand-primary-light);\n	margin-top: -5rem;\n	padding-top: 5rem;\n\n	.Heading-root,\n	.MuiTypography-root {\n		color: var(--color-brand-primary-dark);\n	}\n"]);return h=function(){return e},e}var f=[{name:"Collaborative Approach",description:"We believe in working closely with our clients as partners, involving them in the design process to ensure that the end result meets their expectations."},{name:"Creative Excellence",description:"Our team of skilled designers are passionate about their craft and strive for excellence in every project, creating visually appealing designs that stand out in the market."},{name:"Strategic Thinking",description:"We take a strategic approach to design, ensuring that our solutions are aligned with your brand's objectives, target audience, and market positioning."},{name:"Timely Delivery",description:"We understand the importance of meeting deadlines, and our team works diligently to deliver high-quality designs within the agreed-upon timeframe."},{name:"Exceptional Customer Service",description:"We pride ourselves on providing outstanding customer service, keeping our clients informed, and providing prompt responses to their inquiries throughout the design process."}],v=(0,p.Z)("div")(h()),y=function(){var e=(0,r.Z)((0,l.useState)(!1),2);return e[0],e[1],(0,s.jsxs)(o.H,{pageTitle:"About Us",children:[(0,s.jsx)(d(),{children:(0,s.jsx)("script",{src:"https://cdn.tailwindcss.com"})}),(0,s.jsx)(v,{className:"relative isolate -z-10",children:(0,s.jsx)("div",{className:"overflow-hidden",children:(0,s.jsx)("div",{className:"mx-auto max-w-7xl px-6",children:(0,s.jsxs)("div",{className:"mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center",children:[(0,s.jsxs)("div",{className:"w-full max-w-xl lg:shrink-0 xl:max-w-2xl",children:[(0,s.jsx)(u.X,{gutterBottom:!0,level:1,children:(0,s.jsx)(m.M,{children:"Our Mission"})}),(0,s.jsx)(g.Z,{className:"mt-6 text-lg leading-8 text-gray-600",children:"Fashion Greek, USC was founded with a vision to provide top-quality printing solutions to businesses of all sizes. Since then, we have grown into a leading printing company, serving clients across various industries and sectors. We have invested in the latest printing technology, expanded our range of services, and built a team of experienced professionals who share our passion for printing."})]}),(0,s.jsxs)("div",{className:"hidden lg:flex justify-end gap-8 sm:justify-start sm:pl-20 lg:pl-0 lg:-my-12",children:[(0,s.jsx)("div",{className:"ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("img",{src:"https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",alt:"",className:"aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"}),(0,s.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"})]})}),(0,s.jsxs)("div",{className:"mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("img",{src:"https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",alt:"",className:"aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"}),(0,s.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("img",{src:"https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80",alt:"",className:"aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"}),(0,s.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"})]})]}),(0,s.jsxs)("div",{className:"w-44 flex-none space-y-8 pt-32 sm:pt-0",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("img",{src:"https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80",alt:"",className:"aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"}),(0,s.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("img",{src:"https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",alt:"",className:"aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"}),(0,s.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"})]})]})]})]})})})}),(0,s.jsxs)("div",{className:"mx-auto mt-16 max-w-7xl px-6 lg:px-8",children:[(0,s.jsxs)("div",{className:"mx-auto max-w-2xl lg:mx-0",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Why Choose Graphix Collab?"}),(0,s.jsx)("p",{className:"mt-6 text-lg leading-8 text-gray-600",children:"Let us bring your visual ideas to life and help you make a lasting impression in the market. Contact us today to discuss your design needs and explore how we can collaborate to create exceptional designs for your brand."})]}),(0,s.jsx)("dl",{className:"mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3",children:f.map(function(e){return(0,s.jsxs)("div",{children:[(0,s.jsx)("dt",{className:"font-semibold text-gray-900",children:e.name}),(0,s.jsx)("dd",{className:"mt-1 text-gray-600",children:e.description})]},e.name)})})]}),(0,s.jsx)(i.H,{className:"my-16",companies:x})]})},b=y}},function(e){e.O(0,[740,492,642,216,656,774,888,179],function(){return e(e.s=9212)}),_N_E=e.O()}]);