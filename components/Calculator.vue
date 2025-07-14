<template>
	<div class="calculator">
		<h2 class="calculator__title">
			Калькулятор дохода
		</h2>
		<div class="calculator__body">
			<div class="calculator__sliders">
				<RangeInput
					v-model="hours"
					title="Часы в день"
					:min="4"
					:max="16"
				/>
				<RangeInput
					v-model="days"
					title="Дней в месяц"
					:min="1"
					:max="30"
				/>
			</div>
			<div class="calculator__summary">
				<div class="calculator__total">
					<span class="calculator__label">
						Итого:
					</span>
					<span class="calculator__amount">
						{{ formattedTotal }} ₽
					</span>
				</div>
				<EMButton @click.prevent="emit('modal')" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const emit = defineEmits(['modal'])

const ratePerHour = 418;

const hours = ref<number>(9);
const days = ref<number>(10);

const total = computed<number>(() => hours.value * days.value * ratePerHour);

const formattedTotal = computed<string>(() =>
	total.value.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
);
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.calculator {
	min-width: 600px;
	display: flex;
	padding: 20px;
	gap: 24px;

	flex-direction: column;

	border: 1px solid $black-color;
	border-radius: $border-radius-medium;
	box-shadow: $shadow;

	&__title {
		margin: 0;

		font-weight: 600;
		text-align: left;
	}

	&__body {
		display: flex;
		gap: 30px;

		align-items: stretch;
	}

	&__sliders {
		display: flex;
		gap: 20px;

		flex: 1;
		flex-direction: column;
		justify-content: flex-end;
	}

	&__summary {
		display: flex;
		gap: 16px;

		flex: 1;
		justify-content: center;
		flex-direction: column;
	}

	&__total {
		display: flex;

		align-items: center;
		justify-content: space-between;

		font-size: 24px;
		font-weight: 300;
	}

	&__label {
		color: $black-color;
	}

	&__amount {
		font-weight: 300;
	}
}

@media (max-width: 1250px) {
	.calculator {
		&__title {
			font-size: 30px;
		}
	}
}

@media (max-width: 480px) {
	.calculator {
		min-width: auto;
		padding: 16px;
		gap: 16px;

		&__body {
			flex-direction: column;
			gap: 24px;
		}

		&__sliders,
		&__summary {
			width: 100%;
		}

		&__total {
			font-size: 20px;
		}
	}
}

@media (max-width: 420px) {
	.calculator {
		&__title {
			font-size: 24px;
		}
	}
}
</style>
