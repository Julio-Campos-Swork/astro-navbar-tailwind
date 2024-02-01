<template>
	<header class="sticky top-0 left-0 w-full pt-6" trasition:persist>
		<div class="container mx-auto">
			<nav class="flex justify-center items-center">
				<div class="bg-black/10 rounded-full p-3 flex">
					<ul class="flex gap-4" v-for="routes in routeList">
						<a
							:href="routes.route"
							class="navButton"
							:class="
								actualRoute === routes.route
									? 'bg-mountain-100/70 text-mountain-500'
									: 'text-mountain-100 hover:scale-105'
							"
						>
							{{ routes.name }}
						</a>
					</ul>
				</div>
			</nav>
		</div>
	</header>
</template>

<script setup>
	import { ref, computed } from 'vue'
	const routeList = [
		{ name: 'Home', route: '/' },
		{ name: 'Proyectos', route: '/projects' },
		{ name: 'Skills', route: '/skills' },
		{ name: 'About', route: '/about' },
		{ name: 'Contacto', route: '/contact' },
	]
	const currentPath = ref(window.location.href)
	const actualRoute = computed(() => {
		return currentPath.value.slice(currentPath.value.lastIndexOf('/'))
	})
</script>

<style scoped lang="css">
	.navButton {
		@apply focus:outline-none transition-all duration-150  font-bold rounded-full text-lg px-5 pt-2.5 pb-3.5 text-center me-2;
	}
</style>
