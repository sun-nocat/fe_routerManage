import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import HeaderItem from '@/components/HeaderItem'

import Login from '../views/login/index'
import Home from '../views/home/index'
import MainItem621 from '@/components/MainItem621'
import StepsItem from '@/components/StepsItem'
import EditItem from '@/components/EditItem'
import ErrorItem from '@/components/ErrorItem'
import UserItem from '@/components/UserItem'
import MonitorItem from '@/components/MonitorItem'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [ //使用子路由
        {
          path: '/vlan621',
          name: 'MainItem621',
          component: MainItem621,
          children: [{
            path: 'edit',
            name: 'EditItem',
            component: EditItem,
          }]
        },
        {
          path: '/stepitem',
          name: 'StepsItem',
          component: StepsItem,
        },
        {
          path: '/erroritem',
          name: 'ErrorItem',
          component: ErrorItem,
        },
        {
          path: '/useritem',
          name: 'UserItem',
          component: UserItem,
        },
        {
          path: '/monitoritem',
          name: 'MonitorItem',
          component: MonitorItem
        }
      ]
    }

  ]
})
