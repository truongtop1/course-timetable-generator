if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const t=e=>i(e,l),o={module:{uri:l},exports:a,require:t};s[l]=Promise.all(r.map((e=>o[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-455a0d7a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_...all_.4e48684a.js",revision:null},{url:"assets/404.ddb01282.js",revision:null},{url:"assets/app.77f63c7a.css",revision:null},{url:"assets/app.a62c2303.js",revision:null},{url:"assets/auth.729121a9.js",revision:null},{url:"assets/share.9d154af5.js",revision:null},{url:"assets/timetable-generator.c74a8712.js",revision:null},{url:"assets/vendor.50754dcb.js",revision:null},{url:"assets/virtual_pwa-register.a3d85283.js",revision:null},{url:"index.html",revision:"0b473da0ffceccfa9bdbfa5129121780"},{url:"favicon.svg",revision:"fd480326ce2f9db2043fceedae54cb67"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"images/thinking.jpeg",revision:"df863adc14e79ab310f752b54cc7418e"},{url:"manifest.webmanifest",revision:"2cd2b1401e2abad94655349c706cd52a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
