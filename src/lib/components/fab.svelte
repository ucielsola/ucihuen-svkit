<script>
	export let percentage = 0;
</script>

<a href="/reservas" class={percentage > 85 ? 'pushed-up' : ''}><button>CONSULTAR RESERVA</button></a
>

<style>
	a {
		transition: margin-bottom 0.5s var(--easing);
	}
	a.pushed-up {
		margin-bottom: var(--footer-height);
		transition: margin-bottom 0.5s var(--easing);
	}
</style>
