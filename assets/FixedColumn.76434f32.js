import{_ as e}from"./index.afb12d1a.js";import{d as i}from"./table.751dfe88.js";import{d as t,h as o,o as d,i as s,j as n,w as r}from"./index.1d8b385f.js";import{g as a}from"./index.2409ec08.js";import{u as m}from"./useTable.1ca27a18.js";import"./index.b65239bc.js";import"./SearchOutlined.094b03ed.js";import"./CheckOutlined.f4a7eca6.js";import"./DownOutlined.012ff21f.js";import"./index.b4d624ce.js";import"./index.e447d389.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.cf064dd0.js";import"./isEqual.93fdd584.js";import"./_baseProperty.74f89655.js";import"./toInteger.416f421e.js";import"./index.feda83ad.js";import"./RightOutlined.04567b90.js";import"./EllipsisOutlined.2068088a.js";import"./types.40ed6fdc.js";import"./index.aed40204.js";import"./LeftOutlined.e3b02fdb.js";import"./DoubleLeftOutlined.0f71090e.js";import"./DoubleRightOutlined.188866c7.js";import"./zh_CN.8094f4d6.js";import"./uuid.b62fb74c.js";import"./index.20d97b88.js";import"./util.7ce74c0f.js";import"./DeleteOutlined.d5e82f30.js";import"./EyeOutlined.87340723.js";import"./index.559970a4.js";import"./index.95c10fda.js";import"./scrollTo.c1e0f75f.js";import"./transButton.f370e4a3.js";import"./CaretDownFilled.40ff1589.js";import"./clickOutside.ae0da015.js";import"./domUtils.ddd08864.js";import"./_stringToArray.cc49bdca.js";import"./index.c3f7ce8c.js";import"./index.f1efc1a1.js";import"./UpOutlined.69059219.js";import"./index.2292ad4b.js";import"./useSortable.39d3cc6b.js";import"./useTimeout.b2101222.js";import"./useWindowSizeFn.e30cf532.js";import"./index.7e731350.js";import"./useAttrs.de3dd077.js";import"./index.fd2324d6.js";import"./index.e2a60846.js";import"./useScrollTo.ff4d48ef.js";import"./animation.dd9fb5c4.js";import"./FullscreenOutlined.9028e57e.js";import"./index.50c0302c.js";import"./SettingOutlined.4952c6db.js";import"./useExpose.7e2ecdbe.js";import"./useForm.901716c8.js";import"./index.d9bea72d.js";import"./index.215af218.js";import"./colors.cfff8c2b.js";import"./RedoOutlined.bef090b2.js";import"./Tree.5733e28c.js";import"./index.d5f35d33.js";import"./index.291ca726.js";import"./download.2380cae9.js";const p=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var l=t({components:{BasicTable:e,TableAction:a},setup(){const[e]=m({title:"TableAction组件及固定列示例",api:i,columns:p,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const c={class:"p-4"};l.render=function(e,i,t,a,m,p){const l=o("TableAction"),j=o("BasicTable");return d(),s("div",c,[n(j,{onRegister:e.registerTable},{action:r((({record:i})=>[n(l,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,i)}],dropDownActions:[{label:"启用",onClick:e.handleOpen.bind(null,i)}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default l;