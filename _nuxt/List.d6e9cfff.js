import{d as r,a1 as l,J as u,O as n,a8 as p,l as _}from"./entry.fb2622be.js";import{_ as f}from"./MDCSlot.a01cebfe.js";import{u as m,f as d}from"./node.0e722456.js";const y=()=>({unwrap:m,flatUnwrap:d}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},g=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const t=l(),{flatUnwrap:o,unwrap:s}=y(),c=u(()=>e.icon||h[e.type]);return()=>{const i=o((t.default&&t.default())??[],["ul"]).map(a=>s(a,["li"]));return n("ul",i.map(a=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:c.value,class:"icon"})),n("span",n(f,{use:()=>a}))])))}}});const S=_(g,[["__scopeId","data-v-cfe1a5f2"]]);export{S as default};
