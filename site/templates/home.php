<? snippet('meta/pre') ?>

	<main class="main" role="main">
		<h1><?= $site->title()->html() ?></h1>
		<? snippet('data/sections'); ?>
	</main>

<? snippet('meta/post') ?>