import{d as e,cp as t,cq as i,h as s,o,i as a,j as r,bw as d,m as n}from"./index.ca0293b2.js";import{D as p}from"./index.2a3d155c.js";import{I as m}from"./index.f630c8e6.js";import{a as c}from"./index.23bcb373.js";import{_ as l}from"./index.747dc0f6.js";import{step1Schemas as u}from"./data.2505cb7f.js";import{u as j}from"./useForm.65972378.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.d9cc3823.js";import"./EyeOutlined.ba199c78.js";import"./CheckOutlined.a0c62bc8.js";import"./DownOutlined.6480d9be.js";import"./index.8aafcec1.js";import"./responsiveObserve.c545f1cc.js";import"./index.8931e3d6.js";import"./findIndex.a959c21e.js";import"./isEqual.6bad97d6.js";import"./_baseProperty.74f89655.js";import"./toInteger.34722792.js";import"./index.7df2bb45.js";import"./index.a24eb58c.js";import"./index.30ae9ad5.js";import"./UpOutlined.0ef8cad0.js";import"./index.4340cfa4.js";import"./colors.d5f042e5.js";import"./RightOutlined.1201c967.js";import"./RedoOutlined.7ed439dc.js";import"./index.b48f5073.js";import"./EllipsisOutlined.70395492.js";import"./types.efa91daf.js";import"./Tree.be2474a1.js";import"./util.9205dd12.js";import"./useAttrs.93b544a4.js";import"./index.95c10fda.js";import"./index.0f0c99ff.js";import"./uuid.e47b941f.js";import"./index.0ab3a9b2.js";import"./DeleteOutlined.ce2f632a.js";import"./index.58d8ddc3.js";import"./useTimeout.429405d0.js";import"./useWindowSizeFn.135e6646.js";import"./index.db20b6ca.js";import"./index.1cb29158.js";import"./domUtils.3f0b517b.js";import"./_stringToArray.2e032d51.js";import"./useScrollTo.44e3ca92.js";import"./animation.6cb888e9.js";import"./FullscreenOutlined.ec7aae97.js";import"./index.19813759.js";import"./index.5231c462.js";import"./LeftOutlined.d1c037c6.js";import"./download.a4df27cf.js";var f=e({components:{BasicForm:l,[c.name]:c,ASelectOption:c.Option,[m.name]:m,[m.Group.name]:m.Group,[p.name]:p},emits:["next"],setup(e,{emit:t}){const[i,{validate:s}]=j({labelWidth:100,schemas:u,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const e=await s();t("next",e)}catch(e){}}});return{register:i}}});const b=d("data-v-c22ef27a");t("data-v-c22ef27a");const x={class:"step1"},v={class:"step1-form"},O=n(" 支付宝 "),h=n(" 银联 "),y=r("h3",null,"说明",-1),_=r("h4",null,"转账到支付宝账户",-1),g=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),w=r("h4",null,"转账到银行卡",-1),F=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);i();const U=b(((e,t,i,d,n,p)=>{const m=s("a-select-option"),c=s("a-select"),l=s("a-input"),u=s("a-input-group"),j=s("BasicForm"),f=s("a-divider");return o(),a("div",x,[r("div",v,[r(j,{onRegister:e.register},{fac:b((({model:e,field:t})=>[r(u,{compact:""},{default:b((()=>[r(c,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:b((()=>[r(m,{value:"zfb"},{default:b((()=>[O])),_:1}),r(m,{value:"yl"},{default:b((()=>[h])),_:1})])),_:2},1032,["value","onUpdate:value"]),r(l,{class:"pay-input",value:e[t],"onUpdate:value":i=>e[t]=i},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),r(f),y,_,g,w,F])}));f.render=U,f.__scopeId="data-v-c22ef27a";export default f;