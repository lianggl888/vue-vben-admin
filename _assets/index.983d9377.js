import{a as s,i as t,o as i,j as e,k as o,ad as n,aH as a,w as c,p as l}from"./index.54b7cc7b.js";import"./xlsx.a48e520c.js";import{A as r}from"./index.2fe64d86.js";import"./CloseOutlined.2f4d26e5.js";import"./LeftOutlined.f377cd8d.js";import{c as m}from"./functional.f8b4d09e.js";import"./RightOutlined.81bd46b9.js";const p=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var d=s({components:{Alert:r},setup:()=>({imgList:p,handleClick:function(s){m({imageList:[s]})},handlePreview:function(){m({imageList:p})}})});const f={class:"p-4"},u={class:"flex justify-center mt-4"},h=l("预览图片");d.render=function(s,l,r,m,p,d){const j=t("Alert"),g=t("a-button");return i(),e("div",f,[o(j,{message:"有预览图",type:"info"}),o("div",u,[(i(!0),e(n,null,a(s.imgList,(t=>(i(),e("img",{src:t,key:t,class:"mr-2",onClick:i=>s.handleClick(t)},null,8,["src","onClick"])))),128))]),o(j,{message:"无预览图",type:"info"}),o(g,{onClick:s.handlePreview,type:"primary",class:"mt-4"},{default:c((()=>[h])),_:1},8,["onClick"])])};export default d;