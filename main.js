$('#carousel-1').owlCarousel({
    loop:true,
    margin: 10,
    autoplay: true,
    autoplayTimeout:6000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
