import{s as u,X as n,bs as s,Y as b,bt as $,bu as x,r as S,e as f,f as m,_ as p,j as r,i as C,l as y,bv as j}from"./index-DCohMUSq.js";import{a as R,C as z}from"./RhfTextField-CQjN9Et2.js";import{F as B}from"./FormControlLabel-CtTwhY4e.js";import{S as _}from"./SwitchBase-lNz_gExs.js";import{F}from"./TextField-D_JdeLxl.js";const T=["className","color","edge","size","sx"],M=t=>{const{classes:a,edge:o,size:i,color:c,checked:e,disabled:h}=t,g={root:["root",o&&`edge${n(o)}`,`size${n(i)}`],switchBase:["switchBase",`color${n(c)}`,e&&"checked",h&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},v=y(g,j,a);return p({},a,v)},N=u("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.root,o.edge&&a[`edge${n(o.edge)}`],a[`size${n(o.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${s.thumb}`]:{width:16,height:16},[`& .${s.switchBase}`]:{padding:4,[`&.${s.checked}`]:{transform:"translateX(16px)"}}}}]}),O=u(_,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.switchBase,{[`& .${s.input}`]:a.input},o.color!=="default"&&a[`color${n(o.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${s.checked}`]:{transform:"translateX(20px)"},[`&.${s.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${s.checked} + .${s.track}`]:{opacity:.5},[`&.${s.disabled} + .${s.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${s.input}`]:{left:"-100%",width:"300%"}}),({theme:t})=>({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:b(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(([,a])=>a.main&&a.light).map(([a])=>({props:{color:a},style:{[`&.${s.checked}`]:{color:(t.vars||t).palette[a].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[a].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:b(t.palette[a].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${s.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${a}DisabledColor`]:`${t.palette.mode==="light"?$(t.palette[a].main,.62):x(t.palette[a].main,.55)}`}},[`&.${s.checked} + .${s.track}`]:{backgroundColor:(t.vars||t).palette[a].main}}}))]})),D=u("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,a)=>a.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),I=u("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,a)=>a.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),L=S.forwardRef(function(a,o){const i=f({props:a,name:"MuiSwitch"}),{className:c,color:e="primary",edge:h=!1,size:g="medium",sx:v}=i,k=m(i,T),l=p({},i,{color:e,edge:h,size:g}),d=M(l),w=r.jsx(I,{className:d.thumb,ownerState:l});return r.jsxs(N,{className:C(d.root,c),sx:v,ownerState:l,children:[r.jsx(O,p({type:"checkbox",icon:w,checkedIcon:w,ref:o,ownerState:l},k,{classes:p({},d,{root:d.switchBase})})),r.jsx(D,{className:d.track,ownerState:l})]})});function U({name:t,helperText:a,...o}){const{control:i}=R();return r.jsx(z,{name:t,control:i,render:({field:c,fieldState:{error:e}})=>r.jsxs("div",{children:[r.jsx(B,{control:r.jsx(L,{...c,checked:c.value}),...o}),(!!e||a)&&r.jsx(F,{error:!!e,children:e?e==null?void 0:e.message:a})]})})}export{U as R,L as S};