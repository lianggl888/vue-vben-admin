import{d as e,r as i,h as t,o,i as a,j as r,w as s,m as d,l as n}from"./index.54123aa3.js";import"./SearchOutlined.d42bf9f8.js";import"./scrollTo.c9242ea7.js";import"./index.9a2fc594.js";import"./DownOutlined.28e2aa25.js";import"./CheckOutlined.16a6041f.js";import"./index.5008765b.js";import"./EyeOutlined.df4464e5.js";import"./index.60aa2731.js";import"./index.094c5fa2.js";import"./index.c8ee31bf.js";import"./colors.71734b53.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./index.a87352aa.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./uuid.30dcc41c.js";import{_ as p}from"./index.96f919e2.js";import"./findIndex.659f0f1e.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./_baseProperty.74f89655.js";import"./index.bb8a55bd.js";import"./index.328dcb33.js";import"./UpOutlined.a9412b7a.js";import"./LeftOutlined.e0a0c2d3.js";import"./index.1e06123c.js";import"./responsiveObserve.c545f1cc.js";import"./index.7edf620b.js";import"./index.5084890e.js";import"./index.ecc7dd3a.js";import"./index.3605ec93.js";import"./index.1f6e6cd5.js";import"./index.661da0f6.js";import"./index.ecc4099c.js";import"./zh_CN.8094f4d6.js";import"./useSortable.1f634a4b.js";import"./index.8accc11b.js";import"./index.84a72428.js";import"./CaretDownFilled.662e33ec.js";import"./transButton.ab5a2809.js";import"./util.6b8a7cec.js";import"./index.cca9fed1.js";import{_ as c}from"./index.286733da.js";import"./CheckOutlined.826dcd76.js";import"./index.6a32a31c.js";import"./FullscreenOutlined.cd845ff2.js";import"./RightOutlined.af02c6ad.js";import"./SettingOutlined.b33037cf.js";import"./useTimeout.ca2e13b2.js";import"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./animation.f5cd7d5f.js";import"./useScrollTo.ad781bf0.js";import"./useAttrs.a513da6b.js";import"./useWindowSizeFn.31b4c501.js";import"./download.64b4bcd9.js";import"./useForm.5cd0cf29.js";import"./clickOutside.d8159c59.js";import"./useExpose.89ec940e.js";import"./usePageContext.4f40bde1.js";import{getBasicColumns as m,getBasicData as l}from"./tableData.7aa0192c.js";var j=e({components:{BasicTable:p,PageWrapper:c},setup(){const e=i(!1),t=i(!1),o=i(!0),a=i(!0),r=i(!1);return{columns:m(),data:l(),canResize:e,loading:t,striped:o,border:a,toggleStriped:function(){o.value=!o.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){t.value=!0,setTimeout((()=>{t.value=!1,r.value={pageSize:20}}),3e3)},toggleBorder:function(){a.value=!a.value},pagination:r}}});const u={class:"p-4"},f=d(" 开启loading ");j.render=function(e,i,p,c,m,l){const j=t("a-button"),b=t("BasicTable");return o(),a("div",u,[r(b,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:s((()=>[r(j,{type:"primary",onClick:e.toggleCanResize},{default:s((()=>[d(n(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),r(j,{type:"primary",onClick:e.toggleBorder},{default:s((()=>[d(n(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),r(j,{type:"primary",onClick:e.toggleLoading},{default:s((()=>[f])),_:1},8,["onClick"]),r(j,{type:"primary",onClick:e.toggleStriped},{default:s((()=>[d(n(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default j;