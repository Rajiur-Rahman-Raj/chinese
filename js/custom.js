$(document).ready(function(){
    
    // product slider css
    $('.slider1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow: '.p-left',
        nextArrow: '.p-right',
        dots: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },     {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    
    //banner2 sliding js
    $('.banner2-sliding').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 2000,
    });
    
    
    // review sliding js
    $('.review-sliding').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 2000,
    });
    
    
    // sticky-top js
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        var sticky = $('.stick');
        if(scrolling >= 50){
            sticky.addClass('navbg');
        }else{
            sticky.removeClass('navbg');
        }
    });
    
    // wow js
    new WOW().init();
    
    
})