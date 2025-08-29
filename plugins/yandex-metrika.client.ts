// plugins/yandex-metrika.client.ts
export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

	const TOKEN = config.public.YM_TOKEN;

	if (typeof window === 'undefined') return;

	(function(m: any, e: any, t: any, r: any, i: any, k?: any, a?: any) {
		m[i] = m[i] || function() {
			(m[i].a = m[i].a || []).push(arguments);
		};
		m[i].l = 1 * new Date();
		for (let j = 0; j < e.scripts.length; j++) {
			if (e.scripts[j].src === r) return;
		}
		k = e.createElement(t);
		a = e.getElementsByTagName(t)[0];
		k.async = 1;
		k.src = r;
		a.parentNode.insertBefore(k, a);
	})(window, document, 'script', `https://mc.yandex.ru/metrika/tag.js?id=${TOKEN}`, 'ym');

	(window as any).ym(TOKEN, 'init', {
		ssr: true,
		webvisor: true,
		clickmap: true,
		accurateTrackBounce: true,
		trackLinks: true,
	});
});
