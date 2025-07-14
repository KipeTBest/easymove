export const groups = {
	'1': {
		phone: '+7 (999) 208-47-91',
		telegram: 'https://t.me/+ua31-C_lsexjM2Uy',
		whatsapp: 'https://wa.me/+79992084791',
		telegramChatId: '.',
	},
	'2': {
		phone: '+7 (999) 208-47-91',
		telegram: 'https://t.me/easy_move_park',
		whatsapp: 'https://chat.whatsapp.com/C2LpauB246M3mkMk9sw5wQ',
		telegramChatId: '.',
	},
	'3': {
		phone: '+7 (999) 208-47-91',
		telegram: 'https://t.me/+MXecDyPccS43ZGFi',
		whatsapp: 'https://wa.me/+79878088240',
		telegramChatId: '.',
	},
} as const;

export type GroupId = keyof typeof groups;
