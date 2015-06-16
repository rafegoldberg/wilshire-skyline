<? snippet('meta/pre') ?>

	<main class="main" role="main">
		<? foreach($pages->visible() as $p): ?>
			<? snippet('obj/panel',array('p'=>$p)) ?>
		<? endforeach ?>
	</main>

<? snippet('meta/post') ?>