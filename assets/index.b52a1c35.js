import{d as e,h as t,o as a,i as r,w as s,j as i}from"./index.54123aa3.js";import"./DownOutlined.28e2aa25.js";import"./index.c8ee31bf.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./index.a87352aa.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./transButton.ab5a2809.js";import{a as o}from"./index.cca9fed1.js";import{_ as d}from"./index.286733da.js";import"./RightOutlined.af02c6ad.js";import"./useTimeout.ca2e13b2.js";import"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./animation.f5cd7d5f.js";import"./useScrollTo.ad781bf0.js";import"./usePageContext.4f40bde1.js";import{B as l,t as n}from"./data.da245b01.js";var p=e({components:{BasicTree:l,CollapseContainer:o,PageWrapper:d},setup:()=>({treeData:n})});const m={class:"flex"};p.render=function(e,o,d,l,n,p){const c=t("BasicTree"),j=t("CollapseContainer"),f=t("PageWrapper");return a(),r(f,{title:"Tree基础示例"},{default:s((()=>[i("div",m,[i(j,{title:"基础示例",style:{width:"33%"},class:"mr-4"},{default:s((()=>[i(c,{treeData:e.treeData},null,8,["treeData"])])),_:1}),i(j,{title:"可勾选",class:"mr-4",style:{width:"33%"}},{default:s((()=>[i(c,{treeData:e.treeData,checkable:!0},null,8,["treeData"])])),_:1}),i(j,{title:"默认展开/勾选示例",style:{width:"33%"}},{default:s((()=>[i(c,{treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1})])])),_:1})};export default p;