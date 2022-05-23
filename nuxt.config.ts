import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@unocss/nuxt'],
    modules: ['@nuxtjs/supabase'],
    unocss: {
        uno: true, 
        icons: true,
        attributify: true, 
    },
    css: ['@/assets/css/main.css', '@unocss/reset/tailwind.css'],
    components: {
        global: true,
        dirs: ['~/components']
    }
})
