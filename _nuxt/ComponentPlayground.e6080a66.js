import{K as _,az as b,J as a,d as m,af as S,b as $,c as I,n as w,p as P,i as C,e as x,k as u,aq as E,r as z,O as r}from"./entry.1903f6ab.js";import D from"./ComponentPlaygroundData.ef782a29.js";import"./TabsHeader.81291543.js";import"./ComponentPlaygroundProps.f2363c5f.js";import"./ProseH4.90c474c5.js";import"./ProseCodeInline.23d9afbe.js";import"./Badge.56f1e670.js";import"./slot.ff518c59.js";import"./node.c1039640.js";import"./ProseP.264c4107.js";import"./ComponentPlaygroundSlots.vue.1707510b.js";import"./ComponentPlaygroundTokens.vue.6544ca8e.js";async function j(n){const e=_(n);{const{data:o}=await b(`nuxt-component-meta${e?`-${e}`:""}`,()=>$fetch(`/api/component-meta${e?`/${e}`:""}`));return a(()=>o.value)}}const B=n=>(P("data-v-a2bd7d25"),n=n(),C(),n),k=B(()=>x("div",{class:"ellipsis-item"},null,-1)),q=[k],N=m({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(n){const e=n,o=a(()=>((t=e)=>t.top)()),s=a(()=>((t=e)=>t.left)()),c=a(()=>((t=e)=>t.right)()),i=a(()=>((t=e)=>t.zIndex)()),f=a(()=>((t=e)=>t.width)()),g=a(()=>((t=e)=>t.height)()),y=a(()=>((t=e)=>`blur(${t.blur})`)()),h=a(()=>((t=e)=>{var l,d,p;return`linear-gradient(97.62deg, ${(l=t==null?void 0:t.colors)==null?void 0:l[0]} 2.27%, ${(d=t==null?void 0:t.colors)==null?void 0:d[1]} 50.88%, ${(p=t==null?void 0:t.colors)==null?void 0:p[2]} 98.48%)`})()),{$pinceau:v}=S(e,void 0,{_cCN_top:o,_eih_insetInlineStart:s,_IfB_insetInlineEnd:c,_SsE_zIndex:i,_wj8_maxWidth:f,_t33_height:g,_Jfd_filter:y,_yUj_background:h});return(t,l)=>($(),I("div",{class:w(["ellipsis",[_(v)]])},q,2))}});const O=u(N,[["__scopeId","data-v-a2bd7d25"]]),V=m({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(n){const e=a(()=>E(n.component)),o=z({...n.props}),s=await j(n.component);return{as:e,formProps:o,componentData:s}},render(n){const e=Object.entries(this.$slots).reduce((o,[s,c])=>{if(s.startsWith("component-")){const i=s.replace("component-","");o[i]=c}return o},{});return r("div",{class:"component-playground"},[r("div",{class:"component-playground-wrapper"},[r(O,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),r(n.as,{...n.formProps,class:"component-playground-component"},{...e})]),r(D,{modelValue:n.formProps,componentData:n.componentData,"onUpdate:modelValue":o=>n.formProps=o})])}});const T=u(V,[["__scopeId","data-v-ffdff82a"]]);export{T as default};
