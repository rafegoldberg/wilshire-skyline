<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<? snippet('meta/data') ?>	

	<?= css('assets/css/main.css') ?>
	<? init_libs() ?>

</head>
<body class='<?= isset($body)?$body:'' ?>'>