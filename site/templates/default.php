<? snippet('top') ?>

	<? snippet('header') ?>
	<? snippet('menu')   ?>

	<main class="main" role="main">
		<div class="text">
			<h3><?= $page->title()->html() ?></h3>
			<?= $page->text()->kirbytext() ?>
		</div>
		<details>
			<summary role="button"><strong>Location</strong></summary>
			<p>
				<code><?= $page->location() ?></code>
			</p>
		</details>
	</main>
	
	<? snippet('footer') ?>

<? snippet('bottom') ?>