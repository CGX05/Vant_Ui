import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue'),
      children:[
        {
          path:'/home/backup',
          name:'backup',
          component: () => import('../views/backup.vue'),
          meta:{
            title: '数据备份'
          }
        },
        {
          path:'/home/process',
          name:'process',
          component: () => import('../views/process.vue'),
          meta:{
            title: '进程管理'
          }
        },
        {
          path:'/home/healthy',
          name:'healthy',
          component: () => import('../views/healthy.vue'),
          meta:{
            title: '健康检查'
          }
        }
      ]
    },
  ],
})

export default router
