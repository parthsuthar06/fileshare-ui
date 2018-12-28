import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ './home/Home.vue')
    },
    {
      path: '/view-all',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "viewAll" */ './view-all/ViewAll.vue')
    },
    {
      path: '/delete-file/:id',
      component: () => import(/* webpackChunkName: "deleteFile" */ './delete-file/DeleteFile.vue')
    },
    { path: '*', redirect: '/' }
  ]
})
