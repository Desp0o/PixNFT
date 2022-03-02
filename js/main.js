let headerburger = document.querySelector('.burger-menu');
let menu = document.querySelector('.fixed-menu');
let noscroll = document.querySelector('body');

headerburger.onclick = function(){
    headerburger.classList.toggle('active');
    menu.classList.toggle('active');
    noscroll.classList.toggle('no-scroll');
} 

menu.onclick = function(){ 
    menu.classList.toggle('active');
    noscroll.classList.toggle('no-scroll');
} 

