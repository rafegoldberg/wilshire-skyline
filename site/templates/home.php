<? snippet('meta/pre') ?>
	<main class="parent" role="main">

		<? foreach ($pages->visible() as $panel) : ?>
			<div class="bloc panel">
				<? $template = $panel->intendedTemplate(); ?>
				<? switch ($template) {
					case 'hero': ?>
						<div class="bloc <?=$template?>">
							<div class="box media">
								<?= $panel->media()->imgBloc() ?>
							</div>
							<div class="box copy">
								<?=$panel->text()->kirbytext()?>
							</div>
						</div>
						<? break;
					case 'section': ?>
						<div class="box <?=$template?>">
							<?=$panel->title()->html()?>
						</div>
						<? break;
					case 'properties': ?>
						<div class="box <?=$template?>">
							<?=$panel->title()->html()?>
						</div>
						<? break;
					default:
						echo jsl($panel->intendedTemplate(),'Intended Template');
						break;
				} ?>
			</div>
		<? endforeach ?>

	</main>
<? snippet('meta/post') ?>