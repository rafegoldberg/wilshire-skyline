<!-- SCROLL BLOC -->
	<section class="grid-12 // scrollerBloc scrollerBloc__pad3V scrollerBloc__va-m // sizeReset6__cascade">
		<!-- Intro Box -->
		<div id="scroller-intro" class="scrollerBloc--item // bgBox__overlay bgBox__after // js__ajax actionBox__soft // sizeReset6__cascade // theme__dusk">
			<section class="textBox bgBox--scaleUp">
				<h1 class="heading_3 size6 centered">Our Locations</h1>
				<div class="bgBox--scaleUp__action sizeReset9">
					<a href="#property=villa-rebecca" class="action sizeReset9">► <span style="text-decoration:underline;">View more</span>, or scroll</a>
				</div>
			</section>
			<style>
			#scroller-intro.current {
				background-color: #083056 !important;
			}
			/*#scroller-intro {
				background-color: #FAFAFE !important;
			}*/
			</style>
			<script>
			$(document).ready(function() {
				$('#scroller-intro').addClass('current');
			});
			</script>
		</div>
		<?#PARSEVARS
		$props = $pages->find('properties')->children();
		?>
		<? foreach ($props as $prop) : ?>
			<div id="<?=$prop->slug()?>" class="scrollerBloc--item bgBox__overlay bgBox__after js__ajax actionBox__soft   sizeReset6__cascade">
				<section class="textBox bgBox--scaleUp">
					<h1 class="heading_6 size_8 centered"><?=$prop->title()->html()?></h1>
					<div class="bgBox--scaleUp__action sizeReset9">
						<a class="action sizeReset9">
							<?=explode(', CA',json_decode($prop->content()->location())->address)[0]?>
						</a>
						<!--
						<ul class="list__inline list__inline__sep-slash">
							<li class="list--item">
								<a class="action" href="#property=<?=$prop->slug()?>&pluck=details">Details</a>
							</li>
							<li class="list--item">
								<a class="action" href="#property=<?=$prop->slug()?>&pluck=files">Photographs</a>
							</li>
						</ul>
						-->
					</div>
				</section>
				<?= $prop->img()->bgiBox_set_style() ?>
			</div>
		<? endforeach; ?>
	</section>