(function($) {
    "use strict"
    
    jQuery(".counter-one").appear(function() {
      jQuery(".counter-content").each(function() {
          var e = jQuery(this).attr("data-count");
          jQuery(this).find(".counter-number").delay(6e3).countTo({
              from: 0,
              to: e,
              speed: 5e3,
              refreshInterval: 100
          })
      })
    });


})(jQuery);



