import{d as e,f as t,dB as a,N as s,dC as o,cr as n,cs as r,h as i,o as d,i as l,bz as u,j as p,l as m,m as c}from"./index.54123aa3.js";import"./DownOutlined.28e2aa25.js";import{A as f}from"./index.094c5fa2.js";import"./index.c8ee31bf.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./index.a87352aa.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./isEqual.22ed12f4.js";import"./index.3605ec93.js";import"./transButton.ab5a2809.js";import{_ as j}from"./index.286733da.js";import"./index.8d91dadc.js";import"./usePageContext.4f40bde1.js";import R from"./CurrentPermissionMode.ec7a7edd.js";var g=e({components:{Alert:f,CurrentPermissionMode:R,PageWrapper:j},setup(){const{changeRole:e}=o();return{userStore:t,RoleEnum:a,isSuper:s((()=>t.getRoleListState.includes(a.SUPER))),isTest:s((()=>t.getRoleListState.includes(a.TEST))),changeRole:e}}});const S=u("data-v-9a73aaae");n("data-v-9a73aaae");const E=c(" 当前角色: "),x={class:"mt-4"},y=c(" 权限切换(请先切换权限模式为前端角色权限模式): ");r();const P=S(((e,t,a,s,o,n)=>{const r=i("CurrentPermissionMode"),u=i("Alert"),f=i("a-button"),j=i("a-button-group"),R=i("PageWrapper");return d(),l(R,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:S((()=>[p(r),p("p",null,[E,p("a",null,m(e.userStore.getRoleListState),1)]),p(u,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),p("div",x,[y,p(j,null,{default:S((()=>[p(f,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:S((()=>[c(m(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),p(f,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:S((()=>[c(m(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));g.render=P,g.__scopeId="data-v-9a73aaae";export default g;