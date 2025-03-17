// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/png', href: '/VASLAi_Favicon.png' }]
    }
},

  vite: {
    vue: {
        script: {
            defineModel: true,
            propsDestructure: true
        }
    }
},

  ssr:true,

  runtimeConfig: {
    // The private keys which are only available server-side
    // apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "https://clinicaltrials.gov/api/v2",
    },
  },

  modules: ["nuxt-svgo", 'nuxt-primevue', '@pinia/nuxt','@vee-validate/nuxt'],

  veeValidate:{
    autoImports:true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },

  svgo: {
    autoImportPath: "./assets/other-icons/",
  },

  primevue: {
    options: {
      unstyled: true
    },
},

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-01-03'
});