const body = $('body');
const html = $('html');

function quixSettings({version, layout, navheaderBg, headerBg, sidebarStyle, sidebarBg, sidebarPosition, headerPosition, containerLayout, direction}) {
    this.version = version || "light";
    this.layout = layout || "vertical";
    this.navheaderBg = navheaderBg || "color_1";
    this.headerBg = headerBg || "color_1";
    this.sidebarStyle = sidebarStyle || "full";
    this.sidebarBg = sidebarBg || "color_1";
    this.sidebarPosition = sidebarPosition || "static";
    this.headerPosition = headerPosition || "static";
    this.containerLayout = containerLayout || "wide";
    this.direction = direction || "ltr";

    this.manageVersion();
    this.manageLayout();
    this.manageNavHeaderBg();
    this.manageHeaderBg();
    this.manageSidebarStyle();
    this.manageSidebarBg();
    this.manageSidebarPosition();
    this.manageHeaderPosition();
    this.manageContainerLayout();
    this.manageRtlLayout();
    this.manageResponsiveSidebar();

}

quixSettings.prototype.manageVersion = function() {
    switch(this.version) {
        case "light": 
            body.attr("data-theme-version", "light");
            break;
        case "dark": 
            body.attr("data-theme-version", "dark");
            break;
        default: 
            body.attr("data-theme-version", "light");
    }
}

quixSettings.prototype.manageLayout = function() {
    switch(this.layout) {
        case "horizontal": 
            this.sidebarStyle === "overlay" ? body.attr("data-sidebar-style", "full") : body.attr("data-sidebar-style", `${this.sidebarStyle}`);
            body.attr("data-layout", "horizontal");
            break;
        case "vertical": 
            body.attr("data-layout", "vertical");
            break;
        default:
            body.attr("data-layout", "vertical");
    }
}

quixSettings.prototype.manageNavHeaderBg = function() {
    switch(this.navheaderBg) {
        case "color_1": 
            body.attr("data-nav-headerbg", "color_1");
            break;
        case "color_2": 
            body.attr("data-nav-headerbg", "color_2");
            break;
        case "color_3": 
            body.attr("data-nav-headerbg", "color_3");
            break;
        case "color_4": 
            body.attr("data-nav-headerbg", "color_4");
            break;
        case "color_5": 
            body.attr("data-nav-headerbg", "color_5");
            break;
        case "color_6": 
            body.attr("data-nav-headerbg", "color_6");
            break;
        case "color_7": 
            body.attr("data-nav-headerbg", "color_7");
            break;
        case "color_8": 
            body.attr("data-nav-headerbg", "color_8");
            break;
        case "color_9": 
            body.attr("data-nav-headerbg", "color_9");
            break;
        case "color_10": 
            body.attr("data-nav-headerbg", "color_10");
            break;
        default:
            body.attr("data-nav-headerbg", "color_1");
    }
}

quixSettings.prototype.manageHeaderBg = function() {
    switch(this.headerBg) {
        case "color_1": 
            body.attr("data-headerbg", "color_1");
            break;
        case "color_2": 
            body.attr("data-headerbg", "color_2");
            break;
        case "color_3": 
            body.attr("data-headerbg", "color_3");
            break;
        case "color_4": 
            body.attr("data-headerbg", "color_4");
            break;
        case "color_5": 
            body.attr("data-headerbg", "color_5");
            break;
        case "color_6": 
            body.attr("data-headerbg", "color_6");
            break;
        case "color_7": 
            body.attr("data-headerbg", "color_7");
            break;
        case "color_8": 
            body.attr("data-headerbg", "color_8");
            break;
        case "color_9": 
            body.attr("data-headerbg", "color_9");
            break;
        case "color_10": 
            body.attr("data-headerbg", "color_10");
            break;
        default:
            body.attr("data-headerbg", "color_1");
    }
}

quixSettings.prototype.manageSidebarStyle = function() {
    switch(this.sidebarStyle) {
        case "full":
            body.attr("data-sidebar-style", "full");
            break;
        case "mini":
            body.attr("data-sidebar-style", "mini");
            break;
        case "compact":
            body.attr("data-sidebar-style", "compact");
            break;
        case "overlay":
            this.layout === "horizontal" ? body.attr("data-sidebar-style", "full") : body.attr("data-sidebar-style", "overlay");
            break;
        default:
            body.attr("data-sidebar-style", "full");
    }
}

quixSettings.prototype.manageSidebarBg = function() {
    switch(this.sidebarBg) {
        case "color_1": 
            body.attr("data-sibebarbg", "color_1");
            break;
        case "color_2": 
            body.attr("data-sibebarbg", "color_2");
            break;
        case "color_3": 
            body.attr("data-sibebarbg", "color_3");
            break;
        case "color_4": 
            body.attr("data-sibebarbg", "color_4");
            break;
        case "color_5": 
            body.attr("data-sibebarbg", "color_5");
            break;
        case "color_6": 
            body.attr("data-sibebarbg", "color_6");
            break;
        case "color_7": 
            body.attr("data-sibebarbg", "color_7");
            break;
        case "color_8": 
            body.attr("data-sibebarbg", "color_8");
            break;
        case "color_9": 
            body.attr("data-sibebarbg", "color_9");
            break;
        case "color_10": 
            body.attr("data-sibebarbg", "color_10");
            break;
        default:
            body.attr("data-sibebarbg", "color_1");
    }
}

quixSettings.prototype.manageSidebarPosition = function() {
    switch(this.sidebarPosition) {
        case "fixed": 
            this.sidebarStyle === "overlay" && this.layout === "vertical" ? body.attr("data-sidebar-position", "static") : body.attr("data-sidebar-position", "fixed");
            break;
        case "static": 
            body.attr("data-sidebar-position", "static");
            break;
        default: 
            body.attr("data-sidebar-position", "static");       
    }
}

quixSettings.prototype.manageHeaderPosition = function() {
    switch(this.headerPosition) {
        case "fixed": 
            body.attr("data-header-position", "fixed");
            break;
        case "static": 
            body.attr("data-header-position", "static");
            break;
        default: 
            body.attr("data-header-position", "static");       
    }
}

quixSettings.prototype.manageContainerLayout = function() {
    switch(this.containerLayout) {
        case "boxed":
            if(this.layout === "vertical" && this.sidebarStyle === "full") {
                body.attr("data-sidebar-style", "overlay");
            }
            body.attr("data-container", "boxed");
            break;
        case "wide":
            body.attr("data-container", "wide");
            break;
        default:
            body.attr("data-container", "wide");
    }
}

quixSettings.prototype.manageRtlLayout = function() {
    switch(this.direction) {
        case "rtl":
            html.attr("dir", "rtl");
            html.addClass('rtl');
            body.attr("direction", "rtl");
            break;
        case "ltr": 
            html.attr("dir", "ltr");
            html.removeClass('rtl');
            body.attr("direction", "ltr");
            break;
        default: 
            html.attr("dir", "ltr");
            body.attr("direction", "ltr");
    }
}

quixSettings.prototype.manageResponsiveSidebar = function() {
    const innerWidth = $(window).innerWidth();
    if(innerWidth < 1200) {
        body.attr("data-layout", "vertical");
        body.attr("data-container", "wide");
    }

    if(innerWidth > 767 && innerWidth < 1200) {
        body.attr("data-sidebar-style", "mini");
    }

    if(innerWidth < 768) {
        body.attr("data-sidebar-style", "overlay");
    }
}