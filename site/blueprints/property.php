<?php if(!defined('KIRBY')) exit ?>

title: Property
pages: false
files: true
fields:
	title:
		label: Title
		type:  text
	text:
		label: Text
		type:  markdown
	location:
		type: place
		center:
			lat: 45.5230622
			lng: -122.67648159999999
			zoom: 15
		help: >
			Look up an address or location.
	img:
		label: Featured Image
		type:  selector
		mode:  single
		types:
			- image