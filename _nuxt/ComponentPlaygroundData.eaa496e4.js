import b from"./TabsHeader.331ca959.js";import g from"./ComponentPlaygroundProps.7ed37975.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.e6ec33f2.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.c3a63c9d.js";import{d as D,at as V,r as k,b as n,c as C,g as P,K as o,Y as m,au as T,f as l,l as B}from"./entry.e2384937.js";import"./ProseH4.33a9ec43.js";import"./ProseCodeInline.19bac5f6.js";import"./Badge.d262b630.js";import"./ContentSlot.ad3ce0cf.js";import"./ProseP.7a7ce71d.js";const I={class:"component-playground-data"},j=D({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const a=V(t,"modelValue",p),e=k(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=s=>e.value=s;return(s,c)=>{const u=b,_=g,i=v,f=x;return n(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(n(),m(_,{key:0,modelValue:o(a),"onUpdate:modelValue":c[0]||(c[0]=y=>T(a)?a.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):l("",!0),o(e)===1?(n(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):l("",!0),o(e)===2?(n(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):l("",!0)])}}});const Y=B(j,[["__scopeId","data-v-ef4d9ec9"]]);export{Y as default};