const contact=function(){
    const mainbox=document.createElement('div');
    mainbox.id="mainbox";
    const mainname=document.createElement('div');
    mainname.id="name";
    mainname.textContent="Contact us!"

    const contactbox=document.createElement('div');
    const tel=document.createElement("p");
    tel.textContent="Phone: 123 456 7891";
    const mail=document.createElement("p");
    mail.textContent="E-mail: BlossomTeahouse@notreal.com";
    contactbox.appendChild(tel);
    contactbox.appendChild(mail);

    const hours=document.createElement('div');
    hours.id="hours";
    const mainhours=document.createElement('h1');
    mainhours.textContent="Hours";
    const first=document.createElement('p');
    first.textContent="Tue-Thu: 10:00-18:00";
    const second=document.createElement('p');
    second.textContent="Fri-Sun: 12:00-18:00";
    const third=document.createElement('p');
    third.textContent="Closed on mondays";
    
    hours.appendChild(mainhours);
    hours.appendChild(first);
    hours.appendChild(second);
    hours.appendChild(third);

    const locationbox=document.createElement('div');
    locationbox.id="address";
    const locationheader=document.createElement('h1');
    locationheader.textContent="Location";
    const address=document.createElement('p');
    address.textContent="12 Jasmine Lane,";
    const address2=document.createElement('p');
    address2.textContent="Harmoniaville, FL 12345";

    locationbox.appendChild(locationheader)
    locationbox.appendChild(address)
    locationbox.appendChild(address2)

    mainbox.appendChild(mainname);
    mainbox.appendChild(contactbox);
    mainbox.appendChild(hours);
    mainbox.appendChild(locationbox)
    const middle=document.querySelector("#middle");
    middle.textContent="";
    middle.appendChild(mainbox)
}
export default contact