$(document).ready(function() {
	$(window)
	.resize(function(e){
	   console.log('resized');
	   $('.scrollerBloc').trigger('scroll');
	})
	.hashchange();
});