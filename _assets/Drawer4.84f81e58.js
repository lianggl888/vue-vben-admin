import{a as e,i,o as s,j as r,w as t,k as o,v as a}from"./index.54b7cc7b.js";import"./xlsx.a48e520c.js";import"./index.a439205d.js";import"./Trigger.9f179c61.js";import"./omit.a368f9ae.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6cff96b8.js";import"./CheckOutlined.29be3015.js";import{s as n}from"./index.a5bb273d.js";import"./colors.5745025a.js";import"./RightOutlined.0becd0a0.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.eedde627.js";import"./index.56208f19.js";import"./index.a172b251.js";import"./index.48bb8c88.js";import"./UpOutlined.78f2a1da.js";import"./index.2a5e56d5.js";import"./index.551ba04e.js";import"./index.dfac5dac.js";import"./index.5869ffa6.js";import"./useDebounce.eb7ff478.js";import"./useEventListener.89e18c2c.js";import"./useBreakpoint.7a6f6445.js";import{B as p,a as d}from"./index.519c19a2.js";import"./index.dcd2bc4f.js";import"./tsxHelper.948ab144.js";import"./index.32b7dc7d.js";import"./index.90135c93.js";import{u as m}from"./useForm.ba76dbfd.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var l=e({components:{BasicDrawer:p,BasicForm:n},setup(){const[e,{setFieldsValue:i}]=m({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=d((e=>{i({field2:e.data,field1:e.info})}));return{register:s,schemas:c,registerForm:e}}});l.render=function(e,n,p,d,m,c){const l=i("BasicForm"),j=i("BasicDrawer");return s(),r(j,a(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:t((()=>[o("div",null,[o(l,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default l;