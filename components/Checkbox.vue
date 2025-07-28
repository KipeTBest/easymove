<template>
	<div class="checkbox">
		<label class="checkbox__wrapper">
			<input
				v-model="model"
				class="checkbox__input"
				type="checkbox"
			/>
			<span
				class="checkbox__box"
				:class="{ 'checkbox__box--error': error }"
			/>
		</label>
	</div>
</template>

<script setup lang="ts">
const model = defineModel<boolean>();

interface ICheckbox {
	error?: boolean;
}

const { error = false } = defineProps<ICheckbox>();
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.checkbox {
	width: 30px;
	height: 30px;

	&__wrapper {
		display: flex;

		cursor: pointer;
	}

	&__input {
		display: none;

		&:checked + .checkbox__box::after {
			width: 8px;
			height: 14px;
			position: absolute;
			left: 10px;
			top: 6px;

			content: '';

			border: solid $accent-color;
			border-width: 0 3px 3px 0;

			transform: rotate(45deg);
		}
	}

	&__box {
		width: 30px;
		height: 30px;
		position: relative;
		display: inline-block;

		border: 1px solid $black-color;
		border-radius: $border-radius-small;

		&--error {
			border: 1px solid red;
		}
	}
}
</style>
