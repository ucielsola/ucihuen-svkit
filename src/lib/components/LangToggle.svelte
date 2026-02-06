<script>
	import { page } from '$app/state';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime.js';

	const locales = [
		{ code: 'es', flag: '/icons/ar.svg', label: 'Español' },
		{ code: 'en', flag: '/icons/uk.svg', label: 'English' },
		{ code: 'pt', flag: '/icons/br.svg', label: 'Português' }
	];

	let open = $state(false);
	let currentCode = $derived(getLocale());
	let others = $derived(locales.filter((l) => l.code !== currentCode));

	function hrefFor(code) {
		return localizeHref(page.url.pathname + page.url.search + page.url.hash, { locale: code });
	}

	/** @param {MouseEvent} e */
	function handleClickOutside(e) {
		if (!(/** @type {HTMLElement} */ (e.target).closest('.lang-toggle'))) {
			open = false;
		}
	}

	/** @param {KeyboardEvent} e */
	function handleKeydown(e) {
		if (e.key === 'Escape') open = false;
	}

	$effect(() => {
		if (open) {
			document.addEventListener('click', handleClickOutside, true);
			document.addEventListener('keydown', handleKeydown);
		}
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<div class="lang-toggle">
	<button
		class="trigger"
		onclick={() => (open = !open)}
		aria-expanded={open}
		aria-haspopup="true"
		aria-label="Language"
	>
		<img src="/icons/lang.svg" alt="Language" />
	</button>

	{#if open}
		<div class="dropdown" role="menu">
			{#each others as loc}
				<a
					href={hrefFor(loc.code)}
					class="dropdown-item"
					role="menuitem"
					data-sveltekit-reload
					onclick={() => (open = false)}
				>
					<img src={loc.flag} alt={loc.label} />
					<span>{loc.label}</span>
				</a>
			{/each}
		</div>
	{/if}
</div>

<style>
	.lang-toggle {
		z-index: var(--z-lang-toggle);
		position: fixed;
		top: 1rem;
		right: 1rem;
	}

	.trigger {
		width: 2.5rem;
		height: 2.5rem;
		padding: 0.375rem;
		border: none;
		background: var(--surface-color);
		border-radius: 50%;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		cursor: pointer;
		transition: transform 0.2s ease;
	}

	.trigger:hover {
		transform: scale(1.1);
	}

	.trigger:focus-visible {
		outline: 3px solid var(--secondary-color);
		outline-offset: 2px;
	}

	.trigger img {
		width: 100%;
		height: 100%;
		display: block;
	}

	.dropdown {
		position: absolute;
		top: calc(100% + 0.5rem);
		right: 0;
		background: var(--surface-color);
		border-radius: var(--radius);
		box-shadow: var(--full-shadow);
		overflow: hidden;
		min-width: 10rem;
	}

	.dropdown-item {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		padding: 0.5rem 0.75rem;
		color: var(--base-color);
		font-family: var(--text-font);
		font-size: 0.875rem;
		text-decoration: none;
		transition: background 0.15s ease;
	}

	.dropdown-item:hover {
		background: var(--bg-color);
	}

	.dropdown-item:focus-visible {
		outline: 2px solid var(--secondary-color);
		outline-offset: -2px;
	}

	.dropdown-item img {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
	}

	.dropdown-item span {
		font-weight: 400;
	}
</style>
