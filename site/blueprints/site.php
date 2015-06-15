<?php if(!defined('KIRBY')) exit ?>

title: Site
pages: default
fields:
	_line-0: type: line
	title:
		type:  text
		placeholder: Site Title
		icon: text-width
	_line-1: type: line
	_info-metadata:
		type: info
		label: Metadata
		text: >

			<small style="font-size:11pt;">Add keywords, social networking profiles or pages, and a site thumbnail to enrich your content in search results and social feeds.</small>

		width: 2/4
	keywords:
		label: <small style="font-size:11pt;opacity:.5;">Keywords</small>
		type:  tags
		width: 2/4
	soc_twitter:
		label: <small style="font-size:11pt;opacity:.5;">Profiles</small>
		icon: twitter
		placeholder: Twitter @handle
		type: text
		width: 2/4
	soc_facebook:
		label: &nbsp;
		icon: facebook
		placeholder: Facebook page Insights ID
		type: text
		width: 2/4