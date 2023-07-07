(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(81),a=t.n(o),r=t(645),i=t.n(r),c=t(667),d=t.n(c),s=new URL(t(189),t.b),l=i()(a());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap);"]);var p=d()(s);l.push([e.id,`:root{\n    --blackshade:rgba(0, 0, 0, 0.8);\n    --greenshade:rgba(0, 64, 0, 0.6);\n    --blacknav:rgba(0, 0, 0, 0.92);\n    --greenlighter:rgba(39, 97, 39, 1);\n}\nhtml,body{\n    margin: 0;\n    color: white;\n    font-family: 'Dancing Script', cursive;\n}\n#content{\n    background-image: url(${p});\n    background-size:cover;\n}\n#header{\n    height: 10vh;\n    background-color: var(--blacknav);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 20px;\n    padding-right: 40px;\n}\n#icon{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap:10px;\n    font-size: 3rem;\n}\n#icon>img{\n    width: 9vh;\n    height: 9vh;\n}\n#icon>p{\n    margin:0;\n}\n#navbar{\n    display: flex;\n    gap:40px;\n}\n.button{\n    background-color: var(--greenshade);\n    border-radius: 20px;\n    padding: 10px;\n    padding-left: 30px;\n    padding-right: 30px;\n    font-size: 1.5rem;\n    transition: 0.2s;\n}\n#middle{\n    background-color: var(--blackshade);\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5%;\n}\n#mainbox{\n    width: 90vh;\n    min-height: 90wh;\n    background-color: var(--greenshade);\n    border-radius: 40px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap:30px;\n    padding: 60px;\n    text-align: center;\n    font-size: 2rem;\n}\n#name{\n    font-size: 5rem;\n}\n#description{\n    padding-left: 50px;\n    padding-right: 50px;\n    font-size: 2rem;\n}\n#seemenu{\n    background-color: rgb(160, 140, 53);\n}\n.button:hover{\n    transform: scale(1.1);\n    filter: brightness(90%);\n    background-color: var(--greenlighter);\n}\n#footer{\n    background-color: var(--blacknav);\n    height: 5vh;\n    display: flex;\n    flex-direction: column;\n}\na{\n    color:white;\n}\n#beverages{\n    padding-left: 40px;\n    padding-right: 40px;\n    display: flex;\n    gap:30px;\n    flex-direction: column;\n}\n.tea{\n    border: 5px solid var(--greenlighter);\n    border-radius: 60px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.4rem;\n    padding: 60px;\n    transition: 0.5s;\n}\n.tea:hover{\n    background-color: var(--greenlighter);\n}\n.tea>h3{\n    margin: 0;\n}`,""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var d=o(e,a),s=0;s<r.length;s++){var l=t(r[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},189:(e,n,t)=>{e.exports=t.p+"94cc5dee90289150c083.jpg"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),i=t.n(r),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=t.p+"cc01521ee7f10e9a6ea3.png",g=function(){const e=document.createElement("div");e.id="mainbox",document.querySelector("#seemenu")&&document.querySelector("#seemenu").removeEventListener("click",g);const n=document.createElement("div");n.id="name",n.textContent="Menu";const t=document.createElement("div");t.id="beverages";const o=document.createElement("div");o.classList.add("tea");const a=document.createElement("h1");a.textContent="Sencha",document.createElement("img"),o.appendChild(a);const r=document.createElement("p");r.textContent="has a bright green appearance and a delicate, grassy aroma. Its flavor profile is often described as crisp and mildly vegetal, with hints of sweetness and a clean finish.",o.appendChild(r);const i=document.createElement("h3");i.textContent="4$",o.appendChild(i);const c=document.createElement("div");c.classList.add("tea");const d=document.createElement("h1");d.textContent="Bancha",c.appendChild(d);const s=document.createElement("p");s.textContent="has a light golden color and a smooth, refreshing taste with subtle hints of grassiness and a gentle, roasted undertone. Compared to other green teas, bancha has a lower caffeine content and is often enjoyed in the afternoon or evening.",c.appendChild(s);const l=document.createElement("h3");l.textContent="3$",c.appendChild(l);const p=document.createElement("div");p.classList.add("tea");const u=document.createElement("h1");u.textContent="Matcha",p.appendChild(u);const m=document.createElement("p");m.textContent="has a full-bodied taste with a delightful balance of sweetness and slight bitterness. It offers a unique combination of vegetal and savory notes, reminiscent of freshly cut grass and steamed vegetables.",p.appendChild(m);const h=document.createElement("h3");h.textContent="6$",p.appendChild(h),t.appendChild(o),t.appendChild(c),t.appendChild(p),e.appendChild(n),e.appendChild(t);const f=document.querySelector("#middle");f.textContent="",f.appendChild(e)},v=g,C=function(){const e=document.createElement("div");e.id="mainbox";const n=document.createElement("div");n.id="name",n.textContent="Blossom Teahouse";const t=document.createElement("div");t.id="description";const o=document.createElement("p");o.textContent="Blossom Teahouse invites you to experience a tranquil oasis dedicated to the art of tea. Immerse yourself in a world of delicate aromas and flavors as you indulge in a curated selection of exquisite teas. Discover the harmony between nature and tea, where every sip is a gentle reminder to pause, reflect, and find bliss in the simple pleasures of life. Welcome to Blossom Teahouse, where tranquility and the art of tea unite.",t.appendChild(o);const a=document.createElement("div");a.id="seemenu",a.classList.add("button"),a.textContent="Menu",a.addEventListener("click",v),e.appendChild(n),e.appendChild(t),e.appendChild(a);const r=document.querySelector("#middle");r.textContent="",r.appendChild(e)},x=function(){const e=document.createElement("div");e.id="mainbox";const n=document.createElement("div");n.id="name",n.textContent="Contact us!";const t=document.createElement("div"),o=document.createElement("p");o.textContent="Phone: 123 456 7891";const a=document.createElement("p");a.textContent="E-mail: BlossomTeahouse@notreal.com",t.appendChild(o),t.appendChild(a);const r=document.createElement("div");r.id="hours";const i=document.createElement("h1");i.textContent="Hours";const c=document.createElement("p");c.textContent="Tue-Thu: 10:00-18:00";const d=document.createElement("p");d.textContent="Fri-Sun: 12:00-18:00";const s=document.createElement("p");s.textContent="Closed on mondays",r.appendChild(i),r.appendChild(c),r.appendChild(d),r.appendChild(s);const l=document.createElement("div");l.id="address";const p=document.createElement("h1");p.textContent="Location";const u=document.createElement("p");u.textContent="12 Jasmine Lane,";const m=document.createElement("p");m.textContent="Harmoniaville, FL 12345",l.appendChild(p),l.appendChild(u),l.appendChild(m),e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(l);const h=document.querySelector("#middle");h.textContent="",h.appendChild(e)},b=document.querySelector("#content");b.appendChild(function(){const e=document.createElement("div");e.id="header";const n=document.createElement("div");n.id="icon";const t=document.createElement("img");t.setAttribute("src",f);const o=document.createElement("p");o.textContent="Blossom Teahouse",n.appendChild(t),n.appendChild(o);const a=document.createElement("div");a.id="navbar";const r=document.createElement("div");r.id="home",r.classList.add("button"),r.textContent="Home";const i=document.createElement("div");i.id="menu",i.classList.add("button"),i.textContent="Menu";const c=document.createElement("div");return c.id="contact",c.classList.add("button"),c.textContent="Contact",a.appendChild(r),a.appendChild(i),a.appendChild(c),e.appendChild(n),e.appendChild(a),e}()),b.appendChild(function(){const e=document.createElement("div");return e.id="middle",e}()),C(),b.appendChild(function(){const e=document.createElement("div");e.id="footer";const n=document.createElement("div");n.innerHTML='Image by <a href="https://www.freepik.com/free-photo/creative-feng-shui-composition_16920100.htm#query=japanese%20tea%20room&position=20&from_view=search&track=ais">Freepik</a>',e.appendChild(n);const t=document.createElement("div");return t.innerHTML='<a href="https://www.freepik.com/icon/green-tea_2405453#position=11&page=1&term=tea&fromView=search">Icon by monkik</a>',e.appendChild(t),e}()),function(){const e=document.getElementById("home"),n=document.getElementById("menu"),t=document.getElementById("contact");e.addEventListener("click",C),n.addEventListener("click",v),t.addEventListener("click",x)}()})()})();