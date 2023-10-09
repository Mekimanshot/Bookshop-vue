import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'shop',
    component: () => import('../views/ListShop.vue')
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
