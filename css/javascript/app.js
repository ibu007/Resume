let mobileNav =document.querySelector('.mobile-nav');

const get_list_items = () => {
    let lis = document.getElementById('nav-1').getElementsByTagName('a');
    console.log(lis);
    mobileNav.classList.remove('open');

}
$(document).ready(function(){
    $('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
    });


let hamburger=document.querySelector('.hamberger-icon');
let times=document.querySelector('.times');

//var innermenu =document.getElementsByClassName('.inner-menu');
//innermenu[0].style.backgroundColor = "red";
//console.log(innermenu);


hamburger.addEventListener('click',function(){
mobileNav.classList.add('open');
});
times.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

})