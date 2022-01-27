<footer>
	<div class="divider" />
	<h3 class="title">También podés encontrarnos en</h3>
	<div class="content">
		<div class="col">
			<a href="https://airbnb.com" target="_blank" rel="noopener nofollower" class="airbnb" title="Cabañas Ucihuen en AirBnB.com"
				><img src="icons/airbnb.webp" alt="Cabañas Ucihuen en AirBnB.com" /></a
			>
			<h4 class="whatsapp">o escribirnos al</h4>
			<h3 class="credits">Desarrollo</h3>
			<a href="https://ucielsola.com" target="_blank" rel="noopener nofollower"> Uciel Sola</a>
		</div>
		<div class="col">
			<a href="https://booking.com" target="_blank" rel="noopener nofollower" class="booking" title="Cabañas Ucihuen en Booking.com"
				><img src="icons/booking.webp" alt="Cabañas Ucihuen en Booking.com" /></a
			>
			<h4>
				<a href="https://wa.link/hfh2e3" target="_blank" rel="noopener nofollower" class="whatsapp"
					><img src="icons/whatsapp.webp" alt="Whatsapp logo" />+54 9 11 3158-6242</a
				>
			</h4>
			<h3 class="credits">Diseño</h3>
			<a href="https://www.behance.net/julietarodrigu14" target="_blank" rel="noopener nofollower">Julieta Rodriguez</a>
		</div>
	</div>
</footer>

<style>
	footer {
		padding-block: 1rem;
		background-color: rgba(127, 188, 171, 0.5);
	}
	.divider {
		height: 5px;
		border-radius: 5px;
		width: 99%;
		margin-inline: auto;
		margin-block-end: 1rem;
		background: var(--gradient);
	}

	.content {
		padding-inline: var(--padding-inline);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.title {
		font-size: 1.1rem;
		padding-inline: var(--padding-inline);
		padding-block: 0.5rem;
	}

	a {
		text-decoration: none;
		color: #000;
		font-weight: 300;
	}

	.airbnb,
	.booking {
		display: inline-block;
		margin-bottom: 0.3rem;
	}
	.whatsapp {
		display: flex;
		align-items: center;
		font-size: 1rem;
		font-weight: 300;
	}
	.whatsapp img {
		padding-right: 0.3rem;
	}
	.credits {
		display: block;
		padding-top: 0.5rem;
	}
</style>
