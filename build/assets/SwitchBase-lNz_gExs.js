import{g as X,d as $,s as F,ah as A,_ as i,W as D,r as G,f as H,a1 as J,j as x,i as K,X as M,l as Q}from"./index-DCohMUSq.js";import{u as T}from"./useFormControl-Bc42zwoH.js";function V(e){return X("PrivateSwitchBase",e)}$("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:t,checked:d,disabled:l,edge:a}=e,r={root:["root",d&&"checked",l&&"disabled",a&&`edge${M(a)}`],input:["input"]};return Q(r,V,t)},ee=F(A)(({ownerState:e})=>i({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=F("input",{shouldForwardProp:D})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ae=G.forwardRef(function(t,d){const{autoFocus:l,checked:a,checkedIcon:r,className:w,defaultChecked:h,disabled:y,disableFocusRipple:p=!1,edge:R=!1,icon:P,id:S,inputProps:I,inputRef:v,name:j,onBlur:f,onChange:g,onFocus:m,readOnly:z,required:E=!1,tabIndex:N,type:c,value:b}=t,U=H(t,Y),[k,_]=J({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),o=T(),L=s=>{m&&m(s),o&&o.onFocus&&o.onFocus(s)},q=s=>{f&&f(s),o&&o.onBlur&&o.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;_(C),g&&g(s,C)};let n=y;o&&typeof n>"u"&&(n=o.disabled);const W=c==="checkbox"||c==="radio",u=i({},t,{checked:k,disabled:n,disableFocusRipple:p,edge:R}),B=Z(u);return x.jsxs(ee,i({component:"span",className:K(B.root,w),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:L,onBlur:q,ownerState:u,ref:d},U,{children:[x.jsx(se,i({autoFocus:l,checked:a,defaultChecked:h,className:B.input,disabled:n,id:W?S:void 0,name:j,onChange:O,readOnly:z,ref:v,required:E,ownerState:u,tabIndex:N,type:c},c==="checkbox"&&b===void 0?{}:{value:b},I)),k?r:P]}))});export{ae as S};