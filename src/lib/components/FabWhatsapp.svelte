<script>
	import * as m from '$lib/paraglide/messages.js';

	/**
	 * @typedef {Object} Props
	 * @property {number} [scrolledPercentage]
	 * @property {any} scrollingUp
	 * @property {any} path
	 */

	/** @type {Props} */
	let { scrolledPercentage = 0, scrollingUp, path } = $props();

	let limit = $derived(path === '/' ? 95 : 75);
</script>

<a
	href="https://wa.link/hfh2e3"
	target="_blank"
	rel="noopener nofollow"
	class="button-wrapper {scrolledPercentage > limit && !scrollingUp ? 'pushed-up' : ''}"
>
	<img
		src="/images/whatsapp.png"
		alt="Whatsapp logo"
		class="wa-logo"
		title={m.fab_whatsapp_title()}
	/>
</a>

<style>
	.button-wrapper {
		z-index: var(--z-fab);
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 4rem;
		filter: drop-shadow(var(--shadow));
		transition: transform 0.2s var(--easing);
	}

	.button-wrapper:active {
		transform: scale(1.1);
	}

	.button-wrapper:focus-visible {
		outline: 3px solid var(--secondary-color);
		outline-offset: 4px;
		border-radius: 50%;
	}

	a.pushed-up {
		bottom: var(--footer-height);
		transition: bottom 0.5s var(--easing);
	}

	.wa-logo {
		animation: shake-horizontal 0.8s cubic-bezier(0.445, 0.05, 0.55, 0.95) 2s both;
	}

	@keyframes shake-horizontal {
		0%,
		100% {
			transform: translateX(0);
		}
		10%,
		30%,
		50%,
		70% {
			transform: translateX(-10px);
		}
		20%,
		40%,
		60% {
			transform: translateX(10px);
		}
		80% {
			transform: translateX(8px);
		}
		90% {
			transform: translateX(-8px);
		}
	}

	@media (min-width: 1024px) {
		.button-wrapper:hover {
			transform: scale(1.1);
			transition: transform 0.2s var(--easing);
		}
	}
</style>
