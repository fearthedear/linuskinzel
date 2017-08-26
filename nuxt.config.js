module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Linus Kinzel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Web Dev and Product Manager at dahmakan. Living in KL.' },
      { property: 'og:title', content: 'Linus Kinzel' },
      { property: 'og:description', content:'Web Dev and Product Manager at dahmakan. Living in KL.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.linuskinzel.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    ['@nuxtjs/google-analytics', { ua: 'UA-77760748-2' }],
  ],
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
