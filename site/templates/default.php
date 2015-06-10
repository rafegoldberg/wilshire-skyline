<? snippet('top') ?>

	<? snippet('header') ?>
	<? snippet('menu')   ?>

	<main class="main" role="main">
		<div class="text">
			<h3><?= $page->title()->html() ?></h3>
			<?= $page->text()->kirbytext() ?>
		</div>
	</main>
	
	<? snippet('footer') ?>

<? snippet('bottom') ?>