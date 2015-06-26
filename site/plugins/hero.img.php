<?
field::$methods['bgiBox_set_style'] = function($field,$css_pseudo='after') {
	$img = r( $field->value, $field->toFile(), $field->page->images()->first() );
	$img_url = $img->url();

	$css_selector = '#'.$field->page->slug().".bgBox__$css_pseudo:$css_pseudo";
	$css_style    = "{ background-image:url($img_url); }";

	return brick('style',"$css_selector $css_style");
};