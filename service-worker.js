if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>n(e,o),l={module:{uri:o},exports:t,require:c};s[o]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"landing_page"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.83921cc4.css",revision:null},{url:"/index.html",revision:"cc5af9b0d83e3abb101432445638f9ca"},{url:"/js/about.a895a1cb.js",revision:null},{url:"/js/app.15ea9a10.js",revision:null},{url:"/js/chunk-vendors.1109acac.js",revision:null},{url:"/manifest.json",revision:"d3578dde0631f0d9839ca832d85e6e70"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
