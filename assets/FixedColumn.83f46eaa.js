import{d as i,h as e,o as t,i as o,j as d,w as s}from"./index.54123aa3.js";import"./SearchOutlined.d42bf9f8.js";import"./scrollTo.c9242ea7.js";import"./index.9a2fc594.js";import"./DownOutlined.28e2aa25.js";import"./CheckOutlined.16a6041f.js";import"./index.5008765b.js";import"./EyeOutlined.df4464e5.js";import{g as n}from"./index.60aa2731.js";import"./index.094c5fa2.js";import"./colors.71734b53.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./uuid.30dcc41c.js";import{_ as r}from"./index.96f919e2.js";import"./findIndex.659f0f1e.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./_baseProperty.74f89655.js";import"./index.bb8a55bd.js";import"./index.328dcb33.js";import"./UpOutlined.a9412b7a.js";import"./LeftOutlined.e0a0c2d3.js";import"./index.1e06123c.js";import"./responsiveObserve.c545f1cc.js";import"./index.7edf620b.js";import"./index.5084890e.js";import"./index.ecc7dd3a.js";import"./index.3605ec93.js";import"./index.1f6e6cd5.js";import"./index.661da0f6.js";import"./index.ecc4099c.js";import"./zh_CN.8094f4d6.js";import"./useSortable.1f634a4b.js";import"./index.8accc11b.js";import"./index.84a72428.js";import"./CaretDownFilled.662e33ec.js";import"./transButton.ab5a2809.js";import"./util.6b8a7cec.js";import"./index.cca9fed1.js";import"./CheckOutlined.826dcd76.js";import"./index.6a32a31c.js";import"./FullscreenOutlined.cd845ff2.js";import"./RightOutlined.af02c6ad.js";import"./SettingOutlined.b33037cf.js";import"./useTimeout.ca2e13b2.js";import"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./animation.f5cd7d5f.js";import"./useScrollTo.ad781bf0.js";import"./useAttrs.a513da6b.js";import"./useWindowSizeFn.31b4c501.js";import"./download.64b4bcd9.js";import"./useForm.5cd0cf29.js";import"./clickOutside.d8159c59.js";import"./useExpose.89ec940e.js";import{u as a}from"./useTable.15d7350c.js";import{d as c}from"./table.c708603f.js";const m=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var p=i({components:{BasicTable:r,TableAction:n},setup(){const[i]=a({title:"TableAction组件及固定列示例",api:c,columns:m,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:i,handleDelete:function(i){},handleOpen:function(i){}}}});const l={class:"p-4"};p.render=function(i,n,r,a,c,m){const p=e("TableAction"),j=e("BasicTable");return t(),o("div",l,[d(j,{onRegister:i.registerTable},{action:s((({record:e})=>[d(p,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:i.handleDelete.bind(null,e)}],dropDownActions:[{label:"启用",onClick:i.handleOpen.bind(null,e)}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default p;