'use strict';
$(document).ready(function () {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        $("*").css({
            "cursor": "pointer"
        });
    }
    
    //    $(".nav-item").on('click', function () {
    //        $(".nav-item").removeClass('activeMenu');
    //        $(this).addClass('activeMenu');
    //    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('#main-nav').addClass('changeColor');
        }
        if ($(this).scrollTop() < 50) {
            $('#main-nav').removeClass('changeColor');
        }


        // var outerHight = $("#main-nav").outerHeight();
        // var topMenuHeight = outerHight + 15;

        // $(".page-section").each(function (i) {
        //     if ($(this).hasClass("contact")) {
        //         topMenuHeight = outerHight + 150;
        //     }
        //     var scrollDistance = $(window).scrollTop() + topMenuHeight;
        //     if ($(this).position().top <= scrollDistance && $(this).position().top + $(this).height() > scrollDistance) {
        //         $('#main-nav li a').removeClass('activeMenu');
        //         $('#main-nav li a').eq(i).addClass('activeMenu');

        //     }
        //     //            else {
        //     //                $('main-nav li a').removeClass('activeMenu');
        //     //            }
        // });

        $.each(['.fadeDown', '.fadeUp'], function (i) {
            var bottomOfObject = $(this).position().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > bottomOfObject) {
                $(this).addClass('activate');
            }
        });
    });
});

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {

        $('a').each(function() {
            $(this).removeClass('activeMenu');
        });
        $(this).addClass('activeMenu');
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 30
            }, 800);
        }
    });
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#main-nav a').each(function(){
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos){
                $('#main-nav ul li a').removeClass('activeMenu');
                currLink.addClass('activeMenu');
            }
            else {
                currLink.removeClass('activeMenu');
            }
        })
    }

    $('a[href^="#"]').click(function () {
        $('#main-nav').slideUp("fast", function () {
            $(this).slideDown("slow");
        });
    });
    $('.btn-header').click(function (event) {
        var target = $('#contact');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800);
    });


    $(".dropdown-li").on('click', function () {
        $(".dropdown-content").css("display","none");
        console.log('dziala');
    });

    $(function () {
        var navMobile = $('.mobileHide');
        $(document.body).on('click', function () {
            navMobile.collapse('hide');
        });
    });

  

    // $(".language-select").click(function () {
    //     i18next.changeLanguage($(this).attr('id'), function () {
    //         $('.menu-lng').localize();
    //         $('.header-lng').localize();
    //         $('.aboutme').localize();
    //         $('.skills').localize();
    //         $('.contact').localize();
    //     });
    // });

    $(".english").html("english");
    $(".deutsch").html("deutsch");
    $(".polski").html("polski");
});