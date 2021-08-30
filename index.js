$(document).ready(function () {
    $('.checkbtn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.checkbtn i').toggleClass("active");
    });

    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

     // owl carousel script
     $('.carousel').owlCarousel
     ({
         margin: 20,
         loop: true,
         autoplayTimeOut: 2000,
         autoplayHoverPause: true,
         responsive: {
             0:{
                 items: 1,
                 nav: false
             },
             600:{
                 items: 2,
                 nav: false
             },
             1000:{
                 items: 3,
                 nav: false
             }
         }
     });
});