<form method="post">

	<? if ( isset($alert) ) : ?>
		<div class="alert">
			<ul>
				<? foreach($alert as $message): ?>
				<li><?= html($message) ?></li>
				<? endforeach ?>
			</ul>
		</div>
	<? endif ?>

	<div class="field">
		<label for="name">Name <abbr title="required">*</abbr></label>
		<input type="text" id="name" name="name">
	</div>

	<div class="field">
		<label for="email">Email <abbr title="required">*</abbr></label>
		<input type="email" id="email" name="email" required>
	</div>

	<div class="field">
		<label for="text">Text <abbr title="required">*</abbr></label>
		<textarea id="text" name="text" required></textarea>
	</div>

	<input type="submit" name="submit" value="Submit">

</form>