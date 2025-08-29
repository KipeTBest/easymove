// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'],
  ssr: true,
  app: {
    head: {
      title: 'Легкий Ход',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Вакансии в службе доставки с высоким доходом' },
        { name: 'yandex-verification', content: '0b9ab340fe50f63a' },
        { name: 'google-site-verification', content: 'vrYNL9fSOOYW5r0o4PNO3AV0DZE9cT16dMYMa8D9i2s' },
      ],
      link: [{ href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }]
    },
  },
  runtimeConfig: {
    TOKEN: process.env.TOKEN,
    CHAT_ID: process.env.CHAT_ID,
    public: {
      PHONE: process.env.PHONE,
      YM_TOKEN: process.env.YM_TOKEN,
      TELEGRAM_LINK: process.env.TELEGRAM_LINK,
      WHATSAPP_LINK: process.env.WHATSAPP_LINK,
    }
  }
})