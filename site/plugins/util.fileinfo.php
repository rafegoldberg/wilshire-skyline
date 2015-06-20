<? function fileinfo($file,$dir){
	return array_merge(
		pathinfo($file),
		array(
			'dirname'=>basename($dir)
		));
} ?>