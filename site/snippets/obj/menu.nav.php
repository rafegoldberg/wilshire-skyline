<nav role="navigation">
	<ul class="menu">
	<? foreach($pages->visible() as $p): ?>
		<li>
			<a <? e($p->isOpen(), ' class="active"') ?> href="<?= $p->url() ?>">
				<?= $p->title()->html() ?>
			</a>
			<? if($p->hasVisibleChildren()): ?>
				<ul class="submenu">
					<? foreach($p->children()->visible() as $p): ?>
						<li>
							<a href="<?= $p->url() ?>"><?= $p->title()->html() ?></a>
						</li>
					<? endforeach ?>
				</ul>
			<? endif ?>
			<style>
			.menu li {
				display: inline-block;
				position: relative;
			}
			.menu li > .submenu {
				position: absolute;
				top: 100%;
				left: 0;
				display: none;
			}
			.menu li:hover > .submenu {
				display: block;
			}
			</style>
		</li>
	<? endforeach ?>
	</ul>
</nav>