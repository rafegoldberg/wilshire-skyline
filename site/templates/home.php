<? snippet('meta/pre',array(
	'body' => 'vertical-align-middle'
)) ?>
	<main id="main" role="main" class="grid-12 parent   pushV8">
	<?# SETVARS
		$intro = $pages->find('intro');
		?>
	<!-- Map Bloc -->
		<? snippet('bloc/map') ?>
	<!-- Media Bloc 
		<section class="contentBloc grid-d-5 grid-t-8 grid-m-10 no-gutter-mobile centered">
			<div class="textBox centered">
				<?=$intro->text()->kt()?>
			</div>
		</section>
		-->
	<!-- Scroller Bloc -->
		<? snippet('bloc/scroller') ?>
	<!-- Contact Bloc -->
		<? snippet('bloc/contact') ?>			
	</main>
<? snippet('meta/post') ?>