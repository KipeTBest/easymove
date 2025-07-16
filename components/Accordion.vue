<template>
	<div
		class="accordion"
		:class="{ 'accordion--active': isOpen }"
	>
		<button
			class="accordion__header"
			:class="{ 'accordion__header--active': isOpen }"
			@click="toggle"
		>
			<span class="accordion__icon-wrapper">
				<ChevronUp
					class="accordion__icon"
					:class="{ 'accordion__icon--rotated': !isOpen }"
					:size="19"
					color="#fff"
				/>
			</span>
			<span class="accordion__title">
				{{ title }}
			</span>
		</button>
		<transition name="accordion-fade">
			<div
				v-if="isOpen"
				class="accordion__content"
			>
				{{ description }}
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ChevronUp } from 'lucide-vue-next';

interface IAccordion {
	title: string;
	description: string;
}

const {
	title,
	description,
} = defineProps<IAccordion>();

const isOpen = ref(false)

const toggle = (): void => {
	isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.accordion {
	max-width: 810px;

	border: 1px solid $black-color;
	border-radius: $border-radius-small;
	box-shadow: $shadow;

	transition: box-shadow 0.3s ease-in-out;

	&__header {
		width: 100%;
		display: flex;
		padding: 13px;
		gap: 12px;

		align-items: center;

		background-color: transparent;
		border: none;
		border-radius: $border-radius-small;
		box-shadow: $shadow;
		cursor: pointer;

		&--active {
			border-bottom: 1px solid $black-color;
		}
	}

	&__icon-wrapper {
		width: 19px;
		height: 19px;
		display: flex;

		align-items: center;
		justify-content: center;

		border-radius: 50%;
		background-color: $accent-color;
	}

	&__icon {
		transition: transform 0.3s ease-in-out;

		&--rotated {
			transform: rotate(180deg);
		}
	}

	&__title {
		flex: 1;

		text-align: left;
		font-size: 16px;
		font-weight: 600;
		color: $black-color;
	}

	&__content {
		padding: 16px;

		font-size: 16px;
		font-weight: 300;
	}
}

.accordion-fade-enter-active,
.accordion-fade-leave-active {
	transition: all 0.2s ease-in-out;
}
.accordion-fade-enter-from,
.accordion-fade-leave-to {
	opacity: 0;
	transform: translateY(-5px);
}
</style>
