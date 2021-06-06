(function($) {
    "use strict"

    // //basic slider
    let basicSlide = document.getElementById('basic-slider');
    noUiSlider.create(basicSlide, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
    // //basic slider ^
    

    // //stepping and snapping the values
    var stepSlider = document.getElementById('slider-step');
    noUiSlider.create(stepSlider, {
        start: [4000],
        step: 1000,
        range: {
            'min': [2000],
            'max': [10000]
        }
    });

    var stepSliderValueElement = document.getElementById('slider-step-value');
    stepSlider.noUiSlider.on('update', function (values, handle) {
        stepSliderValueElement.innerHTML = values[handle];
    });
    // //stepping and snapping the values ^


    // //slider margin
    var marginSlider = document.getElementById('slider-margin');
    noUiSlider.create(marginSlider, {
        start: [20, 80],
        margin: 30,
        range: {
            'min': 0,
            'max': 100
        }
    });

    var marginMin = document.getElementById('slider-margin-value-min'),
    marginMax = document.getElementById('slider-margin-value-max');
    marginSlider.noUiSlider.on('update', function (values, handle) {
        if (handle) {
            marginMax.innerHTML = values[handle];
        } else {
            marginMin.innerHTML = values[handle];
        }
    });
    // //slider margin ^


    // //slider limit
    var limitSlider = document.getElementById('slider-limit');
    noUiSlider.create(limitSlider, {
        start: [10, 120],
        limit: 40,
        behaviour: 'drag',
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    var limitFieldMin = document.getElementById('slider-limit-value-min');
    var limitFieldMax = document.getElementById('slider-limit-value-max');

    limitSlider.noUiSlider.on('update', function (values, handle) {
        (handle ? limitFieldMax : limitFieldMin).innerHTML = values[handle];
    });
    // //slider limit ^


    // //slider padding
    var paddingSlider = document.getElementById('slider-padding');
    noUiSlider.create(paddingSlider, {
        start: [20, 80],
        padding: [10, 15], // Or just 10
        range: {
            'min': 0,
            'max': 100
        }
    });

    var paddingMin = document.getElementById('slider-padding-value-min');
    var paddingMax = document.getElementById('slider-padding-value-max');
    paddingSlider.noUiSlider.on('update', function (values, handle) {
        if (handle) {
            paddingMax.innerHTML = values[handle];
        } else {
            paddingMin.innerHTML = values[handle];
        }
    });
    // //slider padding ^

    // //slider tooltips
    var tooltipSlider = document.getElementById('slider-tooltips');
    noUiSlider.create(tooltipSlider, {
        start: [20, 80, 120],
        tooltips: [false, wNumb({decimals: 1}), true],
        range: {
            'min': 0,
            'max': 200
        }
    });
    // //slider tooltips ^


    // //slider behaviour drag
    var behaviourSlider = document.getElementById('behaviour');
    noUiSlider.create(behaviourSlider, {
        start: [20, 40],
        step: 10,
        behaviour: 'drag',
        connect: true,
        range: {
            'min': 20,
            'max': 80
        }
    });
    // //slider behaviour drag ^


    // //slider behaviour tap
    var tapSlider = document.getElementById('tap');
    noUiSlider.create(tapSlider, {
        start: 40,
        behaviour: 'tap',
        connect: [false, true],
        range: {
            'min': 20,
            'max': 80
        }
    });
    // //slider behaviour tap ^


    // //slider behaviour fixed dragging
    var dragFixedSlider = document.getElementById('drag-fixed');

    noUiSlider.create(dragFixedSlider, {
        start: [40, 60],
        behaviour: 'drag-fixed',
        connect: true,
        range: {
            'min': 20,
            'max': 80
        }
    });
    // //slider behaviour fixed dragging ^


    // //slider behaviour snap
    var snapSlider2 = document.getElementById('snap');
    noUiSlider.create(snapSlider2, {
        start: 40,
        behaviour: 'snap',
        connect: [true, false],
        range: {
            'min': 20,
            'max': 80
        }
    });
    // //slider behaviour snap ^


    // //slider behaviour hover
    var hoverSlider = document.getElementById('hover');
    var field = document.getElementById('hover-val');

    noUiSlider.create(hoverSlider, {
        start: 20,
        behaviour: 'hover-snap',
        direction: 'rtl',
        range: {
            'min': 0,
            'max': 10
        }
    });

    hoverSlider.noUiSlider.on('hover', function (value) {
        field.innerHTML = value;
    });
    // //slider behaviour hover ^


    // //slider behaviour unconstrained
    var unconstrainedSlider = document.getElementById('unconstrained');
    var unconstrainedValues = document.getElementById('unconstrained-values');

    noUiSlider.create(unconstrainedSlider, {
        start: [20, 50, 80],
        behaviour: 'unconstrained-tap',
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    unconstrainedSlider.noUiSlider.on('update', function (values) {
        unconstrainedValues.innerHTML = values.join(' :: ');
    });
    // //slider behaviour unconstrained ^


})(jQuery);