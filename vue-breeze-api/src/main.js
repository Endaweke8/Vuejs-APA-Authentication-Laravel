import { createApp,markRaw } from 'vue'

import './style.css'
import './axios'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

import "@fontsource/koho/200.css"
import "@fontsource/koho/300.css"
import "@fontsource/koho/400.css"
import "@fontsource/koho/500.css"
import "@fontsource/koho/600.css"
import "@fontsource/koho/700.css"

const pinia=createPinia();

pinia.use(({store})=>{
    store.router=markRaw(router)
})

const app=createApp(App);
app.use(pinia);
app.use(router)


app.mount('#app')
