import './style.css'
import {header} from './header.js';
import middle from './middle.js';
import footer from './footer.js';
import home from "./home.js";
import menu from "./menu.js";
import contact from './contact.js';
const content=document.querySelector("#content");
content.appendChild(header());
content.appendChild(middle());
home();
content.appendChild(footer());

(function clickable(){
    const homebutton=document.getElementById("home");
    const menubutton=document.getElementById("menu");
    const contactsbutton=document.getElementById("contact");
    homebutton.addEventListener('click',home);
    menubutton.addEventListener('click',menu);
    contactsbutton.addEventListener('click',contact);
})()
