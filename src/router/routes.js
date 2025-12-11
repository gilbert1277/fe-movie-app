const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        name: 'dashboardAdmin'
      },
      {
        path: 'genre',
        component: () => import('pages/admin/genre/indexPage.vue'),
        name: 'genreAdmin'
      }
    ]
  },
  {
    path: '/',
    component: () => import('pages/auth/LoginPage.vue'),
    name: 'LoginPage'
  },
  {
    path: '/register',
    component: () => import('pages/auth/RegisterPage.vue'),
    name: 'registerPage'
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
