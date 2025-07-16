<template>
	<div>
		<h1>Главная страница</h1>
	</div>
</template>


<script setup>
definePageMeta({
	middleware: () => navigateTo('/1')
})
</script>
