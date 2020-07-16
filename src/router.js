import Vue from 'vue'
import Router from 'vue-router'

import store from './store'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import PastPurchases from './views/PastPurchases.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/past-purchases',
      name: 'past-purchases',
      component: PastPurchases
    }
  ]
})

router.beforeEach((to, from, next) => {
    store.commit('setDrawer', false)
    next()
  }
)
export default router
