<template>
	<div class="input">
		<label class="input__title">
			{{ title }}<span v-if="isRequired" class="input__required">*</span>
		</label>
		<input
			v-model="model"
			:type="type === 'tel' ? 'tel' : 'text'"
			:inputmode="type === 'tel' ? 'numeric' : undefined"
			:pattern="type === 'tel' ? '\\d*' : undefined"
			class="input__field"
			:aria-invalid="error ? 'true' : 'false'"
		/>
		<span
			class="input__error"
			:class="{ visible: !!error }"
		>
			{{ error || '' }}
		</span>
	</div>
</template>

<script setup lang="ts">
const model = defineModel<string | number>()

interface IInput {
	title: string
	isRequired?: boolean
	type: 'tel' | 'text'
	error?: string
}

const { title, isRequired = false, type, error = '' } = defineProps<IInput>()
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

	&__error {
		display: block;
		height: 18px;
		font-size: 12px;
		color: red;
		margin-top: 4px;
		opacity: 0;
		transition: opacity 0.2s;
		text-align: right;

		&.visible {
			opacity: 1;
		}
	}
}
</style>
