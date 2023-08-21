import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

import 'normalize.css'
import '@/assets/css/index.less'
import '@arco-design/web-vue/dist/arco.css'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.mount('#app')
