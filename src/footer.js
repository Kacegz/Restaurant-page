const footer=function(){
    const footer=document.createElement('div');
    footer.id="footer";
    const info1=document.createElement('div');
    info1.innerHTML=`Image by <a href="https://www.freepik.com/free-photo/creative-feng-shui-composition_16920100.htm#query=japanese%20tea%20room&position=20&from_view=search&track=ais">Freepik</a>`;
    footer.appendChild(info1)
    const info2=document.createElement('div');
    info2.innerHTML=`<a href="https://www.freepik.com/icon/green-tea_2405453#position=11&page=1&term=tea&fromView=search">Icon by monkik</a>`;
    footer.appendChild(info2)
    return footer
}
export default footer