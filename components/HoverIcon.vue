<template>
	<img
		class="icon"
		:src="isHovered ? coloredSrc : whiteSrc"
		alt=""
		@mouseover="isHovered = true"
		@mouseleave="isHovered = false"
	>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface IHoverIcon {
	type: 'telegram' | 'whatsapp';
}

const { type } = defineProps<IHoverIcon>();

const isHovered = ref(false);

const whiteSrc = computed(() => new URL(`../public/${type}.svg`, import.meta.url).href);
const coloredSrc = computed(() => new URL(`../public/${type}_colored.svg`, import.meta.url).href);
</script>

<style scoped lang="scss">
.icon {
	width: 55px;
	height: 55px;

	cursor: pointer;

	transition: all 0.3s ease;
}
</style>
