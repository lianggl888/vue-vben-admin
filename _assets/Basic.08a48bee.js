import{a as e,r as i,i as t,o,j as r,k as s,w as d,p as a,n}from"./index.2a9ceb8a.js";import"./xlsx.a48e520c.js";import"./index.82863a62.js";import"./index.d85deb39.js";import"./Trigger.2036b7e9.js";import"./omit.f8a77210.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.cbacc8d2.js";import"./CheckOutlined.138ae102.js";import"./index.40f83885.js";import"./colors.b7cfe24e.js";import"./index.43c5cbf5.js";import"./RightOutlined.95b51b82.js";import"./index.6dc36799.js";import"./types.7154860d.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.1f2a22da.js";import"./_baseFor.f4e5f03f.js";import"./index.025c284b.js";import"./index.a172b251.js";import"./index.b7d4b255.js";import"./index.dd0edbd2.js";import"./UpOutlined.92c78b2f.js";import"./LeftOutlined.4da475ad.js";import"./index.99954415.js";import"./index.7224a2dd.js";import"./index.542aa42d.js";import"./index.94403f82.js";import"./index.de180db3.js";import"./zh_CN.0242bd16.js";import"./TableAction.c5fbb218.js";import"./index.85b39766.js";import"./CaretDownFilled.375dd955.js";import"./CheckOutlined.91f1e232.js";import"./CloseOutlined.ad0b7d1c.js";import{s as p}from"./EditTableHeaderIcon.a8469fc7.js";import"./DownOutlined.142aee25.js";import"./FullscreenOutlined.59c336a3.js";import"./LeftOutlined.61df8938.js";import"./functional.63b8296f.js";import"./RedoOutlined.50df31e5.js";import"./RightOutlined.0941ee3a.js";import"./SettingOutlined.94a942ae.js";import"./useTimeout.bb5bf231.js";import"./useDebounce.e511ddc2.js";import"./useEventListener.3da23d91.js";import"./useBreakpoint.72fc05ec.js";import"./index.2fe39cb8.js";import"./tsxHelper.6d1e25d3.js";import"./index.934c3ccb.js";import"./index.1fc78044.js";import"./useForm.27757259.js";import"./index.ff763a9f.js";import"./useModalContext.7e0c1703.js";import"./domUtils.b7ec9300.js";import"./useFullScreen.c4356d41.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.e6fa2aaa.js";import"./useExpose.634201b1.js";import"./index.0d7d964c.js";import{getBasicColumns as m,getBasicData as l}from"./tableData.2c0dc4be.js";var c=e({components:{BasicTable:p},setup(){const e=i(!1),t=i(!1),o=i(!0),r=i(!0);return{columns:m(),data:l(),canResize:e,loading:t,striped:o,border:r,toggleStriped:function(){o.value=!o.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){t.value=!0,setTimeout((()=>{t.value=!1}),3e3)},toggleBorder:function(){r.value=!r.value}}}});const j={class:"p-4"},u=a(" 开启loading ");c.render=function(e,i,p,m,l,c){const b=t("a-button"),f=t("BasicTable");return o(),r("div",j,[s(f,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,pagination:{pageSize:20}},{toolbar:d((()=>[s(b,{type:"primary",onClick:e.toggleCanResize},{default:d((()=>[a(n(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),s(b,{type:"primary",onClick:e.toggleBorder},{default:d((()=>[a(n(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),s(b,{type:"primary",onClick:e.toggleLoading},{default:d((()=>[u])),_:1},8,["onClick"]),s(b,{type:"primary",onClick:e.toggleStriped},{default:d((()=>[a(n(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered"])])};export default c;