<? snippet('meta/pre') ?>

	<? snippet('bloc/sidebar.php') ?>
		
	<main class="grid-9" role="main">

		<header>
			<h3><?= $page->title()->html() ?></h3>
		</header>

		<article>
			<?= $page->text()->kirbytext() ?>
			<a href=".`">View All</a>
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
	
<? snippet('meta/post') ?>