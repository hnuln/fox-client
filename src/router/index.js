import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系: path -> component
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/home',
      component: () => import('@/views/login/login-view.vue')
    },
    {
      path: '/logion',
      component: () => import('@/views/login/login-view.vue')
    },
    {
      path: '/register',
      component: () => import('@/views/register/register-view.vue')
    },
    {
      path: '/team',
      component: () => import('@/views/team/team-view.vue')
    },
    {
      path: '/main',
      component: () => import('@/views/main/main-view.vue'),
      children: [
        {
          path: '',
          redirect: '/main/interface'
        },
        {
          path: 'interface',
          component: () =>
            import('@/views/main/interface-manage/interface-view.vue')
        },
        {
          path: 'imock',
          component: () => import('@/views/main/mock-server/mock-view.vue')
        },
        {
          path: 'history',
          component: () =>
            import('@/views/main/history-manage/history-view.vue')
        }
      ]
    }
  ]
})

export default router
