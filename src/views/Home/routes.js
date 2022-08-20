import Home from '@/views/Home/_Home.vue'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home',
      public: true,
      layout: {
        dialogs: {
          select: false
        }
      }
    }
  }
]
