function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Button.stories-E5IWFlHy.js","./index-1awVzHz7.js","./index-2qTqE6EA.js","./lifecycle-BSK-R06m.js","./config-BTb8-V-F.js","./Button-BBL1-PpB.css","./variables-Dx_RgSQ_.css","./Configure-CCN00H6g.js","./index-B2bbAEYE.js","./_commonjsHelpers-Cpj98o6Y.js","./index-B_J8iUie.js","./index-BzJiga1e.js","./index-DrFu-skq.js","./index-FmAae9wM.js","./Footer.stories-D41LeEUV.js","./Footer-BwvGzrf3.css","./Header.stories-CFsOwapC.js","./Header-CVA-XeBN.css","./Table.stories-wKtjoNz-.js","./Table-BezEhOBI.css","./Thumbnail.stories-BFK37_Je.js","./Thumbnail-dmjh4Svo.css","./entry-preview-lz69ui7p.js","./entry-preview-docs-CtaiHfQx.js","./preview-CWfTTtnR.js","./v4-D8aEg3BZ.js","./preview-DzbRFJg_.js","./preview-K4_qCkL4.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-BrbYs9Zo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const f="modulepreload",R=function(s,n){return new URL(s,n).href},O={},e=function(n,c,l){let t=Promise.resolve();if(c&&c.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));t=Promise.all(c.map(i=>{if(i=R(i,l),i in O)return;O[i]=!0;const u=i.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!l)for(let m=r.length-1;m>=0;m--){const a=r[m];if(a.href===i&&(!u||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const _=document.createElement("link");if(_.rel=u?"stylesheet":f,u||(_.as="script",_.crossOrigin=""),_.href=i,d&&_.setAttribute("nonce",d),document.head.appendChild(_),u)return new Promise((m,a)=>{_.addEventListener("load",m),_.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${i}`)))})}))}return t.then(()=>n()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,E=P({page:"preview"});T.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const L={"./src/stories/Button.stories.ts":async()=>e(()=>import("./Button.stories-E5IWFlHy.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"./src/stories/Configure.mdx":async()=>e(()=>import("./Configure-CCN00H6g.js"),__vite__mapDeps([7,8,9,10,11,12,13]),import.meta.url),"./src/stories/Footer.stories.ts":async()=>e(()=>import("./Footer.stories-D41LeEUV.js"),__vite__mapDeps([14,2,3,15,6]),import.meta.url),"./src/stories/Header.stories.ts":async()=>e(()=>import("./Header.stories-CFsOwapC.js"),__vite__mapDeps([16,2,3,17,6]),import.meta.url),"./src/stories/Table.stories.ts":async()=>e(()=>import("./Table.stories-wKtjoNz-.js"),__vite__mapDeps([18,2,3,4,19,6]),import.meta.url),"./src/stories/Thumbnail.stories.ts":async()=>e(()=>import("./Thumbnail.stories-BFK37_Je.js"),__vite__mapDeps([20,1,2,3,4,21,6]),import.meta.url)};async function v(s){return L[s]()}const{composeConfigs:A,PreviewWeb:w,ClientApi:V}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const s=await Promise.all([e(()=>import("./entry-preview-lz69ui7p.js"),__vite__mapDeps([22,2,3,12,9]),import.meta.url),e(()=>import("./entry-preview-docs-CtaiHfQx.js"),__vite__mapDeps([23,11,9]),import.meta.url),e(()=>import("./preview-CWfTTtnR.js"),__vite__mapDeps([24,25,3]),import.meta.url),e(()=>import("./preview-DzbRFJg_.js"),__vite__mapDeps([26,10]),import.meta.url),e(()=>import("./preview-CcKPdgRb.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-K4_qCkL4.js"),__vite__mapDeps([27,25]),import.meta.url),e(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([28,12]),import.meta.url),e(()=>import("./preview-B4GcaC1c.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-Db4Idchh.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([29,12]),import.meta.url),e(()=>import("./preview-Cv3rAi2i.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-BrbYs9Zo.js"),__vite__mapDeps([30,1]),import.meta.url),e(()=>import("./preview-CIRcjyVj.js"),__vite__mapDeps([]),import.meta.url)]);return A(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w(v,I);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{e as _};