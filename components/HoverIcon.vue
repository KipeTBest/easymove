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

const whiteSrc = computed(() => `/${type}.svg`);
const coloredSrc = computed(() => `/${type}_colored.svg`);
</script>

<style scoped lang="scss">
.icon {
	width: 55px;
	height: 55px;

	cursor: pointer;

	transition: all 0.3s ease;
}
</style>
