import{d as o,u as t,aQ as e,aK as i,$ as s,bf as r,e as a,bg as n,cp as d,cq as p,h as l,o as m,i as c,j as u,l as j,k as f,bw as b}from"./index.ca0293b2.js";import{L as x}from"./index.350aefe2.js";import{D as _,G as g,S as C}from"./siteSetting.c485f07c.js";import{G as F}from"./GithubFilled.3e5d420d.js";import"./vendor.3b1829c7.js";import"./isNumeric.2bec345d.js";import"./RightOutlined.1201c967.js";import"./LeftOutlined.d1c037c6.js";import"./index.b48f5073.js";import"./EllipsisOutlined.70395492.js";import"./types.efa91daf.js";import"./isEqual.6bad97d6.js";import"./toInteger.34722792.js";import"./index.95c10fda.js";import"./useTimeout.429405d0.js";import"./useHeaderSetting.c0748418.js";import"./domUtils.3f0b517b.js";import"./_stringToArray.2e032d51.js";import"./useSortable.fcbfb6fb.js";import"./index.db20b6ca.js";import"./index.1cb29158.js";import"./useScrollTo.44e3ca92.js";import"./animation.6cb888e9.js";import"./index.385f5350.js";import"./useWindowSizeFn.135e6646.js";import"./usePageContext.6304a3c5.js";import"./index.b5960532.js";import"./clickOutside.f1ee885f.js";import"./index.2f10f4b7.js";import"./UpOutlined.0ef8cad0.js";import"./DownOutlined.6480d9be.js";import"./PlusOutlined.bc736876.js";import"./index.19813759.js";var h=o({name:"LayoutFooter",components:{Footer:x.Footer,GithubFilled:F},setup(){const{t:o}=t(),{getShowFooter:d}=n(),{currentRoute:p}=e(),{prefixCls:l}=i("layout-footer");return{getShowLayoutFooter:s((()=>{var o;return a(d)&&!(null==(o=a(p).meta)?void 0:o.hiddenFooter)})),prefixCls:l,t:o,DOC_URL:_,GITHUB_URL:g,SITE_URL:C,openWindow:r}}});const w=b("data-v-47369c67");d("data-v-47369c67");const L=u("div",null,"Copyright ©2020 Vben Admin",-1);p();const S=w(((o,t,e,i,s,r)=>{const a=l("GithubFilled"),n=l("Footer");return o.getShowLayoutFooter?(m(),c(n,{key:0,class:o.prefixCls},{default:w((()=>[u("div",{class:`${o.prefixCls}__links`},[u("a",{onClick:t[1]||(t[1]=t=>o.openWindow(o.SITE_URL))},j(o.t("layout.footer.onlinePreview")),1),u(a,{onClick:t[2]||(t[2]=t=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),u("a",{onClick:t[3]||(t[3]=t=>o.openWindow(o.DOC_URL))},j(o.t("layout.footer.onlineDocument")),1)],2),L])),_:1},8,["class"])):f("",!0)}));h.render=S,h.__scopeId="data-v-47369c67";export default h;