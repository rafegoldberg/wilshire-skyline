var render_data_template = function(a) {
    $("#" + $.bbq.getState("property")).append($(a));
}, central_ajax_handler = function(a) {
    a.getState().property && a.getState().pluck && $.ajax({
        url: "api",
        type: "GET",
        data: a.getState()
    }).done(function(a) {
        console.log("done", a), a.template && render_data_template(a.template);
    }).fail(function(a) {
        console.log("fail", a.error());
    }).always(function(a) {});
};

$(window).bind("hashchange", central_ajax_handler);