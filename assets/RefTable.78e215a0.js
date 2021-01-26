import{_ as e}from"./index.79f246d7.js";import{getBasicColumns as i,getBasicShortColumns as t}from"./tableData.7aa0192c.js";import{d as o,r as s,g as n,e as a,h as l,o as c,i as r,j as d,w as m,m as f}from"./index.ca0293b2.js";import{d as p}from"./table.8cdb6ed0.js";import"./index.23bcb373.js";import"./SearchOutlined.d9cc3823.js";import"./CheckOutlined.a0c62bc8.js";import"./DownOutlined.6480d9be.js";import"./index.747dc0f6.js";import"./index.8aafcec1.js";import"./responsiveObserve.c545f1cc.js";import"./index.8931e3d6.js";import"./vendor.3b1829c7.js";import"./findIndex.a959c21e.js";import"./isEqual.6bad97d6.js";import"./_baseProperty.74f89655.js";import"./toInteger.34722792.js";import"./index.7df2bb45.js";import"./index.a24eb58c.js";import"./index.30ae9ad5.js";import"./UpOutlined.0ef8cad0.js";import"./index.f630c8e6.js";import"./EyeOutlined.ba199c78.js";import"./index.4340cfa4.js";import"./colors.d5f042e5.js";import"./RightOutlined.1201c967.js";import"./RedoOutlined.7ed439dc.js";import"./index.b48f5073.js";import"./EllipsisOutlined.70395492.js";import"./types.efa91daf.js";import"./Tree.be2474a1.js";import"./util.9205dd12.js";import"./useAttrs.93b544a4.js";import"./index.95c10fda.js";import"./index.0f0c99ff.js";import"./uuid.e47b941f.js";import"./index.0ab3a9b2.js";import"./DeleteOutlined.ce2f632a.js";import"./index.58d8ddc3.js";import"./useTimeout.429405d0.js";import"./useWindowSizeFn.135e6646.js";import"./index.db20b6ca.js";import"./index.1cb29158.js";import"./domUtils.3f0b517b.js";import"./_stringToArray.2e032d51.js";import"./useScrollTo.44e3ca92.js";import"./animation.6cb888e9.js";import"./FullscreenOutlined.ec7aae97.js";import"./index.2a3d155c.js";import"./index.19813759.js";import"./index.5231c462.js";import"./LeftOutlined.d1c037c6.js";import"./download.a4df27cf.js";import"./index.f1948b4f.js";import"./DoubleLeftOutlined.f7f11796.js";import"./DoubleRightOutlined.b183b394.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.bf1a4a67.js";import"./CaretDownFilled.d4286751.js";import"./clickOutside.f1ee885f.js";import"./useSortable.fcbfb6fb.js";import"./SettingOutlined.e10f612a.js";import"./useExpose.8730c60f.js";import"./useForm.65972378.js";var u=o({components:{BasicTable:e},setup(){const e=s(null),{createMessage:o}=n();function l(){const i=a(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:p,columns:i(),changeLoading:function(){l().setLoading(!0),setTimeout((()=>{l().setLoading(!1)}),1e3)},changeColumns:function(){l().setColumns(t())},reloadTable:function(){l().setColumns(i()),l().reload({page:1})},getColumn:function(){o.info("请在控制台查看！")},getTableData:function(){o.info("请在控制台查看！")},getPagination:function(){o.info("请在控制台查看！")},setPaginationInfo:function(){l().setPagination({current:2}),l().reload()},getSelectRowList:function(){o.info("请在控制台查看！")},getSelectRowKeyList:function(){o.info("请在控制台查看！")},setSelectedRowKeyList:function(){l().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){l().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},g=f("还原"),C=f("开启loading"),x=f("更改Columns"),k=f("获取Columns"),w=f("获取表格数据"),O=f("跳转到第2页"),R={class:"mb-4"},S=f("获取选中行"),_=f("获取选中行Key"),y=f("设置选中行"),T=f("清空选中行"),h=f("获取分页信息");u.render=function(e,i,t,o,s,n){const a=l("a-button"),f=l("BasicTable");return c(),r("div",j,[d("div",b,[d(a,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[g])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[C])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[x])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[k])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[w])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[O])),_:1},8,["onClick"])]),d("div",R,[d(a,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[S])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[_])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[y])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[T])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[h])),_:1},8,["onClick"])]),d(f,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;