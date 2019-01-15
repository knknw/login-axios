import Vue from 'vue'
import App from './App'
import router from './router/touter'

Vue.config.productionTip = false

//引入element-UI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//注册element-UI组件
Vue.use(ElementUI)
import axios from "axios"
//配置全局请求头
axios.defaults.baseURL = 'http://litc.pro:9999/v1/'
//将axios挂到vue的原型上,这样就可以全局访问axios,不必每个页面都重复引入了
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app', //el的作用是 将vue实例与主业html页面像关联
  router,//作用是挂载路由
  render:c => c (App) //作用是将模板组件App渲染到html页面上 
})
