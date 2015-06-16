<section class="section		grid-12 gutter gutter-top gutter-bottom">
	<div class="section--inner		grid-12 centered">
		<hr>
		<details>
			<summary role="button">
				<strong><?= $p->title()->html() ?></strong>
			</summary>
			<hr>
			<table>
				<tbody>
					<tr>
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
					</tr>
				</tbody>
			</table>
		</details>
		<hr>
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