<script>
	export let scrolledPercentage = 0;
	export let winWidth;
	export let scrollingUp;

	let active = false;
	const toggleActive = () => {
		console.log(width);
		active = !active;
	};
</script>

<a href="/reservas" class={scrolledPercentage > 95 && !scrollingUp ? 'pushed-up' : ''}
	><div class="wrapper {active ? 'active' : ''}">
		{#if winWidth > 1024}
			<button on:mousedown={toggleActive} on:mouseup={toggleActive}>CONSULTAR RESERVA</button>
		{:else}
			<button on:touchstart={toggleActive} on:touchend={toggleActive}>CONSULTAR RESERVA</button>
		{/if}
	</div>
</a>

<style>
	a {
		z-index: 1;
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
		transition: all 0.35s var(--easing) 1s;
		background: linear-gradient(180deg, #e2504c 0%, #fbc05d 100%);
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
		color: #fff;
		transition: all 0.35s var(--easing) 1s;
	}

	button:active {
		opacity: 1;
		background-color: #fff;
		color: var(--primary-color);
		transition: all 0.35s var(--easing);
	}

	@media (hover: hover) {
		.wrapper:hover {
			opacity: 1;
			transition: all 0.35s var(--easing);
		}
	}
</style>
