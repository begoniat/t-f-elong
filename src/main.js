// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
<<<<<<< HEAD
import 'jquery'

Vue.use(MintUI)
=======
import 'assets/asset/css/asset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'assets/asset/css/swiper.css'
import 'assets/iconfont/iconfont.css'
>>>>>>> dec24f161a4a8899aefc93f6fe9878877247d50b

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
