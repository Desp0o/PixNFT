let headerburger = document.querySelector('.burger-menu');
let menu = document.querySelector('.fixed-menu');
let noscroll = document.querySelector('body');

headerburger.onclick = function(){
    headerburger.classList.toggle('active');
    menu.classList.toggle('active');
    
} 

menu.onclick = function(){ 
    menu.classList.toggle('active');
    
    headerburger.classList.toggle('active');
} 

