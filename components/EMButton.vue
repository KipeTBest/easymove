<template>
	<button
		class="button"
		:class="{ 'button--disabled': isDisabled }"
		type="button"
	>
		<span class="button__title">{{ title }}</span>
	</button>
</template>

<script setup lang="ts">
interface IButton {
	title?: string;
	isDisabled?: boolean;
}

const {
	title = 'Оставить заявку',
	isDisabled = false,
} = defineProps<IButton>();
</script>

<style scoped lang="scss">
@use 'assets/styles/main.scss' as *;

.button {
	width: 100%;
	min-height: 65px;
	padding: 16px;

	border-radius: 16px;
	border: none;
	background-color: $accent-color;
	cursor: pointer;

	transition: transform 0.2s ease, background-color 0.2s ease;

	&--disabled {
		opacity: 0.6;

		pointer-events: none;
	}

	&__title {
		color: $white-color;
		font-size: 16px;
		font-weight: 700;
	}
}

@media (min-width: 1200px) {
	.button {
		&:hover:not(.button--disabled) {
			transform: scale(1.03);
		}
	}
}
</style>
