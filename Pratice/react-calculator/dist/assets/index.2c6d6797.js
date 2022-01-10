import{s as i,j as N,r as f,R as S,a as j}from"./vendor.d8df059d.js";const B=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}};B();const D=i.main`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  transition: all 0.1s;
`,M=i.div`
  display: grid;
  grid-template-rows: 2fr 8fr;
  height: 100%;
`,T=i.input.attrs(n=>({value:n.value,title:"input",disabled:"disabled"}))`
  /* padding-top: 5vh; */
  padding-right: 1vh;
  border: 0;
  background-color: #1e2024;
  text-align: right;
  color: #fff;
  font-size: 10vh;
`,A=i.section`
  display: grid;
  grid-template-rows: 1fr 4fr;
  background-color: #202020;
`,H=i.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  padding: 1px 1px 0;
`,_=i.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 1px;
`,P=i.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1px;
`,q=i.section`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1px;
  padding-left: 1px;
`,g=i.button`
  border: 0;
  border-radius: 5px;
  background-color: #323232;
  color: #fff;
  user-select: none;
  font-size: 4vh;

  &:hover {
    background-color: #3b3b3b;
  }

  &:active {
    background-color: #323232;
  }
`,z=i(g)`
  background-color: #3b3b3b;

  &:hover {
    background-color: #323232;
  }

  &:active {
    background-color: #282828;
  }
`,k="+",C="-",E="x",I="\xF7",m="%",s=N.exports.jsx,h=N.exports.jsxs,b={features:["DEL",m,"C","="],num:[7,8,9,4,5,6,1,2,3,"+ / -",0,"."],operator:[I,E,C,k]};var F=()=>{const[n,c]=f.exports.useState(""),[o,a]=f.exports.useState(""),[r,t]=f.exports.useState(""),[d,x]=f.exports.useState(0),L=(e=0,l,R)=>{const u=Number(e),p=Number(R);switch(l){case I:return u/p;case E:return u*p;case C:return u-p;case k:return u+p;case m:return u%p}},y=e=>{const l=L(n,r,o);x(l),c(l)},w=e=>l=>{switch(e){case"=":y();break;case"C":x(""),c("");break;case"%":return v(m)();case"DEL":return o?o.length===1?a("0"):a(o.substring(0,o.length-1)):n?n.length===1?c("0"):c(n.substring(0,n.length-1)):void 0}a(""),t("")},O=e=>l=>r?a(e!=="+ / -"?o+e:-o):c(e!=="+ / -"?n+e:-n),v=e=>l=>{if(!r)return t(e);y(),a(""),t(e)};return h(M,{children:[s(T,{value:(n?Number(o||d||n):0).toLocaleString(void 0,{style:"decimal",maximumFractionDigits:20})}),h(A,{children:[s(H,{children:b.features.map(e=>s(g,{onClick:w(e),children:e},e))}),h(_,{children:[s(P,{children:b.num.map(e=>s(z,{onClick:O(e),children:e},e))}),s(q,{children:b.operator.map(e=>s(g,{onClick:v(e),children:e},e))})]})]})]})},K=()=>s(D,{children:s(F,{})});console.clear();S.render(s(j.StrictMode,{children:s(K,{})}),document.getElementById("root"));
