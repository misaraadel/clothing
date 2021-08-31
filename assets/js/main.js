$(document).ready(function () {
    /*start the loading page */
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });
    $('.collapse').collapse();
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
     //Wow intit
     wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
     //start active navbar
    $('.hamburger').click(function(){
        $('.mobile-nav').addClass('acitve-nav');
    });
    $('.close-nav').click(function(){
        $('.mobile-nav').removeClass('acitve-nav');
    });
    $('.impLinks').click(function(){
        $('.impLinks').toggleClass('rotata_arow');
    });
    $('.open-side').click(function(){
        $('.side-mobile-data').addClass('acitve-nav');
    });
    $('.back-step').click(function(){
        $('.side-mobile-data').removeClass('acitve-nav');
    });
    // button.forEach(button => {
    //     button.addEventListener('click' , activeClass);

    // });
    // //function for clickable
    // function activeClass(){
    //     let sideMenu = this.sideMenu ;
    //     sideMenu.classList.add('acitve-nav');
    // }
    //owl header screen 
    $('.owl-header').owlCarousel({
        rtl: true,
        loop:true,
        margin: 0,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  :true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1
    });
    $('.owl-single-product').owlCarousel({
        rtl: true,
        loop:true,
        margin: 0,
        nav:true,
        dots: false,
        autoplay: true,
        touchDrag  :true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ]
    });
    //products slider 
    $('.owl-products').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    const favorite = document.querySelectorAll('.menu');
    favorite.forEach(button => {
        button.addEventListener('click' , activeClass);
    });
    function activeClass(){
        let button = this ;
        button.classList.toggle('open')
    }
   
});