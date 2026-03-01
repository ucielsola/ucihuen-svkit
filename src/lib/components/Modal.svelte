<script lang="ts">
	import { getModal, ModalType } from '$lib/stores/modal.svelte';
	import ModalImg from '$lib/components/ModalImg.svelte';
	import * as m from '$lib/paraglide/messages.js';

	const modal = getModal();

	const modalComponents = {
		[ModalType.IMAGE]: ModalImg
	};

	let component = $derived(modal.isOpen && modal.type ? modalComponents[modal.type] : null);
</script>

{#snippet renderComponent(Component)}
	<Component {...modal.props} isOpen={true} />
{/snippet}

{#if modal.isOpen && component}
	{@render renderComponent(component)}
	<div
		class="backdrop"
		role="button"
		tabindex="0"
		aria-label={m.aria_close()}
		onclick={() => modal.close()}
		onkeydown={(e) => e.key === 'Escape' && modal.close()}
	></div>
{/if}

<style>
	.backdrop {
		z-index: var(--z-modal);
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: var(--backdrop);
	}
</style>
