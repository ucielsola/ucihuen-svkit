<script>
	import * as m from '$lib/paraglide/messages.js';
	import { AIRBNB_URL, BOOKING_URL, PHONE } from '$lib/config.js';
	import { Copy, Check } from 'lucide-svelte';

	let copied = $state(false);

	async function copyPhone() {
		try {
			await navigator.clipboard.writeText(PHONE);
		} catch {
			const ta = document.createElement('textarea');
			ta.value = PHONE;
			ta.style.position = 'fixed';
			ta.style.opacity = '0';
			document.body.appendChild(ta);
			ta.focus();
			ta.select();
			document.execCommand('copy');
			document.body.removeChild(ta);
		}
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<footer>
	<div class="divider"></div>
	<p class="title">{m.footer_find_us()}</p>
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
		<div class="phone">
			<span>{m.footer_write_us()}</span>
			<span class="copy-wrapper">
				<button class="copy-btn" onclick={copyPhone} aria-label="Copy phone number">
					<span class="phone-number">{PHONE}</span>
					{#if copied}
						<Check size={16} />
					{:else}
						<Copy size={16} />
					{/if}
				</button>
				{#if copied}
					<span class="tooltip" role="status">{m.footer_copied()}</span>
				{/if}
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
		gap: 0.5rem;
	}

	a {
		text-decoration: none;
		color: #000;
		font-weight: 300;
	}

	.links {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.phone {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		font-size: 1rem;
		font-weight: 300;
	}

	.copy-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		background: none;
		border: 1px solid transparent;
		border-radius: 6px;
		padding: 0.25rem 0.5rem;
		cursor: pointer;
		font: inherit;
		font-weight: 300;
		color: inherit;
		transition: border-color 0.2s;
	}

	.copy-btn:hover {
		border-color: currentColor;
	}

	.copy-wrapper {
		position: relative;
	}

	.tooltip {
		position: absolute;
		bottom: calc(100% + 0.4rem);
		left: 50%;
		transform: translateX(-50%);
		background: #000;
		color: #fff;
		font-family: var(--text-font);
		font-size: 0.75rem;
		padding: 0.3rem 0.6rem;
		border-radius: 6px;
		white-space: nowrap;
		pointer-events: none;
		animation: tooltip-in 0.3s ease;
	}

	@keyframes tooltip-in {
		from {
			opacity: 0;
			transform: translateX(-50%) translateY(0.25rem);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) translateY(0);
		}
	}

	@media (min-width: 1024px) {
		.divider {
			width: 99.8%;
		}

		.content {
			flex-direction: row;
			justify-content: space-between;
		}

		.links {
			flex-direction: row;
			gap: 1rem;
		}

		.airbnb,
		.booking,
		.phone {
			padding-inline: 1rem;
		}
	}
</style>
