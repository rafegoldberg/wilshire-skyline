<? snippet('meta/pre') ?>

	<main class="main" role="main">
		<? foreach($pages->visible() as $p): ?>
			<?$snippet= 'sections/'.$p->intendedTemplate() ?>
			<? snippet($snippet,array('p'=>$p)) ?>
		<? endforeach ?>
	</main>

<? snippet('meta/post') ?>