<template>
	<div class="benefit">
		<div class="benefit__header">
			<slot class="benefit__icon" />
			<h2 class="benefit__title">
				{{ title }}
			</h2>
		</div>
		<p class="benefit__description">
			{{ description }}
		</p>
	</div>
</template>

<script setup lang="ts">
interface IBenefit {
	title: string;
	description: string;
}

const {
	title,
	description,
} = defineProps<IBenefit>();
</script>

<style scoped lang="scss">
.benefit {
	min-width: 600px;
	min-height: 155px;

	&__header {
		display: flex;
		gap: 15px;

		flex-wrap: nowrap;
		align-items: center;
	}

	&__description {
		max-width: 580px;
		padding-left: 75px;
		margin: 0;

		text-wrap: wrap;
	}
}

@media (max-width: 1250px) {
	.benefit {
		min-width: 375px;

		&__title {
			font-size: 30px;
		}
	}
}

@media (max-width: 480px) {
	.benefit {
		min-height: 80px;

		&__title {
			font-size: 24px;
		}

		&__description {
			max-width: 400px;

			padding: 10px 0;
		}
	}
}

@media (max-width: 420px) {
	.benefit {
		min-height: 80px;
		min-width: 300px;
		text-align: center;

		&__title {
			font-size: 24px;
		}

		&__header {
			justify-content: center;
		}

		&__description {
			max-width: 300px;

			padding: 10px 0;
		}
	}
}
</style>