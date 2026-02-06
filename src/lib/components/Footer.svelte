<script>
	import * as m from '$lib/paraglide/messages.js';
</script>

<footer>
	<div class="divider"></div>
	<h3 class="title">{m.footer_find_us()}</h3>
	<div class="content">
		<div class="links">
			<a
				href="https://www.airbnb.com.ar/rooms/1320462855669343724"
				target="_blank"
				rel="noopener nofollow"
				class="airbnb"
				title="Cabañas Ucihuen en AirBnB.com"
				><img src="icons/airbnb.webp" alt="Cabañas Ucihuen en AirBnB.com" /></a
			>
			<a
				href="https://www.booking.com/hotel/ar/cabana-ucihuen.es-ar.html"
				target="_blank"
				rel="noopener nofollow"
				class="booking"
				title="Cabañas Ucihuen en Booking.com"
				><img src="icons/booking.webp" alt="Cabañas Ucihuen en Booking.com" /></a
			>
		</div>
		<div class="whatsapp">
			<span>{m.footer_write_us()}</span>
			<span>
				<a href="https://wa.link/hfh2e3" target="_blank" rel="noopener nofollow"
					><img src="icons/whatsapp.webp" alt="Whatsapp logo" class="wa-logo" />+54 9 11 3158-6242</a
				>
			</span>
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

	.title {
		font-size: 1.1rem;
		padding-inline: var(--padding-inline);
		padding-block: 0.5rem;
	}

	.content {
		padding-inline: var(--padding-inline);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	a {
		text-decoration: none;
		color: #000;
		font-weight: 300;
	}

	.links {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.airbnb,
	.booking {
		display: inline-block;
		margin-block-end: 0.3rem;
	}

	.whatsapp {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		font-size: 1rem;
		font-weight: 300;
	}
	.whatsapp img {
		padding-inline-end: 0.3rem;
	}

	@media (min-width: 1024px) {
		.divider {
			width: 99.8%;
		}

		.content {
			flex-direction: row;
			align-items: center;
		}

		.links {
			width: auto;
			gap: 1rem;
		}

		.airbnb,
		.booking,
		.whatsapp {
			padding-inline: 1rem;
		}

		.wa-logo {
			display: inline-block;
			padding-inline: 1.5rem;
		}

		.whatsapp a {
			display: flex;
			align-items: center;
		}

	}
</style>
