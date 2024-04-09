import {createWebHistory, createRouter} from 'vue-router';

import AccountsView from './components/AccountsView.vue'
import DealsView from './components/DealsView.vue'


const routes = [
    {path: '/accounts', component: AccountsView},
    {path: '/deals', component: DealsView},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
