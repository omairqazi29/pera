(function($) {
    "use strict"

    $('#demo_1').click(function() { 
        $.blockUI({ message: '<h1 class="p-3">Just a moment...</h1>' }); 
 
        setTimeout($.unblockUI, 2000); 
    });

    $('#demo_2').click(function() { 
        $.blockUI({ message: $('#loginForm') }); 
 
        setTimeout($.unblockUI, 2000); 
    });

    $('#demo_3').click(function() { 
        $.blockUI({ css: { 
            border: 'none', 
            padding: '15px', 
            backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: .5, 
            color: '#fff' 
        } }); 
 
        setTimeout($.unblockUI, 2000); 
    }); 

    $('#demo_4').click(function() { 
        $.blockUI({ overlayCSS: { backgroundColor: '#00f' } }); 
 
        setTimeout($.unblockUI, 2000); 
    });

    $('#demo_5').click(function() { 
        $.blockUI({ 
            message: $('#tallContent'), 
            css: { top: '20%' } 
        }); 
 
        setTimeout($.unblockUI, 20000); 
    });

    $('#demo_6').click(function() { 
        $.blockUI({ 
            message: $('#displayBox'), 
            css: { 
                top:  ($(window).height() - 400) /2 + 'px', 
                left: ($(window).width() - 400) /2 + 'px', 
                width: '400px' 
            } 
        }); 
 
        setTimeout($.unblockUI, 2000); 
    });
    
    $('#demo_7').click(function() { 
        $.blockUI({ 
            centerY: 0, 
            css: { top: '10px', left: '', right: '10px' } 
        }); 
 
        setTimeout($.unblockUI, 2000); 
    });

    $('#demo_8').click(function() { 
        $.blockUI({ message: null }); 
 
        setTimeout($.unblockUI, 2000); 
    }); 

    $('#demo_9').click(function() { 
        $.blockUI(); 
        $('.blockOverlay').attr('title','Click to unblock').click($.unblockUI); 
    });

    $('#demo_10').click(function() { 
        $.blockUI({ 
            message: '<h1>Auto-Unblock!</h1>', 
            timeout: 2000 
        }); 
    }); 

    $('#demo_11').click(function() { 
        $.blockUI({ 
            message: $('.growlUI'), 
            fadeIn: 700, 
            fadeOut: 700, 
            timeout: 2000, 
            showOverlay: false, 
            centerY: false, 
            css: { 
                width: '350px', 
                top: '10px', 
                left: '', 
                right: '10px', 
                border: 'none', 
                padding: '5px', 
                backgroundColor: '#000', 
                '-webkit-border-radius': '10px', 
                '-moz-border-radius': '10px', 
                opacity: .6, 
                color: '#fff' 
            } 
        }); 
    }); 

    $('#demo_12').click(function() { 
        $.growlUI('Growl Notification', 'Have a nice day!'); 
    });


    $('#block-element1').click(function() { 
        $('.block-element-1').block({ message: null }); 
    });

    $('#unblock-element1').click(function() { 
        $('.block-element-1').unblock(); 
    });


    $('#block-element2').click(function() { 
        $('.block-element-2').block({
            message: '<h1>Processing</h1>', 
            css: { border: '3px solid #ddd' }  
        }); 
    });

    $('#unblock-element2').click(function() { 
        $('.block-element-2').unblock(); 
    });



})(jQuery);