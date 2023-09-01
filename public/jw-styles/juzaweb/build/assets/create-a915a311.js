import{r as l,a as r,j as e,b}from"./app-9f256a6d.js";import v from"./top-options-e2881696.js";import{A as g}from"./admin-2d44163f.js";import{B as T}from"./button-e1bfbb31.js";import{I as s}from"./input-6e5778ee.js";import{T as N}from"./textarea-4cda13cf.js";import{b as x,m as c}from"./functions-d3bf7647.js";import"./select-dcf51221.js";import"./react-select.esm-c8b53ce1.js";import"./lodash-3f4feb41.js";function C(){const[p,o]=l.useState(!1),[i,m]=l.useState(),[d,u]=l.useState(),h=n=>{n.preventDefault(),o(!0),u(void 0),m(void 0);let f=new FormData(n.target);b.post(x("dev-tools/themes"),f).then(t=>{let a=c(t);o(!1),m(a),u(t.data.data.output),(a==null?void 0:a.status)===!0&&n.target.reset()}).catch(t=>{o(!1),m(c(t))})};return r(g,{children:[e(v,{moduleType:"themes"}),e("div",{className:"row",children:r("div",{className:"col-md-12",children:[i&&e("div",{className:`alert alert-${i.status?"success":"danger"} jw-message`,children:i.message}),d&&e("pre",{children:d}),r("form",{method:"POST",onSubmit:h,children:[e(s,{name:"name",label:"Name",required:!0,description:"Theme name must be unique, only characters a-z 0-9 and -."}),e(s,{name:"title",label:"Title",required:!0,description:"Title display for the theme."}),e(N,{name:"description",label:"Description",rows:3,description:"Some description for your theme."}),r("div",{className:"row",children:[e("div",{className:"col-md-3",children:e(s,{name:"author",label:"Author",required:!0})}),e("div",{className:"col-md-3",children:e(s,{name:"version",label:"Version",required:!0,value:"1.0"})})]}),e(T,{label:"Create Theme",type:"submit",class:"mt-3",loading:p})]})]})})]})}export{C as default};
