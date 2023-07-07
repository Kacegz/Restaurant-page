import icon from './assets/icon.png'
const header=function(){
    const header=document.createElement('div');
    header.id="header";

    const logo=document.createElement("div");
    logo.id="icon"
    const image=document.createElement('img');
    image.setAttribute('src',icon)
    const name=document.createElement('p');
    name.textContent="Blossom Teahouse";
    logo.appendChild(image);
    logo.appendChild(name)

    const navbar=document.createElement('div');
    navbar.id="navbar";
    const home=document.createElement('div');
    home.id="home";
    home.classList.add("button");
    home.textContent="Home";
    const menu=document.createElement('div');
    menu.id="menu";
    menu.classList.add("button");
    menu.textContent="Menu";
    const contact=document.createElement('div');
    contact.id="contact";
    contact.classList.add("button");
    contact.textContent="Contact";

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);



    header.appendChild(logo)
    header.appendChild(navbar)
    return header
}
export {header}