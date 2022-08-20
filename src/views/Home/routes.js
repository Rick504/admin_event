import Home from '@/views/Home/_Home.vue'

export default [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home',
      public: false,
      layout: {
        dialogs: {
          select: false
        }
      }
    }
  }
]
