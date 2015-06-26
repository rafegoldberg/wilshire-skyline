<?/*|-–––––––––––––––––––––––––––––––––––––––––
|–+–| OVERLAY PANEL DETAILS
|–+–|-–––––––––––––––––––––––––––––––––––––––––
|*/?>
<section class="overlayPanelBloc overlayPanelBloc__details" data-state="#property=<?=$prop->slug()?>&pluck=details">
	<details class="contentBloc textBox gutter-bottom">
		<summary><strong>State</strong></summary>
		<pre><?=var_export($state,true)?></pre>
	</details>
	<aside class="textBox">
		<?=$prop->text()->kt()?>
		<hr>
		<small><?=json_decode($prop->location()->toArray(),JSON_NUMERIC_CHECK)['address']?></small>
	</aside>
	<a href="#close" class="overlayPanelBloc--close">close</a>
</section>