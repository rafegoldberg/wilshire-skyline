<?php if(!defined('KIRBY')) exit ?>

title: Properties
pages: false
files: images
fields:
	title:
		label: Page Title
		type:  text
	spacer:
		label: &nbsp;
		type:info
		width: 1/4
	properties:
		label: Properties
		type: structure
		max: 4
		width: 1/2
		entry: >

			<div>
				<img src="http://localhost/projects/wilshire-skyline/content/2-props/{{media}}" style="display: inline-block;vertical-align: middle;max-height:3rem;width: 29%;">
				<div style="display: inline-block;width: 69%;padding-left: 1em;-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;vertical-align: middle;font-size:.85rem;">
					<h1>{{title}}</h1>
					{{text}}
				</div>
			</div>

		fields:
			title:
				label: <strong style="font-size:1.15rem;line-height:3;">Property Details</strong>
				type: text
				icon: building-o
			text:
				placeholder: about this property, brielfy
				type: markdown
			spacer0:
				type: info
			media:
				label: Image &amp; Map
				type:  selector
				mode:  single
				types:
					- all
			spacer1:
				type: info
			location:
				type: place
				center:
					lat: 45.5230622
					lng: -122.67648159999999
					zoom: 13
				help: >
					Look up an address or location.