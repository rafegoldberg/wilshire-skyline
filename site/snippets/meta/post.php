	<?
	snippet('meta/post.sheets' );
	snippet('meta/post.scripts');
	?>
	<? if ($GLOBALS['ENV']['debug']!==false) : ?>
		<? snippet('meta/debug.toggles',array(
			'load'=> $GLOBALS['ENV']['debug']
		)); ?>
	<? endif; ?>
</body>
</html>