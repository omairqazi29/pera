(function($) {
    "use strict"

    const versionSelect = $('#theme_version');
    const layoutSelect = $('#theme_layout');
    const sidebarStyleSelect = $('#sidebar_style');
    const sidebarPositionSelect = $('#sidebar_position');
    const headerPositionSelect = $('#header_position');
    const containerLayoutSelect = $('#container_layout');
    const themeDirectionSelect = $('#theme_direction');

    versionSelect.on('change', function() {
        $('body').attr('data-theme-version', this.value);
    });

    sidebarPositionSelect.on('change', function() {
        $('body').attr('data-sidebar-position', this.value);
    });

    headerPositionSelect.on('change', function() {
        $('body').attr('data-header-position', this.value);
    });

    themeDirectionSelect.on('change', function() {
        $('html').attr('dir', this.value);
        $('html').attr('class', '');
        $('html').addClass(this.value);
        $('body').attr('direction', this.value);
    });

    layoutSelect.on('change', function() {
        if($('body').attr('data-sidebar-style') === 'overlay') {
            $('body').attr('data-sidebar-style', 'full');
            $('body').attr('data-layout', this.value);
            return;
        }

        $('body').attr('data-layout', this.value);
    });

    containerLayoutSelect.on('change', function() {
        if(this.value === "boxed") {
            // if($('body').attr('data-sidebar-style') === "overlay" && $('body').attr('data-layout') === "horizontal") {
            //     $('body').attr('data-sidebar-style', 'full');
            //     $('body').attr('data-container', this.value);
            //     return;
            // }

            if($('body').attr('data-layout') === "vertical" && $('body').attr('data-sidebar-style') === "full") {
                $('body').attr('data-sidebar-style', 'overlay');
                $('body').attr('data-container', this.value);
                return;
            }
        }

        $('body').attr('data-container', this.value);
    });

    sidebarStyleSelect.on('change', function() {
        if($('body').attr('data-layout') === "horizontal") {
            if(this.value === "overlay") {
                alert("Sorry! Overlay is not possible in Horizontal layout.");
                return;
            }
        }

        if($('body').attr('data-layout') === "vertical") {
            if($('body').attr('data-container') === "boxed" && this.value === "full") {
                alert("Sorry! Full menu is not available in Vertical Boxed layout.");
                return;
            }
        }

        $('body').attr('data-sidebar-style', this.value);
    });

    $('input[name="navigation_header"]').on('click', function() {
        $('body').attr('data-nav-headerbg', this.value);
    });

    $('input[name="header_bg"]').on('click', function() {
        $('body').attr('data-headerbg', this.value);
    });

    $('input[name="sidebar_bg"]').on('click', function() {
        $('body').attr('data-sibebarbg', this.value);
    });







})(jQuery);