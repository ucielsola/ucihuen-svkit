<script>
	import PageTransition from '$lib/components/PageTransitions.svelte';

	import { Modals, modals } from 'svelte-modals';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';

	import { onMount } from 'svelte';
	import FabWhatsapp from '$lib/components/FabWhatsapp.svelte';
	let { data, children } = $props();
	let key = $derived(data.key);

	let docHeight;
	let winHeight = $state(0);
	let footerHeight = $state();
	let scrolled = $state();
	let scrolledPercentage = $state();
	let scrollingUp = $state();
	let ready = $state(false);

	onMount(() => {
		ready = true;
	});

	const setFabOffset = (height) => {
		docHeight = height;

		footerHeight = document.querySelector('footer').clientHeight + 'px';

		window.addEventListener(
			'scroll',
			() => {
				let oldScroll = 0;
				scrollingUp = oldScroll > scrolled;
				oldScroll = scrolled;
				scrolledPercentage = parseInt((scrolled / (docHeight - winHeight)) * 100);
			},
			{ passive: true }
		);
	};

	// fires if url change and only on client side
	$effect(() => {
		if (key && ready) {
			setTimeout(() => {
				let height = document.querySelector('#svelte').clientHeight;
				setFabOffset(height);
			}, 300);
		}
	});
</script>

<svelte:window bind:scrollY={scrolled} bind:innerHeight={winHeight} />

<Modals>
	{#snippet backdrop()}
		<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
		<div class="backdrop" onclick={() => modals.close()}></div>
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
			opacity: 0.5;
			position: absolute;
			margin-top: -15vh;
			transition: opacity 0.2s linear 0.3s;
		}
		.nav-container:hover {
			transition: opacity 0.2s linear 0s;
			opacity: 1;
		}
	}
</style>
