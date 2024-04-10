import {createWebHistory, createRouter} from 'vue-router';

import AccountsView from './components/AccountsView.vue'
import DealsView from './components/DealsView.vue'
import IndexView from "@/components/IndexView.vue";


const routes = [
    {path: '/', component: IndexView},
    {path: '/accounts', component: AccountsView},
    {path: '/deals', component: DealsView},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
