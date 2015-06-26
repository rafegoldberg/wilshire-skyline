<? snippet('meta/pre',array(
	'body' => 'vertical-align-middle'
)) ?>
	<main id="main" role="main" class="grid-12 parent">
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
	<!-- Media Bloc -->
		<section class="attachmentBloc   grid-12">
			<div class="mediaBox   grid-t-12 pad8Z pad6V">
				<img src="<?=$site->files()->find('s-stylized-cutout.png')->url()?>" alt="Mark">
			</div>
			<div class="contentBox   grid-t-12">
				<h1 class="heading_2 gutter"><?=$site->title()->html()?></h1>
			</div>
		</section>
		
	<!-- Content Bloc -->
		<section class="contentBloc grid-d-5 grid-t-8 grid-m-10 no-gutter-mobile centered">
			<div class="textBox centered">
				<?=$pages->find('intro')->text()->kt()?>
			</div>
		</section>

	<!-- Scroller Bloc -->
		<? snippet('bloc/scroller') ?>

	<!-- Contact Bloc -->
		<?// snippet('bloc/contact') ?>
			
	</main>
<? snippet('meta/post') ?>