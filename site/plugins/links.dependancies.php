<?
///////////////////////////////////////////////////////////
//                                                       //
//                EoF DEPENDANCY INCLUDES                //
//                                                       //
//  –––––––––––––––––––––––––––––––––––––––––––––––––––  //
//  Simple, off-the-cuff includes for                    //
//  modularly architected stylesheets                    //
//  and/or Javascript files. See the                     //
//  inline comments for usage details.                   //
////////////////////////////////////////////////////////////


function init_libs() {
#
# Registers empty [css] and [js] variables
# in $GLOBALS for future modification and
# access. The init method must be called in
# the head tag of your document before any
# of the following methods will function as
# expected. The general setup will probably
# look similar to this:
#
# <html><head>
#	...
#   <? init_libs()
#	...
# </head><body>
# 	<? register_script(etc1 misc2);
# 	    register_sheet(misc1 etc2);
#	...
#   <? link_scripts()
#       link_sheets();
# </body></html>
#
	init_sheets();
	init_scripts();
}

function init_sheets() { $GLOBALS['css'] = array(); }
function init_scripts() { $GLOBALS['js'] = array(); }

function add_sheets($sheets) {
#
# register_sheets($sheets=[str]);
#
# @param	$sheet	[str]	space-separated stylesheet file
#                           names
#
	foreach (explode(' ',$sheets) as $fname) {
		array_push($GLOBALS['css'],$fname);
	}
	return $GLOBALS['css'];
}
function add_scripts($scripts) {
#
# register_scripts($sheets=[str]);
#
# @param	$sheet	[str]	space-separated script file
#                           names
#
	foreach (explode(' ',$scripts) as $fname) {
		array_push($GLOBALS['js'],$fname);
	}
	return $GLOBALS['js'];
}

function link_sheets($debug=false) {
#
# link_sheets($sheets=[str]);
#
# @param	$debug	[bool]	pass true to log all registered
#                           CSS/JS
# ?>
	<?
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
function link_scripts($debug=false) {
#
# link_sheets($sheets=[str]);
#
# @param	$debug	[bool]	pass true to log all registered
#                           CSS/JS
# ?>
	<?
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
