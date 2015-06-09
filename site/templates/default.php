<? snippet('top') ?>

	<? snippet('header') ?>
	<? snippet('menu')   ?>
	<main class="main" role="main">
		<div class="text">
			<h1><?= $page->title()->html() ?></h1>
			<?= $page->text()->kirbytext() ?>
		</div>
	</main>
	<? snippet('footer') ?>

<? snippet('bottom') ?>