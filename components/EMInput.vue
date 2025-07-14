<template>
	<div class="input">
		<label class="input__title">
			{{ title }}<span v-if="isRequired" class="input__required">*</span>
		</label>
		<input
			v-model="model"
			class="input__field"
			:type
		/>
		<span v-if="error.length" class="input__error">
			{{ error }}
		</span>
	</div>
</template>

<script setup lang="ts">
const model = defineModel<string | number>();

interface IInput {
	title: string;
	isRequired?: boolean;
	type: 'tel' | 'string';
	error?: string;
}

const {
	title,
	isRequired = false,
	type,
	error = '',
} = defineProps<IInput>();
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.input {
	width: 100%;
	min-width: 300px;
	position: relative;

	&__field {
		width: 100%;
		padding: 15px 10px;

		border: 1px solid $black-color;
		border-radius: $border-radius-small;

		font-size: 16px;
	}

	&__title {
		position: absolute;
		top: -6px;
		left: 20px;
		padding: 0 6px;

		background: white;

		font-size: 12px;
		font-weight: 300;
	}

	&__required {
		color: red;
	}
}
</style>
