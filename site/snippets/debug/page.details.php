<?/*
@param $data [kirby collection]
*/?>
<details class="gutter-top gutter-bottom">
	<summary role="button">
		<strong class="gutter-top gutter-bottom" style="display:inline-block;">
			<?= $data->title()->html() ?>
		</strong>
	</summary>
	<div class="parent grid-12 gutter-top gutter-bottom">
		<hr>
		<table class="gutter-top">
			<tbody>
				<tr>
					<tr>
						<th>Link:</th>
						<td><a href="<?= $data->url() ?>"><?= '/'.$data->slug() ?></a></td>
					</tr>
					<tr>
						<th>Content:</th>
						<td><?= $data->text() ?></td>
					</tr>
					<tr>
						<th>Template:</th>
						<td><key><?=$data->intendedTemplate();?></key></td>
					</tr>
					<tr>
						<th>Hash:</th>
						<td><code><?=$data->hash()?></code></td>
					</tr>
					<? if ($data->hasVisibleChildren()) : ?>
						<tr>
							<th>Subpages:</th>
							<td>
								<? foreach($data->children()->visible() as $datarop): ?>
									<a href="<?=$datarop->url()?>" style="color:#FAFAFA"><?=$datarop->title()->html()?></a>,&nbsp;
								<? endforeach ?>
							</td>
						</tr>
					<? endif; ?>
				</tr>
			</tbody>
		</table>
	</div>
</details>