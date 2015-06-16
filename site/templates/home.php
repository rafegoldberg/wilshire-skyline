<? snippet('meta/pre') ?>

	<main class="main" role="main">
		<? snippet('obj/menu.header')?>
		<? foreach($pages->visible() as $p): ?>
			<? snippet('obj/panel',array('p'=>$p)) ?>
		<? endforeach ?>
	</main>

<? snippet('meta/post') ?>