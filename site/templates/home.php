<? snippet('meta/pre') ?>

	<? snippet('obj/menu.nav')   ?>
 
	<main class="main" role="main">

		<?= $page->text()->kirbytext() ?>
		<? snippet('data/sections'); ?>
		
	</main>


	<? snippet('foot') ?>

<? snippet('meta/post') ?>