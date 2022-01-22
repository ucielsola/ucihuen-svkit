<script>
	let key = import.meta.env.VITE_API_KEY;
</script>

<form action="https://api.staticforms.xyz/submit" method="post">
	<!-- Replace with accesKey sent to your email -->
	<input type="hidden" name="accessKey" value="e88d957a-8d40-4776-bde4-1453632cbc60" />
	<!-- Required -->
	<label for="name">Nombre</label>
	<input type="text" name="name" />
	<!-- Optional -->
	<label for="subject">Asunto</label>
	<input type="text" name="subject" />
	<!-- Optional -->
	<label for="email">Mail</label>
	<input type="text" name="email" />
	<!-- Optional -->
	<label for="phone">Tel</label>
	<input type="number" name="phone" />
	<!-- Optional -->
	<label for="message">Mensaje</label>
	<textarea name="message" />
	<!-- Optional -->
	<!-- If you want replyTo to be set to specific email -->
	<input type="text" name="replyTo" value="myreplytoemail@example.com" />
	<!-- Optional -->
	<!-- Specify @ as reply to value if you want it to be customers email -->
	<input type="hidden" name="replyTo" value="@" />
	<!-- Optional -->
	<!-- If you want form to redirect to a specific url after submission -->
	<input type="hidden" name="redirectTo" value="https://ucihuen.vercel.app/gracias" />
	<!-- Optional -->
	<input type="submit" value="Submit" />
</form>
