<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="h-dvh w-dvw overflow-hidden bg-base">
	{@render children()}
</div>
