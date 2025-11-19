<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="navbar bg-primary shadow-lg sticky top-0 z-50">
	<div class="container mx-auto">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost text-xl font-bold text-primary-content">Las Piñas Properties</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1 gap-2">
				<li>
					<a href="/" class="btn btn-ghost text-primary-content" class:btn-active={$page.url.pathname === '/'}>
						Home
					</a>
				</li>
				<li>
					<a href="/listings" class="btn btn-ghost text-primary-content" class:btn-active={$page.url.pathname === '/listings'}>
						Listings
					</a>
				</li>
				<li>
					<a href="/contact" class="btn btn-ghost text-primary-content" class:btn-active={$page.url.pathname === '/contact'}>
						Contact Us
					</a>
				</li>
				<li>
					<a href="https://wa.me/639212303011" target="_blank" rel="noopener noreferrer" class="btn btn-ghost text-primary-content">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
						</svg>
						Call 0921 2303011
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

