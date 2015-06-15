<section class="grid-4 gutter gutter-top gutter-bottom">
	<table>
		<tbody>
			<tr>
				<tr>
					<th>Title:</th>
					<td>“<?=$pg->title()?>”</td>
				</tr>
				<tr>
					<th>Template:</th>
					<td><key><?=$pg->intendedTemplate();?></key></td>
				</tr>
				<tr>
					<th>Hash:</th>
					<td><code><?=$pg->hash()?></code></td>
				</tr>
			</tr>
		</tbody>
	</table>
	<!--
	<? if($pg->hasVisibleChildren()): ?>
		<? foreach($pg->children()->visible() as $sub): ?>
			<div>
				<small><a href="<?= $sub->url() ?>"><?= $sub->title()->html() ?></a></small>
			</div>
		<? endforeach ?>
	<? endif; ?>
	-->
</section>