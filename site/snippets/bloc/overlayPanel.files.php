<?/*|-–––––––––––––––––––––––––––––––––––––––––
|–+–| OVERLAY PANEL DETAILS
|–+–|-–––––––––––––––––––––––––––––––––––––––––
|*/?>
<section class="overlayPanelBloc overlayPanelBloc__files" data-state="#property=<?=$prop->slug()?>&pluck=files">
	<details class="contentBloc textBox gutter-bottom">
		<summary><strong>State</strong></summary>
		<pre><?=var_export($state,true)?></pre>
	</details>
	<aside class="textBox">
		<? foreach ($prop->images() as $img) : ?>
			<?=brick('img',false,array(
				'src'=>$img->url()
			));?>
		<? endforeach; ?>
	</aside>
	<a href="#close" class="overlayPanelBloc--close">Close</a>
</section>