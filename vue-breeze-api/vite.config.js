import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: 
  [
    vue(),
    VitePWA({
      manifest:{
        icons:[
         {
          src:"/icons/endexu.jpg",
          sizes:"512*512",
          type:'image/jpg',
          purpose:"Any Maskable"
         }
        ]
      }
    })
  ],
  server:{
    port:3000,
  }
})
