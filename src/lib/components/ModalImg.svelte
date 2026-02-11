<script>
	import { scale } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	import { modals } from 'svelte-modals';
	import * as m from '$lib/paraglide/messages.js';

	let { isOpen, src, alt = 'Cabañas Ucihuen' } = $props();

	function handleKeydown(e) {
		if (e.key === 'Escape') {
			modals.close();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<div class="modal">
		<div class="contents">
			<button class="close-btn" onclick={() => modals.close()} aria-label={m.aria_close_image()}>
				&times;
			</button>
			<img
				{src}
				{alt}
				sizes="95vw"
				in:scale|global={{ delay: 250, duration: 300, easing: expoInOut }}
				out:scale|global={{ delay: 50, duration: 300, easing: expoInOut }}
			/>
		</div>
	</div>
{/if}

<style>
	.modal {
		z-index: var(--z-modal);
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		/* allow click-through to backdrop */
		pointer-events: none;
	}

	.contents {
		--close-offset-top: -2.5rem;
		--close-offset-right: -0.5rem;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		pointer-events: auto;
	}

	.close-btn {
		position: absolute;
		top: var(--close-offset-top);
		right: var(--close-offset-right);
		background: none;
		border: none;
		color: var(--text-color-light);
		font-size: 2rem;
		cursor: pointer;
		line-height: 1;
		padding: 0.25rem 0.5rem;
	}
	.close-btn:focus-visible {
		outline: 3px solid var(--secondary-color);
		outline-offset: 2px;
		border-radius: var(--radius-sm);
	}

	img {
		max-width: 75vw;
		max-height: 75vh;
		object-fit: contain;
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow);
	}

	@media (min-width: 1024px) {
		img {
			max-width: 85vw;
			max-height: 85vh;
		}
	}
</style>
