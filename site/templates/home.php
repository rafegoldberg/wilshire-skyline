<? snippet('meta/pre',array(
	'body' => 'vertical-align-middle'
)) ?>
	<?# SETVARS
		$intro = $pages->find('intro');
		?>
	<!-- Scroller Bloc -->
		<? snippet('bloc/scroller') ?>
	<!-- Description Bloc -->
		<section class="contentBloc // grid-d-6 grid-t-8 grid-m-10 no-gutter-mobile centered // pad4V">
			<div class="textBox">
				<?=$intro->text()->kt()?>
			</div>
		</section>
	<!-- Map Bloc -->
		<? snippet('bloc/map') ?>
	<!-- Contact Bloc
		<? snippet('bloc/contact') ?>			
	-->
<? snippet('meta/post') ?>