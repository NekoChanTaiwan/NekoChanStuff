import{s as i,j as N,r as u,R as j,a as B}from"./vendor.d8df059d.js";const M=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};M();const T=i.main`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  transition: all 0.1s;
`,A=i.div`
  display: grid;
  grid-template-rows: 2fr 8fr;
  height: 100%;
`,H=i.input.attrs(n=>({value:n.value,title:"input",disabled:"disabled"}))`
  /* padding-top: 5vh; */
  padding-right: 1vh;
  border: 0;
  background-color: #1e2024;
  text-align: right;
  color: #fff;
  font-size: 10vh;
`,_=i.section`
  display: grid;
  grid-template-rows: 1fr 4fr;
  background-color: #202020;
`,P=i.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  padding: 1px 1px 0;
`,V=i.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 1px;
`,q=i.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1px;
`,z=i.section`
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
`,F=i(g)`
  background-color: #3b3b3b;

  &:hover {
    background-color: #323232;
  }

  &:active {
    background-color: #282828;
  }
`,k="+",C="-",E="x",I="\xF7",m="%",s=N.exports.jsx,h=N.exports.jsxs,b={features:["DEL",m,"C","="],num:[7,8,9,4,5,6,1,2,3,"+ / -",0,"."],operator:[I,E,C,k]};var K=()=>{const[n,c]=u.exports.useState(""),[o,a]=u.exports.useState(""),[t,r]=u.exports.useState(""),[l,x]=u.exports.useState(0),[L,S]=u.exports.useState("");u.exports.useEffect(()=>{S((n?Number(o||l||n):0).toLocaleString(void 0,{style:"decimal",maximumFractionDigits:20}))},[n,o,t,l]);const w=(e=0,d,D)=>{const p=Number(e),f=Number(D);switch(d){case I:return p/f;case E:return p*f;case C:return p-f;case k:return p+f;case m:return p%f}},y=e=>{const d=w(n,t,o);x(d),c(d)},O=e=>d=>{switch(e){case"=":y();break;case"C":x(""),c("");break;case"%":return v(m)();case"DEL":return o?o.length===1?a("0"):a(o.substring(0,o.length-1)):n?n.length===1?c("0"):c(n.substring(0,n.length-1)):void 0}a(""),r("")},R=e=>d=>t?a(e!=="+ / -"?o+e:-o):c(e!=="+ / -"?n+e:-n),v=e=>d=>{if(!t)return r(e);y(),a(""),r(e)};return h(A,{children:[s(H,{value:L}),h(_,{children:[s(P,{children:b.features.map(e=>s(g,{onClick:O(e),children:e},e))}),h(V,{children:[s(q,{children:b.num.map(e=>s(F,{onClick:R(e),children:e},e))}),s(z,{children:b.operator.map(e=>s(g,{onClick:v(e),children:e},e))})]})]})]})},U=()=>s(T,{children:s(K,{})});console.clear();j.render(s(B.StrictMode,{children:s(U,{})}),document.getElementById("root"));
