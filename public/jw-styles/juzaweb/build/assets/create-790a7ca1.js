import{r as s,a as r,j as e,b as S}from"./app-41a62c6f.js";import B from"./top-options-f34a882f.js";import{A as T}from"./admin-9e3bf9e1.js";import{B as w}from"./button-8c6fb4ab.js";import{I as l}from"./input-1f8cb536.js";import{T as x}from"./textarea-4e9611b9.js";import{c as D,a as q,b as y,m as p}from"./functions-7b46e371.js";import"./select-be6037e7.js";import"./react-select.esm-b30d8ff8.js";function E(){const[f,n]=s.useState(!1),[m,d]=s.useState(),[u,c]=s.useState(),[v,g]=s.useState(),[b,h]=s.useState(),N=a=>{if(a.target.value==="")return;let i=D(a.target.value),t=q(i);g(t),h(i)},_=a=>{a.preventDefault(),n(!0),c(void 0),d(void 0);let i=new FormData(a.target);S.post(y("dev-tools/plugins"),i).then(t=>{let o=p(t);n(!1),d(o),c(t.data.data.output),(o==null?void 0:o.status)===!0&&a.target.reset()}).catch(t=>{n(!1),d(p(t))})};return r(T,{children:[e(B,{moduleType:"plugins"}),e("div",{className:"row",children:r("div",{className:"col-md-12",children:[m&&e("div",{className:`alert alert-${m.status?"success":"danger"} jw-message`,children:m.message}),u&&e("pre",{children:u}),r("form",{method:"POST",onSubmit:_,children:[r("div",{className:"row",children:[e("div",{className:"col-md-6",children:e(l,{name:"name",label:"Name",required:!0,description:"Plugin name must be unique, format: <b>vendor/plugin-name</b>.",onBlur:N})}),e("div",{className:"col-md-6",children:e(l,{name:"title",label:"Title",required:!0,description:"Title display for the plugin.",value:v})})]}),e(x,{name:"description",label:"Description",rows:3,description:"Some description for your plugin."}),r("div",{className:"row",children:[e("div",{className:"col-md-3",children:e(l,{name:"domain",label:"Domain",required:!0,value:b})}),e("div",{className:"col-md-3",children:e(l,{name:"author",label:"Author"})}),e("div",{className:"col-md-3",children:e(l,{name:"version",label:"Version",required:!0,value:"1.0"})})]}),e(w,{label:"Create Plugin",type:"submit",class:"mt-3",loading:f})]})]})})]})}export{E as default};
