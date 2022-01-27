<script>
	import { getWindowWidth } from '$lib/store.js';
	import { onMount } from 'svelte';

	import { openModal } from 'svelte-modals';
	import Modal from '$lib/components/modal.svelte';

	let winWidth;

	onMount(() => {
		getWindowWidth.subscribe((value) => {
			winWidth = value;
		});
	});

	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';

	let email;
	let name;
	let phone;
	let message;
	let pax = 1;
	let estadia;

	let upDisabled = pax === 9 && true;
	let downDisabled = pax === 1 && true;

	function updatePax(event, action) {
		event.preventDefault();

		action === 'up' ? (pax = pax + 1) : null;
		action === 'down' ? (pax = pax - 1) : null;

		upDisabled = pax === 9 && true;
		downDisabled = pax === 1 && true;
	}

	let minDate =
		new Date().getMonth() > 8
			? `1-11-${new Date().getFullYear()}`
			: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;

	const flatpickrOptionsRange = {
		mode: 'range',
		minDate: minDate,
		maxDate: `31-12-${new Date().getFullYear()}`,
		enableTime: false,
		dateFormat: 'd-m-Y',
		closeOnSelect: false,
		inline: true
	};

	function dateChange(event) {
		estadia = event.detail[1];
		console.log('cambio fechas', estadia);
	}

	function formSubmit() {
		fetch('https://formsubmit.co/ajax/fba698ad0f2c5fcb4a515ce48be34a54', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				Nombre: name,
				eMail: email,
				Tel: phone,
				Pasajeros: pax,
				Fechas: estadia,
				Mensaje: message
			})
		})
			.then((response) => response.json())
			.then((data) => {
				openModal(Modal, { name });
			})
			.catch((error) => console.log(error));
	}
</script>

<form class={winWidth < 1024 ? 'mobile' : ''} on:submit|preventDefault={formSubmit}>
	<input type="text" name="_honey" style="display:none" />
	<input type="hidden" name="_captcha" value="false" />
	<input type="hidden" name="_template" value="box" />
	<input type="hidden" name="_subject" value="Nueva consulta! Ucihuen.com.ar" />

	<!-- form elements -->

	<div class="form-group datepicker">
		<h3>Estadía</h3>
		<h4>Seleccione el rango de fechas</h4>
		<Flatpickr
			name="estadia"
			options={flatpickrOptionsRange}
			class="form-control datepicker bg-white"
			placeholder="Seleccionar estadía"
			on:change={(event) => dateChange(event)}
		/>
	</div>

	<div class="form-group col">
		<div>
			<h3>Pasajeros</h3>
			<h4>Seleccione cantidad</h4>
		</div>
		<div class="pax-wrapper">
			<button
				class="decrease"
				on:click={(event) => updatePax(event, 'down')}
				disabled={downDisabled ? 'disabled' : ''}><span class="arrow">&lsaquo;</span></button
			>
			<span class="number">{pax}</span>
			<button
				class="increase"
				on:click={(event) => updatePax(event, 'up')}
				disabled={upDisabled ? 'disabled' : ''}><span class="arrow">&rsaquo;</span></button
			>
		</div>
	</div>

	<div class="form-group">
		<label for="name">Nombre</label>
		<input type="text" name="name" bind:value={name} required />
	</div>
	<div class="form-group">
		<label for="email">Email</label>
		<input type="email" name="email" bind:value={email} required />
	</div>
	<div class="form-group">
		<label for="phone">Teléfono</label>
		<input type="phone" name="phone" bind:value={phone} />
	</div>
	<div class="form-group">
		<label for="message">Mensaje <span class="opcional">(opcional)</span></label>
		<textarea type="text" name="message" bind:value={message} />
	</div>
	<div class="submit-container">
		<div class="submit-border">
			<input class="submit-btn " type="submit" value="ENVIAR CONSULTA" />
		</div>
	</div>
</form>

<div class="back-btn-container {winWidth > 1024 ? 'hidden' : ''}">
	<div class="back-border">
		<a href="/" class="back-btn">VOLVER</a>
	</div>
</div>

<style>
	form {
		padding-top: 0.7rem;
		background-color: #fff;
	}
	form.mobile {
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		margin-top: -4rem;
	}
	.form-group {
		padding-inline: var(--padding-inline);
		display: flex;
		flex-direction: column;

		margin-block-end: 2rem;
	}

	.form-group.col {
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
	}

	.form-group.datepicker {
		padding-inline: 0;
		display: grid;
		place-content: center;
	}

	.form-group.datepicker h3,
	.form-group.datepicker h4 {
		padding-inline: 0.5rem;
	}

	.form-group.col h4 {
		font-size: 1rem;
		font-weight: 300;
	}

	.pax-wrapper {
		display: flex;
		font-size: 2rem;
		background-color: var(--highlight-color);
		width: min-content;
		border-top-left-radius: 45%;
		border-bottom-left-radius: 45%;
		border-top-right-radius: 45%;
		border-bottom-right-radius: 45%;
		box-shadow: var(--shadow);
	}

	.decrease,
	.increase,
	.number {
		display: grid;
		place-content: center;
		background-color: var(--highlight-color);
		border: none;
		margin: 0;
		color: white;
		height: 2.5rem;
		transition: all 0.35s var(--easing);
	}
	.decrease {
		border-top-left-radius: 45%;
		border-bottom-left-radius: 45%;
		padding-inline-start: 1.5rem;
		padding-inline-end: 1rem;
	}
	.increase {
		padding-inline-end: 1.5rem;
		padding-inline-start: 1rem;
		border-top-right-radius: 45%;
		border-bottom-right-radius: 45%;
	}
	.number {
		font-size: 1.5rem;
		padding-inline: 0.5rem;
		text-align: center;
	}
	.arrow {
		margin-top: -0.3rem;
	}

	.decrease:active,
	.increase:active,
	.decrease:disabled,
	.increase:disabled {
		background-color: var(--highlight-color-dim);
		transition: all 0.35s var(--easing);
	}

	input,
	textarea {
		padding: 0.5rem;
		border-radius: 15px;
		border: none;
		box-shadow: inset 0px 0px 14px -3px rgb(0 0 0 / 40%), var(--shadow);
	}
	textarea {
		height: 4rem;
		height: 10rem;
		padding: 0.5rem;
	}
	label {
		font-weight: 600;
	}
	label .opcional {
		font-weight: 300;
	}
	.submit-container,
	.back-btn-container {
		display: grid;
		place-content: center;
		margin-block-end: 2rem;
	}

	.back-btn-container.hidden {
		display: none;
	}
	.submit-border,
	.back-border {
		width: min-content;
		border-radius: 10px;
		padding: 2px;
		background: linear-gradient(180deg, #e2504c 0%, #fbc05d 100%);
	}
	.submit-btn {
		border-radius: 10px;
		padding-block: 0.5rem;
		width: 75vw;
		max-width: 15rem;
		border: none;
		border-radius: 10px;
		font-size: 1.2rem;
		color: #fff;
		background: #ffffff00;
	}

	.submit-btn:active {
		background: #fff;
		color: var(--primary-color);
		transition: all 0.35s var(--easing);
	}

	.back-btn {
		display: block;
		text-align: center;
		color: var(--primary-color);
		font-weight: 600;
		text-decoration: none;
		border-radius: 5px;
		width: 10rem;
		height: min-content;
		background-color: rgb(255, 255, 255);
	}

	.back-border {
		border-radius: 8px;
		padding-inline: 3px;
		padding-block: 3px;
	}

	@media screen and (min-width: 1024px) {
		.submit-border,
		.back-border {
			background: none;
		}
		.submit-btn {
			cursor: pointer;
			text-align: center;
			background-color: var(--primary-color);
			border: none;
			box-shadow: var(--shadow);
			color: white;
			padding-block: 1rem;
			padding-inline: 1.5rem;
			border-radius: 10px;
			transition: background-color 0.35s var(--easing);
		}
		.submit-btn:active {
			background-color: var(--primary-color-dim);
			border: none;
			box-shadow: var(--shadow);
			color: white;
			padding-block: 1rem;
			padding-inline: 1.5rem;
			border-radius: 10px;
			transform: scale(0.99);
			transition: background-color 0.35s var(--easing);
		}
	}
</style>
