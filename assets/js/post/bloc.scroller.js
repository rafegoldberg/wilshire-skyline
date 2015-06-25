// @requires:    pre/_jq.scrollstop
// 
// VARIABLES
// 
var scrolling = false,
    $scroller = $('.scrollerBloc'),
	$items = $scroller.children('.scrollerBloc--item')
    active_class = 'is_open';
// 
// DEBUG
// 
// console.clear();
// $scroller.add($items).off().unbind();
// 
// FUNCTIONS
// 
var scroller_goto_item = function($self) {
    // DEFAULT ARGS
    $self = typeof $self !== 'undefined' ? $self : scroller_item_at('center');

	// if (scrolling) $self.siblings().add($self).removeClass(active_class+' current');

    var scrollTo = 0;

    scrolling = 'auto';
    $scroller.animate({
        scrollLeft: (function() {
            widths = $self.prevAll().map(function() {
                return $self.outerWidth();
            }).toArray();
            total = widths.length < 1 ? 0 : eval(widths.join('+'));
            view = $scroller.outerWidth();
            width = $self.outerWidth();
            remains = view - width;
            scrollTo = total - (remains / 2); //update top-level var
            return scrollTo;
        }()),
    }, 175, 'easeInOut', function() {
        scrolling = false;
        return false;
    });
    return scrollTo;
}
var scroller_item_at = function(from/*[left|right|center]*/){
    from = typeof from !== 'undefined' ? from : 'center';
    from = function(pos){
        // PARSE VARS
        if (typeof pos === 'number'){
            return pos;
        } else if (pos=='right'){
            return $scroller.outerWidth();
        } else if (pos=='left'){
            return 0;
        } else { // left
            return $scroller.outerWidth()/2;
        }
    }(from);
    var elems_by_offsets = {},
        offsets = $items.map(function(e){
            offset = $(this).offset().left+($(this).width()/2);
            elems_by_offsets[offset] = $(this);
            return offset;
        });
    $next_item = elems_by_offsets[ closest(from,offsets) ];
    return $next_item;
}
/*var scroller_make_items_inactive = function() {
    return $scroller.children().removeClass(active_class);
}
var scroller_make_item_active = function($item) {
    $item = typeof $item !== 'undefined' ? $item : scroller_item_at();
    $item.addClass(active_class);
    return $item;
}
var scroller_make_item_siblings_inactive = function($item) {
    $item = typeof $item !== 'undefined' ? $item : scroller_item_at();
	$item.siblings().removeClass(active_class);
    return $item;
}*/
// 
// EVENTS
// 
$(window).hashchange( function(){
    console.log(location.hash);
})
$items
    .on("click", function(event) { 

        // IF OPEN:
        if ($(this).hasClass('current') && event.target!==$(this)[0]) {
            // ^ ALLOW CLICKS ORIGINATING ON INNER ELEMS
            // console.log($(this).find('[class*="__action"]'));
            return true;
        }

        // OTHERWISE:
        scroller_goto_item($(this));                 // < scroll to clicked
        $(this).siblings().removeClass('current');   // < remove others' .current
        $(this).toggleClass('current');              // < toggle .current on clicked
        return false;

    })
$scroller
    .on("scrollstart", function(event) {
        if (scrolling===true) return false;
        if (scrolling!=='auto') scrolling = true;
    })
    .on("scrollstop", function(event) {

        $center = scroller_item_at('center');
        $center.siblings().removeClass('current'); // < remove others' .current
        $center.addClass('current');               // < add current

        if (scrolling!=='auto') scroller_goto_item();

        scrolling = false;

    });