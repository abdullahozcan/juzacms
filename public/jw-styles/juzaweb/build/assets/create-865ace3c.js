import{r as n,a as l,j as e,b as h}from"./app-9f256a6d.js";import{b as g,m as d}from"./functions-d3bf7647.js";import x from"./taxonomy-form-29c7ff8a.js";import{A as T}from"./admin-2d44163f.js";import v from"./top-options-e2881696.js";import"./lodash-3f4feb41.js";import"./input-6e5778ee.js";import"./checkbox-2a6db5a0.js";import"./button-e1bfbb31.js";import"./select-dcf51221.js";import"./react-select.esm-c8b53ce1.js";function A({theme:i,postTypes:p}){const[c,o]=n.useState(!1),[a,t]=n.useState(),u=r=>{r.preventDefault();let f=new FormData(r.target);return o(!0),h.post(g("dev-tools/themes/"+i.name+"/taxonomies"),f,{headers:{"Content-Type":"application/json"}}).then(m=>{let s=d(m);o(!1),t(s),(s==null?void 0:s.status)===!0&&r.target.reset(),setTimeout(()=>{t(void 0)},2e3)}).catch(m=>{t(d(m)),o(!1),setTimeout(()=>{t(void 0)},2e3)}),!1};return l(T,{children:[e(v,{moduleSelected:`themes/${i.name}`,moduleType:"themes",optionSelected:"taxonomies/create"}),e("div",{className:"row",children:l("div",{className:"col-md-12",children:[e("h5",{children:"Make Custom Taxonomy"}),a&&e("div",{className:`alert alert-${a.status?"success":"danger"} jw-message`,children:a.message}),e("form",{method:"POST",onSubmit:u,children:e(x,{buttonLoading:c,postTypes:p})})]})})]})}export{A as default};
