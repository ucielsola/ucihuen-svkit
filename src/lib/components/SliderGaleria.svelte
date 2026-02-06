<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay } from 'swiper/core';
	import 'swiper/css';


	let {
		url = $bindable(),
		imgAlt = $bindable('Cabañas Ucihuen'),
		sendClick = () => {},
		handleClick = (event) => {
		const img = event.currentTarget.querySelector('img');
		url = img.src;
		imgAlt = img.alt;
		sendClick();
	},
		items,
		type,
		delay
	} = $props();
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
					<button type="button" class="slide-btn" onclick={handleClick}>
						<img
							data-i={i}
							loading={i > 3 ? 'lazy' : ''}
							id={item.id}
							src={item.src}
							alt={item.alt}
						/>
					</button>
				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>

<style>
	#swiper-container {
		z-index: var(--z-slider);
		position: relative;
		width: 100%;
		height: auto;
		user-select: none;
	}
	.swiper-wrapper {
		display: flex;
		align-items: center;
	}
	.slide-btn {
		background: none;
		border: none;
		padding: 0;
		cursor: zoom-in;
	}
	.slide img {
		border-radius: var(--radius);
		box-shadow: var(--shadow);
	}
</style>
