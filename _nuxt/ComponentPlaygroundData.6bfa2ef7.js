import b from"./TabsHeader.feb4cfdf.js";import g from"./ComponentPlaygroundProps.d9a4c2b2.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.4dbd47e6.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.98746057.js";import{d as k,ar as D,r as V,b as n,c as C,g as P,J as o,X as m,as as T,f as s,k as B}from"./entry.16ee76f1.js";import"./ProseH4.00fb8b82.js";import"./ProseCodeInline.f69e114e.js";import"./Badge.0a22ebc1.js";import"./slot.70ff15b4.js";import"./node.676c5e99.js";import"./ProseP.1dd87b3f.js";const I={class:"component-playground-data"},j=k({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const a=D(t,"modelValue",p),e=V(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=c=>e.value=c;return(c,l)=>{const u=b,_=g,i=v,f=x;return n(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(n(),m(_,{key:0,modelValue:o(a),"onUpdate:modelValue":l[0]||(l[0]=y=>T(a)?a.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(n(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(n(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const h=B(j,[["__scopeId","data-v-60366e2c"]]);export{h as default};