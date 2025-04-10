import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import APP2 from './APP2.vue'

import Home from './views/Home.vue'
import LeftSidebar from './views/LeftSidebar.vue'
import RightSidebar from './views/RightSidebar.vue'
import APP3 from './APP3.vue'

const app = createApp(APP3)

app.use(createPinia())
app.use(router)

app.mount('#app')
