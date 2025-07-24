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
        { name: 'description', content: 'Описание лендинга' },
      ],
      link: [{ href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }]
    },
  },
  runtimeConfig: {
    TOKEN: '',
    CHAT_ID: '',
    public: {
      PHONE: '',
      TELEGRAM_LINK: '',
      WHATSAPP_LINK: '',
    }
  }
})