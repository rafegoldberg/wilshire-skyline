<? snippet('meta/pre',array(
	'body' => 'vertical-align-middle'
)) ?>
	<?# SETVARS
		$intro = $pages->find('intro');
		?>
	<!-- Media Bloc -->
		<section class="contentBloc  grid-d-6 grid-t-8 grid-m-10 no-gutter-mobile centered  push4V">
			<div class="textBox centered">
				<?=$intro->text()->kt()?>
			</div>
		</section>
	<!-- Scroller Bloc -->
		<? snippet('bloc/scroller') ?>
	<!-- Map Bloc -->
		<? snippet('bloc/map') ?>
	<!-- Contact Bloc
		<? snippet('bloc/contact') ?>			
	-->
<? snippet('meta/post') ?>