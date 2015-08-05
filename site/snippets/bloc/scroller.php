<!-- SCROLL BLOC -->
	<section class="grid-12 // scrollerBloc scrollerBloc__pad6V scrollerBloc__va-m // sizeReset6__cascade">
		<!-- Intro Box -->
		<div id="scroller-intro" class="scrollerBloc--item // bgBox__overlay bgBox__after // js__ajax // actionBox__soft // sizeReset5__cascade">
			<section class="textBox bgBox--scaleUp // pad6V">
				<h1 class="heading_6 size_5 centered">L.A. Luxury</h1>
				<div class="bgBox--scaleUp__action sizeReset9">
					<a href="#property=villa-rebecca" class="action sizeReset9">
						► Scroll to <span style="text-decoration:underline;">view our locations</span>
					</a>
				</div>
			</section>
			<style>
			#scroller-intro {
				background-color: #00589B;
				background-color: rgba(18, 20, 21, 0.8375);
				transition: background-color .25s !important;
			}
			#scroller-intro.current {
				background-color: rgba(18, 20, 21, 0.8375);
			}
			#scroller-intro.bgBox__after:after {
				background-image:url(<?= $site->file('intro.jpg')->url() ?>);
			}
			</style>
			<script>
			$(document).ready(function() {
				if ( $.isEmptyObject($.bbq.getState()) || $.bbq.getState('property') == 'scroller-intro') {
					window.setTimeout(function(){
						$('#scroller-intro').addClass('current');
					},1500);
				}
			});
			</script>
		</div>
		<?#PARSEVARS
		$props = $pages->find('properties')->children();
		?>
		<? foreach ($props as $prop) : ?>
			<div id="<?=$prop->slug()?>" class="scrollerBloc--item // bgBox__overlay bgBox__after // js__ajax // actionBox__soft // sizeReset5__cascade">
				<section class="textBox bgBox--scaleUp // pad6V">
					<h1 class="heading_6 size_5 centered"><?=$prop->title()->html()?></h1>
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