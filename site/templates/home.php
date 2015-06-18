<main class="parent" role="main">

	<? foreach ($pages->visible() as $panel) : ?>
		<? $template = $panel->intendedTemplate(); ?>
		<? switch ($template) {
			case 'hero': ?>
				<div class="box <?=$template?>">
					<div class="box media">
						<?= $panel->media()->imgBloc() ?>
					</div>
					<div class="box copy">
						<?=$panel->text()->kirbytext()?>
					</div>
				</div>
				<? break;
			case 'section': ?>
				<div class="box <?=$template?> grid-6 grid-m-8 centered-m">
					<?=$panel->title()->html()?>
				</div>
				<? break;
			case 'properties': ?>
				<div class="box <?=$template?> grid-6 grid-m-8 centered-m">
					<?=$panel->title()->html()?>
					<ul>
						<? foreach ($panel->properties()->toStructure() as $property) : ?>
							<li><?= $property->title()->link() ?></li>
						<? endforeach; ?>
					</ul>
				</div>
				<? break;
			default:
				echo jsl($panel->intendedTemplate(),'Intended Template');
				break;
		} ?>
	<? endforeach ?>

</main>