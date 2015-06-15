<?
#STEP[1: send 404 if not ajax request]
	if( !kirby()->request()->ajax() ) notFound();

#STEP[2: set type to json app]
	header('Content-type: application/json; charset=utf-8');

#STEP[3: get and store some data]
	$data = false;
	switch ($_GET['get']) {
		case 'pages':
			$data = $pages->visible()->paginate(10);
			break;
		default:
			$data = $pages->children()->filterBy('template','property');
			break;
	}

#STEP[4: loop thru $data and store in $json]
	$json = array();
	foreach($data as $article) {
	  $json[] = array(
	    'title' => (string)$article->title(),
	    'date'  => (string)$article->date(),
	  );
	}

#STEP[5: echo/return data as JSON str]
	echo json_encode($json);
?>