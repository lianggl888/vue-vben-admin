import{d as e,ch as a,r as t,aa as n,N as s,x as r,e as i,h as o,o as l,i as c,j as m,bz as p}from"./index.54123aa3.js";import"./_stringToArray.f5365b26.js";import{g as d}from"./domUtils.3cd1db27.js";import{u as f}from"./useWindowSizeFn.31b4c501.js";var g=e({name:"IFrame",components:{Spin:a},props:{frameSrc:{type:String}},setup(){const e=t(!1),a=t(50),o=t(window.innerHeight),l=t(null);function c(){const e=i(l);if(!e)return;let{top:t}=d(e);t+=20,a.value=t,o.value=window.innerHeight-t;const n=document.documentElement.clientHeight-t;e.style.height=`${n}px`}function m(){e.value=!1,c()}return f(c,150,{immediate:!0}),n((()=>{e.value=!0,r((()=>{const e=i(l);e&&(e.attachEvent?e.attachEvent("onload",(()=>{m()})):e.onload=()=>{m()})}))})),{getWrapStyle:s((()=>({height:`${i(o)}px`}))),loading:e,frameRef:l}}});const u=p("data-v-50ce1274"),h=u(((e,a,t,n,s,r)=>{const i=o("Spin");return l(),c("div",{class:"iframe-page",style:e.getWrapStyle},[m(i,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:u((()=>[m("iframe",{src:e.frameSrc,class:"iframe-page__main",ref:"frameRef"},null,8,["src"])])),_:1},8,["spinning","style"])],4)}));g.render=h,g.__scopeId="data-v-50ce1274";export default g;