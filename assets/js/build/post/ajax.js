var api_url = "api", template_class = ".overlayPanelBloc__", render_data_template = function(a) {
    var b = $("#" + $.bbq.getState("property")), c = $(a);
    return b.append(c), $(".overlayPanelBloc--close").click(function(a) {
        $(this).parent(".overlayPanelBloc").removeClass("open"), $(this).parent(".scrollerBloc--item").removeClass("scrollerBloc--item__open");
    }), b;
}, ajax_connect = function(a) {
    $.ajax({
        url: "api",
        type: "GET",
        data: a
    }).done(function(a) {
        console.log("response".response), $render_in = render_data_template(a.template), 
        console.log($render_in);
    }).fail(function(a) {
        console.warn(strip_tags(a.responseText.trim()), a.error());
    });
}, _api = function() {
    return state = $.bbq.getState(), render_if = $(template_class + state.pluck), console.log({
        "state.property": state.property,
        "state.pluck": state.pluck,
        render_if: render_if
    }), state.property && state.pluck && render_if.length <= 0 ? void ajax_connect(state) : (console.warn("data already loaded"), 
    !1);
};

$(window).bind("hashchange", _api);