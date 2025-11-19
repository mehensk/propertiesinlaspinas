<script lang="ts">
	import HeroCarousel from '$lib/components/HeroCarousel.svelte';
	import ListingsCarousel from '$lib/components/ListingsCarousel.svelte';
</script>

<svelte:head>
	<title>Las Piñas Properties</title>
	<meta name="description" content="Properties in Las Piñas, Metro Manila" />
</svelte:head>

<!-- Hero Carousel -->
<div class="mb-8 pt-16 flex justify-center">
	<HeroCarousel />
</div>

<div class="container mx-auto p-8">
	<div class="text-center mb-12">
		<h1 class="text-6xl font-bold mb-4 text-base-content">Las Piñas Properties</h1>
		<p class="text-xl text-base-content opacity-70">Your trusted real estate partner in Las Piñas, Metro Manila</p>
	</div>

	<!-- Listings Carousel -->
	<div class="mb-12 mt-32">
		<h2 class="text-3xl font-bold mb-6 text-center text-base-content">Featured Listings</h2>
		<ListingsCarousel />
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-2xl text-base-content">Houses</h2>
				<p class="text-base-content opacity-70">Find your dream home in Las Piñas</p>
				<div class="card-actions justify-end mt-4">
					<button class="btn btn-primary">Browse Houses</button>
				</div>
			</div>
		</div>

		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-2xl text-base-content">Condos & Apartments</h2>
				<p class="text-base-content opacity-70">Modern living spaces for rent or sale</p>
				<div class="card-actions justify-end mt-4">
					<button class="btn btn-secondary">Browse Condos</button>
				</div>
			</div>
		</div>

		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-2xl text-base-content">Commercial</h2>
				<p class="text-base-content opacity-70">Business spaces and commercial properties</p>
				<div class="card-actions justify-end mt-4">
					<button class="btn btn-accent">Browse Commercial</button>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-12 text-center">
		<div class="alert bg-primary text-primary-content max-w-md mx-auto">
			<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span>Phase 1: Foundation Setup Complete with DaisyUI!</span>
		</div>
	</div>
</div>

