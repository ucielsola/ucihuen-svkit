<script>
	import * as m from '$lib/paraglide/messages.js';
	let open = $state(false);
	const toggleGrid = () => {
		open = !open;
	};

	const amenities = [
		{ icon: 'mascota', label: m.amenity_pets },
		{ icon: 'auto', label: m.amenity_parking },
		{ icon: 'calefaccion', label: m.amenity_heating },
		{ icon: 'wifi', label: m.amenity_wifi },
		{ icon: 'parrilla', label: m.amenity_grill },
		{ icon: 'agua', label: m.amenity_hot_water },
		{ icon: 'tele', label: m.amenity_tv },
		{ icon: 'higiene', label: m.amenity_bathroom_kit },
		{ icon: 'sabanas', label: m.amenity_bedding },
		{ icon: 'patio', label: m.amenity_patio },
		{ icon: 'extintor', label: m.amenity_fire_extinguisher },
		{ icon: 'secador', label: m.amenity_hair_dryer },
		{ icon: 'cocina', label: m.amenity_kitchen_kit },
		{ icon: 'fumadores', label: m.amenity_smoking },
		{ icon: 'almohada', label: m.amenity_extra_pillows },
		{ icon: 'botiquin', label: m.amenity_first_aid }
	];
</script>

<div class="grid-wrapper">
	<div class="grid {open ? 'open' : ''}">
		{#each amenities as item, i}
			{#if i === amenities.length - 1}
				<div class="pusher"></div>
			{/if}
			<div class="item">
				<img src="/icons/{item.icon}.webp" alt={item.label()} title={item.label()} />
				<span>{item.label()}</span>
			</div>
		{/each}
	</div>
	<div class="toggle-btn">
		<button
			class={open ? 'turnedUp' : ''}
			onclick={toggleGrid}
			aria-expanded={open}
			aria-label={open ? m.aria_show_less() : m.aria_show_more()}
		></button>
	</div>
</div>

<style>
	.grid-wrapper {
		--toggle-offset: -2rem;
		position: relative;
	}
	.grid {
		position: relative;
		overflow: hidden;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		place-content: start;
		width: 100%;
		max-height: 20rem;
		padding-block: 1rem;
		background: linear-gradient(
			168.18deg,
			var(--accent-teal-light) 0.49%,
			var(--accent-gold-light) 63.68%,
			var(--accent-gold-light)
		);
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow);
		transition: height 0.3s var(--easing);
	}
	.grid.open {
		max-height: calc(40rem + 2vh);
		transition: max-height 0.3s var(--easing);
	}
	.toggle-btn {
		position: absolute;
		bottom: var(--toggle-offset);
		width: 100%;
		display: grid;
		place-content: center;
	}

	.toggle-btn button {
		width: 3.5rem;
		height: 3.5rem;
		border: none;
		background-color: transparent;
		background-image: var(--toggle-chevron);
		transition: transform 0.3s var(--easing);
	}
	.toggle-btn button.turnedUp {
		transition: transform 0.3s var(--easing);
		transform: rotate(180deg);
	}

	.item {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding-block: 0.5rem;
	}

	img {
		width: 3rem;
		height: 3rem;
	}
	span {
		font-size: 0.8rem;
		width: 90%;
		text-align: center;
		text-transform: uppercase;
	}

	@media screen and (min-width: 1024px) {
		.pusher,
		.toggle-btn {
			display: none;
		}

		.grid {
			height: min-content;
			grid-template-columns: repeat(4, 1fr);
		}

		img {
			width: 4.5rem;
			height: 4.5rem;
		}
		span {
			font-size: 1rem;
		}
	}
</style>
