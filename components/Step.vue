<template>
	<div class="step">
		<div class="step__circle">
			<span class="step__number">
				{{ number }}
			</span>
		</div>
		<span class="step__title">
			{{ title }}
		</span>
	</div>
</template>

<script setup lang="ts">
interface IStep {
	number: string;
	title: string;
}

const {
	number,
	title,
} = defineProps<IStep>();
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.step {
	width: 390px;
	height: 100px;
	display: flex;
	padding: 0 20px;
	gap: 20px;

	justify-content: left;
	align-items: center;

	border-radius: $border-radius-medium;
	border: 1px solid $black-color;
	box-shadow: $shadow;

	&__circle {
		width: 55px;
		height: 55px;
		display: flex;

		justify-content: center;
		align-items: center;

		border-radius: 50%;
		border: 1px solid $black-color;
	}

	&__number {
		font-size: 32px;
		font-weight: 300;
	}

	&__title {
		width: 275px;

		font-size: 16px;
	}
}
</style>