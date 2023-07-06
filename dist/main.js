(()=>{"use strict";const e=function(){const t=document.createElement("div");t.id="mainbox",document.querySelector("#seemenu")&&document.querySelector("#seemenu").removeEventListener("click",e);const n=document.createElement("div");n.id="name",n.textContent="Menu";const d=document.createElement("div");d.id="beverages";const o=document.createElement("div");o.classList.add("tea");const a=document.createElement("h1");a.textContent="Sencha",document.createElement("img").setAttribute("src","assets/icon.png"),o.appendChild(a);const c=document.createElement("p");c.textContent="has a bright green appearance and a delicate, grassy aroma. Its flavor profile is often described as crisp and mildly vegetal, with hints of sweetness and a clean finish.",o.appendChild(c);const i=document.createElement("h3");i.textContent="4$",o.appendChild(i);const s=document.createElement("div");s.classList.add("tea");const l=document.createElement("h1");l.textContent="Bancha",s.appendChild(l);const m=document.createElement("p");m.textContent="has a light golden color and a smooth, refreshing taste with subtle hints of grassiness and a gentle, roasted undertone. Compared to other green teas, bancha has a lower caffeine content and is often enjoyed in the afternoon or evening.",s.appendChild(m);const r=document.createElement("h3");r.textContent="3$",s.appendChild(r);const p=document.createElement("div");p.classList.add("tea");const u=document.createElement("h1");u.textContent="Matcha",p.appendChild(u);const h=document.createElement("p");h.textContent="has a full-bodied taste with a delightful balance of sweetness and slight bitterness. It offers a unique combination of vegetal and savory notes, reminiscent of freshly cut grass and steamed vegetables.",p.appendChild(h);const C=document.createElement("h3");C.textContent="6$",p.appendChild(C),d.appendChild(o),d.appendChild(s),d.appendChild(p),t.appendChild(n),t.appendChild(d);const E=document.querySelector("#middle");E.textContent="",E.appendChild(t)},t=e,n=function(){const e=document.createElement("div");e.id="mainbox";const n=document.createElement("div");n.id="name",n.textContent="Blossom Teahouse";const d=document.createElement("div");d.id="description";const o=document.createElement("p");o.textContent="Blossom Teahouse invites you to experience a tranquil oasis dedicated to the art of tea. Immerse yourself in a world of delicate aromas and flavors as you indulge in a curated selection of exquisite teas. Discover the harmony between nature and tea, where every sip is a gentle reminder to pause, reflect, and find bliss in the simple pleasures of life. Welcome to Blossom Teahouse, where tranquility and the art of tea unite.",d.appendChild(o);const a=document.createElement("div");a.id="seemenu",a.classList.add("button"),a.textContent="Menu",a.addEventListener("click",t),e.appendChild(n),e.appendChild(d),e.appendChild(a);const c=document.querySelector("#middle");c.textContent="",c.appendChild(e)},d=function(){const e=document.createElement("div");e.id="mainbox";const t=document.createElement("div");t.id="name",t.textContent="Contact us!";const n=document.createElement("div"),d=document.createElement("p");d.textContent="Phone: 123 456 7891";const o=document.createElement("p");o.textContent="E-mail: BlossomTeahouse@notreal.com",n.appendChild(d),n.appendChild(o);const a=document.createElement("div");a.id="hours";const c=document.createElement("h1");c.textContent="Hours";const i=document.createElement("p");i.textContent="Tue-Thu: 10:00-18:00";const s=document.createElement("p");s.textContent="Fri-Sun: 12:00-18:00";const l=document.createElement("p");l.textContent="Closed on mondays",a.appendChild(c),a.appendChild(i),a.appendChild(s),a.appendChild(l);const m=document.createElement("div");m.id="address";const r=document.createElement("h1");r.textContent="Location";const p=document.createElement("p");p.textContent="12 Jasmine Lane,";const u=document.createElement("p");u.textContent="Harmoniaville, FL 12345",m.appendChild(r),m.appendChild(p),m.appendChild(u),e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(m);const h=document.querySelector("#middle");h.textContent="",h.appendChild(e)},o=document.querySelector("#content");o.appendChild(function(){const e=document.createElement("div");e.id="header";const t=document.createElement("div");t.id="icon";const n=document.createElement("img");n.setAttribute("src","assets/icon.png");const d=document.createElement("p");d.textContent="Blossom Teahouse",t.appendChild(n),t.appendChild(d);const o=document.createElement("div");o.id="navbar";const a=document.createElement("div");a.id="home",a.classList.add("button"),a.textContent="Home";const c=document.createElement("div");c.id="menu",c.classList.add("button"),c.textContent="Menu";const i=document.createElement("div");return i.id="contact",i.classList.add("button"),i.textContent="Contact",o.appendChild(a),o.appendChild(c),o.appendChild(i),e.appendChild(t),e.appendChild(o),e}()),o.appendChild(function(){const e=document.createElement("div");return e.id="middle",e}()),n(),o.appendChild(function(){const e=document.createElement("div");e.id="footer";const t=document.createElement("div");t.innerHTML='Image by <a href="https://www.freepik.com/free-photo/creative-feng-shui-composition_16920100.htm#query=japanese%20tea%20room&position=20&from_view=search&track=ais">Freepik</a>',e.appendChild(t);const n=document.createElement("div");return n.innerHTML='<a href="https://www.freepik.com/icon/green-tea_2405453#position=11&page=1&term=tea&fromView=search">Icon by monkik</a>',e.appendChild(n),e}()),function(){const e=document.getElementById("home"),o=document.getElementById("menu"),a=document.getElementById("contact"),c=document.getElementById("icon");e.addEventListener("click",n),o.addEventListener("click",t),a.addEventListener("click",d),c.addEventListener("click",n)}()})();