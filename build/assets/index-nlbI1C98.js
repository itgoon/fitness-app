import{g as se,d as oe,s as q,B as fe,_ as f,e as ne,r,f as Z,h as xe,j as e,i as U,k as w,l as G,m as ae,T as j,S as J,n as K,o as ge,p as V,q as be,t as re,u as le,v as H,I as M,c as Ce,b as W,D as ve,w as je,x as ke}from"./index-B4tErV1m.js";import{c as ye,a as Y,u as Ie,o as Se}from"./index.esm-DXLtE71n.js";import"./upgradeStorageIllustration-CM9rpnov.js";import{u as ie,f as Pe,T as Be,S as L,I as Fe,F as Re,a as $e}from"./StepFlow-Deoq86ms.js";import{B as T}from"./index-CD33e-uT.js";import"./MenuList-DpVXUx6A.js";function ze(t){return se("PrivateSwitchBase",t)}oe("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Le=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],we=t=>{const{classes:s,checked:o,disabled:l,edge:a}=t,n={root:["root",o&&"checked",l&&"disabled",a&&`edge${w(a)}`],input:["input"]};return G(n,ze,s)},Ne=q(fe)(({ownerState:t})=>f({padding:9,borderRadius:"50%"},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12})),Ae=q("input",{shouldForwardProp:ne})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Te=r.forwardRef(function(s,o){const{autoFocus:l,checked:a,checkedIcon:n,className:i,defaultChecked:x,disabled:c,disableFocusRipple:d=!1,edge:g=!1,icon:S,id:b,inputProps:k,inputRef:C,name:P,onBlur:p,onChange:v,onFocus:h,readOnly:$,required:N=!1,tabIndex:z,type:y,value:R}=s,I=Z(s,Le),[B,m]=xe({controlled:a,default:!!x,name:"SwitchBase",state:"checked"}),u=ie(),ue=F=>{h&&h(F),u&&u.onFocus&&u.onFocus(F)},pe=F=>{p&&p(F),u&&u.onBlur&&u.onBlur(F)},he=F=>{if(F.nativeEvent.defaultPrevented)return;const X=F.target.checked;m(X),v&&v(F,X)};let A=c;u&&typeof A>"u"&&(A=u.disabled);const me=y==="checkbox"||y==="radio",O=f({},s,{checked:B,disabled:A,disableFocusRipple:d,edge:g}),Q=we(O);return e.jsxs(Ne,f({component:"span",className:U(Q.root,i),centerRipple:!0,focusRipple:!d,disabled:A,tabIndex:null,role:void 0,onFocus:ue,onBlur:pe,ownerState:O,ref:o},I,{children:[e.jsx(Ae,f({autoFocus:l,checked:a,defaultChecked:x,className:Q.input,disabled:A,id:me?b:void 0,name:P,onChange:he,readOnly:$,ref:C,required:N,ownerState:O,tabIndex:z,type:y},y==="checkbox"&&R===void 0?{}:{value:R},k)),B?n:S]}))});function Ee(t){return se("MuiFormControlLabel",t)}const E=oe("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),qe=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],_e=t=>{const{classes:s,disabled:o,labelPlacement:l,error:a,required:n}=t,i={root:["root",o&&"disabled",`labelPlacement${w(l)}`,a&&"error",n&&"required"],label:["label",o&&"disabled"],asterisk:["asterisk",a&&"error"]};return G(i,Ee,s)},Me=q("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:o}=t;return[{[`& .${E.label}`]:s.label},s.root,s[`labelPlacement${w(o.labelPlacement)}`]]}})(({theme:t,ownerState:s})=>f({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${E.disabled}`]:{cursor:"default"}},s.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},s.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},s.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${E.label}`]:{[`&.${E.disabled}`]:{color:(t.vars||t).palette.text.disabled}}})),De=q("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(t,s)=>s.asterisk})(({theme:t})=>({[`&.${E.error}`]:{color:(t.vars||t).palette.error.main}})),Ue=r.forwardRef(function(s,o){var l,a;const n=ae({props:s,name:"MuiFormControlLabel"}),{className:i,componentsProps:x={},control:c,disabled:d,disableTypography:g,label:S,labelPlacement:b="end",required:k,slotProps:C={}}=n,P=Z(n,qe),p=ie(),v=(l=d??c.props.disabled)!=null?l:p==null?void 0:p.disabled,h=k??c.props.required,$={disabled:v,required:h};["checked","name","onChange","value","inputRef"].forEach(B=>{typeof c.props[B]>"u"&&typeof n[B]<"u"&&($[B]=n[B])});const N=Pe({props:n,muiFormControl:p,states:["error"]}),z=f({},n,{disabled:v,labelPlacement:b,required:h,error:N.error}),y=_e(z),R=(a=C.typography)!=null?a:x.typography;let I=S;return I!=null&&I.type!==j&&!g&&(I=e.jsx(j,f({component:"span"},R,{className:U(y.label,R==null?void 0:R.className),children:I}))),e.jsxs(Me,f({className:U(y.root,i),ownerState:z,ref:o},P,{children:[r.cloneElement(c,$),h?e.jsxs(J,{display:"block",children:[I,e.jsxs(De,{ownerState:z,"aria-hidden":!0,className:y.asterisk,children:[" ","*"]})]}):I]}))}),Oe=K(e.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Ve=K(e.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),He=K(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),We=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Ze=t=>{const{classes:s,indeterminate:o,color:l,size:a}=t,n={root:["root",o&&"indeterminate",`color${w(l)}`,`size${w(a)}`]},i=G(n,be,s);return f({},s,i)},Ge=q(Te,{shouldForwardProp:t=>ne(t)||t==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:o}=t;return[s.root,o.indeterminate&&s.indeterminate,s[`size${w(o.size)}`],o.color!=="default"&&s[`color${w(o.color)}`]]}})(({theme:t,ownerState:s})=>f({color:(t.vars||t).palette.text.secondary},!s.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${s.color==="default"?t.vars.palette.action.activeChannel:t.vars.palette[s.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:ge(s.color==="default"?t.palette.action.active:t.palette[s.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},s.color!=="default"&&{[`&.${V.checked}, &.${V.indeterminate}`]:{color:(t.vars||t).palette[s.color].main},[`&.${V.disabled}`]:{color:(t.vars||t).palette.action.disabled}})),Je=e.jsx(Ve,{}),Ke=e.jsx(Oe,{}),Qe=e.jsx(He,{}),Xe=r.forwardRef(function(s,o){var l,a;const n=ae({props:s,name:"MuiCheckbox"}),{checkedIcon:i=Je,color:x="primary",icon:c=Ke,indeterminate:d=!1,indeterminateIcon:g=Qe,inputProps:S,size:b="medium",className:k}=n,C=Z(n,We),P=d?g:c,p=d?g:i,v=f({},n,{color:x,indeterminate:d,size:b}),h=Ze(v);return e.jsx(Ge,f({type:"checkbox",inputProps:f({"data-indeterminate":d},S),icon:r.cloneElement(P,{fontSize:(l=P.props.fontSize)!=null?l:b}),checkedIcon:r.cloneElement(p,{fontSize:(a=p.props.fontSize)!=null?a:b}),ownerState:v,ref:o,className:U(h.root,k)},C,{classes:h}))});function ce({children:t}){const o=re("up",420)?5:2;return e.jsx(J,{sx:{flexDirection:"column",justifyContent:"space-between"},spacing:4,paddingLeft:o,paddingRight:o,children:t})}function de(){const t=le();return e.jsxs(H,{sx:{display:"flex",alignItems:"center",padding:"15px 0"},children:[e.jsx(M,{name:"LeftArrow",onClick:()=>t("/login")}),e.jsx(H,{sx:{flex:1,display:"flex",justifyContent:"center"},children:e.jsx(j,{variant:"Body18/bold",children:"회원가입"})})]})}function D({size:t="medium",fullWidth:s=!0,...o}){return e.jsx(Be,{fullWidth:s,size:t,...o})}const ee=[{label:"확인",value:"이름을 입력해주세요"},{label:"확인",value:"생년월일을 입력해주세요"},{label:"본인인증",value:"휴대폰 번호를 입력해주세요"}];function Ye({onNext:t,data:s,setData:o}){const[l,a]=r.useState(!0),[n,i]=r.useState(0);r.useEffect(()=>{a(!0),s.length>=3&&a(!1)},[n,s,l]);const x=()=>{i(c=>c+1),a(!0),o("")};return e.jsxs(e.Fragment,{children:[e.jsxs(ce,{children:[e.jsx(de,{}),e.jsxs(J,{gap:4,paddingLeft:.5,paddingRight:.5,children:[e.jsx(j,{variant:"h3",children:ee[n].value,fontWeight:600}),n===2&&e.jsx(e.Fragment,{children:e.jsx(D,{size:"large",variant:"standard",label:"휴대폰 번호",placeholder:"010 -",color:"primary",inputProps:{pattern:"^[0-9-]*$",maxLength:11},onChange:c=>o(c.target.value)})}),n>=1&&e.jsx(e.Fragment,{children:e.jsx(D,{size:"large",variant:"standard",label:"생년월일",placeholder:"예) 19900101",inputProps:{pattern:"^[0-9]*$",maxLength:8},color:"primary",onChange:c=>o(c.target.value)})}),e.jsx(D,{size:"large",variant:"standard",label:"이름",placeholder:"홍길동",color:"primary",inputProps:{pattern:"^[가-힣a-zA-Z]*$",maxLength:4},onChange:c=>{const d=c.target.value.replace(/[^가-힣a-zA-Z]/g,"");o(d)}})]})]}),!l&&e.jsx(T,{variant:"contained",color:"primary",size:"large",onClick:()=>{n===2?t():x()},children:ee[n].label,sx:{borderRadius:0}})]})}function _({label:t,onClick:s,onChange:o,variant:l="Body16/light",isChecked:a}){return e.jsxs(H,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(Ue,{label:e.jsx(j,{variant:l,children:t}),control:e.jsx(Xe,{checked:a,onChange:o,checkedIcon:e.jsx(M,{name:"CheckSvg"}),icon:e.jsx(M,{name:"CheckSvg"})})}),s&&e.jsx(M,{name:"RightArrowSvg",onClick:s})]})}const te=180,et=6;function tt({onNext:t}){const s=Ce();W(),W();const[o,l]=r.useState(!1),[a,n]=r.useState(te),[i,x]=r.useState(""),[c,d]=r.useState(!1),[g,S]=r.useState(!1),[b,k]=r.useState(!0),[C,P]=r.useState(!0),[p,v]=r.useState(!0),[h,$]=r.useState(!0),N="123456";r.useEffect(()=>{let m;return m=setInterval(()=>{n(u=>u<=1?0:u-1)},1e3),()=>clearInterval(m)},[]),r.useEffect(()=>{d(!1),i.length===6&&d(!0)},[i]),r.useEffect(()=>{k(!!(C&&p&&h))},[C,p,h]);const z=r.useCallback(()=>{const m=!b;k(m),P(m),v(m),$(m)},[b]),y=m=>{const u=m.target.value.replace(/\D/g,"");u.length<=et&&x(u)},R=()=>{N===i&&a!==0?S(!0):a===0?alert("인증번호 입력시간이 초과되었습니다."):l(!0)},I=()=>{n(te),d(!1)},B=()=>{const m=Math.floor(a/60),u=a%60;return`${m}:${u<10?`0${u}`:u}`};return e.jsxs(e.Fragment,{children:[e.jsxs(ce,{children:[e.jsx(de,{}),e.jsxs(L,{gap:5,paddingLeft:.5,paddingRight:.5,children:[e.jsxs(L,{gap:4,children:[e.jsx(j,{variant:"Body24/semiBold",children:"휴대폰번호로 전송된 6자리 인증번호를 입력해주세요"}),e.jsx(D,{error:!!o,helperText:o?"잘못된 인증번호 입니다. 다시 입력해주세요.":"",size:"large",type:"number",variant:"standard",label:"인증번호",placeholder:"전송 받은 6자리 인증번호를 입력해주세요",color:"primary",onChange:y,inputProps:{maxLength:6},InputProps:{endAdornment:e.jsx(Fe,{position:"end",children:e.jsx(j,{variant:"Body16/regular",color:"#2962FF",children:B()})})}})]}),e.jsxs(L,{gap:1.5,children:[e.jsx(j,{color:s.palette.grey[600],variant:"Body14/regular",children:"혹시 인증번호를 받지 못하셨나요?"}),e.jsx(T,{variant:"soft",onClick:I,children:"인증번호 재전송"})]})]})]}),c&&e.jsx(T,{variant:"contained",color:"primary",children:"완료",size:"large",onClick:R,sx:{borderRadius:0}}),e.jsx(ve,{open:g,onClose:()=>S(!1),anchor:"bottom",children:e.jsxs(L,{gap:4,children:[e.jsx(j,{children:"회원가입 약관을 확인해주세요"}),e.jsxs(L,{gap:2,children:[e.jsx(_,{label:"약관 전체 동의",variant:"Body16/bold",isChecked:b,onChange:z}),e.jsx(je,{}),e.jsx(_,{label:"[필수] 오비서 이용약관 동의",isChecked:C,onChange:()=>P(!C),onClick:()=>console.log("1")}),e.jsx(_,{label:"[필수] 오비서 개인정보 처리 동의",isChecked:p,onChange:()=>v(!p),onClick:()=>console.log("2")}),e.jsx(_,{label:"[선택] 광고 및 마케팅 수신 동의",isChecked:h,onChange:()=>$(!h),onClick:()=>console.log("3")})]}),e.jsxs(L,{gap:.5,children:[e.jsx(T,{variant:"contained",disabled:!(C&&p),color:"primary",size:"large",onClick:t,children:"약관 동의"}),e.jsx(T,{color:"secondary",children:"닫기",size:"large",onClick:()=>S(!1)})]})]})})]})}function st(){const t=le();return e.jsxs(L,{spacing:2.5,children:[e.jsx(j,{sx:{textAlign:"center"},children:"회원가입이 완료 되었습니다!"}),e.jsx(j,{sx:{textAlign:"center"},children:"로그인 후 지금 바로 서비스를 이용해 보세요."}),e.jsx(ke,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",onClick:()=>t("/login"),children:"로그인 후 이용하기"})]})}function ct(){re("up","md"),W();const[t,s]=r.useState(""),[o,l]=r.useState(0),a=ye().shape({userId:Y().required("이메일을 입력해주새요."),password:Y().required("비밀번호를 입력해주세요.")}),n=Ie({resolver:Se(a),defaultValues:{userId:"",password:""}}),i=()=>{l(g=>g+1)},{handleSubmit:x,formState:{isSubmitting:c}}=n,d=x(async g=>{});return e.jsx(Re,{methods:n,onSubmit:d,sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},children:e.jsxs($e,{activeStep:o,onNext:i,children:[e.jsx(Ye,{onNext:i,data:t,setData:s}),e.jsx(tt,{onNext:i}),e.jsx(st,{})]})})}export{ct as default};