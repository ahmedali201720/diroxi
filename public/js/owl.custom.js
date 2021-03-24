$(document).ready(function () {

    $(".intro-section-carousel").owlCarousel({
        margin: 20,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        rtl: true,
        items: 1
    });

    $(".usage-items-carousel").owlCarousel({
        margin: 20,
        center: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoHeight: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: false,
        rtl: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1.25,
            },
            576: {
                items: 1.5,
            },
            768: {
                items: 2
            },
            992: {
                items: 2.5
            },
            1200: {
                items: 3
            }
        }
    });

});