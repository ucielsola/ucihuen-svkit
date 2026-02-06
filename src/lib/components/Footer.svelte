<script>
	import * as m from '$lib/paraglide/messages.js';
	import { WHATSAPP_URL, AIRBNB_URL, BOOKING_URL, PHONE } from '$lib/config.js';
</script>

<footer>
	<div class="divider"></div>
	<h3 class="title">{m.footer_find_us()}</h3>
	<div class="content">
		<div class="links">
			<a
				href={AIRBNB_URL}
				target="_blank"
				rel="noopener nofollow"
				class="airbnb"
				title="Cabañas Ucihuen en AirBnB.com"
				><img src="icons/airbnb.webp" alt="Cabañas Ucihuen en AirBnB.com" /></a
			>
			<a
				href={BOOKING_URL}
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
				<a href={WHATSAPP_URL} target="_blank" rel="noopener nofollow"
					><img src="icons/whatsapp.webp" alt="Whatsapp logo" class="wa-logo" />{PHONE}</a
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
