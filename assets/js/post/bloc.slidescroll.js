// 
// SCROLLSTOP/START
// 
!function(factory){"function"==typeof define&&define.amd?define(["jquery"],factory):"object"==typeof exports?module.exports=factory(require("jquery")):factory(jQuery)}(function($){var dispatch=$.event.dispatch||$.event.handle,special=$.event.special,uid1="D"+ +new Date,uid2="D"+(+new Date+1);special.scrollstart={setup:function(data){var timer,_data=$.extend({latency:special.scrollstop.latency},data),handler=function(evt){var _self=this,_args=arguments;timer?clearTimeout(timer):(evt.type="scrollstart",dispatch.apply(_self,_args)),timer=setTimeout(function(){timer=null},_data.latency)};$(this).bind("scroll",handler).data(uid1,handler)},teardown:function(){$(this).unbind("scroll",$(this).data(uid1))}},special.scrollstop={latency:250,setup:function(data){var timer,_data=$.extend({latency:special.scrollstop.latency},data),handler=function(evt){var _self=this,_args=arguments;timer&&clearTimeout(timer),timer=setTimeout(function(){timer=null,evt.type="scrollstop",dispatch.apply(_self,_args)},_data.latency)};$(this).bind("scroll",handler).data(uid2,handler)},teardown:function(){$(this).unbind("scroll",$(this).data(uid2))}}});
// 
//-> Config
$.event.special.scrollstop.latency = 650;
// 
// VARIABLES
// 
var scrolling = false,
    $scroll = $('.sidescrollBloc').off(),
	$items = $scroll.children('.sidescrollBloc--item').off();
// 
// DEBUG
// 
// console.clear();
// $scroll.add($items).off().unbind();
// 
// FUNCTIONS
// 
function sidescroll_goto_item($self) {
    
    console.log(scrolling); if (scrolling === true) return false;
	
	$self.siblings().add($self).removeClass('current');

    var scrollTo = 0,
        $scroll = $self.parent('.sidescrollBloc');

    scrolling = 'auto';
    $scroll.delay(650).animate({
        scrollLeft: (function() {
            widths = $self.prevAll().map(function() {
                return $self.outerWidth();
            }).toArray();
            total = widths.length < 1 ? 0 : eval(widths.join('+'));
            view = $scroll.outerWidth();
            width = $self.outerWidth();
            remains = view - width;
            scrollTo = total - (remains / 2); //update top-level var
            return scrollTo;
        }()),
    },600, function() {
        scrolling = false;
    });
	$self.addClass('current');
    return scrollTo;
}
var sidescroll_make_items_inactive = function() {
    return $('.sidescrollBloc').children().removeClass('active current');
}
var sidescroll_make_item_active = function($this) {
    $this.addClass('active');
    return $this;
}
var sidescroll_make_item_siblings_inactive = function($this) {
	$this.siblings().removeClass('active');
    return $this;
}
var sidescroll_make_item_current = function($this) {
    $this.addClass('current');
    return $this;
}
// 
// EVENTS
// 
$items.on("mouseenter", function(e) {
    sidescroll_goto_item($(this));
});
$scroll.on("mouseleave", function(e) {
//     sidescroll_make_items_inactive();
}).on("scrollstart", function(e) {
    if (scrolling !== 'auto') {
        $(this).children().removeClass('active');
    }
    scrolling = true;
}).on("scrollstop", function(e) {
    scrolling = false;
    sidescroll_goto_item($(this))
});