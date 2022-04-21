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

$(".mode-icon").click(function(){
    
    document.querySelector("body").classList.toggle('darkclass');  
    document.querySelector(".fixed-menu").classList.toggle("fixed-menu-dark");
    document.querySelector(".container-blue-bg").classList.toggle('darkclass');
    document.querySelector(".roadmap-content").classList.toggle("darkclass");
    document.querySelector(".container-rarity").classList.toggle("darkclass");
    document.querySelector(".creator-content").classList.toggle("darkclass");
    document.querySelector(".FAQ-content").classList.toggle("darkclass");
    document.querySelector(".Get-your-nft").classList.toggle("darkclass");
    document.querySelector("#opneseayellow").classList.toggle("opneseapink");
    document.querySelector(".get-yours-now-btn").classList.toggle("get-yours-now-btn-dark");
    document.querySelector(".creator-btn-link").classList.toggle("creator-btn-link-dark");
    document.querySelector(".Get-your-nft-left-btn-link").classList.toggle("Get-your-nft-left-btn-link-dark");
    document.querySelector("#opensea").classList.toggle("opensea-dark");
    document.querySelector(".main-content-txt h1").classList.toggle("dark-header");
    document.querySelector(".main-content-txt p").classList.toggle("dark-header");

    for(i=0; i<document.querySelectorAll(".burger-menu-list").length; i++){
    document.querySelectorAll(".burger-menu-list")[i].classList.toggle("burger-menu-list-dark");
    }

    for(i=0; i<document.querySelectorAll(".left-side-list-items").length; i++){
        document.querySelectorAll(".left-side-list-items")[i].classList.toggle("left-side-list-items-dark");
    }

    for(i=0; i<document.querySelectorAll(".footer-links").length; i++){
    document.querySelectorAll(".footer-links")[i].classList.toggle("footer-links-dark");
    }

    for(i=0; i<document.querySelectorAll(".question").length; i++){
        document.querySelectorAll(".question")[i].classList.toggle("question-dark");
    }

    for(i=0; i<document.querySelectorAll(".roadmap-column-list").length; i++){
        document.querySelectorAll(".roadmap-column-list")[i].classList.toggle('roadmap-column-list-dark');
    }
    
    
    
});