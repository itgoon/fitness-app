import{d as S,g as D,s as R,X as k,_ as d,r as L,e as E,f as U,T as v,j as p,i as F,S as A,l as w}from"./index-DCohMUSq.js";import{f as W}from"./Select-DHHIZaYz.js";import{u as z}from"./useFormControl-Bc42zwoH.js";function B(e){return D("MuiFormControlLabel",e)}const t=S("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),H=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],I=e=>{const{classes:o,disabled:l,labelPlacement:n,error:a,required:r}=e,m={root:["root",l&&"disabled",`labelPlacement${k(n)}`,a&&"error",r&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",a&&"error"]};return w(m,B,o)},X=R("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:l}=e;return[{[`& .${t.label}`]:o.label},o.root,o[`labelPlacement${k(l.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${t.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${t.label}`]:{[`&.${t.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),G=R("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${t.error}`]:{color:(e.vars||e).palette.error.main}})),Q=L.forwardRef(function(o,l){var n,a;const r=E({props:o,name:"MuiFormControlLabel"}),{className:m,componentsProps:q={},control:i,disabled:C,disableTypography:$,label:j,labelPlacement:N="end",required:h,slotProps:T={}}=r,_=U(r,H),b=z(),y=(n=C??i.props.disabled)!=null?n:b==null?void 0:b.disabled,u=h??i.props.required,x={disabled:y,required:u};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof r[c]<"u"&&(x[c]=r[c])});const M=W({props:r,muiFormControl:b,states:["error"]}),f=d({},r,{disabled:y,labelPlacement:N,required:u,error:M.error}),g=I(f),P=(a=T.typography)!=null?a:q.typography;let s=j;return s!=null&&s.type!==v&&!$&&(s=p.jsx(v,d({component:"span"},P,{className:F(g.label,P==null?void 0:P.className),children:s}))),p.jsxs(X,d({className:F(g.root,m),ownerState:f,ref:l},_,{children:[L.cloneElement(i,x),u?p.jsxs(A,{display:"block",children:[s,p.jsxs(G,{ownerState:f,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]}):s]}))});export{Q as F};