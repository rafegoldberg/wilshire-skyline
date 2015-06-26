var render_data_template = function(template){
		// renders returned ajax:data.template in to
		// the current property item
		$('#'+$.bbq.getState('property')).append($(template));
	},
	central_ajax_handler = function(event){
		if (event.getState().property && event.getState().pluck) {
			$.ajax({
				url: 'api',
				type: 'GET',
				data: event.getState()
			})
			.done(function(data) {
				console.log('done',data);
				if (data.template) render_data_template(data.template);
			})
			.fail(function(data) {
				console.log('fail',data.error());
			})
			.always(function(data) {
				// console.log('always',data);
			});
		}
	}
	;
$(window).bind('hashchange',central_ajax_handler);