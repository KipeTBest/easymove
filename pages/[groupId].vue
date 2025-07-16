<template>
	<div class="home">
		<div class="home__header">
			<div class="home__header-background"></div>
			<div class="home__image-wrapper">
				<img class="home__image" src="/headerImg.png" alt="">
			</div>

			<div class="home__header-overlay">
				<div class="home__header-content">
					<div class="home__header-top">
						<div class="home__header-logo">
							<img class="home__header-icon" src="@/public/white_easymove.png" alt="">
							<h1 class="home__header-logo-text">Лёгкий Ход</h1>
						</div>
						<div class="home__contact">
							<span class="home__header-tel">Телефон горячей линии:</span>
							<a :href="`tel:${config.phone}`" class="home__header-phone">{{ config.phone }}</a>
						</div>
					</div>
					<div class="home__greeting">
						<h1 class="home__title">
							С нами сотрудничают<br>
							тысячи людей по всей стране,<br>
							более чем в 50 городах России
						</h1>
						<span class="home__description">
							Присоединяйтесь к нашей команде и начинайте зарабатывать уже сегодня
						</span>
						<div class="home__controls">
							<EMButton class="home__button" @click="toggleModal" />
							<div class="home__icon-wrapper">
								<HoverIcon
									type="telegram"
									@click="open('telegram')"
								/>
								<HoverIcon
									type="whatsapp"
									@click="open('whatsapp')"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="home__benefits">
			<h1 class="home__benefits-title">Наши преимущества</h1>
			<div class="home__benefits-container container">
				<Benefit
					title="Ежедневные выплаты"
					description="Курьерам нашего парка доступен ежедневный вывод средств. Деньги, заработанные за
					сегодняшний день, поступают на баланс и доступны к выводу в обед завтрашнего дня."
				>
					<Wallet :size="60" />
				</Benefit>
				<Benefit
					title="Быстрый старт"
					description="Оставьте заявку, пройдите процесс регистрации в сопровождении
					нашего специалиста и начните получать первые заказы уже через 20 минут!"
				>
					<Timer :size="60" />
				</Benefit>
				<Benefit
					title="Оперативная поддержка"
					description="Наличие собственной поддержки в мессенджерах. Наши специалисты всегда на связи и
					помогут с решением возникших вопросов!"
				>
					<Question :size="60" />
				</Benefit>
				<Benefit
					title="Удобный график и локации"
					description="Полностью свободный график работы с районом на выбор:
					работайте в удобное для вас время в выбранном районе!"
				>
					<MapPin :size="60" />
				</Benefit>
			</div>
			<Calculator @modal="toggleModal"/>
		</div>
		<div class="home__about">
			<h1 class="home__about-title">О нас</h1>
			<div class="home__about-container container">
				<img class="home__about-icon" src="@/public/favicon.ico" alt="">
				<span class="home__about-description">
					Мы являемся инновационным парком, который предлагает полный спектр поддержки каждому курьеру и сборщику:
					индивидуальная оперативная поддержка, компенсация продления или создания медкнижки,
					дополнительные выплаты за привлечение друзей, ежедневный вывод средств и многое другое
				</span>
			</div>
			<div class="home__jobs">
				<JobCard
					title="Авто курьер"
					description="Доставляйте заказы из ресторанов/магазинов, или прикрепитесь к одному гипермаркету
					и доставляйте оттуда одним рейсом по 5-10 заказов"
					@modal="toggleModal"
				/>
				<JobCard
					title="Пеший/Вело курьер"
					description="Доставляйте заказы из ресторанов/магазинов в удобном районе"
					@modal="toggleModal"
				/>
				<JobCard
					title="Сборщик"
					description="Собирайте заказы в прикрепленном магазине. Магазин прикрепления на выбор,
					свободный график работы"
					@modal="toggleModal"
				/>
			</div>
		</div>
		<div class="home__instruction">
			<h1 class="home__instruction-title">Как начать работать</h1>
			<div class="home__instruction-container container">
				<div class="home__steps">
					<Step
						title="Оставьте заявку на нашем сайте"
						number="1"
					/>
					<Step
						title="Ожидайте звонка нашего менеджера"
						number="2"
					/>
					<Step
						title="Пройдите процедуру регистрации"
						number="3"
					/>
					<Step
						title="Начните выполнять первые заказы и зарабатывать"
						number="4"
					/>
				</div>
				<div class="home__form">
					<EMForm />
				</div>
			</div>
		</div>
		<div class="home__questions">
			<h1 class="home__question-title">Часто задаваемые вопросы</h1>
			<div class="home__questions-container container">
				<div class="home__accordion">
					<Accordion
						title="Когда придут деньги за заказы?"
						description="Заработанные деньги можно выводить ежедневно, деньги приходят на счёт к обеду следующего дня"
					/>
					<Accordion
						title="Как присоединиться к вам?"
						description="Оставьте заявку на подключение и наш специалист свяжется с вами в течении 15 минут,
						после чего вы сможете начать работать моментально"
					/>
					<Accordion
						title="Рассматриваю работу в доставке как подработку. Возможен ли такой формат трудоустройства?"
						description="Конечно, мы рассматриваем всех кандидатов, в том числе подработчиков. У вас нет
						ограничений по времени работы"
					/>
				</div>
			</div>
		</div>
		<footer class="home__footer">
			<div class="home__footer-background">
				<div class="home__footer-container">
					<div class="home__footer-left-info">
						<span class="home__footer-tel">
							Телефон горячей линии:
						</span>
						<a
							class="home__footer-phone"
							:href="`tel:${config.phone}`"
						>
							{{ config.phone }}
						</a>
						<span class="home__footer-owner">
							ИП Акбаев Эрик Султанович,<br>
							ИНН: 091801983601, ОГРН: 325784700001183
						</span>
						<span class="home__footer-links">
							<div class="home__footer-box" />
							<a
								class="home__footer-link"
								href="/policy"
							>
								Политика конфиденциальности
							</a>
						</span>
					</div>
					<div class="home__footer-right-info">
						<span class="home__footer-social">
							Наши социальные сети:
						</span>
						<div class="home__footer-social-icons">
							<img
								class="home__footer-icon home__footer-icon--telegram"
								src="@/public/telegram-svgrepo-com.svg"
								alt=""
								@click="open('telegram')"
							>
							<img
								class="home__footer-icon home__footer-icon--whatsapp"
								src="@/public/whatsapp-color-svgrepo-com.svg"
								alt=""
								@click="open('whatsapp')"
							>
						</div>
						<span class="home__footer-additional-links">
							<a
								href="https://lucide.dev/license"
								target="_blank"
							>
								Lucide License
							</a>
							<br>
							<a
								href="https://t.me/KipeTbest"
								target="_blank"
							>created by KipeT
							</a>
						</span>
					</div>
				</div>
			</div>
		</footer>
		<Modal v-if="isModalOpen" @close="toggleModal"></Modal>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
	Wallet,
	Timer,
	MessageCircleQuestionMark as Question,
	MapPin,
} from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import { groups } from '@/utils/group-config';

const route = useRoute();
const groupId = route.params.groupId as keyof typeof groups;
const config = groups[groupId];

const isModalOpen = ref(false);

const toggleModal = (): void => {
	isModalOpen.value = !isModalOpen.value;
}

const open = (type: 'telegram' | 'whatsapp'): void => {
	const url = type === 'telegram' ? config.telegram : config.whatsapp;
	window.open(url, '_blank');
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.home {
	&__header {
		height: 600px;
		display: flex;
		position: relative;

		overflow: hidden;
	}

	&__header-background {
		flex: 1;

		background-color: $black-color;

		color: $white-color;
	}

	&__image-wrapper {
		width: 600px;
		height: 600px;
		position: relative;

		&::after {
			position: absolute;

			content: "";
			inset: 0;
			background: radial-gradient(
					circle at right center,
					rgba(0, 0, 0, 0) 0%,
					rgba(0, 0, 0, 0.5) 40%,
					rgba(0, 0, 0, 1) 85%,
					rgba(0, 0, 0, 1) 100%
			);
			pointer-events: none;
		}
	}

	&__image {
		width: 100%;
		height: 100%;
		display: block;

		object-fit: cover;
	}

	&__benefits,
	&__about,
	&__instruction,
	&__questions {
		display: flex;
		max-width: 1230px;
		margin: 0 auto;

		justify-content: center;
		align-items: center;
		flex-direction: column;
		flex-wrap: nowrap;
	}

	&__benefits-title,
	&__about-title,
	&__instruction-title,
	&__questions-title {
		padding-top: 50px;
	}

	&__benefits-container,
	&__about-container,
	&__instruction-container,
	&__questions-container {
		padding: 50px 0;
	}

	&__about-description {
		max-width: 1120px;

		font-size: 20px;
	}

	&__about-icon {
		width: 75px;
		height: 75px;
	}

	&__jobs,
	&__steps,
	&__accordion,
	&__icon-wrapper {
		display: flex;
		gap: 30px;
	}

	&__footer-social-icons {
		display: flex;
		gap: 10px;

		flex-direction: row-reverse;
	}

	&__steps {
		flex-direction: column;
	}

	&__accordion {
		gap: 16px;

		flex-direction: column;
		flex-wrap: wrap;
	}

	&__footer {
		height: 200px;
		display: flex;
	}

	&__footer-background {
		padding: 20px 0;

		flex: 1;

		background-color: $black-color;

		color: $white-color;
	}

	&__footer-container {
		max-width: 1230px;
		display: flex;
		margin: 0 auto;

		justify-content: space-between;
		flex-wrap: nowrap;
	}

	&__header-container {
		display: flex;
		padding: 50px 0 50px 345px;

		flex-direction: column;
	}

	&__header-logo {
		display: flex;
		gap: 20px;

		align-items: center;
	}

	&__header-logo-text,
	&__title {
		color: $white-color;
	}

	&__footer-left-info,
	&__footer-right-info {
		display: flex;
		gap: 6px;

		flex-direction: column;
		flex-wrap: nowrap;
	}

	&__header-tel,
	&__footer-tel,
	&__footer-social {
		font-size: 16px;
		font-weight: 600;
		line-height: 26px;
	}

	&__header-phone,
	&__footer-phone {
		font-size: 32px;
		font-weight: 300;
		line-height: 32px;
	}

	&__footer-owner,
	&__footer-link,
	&__footer-additional-links {
		font-size: 16px;
		line-height: 26px;
		font-weight: 300;
	}

	&__footer-owner {
		padding-top: 16px;
	}

	&__footer-links {
		display: flex;
		padding: 0 10px;
		gap: 10px;

		flex-wrap: nowrap;
		align-items: center;
	}

	&__footer-box {
		width: 4px;
		height: 4px;

		background-color: $white-color;
	}

	&__footer-icon--whatsapp {
		width: 36px;
		height: 36px;
	}

	&__footer-icon--telegram {
		width: 40px;
		height: 40px;
	}

	&__footer-additional-links {
		padding: 40px 0 0;

		text-align: right;
	}

	&__header-icon {
		width: 90px;
		height: 90px;
	}

	&__contact {
		display: flex;
		margin: 0 auto;

		flex-direction: column;
		justify-content: center;
	}

	&__title {
		padding: 50px 0;
	}

	&__header-top {
		display: flex;
	}

	&__header-overlay {
		position: absolute;
		display: flex;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 50px 0;

		justify-content: center;
		pointer-events: none;
	}

	&__header-content {
		width: 100%;
		max-width: 1230px;
		display: flex;

		flex-direction: column;
		pointer-events: auto;

		color: $white-color;
	}

	&__controls {
		display: flex;
		padding: 50px 0;
		gap: 30px;

		align-items: center;
	}

	&__button {
		width: 220px;
	}
}

.container {
	max-width: 1230px;
	display: flex;
	gap: 30px;

	text-align: left;
	flex-wrap: wrap;
}

@media (max-width: 1250px) {
	.home {
		&__header {
			height: auto;
		}

		&__image-wrapper {
			width: 100%;
			height: 400px;
		}

		&__header-content {
			margin: 0 auto;
			max-width: 800px;
		}

		&__header-top {
			justify-content: space-between;
		}

		&__header-icon {
			width: 50px;
			height: 50px;
		}

		&__header-logo-text {
			font-size: 24px;
		}

		&__contact {
			margin: 0;
		}

		&__title {
			font-size: 30px;
			line-height: 36px;
			padding: 24px 0;
		}

		&__description {
			font-size: 16px;
		}

		&__controls {
			padding: 24px 0;
		}

		&__benefits,
		&__about,
		&__questions {
			max-width: 800px;
		}

		&__benefits-title,
		&__about-title,
		&__instruction-title,
		&__question-title {
			padding-top: 24px;
		}

		&__benefits-container,
		&__instruction-container {
			padding: 24px 0 0;
			justify-content: center;
			gap: 0;
		}

		&__questions-container {
			padding: 24px 0;
		}

		&__about-container {
			gap: 24px;
			padding: 24px 0;
		}

		&__about-icon {
			display: none;
		}

		&__jobs {
			width: 1000px;
			flex-wrap: wrap;
			justify-content: center;
		}

		&__instruction {
			width: 824px;
		}

		&__instruction-container {
			gap: 24px;
		}

		&__footer-container {
			align-items: center;
			padding: 0 24px;
		}
	}

	.container {
		align-items: center;
	}
}

@media (max-width: 1000px) {
	.home {
		&__jobs {
			width: 100%;
		}
	}
}

@media (max-width: 768px) {
	.home {
		&__header-content {
			max-width: 600px;
		}

		&__benefits,
		&__about,
		&__questions {
			max-width: 600px;
		}

		&__benefits-title,
		&__about-title,
		&__instruction-title,
		&__question-title {
			font-size: 40px;
		}

		&__about-description {
			text-align: justify;
		}

		&__instruction {
			width: 600px;
		}

		&__steps {
			gap: 12px;
		}

		&__footer-container {
			max-width: 600px;
		}
	}
}

@media (max-width: 480px) {
	.home {
		&__header-content {
			max-width: 400px;
		}

		&__header-top {
			flex-direction: column;
			gap: 40px;
		}

		&__header-logo-text {
			font-size: 50px;
		}

		&__header-icon {
			width: 75px;
			height: 75px;
		}

		&__header-content {
			gap: 20px;
		}

		&__title {
			display: none;
		}

		&__greeting {
			justify-content: center;
		}

		&__benefits,
		&__about,
		&__questions {
			max-width: 400px;
		}

		&__benefits-title,
		&__about-title,
		&__instruction-title,
		&__question-title {
			font-size: 40px;
			text-wrap: wrap;
		}

		&__question-title {
			text-align: center;
		}

		&__about-description {
			text-align: justify;
		}

		&__instruction {
			width: 400px;
		}

		&__steps {
			gap: 12px;
		}

		&__footer {
			height: auto;
		}

		&__footer-container {
			max-width: 400px;
			flex-direction: column;

			align-items: unset;

			gap: 20px;
		}

		&__footer-social-icons {
			flex-direction: row;
		}

		&__footer-additional-links {
			text-align: left;
			padding: 20px 0 0;
		}
	}

	.lucide {
		display: none;
	}

	.calculator {
		margin-top: 20px;
	}
}

@media (max-width: 420px) {
	.home {
		&__header-content {
			max-width: 300px;
		}

		&__header-top {
			flex-direction: column;
			gap: 16px;
		}

		&__header-logo-text {
			font-size: 36px;
		}

		&__header-icon {
			width: 70px;
			height: 70px;
		}

		&__header-logo {
			justify-content: space-between;
		}

		&__header-content {
			gap: 36px;
		}

		&__title {
			display: none;
		}

		&__greeting {
			justify-content: center;
		}

		&__benefits,
		&__about,
		&__questions {
			max-width: 300px;
		}

		&__benefits-title,
		&__about-title,
		&__instruction-title,
		&__question-title {
			font-size: 30px;
			line-height: 30px;
			text-wrap: wrap;
		}

		&__about-description {
			text-align: justify;
		}

		&__instruction {
			width: 300px;
		}

		&__steps {
			gap: 12px;
		}

		&__footer {
			height: auto;
		}

		&__footer-container {
			max-width: 400px;
			flex-direction: column;

			align-items: unset;

			gap: 20px;
		}

		&__footer-social-icons {
			flex-direction: row;
		}

		&__footer-additional-links {
			text-align: left;
			padding: 20px 0 0;
		}
	}

	.container {
		max-width: 300px;
	}
}
</style>
