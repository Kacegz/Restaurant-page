const menu=function(){
    const mainbox=document.createElement('div');
    mainbox.id="mainbox";
    if(document.querySelector("#seemenu")){
        document.querySelector("#seemenu").removeEventListener('click',menu)
    }
    const mainname=document.createElement('div');
    mainname.id="name";
    mainname.textContent="Menu"
    const beverages=document.createElement('div');
    beverages.id="beverages";
    
    const sencha=document.createElement('div');
    sencha.classList.add("tea");
    const senchaname=document.createElement('h1');
    senchaname.textContent="Sencha"
    const senchaimg=document.createElement('img');
    senchaimg.setAttribute('src','assets/icon.png')
    sencha.appendChild(senchaname)
    const senchadesc=document.createElement('p');
    senchadesc.textContent="has a bright green appearance and a delicate, grassy aroma. Its flavor profile is often described as crisp and mildly vegetal, with hints of sweetness and a clean finish.";
    sencha.appendChild(senchadesc)
    const senchaprice=document.createElement('h3');
    senchaprice.textContent="4$";
    sencha.appendChild(senchaprice)
    //sencha.appendChild(senchaimg)


    const bancha=document.createElement('div');
    bancha.classList.add("tea");
    const banchaname=document.createElement('h1');
    banchaname.textContent="Bancha";
    bancha.appendChild(banchaname)
    const banchadesc=document.createElement('p');
    banchadesc.textContent="has a light golden color and a smooth, refreshing taste with subtle hints of grassiness and a gentle, roasted undertone. Compared to other green teas, bancha has a lower caffeine content and is often enjoyed in the afternoon or evening.";
    bancha.appendChild(banchadesc)
    const banchaprice=document.createElement('h3');
    banchaprice.textContent="3$";
    bancha.appendChild(banchaprice)

    const matcha=document.createElement('div');
    matcha.classList.add("tea");
    const matchaname=document.createElement('h1');
    matchaname.textContent="Matcha";
    matcha.appendChild(matchaname)
    const matchadesc=document.createElement('p');
    matchadesc.textContent="has a full-bodied taste with a delightful balance of sweetness and slight bitterness. It offers a unique combination of vegetal and savory notes, reminiscent of freshly cut grass and steamed vegetables.";
    matcha.appendChild(matchadesc)
    const matchaprice=document.createElement('h3');
    matchaprice.textContent="6$";
    matcha.appendChild(matchaprice)


    beverages.appendChild(sencha);
    beverages.appendChild(bancha);
    beverages.appendChild(matcha);
    mainbox.appendChild(mainname);
    mainbox.appendChild(beverages)

    const middle=document.querySelector("#middle");
    middle.textContent="";
    middle.appendChild(mainbox)
}
export default menu