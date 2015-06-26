<!-- SCROLL BLOC -->
	<section class="grid-12   scrollerBloc scrollerBloc__pad1V scrollerBloc__va-m   sizeReset6__cascade push8V">
		<?#PARSEVARS
		$props = $pages->find('properties')->children();
		?>
		<? foreach ($props as $prop) : ?>
			<div id="<?=$prop->slug()?>" class="scrollerBloc--item bgBox__overlay bgBox__after js__ajax actionBox__soft   sizeReset6__cascade">
				<section class="textBox bgBox--scaleUp">
					<h1 class="heading_6 centered"><?=$prop->title()->html()?></h1>
					<div class="bgBox--scaleUp__action size_9 sizeReset9">
						<ul class="list__inline list__inline__sep-slash">
							<li class="list--item"><a class="action" href="#property=<?=$prop->slug()?>&pluck=location">Details</a></li>
							<li class="list--item"><a class="action" href="#property=<?=$prop->slug()?>&pluck=files">Photographs</a></li>
						</ul>
					</div>
				</section>
				<style> #<?=$prop->slug()?>.bgBox__after:after {
					background-image:url(<?=$prop->files()->first()->url()?>);
				} </style>
			</div>
		<? endforeach; ?>
	</section>