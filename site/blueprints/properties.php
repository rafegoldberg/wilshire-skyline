<?php if(!defined('KIRBY')) exit ?>

title: Properties
pages: 
  template:
    - property
files: images
fields:
	title:
		label: <style>[for$="field-title"],[for$="field-title"] *{display:none;}[for$="field-title"]~*>*{background-color:transparent !important;}[for$="field-title"]~*>.input{border:none;pointer-events:none !important;padding:0 !important;}[for$="field-title"]~.field-content{font-size:1.5em;margin-top:2.5rem;}[for$="field-title"]~.field-content .icon{display:none !important;}</style>
		type:  text
		placeholder: Properties
		icon: text-width
	about:
		text: >
			<ul>
				<li>
					<p>Want to <strong>change the order</strong> properties are displayed in the slider? Just tap to <em><key>Edit</key></em> the Pages list (at left) and you'll be able to drag and drop 'em just the way you like!</p>
				</li>
				<li>
					<p>To <strong>edit a property</strong>, ummm, it's pretty self explanatory. Find it in the list at left. Click it.</p>
				</li>
			</ul>
		type: info
	spacer:
		label: &nbsp;
		type:info
		width: 1/4