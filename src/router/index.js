import Vue from 'vue'
import Router from 'vue-router'
import IndexHome from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexHome',
      component: IndexHome
    }
  ]
})
