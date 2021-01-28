import{_ as e}from"./index.afb12d1a.js";import{d as t,h as i,o,i as n,j as d,w as s,m as r}from"./index.1d8b385f.js";import{g as a}from"./index.2409ec08.js";import{u as l}from"./useTable.1ca27a18.js";import"./index.b65239bc.js";import"./SearchOutlined.094b03ed.js";import"./CheckOutlined.f4a7eca6.js";import"./DownOutlined.012ff21f.js";import"./index.b4d624ce.js";import"./index.e447d389.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.cf064dd0.js";import"./isEqual.93fdd584.js";import"./_baseProperty.74f89655.js";import"./toInteger.416f421e.js";import"./index.feda83ad.js";import"./RightOutlined.04567b90.js";import"./EllipsisOutlined.2068088a.js";import"./types.40ed6fdc.js";import"./index.aed40204.js";import"./LeftOutlined.e3b02fdb.js";import"./DoubleLeftOutlined.0f71090e.js";import"./DoubleRightOutlined.188866c7.js";import"./zh_CN.8094f4d6.js";import"./uuid.b62fb74c.js";import"./index.20d97b88.js";import"./util.7ce74c0f.js";import"./DeleteOutlined.d5e82f30.js";import"./EyeOutlined.87340723.js";import"./index.559970a4.js";import"./index.95c10fda.js";import"./scrollTo.c1e0f75f.js";import"./transButton.f370e4a3.js";import"./CaretDownFilled.40ff1589.js";import"./clickOutside.ae0da015.js";import"./domUtils.ddd08864.js";import"./_stringToArray.cc49bdca.js";import"./index.c3f7ce8c.js";import"./index.f1efc1a1.js";import"./UpOutlined.69059219.js";import"./index.2292ad4b.js";import"./useSortable.39d3cc6b.js";import"./useTimeout.b2101222.js";import"./useWindowSizeFn.e30cf532.js";import"./index.7e731350.js";import"./useAttrs.de3dd077.js";import"./index.fd2324d6.js";import"./index.e2a60846.js";import"./useScrollTo.ff4d48ef.js";import"./animation.dd9fb5c4.js";import"./FullscreenOutlined.9028e57e.js";import"./index.50c0302c.js";import"./SettingOutlined.4952c6db.js";import"./useExpose.7e2ecdbe.js";import"./useForm.901716c8.js";import"./index.d9bea72d.js";import"./index.215af218.js";import"./colors.cfff8c2b.js";import"./RedoOutlined.bef090b2.js";import"./Tree.5733e28c.js";import"./index.d5f35d33.js";import"./index.291ca726.js";import"./download.2380cae9.js";const c=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],m=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var p=t({components:{BasicTable:e,TableAction:a},setup(){const[e,{getDataSource:t}]=l({columns:c,showIndexColumn:!1,dataSource:m,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){var t;null==(t=e.onEdit)||t.call(e,!0)}function o(e){var i;if(null==(i=e.onEdit)||i.call(e,!1),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){var t;null==(t=e.onEdit)||t.call(e,!1,!0)}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){t().push({name:"",no:"",dept:"",editable:!0,isNew:!0})},getDataSource:t}}});const j=r(" 新增成员 ");p.render=function(e,t,r,a,l,c){const m=i("TableAction"),p=i("BasicTable"),u=i("a-button");return o(),n("div",null,[d(p,{onRegister:e.registerTable},{action:s((({record:t,column:i})=>[d(m,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),d(u,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:s((()=>[j])),_:1},8,["onClick"])])};export default p;