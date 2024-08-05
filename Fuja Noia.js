const Noia = document.querySelector('.noia');
const Policia = document.querySelector('.policia');


const jump = () => {
    Noia.classList.add ('jump');

    setTimeout(() => {
        Noia.classList.remove ('jump')
    } ,  500);
}


const loop = setInterval(() => {
    const PoliciaPosition = Policia.offsetleft;
    const NoiaPosition = +window.getComputedStyle(Noia).bottom.replace('px,  ');

    console.log(NoiaPosition);

     if (PoliciaPosition < 120  &&  PoliciaPosition > 0 && NoiaPosition < 80 ){
        
        Policia.style.animation = 'none';
        Policia.style.left = `${PoliciaPosition}px`;
     }
    
}, 10);

document.addEventListener('keydown' , jump);




