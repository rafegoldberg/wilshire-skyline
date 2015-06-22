<? snippet('meta/pre',array(
	'body' => 'vertical-align-middle'
)) ?>
	<aside class="grid-d-4 grid-t-12 grid-m-12 no-gutter">
		<!-- Media Bloc -->
			<section class="attachmentBloc grid-t-6 grid-m-12">
				<div class="mediaBox grid-t-12 pad8Z pad6V">
					<img src="<?=$site->files()->find('s-stylized-cutout.png')->url()?>" alt="Mark">
				</div>
				<div class="contentBox grid-t-12">
					<h1 class="heading_2 gutter">Wilshire Skyline</h1>
				</div>
			</section>
		<!-- Content Bloc -->
			<section class="contentBloc grid-t-6 grid-m-12">
				<div class="textBox centered">
					<p>Wilshire Skyline manages a portfolio of luxury multi-family residential properties located in prime sub-markets in Los Angeles.</p>
					<p>In addition to other real estate holdings, the principals of Wilshire Skyline own a controlling interest in all of the properties under management.</p>
					<p>Currently, Wilshire Skyline manages 18 multi-family residential properties (499 units/ 384,689 square feet) located in Malibu, Santa Monica, Beverly Hills, West Hollywood and Hollywood.</p>
				</div>
			</section>
	</aside>
	<main id="main" role="main" class="grid-d-8 grid-t-12 grid-m-12 no-gutter">
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
		<section class="scrollBloc scrollBloc__pad1V grid-12 sizeReset7__cascade">
			<? $props = $pages->find('props'); ?>
			<? foreach ($props->properties()->toStructure() as $prop) : ?>
				<?
				$hash = strtolower(trim(preg_replace('/[^a-zA-Z0-9]+/', '-', $prop->title()), '-'));
				$prop_img = $props->files()->find($prop->media());
				?>
				<div id="<?=$hash?>" class="scrollBloc--item bgBox__overlay bgBox__after">
					<div class="textBox sizeReset9">
						<h1 class="heading_6 centered"><?=$prop->title()->html()?></h1>
						<a href='#view?property=<?=$hash?>'><strong>Details</strong></a>
					</div>
					<style> #<?=$hash?>.bgBox__after:after {
						background-image:url(<?=$prop_img->url()?>);
					} </style>
				</div>
			<? endforeach; ?>
 		</section>
	</main>
<? snippet('meta/post') ?>