import{d as e,bS as i,g as t,h as s,o,i as r,w as a,j as d}from"./index.54123aa3.js";import"./SearchOutlined.d42bf9f8.js";import"./index.9a2fc594.js";import"./DownOutlined.28e2aa25.js";import"./CheckOutlined.16a6041f.js";import{I as n}from"./index.5008765b.js";import"./EyeOutlined.df4464e5.js";import{_ as p}from"./index.60aa2731.js";import"./index.094c5fa2.js";import"./index.c8ee31bf.js";import"./colors.71734b53.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./index.a87352aa.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./uuid.30dcc41c.js";import"./findIndex.659f0f1e.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./_baseProperty.74f89655.js";import"./index.bb8a55bd.js";import"./index.328dcb33.js";import"./UpOutlined.a9412b7a.js";import"./LeftOutlined.e0a0c2d3.js";import"./index.1e06123c.js";import"./responsiveObserve.c545f1cc.js";import"./index.7edf620b.js";import"./index.5084890e.js";import"./index.ecc7dd3a.js";import"./index.3605ec93.js";import"./index.1f6e6cd5.js";import"./index.661da0f6.js";import"./index.8accc11b.js";import"./index.84a72428.js";import"./transButton.ab5a2809.js";import"./util.6b8a7cec.js";import{a as m}from"./index.cca9fed1.js";import{_ as l}from"./index.286733da.js";import"./index.6a32a31c.js";import"./FullscreenOutlined.cd845ff2.js";import"./RightOutlined.af02c6ad.js";import"./useTimeout.ca2e13b2.js";import"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./animation.f5cd7d5f.js";import"./useScrollTo.ad781bf0.js";import"./useAttrs.a513da6b.js";import"./useWindowSizeFn.31b4c501.js";import"./download.64b4bcd9.js";import{u as c}from"./useForm.5cd0cf29.js";import"./usePageContext.4f40bde1.js";const u=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:t})=>i(n,{placeholder:"请输入",value:e[t],onChange:i=>{e[t]=i.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var j=e({components:{BasicForm:p,CollapseContainer:m,PageWrapper:l,[n.name]:n},setup(){const{createMessage:e}=t(),[i,{setProps:s}]=c({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:i,schemas:u,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))},setProps:s}}});j.render=function(e,i,t,n,p,m){const l=s("a-input"),c=s("BasicForm"),u=s("CollapseContainer"),j=s("PageWrapper");return o(),r(j,{title:"自定义组件示例"},{default:a((()=>[d(u,{title:"自定义表单"},{default:a((()=>[d(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:a((({model:e,field:i})=>[d(l,{value:e[i],"onUpdate:value":t=>e[i]=t,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default j;