$(document).ready(() => {
    $('#cat').owlCarousel({
        items: 1,
        margin: 24,
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 1500,
        dots: false,
        stagePadding: 0,
        responsiveClass: true,
        autoplaySpeed: 700,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 3
            },
            360: {
                items: 4
            },
            576: {
                items: 5
            },
            768: {
                items: 6
            },
            992: {
                items: 6
            },
            1200: {
                items: 7
            },
            1400: {
                items: 8
            }
        }
    });

    $('#deals').owlCarousel({
        items: 1,
        margin: 24,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 1500,
        dots: false,
        stagePadding: 0,
        responsiveClass: true,
        autoplaySpeed: 900,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });
    $('#Customer-card').owlCarousel({
        items: 1,
        margin: 24,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: false,
        stagePadding: 0,
        responsiveClass: true,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1400: {
                items: 3
            }
        }
    });
});
