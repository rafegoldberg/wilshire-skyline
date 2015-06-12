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
// POST-INCLUDES               //
/////////////////////////////////
/*
 + Description:
 | Simple, off-the-cuff includes for 
 | modularly architected stylesheets
 | and/or Javascript files.
 |
 + Example Usage:
 [-] register_sheets('CSS1 CSS10');
 [-] register_scripts('JS1 JS10 JS12 JS2 JS10');
 [-] register_sheets('CSS12 CSS2 CSS10');
 */

function init_libs() {
	init_sheets();
	init_scripts();
}

function init_sheets() { $GLOBALS['css'] = array(); }
function init_scripts() { $GLOBALS['js'] = array(); }

function add_sheets($sheets) {

	# USAGE:
	#<|> register_sheets('add1 add10 add12 add2 add10');

	foreach (explode(' ',$sheets) as $fname) {
		array_push($GLOBALS['css'],$fname);
	}
	return $GLOBALS['css'];
}
function add_scripts($scripts) {

	# USAGE:
	#<|> register_scripts('add1 add10 add12 add2 add10');

	foreach (explode(' ',$scripts) as $fname) {
		array_push($GLOBALS['js'],$fname);
	}
	return $GLOBALS['js'];
}

function link_sheets($debug=false) {?>
	<?
	# USAGE:
	#<|> link_sheets('add1 add10 add12 add2 add10');
	#<|> //HREFS: "assets/css/[ add1, add2, add10, add12 ].css"
	$sheets  = array_unique( $GLOBALS['css'] );
	natsort($sheets);
	?>
	<? if ( !empty($sheets) ): ?>
		<? foreach( $sheets as $sheet ): ?>
			<? if (!$debug): ?>
				<?= css("assets/css/$sheet.css") ?>
			<? else: ?>	
				<?= jsl("assets/css/$sheet.css") ?>
			<? endif ?>
		<? endforeach ?>
	<? endif ?>
<?}
function link_scripts($debug=false) {?>
	<?
	# USAGE:
	#<|> link_scripts('add1 add10 add12 add2 add10');
	#<|> //HREFS: "assets/js/[ add1, add2, add10, add12 ].js"
	$scripts  = array_unique( $GLOBALS['js'] );
	natsort($scripts);
	?>
	<? if ( !empty($scripts) ): ?>
		<? foreach( $scripts as $script ): ?>
			<? if (!$debug): ?>
				<?= js("assets/js/build/$script.js") ?>
			<? else: ?>	
				<?= jsl("assets/js/build/$script.js") ?>
			<? endif ?>
		<? endforeach ?>
	<? endif ?>
<?}

/////////////////////////////////
// FIELD METHODS               //
/////////////////////////////////

field::$methods['json'] = function($field, $property = null) {
  $data = (array)json_decode($field->value);
  return ($property && isset($data[$property]) ? $data[$property] : $data);
};

?>