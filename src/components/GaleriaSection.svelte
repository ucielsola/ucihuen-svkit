<script lang="ts">
	import SliderGaleria from './SliderGaleria.svelte';
	import ModalImg from './ModalImg.svelte';
	import { createModal, ModalType } from './modal-state.svelte';
	import { getMessages } from '$lib/messages';

	let { sections, locale = 'es' } = $props();
	const m = getMessages(locale);

	const modal = createModal();

	let modalSrc = $state();
	let imgAlt = $state('Cabañas Ucihuen');

	function openModal() {
		modal.open(ModalType.IMAGE, { src: modalSrc, alt: imgAlt });
	}
</script>

{#each sections as sec, i}
	<article id={sec.id}>
		<h2>{sec.heading}</h2>
		<h3>{sec.subtitle}</h3>
		<div class="container" class:last={i === sections.length - 1}>
			<SliderGaleria
				items={sec.slides}
				type="slide"
				delay={sec.delay}
				sendClick={openModal}
				bind:modalSrc
				bind:imgAlt
			/>
		</div>
	</article>
{/each}

{#if modal.isOpen && modal.type === ModalType.IMAGE}
	<ModalImg
		isOpen={true}
		src={modal.props.src}
		alt={modal.props.alt}
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
	h2 {
		padding-block-end: 0.5rem;
		text-align: center;
		color: var(--base-color);
		padding-inline: var(--padding-inline);
	}

	h3 {
		padding-inline: var(--padding-inline);
		font-size: var(--text-sm);
		letter-spacing: var(--tracking-tight);
		color: var(--primary-color);
		text-transform: uppercase;
	}

	.container {
		margin-block-end: 1.5rem;
	}

	.last {
		margin-block-end: 6rem;
	}

	.backdrop {
		z-index: var(--z-modal);
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: var(--backdrop);
	}

	@media screen and (min-width: 1024px) {
		h2 {
			text-align: start;
			padding-inline-start: 3rem;
		}

		h3 {
			font-size: var(--text-lg);
			padding-inline-start: 3rem;
			padding-block-end: 1rem;
		}
	}
</style>
