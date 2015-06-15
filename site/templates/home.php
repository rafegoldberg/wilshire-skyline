<? snippet('meta/pre') ?>

	<main class="main" role="main">
		<? foreach($pages->visible() as $pg): ?>
			<? snippet('data/sections',array('pg'=>$pg)); ?>
		<? endforeach ?>
	</main>

<? snippet('meta/post') ?>