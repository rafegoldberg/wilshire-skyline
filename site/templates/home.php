<? snippet('meta/pre',array('body'=>'rgdebug')) ?>
	<main id="main" role="main">
	<!-- Media Bloc -->
		<section class="attachmentBloc">
			<div class="mediaBox">
				<img src="<?=$site->files()->find('s-stylized-cutout.png')->url()?>" alt="Mark">
			</div>
			<div class="contentBox">
				<h1 class="heading_2">Wilshire Skyline</h1>
			</div>
		</section>
	<!-- Nav Bloc -->
		<nav class="attachmentBloc">
			<div class="contentBox">
				<ul class="list__inline">
					<? $props = $pages->find('props')->properties()->toStructure(); ?>
					<? foreach ($props as $prop) : ?>
						<? $hash = strtolower(trim(preg_replace('/[^a-zA-Z0-9]+/', '-', $prop->title()), '-')); ?>
						<li class="grid-6 size-4 list--item"><?= $prop->title()->link("#view?property=$hash") ?></li>
					<? endforeach; ?>
				</ul>
			</div>
			<div class="mediaBox">
				<h4><?=$pages->find('props')->title()->html()?></h4>
			</div>
		</nav>
	<!-- Text Bloc -->
		<section class="textBloc">
			<div class="contentBox centered">
				<p>Wilshire Skyline manages a portfolio of luxury multi-family residential properties located in prime sub-markets in Los Angeles.</p>
				<p>In addition to other real estate holdings, the principals of Wilshire Skyline own a controlling interest in all of the properties under management.</p>
				<p>Currently, Wilshire Skyline manages 18 multi-family residential properties (499 units/ 384,689 square feet) located in Malibu, Santa Monica, Beverly Hills, West Hollywood and Hollywood.</p>
			</div>
		</section>   
	</main>
<? snippet('meta/post') ?>