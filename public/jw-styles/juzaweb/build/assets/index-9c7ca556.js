import{r as n,a as l,j as e,b as g}from"./app-9f256a6d.js";import{b as h,m as p}from"./functions-d3bf7647.js";import T from"./post-type-form-cab9f739.js";import{A as v}from"./admin-2d44163f.js";import x from"./top-options-e2881696.js";import"./lodash-3f4feb41.js";import"./input-6e5778ee.js";import"./textarea-4cda13cf.js";import"./checkbox-2a6db5a0.js";import"./button-e1bfbb31.js";import"./select-dcf51221.js";import"./react-select.esm-c8b53ce1.js";function C({plugin:i}){const[d,t]=n.useState(!1),[a,s]=n.useState(),u=r=>{r.preventDefault();let c=h("dev-tools/plugins/"+i.name+"/post-types"),f=new FormData(r.target);return t(!0),t(!1),g.post(c,f).then(m=>{let o=p(m);t(!1),s(o),(o==null?void 0:o.status)===!0&&r.target.reset(),setTimeout(()=>{s(void 0)},2e3)}).catch(m=>{s(p(m)),t(!1),setTimeout(()=>{s(void 0)},2e3)}),!1};return l(v,{children:[e(x,{moduleSelected:`plugins/${i.name}`,moduleType:"plugins",optionSelected:"post-types"}),e("div",{className:"row",children:l("div",{className:"col-md-12",children:[e("h5",{children:"Make Custom Post Type"}),a&&e("div",{className:`alert alert-${a.status?"success":"danger"} jw-message`,children:a.message}),e("form",{method:"POST",onSubmit:u,children:e(T,{buttonLoading:d})})]})})]})}export{C as default};
