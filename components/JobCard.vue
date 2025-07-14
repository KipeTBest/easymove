<template>
	<div class="job-card">
		<div class="job-card__header">
			<span class="job-card__title">
				{{ title }}
			</span>
		</div>
		<div class="job-card__description">
			{{ description }}
		</div>
		<div class="job-card__button">
			<EMButton @click="emit('modal')" />
		</div>
	</div>
</template>

<script setup lang="ts">
interface IJobCard {
	title: string;
	description: string;
}

const emit = defineEmits(['modal'])

const {
	title,
	description,
} = defineProps<IJobCard>();
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.job-card {
	width: 285px;
	height: 420px;
	display: flex;
	padding-bottom: 20px;

	flex-direction: column;
	justify-content: space-between;

	border: 1px solid $black-color;
	border-radius: $border-radius-medium;
	box-shadow: $shadow;

	&__header {
		height: 75px;
		width: 100%;
		display: flex;

		align-items: center;
		justify-content: center;

		border-bottom: 1px solid $black-color;
		border-radius: $border-radius-medium;
		box-shadow: inherit;
	}

	&__title {
		font-size: 26px;
	}

	&__description {
		height: 150px;
		padding: 0 10px;

		text-align: center;
		font-size: 20px;
	}

	&__button {
		padding: 0 20px;
	}
}
</style>