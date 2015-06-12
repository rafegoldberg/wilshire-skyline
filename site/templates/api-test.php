<? snippet('meta/pre',array('body'=>'api_test')) ?> 

	<? snippet('obj/menu') ?> 

	<main>
		<header>
			<h1>API Test Page</h1>
		</header>
		<article>
			<form>
				<button class="js-ajax" data-url="api" data-get="props"><code>$.AJAX</code><br><strong>Props</strong></button><br><br><button class="js-ajax" data-url="api" data-get="posts"><code>$.AJAX</code><br><strong>Posts</strong></button>
				<? add_scripts('api/testcall') ?>
				<style>
				[class*="js-"] {
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

	<? snippet('obj/foot') ?>

<? snippet('meta/post') ?> 