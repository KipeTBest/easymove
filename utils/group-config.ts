export const groups = {
	'1': {
		phone: '+7 (999) 208-47-91',
		telegram: 'https://t.me/legkiykhod_dp_team1_bot',
		whatsapp: 'https://wa.me/+79992084791',
		chatId: '1',
	},
	'2': {
		phone: '+7 (999) 208-47-91',
		telegram: 'https://t.me/legkiykhod_support_bot',
		whatsapp: 'https://chat.whatsapp.com/C2LpauB246M3mkMk9sw5wQ',
		chatId: '2',
	},
	'3': {
		phone: '+7 (999) 208-47-91',
		telegram: 'https://t.me/legkiykhod_dp_team3_bot',
		whatsapp: 'https://wa.me/+79878088240',
		chatId: '3',
	},
} as const;

export type GroupId = keyof typeof groups;
