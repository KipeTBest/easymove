// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'],
  ssr: true,
  app: {
    head: {
      title: 'Легкий Ход',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Описание лендинга' },
      ],
      link: [{ href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }]
    },
  },
  runtimeConfig: {
    TOKEN: process.env.TOKEN,
    CHAT_ID: process.env.CHAT_ID,
    public: {
      PHONE: process.env.PHONE,
      TELEGRAM_LINK: process.env.TELEGRAM_LINK,
      WHATSAPP_LINK: process.env.WHATSAPP_LINK,
    }
  }
})