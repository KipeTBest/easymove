<template>
	<transition name="fade">
		<div v-if="visible" class="toast">
			Заявка отправлена. Ожидайте звонка
		</div>
	</transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const visible = ref(true);

onMounted(() => {
	setTimeout(() => {
		visible.value = false;
	}, 3000);
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.toast {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	justify-content: center;
	align-items: center;

	z-index: 999;

	background-color: $accent-color;
	color: white;
	padding: 12px 20px;
	border-radius: $border-radius-small;
	box-shadow: $shadow;
	font-size: 16px;
	max-width: 90%;
	text-align: center;
	animation: popin 0.3s ease;
}

@keyframes popin {
	0% {
		transform: translateX(-50%) scale(0.9);
		opacity: 0;
	}
	100% {
		transform: translateX(-50%) scale(1);
		opacity: 1;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
