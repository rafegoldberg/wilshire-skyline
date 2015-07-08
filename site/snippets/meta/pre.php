<!DOCTYPE html>
<html lang="en" class="">
<head>

	<!--| Meta Definitions
	|–––| 
	|–-->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<? snippet('meta/pre.data') ?>
	<? snippet('meta/env') ?>

	<!--| Scripts + Stylesheets
	|–––| Link main site stylesheets;
	|–––| initialize scripts + sheets
	|–––| post-lib $GLOBALS variable,
	|–––| for use see `meta/post.php`
	|–-->
	<?= css('assets/css/main.css') ?>
	<? init_libs() //@depends[snippet/meta.post] ?>
	<? add_sheets('grid') ?>

	<!--| Favicon
	|–-->
	<link rel="icon" href="favicon.ico" type="image/x-icon" />

</head>
<body class="container centered <?= isset($body)?$body:'' ?>">
	<? snippet('meta/pre.header') ?>