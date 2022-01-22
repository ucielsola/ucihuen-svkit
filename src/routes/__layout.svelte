<script context="module">
	export const load = async ({ url }) => ({
		props: {
			key: url
		}
	});
</script>

<script>
	import PageTransition from '$lib/components/PageTransitions.svelte';
	import { fade } from 'svelte/transition';

	export let key;

	import { Modals, closeModal, openModal } from 'svelte-modals';

	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Fab from '$lib/components/fab.svelte';
	import Nav from '$lib/components/nav.svelte';

	import { onMount } from 'svelte';
	import { getWindowHeight, getFooterHeight } from '$lib/store.js';

	let docHeight;
	let winHeight;
	let footerHeight;
	let scrolled;
	let scrolledPercentage;
	let scrollingUp;
	let ready = false;

	let formPage = false;

	onMount(() => {
		ready = true;
	});

	const setFabOffset = (height) => {
		docHeight = height;

		getWindowHeight.subscribe((value) => {
			winHeight = value;
		});

		getFooterHeight.subscribe((value) => {
			footerHeight = value + 'px';
		});

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
	$: if (key && ready) {
		console.log(formPage);
		setTimeout(() => {
			let height = document.querySelector('#svelte').clientHeight;
			// alert(`'test doc height mobile', '${height}'`);
			setFabOffset(height);
		}, 300);
	}
	$: key.pathname === '/reservas' ? (formPage = true) : (formPage = false);
</script>

<svelte:window bind:scrollY={scrolled} />

<Header {formPage} />
<div class="nav-container">
	<Nav {formPage} />
</div>
<PageTransition refresh={key}>
	<main class={formPage ? 'form-page' : ''}>
		<Modals>
			<div slot="backdrop" class="backdrop" transition:fade on:click={closeModal} />
		</Modals>
		<Fab --footer-height={footerHeight} {scrolledPercentage} {scrollingUp} {formPage} path={key.pathname}/>
		<slot />
	</main>
</PageTransition>
<Footer />

<style>
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

	main.form-page {
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}

	.nav-container {
		width: 100%;
		margin-inline: auto;
		margin-block-start: 1rem;
	}
</style>
