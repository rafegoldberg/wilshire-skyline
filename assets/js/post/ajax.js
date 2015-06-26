var api_url = 'api',
	template_class = '.overlayPanelBloc__'
	;
var render_data_template = function(template){
		// renders returned ajax:data.template in to
		// the current property item
		var $property = $('#'+$.bbq.getState('property')),
			$template = $(template)
			;
		/*console.log({
			property:$property[0],
			template:$template[0],
		});*/
		$property.append($template);
		$('.overlayPanelBloc--close').click(function(event) {
			$(this).parent('.overlayPanelBloc').removeClass('open')
			$(this).parent('.scrollerBloc--item').removeClass('scrollerBloc--item__open');
		});
		return $property;
	},
	ajax_connect = function(state){
		// var state = state === 'undefined' ? $.bbq.getState() : state;
		// return state;
		$.ajax({
			url: 'api',
			type: 'GET',
			data: state
		})
		.done(function(response) {
			console.log('response'.response);
			$render_in = render_data_template(response.template);
			console.log($render_in);
		})
		.fail(function(response) {
			console.warn(strip_tags(response.responseText.trim()),response.error());
		});
	},
	_api = function(){
		state = $.bbq.getState();
		render_if = $(template_class+state.pluck);
		console.log({
			'state.property': state.property,
			'state.pluck':    state.pluck,
			'render_if':      render_if
		});
		if (state.property && state.pluck && render_if.length<=0) {
			ajax_connect(state);
		} else {
			console.warn('data already loaded');
			return false;
		}
	}
	;
//-> EVENTS
// 
$(window).bind('hashchange',_api);

// $('a[href^="#"]').bind('click',function(event){
	// var $property = $('#'+$.bbq.getState('property')),
	// 	plucked   = $property.find('[pluck='+$.bbq.getState('pluck')+']').length;
	// console.log({
	// 	'event':event,
	// 	'getState':$.bbq.getState(),
	// 	'property': $property,
	// 	'plucked': plucked,
	// });
// 	_api();
// });
