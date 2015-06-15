<!-- @[sections]:start -->
	<? foreach($pages->visible() as $pg): ?>
		<section>
			<p style="text-align:right;">
				<key><strong style="text-transform:lowercase;"><?=$pg->title()?></strong> <code>#<?=$pg->hash()?></code></key>

				<? if($pg->hasVisibleChildren()): ?>
					<? foreach($pg->children()->visible() as $sub): ?>
						<div>
							<small><a href="<?= $sub->url() ?>"><?= $sub->title()->html() ?></a></small>
						</div>
					<? endforeach ?>
				<? endif; ?>

			</p>
		</section>
	<? endforeach ?>
<!-- @[sections]:end   -->