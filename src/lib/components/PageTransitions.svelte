<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let { refresh = ``, children } = $props();

	let animations = $state(false);

	onMount(
		() =>
			(animations =
				window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
				window.matchMedia(`(prefers-reduced-motion: reduce)`).matches !== true)
	);
</script>

{#key refresh}
	{#if !!animations}
		<div in:fade|global={{ delay: 150, duration: 200 }} out:fade|global={{ duration: 100 }}>
			{@render children?.()}
		</div>
	{:else}
		{@render children?.()}
	{/if}
{/key}
