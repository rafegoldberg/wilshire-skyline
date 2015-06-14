<!-- @[sections]:start -->
	<hr>
	<? foreach($pages->visible() as $p): ?>
		<section>
			<p style="text-align:right;">
				<key>section:<strong style="text-transform:lowercase;"><?=$p->title()?></strong>: <code><?=$p->hash()?></code></key>
			</p>
			<?= $p->text()->kirbytext() ?>
		</section>
	<? endforeach ?>
	<hr>
<!-- @[sections]:end   -->