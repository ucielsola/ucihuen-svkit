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

	import { goto } from '$app/navigation';

	function backToStart() {
		closeModal();
		goto(`/`, true);
	}

	import { getWindowWidth } from '$lib/store.js';

	let winWidth;

	onMount(() => {
		ready = true;

		getWindowWidth.subscribe((value) => {
			winWidth = value;
		});
	});

	import { Modals, closeModal, openModal } from 'svelte-modals';

	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Fab from '$lib/components/fab.svelte';
	import Nav from '$lib/components/nav.svelte';

	import { onMount } from 'svelte';
	import { getWindowHeight, getFooterHeight } from '$lib/store.js';
	import FabWhatsapp from '$lib/components/fabWhatsapp.svelte';

	let docHeight;
	let winHeight;
	let footerHeight;
	let scrolled;
	let scrolledPercentage;
	let scrollingUp;
	let ready = false;

	let formPage = false;

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
		setTimeout(() => {
			let height = document.querySelector('#svelte').clientHeight;
			// alert(`'test doc height mobile', '${height}'`);
			setFabOffset(height);
		}, 300);
	}
	$: key.pathname === '/contacto' ? (formPage = true) : (formPage = false);
</script>

<svelte:window bind:scrollY={scrolled} />

<Modals>
	<div slot="backdrop" class="backdrop" on:click={closeModal} />
</Modals>

<Header {formPage} />
<div class="nav-container">
	<Nav {formPage} />
</div>
<PageTransition refresh={key}>
	<main class={formPage && winWidth < 1024 ? 'form-page' : ''}>
		<!-- <Fab
			--footer-height={footerHeight}
			{scrolledPercentage}
			{scrollingUp}
			{formPage}
			path={key.pathname}
		/> -->
		<slot />
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

	main.form-page {
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		padding-block-end: 1rem;
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
