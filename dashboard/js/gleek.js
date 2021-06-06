
(function($) {
    "use strict"

    new quixSettings({
        version: "light", //2 options "light" and "dark"
        layout: "vertical", //2 options, "vertical" and "horizontal"
        navheaderBg: "color_1", //have 10 options, "color_1" to "color_10"
        headerBg: "color_1", //have 10 options, "color_1" to "color_10"
        sidebarStyle: "vertical", //defines how sidebar should look like, options are: "full", "compact", "mini" and "overlay". If layout is "horizontal", sidebarStyle won't take "overlay" argument anymore, this will turn into "full" automatically!
        sidebarBg: "color_1", //have 10 options, "color_1" to "color_10"
        sidebarPosition: "static", //have two options, "static" and "fixed"
        headerPosition: "static", //have two options, "static" and "fixed"
        containerLayout: "wide",  //"boxed" and  "wide". If layout "vertical" and containerLayout "boxed", sidebarStyle will automatically turn into "overlay".
        direction: "ltr" //"ltr" = Left to Right; "rtl" = Right to Left
    });


})(jQuery);

// // data-sibebarbg="color_2"