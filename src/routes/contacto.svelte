<script>
	import Form from '$lib/components/form.svelte';
</script>

<svelte:head>
	<title>Contacto - Cabañas Ucihuen</title>
	<meta property="og:title" content="Contacto - Cabañas Ucihuen" />
</svelte:head>

<section>
	<Form />
</section>

<style>
	section {
		padding-inline: 0;
	}
	@media screen and (min-width: 1024px) {
		section {
			margin-block-start: 3rem;
			padding-inline: var(--padding-inline);
		}
	}
</style>
