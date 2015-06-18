<? snippet('meta/pre') ?>

	<? snippet('bloc/sidebar.php') ?>
	
	<main class="grid-9" role="main">
		<?= $page->text()->kirbytext() ?>
		<? foreach($page->children()->visible() as $property): ?>
			<? snippet('bloc/panel',array('panel'=>$property)) ?>
		<? endforeach ?>
	</main>
	
<? snippet('meta/post') ?>