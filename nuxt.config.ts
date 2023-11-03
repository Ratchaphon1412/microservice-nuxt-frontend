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

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@pinia/nuxt',
  ],
  devtools: { 
    enabled: true 
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  runtimeConfig:{
    public:{
      apiBaseURL: "http://localhost/api/",
      URL_ENDPOINT: "https://fakestoreapi.com/products/",
      omise:{
        publicKey: process.env.OMISE_PUBLIC_KEY,
      }
    }
  },
  
  ssr: true
})