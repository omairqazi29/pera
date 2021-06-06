(function($) {
    "use strict"

    $('.repeater-default').repeater();


    $('.repeater-custom').repeater({
        show: function () {
            $(this).slideDown();
        },
        hide: function (remove) {
            if(confirm('Are you sure you want to remove this item?')) {
                $(this).slideUp(remove);
            }
        }
    });


    $('.repeater-default-value').repeater({
        defaultValues: {
            features: ['abs'],
            make: 'ford',
            model: 'Mustang'
        }
    });















})(jQuery);