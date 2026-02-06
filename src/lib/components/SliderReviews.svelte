<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay } from 'swiper/core';
	import 'swiper/css';
	let { reviews } = $props();

	const BATCH = 8;
	let loaded = $state(BATCH);

	$effect(() => {
		if (loaded < reviews.length) {
			const timer = setTimeout(() => {
				loaded = Math.min(loaded + BATCH, reviews.length);
			}, 800);
			return () => clearTimeout(timer);
		}
	});

	const placeholder =
		'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="120" height="120"%3E%3Ccircle cx="60" cy="60" r="60" fill="%23e0e0e0"/%3E%3C/svg%3E';
</script>

<div id="swiper-container">
	<Swiper
		modules={[Autoplay]}
		autoplay={{
			disableOnInteraction: false,
			pauseOnMouseEnter: true
		}}
		loop={true}
		speed={900}
		centeredSlides={true}
		slidesPerView={1.105}
		spaceBetween={10}
		breakpoints={{
			1024: {
				slidesPerView: 3.2,
				spaceBetween: 20
			},
			1280: {
				slidesPerView: 3.5
			},
			1440: {
				slidesPerView: 3.9
			},
			1600: {
				slidesPerView: 4.3
			},
			1700: {
				slidesPerView: 4.95
			}
		}}
	>
		{#each reviews as rev, i}
			<SwiperSlide>
				<a href={rev.review_link} class="review-container" target="_blank">
					<div class="row">
						<img
							src={i < loaded ? rev.autor_image : placeholder}
							alt="Google Reviews Cabañas Ucihuen"
							class="avatar"
						/>
						<div class="col-wrapper">
							<span class="name">{rev.autor_name}</span>
							<span class="date">{rev.review_date}</span>
						</div>
					</div>

					<div class="row description">
						<p>
							{rev.review_text.length > 120
								? rev.review_text.substring(0, 120) + '...'
								: rev.review_text}
						</p>
					</div>
				</a>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>

<style>
	.review-container {
		display: flex;
		flex-flow: column nowrap;
		height: 14rem;
		padding: 1rem;
		border: 1px solid #57575717;
		border-radius: 15px;
		box-shadow: var(--shadow);
		background-color: rgba(255, 255, 255, 0.842);
		text-decoration: none;
		color: #000;
	}
	.row {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.row.description {
		height: 100%;
		align-items: start;
		padding-top: 1rem;
	}
	.avatar {
		width: 3.5rem;
		height: 3.5rem;
		margin-inline-end: 1.5rem;
	}

	.col-wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.name {
		font-weight: 600;
	}

	@media screen and (min-width: 1024px) {
		.review-container {
			height: 17.5rem !important;
		}

		.review-container {
			display: flex;
			transition: all 0.2s var(--easing);
		}

		.review-container:hover {
			transform: scale(1.01);
			transition: transform 0.2s var(--easing);
		}
	}
</style>
