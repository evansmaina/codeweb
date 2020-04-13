 $(window).on('load',function(){
        $('.loader').addClass('complete');
     $('.pre-loader').addClass('complete');
    })



$(document).ready(function(){
    
    
    //    customer review area
    
 $('#reviews-carousel').owlCarousel({
     autoplay:true,
     dots:false,
    loop:true,
    nav:true,
     navText:['<i class="fa fa-angle-left">','<i class="fa fa-angle-right">'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})   
   
    
    
    
    
})









//JAVASCRIPT





const school_open_btn=document.querySelector(".school-open-btn");
const school_close_btn=document.querySelector(".school-close-btn");
const school_nav=document.querySelectorAll(".school-nav");


school_open_btn.addEventListener('click',function(){
   school_nav.forEach(function(nav_el){
       
    nav_el.classList.add('visible');    
   })
      
 school_close_btn.addEventListener('click',function(){
   school_nav.forEach(function(nav_el){
       
    nav_el.classList.remove('visible');    
   })
      
    
    
    
    
    
})   
    
    
    
    
})