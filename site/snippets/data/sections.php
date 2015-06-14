<!-- @[sections]:start -->
	<? foreach($pages->visible() as $p): ?>
		<section>
			<!--
				<a <?# e($p->isOpen(), ' class="active"') ?> href="<?#= $p->url() ?>">
					<h3><?#= $p->title()->html() ?></h3>
				</a>
			-->
			<?= $p->text()->kirbytext() ?>
			<? if($p->hasVisibleChildren('property')): ?>
				<div class="overflowWrap overflowWrap_fade">
					<div class="overflow">
						<table> <tbody> <tr>
							<? foreach($p->children()->visible() as $p): ?>
								<td>
									<h4 href="<?= $p->url() ?>"><?= $p->title()->html() ?></h4>
									<p><?= $p->text()->kirbytext() ?></p>
								</td>
							<? endforeach ?>
						</tr> </tbody> </table>
						<style>
							.overflow {
								padding-top: 3vh;
								padding-bottom: 3vh;
								border: solid #DDD;
								border-width: 1px 0;
							}
							.overflow>table {
								table-layout: fixed;
								height: 60vh;
							}
							.overflow>table td {
								min-width: 45vw;
								width: 375px;
								border-right: 1px dashed #DDD;
								padding: 7.5vw;
								vertical-align: middle;
							}
							.overflow>table td:first-child {
								padding-left: 0;
							}
							.overflow>table td:last-child {
								border-right: none;
							}
						</style>
					</div>
				</div>
			<? endif ?>
		</section>
	<? endforeach ?>
<!-- @[sections]:end   -->