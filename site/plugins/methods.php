<?
/////////////////////////////////
// DEBUG                       //
/////////////////////////////////

function jsl($arr=array('default'),$txt=false,$r=false){
	$logtag = false;
	if ($txt) {
		$logtag = "<script class='php2js'>console.log('".$txt."',".json_encode($arr).")</script>";
	} else {
		$logtag = "<script class='php2js'>console.log(".json_encode($arr).")</script>";
	}
	if ($r) { return $logtag; } else { echo $logtag; }
}

/////////////////////////////////
// FIELD METHODS               //
/////////////////////////////////

function get_user_timezone() {
	return getdate();
	return localtime(time(), true);
}

/////////////////////////////////
// FIELD METHODS               //
/////////////////////////////////


// function prepend_states ($arr,$delim=' ',$tostr=false){
// }

function get_stately_classes ($arr,$delim=' ',$tostr=false){
	$arr = gettype($arr)=='string'?explode($delim,$arr):$arr;
	$classes = array_map(function($v, $k) {
		if     ($k==0) { return "grid-$v"; }
		elseif ($k==1) { return "grid-tablet-$v"; }
		else           { return "grid-mobile-$v"; }
	}, $arr, array_keys($arr));
	return $tostr ? implode(' ',$classes) : $classes;
}

/////////////////////////////////
// FIELD METHODS               //
/////////////////////////////////

field::$methods['json'] = function($field, $property = null) {
  $data = (array)json_decode($field->value);
  return ($property && isset($data[$property]) ? $data[$property] : $data);
};

?>