import{c as o}from"./colors-55af66f1.js";import{h as e}from"./defaultTheme-d0849189.js";const a=(n="background",l="",r=1)=>[e(o.red[500],r),e(o.orange[500],r),e(o.green[500],r),e(o.blue[500],r),e(o.purple[500],r)].reduce((c,s,t)=>`
		${c}
		&:nth-of-type(${t+1}n) ${l} {
			${n}: ${s};
		}
	`,"");export{a as c};
//# sourceMappingURL=colorIterator-d2938b85.js.map
