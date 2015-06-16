<? snippet('meta/pre') ?>

	<? snippet('obj/menu')   ?>

	<main class="main" role="main">
		<?= $page->text()->kirbytext() ?>
		<? foreach($page->children()->visible() as $p): ?>
			<? snippet('obj/panel',array('p'=>$p)) ?>
		<? endforeach ?>
	</main>
	
	<? snippet('obj/footer') ?>

<? snippet('meta/post') ?>