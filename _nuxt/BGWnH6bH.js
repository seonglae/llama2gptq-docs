import{J as u,aq as $,I as a,d as _,Y as b,b as I,c as v,n as w,p as P,i as C,e as x,l as f,a2 as D,r as E,N as c}from"./I_SGojHR.js";import j from"./BppbKNfO.js";import"./BFitNxb5.js";import"./CFxAuWRo.js";import"./D88mVuRU.js";import"./CIRNx-vI.js";import"./B8g2O_1g.js";import"./BUGtt6Yl.js";import"./2ETV-d1z.js";import"./CaC_8yaF.js";import"./bMd0tfPn.js";import"./3tZXqiCd.js";async function z(e){const o=u(e);{const{data:n}=await $(`nuxt-component-meta${o?`-${o}`:""}`,()=>$fetch(`/api/component-meta${o?`/${o}`:""}`));return a(()=>n.value)}}const B=e=>(P("data-v-725a9324"),e=e(),C(),e),N=B(()=>x("div",{class:"ellipsis-item"},null,-1)),q=[N],V=_({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(e){const o=a(()=>((t=s)=>t.top)()),n=a(()=>((t=s)=>t.left)()),r=a(()=>((t=s)=>t.right)()),i=a(()=>((t=s)=>t.zIndex)()),l=a(()=>((t=s)=>t.width)()),g=a(()=>((t=s)=>t.height)()),h=a(()=>((t=s)=>`blur(${t.blur})`)()),y=a(()=>((t=s)=>{var p,d,m;return`linear-gradient(97.62deg, ${(p=t==null?void 0:t.colors)==null?void 0:p[0]} 2.27%, ${(d=t==null?void 0:t.colors)==null?void 0:d[1]} 50.88%, ${(m=t==null?void 0:t.colors)==null?void 0:m[2]} 98.48%)`})()),s=e,{$pinceau:S}=b(s,void 0,{_cCN_top:o,_eih_insetInlineStart:n,_IfB_insetInlineEnd:r,_SsE_zIndex:i,_wj8_maxWidth:l,_t33_height:g,_Jfd_filter:h,_yUj_background:y});return(t,p)=>(I(),v("div",{class:w(["ellipsis",[u(S)]])},q,2))}}),k=f(V,[["__scopeId","data-v-725a9324"]]),A=_({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(e){const o=a(()=>D(e.component)),n=E({...e.props}),r=await z(e.component);return{as:o,formProps:n,componentData:r}},render(e){const o=Object.entries(this.$slots).reduce((n,[r,i])=>{if(r.startsWith("component-")){const l=r.replace("component-","");n[l]=i}return n},{});return c("div",{class:"component-playground"},[c("div",{class:"component-playground-wrapper"},[c(k,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),c(e.as,{...e.formProps,class:"component-playground-component"},{...o})]),c(j,{modelValue:e.formProps,componentData:e.componentData,"onUpdate:modelValue":n=>e.formProps=n})])}}),Q=f(A,[["__scopeId","data-v-3d4d3b53"]]);export{Q as default};
