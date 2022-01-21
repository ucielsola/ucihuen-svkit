<script>
	import { page} from '$app/stores';
</script>

<nav>
	<a href="/" title="Inicio"
		>Inicio<span class="underline" class:active={$page.url.pathname === '/'} /></a
	>

	<a href="/galeria" title="Galería"
		>Galería<span class="underline" class:active={$page.url.pathname === '/galeria'} /></a
	>
	<a href="/reservas" title="Reservas"
		>Reservas<span class="underline" class:active={$page.url.pathname === '/reservas'} /></a
	>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}
	a:last-of-type {
		display: none;
	}
	a {
		display: inline-block;
		color: #000;
		text-decoration: none;
		font-family: var(--sections-font);
	}

	.underline {
		position: relative;
		display: flex;
        align-items: center;
		background-color: #000;
		width: 150%;
		height: 2px;
		margin-left: -25%;
	}
	.underline.active::after {
		position: absolute;
		display: block;
		content: '';
		width: 50%;
		height: 0.5rem;
		background: linear-gradient(90deg, rgba(251,192,93,1) 0%, rgba(226,80,76,1) 100%);
		margin-left: 25%;
        border-radius: 5px;
	}
</style>
