import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/index.vue'),
    meta: { layout: 'default' },
  },
  {
    path: '/singleForm',
    component: () => import('@/pages/singleForm.vue'),
    meta: { layout: 'default' },
  },
  {
    path: '/multiForm',
    component: () => import('@/pages/multiForm.vue'),
    meta: { layout: 'default' },
  },
  {
    path: '/tabForm',
    component: () => import('@/pages/tabForm.vue'),
    meta: { layout: 'default' },
  },
  {
    path: '/dataTable',
    component: () => import('@/pages/dataTable.vue'),
    meta: { layout: 'default' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.onError((error, to) => {
  if (
    error.message.includes('Failed to fetch dynamically imported module') ||
    error.message.includes('Importing a module script failed')
  ) {
    window.location.href = to.fullPath
  }
})

export default router
