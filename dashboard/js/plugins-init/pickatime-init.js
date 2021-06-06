(function($) {
    "use strict"

    //default timepicker
    $('.timepicker-default').pickatime();

    //clear buttons
    $('.timepicker-clear-buttons').pickatime({
        clear: ""
    });

    //formation
    $('.timepicker-formation').pickatime({
        format: 'T!ime selected: h:i a',
        formatLabel: '<b>h</b>:i <!i>a</!i>',
        formatSubmit: 'HH:i',
        hiddenPrefix: 'prefix__',
        hiddenSuffix: '__suffix'
    });

    //clear buttons
    $('.timepicker-intervals').pickatime({
        interval: 150
    });

    //time limits
    $('.timepicker-limits').pickatime({
        min: new Date(2015,3,20,7),
        max: new Date(2015,7,14,18,30)
    });



})(jQuery);