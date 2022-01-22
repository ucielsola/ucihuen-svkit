<script>
	export let percentage = 0;
</script>

<a href="/reservas" class={percentage > 85 ? 'pushed-up' : ''}
	><div class="wrapper">
		<button>CONSULTAR RESERVA</button>
	</div>
</a>

<style>
	a {
		transition: margin-bottom 0.5s var(--easing);
	}
	a.pushed-up {
		margin-bottom: var(--footer-height);
		transition: margin-bottom 0.5s var(--easing);
	}
	.wrapper {
		background: #00000000;
		border-radius: 10px;
		padding: 3px;
		transition: all 0.35s var(--easing);
		background: linear-gradient(180deg, #e2504c 0%, #fbc05d 100%);
	}

	button {
		opacity: 0.8;
		background-color: #ffffff00;
		padding-block: 1rem;
		width: 75vw;
		max-width: 15rem;
		border: none;
		border-radius: 10px;
		color: #fff;
		transition: all 0.35s var(--easing);
	}

	button:active {
		opacity: 1;
		background-color: #fff;
		color: var(--primary-color);
		transition: all 0.35s var(--easing);
	}

	@media (hover: hover) {
		button:hover {
			opacity: 1;
			transition: all 0.35s var(--easing);
		}
	}
</style>
