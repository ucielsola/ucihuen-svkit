<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let refresh = ``;

	let animations = false;

	onMount(
		() =>
			(animations =
				window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
				window.matchMedia(`(prefers-reduced-motion: reduce)`).matches !== true)
	);
</script>

{#key refresh}
	{#if !!animations}
		<div in:fade={{ delay: 150, duration: 200 }} out:fade={{ duration: 100 }}>
			<slot />
		</div>
	{:else}
		<slot />
	{/if}
{/key}
