import{d as a,aW as t,N as e,e as r,h as s,o as n,i as o,w as i,m as p,l as d,j as m}from"./index.54123aa3.js";import"./DownOutlined.28e2aa25.js";import"./index.c8ee31bf.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./index.a87352aa.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./isEqual.22ed12f4.js";import"./transButton.ab5a2809.js";import{_ as u}from"./index.286733da.js";import"./index.8d91dadc.js";import"./usePageContext.4f40bde1.js";var l=a({name:"TestTab",components:{PageWrapper:u},setup(){const{currentRoute:a}=t();return{params:e((()=>r(a).params))}}});const j=m("br",null,null,-1),c=p(" Keep Alive "),f=m("input",null,null,-1);l.render=function(a,t,e,r,m,u){const l=s("PageWrapper");return n(),o(l,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:i((()=>[p(" Current Param : "+d(a.params)+" ",1),j,c,f])),_:1})};export default l;