$(document).ready(function() {
	var $ajax_trigger = $('.js-ajax')
		.click(function(e){
			e.preventDefault();
			$.ajax({
				type: 'GET',
				url:  $(this).data('url') ? $(this).data('url') : 'api',
				data: {
					"get": $(this).data('get')?$(this).data('get'):'properties'
				},
			})
			.always(function() {
				console.log('AJAX FINISHED');
			})
			.done(function(data) {
				console.log('AJAX SUCCESS',data);
			})
			.fail(function(err) {
				console.log('AJAX FAILURE',err.responseText.replace(/(<([^>]+)>)/ig,""));
			});
		});
});