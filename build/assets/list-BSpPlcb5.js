import{v as I,u as R,M as E,w as L,x as $,y as k,r as a,b as A,j as t,p as h,z as c,A as M,c as x,T as B,S as U}from"./index-DCohMUSq.js";import{l as D}from"./userService-n3-7vaqn.js";import{u as F}from"./useDebounce-C458BMjt.js";import{C as W}from"./CustomBreadcrumbs-Ynp4_ePu.js";import{u as z}from"./TableNoData-l5xlDQj0.js";import{T as N}from"./Table-8g-U-SBX.js";import{u as O}from"./useModal-DQiQv9xr.js";import{C as V}from"./Container-CRU1XRhF.js";import{C as q}from"./Card-tftieEkb.js";import{T as G}from"./TextField-D_JdeLxl.js";import{I as H}from"./InputAdornment-DTQ32jp8.js";import"./TableHead-C-sdwq_b.js";import"./TableRow-CAGk89EI.js";import"./Checkbox-uwB3fCxe.js";import"./SwitchBase-lNz_gExs.js";import"./useFormControl-Bc42zwoH.js";import"./TablePaginationCustom-lHqvqPlH.js";import"./KeyboardArrowRight-BLOc5KWk.js";import"./Select-DHHIZaYz.js";import"./TableFiltersResult-BtUwgqsU.js";import"./TableBody-CL5-UDjZ.js";function ge(){const{t:s}=I(),l=R(),n=E();L();const{openModal:J,openAlert:K,openConfirm:f}=O(),g=$(),m=k(),o=z({defaultOrderBy:"createDate",defaultRowsPerPage:10}),[b,T]=a.useState(void 0),[j,p]=a.useState([]),[Q,S]=a.useState([]),[u,C]=a.useState(0);A();const[r,y]=a.useState({type:"ALL",searchText:""}),v=F(r.searchText?r.searchText:"",200);a.useEffect(()=>{if(!(n!=null&&n.search))return l(-1);const e=new URLSearchParams(n.search),i=e.get("partner")!==null?e.get("partner"):"";if(!i)return l(-1);T(i)},[n]);const P=a.useMemo(()=>[{id:"name",label:s("지점명"),align:"center"},{id:"address",label:s("주소"),align:"center"},{id:"phone",label:s("대표연락처"),align:"center"},{id:"manager",label:s("담당자"),align:"center"},{label:s("삭제"),width:"100px",align:"center",Cell:e=>t.jsx(h,{color:"error",variant:"contained",onClick:i=>{i.stopPropagation(),f({title:`"ㄴ${e==null?void 0:e.name}" 지점을 삭제하시겠습니까?`})},children:s("삭제")})}],[u,o]);a.useEffect(()=>{d()},[o.page,o.rowsPerPage]),a.useEffect(()=>{o.onResetPage(),d()},[r.type,v]);const d=async()=>{const e=await D(r);console.log("res : ",e),p(e.infos),S(e.membershipInfos),C(e.count),setTimeout(()=>{p(e.infos)},300)},w=a.useCallback(e=>{m.push(c.partner.store.details(e))},[m]);return t.jsx(t.Fragment,{children:t.jsxs(V,{maxWidth:g.themeStretch?!1:"lg",children:[t.jsx(W,{heading:`${b} ${s("지점")}`,links:[{name:s("지점")},{name:s("지점목록"),href:c.user.root}],action:t.jsx(h,{component:M,href:c.partner.new,variant:"contained",startIcon:t.jsx(x,{icon:"mingcute:add-line"}),style:{height:45},children:t.jsx(B,{variant:"subtitle2",children:s("지점등록")})}),sx:{mb:{xs:3,md:5}}}),t.jsxs(q,{sx:{minWidth:850},children:[t.jsx(U,{spacing:2,alignItems:{xs:"flex-end",md:"center"},justifyContent:"flex-end",direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:3}},children:t.jsx(G,{value:r.searchText,onChange:e=>y({...r,searchText:e.target.value}),placeholder:`${s("이름")} | ${s("연락처")} | ${s("지점")}`,style:{width:300},InputProps:{startAdornment:t.jsx(H,{position:"start",children:t.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}},"state.searchText")}),t.jsx(N,{table:o,totalElements:u,list:j,columns:P,onSelectRow:e=>{w(String(e.id))}})]})]})})}export{ge as default};