<script lang="ts">
	import { getThemeByTime } from '$lib/utils/weatherTheme';

	let theme = getThemeByTime();
	let widgetElement = $state(null);

	$effect(() => {
		if (widgetElement) {
			widgetElement.setAttribute('data-theme', theme);
		}
	});
</script>

<div bind:this={widgetElement} class="weather-card skeleton widget" aria-hidden="true">
	<div class="glow"></div>
	<div class="header">
		<div class="location-row">
			<div class="skel-pin"></div>
			<div class="skel-line" style="width: 80px;"></div>
		</div>
		<div class="skel-badge"></div>
	</div>
	<div class="temp-section">
		<div class="temp-row">
			<div class="skel-icon"></div>
			<div class="skel-line" style="width: 60px; height: 3.5rem;"></div>
		</div>
		<div class="skel-line" style="width: 150px;"></div>
	</div>
	<div class="divider"></div>
	<div class="stats-row">
		<div class="stat">
			<div class="skel-stat-icon"></div>
			<div class="skel-line" style="width: 40px;"></div>
		</div>
		<div class="stat-divider"></div>
		<div class="stat">
			<div class="skel-stat-icon"></div>
			<div class="skel-line" style="width: 35px;"></div>
		</div>
	</div>
</div>

<style>
	.widget {
		position: relative;
		overflow: hidden;
		width: 100%;
		max-width: 340px;
		margin-inline: auto;
		border-radius: var(--weather-radius-lg);
		background-color: var(--weather-bg);
		border: 1px solid var(--weather-border);
		padding: 24px;
		color: var(--weather-text-light);
		font-family: system-ui, -apple-system, sans-serif;
		box-shadow:
			0 4px 24px rgba(0, 0, 0, 0.3),
			0 1px 2px rgba(0, 0, 0, 0.2);
		transition: transform var(--easing), box-shadow var(--easing);
		display: flex;
		flex-direction: column;
		gap: var(--weather-spacing-lg);
	}

	.glow {
		position: absolute;
		top: -40px;
		right: -40px;
		width: 120px;
		height: 120px;
		border-radius: 9999px;
		background: radial-gradient(circle, rgba(165, 180, 252, 0.12) 0%, transparent 70%);
		transition: opacity 0.4s ease;
		opacity: 0.5;
		pointer-events: none;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.location-row {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.skeleton {
		width: 100%;
		max-width: 340px;
		margin-inline: auto;
		pointer-events: none;
	}

	.skel-pin {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.06);
		animation: shimmer 1.5s ease-in-out infinite;
	}

	.skel-badge {
		width: 60px;
		height: 24px;
		border-radius: 9999px;
		background: rgba(255, 255, 255, 0.06);
		animation: shimmer 1.5s ease-in-out infinite;
	}

	.skel-icon {
		width: 64px;
		height: 64px;
		border-radius: 16px;
		background: rgba(255, 255, 255, 0.06);
		animation: shimmer 1.5s ease-in-out infinite;
	}

	.skel-stat-icon {
		width: 16px;
		height: 16px;
		border-radius: 3px;
		background: rgba(255, 255, 255, 0.06);
		animation: shimmer 1.5s ease-in-out infinite;
	}

	.skel-line {
		height: 0.75rem;
		border-radius: 4px;
		background: rgba(255, 255, 255, 0.06);
		animation: shimmer 1.5s ease-in-out infinite;
	}

	.temp-section {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.temp-row {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.divider {
		height: 1px;
		background: linear-gradient(
			to right,
			transparent,
			rgba(255, 255, 255, 0.06),
			transparent
		);
	}

	.stats-row {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.stat {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.stat-divider {
		width: 1px;
		height: 32px;
		background-color: rgba(255, 255, 255, 0.06);
	}

	@keyframes shimmer {
		0%,
		100% {
			opacity: 0.5;
		}
		50% {
			opacity: 1;
		}
	}
</style>
