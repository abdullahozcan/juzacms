import{q as f}from"./app-9f256a6d.js";import{l}from"./lodash-3f4feb41.js";function g(a,r={}){let{trans:e}=f().props,u=a.replace("::",".").split("."),t=null;return l.forEach(u,s=>{typeof e[s]=="string"?t=e[s]:e=e[s]}),t||a}function c(a){return a}function d(a){return"/admin-cp/"+a}function _(a){return a=a.replace("-","_"),a.split("_").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" ")}function o(a){return a.toLowerCase().replace(/[^a-z0-9\-]/ig,"-")}function h(a){return a.toLowerCase().replace(/[^a-z0-9_]/ig,"_")}function J(a){var r,e,u;if(a!=null&&a.data&&a.data.message)return{status:a.status,message:a.data.message};if((r=a==null?void 0:a.data)!=null&&r.data&&a.data.data.message)return{status:a.data.status,message:a.data.data.message};if(a!=null&&a.response){if(a.response.data.errors){let t="";return $.each(a.response.data.errors,function(s,i){return t=i[0],!1}),{status:!1,message:t,errors:a.response.data.errors}}return{status:!1,message:a.response.data.message}}if(a!=null&&a.responseJSON){if((e=a.responseJSON)!=null&&e.errors){let t="";return $.each(a.responseJSON.errors,function(s,i){return t=i[0],!1}),{status:!1,message:t}}else if((u=a.responseJSON)!=null&&u.message)return{status:!1,message:a.responseJSON.message}}if(a.message)return{status:!1,message:a.message.message}}export{g as _,_ as a,d as b,h as c,o as d,J as m,c as u};
