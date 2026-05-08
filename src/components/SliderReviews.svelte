<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay } from 'swiper/core';
	import 'swiper/css';
	import ReviewCard from './ReviewCardIsland.svelte';

	let { reviews, locale = 'es' } = $props();

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
				<ReviewCard
					name={rev.autor_name}
					avatarUrl={rev.autor_image}
					rating={rev.review_rating}
					date={rev.review_date}
					text={rev.review_text}
					link={rev.review_link}
					imageLoaded={i < loaded}
					{locale}
				/>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>
