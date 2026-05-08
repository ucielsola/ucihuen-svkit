<script lang="ts">
	import { createModal, ModalType } from './modal-state.svelte';
	import ModalImg from './ModalImg.svelte';
	import { getMessages } from '$lib/messages';

	let { locale = 'es' } = $props();
	const m = getMessages(locale);

	const modal = createModal();

	function openImage(src: string, alt: string) {
		modal.open(ModalType.IMAGE, { src, alt });
	}
</script>

{#if modal.isOpen && modal.type === ModalType.IMAGE}
	<ModalImg
		isOpen={true}
		src={modal.props.src as string}
		alt={modal.props.alt as string}
		{locale}
		onClose={() => modal.close()}
	/>
	<div
		class="backdrop"
		role="button"
		tabindex="0"
		aria-label={m['aria_close']}
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
