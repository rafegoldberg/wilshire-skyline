<?
#STEP[1: send 404 if not ajax request]
	if( !kirby()->request()->ajax() ) notFound();

#STEP[2: set type to json app]
	header('Content-type: application/json; charset=utf-8');

#STEP[3: API config]

	$return = array(); // scoped var

	$props = $pages->find('properties');
	$prop = $props->children()->find($_GET['property']);

#STEP[4: get AJAX-variable data]
	switch ($_GET['pluck']) { // testparse
		case 'files':
			$return['data'] = $prop->files()->toArray();
			break;
		default:
			// $return['data'] = $prop->content()->toArray()[$_GET['pluck']];
			$data = $prop->content()->toArray();
			$data['location'] = (array)json_decode($data['location']);
			$return['data'] = $data;
			break;
	}

	// check, render, save template
	// 
	$return['template'] = snippet('box/'.$_GET['pluck'],$return['data'],true);
	
#STEP[5: echo parsed data as json]
	echo json_encode($return,JSON_NUMERIC_CHECK); //@DEBUG

?>