<!DOCTYPE html>
<html lang="en">
<head>

	<!--| Meta Definitions
	|–––| 
	|–-->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<? snippet('meta/pre.data') ?>

	<!--| Scripts + Stylesheets
	|–––| Link main site stylesheets;
	|–––| initialize scripts + sheets
	|–––| post-lib $GLOBALS variable,
	|–––| for use see `meta/post.php`
	|–-->
	<?= css('assets/css/grid.css') ?>
	<?= css('assets/css/main.css') ?>
	<? init_libs() //@depends[snippet/meta.post] ?>

	<!--| Favicon
	|–-->
	<link rel="icon" href="favicon.ico" type="image/x-icon" />

</head>
<body class='grid-10 grid-m-12 centered<?= isset($body)?$body:'' ?>'>