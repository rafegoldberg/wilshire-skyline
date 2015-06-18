<?
/////////////////////////////////
// DEBUG FUNCTIONS             //
/////////////////////////////////

function jsl($arr=array('default'),$txt=false,$r=true){
	$logtag = false;
	if ($txt) {
		$logtag = "<script class='php2js'>console.log('".$txt."',".json_encode($arr).")</script>";
	} else {
		$logtag = "<script class='php2js'>console.log(".json_encode($arr).")</script>";
	}
	if ($r) { return $logtag; } else { echo $logtag; }
}

/////////////////////////////////
// HELPER FUNCTIONS            //
/////////////////////////////////

function get_user_timezone() {
	return getdate();
	return localtime(time(), true);
}

/////////////////////////////////
// FIELD METHODS               //
/////////////////////////////////

field::$methods['json'] = function($field, $property = null) {
  $data = (array)json_decode($field->value);
  return ($property && isset($data[$property]) ? $data[$property] : $data);
};

?>