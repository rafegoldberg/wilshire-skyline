<? snippet('meta/pre',array('body'=>'rgdebug')) ?>
	<main id="main" role="main" class="vertical-align-middle">
	<!-- Text Bloc -->
		<section class="contentBloc grid-d-6 grid-t-12 grid-m-12">
			<!-- Media Bloc -->
			<section class="attachmentBloc grid-12 ta-l">
				<div class="mediaBox">
					<img src="<?=$site->files()->find('s-stylized-cutout.png')->url()?>" alt="Mark">
				</div>
				<div class="contentBox">
					<h1 class="heading_2 gutter">Wilshire Skyline</h1>
				</div>
			</section>
		</section>
		<section class="contentBloc grid-d-6 grid-t-12 grid-m-12">
			<!-- Media Bloc -->
			<section class="attachmentBloc grid-12">
				<div class="contentBox">
					<div class="textBox centered">
						<p>Wilshire Skyline manages a portfolio of luxury multi-family residential properties located in prime sub-markets in Los Angeles.</p>
						<p>In addition to other real estate holdings, the principals of Wilshire Skyline own a controlling interest in all of the properties under management.</p>
						<p>Currently, Wilshire Skyline manages 18 multi-family residential properties (499 units/ 384,689 square feet) located in Malibu, Santa Monica, Beverly Hills, West Hollywood and Hollywood.</p>
					</div>
				</div>
			</section>
		</section>
	<!-- Nav Bloc
		<div class="contentBloc">
			<ul class="textBox centered list__inline">
				<?# $props = $pages->find('props')->properties()->toStructure(); ?>
				<?# foreach ($props as $prop) : ?>
					<?# $hash = strtolower(trim(preg_replace('/[^a-zA-Z0-9]+/', '-', $prop->title()), '-')); ?>
					<li class="grid-t-4 list--item"><?#= $prop->title()->link("#view?property=$hash") ?></li>
				<?# endforeach; ?>
			</ul>
		</div>
	-->
	<!-- Scroll Bloc -->
		<section class="scrollBloc scrollBloc__pad1V grid-12">
			<? $props = $pages->find('props'); ?>
			<? foreach ($props->properties()->toStructure() as $prop) : ?>
				<?
				$hash = strtolower(trim(preg_replace('/[^a-zA-Z0-9]+/', '-', $prop->title()), '-'));
				$prop_img = $props->files()->find($prop->media());
				?>
				<div id="<?=$hash?>" class="scrollBloc--item bgBox__bw bgBox__after">
					<?= jsl(thumb($prop_img, array('width' => 300))); ?>
					<?=jsl($prop_img->orientation())?>
					<h1 class="heading_4 centered"><?=$prop->title()->html()?></h1>
					<a href='#view?property=<?=$hash?>' class="float-right"><strong>Details</strong></a>
					<style> #<?=$hash?>.bgBox__after:after {
						background-image:url(<?=$prop_img->url()?>);
					} </style>
				</div>
			<? endforeach; ?>
 		</section>
	</main>
<? snippet('meta/post') ?>