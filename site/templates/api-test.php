<? snippet('meta/pre',array('body'=>'api_test')) ?> 

	<? snippet('bloc/sidebar.php') ?>

	<main class="dgrid-9" role="main">
		<header>
			<h1>API Test Page</h1>
		</header>
		<article>
			<form>
				<button class="js-ajax" data-url="api" data-get="props"><code>$.AJAX</code><br><strong>Props</strong></button>
				<br><br>

				<hr>
				<ul>
					<? foreach($pages->siblings('template','properties')->pluck('title') as $title): ?>
						<li><?= html($title) ?></li>
					<? endforeach ?>
				</ul>
				<hr>

				<button class="js-ajax" data-url="api" data-get="pages"><code>$.AJAX</code><br><strong>Posts</strong></button>
				<? add_scripts('api') ?>
				<style>
				.api_test main {
					text-align:center;
					font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
					font-weight: 300;
				}
				 button[class*="js-"] ,
				.button[class*="js-"] {
					min-width: 6em;
					padding:.625em .75em;
					font:inherit;
					border:1px solid #DDD;
					border-radius:2px;
					background:#FFF;
				}
				</style>
			</form>
		</article>
	</main>

<? snippet('meta/post') ?> 