<script>
	let open = false;
	const toggleGrid = (e) => {
		open = !open;
	};
</script>

<div class="grid-wrapper">
	<div class="grid {open ? 'open' : ''}">
		<div class="item">
			<img src="icons/mascota.webp" alt="Apto para mascotas" title="Apto para mascotas" />
			<span>APTO PARA MASCOTAS</span>
		</div>
		<div class="item">
			<img src="icons/auto.webp" alt="Estacionamiento" title="Estacionamiento" />
			<span>PARKING INTERNO</span>
		</div>
		<div class="item">
			<img
				src="icons/calefaccion.webp"
				alt="Calefacción en la Cabaña"
				title="Calefacción en la Cabaña"
			/>
			<span>Calefacción en la Cabaña</span>
		</div>
		<div class="item">
			<img src="icons/wifi.webp" alt="WiFi" title="WiFi" />
			<span>WiFi</span>
		</div>
		<div class="item">
			<img src="icons/parrilla.webp" alt="Parrilla" title="Parrilla" />
			<span>Parrilla</span>
		</div>
		<div class="item">
			<img src="icons/agua.webp" alt="Agua Caliente" title="Agua Caliente" />
			<span>Agua Caliente</span>
		</div>
		<div class="item">
			<img src="icons/tele.webp" alt="Televisión" title="Televisión" />
			<span>Televisión Satelital</span>
		</div>
		<div class="item">
			<img src="icons/higiene.webp" alt="Equipamiento de Baño" title="Equipamiento de Baño" />
			<span>Equipamiento de Baño</span>
		</div>
		<div class="item">
			<img src="icons/sabanas.webp" alt="Ropa de Cama" title="Ropa de Cama" />
			<span>Ropa de Cama</span>
		</div>
		<div class="item">
			<img src="icons/patio.webp" alt="Patio en el Exterior" title="Patio en el Exterior" />
			<span>Patio en el Exterior</span>
		</div>
		<div class="item">
			<img src="icons/extintor.webp" alt="Extintor de Incendios" title="Extintor de Incendios" />
			<span>Extintor de Incendios</span>
		</div>
		<div class="item">
			<img src="icons/secador.webp" alt="Secador de Pelo" title="Secador de Pelo" />
			<span>Secador de Pelo</span>
		</div>
		<div class="item">
			<img src="icons/cocina.webp" alt="Equipamiento de Cocina" title="Equipamiento de Cocina" />
			<span>Equipamiento de Cocina</span>
		</div>
		<div class="item">
			<img src="icons/fumadores.webp" alt="Apto Fumadores" title="Apto Fumadores" />
			<span>Apto Fumadores</span>
		</div>
		<div class="item">
			<img
				src="icons/almohada.webp"
				alt="Almohadas y Frazadas extra"
				title="Almohadas y Frazadas extra"
			/>
			<span>Almohadas y Frazadas extra</span>
		</div>
		<div class="pusher" />
		<div class="item">
			<img
				src="icons/botiquin.webp"
				alt="Botiquín de Primeros Auxilios"
				title="Botiquín de Primeros Auxilios"
			/>
			<span>Botiquín de Primeros Auxilios</span>
		</div>
	</div>
	<div class="toggle-btn">
		<button class={open ? 'turnedUp' : ''} on:click={(e) => toggleGrid(e)} />
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
		height: 22rem;
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
		height: calc(44rem + 2vh);
		transition: height 0.3s var(--easing);
	}
	.toggle-btn {
		position: absolute;
		bottom: -5%;
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
		.pusher {
			display: none;
		}
	}
</style>
