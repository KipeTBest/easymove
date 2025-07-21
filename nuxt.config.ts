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
    CHAT_ID_1: process.env.CHAT_ID_1,
    CHAT_ID_2: process.env.CHAT_ID_2,
    CHAT_ID_3: process.env.CHAT_ID_3,
    TOKEN: process.env.TOKEN,
  },
})