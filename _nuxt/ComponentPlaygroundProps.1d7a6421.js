import k from"./ProseH4.2f8c57a5.js";import B from"./ProseCodeInline.b1a90619.js";import q from"./Badge.e9aaa1b6.js";import D from"./ProseP.3ac18328.js";import{d as N,as as b,J as j,b as o,c,F as w,ah as E,K as d,e as m,g as l,w as s,E as _,t as u,Y as i,f as p,k as F}from"./entry.c0c0a129.js";import"./slot.5567647a.js";import"./node.62941935.js";const I={class:"component-playground-data-section"},O=["id"],H=["value","onChange"],J=N({__name:"ComponentPlaygroundProps",props:{modelValue:{type:Object,required:!0},componentData:{type:Object,required:!0}},emits:["update:modelValue"],setup(f,{emit:g}){const a=f,r=b(a,"modelValue",g),y=(t,n)=>{r.value={...r.value,[n]:t.target.value}},v=j(()=>{var t,n;return(n=(t=a==null?void 0:a.componentData)==null?void 0:t.meta)==null?void 0:n.props});return(t,n)=>{const x=k,h=B,C=q,P=D;return o(),c("div",I,[(o(!0),c(w,null,E(d(v),e=>(o(),c("div",{key:e.name},[m("div",{id:e.name,class:"prop-title"},[l(x,{id:e.name},{default:s(()=>[_(u(e.name),1)]),_:2},1032,["id"]),m("span",null,[l(h,null,{default:s(()=>[_(u(e.type),1)]),_:2},1024),e.required?p("",!0):(o(),i(C,{key:0},{default:s(()=>[_(" Required ")]),_:1}))])],8,O),e.description?(o(),i(P,{key:0},{default:s(()=>[_(u(e.description),1)]),_:2},1024)):p("",!0),m("input",{value:d(r)[e.name],onChange:V=>y(V,e.name)},null,40,H)]))),128))])}}});const $=F(J,[["__scopeId","data-v-4939fa9a"]]);export{$ as default};