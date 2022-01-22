<footer>
	<div class="divider" />
	<h3 class="title">También podés encontrarnos en</h3>
	<div class="content">
		<div class="col">
			<a href="airbnb.com" class="airbnb" title="Cabañas Ucihuen en AirBnB.com"
				><img src="icons/airbnb.webp" alt="Cabañas Ucihuen en AirBnB.com" /></a
			>
			<h4 class="whatsapp">o escribirnos al</h4>
			<h3 class="credits">Desarrollo</h3>
			<a href="https://ucielsola.com">Uciel Sola</a>
		</div>
		<div class="col">
			<a href="booking.com" class="booking" title="Cabañas Ucihuen en Booking.com"
				><img src="icons/booking.webp" alt="Cabañas Ucihuen en Booking.com" /></a
			>
			<h4>
				<a href="https://wa.link/hfh2e3" class="whatsapp"
					><img src="icons/whatsapp.webp" alt="Whatsapp logo" />+54 9 11 3158-6242</a
				>
			</h4>
			<h3 class="credits">Diseño</h3>
			<a href="google.com">Julieta Rodriguez</a>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: rgba(127, 188, 171, 0.5);
		padding-block: 5rem;
	}
	.divider {
		height: 5px;
		border-radius: 5px;
		width: 99%;
		margin-inline: auto;
		margin-block-start: 0.5rem;
		margin-block-end: 1rem;
		background: var(--gradient);
	}
	.content,
	.title {
		padding-inline: var(--padding-inline);
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	a {
		text-decoration: none;
		color: #000;
	}

	.airbnb,
	.booking {
		display: inline-block;
		margin-bottom: 0.3rem;
	}
	.whatsapp {
		display: flex;
		align-items: center;
	}
	.whatsapp img {
		padding-right: 0.3rem;
	}
	.credits {
		display: block;
		padding-top: 0.5rem;
	}
</style>
