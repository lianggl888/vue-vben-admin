import{d as a,r as e,cr as s,cs as t,h as i,o,i as r,j as n,bv as l,a2 as d,bc as c,bz as p,m}from"./index.54123aa3.js";import"./SearchOutlined.d42bf9f8.js";import{a as u}from"./index.9a2fc594.js";import"./DownOutlined.28e2aa25.js";import"./CheckOutlined.16a6041f.js";import"./index.c8ee31bf.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./index.a87352aa.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./transButton.ab5a2809.js";import{_ as v}from"./index.286733da.js";import{F as S,S as f,a as j,b,c as x,d as T,e as R,f as X,g as h,h as Y,i as g,E as _,j as y}from"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./usePageContext.4f40bde1.js";const E=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((a=>({label:a,value:a,key:a})));var k=a({components:{Select:u,PageWrapper:v,FadeTransition:S,ScaleTransition:f,SlideYTransition:j,ScrollYTransition:b,SlideYReverseTransition:x,ScrollYReverseTransition:T,SlideXTransition:R,ScrollXTransition:X,SlideXReverseTransition:h,ScrollXReverseTransition:Y,ScaleRotateTransition:g,ExpandXTransition:_,ExpandTransition:y},setup(){const a=e("Fade"),s=e(!0);return{options:E,value:a,start:function(){s.value=!1,setTimeout((()=>{s.value=!0}),300)},show:s}}});const w=p("data-v-51fb1392");s("data-v-51fb1392");const C={class:"flex"},F=m(" start "),O={class:"box"};t();const P=w(((a,e,s,t,p,m)=>{const u=i("Select"),v=i("a-button"),S=i("PageWrapper");return o(),r(S,{title:"动画组件示例"},{default:w((()=>[n("div",C,[n(u,{options:a.options,value:a.value,"onUpdate:value":e[1]||(e[1]=e=>a.value=e),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),n(v,{type:"primary",class:"ml-4",onClick:a.start},{default:w((()=>[F])),_:1},8,["onClick"])]),(o(),r(l(`${a.value}Transition`),null,{default:w((()=>[d(n("div",O,null,512),[[c,a.show]])])),_:1}))])),_:1})}));k.render=P,k.__scopeId="data-v-51fb1392";export default k;