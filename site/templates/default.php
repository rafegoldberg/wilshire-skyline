<? snippet('meta/pre') ?>

	<? snippet('bloc/sidebar.php') ?>
	
	<main class="grid-9" role="main">
		<h1><?= $page->title()->html() ?></h1>
		<article>
			<?= $page->text()->kirbytext() ?>
		</article>
	</main>
	
<? snippet('meta/post') ?>