$(window).resize(function () {
    detectMobileMenu();
});

$(document).ready(function(){
    detectMobileMenu();
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });

    var url = window.location;

    $('.navbar-left a[href="' + url + '"]').parent().addClass('active');

    $('.navbar-left a').filter(function () {
        return this.href == url;
    }).parent().addClass('active');

    if ($('body').innerWidth() < 768) {
        $('.opinion .owl-carousel').owlCarousel({
                center: true,
                items: 1,
                loop: true,
                margin: 30,
                nav: true,
                navText: [
                    "",
                    ""
                ]
            }
        );

        $('.pricing-plan .owl-carousel').owlCarousel({
                center: true,
                items: 1,
                loop: true,
                margin: 30,
                nav: true,
                navText: [
                    "<span><</span>",
                    "<span>></span>"
                ]
            }
        );
    }
});

function detectMobileMenu() {
    $('.hamburger-menu').click(function () {
        if ($('.hamburger-menu').hasClass('open')) {
            $('.navbar-left li:not(:first-child)').addClass('opened');
            $('.container-fluid').addClass('full');
        } else {
            $('.navbar-left li').removeClass('opened');
            $('.container-fluid').removeClass('full');
        }
    });
}