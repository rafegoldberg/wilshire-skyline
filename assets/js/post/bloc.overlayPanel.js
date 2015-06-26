//-> VARIABLES
//
var panel_base_class = 'overlayPanelBloc',
	panel_wrap_class = 'scrollerBloc--item',
	$panel_toggles   = $('.'+panel_wrap_class+' .action[href*="pluck="]')
	;
//-> FUNCTIONS 
//
var overlayPanel_close     = function($panel)  {
		$panel.parent('.'+panel_wrap_class).removeClass(panel_wrap_class+'__open');
		$panel.removeClass('open');
	}
	overlayPanel_render    = function($trigger)  {
		plucked = $.deparam( $trigger.attr('href').split('#')[1] ).pluck;
		$parent = $trigger.closest('.'+panel_wrap_class);
		$panel  = $parent.find('.'+panel_base_class+'__'+plucked);
		$parent.addClass(panel_wrap_class+'__open');
		$panel.addClass('open');
		console.log('js:overlayPanels',{
			addclass: '.'+panel_base_class+'__open',
			plucked:  plucked,
			parent:   $parent,
			panel:    $panel,
		});
	}
	;
//-> EVENTS
// 
$panel_toggles
	.bind('click',function(event){
		$self = $(this);
		$(window).one('haschange',overlayPanel_render($self));
	});
$(window).on('haschange',function(e){
		console.log('click:',event);
		// event.preventDefault(); event.stopPropagation();
		// $parent = $(this).parent('.'+panel_wrap_class);
		// console.log($parent);
		// overlayPanel_close($parent);
		// return false;
	});
// $('.'+panel_base_class+'--close')
// 	.on('click',function(event){
// 		console.log('click:',event);
// 		event.preventDefault(); event.stopPropagation();
// 		$parent = $(this).parent('.'+panel_wrap_class);
// 		console.log($parent);
// 		overlayPanel_close($parent);
// 		return false;
// 	});