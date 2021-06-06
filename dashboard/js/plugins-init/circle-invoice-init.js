(function($) {
    "use strict"

    $('#invoice-circle-1').circleProgress({
        value: 1,
        size: 150,
        emptyFill: 'rgba(0, 175, 240, .1)',
        lineCap: 'round',
        fill: {
            gradient: [
                ['#00AFF0']
            ],
            gradientAngle: Math.PI / 5
        }
    });


    $('#invoice-circle-2').circleProgress({
        value: .4,
        size: 150,
        emptyFill: 'rgba(255, 87, 34, .1)',
        lineCap: 'round',
        fill: {
            gradient: [
                ['#FF5722 ']
            ],
            gradientAngle: Math.PI / 5
        }
    });


    $('#invoice-circle-3').circleProgress({
        value: .48,
        size: 150,
        emptyFill: 'rgba(255, 193, 7, .1)',
        lineCap: 'round',
        fill: {
            gradient: [
                ['#FFC107']
            ],
            gradientAngle: Math.PI / 5
        }
    });


    $('#invoice-circle-4').circleProgress({
        value: .3,
        size: 150,
        emptyFill: 'rgba(113, 216, 117, .1)',
        lineCap: 'round',
        fill: {
            gradient: [
                ['#71D875']
            ],
            gradientAngle: Math.PI / 5
        }
    });


})(jQuery);