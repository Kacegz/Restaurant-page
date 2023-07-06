import menu from './menu';
const home=function(){
    const mainbox=document.createElement('div');
    mainbox.id="mainbox";
    const mainname=document.createElement('div');
    mainname.id="name";
    mainname.textContent="Blossom Teahouse"
    const desc=document.createElement('div');
    desc.id="description";
    const text=document.createElement('p');
    text.textContent="Blossom Teahouse invites you to experience a tranquil oasis dedicated to the art of tea. Immerse yourself in a world of delicate aromas and flavors as you indulge in a curated selection of exquisite teas. Discover the harmony between nature and tea, where every sip is a gentle reminder to pause, reflect, and find bliss in the simple pleasures of life. Welcome to Blossom Teahouse, where tranquility and the art of tea unite."
    desc.appendChild(text);
    const menubutton=document.createElement('div');
    menubutton.id="seemenu";
    menubutton.classList.add("button")
    menubutton.textContent="Menu";
    menubutton.addEventListener("click",menu)
    
    mainbox.appendChild(mainname);
    mainbox.appendChild(desc);
    mainbox.appendChild(menubutton);
    const middle=document.querySelector("#middle");
    middle.textContent="";
    middle.appendChild(mainbox)
}
export default home