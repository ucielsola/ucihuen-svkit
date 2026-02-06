<script>
	import * as m from '$lib/paraglide/messages.js';
	let open = $state(false);
	const toggleGrid = (e) => {
		open = !open;
	};
</script>

<div class="grid-wrapper">
	<div class="grid {open ? 'open' : ''}">
		<div class="item">
			<img src="icons/mascota.webp" alt={m.amenity_pets()} title={m.amenity_pets()} />
			<span>{m.amenity_pets()}</span>
		</div>
		<div class="item">
			<img src="icons/auto.webp" alt={m.amenity_parking()} title={m.amenity_parking()} />
			<span>{m.amenity_parking()}</span>
		</div>
		<div class="item">
			<img src="icons/calefaccion.webp" alt={m.amenity_heating()} title={m.amenity_heating()} />
			<span>{m.amenity_heating()}</span>
		</div>
		<div class="item">
			<img src="icons/wifi.webp" alt={m.amenity_wifi()} title={m.amenity_wifi()} />
			<span>{m.amenity_wifi()}</span>
		</div>
		<div class="item">
			<img src="icons/parrilla.webp" alt={m.amenity_grill()} title={m.amenity_grill()} />
			<span>{m.amenity_grill()}</span>
		</div>
		<div class="item">
			<img src="icons/agua.webp" alt={m.amenity_hot_water()} title={m.amenity_hot_water()} />
			<span>{m.amenity_hot_water()}</span>
		</div>
		<div class="item">
			<img src="icons/tele.webp" alt={m.amenity_tv()} title={m.amenity_tv()} />
			<span>{m.amenity_tv()}</span>
		</div>
		<div class="item">
			<img
				src="icons/higiene.webp"
				alt={m.amenity_bathroom_kit()}
				title={m.amenity_bathroom_kit()}
			/>
			<span>{m.amenity_bathroom_kit()}</span>
		</div>
		<div class="item">
			<img src="icons/sabanas.webp" alt={m.amenity_bedding()} title={m.amenity_bedding()} />
			<span>{m.amenity_bedding()}</span>
		</div>
		<div class="item">
			<img src="icons/patio.webp" alt={m.amenity_patio()} title={m.amenity_patio()} />
			<span>{m.amenity_patio()}</span>
		</div>
		<div class="item">
			<img
				src="icons/extintor.webp"
				alt={m.amenity_fire_extinguisher()}
				title={m.amenity_fire_extinguisher()}
			/>
			<span>{m.amenity_fire_extinguisher()}</span>
		</div>
		<div class="item">
			<img
				src="icons/secador.webp"
				alt={m.amenity_hair_dryer()}
				title={m.amenity_hair_dryer()}
			/>
			<span>{m.amenity_hair_dryer()}</span>
		</div>
		<div class="item">
			<img
				src="icons/cocina.webp"
				alt={m.amenity_kitchen_kit()}
				title={m.amenity_kitchen_kit()}
			/>
			<span>{m.amenity_kitchen_kit()}</span>
		</div>
		<div class="item">
			<img src="icons/fumadores.webp" alt={m.amenity_smoking()} title={m.amenity_smoking()} />
			<span>{m.amenity_smoking()}</span>
		</div>
		<div class="item">
			<img
				src="icons/almohada.webp"
				alt={m.amenity_extra_pillows()}
				title={m.amenity_extra_pillows()}
			/>
			<span>{m.amenity_extra_pillows()}</span>
		</div>
		<div class="pusher"></div>
		<div class="item">
			<img
				src="icons/botiquin.webp"
				alt={m.amenity_first_aid()}
				title={m.amenity_first_aid()}
			/>
			<span>{m.amenity_first_aid()}</span>
		</div>
	</div>
	<div class="toggle-btn">
		<button
			class={open ? 'turnedUp' : ''}
			onclick={(e) => toggleGrid(e)}
			aria-expanded={open}
			aria-label={open ? m.aria_show_less() : m.aria_show_more()}
		></button>
	</div>
</div>

<style>
	.grid-wrapper {
		position: relative;
	}
	.grid {
		position: relative;
		overflow: hidden;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		place-content: start;
		width: 100%;
		height: 20rem;
		padding-block: 1rem;
		background: linear-gradient(
			168.18deg,
			rgba(127, 188, 171, 0.25) 0.49%,
			rgba(251, 192, 93, 0.25) 63.68%,
			rgba(251, 192, 93, 0.25)
		);
		border-radius: 15px;
		box-shadow: var(--shadow);
		transition: height 0.3s var(--easing);
	}
	.grid.open {
		height: calc(40rem + 2vh);
		transition: height 0.3s var(--easing);
	}
	.toggle-btn {
		position: absolute;
		bottom: -2rem;
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
