<script>
	import { getWindowWidth } from '$lib/store.js';
	import { onMount } from 'svelte';

	/**
	 * @typedef {Object} Props
	 * @property {number} [scrolledPercentage]
	 * @property {any} scrollingUp
	 * @property {any} formPage
	 * @property {any} path
	 */

	/** @type {Props} */
	let {
		scrolledPercentage = 0,
		scrollingUp,
		formPage,
		path
	} = $props();

	let limit = path === '/' ? 95 : 75;

	let windowWidth = $state();

	onMount(() => {
		getWindowWidth.subscribe((value) => {
			windowWidth = value;
		});
	});

	let active = $state(false);
	const toggleActive = () => {
		active = !active;
	};
</script>

{#if !formPage && windowWidth < 1024}
	<a href="/contacto" class={scrolledPercentage > limit && !scrollingUp ? 'pushed-up' : ''}
		><div class="wrapper {active ? 'active' : ''}">
				<button ontouchstart={toggleActive} ontouchend={toggleActive}>ENVIAR CONSULTA</button>
		</div>
	</a>
{/if}

<style>
	a {
		z-index: 200;
		position: fixed;
		bottom: 1rem;
		display: grid;
		place-content: center;
		width: 100%;
		transition: bottom 0.5s var(--easing);
	}
	a.pushed-up {
		bottom: var(--footer-height);
		transition: bottom 0.5s var(--easing);
	}

	.wrapper {
		opacity: 0.8;
		background: #00000000;
		border-radius: 10px;
		padding: 3px;
		background: linear-gradient(180deg, #e2504c 0%, #fbc05d 100%);
		box-shadow: var(--shadow);
	}
	.wrapper.active {
		opacity: 1;
		transition: all 0.35s var(--easing);
	}

	button {
		background-color: #ffffff00;
		padding-block: 0.5rem;
		width: 75vw;
		max-width: 15rem;
		border: none;
		border-radius: 10px;
		font-size: 1.2rem;
		font-weight: 900;
		color: #fff;
	}

	button:active {
		background-color: #fff;
		color: var(--primary-color);
		transition: background-color 0.35s var(--easing);
	}
</style>
