<? foreach ($props->properties()->toStructure() as $prop) : ?>
<?
$hash = strtolower(trim(preg_replace('/[^a-zA-Z0-9]+/', '-', $prop->title()), '-'));
$prop_img = $props->files()->find($prop->media());
?>
<div id="<?=$hash?>" class="sidescrollBloc--item bgBox__overlay bgBox__after js__ajax">
	<div class="textBox bgBox--scaleUp">
		<h1 class="heading_6 centered"><?=$prop->title()->html()?></h1>
		<small class="sizeReset9">Details</small>
	</div>
	<style> #<?=$hash?>.bgBox__after:after {
		background-image:url(<?=$prop_img->url()?>);
	} </style>
</div>
<? endforeach; ?>
