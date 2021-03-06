
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title:  '深圳网站建设-网页制作-辉域',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css' },
      { rel: 'stylesheet', href: 'http://qn-static.dmagic.cn/public.1.0.2.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src: '~plugins/ElementUI',
    ssr: true,
  }],
  css: [
    '~assets/css/longting.css'
    // 'element-ui/lib/theme-chalk/index.css'
  ],
  vendor:['element-ui'],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
