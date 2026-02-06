<script>
	import { page } from '$app/state';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime.js';

	const locales = [
		{ code: 'es', flag: '/icons/ar.svg', label: 'Español', cta: 'Leer en Español' },
		{ code: 'en', flag: '/icons/uk.svg', label: 'English', cta: 'Read in English' },
		{ code: 'pt', flag: '/icons/br.svg', label: 'Português', cta: 'Ler em Português' }
	];

	let open = $state(false);
	let hintLocale = $state(null);
	let currentCode = $derived(getLocale());
	let others = $derived(locales.filter((l) => l.code !== currentCode));

	let cancelHints = () => {};

	function hrefFor(code) {
		return localizeHref(page.url.pathname + page.url.search + page.url.hash, { locale: code });
	}

	function markSwitched() {
		try { sessionStorage.setItem('lang-switched', '1'); } catch {}
	}

	function handleTriggerClick() {
		if (hintLocale) {
			markSwitched();
			const href = hrefFor(hintLocale.code);
			cancelHints();
			window.location.href = href;
		} else {
			cancelHints();
			open = !open;
		}
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

	$effect(() => {
		try { if (sessionStorage.getItem('lang-switched')) return; } catch {}

		const otherLocales = locales.filter((l) => l.code !== getLocale());
		const browserLang = navigator.language?.slice(0, 2);
		const detected = otherLocales.find((l) => l.code === browserLang);

		// Detected browser language first, then the rest
		const queue = detected
			? [detected, ...otherLocales.filter((l) => l !== detected)]
			: [...otherLocales];

		const SHOW_DURATION = 3000;
		const INITIAL_DELAY = 800;
		const PAUSE = 10000;
		const CYCLE = queue.length * SHOW_DURATION + PAUSE;

		/** @type {ReturnType<typeof setTimeout>[]} */
		const timeouts = [];
		/** @type {ReturnType<typeof setInterval> | undefined} */
		let interval;

		function scheduleCycle() {
			queue.forEach((loc, i) => {
				timeouts.push(setTimeout(() => { hintLocale = loc; }, i * SHOW_DURATION));
			});
			timeouts.push(setTimeout(() => { hintLocale = null; }, queue.length * SHOW_DURATION));
		}

		timeouts.push(
			setTimeout(() => {
				scheduleCycle();
				interval = setInterval(scheduleCycle, CYCLE);
			}, INITIAL_DELAY)
		);

		cancelHints = () => {
			timeouts.forEach(clearTimeout);
			if (interval) clearInterval(interval);
			hintLocale = null;
		};

		return cancelHints;
	});
</script>

<div class="lang-toggle">
	<button
		class="trigger"
		class:hint-active={hintLocale}
		onclick={handleTriggerClick}
		aria-expanded={open}
		aria-haspopup="true"
		aria-label={hintLocale ? hintLocale.cta : 'Language'}
	>
		{#key hintLocale?.code}
			<img
				src={hintLocale ? hintLocale.flag : '/icons/lang.svg'}
				alt={hintLocale ? hintLocale.label : 'Language'}
			/>
		{/key}
	</button>

	{#if hintLocale && !open}
		{#key hintLocale.code}
			<span class="hint" role="status">{hintLocale.cta}</span>
		{/key}
	{/if}

	{#if open}
		<div class="dropdown" role="menu">
			{#each others as loc}
				<a
					href={hrefFor(loc.code)}
					class="dropdown-item"
					role="menuitem"
					data-sveltekit-reload
					onclick={() => { markSwitched(); open = false; }}
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
		transition:
			transform 0.2s ease,
			padding 0.3s ease;
	}

	.trigger.hint-active {
		padding: 0;
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

	.trigger.hint-active img {
		border-radius: 50%;
	}

	.hint {
		position: absolute;
		top: 50%;
		right: calc(100% + 0.5rem);
		transform: translateY(-50%);
		background: #000;
		color: #fff;
		font-family: var(--text-font);
		font-size: 0.75rem;
		padding: 0.375rem 0.625rem;
		border-radius: 6px;
		white-space: nowrap;
		pointer-events: none;
		animation: hint-in 0.3s ease;
	}

	@keyframes hint-in {
		from {
			opacity: 0;
			transform: translateY(-50%) translateX(0.5rem);
		}
		to {
			opacity: 1;
			transform: translateY(-50%) translateX(0);
		}
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
