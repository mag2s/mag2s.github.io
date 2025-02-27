import{o as d,p as f,q as y,t as g,r as i,_ as x,n as e,M as S,L as w,S as j,O as k}from"./components-NSRvAL3V.js";/**
 * @remix-run/react v2.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:t,...l}){let{isSpaMode:c}=d(),r=f(),u=y();g({getKey:t,storageKey:a});let m=i.useMemo(()=>{if(!t)return null;let s=t(r,u);return s!==r.key?s:null},[]);if(c)return null;let p=((s,h)=>{if(!window.history.state||!window.history.state.key){let o=Math.random().toString(32).slice(2);window.history.replaceState({key:o},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[h||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(o){console.error(o),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",x({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${p})(${JSON.stringify(a)}, ${JSON.stringify(m)})`}}))}const L=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"},{rel:"icon",href:"/favicon.ico"}],v=()=>[{title:"Velkommen | Magnus"},{name:"Magnus",content:"Velkommen!"}];function I({children:t}){return e.jsxs("html",{lang:"en",className:"dark",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(S,{}),e.jsx(w,{})]}),e.jsxs("body",{children:[t,e.jsx(M,{}),e.jsx(j,{})]})]})}function N(){return e.jsx(k,{})}export{I as Layout,N as default,L as links,v as meta};
