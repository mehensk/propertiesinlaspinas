<script lang="ts">
	import { onMount } from 'svelte';

	let currentSlide = 0;
	const totalSlides = 4;
	let intervalId: ReturnType<typeof setInterval>;

	const slides = [
		{
			image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop',
			title: 'Modern 3BR House',
			location: 'Alabang-Zapote Road',
			price: '₱8,500,000',
			type: 'House',
			beds: 3,
			baths: 2,
			area: '180 sqm'
		},
		{
			image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=600&fit=crop',
			title: 'Luxury Condo Unit',
			location: 'BF Resort Village',
			price: '₱6,200,000',
			type: 'Condo',
			beds: 2,
			baths: 2,
			area: '65 sqm'
		},
		{
			image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop',
			title: 'Spacious Family Home',
			location: 'Pamplona Tres',
			price: '₱12,000,000',
			type: 'House',
			beds: 4,
			baths: 3,
			area: '250 sqm'
		},
		{
			image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop',
			title: 'Executive Townhouse',
			location: 'Verdant Acres',
			price: '₱9,500,000',
			type: 'Townhouse',
			beds: 3,
			baths: 2,
			area: '150 sqm'
		}
	];

	onMount(() => {
		intervalId = setInterval(() => {
			currentSlide = (currentSlide + 1) % totalSlides;
		}, 10000);

		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	});

	function goToSlide(index: number) {
		currentSlide = index;
		if (intervalId) clearInterval(intervalId);
		intervalId = setInterval(() => {
			currentSlide = (currentSlide + 1) % totalSlides;
		}, 10000);
	}
</script>

<div class="w-[80%]">
	<div class="carousel w-full h-[600px] relative overflow-hidden rounded-2xl">
		{#each slides as slide, index}
			<div
				class="carousel-item w-full absolute inset-0 transition-opacity duration-1000"
				style="opacity: {currentSlide === index ? 1 : 0}; z-index: {currentSlide === index ? 10 : 0}"
			>
				<img src={slide.image} alt="Property {index + 1}" class="w-full h-full object-cover rounded-2xl" />
				<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl flex items-end">
					<div class="w-full p-8 text-white">
						<div class="max-w-4xl mx-auto">
							<div class="badge badge-primary badge-lg mb-4">{slide.type}</div>
							<h2 class="text-5xl font-bold mb-2">{slide.title}</h2>
							<p class="text-xl mb-4 opacity-90">{slide.location}</p>
							<div class="flex gap-6 text-lg mb-4">
								<span>🛏️ {slide.beds} Bedrooms</span>
								<span>🚿 {slide.baths} Bathrooms</span>
								<span>📐 {slide.area}</span>
							</div>
							<div class="text-3xl font-bold text-primary-content">{slide.price}</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Navigation Dots -->
	<div class="flex justify-center gap-3 mt-6">
		{#each Array(totalSlides) as _, i}
			<button
				class="transition-all duration-300 {currentSlide === i ? 'w-8 h-2 bg-primary rounded-full' : 'w-2 h-2 bg-base-300 rounded-full hover:bg-base-content hover:opacity-50'}"
				on:click={() => goToSlide(i)}
				aria-label="Go to slide {i + 1}"
			>
			</button>
		{/each}
	</div>
</div>

