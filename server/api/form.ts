import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const body = await readBody(event);

	const { fullName, phone, city } = body;

	const telegramChatId = config.CHAT_ID;
	const TELEGRAM_TOKEN = config.TOKEN;
	const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

	const message = `
		Новая заявка:
		ФИО: ${fullName}
		Телефон: ${phone}
		Город: ${city || 'Не указано'}
		`.trim();

	try {
		const res = await fetch(TELEGRAM_API, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: telegramChatId,
				text: message,
			}),
		});
	} catch (error) {
		console.error('Ошибка отправки Telegram:', error);
	}
})
