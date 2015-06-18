<?

field::$methods['imgBloc'] = function($field) {
	$src = $field->page->files()->find($field->value)->url();
	return brick('img',false,array('src'=>$src));
};