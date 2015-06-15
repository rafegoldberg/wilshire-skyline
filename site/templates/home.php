<? snippet('meta/pre') ?>

	<main class="main" role="main">
		<?= $page->text()->kirbytext() ?>
		<? snippet('data/sections'); ?>
	</main>

<? snippet('meta/post') ?>