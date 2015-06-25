var scrolling = !1, $scroller = $(".scrollerBloc"), $items = $scroller.children(".scrollerBloc--item");

active_class = "is_open";

var scroller_goto_item = function($self) {
    $self = "undefined" != typeof $self ? $self : scroller_item_at("center"), scrolling && $self.siblings().add($self).removeClass(active_class + " current");
    var scrollTo = 0;
    return scrolling = "auto", $scroller.animate({
        scrollLeft: function() {
            return widths = $self.prevAll().map(function() {
                return $self.outerWidth();
            }).toArray(), total = widths.length < 1 ? 0 : eval(widths.join("+")), view = $scroller.outerWidth(), 
            width = $self.outerWidth(), remains = view - width, scrollTo = total - remains / 2;
        }()
    }, 175, "easeInOut", function() {
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
}, scroller_make_items_inactive = function() {
    return $scroller.children().removeClass(active_class);
}, scroller_make_item_active = function(a) {
    return a = "undefined" != typeof a ? a : scroller_item_at(), a.addClass(active_class), 
    a;
}, scroller_make_item_siblings_inactive = function(a) {
    return a = "undefined" != typeof a ? a : scroller_item_at(), a.siblings().removeClass(active_class), 
    a;
};

$items.on("click", function(a) {
    return $(this).hasClass("current") && a.target !== $(this)[0] ? !0 : (scroller_goto_item($(this)), 
    $(this).siblings().removeClass("current"), $(this).toggleClass("current"), !1);
}), $scroller.on("scrollstart", function(a) {
    return scrolling === !0 ? !1 : void ("auto" !== scrolling && (scrolling = !0));
}).on("scrollstop", function(a) {
    scroller_item_at("center").siblings().removeClass("current"), scroller_item_at("center").addClass("current"), 
    "auto" !== scrolling && scroller_goto_item(), scrolling = !1;
});