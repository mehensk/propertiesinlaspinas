<script lang="ts">
	import { onMount } from 'svelte';

	let currentIndex = 0;
	const cardsPerView = 4;
	const totalListings = 8;

	const listings = [
		{
			id: 1,
			title: 'Modern 3BR House',
			location: 'Alabang-Zapote Road',
			price: '₱8,500,000',
			type: 'House',
			beds: 3,
			baths: 2,
			area: '180 sqm',
			image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop'
		},
		{
			id: 2,
			title: 'Luxury Condo Unit',
			location: 'BF Resort Village',
			price: '₱6,200,000',
			type: 'Condo',
			beds: 2,
			baths: 2,
			area: '65 sqm',
			image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop'
		},
		{
			id: 3,
			title: 'Spacious Family Home',
			location: 'Pamplona Tres',
			price: '₱12,000,000',
			type: 'House',
			beds: 4,
			baths: 3,
			area: '250 sqm',
			image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop'
		},
		{
			id: 4,
			title: 'Studio Apartment',
			location: 'Talon Village',
			price: '₱2,800,000',
			type: 'Apartment',
			beds: 1,
			baths: 1,
			area: '35 sqm',
			image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop'
		},
		{
			id: 5,
			title: 'Executive Townhouse',
			location: 'Verdant Acres',
			price: '₱9,500,000',
			type: 'Townhouse',
			beds: 3,
			baths: 2,
			area: '150 sqm',
			image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a08c?w=400&h=300&fit=crop'
		},
		{
			id: 6,
			title: 'Premium Condo',
			location: 'Manila Bay Area',
			price: '₱7,800,000',
			type: 'Condo',
			beds: 2,
			baths: 2,
			area: '75 sqm',
			image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=400&h=300&fit=crop'
		},
		{
			id: 7,
			title: 'Garden Villa',
			location: 'BF Homes',
			price: '₱15,000,000',
			type: 'House',
			beds: 5,
			baths: 4,
			area: '320 sqm',
			image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=300&fit=crop'
		},
		{
			id: 8,
			title: 'Cozy 2BR Unit',
			location: 'Las Piñas City',
			price: '₱4,500,000',
			type: 'Condo',
			beds: 2,
			baths: 1,
			area: '55 sqm',
			image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop'
		}
	];

	let intervalId: ReturnType<typeof setInterval>;

	onMount(() => {
		intervalId = setInterval(() => {
			currentIndex = (currentIndex + 1) % (totalListings - cardsPerView + 1);
		}, 5000);

		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	});

	function nextSlide() {
		if (currentIndex < totalListings - cardsPerView) {
			currentIndex++;
		} else {
			currentIndex = 0;
		}
		resetInterval();
	}

	function prevSlide() {
		if (currentIndex > 0) {
			currentIndex--;
		} else {
			currentIndex = totalListings - cardsPerView;
		}
		resetInterval();
	}

	function resetInterval() {
		if (intervalId) clearInterval(intervalId);
		intervalId = setInterval(() => {
			currentIndex = (currentIndex + 1) % (totalListings - cardsPerView + 1);
		}, 5000);
	}

	function goToSlide(index: number) {
		currentIndex = index;
		resetInterval();
	}
</script>

<div class="relative px-12">
	<!-- Carousel Container -->
	<div class="overflow-hidden relative">
		<div
			class="flex transition-transform duration-500 ease-in-out"
			style="transform: translateX(-{currentIndex * (100 / cardsPerView)}%)"
		>
			{#each listings as listing}
				<div class="flex-shrink-0" style="width: {100 / cardsPerView}%">
					<div class="px-2">
						<div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
							<figure class="h-48 overflow-hidden">
								<img src={listing.image} alt={listing.title} class="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
							</figure>
							<div class="card-body p-4">
								<div class="badge badge-primary mb-2">{listing.type}</div>
								<h2 class="card-title text-lg text-base-content">{listing.title}</h2>
								<p class="text-sm text-base-content opacity-70">{listing.location}</p>
								<div class="flex gap-4 text-sm mt-2 text-base-content">
									<span>🛏️ {listing.beds}</span>
									<span>🚿 {listing.baths}</span>
									<span>📐 {listing.area}</span>
								</div>
								<div class="card-actions justify-end mt-3">
									<div class="text-xl font-bold text-primary">{listing.price}</div>
								</div>
								<button class="btn btn-primary btn-sm mt-2">View Details</button>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Navigation Arrows -->
	<button
		class="btn btn-circle btn-primary absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-80 hover:opacity-100"
		on:click={prevSlide}
		aria-label="Previous slide"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</button>
	<button
		class="btn btn-circle btn-primary absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-80 hover:opacity-100"
		on:click={nextSlide}
		aria-label="Next slide"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>

	<!-- Dots Indicator -->
	<div class="flex justify-center gap-2 mt-6">
		{#each Array(totalListings - cardsPerView + 1) as _, i}
			<button
				class="transition-all duration-300 {currentIndex === i ? 'w-8 h-2 bg-primary rounded-full' : 'w-2 h-2 bg-base-300 rounded-full hover:bg-base-content hover:opacity-50'}"
				on:click={() => goToSlide(i)}
				aria-label="Go to slide {i + 1}"
			>
			</button>
		{/each}
	</div>
</div>

