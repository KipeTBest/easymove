<template>
	<div class="modal" @click.self="emit('close')">
		<div class="modal__content">
			<button class="modal__close" @click="emit('close')" aria-label="Закрыть">
				×
			</button>
			<EMForm />
		</div>
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close']);
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;

	justify-content: center;
	align-items: center;

	background-color: rgba(0, 0, 0, 0.8);
	z-index: 999;

	&__content {
		background: $white-color;
		border-radius: $border-radius-medium;
	}

	&__close {
		position: absolute;
		top: 20px;
		right: 20px;

		background: none;
		border: none;
		font-size: 32px;
		line-height: 1;
		cursor: pointer;
		color: $black-color;

		z-index: 1;

		display: none;
	}

}

@media (max-width: 768px) {
	.modal {
		align-items: flex-start;
		padding: 24px 0;
		background-color: $white-color;

		background: $white-color;

		&__content {
			width: 100%;
			height: 100dvh;

			border-radius: 0;
			overflow-y: auto;

			padding: 24px;
			box-sizing: border-box;

			display: flex;
			flex-direction: column;
			align-items: stretch;
		}

		&__close {
			display: unset;
		}
	}
}
</style>
