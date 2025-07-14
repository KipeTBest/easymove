<template>
	<div class="range-input">
		<div class="range-input__header">
			<span class="range-input__title">
				{{ title }}
			</span>
			<span class="range-input__current">
				{{ model }}
			</span>
		</div>
		<input
			class="range-input__slider"
			:value="model"
			:min
			:max
			type="range"
			:style
			@input="emit('update:modelValue', $event.target.value)"
		/>
	</div>
</template>

<script setup lang="ts">
const model = defineModel<string | number>();
const emit = defineEmits(['update:modelValue'])

interface IRangeInput {
	title: string;
	min: number;
	max: number;
}

const {
	title,
	min,
	max,
} = defineProps<IRangeInput>();

const style = computed(() => {
	const percent = ((model.value! - min) / (max - min)) * 100;
	return {
		background: `linear-gradient(to right, rgba(103, 193, 94, 1) 0%, rgba(103, 193, 94, 1) ${percent}%, rgba(0, 0, 0, 1) ${percent}%, rgba(0, 0, 0, 1) 100%)`
	};
});

</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.range-input {
	min-width: 270px;
	display: flex;

	flex-direction: column;

	font-size: 16px;

	&__header {
		display: flex;

		justify-content: space-between;
	}

	&__title,
	&__current {
		font-size: inherit;
	}

	&__slider {
		height: 2px;

		appearance: none;
		background-color: $black-color;
		accent-color: $accent-color;
		cursor: pointer;

		&::-webkit-slider-thumb,
		&::-moz-range-thumb {
			width: 10px;
			height: 10px;

			appearance: none;
			background-color: $accent-color;
			border-radius: 50%;
			cursor: pointer;
		}
	}
}
</style>
