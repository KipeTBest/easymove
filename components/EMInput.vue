<template>
	<div class="input">
		<label class="input__title">
			{{ title }}<span v-if="isRequired" class="input__required">*</span>
		</label>
		<input
			v-if="type === 'tel'"
			v-model="phoneValue"
			type="tel"
			inputmode="numeric"
			pattern="\d*"
			class="input__field"
			maxlength="12"
			minlength="12"
			:aria-invalid="error ? 'true' : 'false'"
			@beforeinput="onPhoneBeforeInput"
		/>
		<input
			v-else
			v-model="model"
			type="text"
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
import { computed } from 'vue';

const model = defineModel<string | number>();

interface IInput {
	title: string
	isRequired?: boolean
	type: 'tel' | 'text'
	error?: string
}

const {
	title,
	isRequired = false,
	type,
	error = ''
} = defineProps<IInput>();

const phoneValue = computed({
	get() {
		let value = String(model.value ?? '');
		if (!value.startsWith('+7')) value = `+7${value.replace(/\D/g, '')}`;
		return value;
	},
	set(val: string) {
		if (!val.startsWith('+7')) {
			val = '+7' + val.replace(/\D/g, '');
		}
		const onlyDigits = val.replace(/\D/g, '');
		model.value = `+7${onlyDigits.slice(1)}`;
	}
})

const onPhoneBeforeInput = (e: Event) => {
	const inputEvent = e as InputEvent;

	if (inputEvent.inputType !== 'insertText') return;

	const inputChar = inputEvent.data;
	if (!inputChar) return;

	const isDigit = /\d/.test(inputChar);
	const isPlus = inputChar === '+';

	if (!isDigit && !isPlus) {
		e.preventDefault();
		return;
	}

	const el = inputEvent.target as HTMLInputElement;
	if (isPlus && (el.selectionStart !== 0 || el.value.includes('+'))) {
		e.preventDefault();
	}
}
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
