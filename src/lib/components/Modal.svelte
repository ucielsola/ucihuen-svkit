<script lang="ts">
	import { getModal, ModalType } from '$lib/stores/modal.svelte';
	import ModalImg from '$lib/components/ModalImg.svelte';
	import * as m from '$lib/paraglide/messages';

	const modal = getModal();
</script>

{#snippet imageModal(props: { src: string; alt: string })}
	<ModalImg isOpen={true} src={props.src} alt={props.alt} />
{/snippet}

{#if modal.isOpen && modal.type === ModalType.IMAGE}
	{@render imageModal(modal.props as { src: string; alt: string })}
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
