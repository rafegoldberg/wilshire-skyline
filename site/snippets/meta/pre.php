<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<? snippet('meta/top.data') ?>

	<?= css('assets/css/grid.css') ?>
	<?= css('assets/css/main.css') ?>
	<? init_libs() ?>

</head>
<body class='grid-9 grid-t-10 grid-m-12 centered<?= isset($body)?$body:'' ?>'>