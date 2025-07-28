<template>
	<div class="form">
		<h2 class="form__title">
			Оставьте заявку
		</h2>
		<span class="form__subtitle">
			Наш менеджер свяжется с вами в течение 20 минут
		</span>
		<div class="form__controls">
			<div class="form__inputs">
				<EMInput
					title="ФИО"
					is-required
					type="text"
					v-model="fullName"
					:error="errors.fullName"
				/>
				<EMInput
					title="Телефон"
					is-required
					type="tel"
					v-model="phone"
					:error="errors.phone"
				/>
				<EMInput
					title="Город"
					is-required
					type="text"
					v-model="city"
					:error="errors.city"
				/>
			</div>
			<div class="form__checkbox">
				<Checkbox
					v-model="agreed"
					:error="errors.agreed"
				/>
				<span class="form__checkbox-text">
					<span class="form__checkbox-requirement">*</span>Я согласен с
					<a
						class="form__checkbox-policy"
						href="/policy"
						target="_blank"
					>
						политикой конфиденциальности компании
					</a>
				</span>
			</div>
		</div>
		<div class="form__submit">
			<EMButton @click="sendForm" :is-disabled="!validate" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';

const emit = defineEmits(['success'])

const fullName = ref<string>('');
const phone = ref<string | number>('');
const city = ref<string>('');
const agreed = ref(false);

const errors = reactive({
	fullName: '',
	phone: '',
	city: '',
	agreed: false
});

const validate = () => {
	errors.fullName = fullName.value.trim() ? '' : 'Введите ФИО';

	const phoneDigits = phone.value.toString().replace(/\D/g, '');
	if (!phone.value.toString().trim()) {
		errors.phone = 'Введите номер';
	} else if (phoneDigits.length < 11) {
		errors.phone = 'Номер некорректный';
	} else {
		errors.phone = '';
	}

	errors.city = city.value.trim() ? '' : 'Введите город';
	errors.agreed = !agreed.value;

	return !errors.fullName && !errors.phone && !errors.city && !errors.agreed;
}

const sendForm = async () => {
	if (!validate()) return;

	try {
		await fetch('/api/form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				fullName: fullName.value,
				phone: phone.value,
				city: city.value,
			})
		})

		emit('success');
	} catch (err) {
		console.error('Ошибка при отправке формы:', err);
	}
}

watch(fullName, (val) => {
	if (val.trim()) errors.fullName = ''
})

watch(phone, (val) => {
	if (val.toString().trim()) errors.phone = ''
})

watch(city, (val) => {
	if (val.trim()) errors.city = ''
})

watch(agreed, (val) => {
	if (val) errors.agreed = false
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.form {
	width: 390px;
	height: 490px;
	display: flex;

	flex-direction: column;
	align-items: center;

	border: 1px solid $black-color;
	border-radius: $border-radius-medium;
	box-shadow: $shadow;

	&__title {
		line-height: 64px;
		font-weight: 500;
	}

	&__subtitle {
		padding: 0 75px;

		text-align: center;
		font-size: 16px;
		font-weight: 300;
	}

	&__inputs {
		display: flex;
		padding: 30px 45px 5px;

		flex-direction: column;
	}

	&__checkbox {
		display: flex;
		padding: 0 45px 25px;
		gap: 10px;

		flex-wrap: nowrap;
		align-items: center;
	}

	&__checkbox-text,
	&__checkbox-requirement {
		font-size: 12px;
		font-weight: 300;
	}

	&__checkbox-policy {
		color: $black-color;
	}

	&__checkbox-requirement {
		color: red;
	}

	&__submit {
		width: 100%;
		padding: 0 45px;
	}
}

@media (max-width: 768px) {
	@media (max-width: 1200px) {
		.modal {
			.form {
				width: 100%;
				max-width: 700px;
				height: auto;
				margin: 0 auto;
				padding: 40px 24px;
				box-shadow: none;
				border: none;
				border-radius: 0;

				&__title {
					font-size: 32px;
					line-height: 48px;
					text-align: center;
				}

				&__subtitle {
					padding: 0 24px;
					font-size: 18px;
					font-weight: 300;
					text-align: center;
					margin-top: 8px;
				}

				&__inputs {
					padding: 32px 0;
					gap: 24px;
				}

				&__checkbox {
					padding: 0 0 32px;
					align-items: flex-start;
					flex-direction: row;
				}

				&__checkbox-text {
					font-size: 14px;
					line-height: 1.4;
				}

				&__submit {
					padding: 0;
					max-width: 400px;
				}
			}
		}
	}
}
</style>