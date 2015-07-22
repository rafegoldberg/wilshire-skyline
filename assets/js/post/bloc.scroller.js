/*= ABOUT
|*| @requires:    pre/_jq.scrollstop
|*/

/* VARIABLES
*/ 
	var $scroller    = $('.scrollerBloc'),
		$items       = $scroller.children('.scrollerBloc--item'),
		scroll_speed = 250,
		scroll_stick = 138,
	//@VARS::OPTIONS ^
		scrolling    = false, //
		scroll_last  = 0,     //
		scroll_dir   = 1      //[1:RIGHT|-1:LEFT]
		scroll_init  = false 
	//@VARS::CHECKS  ^
		;

/*=FUNCTIONS
*/ 
	var scroller_goto_item = function($item) {
		// PARSE VARS
		// 
		scrolling = 'auto';
		var $item     = typeof $item !== 'undefined' ? $item : scroller_item_at('center'),
			scrollTo  = 0;
		$scroller.animate({
			scrollLeft: (function() {
				widths = $item.prevAll().map(function() {
					console.log($item);
					return $item.outerWidth();
				}).toArray();
				total = widths.length < 1 ? 0 : eval(widths.join('+'));
				view = $scroller.outerWidth();
				width = $item.outerWidth();
				remains = view - width;
				scrollTo = total - (remains / 2); //update top-level var
				return scrollTo;
			}()),
		}, scroll_speed, 'easeInOut', function() {
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
	var scroller_get_next_item = function(dir/*[1:RIGHT|-1:LEFT]*/){
		// CHECKS
		// 
		if (!scrolling) return scroller_item_at();

		scroll_diff = Math.abs( scroll_last - $scroller.scrollLeft() );
		if ( !scroll_diff>=scroll_stick) return scroller_item_at();

		// PARSEVARS
		var dir  = typeof dir !== 'undefined' ? dir : scroll_dir;
			$cur = $items.filter('.current').length==1 ? $items.filter('.current') : $items.first(),
			$nxt = false;

		// CHECK
		// 
		if ( $cur[0]!==scroller_item_at()[0]) return scroller_item_at();

		// CALC
		// 
		if (dir >=1 ) $nxt = $cur.next().length==1 ? $cur.next() : false;
		else $nxt = $cur.prev().length==1 ? $cur.prev() : false;

		return $nxt;
	}

/*=EVENTS
*/ 
	$(window)
		// .one('hashchange',function(event){
		// 	$.bbq.removeState('pluck');
		// })
		.bind('hashchange',function(event){
			$active = $('#'+$.bbq.getState('property'));
			if ($active.length>=1)
			scroll_init = window.setTimeout(function(){
				scroller_goto_item($active);
			},(scroll_speed*2.5));
		});
	$items
		.click(function(event){

			window.clearTimeout(scroll_init);

			// OPEN ?
				// ^ ALLOW CLICKS ORIGINATING ON INNER ELEMS
			if ($(this).hasClass('current')){
				if (event.target!==$(this)[0]) return true;
				$.bbq.pushState('home',2);
			} else $.bbq.pushState({property:$(this).attr('id')},2);
			// ELSE :
			scroller_goto_item($(this));                 // < scroll to clicked
			$(this).siblings().removeClass('current');   // < remove others' .current
			$(this).toggleClass('current');              // < toggle .current on clicked
			return false;
		})
	$scroller
		.bind('scrollstart',function(event){

			window.clearTimeout(scroll_init);

			if (scrolling===true) return false;
			if (scrolling!=='auto') {
				scroll_dir = scroll_last<$scroller.scrollLeft()?1:-1;
				scrolling = true;
			}
		})
		.bind('scrollstop',function(event){
			$next = scroller_get_next_item();

			$next.siblings().removeClass('current');
			$next.addClass('current');
			$.bbq.pushState({
				property: $next.attr('id'),
			},2);

			if (scrolling!=='auto') scroller_goto_item($next);

			scroll_last = $scroller.scrollLeft();

		});