import Vue from 'vue'
import Router from 'vue-router'
import logincer from '../parges/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/login"},
    {path :"/login",component:logincer}
  ]
})
