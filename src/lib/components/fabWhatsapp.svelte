<script>
	import { onMount } from 'svelte';

	export let scrolledPercentage = 0;
	export let scrollingUp;
	export let path;

	let limit = path === '/' ? 95 : 75;

	let windowWidth;
</script>

<a
	href="https://wa.link/hfh2e3"
	target="_blank"
	rel="noopener nofollower"
	class="button-wrapper {scrolledPercentage > limit && !scrollingUp ? 'pushed-up' : ''}"
>
	<img
		src="/images/whatsapp.png"
		alt="Whatsapp logo"
		class="wa-logo"
		title="contactanos por Whatsapp"
	/>
</a>

<style>
	.button-wrapper {
		z-index: 300;
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 4rem;
		filter: drop-shadow(var(--shadow));
		transition: all 0.2s var(--easing);
	}

	.button-wrapper:active {
		transform: scale(1.1);
		transition: all 0.2s var(--easing);
	}

	a.pushed-up {
		bottom: var(--footer-height);
		transition: all 0.5s var(--easing);
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
