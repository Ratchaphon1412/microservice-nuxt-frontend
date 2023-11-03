// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      script:[
        {
          hid: 'omise', src: 'https://cdn.omise.co/omise.js',
        }
      ]
    }
  },
  css:['~/assets/css/main.css'],
  modules: ['@nuxt/ui'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  runtimeConfig:{
    public:{
      omise:{
        publicKey: process.env.OMISE_PUBLIC_KEY,
      }
    }
  },

})
