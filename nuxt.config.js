export default {
  target: 'static',
  head: {
    title: 'Laion',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Receba uma notificação quando houver um novo leilão da Receita Federal',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/laion.ico' }],
  },
  css: [],
  plugins: [],
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
