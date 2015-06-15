<?php if(!defined('KIRBY')) exit ?>

title: Site
pages: default
fields:
	title:
		label: <style>[for$="field-title"],[for$="field-title"] *{display:none;}[for$="field-title"]~*>*{background-color:transparent !important;}[for$="field-title"]~*>.input{border-color:#B3B3B3;}[for$="field-title"]~.field-content{font-size:1.5em;margin-top:2.5rem;}[for$="field-title"]~.field-content .icon{margin-top:2px;transform:translateY(-50%);}</style>
		type:  text
		placeholder: Site Title
		icon: text-width
	_info-about:
		type: info
		text: >

			<div id="pg_info">
				<style>
				#pg_info {
					padding: 2.5rem 0 .25em;
				}
				#pg_info h3 {
					position: relative;
					color: #000;
					transition: all .3s;
					cursor: pointer;
					font-size: 1.1em;
				}
				#pg_info:hover h3 {
					color: #888;
				}
				#pg_info h3 .icon {
					position: absolute;
					right: 100%;
					height: 1em;
					bottom: .25em;
					top: initial;
					margin-right: .375em;
					color: #AAA;
					transform: scale(1);
					transition: all .275s ease-in-out;
				}
				#pg_info:hover .icon {
					/*opacity: 1;*/
					color: #000;
					margin-right: .5em;
					transform: scale(1.25);
				}
				#pg_info section {
					max-height: 0;
					position: absolute;
					background-color: rgba(37,37,37,.95);
					border: 1px solid rgba(0,0,0,.75);
					color: #FCFCFC;
					padding: .625em;
					z-index: 9999;
					pointer-events:none;
					opacity: 0;
					overflow: hidden;
					transition: all .375s ease-in-out;
				}
				#pg_info:hover section {
					max-height: 99999999999999999999px;
					opacity: 1;
					overflow: initial;
				}
				</style>
				<h3>Site Metadata <i class="icon fa fa-question-circle"></i></h3>
				<section>
					<br>
					<p>Metadata is information about information. Think of it as a summary of your site. It helps search engines and social networks to understand your site's structure and content. And it helps <em>you</em> increase your rankings and engagement in search results and search social feeds.</p>
					<p>Pertinent and up-to-date metadata will give you an SEO boost so let's get started! Below you can set key search terms, add social network profiles and/or pages, or even upload a thumbnail image for your site.</p>
				</section>
			</div>

		width: 3/4
	keywords:
		label: <small style="font-size:11pt;opacity:.5;">Keywords</small>
		type:  tags
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