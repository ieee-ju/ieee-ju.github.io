!(function ($) {
    "use strict"; 

    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $('#header').outerHeight() - 1;
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top - scrolltoOffset;

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, .mobile-nav');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function () {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 300) {
                $(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass('active');
            }
        });
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        

        $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
            $(' .night').css("display", "block");

        });

        $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                    
                }
            }
        });


    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();  
    }

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            //$('#header').removeClass('header-scrolled1');
            $('#topbar').addClass('topbar-scrolled');
            $('#topbar2').addClass('topbar2-scrolled');
            $('#header').addClass('header-scrolled');
        } else {
            //$('#header').removeClass('header-scrolled1');
            $('#topbar').removeClass('topbar-scrolled');
            $('#topbar2').removeClass('topbar2-scrolled');
            $('#header').removeClass('header-scrolled');
        }
    });

    // Carousel Jumbrotorn image toggle
    $(document).ready(function () {
        
        var width = $(window).width();
            var height = $(window).height();

            var ratio = width / height;
            //console.log(ratio);
            if (ratio <= 0.57) {
                $(".slide img").attr("src", "assets/img/mob_jumbo.png");
            } else {
                $(".slide img").attr("src", "assets/img/sb1.png");
            }
        //dynamic jumbotron change
        $(window).resize(function () {
            var width = $(window).width();
            var height = $(window).height();

            var ratio = width / height;
            //console.log(ratio);
            if (ratio <= 0.57) {
                $(".slide img").attr("src", "assets/img/mob_jumbo.png");
            } else {
                $(".slide img").attr("src", "assets/img/sb1.png");
            }
            // dark mode logo disappear 
            $(' .night').css("display", "none");
            
        });
    });


    // Intro carousel
    var heroCarousel = $("#heroCarousel");
    var heroCarouselIndicators = $("#hero-carousel-indicators");
    heroCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
        (index === 0) ?
            heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>") :
            heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
    });



    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        $('#topbar').addClass('topbar-scrolled');
    }

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Preloader
    $(window).on('load', function () {
        if ($('#preloader1').length) {
            $('#preloader1').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    });

    // Gallery carousel (uses the Owl Carousel library)
    $(".gallery-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

    // Initiate venobox lightbox
    $(document).ready(function () {
        $('.venobox').venobox();
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
    $(window).on('load', function () {
        aos_init();
    });



    //Night-mode-toggle
    $(" .icofont-moon").click(function () {
        localStorage['myKey'] = '1';
        $("body").addClass("dark-mode");
        $(" #header").css("background", "#131920");
        
        //$(" #preloader").css("background", "#111");
        //$(" #preloader:beforer").css("border-top-color", "#111");
        $(" .mobile-nav").css("background", "#131920");
        $(" .featured-services .icon-box").css("background", "#212529");
        $(" .contact .info-box").css("box-shadow", "0 0 20px rgba(2,2,2,0.5)");
        //$(" .contact .info-box").css( "background","rgb(27 33 39)" );
        $(" .contact .php-email-form").css("box-shadow", "0 0 20px rgba(2,2,2,0.5)");
        $(" .contact .php-email-form input").css({ "background": "#212529", "border-color": "#212529" });
        $(" .contact .php-email-form textarea").css({ "background": "#212529", "border-color": "#212529" });
        $(" .services").css("background-color", "rgb(43 49 53 / 70%)");
        $(" .collaborators").css("background-color", "#1b252d");
        $(" .slide img").css("filter", "contrast(60%) brightness(100%)");
        //event page
        $(" .event .card-body").css({"background": "#212529","color":"rgb(105, 105, 108)"});
        $(" .event .card-footer").css("background", "#131920");
        $(" .event  .card").css("background", "#212529");
        
    });

    $(" .icofont-sun-alt").click(function () {
        localStorage['myKey'] = '0';
        $("body").removeClass("dark-mode");
        $(" #header").css("background", "#fff");
    
        //$(" #preloader").css("background", "#fff");
        //$(" #preloader:beforer").css("border-top-color", " #ecf8f9");
        $(" .mobile-nav").css("background", "#fff");
        $(" .featured-services .icon-box").css("background", "#fff");
        $(" .contact .info-box").css("box-shadow", "0 0 20px rgba(214, 215, 216, 0.5)");
        $(" .contact .php-email-form").css("box-shadow", "0 0 20px rgba(214, 215, 216, 0.5)");
        $(" .contact .php-email-form input").css({ "background": "none", "border-color": "#AAA" });
        $(" .contact .php-email-form textarea").css({ "background": "none", "border-color": "#AAA" });
        $(" .services").css("background-color", "rgba(255, 255, 255, 0.7)");
        $(" .collaborators").css("background-color", "#f0f0f0");
        $(" .slide img").css("filter", "contrast(0%) brightness(1000%)");
        $(" .event .card-body").css("background", "#fff");
        $(" .event .card-footer").css("background", "rgba(0,0,0,.03)");
        $(" .event  .card").css("background", "#fff");
        
    });

    var dark_toggle = localStorage['myKey'];
    //console.log(dark_toggle);

    $(window).on('load', function () {
        if (dark_toggle == 1) {
            $("body").addClass("dark-mode");
            $(" #header").css("background", "#131920");
            //$(" #preloader").css("background", "#111");
            //$(" #preloader:beforer").css("border-top-color", "#111");
            $(" .mobile-nav").css("background", "#131920");
            $(" .featured-services .icon-box").css("background", "#212529");
            $(" .contact .info-box").css("box-shadow", "0 0 20px rgba(2,2,2,0.5)");
            //$(" .contact .info-box").css( "background","rgb(27 33 39)" );
            $(" .contact .php-email-form").css("box-shadow", "0 0 20px rgba(2,2,2,0.5)");
            $(" .contact .php-email-form input").css({ "background": "#212529", "border-color": "#212529" });
            $(" .contact .php-email-form textarea").css({ "background": "#212529", "border-color": "#212529" });
            $(" .services").css("background-color", "rgb(43 49 53 / 70%)");
            $(" .collaborators").css("background-color", "#1b252d");
            $(" .slide img").css("filter", "contrast(60%) brightness(100%)");
            $(" .event .card-body").css({"background": "#212529","color":"rgb(105, 105, 108)"});
            $(" .event .card-footer").css("background", "#131920");
            $(" .event  .card").css("background", "#212529");
        }
    });


})(jQuery);