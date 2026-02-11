<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay } from 'swiper/core';
	import 'swiper/css';

	let {
		modalSrc = $bindable(),
		imgAlt = $bindable('Cabañas Ucihuen'),
		sendClick = () => {},
		handleClick = (event) => {
			const idx = event.currentTarget.querySelector('img').dataset.i;
			modalSrc = items[idx].modalSrc;
			imgAlt = items[idx].alt;
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
						<div class="img-wrapper" style:background-image="url({item.lqip})">
							<img
								data-i={i}
								loading={i > 3 ? 'lazy' : ''}
								id={item.id}
								src={item.src}
								srcset={item.srcset}
								sizes="(min-width: 1024px) 800px, 400px"
								alt={item.alt}
							/>
						</div>
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
	.img-wrapper {
		aspect-ratio: 4 / 3;
		background-size: cover;
		background-position: center;
		overflow: hidden;
		border-radius: var(--radius-sm);
	}
	.slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow);
	}
</style>
