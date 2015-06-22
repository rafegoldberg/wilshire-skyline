	<?
	snippet('meta/post.sheets' );
	snippet('meta/post.scripts');
	?>
	<? if ($GLOBALS['ENV']['debug']!==false) : ?>
		<?//= js('assets/js/build/livereload.js') ?>
		<? snippet('meta/debug.toggles',array(
			'load'=> $GLOBALS['ENV']['debug']
		)); ?>
	<? endif; ?>
</body>
</html>