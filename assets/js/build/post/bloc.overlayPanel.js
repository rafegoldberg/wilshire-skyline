var panel_base_class = "overlayPanelBloc", panel_wrap_class = "scrollerBloc--item", $panel_toggles = $("." + panel_wrap_class + ' .action[href*="pluck="]'), overlayPanel_close = function(a) {
    a.parent("." + panel_wrap_class).removeClass(panel_wrap_class + "__open"), a.removeClass("open");
};

overlayPanel_render = function(a) {
    plucked = $.deparam(a.attr("href").split("#")[1]).pluck, $parent = a.closest("." + panel_wrap_class), 
    $panel = $parent.find("." + panel_base_class + "__" + plucked), $parent.addClass(panel_wrap_class + "__open"), 
    $panel.addClass("open"), console.log("js:overlayPanels", {
        addclass: "." + panel_base_class + "__open",
        plucked: plucked,
        parent: $parent,
        panel: $panel
    });
}, $panel_toggles.bind("click", function(a) {
    $self = $(this), $(window).one("haschange", overlayPanel_render($self));
}), $(window).on("haschange", function(a) {
    console.log("click:", event);
});