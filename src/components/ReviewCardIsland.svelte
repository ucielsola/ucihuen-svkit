<script lang="ts">
	import { getMessages } from '$lib/messages';

	let {
		name,
		avatarUrl,
		rating,
		date,
		text,
		link,
		imageLoaded,
		locale = 'es'
	} = $props();

	const m = getMessages(locale);

	const initials = $derived(
		name
			.split(' ')
			.map((n) => n[0])
			.join('')
			.toUpperCase()
			.slice(0, 2)
	);
</script>

<a href={link} class="review-card" target="_blank" rel="noopener noreferrer">
	<div class="review-header">
		<div class="avatar-wrapper">
			{#if imageLoaded && avatarUrl}
				<img src={avatarUrl} alt={name} class="avatar" />
			{:else}
				<div class="avatar-placeholder">
					<span>{initials}</span>
				</div>
			{/if}

			<div class="name-wrapper">
				<span class="name">{name}</span>
			</div>
		</div>

		<svg
			class="google-logo"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Google"
		>
			<path
				d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
				fill="#4285F4"
			/>
			<path
				d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
				fill="#34A853"
			/>
			<path
				d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
				fill="#FBBC05"
			/>
			<path
				d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
				fill="#EA4335"
			/>
		</svg>
	</div>

	<div class="rating-wrapper">
		<div class="stars" aria-label="{rating} out of 5 stars">
			{#each [1, 2, 3, 4, 5] as star}
				<svg
					class="star"
					viewBox="0 0 20 20"
					fill={star <= Number(rating) ? '#FBBC05' : '#E0E0E0'}
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.28l-4.77 2.51.91-5.33L2.27 6.69l5.34-.78L10 1z"
					/>
				</svg>
			{/each}
		</div>
		<span class="date">{date}</span>
	</div>

	<p class="review-text">{text}</p>

	<div class="attribution">
		<svg
			class="maps-icon"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"
				fill="#EA4335"
			/>
		</svg>
		<span>{m['review_posted_on_google']}</span>
	</div>
</a>

<style>
	.review-card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 15rem;
		padding: 1.25rem;
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: 12px;
		background-color: var(--surface-color);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
		text-decoration: none;
		color: var(--text-color);
		transition: all 0.3s var(--easing);
		overflow: hidden;
	}

	.review-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.avatar-wrapper {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.avatar,
	.avatar-placeholder {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.avatar {
		object-fit: cover;
		border: 2px solid rgba(0, 0, 0, 0.08);
	}

	.avatar-placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--primary-color);
		color: white;
		font-size: 0.75rem;
		font-weight: var(--font-semibold);
		border: 2px solid rgba(0, 0, 0, 0.08);
	}

	.name-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}

	.name {
		font-size: 0.875rem;
		font-weight: var(--font-semibold);
		line-height: 1.25;
		color: var(--base-color);
	}

	.google-logo {
		width: 1.25rem;
		height: 1.25rem;
		opacity: 0.7;
		transition: opacity 0.2s;
		flex-shrink: 0;
	}

	.rating-wrapper {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.stars {
		display: flex;
		gap: 0.125rem;
	}

	.star {
		width: 1rem;
		height: 1rem;
	}

	.date {
		font-size: 0.75rem;
		color: #666;
	}

	.review-text {
		font-size: 0.875rem;
		line-height: 1.6;
		color: var(--base-color);
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
		opacity: 0.85;
	}

	.attribution {
		display: flex;
		align-items: center;
		gap: 0.375rem;
		margin-top: auto;
		padding-top: 0.5rem;
		border-top: 1px solid rgba(0, 0, 0, 0.05);
	}

	.maps-icon {
		width: 0.75rem;
		height: 0.75rem;
		opacity: 0.5;
	}

	.attribution span {
		font-size: 0.625rem;
		letter-spacing: 0.025em;
		color: #666;
		opacity: 0.7;
	}

	.review-card:hover {
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
		transform: translateY(-2px);
	}

	.review-card:hover .google-logo {
		opacity: 1;
	}
</style>
