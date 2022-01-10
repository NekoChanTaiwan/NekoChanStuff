import{s as c,j as v,r as g,R as O,a as R}from"./vendor.d8df059d.js";const S=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}};S();const j=c.main`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  transition: all 0.1s;
`,D=c.div`
  display: grid;
  grid-template-rows: 2fr 8fr;
  height: 100%;
`,M=c.input.attrs(o=>({value:o.value,title:"input",disabled:"disabled"}))`
  /* padding-top: 5vh; */
  padding-right: 1vh;
  border: 0;
  background-color: #1e2024;
  text-align: right;
  color: #fff;
  font-size: 10vh;
`,B=c.section`
  display: grid;
  grid-template-rows: 1fr 4fr;
  background-color: #202020;
`,T=c.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  padding: 1px 1px 0;
`,A=c.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 1px;
`,H=c.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1px;
`,P=c.section`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1px;
  padding-left: 1px;
`,m=c.button`
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
`,_=c(m)`
  background-color: #3b3b3b;

  &:hover {
    background-color: #323232;
  }

  &:active {
    background-color: #282828;
  }
`,N="+",k="-",C="x",E="\xF7",h="%",s=v.exports.jsx,b=v.exports.jsxs,x={features:["DEL",h,"C","="],num:[7,8,9,4,5,6,1,2,3,"+ / -",0,"."],operator:[E,C,k,N]};var z=()=>{const[o,i]=g.exports.useState(""),[n,a]=g.exports.useState(""),[r,t]=g.exports.useState(""),[l,y]=g.exports.useState(0),I=(e=0,f,d)=>{const u=Number(e),p=Number(d);switch(f){case E:return u/p;case C:return u*p;case k:return u-p;case N:return u+p;case h:return u%p}},L=e=>f=>{let d=0;switch(e){case"=":d=I(o,r,n),y(d),i(d);break;case"C":y(""),i("");break;case"%":return t(h);case"DEL":return n?n.length===1?a("0"):a(n.substring(0,n.length-1)):o?o.length===1?i("0"):i(o.substring(0,o.length-1)):void 0}a(""),t("")},w=e=>f=>r?a(e!=="+ / -"?n+e:-n):i(e!=="+ / -"?o+e:-o);return b(D,{children:[s(M,{value:(o?Number(n||l||o):0).toLocaleString(void 0,{style:"decimal",maximumFractionDigits:20})}),b(B,{children:[s(T,{children:x.features.map(e=>s(m,{onClick:L(e),children:e},e))}),b(A,{children:[s(H,{children:x.num.map(e=>s(_,{onClick:w(e),children:e},e))}),s(P,{children:x.operator.map(e=>s(m,{onClick:f=>t(e),children:e},e))})]})]})]})},F=()=>s(j,{children:s(z,{})});console.clear();O.render(s(R.StrictMode,{children:s(F,{})}),document.getElementById("root"));
