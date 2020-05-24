import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    // 默认
    path: '/',
    component: Home
  },
  {
    path: '/about',component: () => import('../views/Home.vue'),children:[
      {path: '/about/home',component:()=>import('../views/About.vue')}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
