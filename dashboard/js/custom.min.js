jQuery(window).on("load", function() {
    $('#preloader').fadeOut(500);
    $('#main-wrapper').addClass('show');

    $('body').attr('data-sidebar-style') === "mini" ? $(".hamburger").addClass('is-active') : $(".hamburger").removeClass('is-active')
});

(function($) {
    "use strict";






    $("#menu").metisMenu();

    $('.nk-nav-scroll').slimscroll({
        position: "right",
        size: "5px",
        height: "100%",
        color: "transparent"
    });



    $(".nav-control").on('click', function() {

        $('#main-wrapper').toggleClass("menu-toggle");

        $(".hamburger").toggleClass("is-active");
    });


    $(function() {
        for (var nk = window.location, 
            o = $("ul#menu a").filter(function() {
                    return this.href == nk;
                })
                .addClass("active")
                .parent()
                .addClass("active");;) {
            if (!o.is("li")) break;
            o = o.parent()
                .addClass("in")
                .parent()
                .addClass("active");
        }
    });

    $(function() {
        var win_h = window.outerHeight;
        if (win_h > 0 ? win_h : screen.height) {
            $(".content-body").css("min-height", (win_h + 60) + "px");
        };
    });





    $('.selectpicker').selectpicker();



    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();


  

    const headerHight = $('.header').innerHeight();

    $(window).scroll(function() {
        if($('body').attr('data-layout') === "horizontal" && $('body').attr('data-header-position') === "static" && $('body').attr('data-sidebar-position') === "fixed")
            $(this.window).scrollTop() >= headerHight ? $('.metismenu').addClass('fixed') :  $('.metismenu').removeClass('fixed')
    });

    $('.sidebar-right-trigger').on('click', function() {
        $('.sidebar-right').toggleClass('show');
    });






})(jQuery);
