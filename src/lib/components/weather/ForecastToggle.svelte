<script>
	import * as m from '$lib/paraglide/messages.js';
	import { ChevronDown } from 'lucide-svelte';

	let { expanded = false, onToggle } = $props();
</script>

<button
	class="forecast-toggle"
	onclick={onToggle}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			onToggle();
		}
	}}
	aria-expanded={expanded}
>
	<span class="toggle-text">{m.weather_view_forecast()}</span>
	<div class="chevron">
		<ChevronDown size={20} />
	</div>
</button>

<style>
	.forecast-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 12px 16px;
		margin-top: 16px;
		background-color: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		color: #e2e8f0;
		font-size: 13px;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
		max-width: 340px;
		margin-inline: auto;
	}

	.forecast-toggle:hover {
		background-color: rgba(255, 255, 255, 0.08);
		color: #f1f5f9;
	}

	.chevron {
		flex-shrink: 0;
	}
</style>
