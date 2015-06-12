<? snippet('meta/pre') ?>

	<? snippet('obj/menu')   ?>

	<main class="main" role="main">

		<header>
			<h3><?= $page->title()->html() ?></h3>
		</header>

		<article>
			<?= $page->text()->kirbytext() ?>
		</article>

		<details>
			<summary role="button"><strong>Location</strong></summary>

			<? $location = $page->location();
			   $location = implode('{<br>   ',explode('{',$location));
			   $location = implode('<br>}',explode('}',$location));
			   $location = explode('","',$location);
			?> 
			<div style="font-family:monospace;"><?= implode('",<br>   "',$location) ?></div>

		</details>
		
	</main>
	
	<? snippet('obj/foot') ?>

<? snippet('meta/post') ?>