<script>
	import { closeModal } from 'svelte-modals';

	

	/**
	 * @typedef {Object} Props
	 * @property {any} isOpen - provided by <Modals />
	 * @property {any} name
	 */

	/** @type {Props} */
	let { isOpen, name } = $props();
</script>

{#if isOpen}
	<div role="dialog" class="modal">
		<div class="contents">
            <h2>¡Tu consulta fue enviada con éxito!</h2>
			<p>Gracias por ponerte en contacto, <span class="bold">{name}</span>!</p>
            <p>Nos comunicaremos a la brevedad.</p>
			<div class="button-border">
				<a class="button" href="/" title="Inicio" onclick={closeModal}>VOLER AL INICIO</a>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal {
		z-index: 500;
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
		min-width: 240px;
		border-radius: 6px;
		padding: 16px;
		background: var(--highlight-color);
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		pointer-events: auto;
	}

	h2 {
		text-align: center;
		font-size: 24px;
	}

	p {
		text-align: center;
		margin-top: 16px;
	}
   

	.button-border {
		border-radius: 10px;
		padding: 2px;
        margin-top: 1.5rem;
		background: linear-gradient(180deg, #e2504c 0%, #fbc05d 100%);
        box-shadow: var(--shadow);
	}
	.button {
		display: block;
		text-align: center;
		padding-inline: 1rem;
		padding-block: 0.5rem;
		border-radius: 10px;
		width: 75vw;
		max-width: 15rem;
		border: none;
		border-radius: 10px;
		font-size: 1.2rem;
		color: #fff;
		background: #ffffff00;
	}

	.button:active {
		background: #fff;
		color: var(--primary-color);
		transition: all 0.35s var(--easing);
	}
</style>
