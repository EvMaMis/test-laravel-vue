import './bootstrap'
import {createApp} from "vue"
import App from './components/App.vue'
import {router} from "./router.js";

const app = createApp(App).use(router).mount('#app')
