import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index/index'

import Mint from 'mint-ui'
Vue.use(Mint)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//当你访问根路径时返回一个“name”
      name: 'Index',
      component: Index
    }
  ]
})
