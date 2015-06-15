<?php if(!defined('KIRBY')) exit ?>

title: Site
pages: default
fields:
	_info-about:
		type: info
		text: >

			<div id="about-this-page">
				<style>
				#about-this-page h3 {
					position: relative;
					color: #000;
					transition: all .3s;
				}
				#about-this-page:hover h3 {
					color: #888;
				}
				#about-this-page h3 .icon {
					position: absolute;
					right: 100%;
					height: 1em;
					bottom: .22em;
					top: initial;
					margin-right: .375em;
					color: #AAA;
					transform: scale(1);
					transition: all .275s ease-in-out;
					cursor: pointer;
				}
				#about-this-page:hover .icon {
					/*opacity: 1;*/
					color: #000;
					margin-right: .5em;
					transform: scale(1.25);
				}
				#about-this-page section {
					max-height: 0;
					pointer-events:none;
					opacity: 0;
					overflow: hidden;
					transition: all .375s ease-in-out;
				}
				#about-this-page:hover section {
					max-height: 99999999999999999999px;
					opacity: 1;
					overflow: initial;
				}
				#about-this-page section * { display: none; }
				#about-this-page:hover section * { display: initial; }
				</style>
				<h3>Site Metadata <i class="icon fa fa-question-circle"></i></h3>
				<section>
					<br>
					<p>Think about it as a summary for search engines and social networks that help's them understand your content: it's literally information about information! How else could Google index upwards of 90% of the web?</p>
					<p>Pertinent and up-to-date metadata can significantly increase your site's relevancy and rankings, as well as user engagement in search results and search social feeds. So get started! Below you can set key search terms, add social network profiles and/or pages, or even upload a thumbnail image for your site.</p>
				</section>
				<hr>
			</div>

		width: 3/4
	title:
		label: <style>[for$="field-title"],[for$="field-title"] *{display:none;}[for$="field-title"]~.field-content{font-size:1.5em;}[for$="field-title"]~.field-content .icon{margin-top:2px;transform:translateY(-50%);}</style>
		type:  text
		placeholder: Site Title
		icon: text-width
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