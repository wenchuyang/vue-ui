import { createApp } from 'vue'
import App from './App.vue'
import Wency from './components/Wency.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: App},
        {path: '/Wency', component: Wency}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
