/* empty css                      */import{S as m,N as w}from"./assets/vendor-Bf7NdVAF.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();let f=null,h=null;const g=window.matchMedia("(min-width: 1440px)");function y(){if(g.matches){f&&(f.destroy(!0,!0),f=null);return}f||(f=new m(".discover-swiper",{modules:[w],slidesPerView:1,spaceBetween:16,navigation:{prevEl:".discover-prev",nextEl:".discover-next"}}))}function L(){h||(h=new m(".game-swiper",{modules:[w],slidesPerView:1,spaceBetween:16,navigation:{prevEl:".game-prev",nextEl:".game-next"},breakpoints:{1440:{slidesPerView:4.3,spaceBetween:4}}}))}function v(){y(),L()}v();g.addEventListener("change",v);document.addEventListener("DOMContentLoaded",()=>{const l=document.querySelector(".menu-button"),s=l.querySelector(".icon"),u=document.querySelector(".modal"),d=document.querySelectorAll(".menu-list-item"),e=document.querySelector(".header");let t=!1;const c=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1_391)">
    <path d="M4 6H20" stroke="#F8F8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 12H20" stroke="#F8F8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 18H20" stroke="#F8F8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_1_391">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
    `,n=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1_565)">
    <path d="M18 6L6 18" stroke="#F8F8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6 6L18 18" stroke="#F8F8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_1_565">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
    `;l.addEventListener("click",()=>{t=!t,s.innerHTML=t?n:c,t?o():i()}),d.forEach(a=>a.addEventListener("click",()=>{i(),s.innerHTML=c,t=!1})),window.addEventListener("scroll",r);function o(){u.style.display="block"}function i(){u.style.display="none"}function r(){e&&(window.scrollY>60?e.classList.add("header-scroll"):e.classList.remove("header-scroll"))}});document.addEventListener("DOMContentLoaded",()=>{function l(){const n=document.getElementById("site-header");return n?n.offsetHeight:0}function s(n){const o=document.getElementById(n);if(!o)return;const i=l(),r=o.getBoundingClientRect().top+window.pageYOffset-i;window.scrollTo({top:r,behavior:"smooth"})}document.querySelectorAll(".navigation-item a").forEach(n=>{n.addEventListener("click",function(o){const i=this.getAttribute("href");if(!i)return;const[r,a]=i.split("#");if(!a)return;const p=window.location.pathname.split("/").pop();!(r===""||r==="./"||r===p||r==="./"+p)||!document.getElementById(a)||(o.preventDefault(),s(a),t(a))})});const d=document.querySelectorAll("section[id]"),e=document.querySelectorAll(".navigation-item");function t(n){e.forEach(i=>i.classList.remove("active"));const o=document.querySelector(`.navigation-item a[href*="#${n}"]`);o&&o.closest(".navigation-item").classList.add("active")}function c(){const n=window.pageYOffset+l()+100;d.forEach(o=>{const i=o.offsetTop,r=i+o.offsetHeight;n>=i&&n<r&&t(o.id)})}if(window.addEventListener("scroll",c),window.location.hash){const n=window.location.hash.substring(1);setTimeout(()=>{s(n),t(n)},300)}});
//# sourceMappingURL=index.js.map
