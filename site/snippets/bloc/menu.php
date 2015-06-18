<nav role="navigation">
	<ul class="nav">
	<? foreach($pages->visible() as $p): ?>
		<li class="<?e($p->isOpen(),' current')?>">
			<a href="<?= $p->url() ?>">
				<?= $p->title()->html() ?>
			</a>
			<? if($p->hasVisibleChildren()): ?>
				<ul class="subnav">
					<? foreach($p->children()->visible() as $p): ?>
						<li>
							<a href="<?= $p->url() ?>"><?= $p->title()->html() ?></a>
						</li>
					<? endforeach ?>
				</ul>
			<? endif ?>
			<style>/*
			.nav li {
				display: inline-block;
				position: relative;
			}
			.nav li > .subnav {
				position: absolute;
				top: 100%;
				left: 0;
				display: none;
			}
			.nav li:hover > .subnav {
				display: block;
			}
			*/</style>
		</li>
	<? endforeach ?>
	</ul>
</nav>