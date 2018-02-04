import Vue from 'vue'
import Router from 'vue-router'

//import HelloWorld from '@/components/HelloWorld'
import Ticket from '@/components/Ticket'
import List from '@/components/List'
import Regist from '@/components/Regist'
import Login from '@/components/Login'
import Photo from '@/components/Photo'

// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index/index'


import Mint from 'mint-ui'
Vue.use(Router)

/*export default new Router({
  routes: [
    {
      path: '/',//当你访问根路径时返回一个“name”
      name: 'Index',
      component: Index
    }
  ]
})*/
export default new Router({
	mode: "hash",
  routes: [
   {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
     {
      path: '/photo',
      name: 'Photo',
      component: Photo
    }
  ]
})
