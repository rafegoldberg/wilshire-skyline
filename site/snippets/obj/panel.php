<section class="section		grid-12">
	<div class="section--inner">
		<hr>
		<details class="gutter-top gutter-bottom">
			<summary role="button">
				<strong class="gutter-top gutter-bottom" style="display:inline-block;">
					<?= $p->title()->html() ?>
				</strong>
			</summary>
			<div class="parent grid-12 gutter-top gutter-bottom">
				<hr>
				<table class="gutter-top">
					<tbody>
						<tr>
							<tr>
								<th>Link:</th>
								<td><a href="<?= $p->url() ?>"><?= '/'.$p->slug() ?></a></td>
							</tr>
							<tr>
								<th>Content:</th>
								<td><?= $p->text() ?></td>
							</tr>
							<tr>
								<th>Template:</th>
								<td><key><?=$p->intendedTemplate();?></key></td>
							</tr>
							<tr>
								<th>Hash:</th>
								<td><code><?=$p->hash()?></code></td>
							</tr>
							<? if ($p->hasVisibleChildren()) : ?>
								<tr>
									<th>Subpages:</th>
									<td>
										<? foreach($p->children()->visible() as $prop): ?>
											<a href="<?=$prop->url()?>" style="color:#FAFAFA"><?=$prop->title()->html()?></a>,&nbsp;
										<? endforeach ?>
									</td>
								</tr>
							<? endif; ?>
						</tr>
					</tbody>
				</table>
			</div>
		</details>
	</div>
	<!--
	<? if($p->hasVisibleChildren()): ?>
		<? foreach($p->children()->visible() as $sub): ?>
			<div>
				<small><a href="<?= $sub->url() ?>"><?= $sub->title()->html() ?></a></small>
			</div>
		<? endforeach ?>
	<? endif; ?>
	-->
</section>