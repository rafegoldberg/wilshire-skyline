<div id="debug" class="parent">
	<fieldgroup class="clearfix">
		<button class="debug_toggle <?=$load=='all'?'debug_toggle_active':''?>" data-toggle="all"><strong>Debug All</strong></button>
		<button class="debug_toggle <?=$load=='bloc'?'debug_toggle_active':''?>" data-toggle="bloc">Bloc</button>
		<button class="debug_toggle <?=$load=='box'?'debug_toggle_active':''?>" data-toggle="box">Box</button>
		<button class="debug_toggle <?=$load=='bit'?'debug_toggle_active':''?>" data-toggle="bit">Bit</button>
	</fieldgroup>

	<style>
		#debug {
			position: fixed;
			left: 0;
			bottom: 0;
			display: inline-block;
			padding: 1.125em;
			background: rgba(255,255,255,0);
			opacity: .5;
			box-shadow: 0 2px 8px -4px rgba(0,0,0,.625);
			transition: all .15s ease-out;
		}
		#debug:hover {
			opacity: 1;
			background: rgba(255,255,255,.875);
		}

		#debug { transform: translateY(25%); }
		#debug:hover { transform: translateY(0%); }
		#debug .debug_toggle { pointer-events: none; transform: translateY(75%); }
		#debug:hover .debug_toggle { pointer-events: auto; transform: translateY(0%); }

		.debug_toggle {
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;

			text-align: center;
			font: inherit;
			font-size: small;
			font-size: smaller;
			color: dodgerblue;

			border: solid dodgerblue;
			border-width: 1px 1px 2px; margin-right: -1px;
			border-radius: 0;
			
			background: #FFF;
			
			opacity: .85;
			transition: all .3s ease-in-out;

			position: relative;
			z-index: 1;

			float:left;

			display: inline-block;
			padding: 1em 1.25em;
			outline: none;
			cursor: pointer;
		}
		.debug_toggle:last-child { margin-right: 0; }
		.debug_toggle:hover,.debug_toggle:active {
			opacity: 1;
			z-index: 2;
		}
		.debug_toggle:focus {
			z-index: 9 !important;
			outline-style: dotted;
			outline-width: 1px;
			outline-offset: -4px;
			outline-color: transparent;
			opacity: 1 !important;
		}
		.debug_toggle:focus:not(:hover) {
			outline-color: dodgerblue;
		}.debug_toggle_active:focus:not(:hover){outline-color: white;}
		.debug_toggle_active {
			color: #FFF;
			border-color: #0A6AC7;
			background: dodgerblue;
			z-index: 99 !important;
		}
		.debug_toggle_active:hover {
		}
		.debug_toggle_active:first-child ~ .debug_toggle ,
		.debug_toggle_active:first-child ~ .debug_toggle.debug_toggle_active {
			pointer-events: none;
			cursor: default;
			z-index: -1 !important;
			outline: none !important;
			color: #BCBCBC !important;
			border-color: #DDD !important;
			background-color: white !important;
		}
		.debug_toggle_active:first-child ~ .debug_toggle.debug_toggle_active {
			color: #939393 !important;
		}
		/*.debug_toggle_active:not(:last-child) {
			border-right-color: white !important;
		}
		.debug_toggle + .debug_toggle_active {
			border-left-color: white !important;
		}*/
		#debug:not(:hover) fieldgroup {
			pointer-events: none !important;
		}
		#debug:not(:hover) .debug_toggle {
			outline-width: 0 !important;
		}
	</style>
	<script>
		var debug_classes = 'rgdebug debug-box debug-bloc debug-bit'
			debug={
				'all' : 'rgdebug',
				'box' : 'debug-box',
				'bloc': 'debug-bloc',
				'bit' : 'debug-bit',
			};

		$('html,body').removeClass(debug_classes);
		$('.debug_toggle_active').each(function(i,o) {
			var toggle   = $(o).data('toggle'),
				tglClass = debug[toggle]       ;
			$('body').toggleClass(tglClass);
		});
			
		$('.debug_toggle').click(function(e){
			var toggle   = $(this).data('toggle'),
				tglClass = debug[toggle]       ;
			e.preventDefault();
			$('body').toggleClass(tglClass);
			$(this).toggleClass('debug_toggle_active')
		});
	</script>
	<?
		// function inline_dependency($dep,$file,$dir) {
		// 	$info  = fileinfo($file,$dir);
		// 	$pre = $info["dirname"].'/'.$info["filename"];
		// 	$data = array();
		// 	foreach ($dep as $add=>$snippet_args) {
		// 		$snippet_name=implode('.',array($pre,$add,$info["extension"]));
		// 		parse_str($snippet_args,$snippet_args);
		// 		$snippet_data=snippet('name',$snippet_args,true);
		// 		array_push($data,array(
		// 			'name'=> $snippet_name,
		// 			'args'=> $snippet_args,
		// 			'data'=> $snippet_data
		// 		));
		// 	}
		// 	return $data;
		// }
		// echo jsl( inline_dependency(array('js'=>'load='.(isset($load)?$load:'none')),__FILE__,__DIR__) )
	?>
</div>