import{a,F as m,j as e}from"./app-9f256a6d.js";import{_ as t}from"./functions-d3bf7647.js";import"./lodash-3f4feb41.js";function l(){return a(m,{children:[e("div",{className:"row box-hidden mb-2",id:"form-theme-upload",children:e("div",{className:"col-md-12",children:a("form",{action:"{{ route('admin.theme.install.upload') }}",role:"form",id:"themeUploadForm",name:"themeUploadForm",method:"post",className:"dropzone",encType:"multipart/form-data",children:[e("div",{className:"form-group",children:e("div",{className:"controls text-center",children:e("div",{className:"input-group w-100",children:e("a",{className:"btn btn-primary w-100 text-white",id:"theme-upload-button",children:t("cms::filemanager.message-choose")})})})}),e("input",{type:"hidden",name:"_token",value:"{{ csrf_token() }}"})]})})}),a("div",{className:"row",children:[e("div",{className:"col-md-8"}),e("div",{className:"col-md-4 text-right",children:e("button",{type:"button",className:"btn btn-success",id:"upload-theme",children:t("cms::app.upload_theme")})})]}),e("div",{className:"row",id:"theme-list"})]})}export{l as default};
