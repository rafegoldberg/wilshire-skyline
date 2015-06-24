$(document).ready(function() {
    $(".js-ajax").click(function(a) {
        a.preventDefault(), $.ajax({
            type: "GET",
            url: $(this).data("url") ? $(this).data("url") : "api",
            data: {
                get: $(this).data("get") ? $(this).data("get") : "properties"
            }
        }).always(function() {
            console.log("AJAX FINISHED");
        }).done(function(a) {
            console.log("AJAX SUCCESS", a);
        }).fail(function(a) {
            console.log("AJAX FAILURE", a.responseText.replace(/(<([^>]+)>)/gi, ""));
        });
    });
});