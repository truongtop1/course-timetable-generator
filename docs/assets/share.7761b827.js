import{o as l,c as f,a as r,b as h,u as p,d as v,e as u,h as c,f as i,g as b,i as x,r as w,j as k,k as q,l as m,w as B,m as g,n as y,p as C}from"./app.50c36df1.js";const $={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 128 128"},M=r("path",{fill:"#fcc21b",d:"M64 9.62C1.59 9.62.12 79.58.12 93.42c0 13.86 28.59 25.08 63.88 25.08c35.28 0 63.88-11.22 63.88-25.08c0-13.84-1.48-83.8-63.88-83.8z"},null,-1),z=r("path",{fill:"#2f2f2f",d:"M41.99 65.5c-4.49.04-8.17-4.27-8.22-9.62c-.05-5.37 3.55-9.75 8.04-9.79c4.48-.04 8.17 4.27 8.22 9.64c.05 5.36-3.56 9.73-8.04 9.77zm44.11 0c4.48-.01 8.11-4.36 8.1-9.71c-.01-5.37-3.66-9.7-8.14-9.69c-4.49.01-8.13 4.36-8.12 9.73c.01 5.35 3.67 9.68 8.16 9.67z"},null,-1),A=r("path",{fill:"#ed6c30",d:"M43.08 97.67c1.99 1.34 4.5.46 6.71 0c6.18-1.28 11.6-1.33 14.2-1.33s8.03.05 14.2 1.33c2.21.46 4.72 1.34 6.71 0c2.52-1.71.66-7.83-3.31-11.97c-2.4-2.5-8.13-7.35-17.61-7.35c-9.48 0-15.2 4.85-17.61 7.35c-3.95 4.15-5.81 10.27-3.29 11.97z"},null,-1),N=[M,z,A];function j(e,t){return l(),f("svg",$,N)}var D={name:"noto-v1-frowning-face-with-open-mouth",render:j},I=h({name:"QBanner",props:{...p,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:t}){const a=b(),o=v(e,a.proxy.$q),d=u(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(o.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),_=u(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const s=[c("div",{class:"q-banner__avatar col-auto row items-center self-start"},i(t.avatar)),c("div",{class:"q-banner__content col text-body2"},i(t.default))],n=i(t.action);return n!==void 0&&s.push(c("div",{class:_.value},n)),c("div",{class:d.value+(e.inlineActions===!1&&n!==void 0?" q-banner--top-padding":""),role:"alert"},s)}}});const R={key:1},V={text:"xl",class:"flex items-center justify-center"},Q=C(" Invalid "),E=x({__name:"share",setup(e){const t=g(),a=w(!0);let o=[];try{o=JSON.parse(decodeURIComponent(atob(t.query.timetable)))}catch{a.value=!1}return(d,_)=>{const s=y,n=D;return a.value?(l(),k(s,{key:0,timetable:q(o)},null,8,["timetable"])):(l(),f("div",R,[m(I,{dense:"","inline-actions":"",class:"text-white bg-red"},{default:B(()=>[r("span",V,[Q,m(n,{m:"l-4"})])]),_:1})]))}}});export{E as default};
