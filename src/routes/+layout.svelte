<script>
	import PageTransition from '$lib/components/PageTransitions.svelte';

	import { Modals, modals } from 'svelte-modals';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';

	import FabWhatsapp from '$lib/components/FabWhatsapp.svelte';
	let { data, children } = $props();
	let key = $derived(data.key);

	let docHeight = $state(0);
	let winHeight = $state(0);
	let footerHeight = $state();
	let scrolled = $state(0);
	let scrolledPercentage = $state(0);
	let scrollingUp = $state(false);
	let oldScroll = 0;

	$effect(() => {
		if (!key) return;

		let timeoutId = setTimeout(() => {
			docHeight = document.querySelector('#svelte').clientHeight;
			footerHeight = document.querySelector('footer').clientHeight + 'px';
		}, 300);

		function onScroll() {
			scrollingUp = oldScroll > scrolled;
			oldScroll = scrolled;
			if (docHeight - winHeight > 0) {
				scrolledPercentage = parseInt((scrolled / (docHeight - winHeight)) * 100);
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			clearTimeout(timeoutId);
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<svelte:window bind:scrollY={scrolled} bind:innerHeight={winHeight} />

<Modals>
	{#snippet backdrop()}
		<div
			class="backdrop"
			role="button"
			tabindex="0"
			aria-label="Cerrar"
			onclick={() => modals.close()}
			onkeydown={(e) => e.key === 'Escape' && modals.close()}
		></div>
	{/snippet}
</Modals>

<Header />
<div class="nav-container">
	<Nav />
</div>
<PageTransition refresh={key}>
	<main>
		{@render children?.()}
		<FabWhatsapp
			--footer-height={footerHeight}
			{scrolledPercentage}
			{scrollingUp}
			path={key.pathname}
		/>
	</main>
</PageTransition>
<Footer />

<style>
	.backdrop {
		z-index: 400;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
	}
	main {
		position: relative;
		padding-block-end: 4rem;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(255, 255, 255, 0.5) 90%,
			rgba(127, 188, 171, 0.5) 100%
		);
	}

	.nav-container {
		width: 100%;
		margin-block-start: 1rem;
	}

	@media screen and (min-width: 1024px) {
		main {
			padding-top: 2rem;
		}
		.nav-container {
			position: absolute;
			margin-top: -15vh;
		}
	}
</style>
