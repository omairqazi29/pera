(function($) {
    "use strict";

    $('#first-circle').circleProgress({
        value: 0.75,
        size: 150,
        animation: false,
        fill: {
            gradient: ["#F44336", "#0000FF"]
        }
    });


    $('#second-circle').circleProgress({
        value: 0.6,
        size: 150,
        fill: {
            gradient: ["#00A2FF", "#0000FF"]
        },
        animation: { duration: 1200, easing: "circleProgressEasing" }
    });

    $('#third-circle').circleProgress({
        value: 0.6,
        size: 150,
        fill: {
            gradient: [
                ['#0000FF', .5],
                ['#00A2FF', .5]
            ],
            gradientAngle: Math.PI / 5
        }
    });



    $('#fourth-circle').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.5,
        size: 150,
        fill: { color: '#0000FF' },
        thickness: 5
    });

    $('#fifth-circle').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.5,
        size: 150,
        lineCap: 'round',
        fill: { color: '#0000FF' },
        reverse: false
    });

    $('#sixth-circle').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.5,
        size: 150,
        lineCap: 'round',
        fill: { color: '#0000FF' },
        reverse: true
    });
    $('#seventh-circle').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.5,
        size: 150,
        lineCap: 'round',
        fill: { color: '#0000FF' },
        reverse: true,
        emptyFill: "rgba(0, 0, 255, .2)"
    });

})(jQuery);