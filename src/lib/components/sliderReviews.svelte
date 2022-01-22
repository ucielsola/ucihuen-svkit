<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay } from 'swiper/core';
	import 'swiper/css';
	import StarRating from 'svelte-stars-rating';
	let style = {
		styleStarWidth: 34,
		styleEmptyStarColor: '#737373',
		styleFullStarColor: '#ffd219'
	};

	import json from '/src/assets/data/reviews.min.json';
	let reviews = json.reviews;
	console.log(reviews);
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
		slidesPerView={1.2}
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
						<img src={rev.autor_image} alt="Google Reviews Cabañas Ucihuen" class="avatar" />
						<div class="col-wrapper">
							<span class="name">{rev.autor_name}</span>
							<span class="date">{rev.review_date}</span>
						</div>
					</div>
					<div class="row center">
						<StarRating rating={rev.review_rating} {style} isIndicatorActive={false} />
					</div>
					<div class="row">
						<p>{rev.review_text}</p>
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
		width: 21rem;
		height: 17rem;
		margin-top: 2rem;
		padding: 1rem;
		/* border: 1px solid var(--dark);
		border-radius: var(--border-radius);
		box-shadow: var(--box-shadow); */
		background-color: rgba(255, 255, 255, 0.842);
	}
	.row {
		display: flex;
		align-items: center;
		width: 100%;
	}
	.avatar {
		width: 3.5rem;
		margin-inline-end: 1.5rem;
	}

	.col-wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.center {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
