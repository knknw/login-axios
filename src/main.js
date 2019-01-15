import Vue from 'vue'
import App from './App'
import router from './router/touter'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', //el的作用是 将vue实例与主业html页面像关联
  router,//作用是挂载路由
  render:c => c (App) //作用是将模板组件App渲染到html页面上 
})
