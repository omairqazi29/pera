(function($) {
    "use strict"

    $('.basic-multiselect').multiselect();

    $('.basic-multiselect-optgroup').multiselect({
        enableClickableOptGroups: true
    });

    $('.basic-multiselect-selectall').multiselect({
        enableClickableOptGroups: true, 
        includeSelectAllOption: true
    });
    
    












})(jQuery);