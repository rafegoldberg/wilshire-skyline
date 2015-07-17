	</main>
	<?
	snippet('meta/post.footer' );
	snippet('meta/post.sheets' );
	snippet('meta/post.scripts');
	?>
	<? if ($GLOBALS['ENV']['debug']===true) : ?>
		<? snippet('meta/debug.toggles',array(
			'load'=> '',
		)); ?>
	<? elseif ($GLOBALS['ENV']['debug']!==false) : ?>
		<? snippet('meta/debug.toggles',array(
			'load'=> $GLOBALS['ENV']['debug']
		)); ?>
	<? endif; ?>
</body>
</html>