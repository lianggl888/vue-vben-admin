import{d as t,b1 as s,cp as i,cq as e,h as o,o as a,i as l,j as d,aL as m,aM as n,l as r,m as p,bw as c}from"./index.ca0293b2.js";import"./index.95c10fda.js";import{T as u}from"./index.4340cfa4.js";import{L as b}from"./index.56d6fb12.js";import"./index.23bcb373.js";import"./index.f1948b4f.js";import"./index.8aafcec1.js";import{a as j}from"./index.db20b6ca.js";import{t as f}from"./data.aa527d47.js";import{E as _}from"./EllipsisOutlined.70395492.js";import"./vendor.3b1829c7.js";import"./colors.d5f042e5.js";import"./SearchOutlined.d9cc3823.js";import"./CheckOutlined.a0c62bc8.js";import"./DownOutlined.6480d9be.js";import"./LeftOutlined.d1c037c6.js";import"./RightOutlined.1201c967.js";import"./DoubleLeftOutlined.f7f11796.js";import"./DoubleRightOutlined.b183b394.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./index.1cb29158.js";import"./domUtils.3f0b517b.js";import"./_stringToArray.2e032d51.js";import"./useTimeout.429405d0.js";import"./useScrollTo.44e3ca92.js";import"./animation.6cb888e9.js";var L=t({name:"TodoList",components:{CollapseContainer:j,List:b,ListItem:b.Item,ListItemMeta:b.Item.Meta,Tag:u,Tooltip:s,EllipsisOutlined:_},setup:()=>({todoList:f})});const x=c("data-v-5ec25b45");i("data-v-5ec25b45");const O=d("span",null,[p(" 待办事项 "),d("span",{class:"todo-list__total"},"30")],-1),v={class:"todo-list__item-title"},T={class:"todo-list__item-memo"},h={class:"todo-list__item-desc"},I=d("br",null,null,-1),g=p("待审批"),C={class:"todo-list__all"},E=p("查看更多");e();const M=x(((t,s,i,e,c,u)=>{const b=o("ListItemMeta"),j=o("Tag"),f=o("a-button"),_=o("ListItem"),L=o("List"),M=o("EllipsisOutlined"),k=o("Tooltip"),y=o("CollapseContainer");return a(),l(y,{class:"todo-list",title:"待办事项",canExpan:!1},{title:x((()=>[O])),default:x((()=>[d(L,null,{default:x((()=>[(a(!0),l(m,null,n(t.todoList,(t=>(a(),l(_,{key:t.id,class:"todo-list__item"},{default:x((()=>[d(b,null,{title:x((()=>[d("div",null,[d("span",v,r(t.title),1),d("span",T,r(t.memo),1)])])),description:x((()=>[d("div",h,[p(" 提交人："+r(t.sbmter)+" ",1),I,p(" 提交时间："+r(t.sbmtTime),1)])])),_:2},1024),d(f,{type:"link"},{default:x((()=>[d(j,{color:"blue"},{default:x((()=>[g])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),d("div",C,[d(k,{placement:"topRight"},{title:x((()=>[E])),default:x((()=>[d(M)])),_:1})])])),_:1})}));L.render=M,L.__scopeId="data-v-5ec25b45";export default L;