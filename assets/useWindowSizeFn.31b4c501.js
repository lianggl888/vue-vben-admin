import{bx as e,b_ as n,b$ as t}from"./index.54123aa3.js";function i(i,s=150,r){let o=()=>{i()};const[a,d]=e(o,s,r);o=a;const m=()=>{r&&r.immediate&&o(),window.addEventListener("resize",o)},w=()=>{window.removeEventListener("resize",o),d()};return n((()=>{m()})),t((()=>{w()})),[m,w]}export{i as u};