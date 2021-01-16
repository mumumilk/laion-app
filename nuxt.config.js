export default {
  target: 'static',
  head: {
    title:
      'Laion - Seja notificado quando houver um novo Leilão da Receita Federal',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Receba uma notificação no seu e-mail quando houver um novo leilão da Receita Federal',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/laion.ico' }],
  },
  css: [],
  plugins: ['~plugins/filters.js'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  build: {},
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://laion-api.azurewebsites.net/graphql',
      },
    },
  },
};
