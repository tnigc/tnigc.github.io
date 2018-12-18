/*
 TEMPLATE NAME: Panther Coming Soon HTML Template
 TEMPLATE URI: - http://froid.works/themeforest/panther-html/
 DESCRIPTION: Panther Coming Soon HTML Template
 VERSION: 1.0
 AUTHOR: Ajay Kumar Choudhary
 AUTHOR URL: http://codecanyon.net/user/ajay138/
 DESIGN BY: Rakesh Kumar
 */
(function() {
    'use strict';
    /* Buttons
     ========================================================================== */

    var Buttons = {
        init: function () {
            var buttons = $('.button');
            buttons.each(function () {
                $(this).prepend('<span class="helper"/>');
                $(this).attr('data-title', $(this).text());
            });
            buttons.on('mouseenter mousedown mouseup mouseleave', function (e) {
                var event = e.type,
                    btn = $(this),
                    helper = btn.children('.helper'),
                    height;
                if (event == 'mouseenter' || event == 'mouseup') {
                    height = btn.outerWidth() * .71;
                } else if (event === 'mousedown') {
                    height = btn.outerWidth() * .85;
                } else if (event === 'mouseleave') {
                    height = 0;
                }
                helper.height(height);
            });

        }
    };

    /* Countdown-plugin
     ========================================================================== */
    $('#countdown').countdown('2020/08/20', function (event) {
        $(this).html(event.strftime(
            '<div>%D<div class="date-cap">day%!D</div></div> '
            + '<div>%H<div class="date-cap">hr%!H</div></div> '
            + '<div>%M<div class="date-cap">min%!N</div></div> '
            + '<div>%S<div class="date-cap">sec%!S</div></div> '
        ));
    });

    $(function() {
        /* Initialize button
         ========================================================================== */
        Buttons.init();
        
        /* Pre Loader Animate loader off screen
         ========================================================================== */
        $(".panther-pre-con").fadeOut("slow");


        /* SlimScroll plugin
         ========================================================================== */
        $(".inside-scroll").mCustomScrollbar({
            theme:"dark",
            axis:"y",
            contentTouchScroll: false,
            advanced:{ updateOnImageLoad: false }
        });


        /* Disable MouseWheel Scroll above 1050px
         ========================================================================== */

        //initializeMouseScroll();
        //$(window).on("resize", function () {
        //    initializeMouseScroll();
        //});
        //
        //function initializeMouseScroll() {
        //    if ($(window).width() > 1049) {
        //        $('body').on('scroll mousewheel touchmove', stopScrolling);
        //    }else{
        //        $('body').off('scroll mousewheel touchmove', stopScrolling);
        //    }
        //}
        //
        //function stopScrolling (e) {
        //    e.preventDefault();
        //    e.stopPropagation();
        //    return false;
        //}
        /* Team owl carousel
         ========================================================================== */
        $('#team').owlCarousel({
            lazyLoad: true,
            loop: true,
            margin: 30,
            autoplay: false,
            smartSpeed: 1100,
            autoplayTimeout: 800,
            autoplayHoverPause: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                544: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1300: {
                    items: 4
                }
            }
        });

        /* Services owl carousel
         ========================================================================== */
        $('#services').owlCarousel({
            lazyLoad: false,
            loop: true,
            margin: 25,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            pagination: false,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                544: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1050: {
                    items: 4
                }
            }
        });
    });

    /* Google maps
     ========================================================================== */
    // var centerLoc = new google.maps.LatLng(40.702259, -73.937709);
    // var myMapOptions = {
    //     zoom: 14,
    //     center: centerLoc,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP,
    //     scrollwheel: false
    // };
    // var theMap = new google.maps.Map(document.getElementById("map"), myMapOptions);
    // var iconBase = {
    //     url: "images/marker-01.svg", // url
    //     scaledSize: new google.maps.Size(33, 50)// scaled size
    // };
    //
    // var marker = new google.maps.Marker({
    //     position: {lat: 40.700259, lng: -73.937709},
    //     map: theMap,
    //     icon: iconBase,
    //     title: "Panther"
    // });
    //
    // var boxText = document.createElement("div");
    // boxText.style.cssText = "background:#f5ca23; padding: 5px;";
    // boxText.innerHTML = "<b>CURRENT ADDRESS</b><hr style='margin-top:5px; margin-bottom:5px'>343, Park Street, Brooklyn, New York, USA - 01445";
    //
    // var myOptions = {
    //     content: boxText
    //     , disableAutoPan: false
    //     , maxWidth: 0
    //     , pixelOffset: new google.maps.Size(-75, -140)
    //     , zIndex: null
    //     , boxStyle: {
    //         width: "150px"
    //
    //     }
    //     , closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"
    //     , infoBoxClearance: new google.maps.Size(1, 1)
    //     , isHidden: false
    //     , pane: "floatPane"
    //     , enableEventPropagation: false
    // };
    //
    // google.maps.event.addListener(marker, "click", function (e) {
    //     ib.open(theMap, this);
    // });
    //
    // var ib = new InfoBox(myOptions);
    // ib.open(theMap, marker);



    /* Contact mail function
     ========================================================================== */
    $('#contact-submit').on("click", function () {
        var un = $('#fullName').val();
        var em = $('#email').val();
        var msg = $('#message').val();
        $.ajax({
            type: "POST",
            url: "ajaxmail.php",
            data: {
                'username': un,
                'email': em,
                'msg': msg,
            },
            success: function (message) {
                var response = JSON.parse(message)
                if(response.status === 'success')
                {
                    $('.contact-form')[0].reset();
                }
                $('#error_contact').html(response.message);
            }
        });
    });

    /* Subscribe mail function
     ========================================================================== */
    $('#subscribe-submit').on("click", function () {
        var em = $('#subscribe-email').val();
        $.ajax({
            type: "POST",
            url: "subscribemail.php",
            data: {
                'email': em,
            },
            success: function (message) {
                $('#subscribe-email').removeClass('subscriber-success');
                $('#subscribe-email').removeClass('subscriber-error');
                var response = JSON.parse(message)
                if(response.status === 'success')
                {
                    $('#subscribe-email').addClass('subscriber-success');

                }else{
                    $('#subscribe-email').addClass('subscriber-error');
                }
                    $('#subscribe-email').attr("placeholder", response.message);
                    $('#subscribe-email').val("");
            }
        });
    });


    /* Background Image on each Section
     ========================================================================== */
    $(".section-homepage.static").backstretch("images/background/slider1.jpg");
    $(".section-about").backstretch("images/background/slider2.jpg");
    $(".section-contact").backstretch("images/background/slider3.jpg");


    /* Slider Image
     ========================================================================== */
    $(".slider").backstretch([
        "images/slider/1.jpg",
        "images/slider/2.jpg",
        "images/slider/3.jpg",
        "images/slider/4.jpg",
        "images/slider/5.jpg"
    ], {
        transitionDuration: 1000,
        transition: "fade"
    });

})();