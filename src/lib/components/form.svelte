<script>
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';
	import { current_component } from 'svelte/internal';

	let email;
	let name;
	let phone;
	let message;
	let pax;
	let dates;
	let estadiaState = false;
	let estadia;

	function dateChange(event) {
		estadiaState = true;
		estadia = event.detail[1];
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
		inline: true,

		onChange: (selectedDates, dateStr, instance) => {
			console.log('cambio fechas', estadia);
		}
	};

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
				Mensaje: message,
				Pasajeros: pax,
				Fechas: dates
			})
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	}
</script>

<form on:submit|preventDefault={formSubmit}>
	<input type="text" name="_honey" style="display:none" />
	<input type="hidden" name="_captcha" value="false" />
	<input type="hidden" name="_template" value="box" />
	<input type="hidden" name="_subject" value="Nueva consulta! Ucihuen.com.ar" />
	<div class="form-group datepicker">
		<Flatpickr
			name="estadia"
			options={flatpickrOptionsRange}
			class="form-control datepicker bg-white"
			placeholder="Seleccionar estadía"
			on:change={(event) => dateChange(event)}
		/>
	</div>

	<div class="form-group">
		<label for="name">Nombre</label>
		<input type="text" name="name" bind:value={name} />
	</div>
	<div class="form-group">
		<label for="email">Mail</label>
		<input type="email" name="email" bind:value={email} />
	</div>
	<div class="form-group">
		<label for="phone">Teléfono</label>
		<input type="phone" name="phone" bind:value={phone} />
	</div>
	<div class="form-group">
		<label for="message">Mail</label>
		<textarea type="text" name="message" bind:value={message} />
	</div>

	<input class="submit-btn "type="submit" value="Submit" />
</form>

<a href="/">VOLVER</a>

<style>
	form {
		margin-top: -4rem;
		padding-top: 4rem;
		background-color: #fff;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}
	.form-group {
		padding-inline: var(--padding-inline);
	}

	.form-group.datepicker {
		padding-inline: 0;
		display: grid;
		place-content: center;
	}
</style>
