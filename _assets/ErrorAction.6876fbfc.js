import{a as t,u as o,ap as e,s as r,W as a,dg as s,i as n,o as i,j as u,w as l,k as d}from"./index.2a9ceb8a.js";import"./xlsx.a48e520c.js";import"./Trigger.2036b7e9.js";import{B as m}from"./index.0dee2a70.js";import"./colors.b7cfe24e.js";import{T as c}from"./index.b7d4b255.js";import{B as p}from"./BugOutlined.58ec2e75.js";var f=t({name:"ErrorAction",components:{BugOutlined:p,Tooltip:c,Badge:m},setup(){const{t:t}=o(),{push:n}=e();return{t:t,getCount:r((()=>s.getErrorListCountState)),handleToErrorList:function(){n(a.ERROR_LOG_PAGE).then((()=>{s.commitErrorListCountState(0)}))}}}});f.render=function(t,o,e,r,a,s){const m=n("BugOutlined"),c=n("Badge"),p=n("Tooltip");return i(),u(p,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:l((()=>[d(c,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:l((()=>[d(m)])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default f;