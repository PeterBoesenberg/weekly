
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'weekly', component: () => import('pages/Weekly.vue') },
      { path: 'confidence', component: () => import('pages/Confidence.vue') },
      { path: 'changes', component: () => import('pages/Changes.vue') },
      { path: 'health', component: () => import('pages/Health.vue') },
      { path: 'tasks', component: () => import('pages/Tasks.vue') },
      { path: 'backlog', component: () => import('pages/Backlog.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
