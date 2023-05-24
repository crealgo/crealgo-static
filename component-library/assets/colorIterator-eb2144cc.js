import{c as o}from"./colors-9bc9497b.js";import{b as e}from"./defaultTheme-8fe9975f.js";const a=(n="background",l="",r=1)=>[e(o.red[500],r),e(o.orange[500],r),e(o.green[500],r),e(o.blue[500],r),e(o.purple[500],r)].reduce((c,s,t)=>`
		${c}
		&:nth-of-type(${t+1}n) ${l} {
			${n}: ${s};
		}
	`,"");export{a as c};
//# sourceMappingURL=colorIterator-eb2144cc.js.map
