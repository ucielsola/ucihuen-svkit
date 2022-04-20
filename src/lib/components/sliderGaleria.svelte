<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay } from 'swiper/core';
	import 'swiper/css';

	export let url;
	export let sendClick = () => {};
	export let handleClick = (event) => {
		url = event.target.src;
		sendClick();
	};

	export let items;
	export let type;
	export let delay;
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
				slidesPerView: 2.3,
				spaceBetween: 20
			}
		}}
	>
		{#each items as item, i}
			<SwiperSlide data-swiper-autoplay={delay}>
				<div class={type}>
					<img
						data-i={i}
						loading={i > 3 ? 'lazy' : ''}
						id={item.id}
						src={item.src}
						alt={item.alt}
						on:click={handleClick}
					/>
				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>

<style>
	#swiper-container {
		z-index: 100;
		position: relative;
		width: 100%;
		height: auto;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-o-user-select: none;
		user-select: none;
	}
	.swiper-wrapper {
		display: flex;
		align-items: center;
	}
	.slide {
		text-align: center;
	}
	.slide img {
		border-radius: 15px;
		box-shadow: var(--shadow);
		cursor: zoom-in;
	}
</style>
