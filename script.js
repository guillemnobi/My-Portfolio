$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 50){
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
    } else {
 
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0})
  })

  // toggle menu/navbar
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  // typing animation script
  var typedHome = new Typed(".typing1", {
    strings: ["FrontEnd Web Developer"],
    typeSpeed: 120,
    backSpeed: 60,
    loop: true,
  })

  var typedContact = new Typed('.typing2', {
    strings: ['Type In your project...'],
    typeSpeed: 100,
    backSpeed: 100,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true
  });
    

  // owl carousel script
  
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
          items: 1,
          nav: false
      },
      600: {
          items: 2,
          nav: false
      },
      1000: {
          items: 3,
          nav: false
      }
    }
  }); 
});