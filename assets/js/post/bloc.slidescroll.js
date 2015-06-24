// @requires:    pre/_jq.scrollstop
// 
// VARIABLES
// 
var scrolling = false,
    $scroll = $('.sidescrollBloc'),
	$items = $scroll.children('.sidescrollBloc--item');
// 
// DEBUG
// 
// console.clear();
// $scroll.add($items).off().unbind();
// 
// FUNCTIONS
// 
function sidescroll_goto_item($self) {
    $self = typeof $self !== 'undefined' ? $self : sidescroll_get_next_item('center');

    console.log(scrolling); if (scrolling === true) return false;
	
	$self.siblings().add($self).removeClass('current');

    var scrollTo = 0,
        $scroll = $self.parent('.sidescrollBloc');

    scrolling = 'auto';
    $scroll.animate({
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
    },250, function() {
        scrolling = false;
    });
	$self.addClass('current');
    return scrollTo;
}
var sidescroll_get_next_item = function(from/*[left|right|center]*/){
    from = typeof from !== 'undefined' ? from : 'center';
    from = function(pos){
        // PARSE VARS
        if (typeof pos === 'number'){
            return pos;
        } else if (pos=='right'){
            return $scroll.outerWidth();
        } else if (pos=='left'){
            return 0;
        } else { // left
            return $scroll.outerWidth()/2;
        }
    }(from);
    var elems_by_offsets = {},
        offsets = $items.map(function(e){
            offset = $(this).offset().left+($(this).width()/2);
            elems_by_offsets[offset] = $(this);
            return offset;
        });
    $next_item = elems_by_offsets[ closest(from,offsets) ];
    //@debug
    // console.log([$next_item,{
    //     'from':             0,
    //     'elems_by_offsets': elems_by_offsets,
    //     'offsets':          offsets,
    // }]);
    return $next_item;
}
var sidescroll_make_items_inactive = function() {
    return $('.sidescrollBloc').children().removeClass('active current');
}
var sidescroll_make_item_active = function($this) {
    $this = typeof $this !== 'undefined' ? $this : sidescroll_get_next_item();
    $this.addClass('active');
    return $this;
}
var sidescroll_make_item_siblings_inactive = function($this) {
    $this = typeof $this !== 'undefined' ? $this : sidescroll_get_next_item();
	$this.siblings().removeClass('active');
    return $this;
}
// 
// EVENTS
// 
$items
    .on("click", function(e) {
        // if scrolling
        sidescroll_make_items_inactive();
        sidescroll_goto_item($(this));
        sidescroll_make_item_active($(this));
    })
$scroll.on("mouseleave", function(e) {
//     sidescroll_make_items_inactive();
}).on("scrollstart", function(e) {
    if (scrolling !== 'auto') {
    }
    scrolling = true;
}).on("scrollstop", function(e) {
    scrolling = false;
    $nextUp = sidescroll_get_next_item('center');
    sidescroll_goto_item();
    sidescroll_make_item_active();
    sidescroll_make_item_siblings_inactive();

});