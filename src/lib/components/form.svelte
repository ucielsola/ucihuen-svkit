<script>
	let email;
</script>

<form action="https://api.staticforms.xyz/submit" method="post">
	<input type="hidden" name="accessKey" value="e88d957a-8d40-4776-bde4-1453632cbc60" />
	<label for="name">Nombre</label>
	<input type="text" name="name" />
	<label for="subject">Asunto</label>
	<input type="text" name="subject" />
	<label for="email">Mail</label>
	<input type="text" name="email" bind:value={email} />
	<label for="phone">Tel</label>
	<input type="number" name="phone" />
	<input type="date" />
	<label for="message">Mensaje</label>
	<textarea name="message" />
	<input type="hidden" name="replyTo" bind:value={email} />
	<input type="hidden" name="redirectTo" value="https://ucihuen.vercel.app/gracias" />
	<input type="submit" value="Submit" />
</form>
