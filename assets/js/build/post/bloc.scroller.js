var $scroller = $(".scrollerBloc"), $items = $scroller.children(".scrollerBloc--item"), scroll_speed = 175, scroll_stick = 138, scrolling = !1, scroll_last = 0, scroll_dir = 1;

scroll_init = !1;

var scroller_goto_item = function($item) {
    scrolling = "auto";
    var $item = "undefined" != typeof $item ? $item : scroller_item_at("center"), scrollTo = 0;
    return $scroller.animate({
        scrollLeft: function() {
            return widths = $item.prevAll().map(function() {
                return $item.outerWidth();
            }).toArray(), total = widths.length < 1 ? 0 : eval(widths.join("+")), view = $scroller.outerWidth(), 
            width = $item.outerWidth(), remains = view - width, scrollTo = total - remains / 2;
        }()
    }, scroll_speed, "easeInOut", function() {
        return scrolling = !1, !1;
    }), scrollTo;
}, scroller_item_at = function(a) {
    a = "undefined" != typeof a ? a : "center", a = function(a) {
        return "number" == typeof a ? a : "right" == a ? $scroller.outerWidth() : "left" == a ? 0 : $scroller.outerWidth() / 2;
    }(a);
    var b = {}, c = $items.map(function(a) {
        return offset = $(this).offset().left + $(this).width() / 2, b[offset] = $(this), 
        offset;
    });
    return $next_item = b[closest(a, c)], $next_item;
}, scroller_get_next_item = function(a) {
    if (!scrolling) return scroller_item_at();
    if (scroll_diff = Math.abs(scroll_last - $scroller.scrollLeft()), !scroll_diff >= scroll_stick) return scroller_item_at();
    var a = "undefined" != typeof a ? a : scroll_dir;
    return $cur = 1 == $items.filter(".current").length ? $items.filter(".current") : $items.first(), 
    $nxt = !1, $cur[0] !== scroller_item_at()[0] ? scroller_item_at() : (a >= 1 ? $nxt = 1 == $cur.next().length ? $cur.next() : !1 : $nxt = 1 == $cur.prev().length ? $cur.prev() : !1, 
    $nxt);
};

$(window).one("hashchange", function(a) {
    scroll_init = window.setTimeout(function() {
        scroller_goto_item($("#" + location.hash.split("property=")[1]));
    }, 2 * scroll_speed);
}), $items.click(function(a) {
    return window.clearTimeout(scroll_init), $(this).hasClass("current") && a.target !== $(this)[0] ? !0 : (scroller_goto_item($(this)), 
    $(this).siblings().removeClass("current"), $(this).toggleClass("current"), !1);
}), $scroller.on("scrollstart", function(a) {
    return window.clearTimeout(scroll_init), scrolling === !0 ? !1 : void ("auto" !== scrolling && (scroll_dir = scroll_last < $scroller.scrollLeft() ? 1 : -1, 
    scrolling = !0));
}).on("scrollstop", function(a) {
    $next = scroller_get_next_item(), $next.siblings().removeClass("current"), $next.addClass("current"), 
    "auto" !== scrolling && scroller_goto_item($next), scroll_last = $scroller.scrollLeft();
});