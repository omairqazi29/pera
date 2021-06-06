(function($){
    'use strict'

    $('.chart-1').easyPieChart({
        easing: 'easeOutBounce',
        barColor : '#13dafe',
        lineWidth: 3,
        animate: 1000,
        lineCap: 'square',
        trackColor: '#e5e5e5',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

})(jQuery)