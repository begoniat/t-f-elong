import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
//import HelloWorld from '@/components/HelloWorld'
import Ticket from '@/components/Ticket'
import List from '@/components/List'
import Regist from '@/components/Regist'
import Login from '@/components/Login'
import Photo from '@/components/Photo'
=======
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index/index'
>>>>>>> dec24f161a4a8899aefc93f6fe9878877247d50b

import Mint from 'mint-ui'
Vue.use(Mint)
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
