let e=document.createElement("style");e.innerHTML=".lazy-container{width:100%;height:100%}",document.head.appendChild(e);import{r as t,ae as n,a as o,q as a,b as i,Q as s,au as r,a7 as l,i as c,o as u,j as d,w as m,x as v,v as f,cZ as p}from"./index.2a9ceb8a.js";import"./xlsx.a48e520c.js";import{S as g}from"./index.57ad6804.js";import{u as h}from"./useTimeout.bb5bf231.js";var b=o({name:"LazyContainer",components:{Skeleton:g},props:{timeout:a.number,viewport:{type:"undefined"!=typeof window?window.HTMLElement:Object,default:()=>null},threshold:a.string.def("0px"),direction:a.oneOf(["vertical","horizontal"]).def("vertical"),tag:a.string.def("div"),maxWaitingTime:a.number.def(80),transitionName:a.string.def("lazy-container")},emits:["init"],setup(e,{emit:o}){const a=t(null),c=i({isInit:!1,loading:!1,intersectionObserverInstance:null});function u(){c.loading=!0,h((()=>{c.isInit||(c.isInit=!0,o("init"))}),e.maxWaitingTime||80)}return s((()=>{!function(){const{timeout:t}=e;t&&h((()=>{u()}),t)}(),function(){const{timeout:o,direction:i,threshold:s}=e;if(o)return;let l="0px";switch(i){case"vertical":l=`${s} 0px`;break;case"horizontal":l=`0px ${s}`}try{const{stop:o,observer:i}=function({target:e,root:o,onIntersect:a,rootMargin:i="0px",threshold:s=.1}){let r=()=>{};const l=t(null),c=n((()=>{r(),l.value=new IntersectionObserver(a,{root:o?o.value:null,rootMargin:i,threshold:s});const t=e.value;t&&l.value.observe(t),r=()=>{l.value&&(l.value.disconnect(),e.value&&l.value.unobserve(e.value))}}));return{observer:l,stop:()=>{r(),c()}}}({rootMargin:l,target:r(a.value,"$el"),onIntersect:e=>{(e[0].isIntersecting||e[0].intersectionRatio)&&(u(),i&&o())},root:r(e,"viewport")})}catch(e){u()}}()})),{elRef:a,...l(c)}}});const x={key:"component"},y={key:"skeleton",name:"lazy-skeleton"};b.render=function(e,t,n,o,a,i){const s=c("Skeleton");return u(),d(p,f({class:"lazy-container"},e.$attrs,{ref:"elRef",name:e.transitionName,tag:e.tag,mode:"out-in"}),{default:m((()=>[e.isInit?(u(),d("div",x,[v(e.$slots,"default",{loading:e.loading})])):(u(),d("div",y,[e.$slots.skeleton?v(e.$slots,"skeleton",{key:0}):(u(),d(s,{key:1}))]))])),_:1},16,["name","tag"])};export default b;