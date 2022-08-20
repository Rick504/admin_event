import AdminsList from './AdminsList.vue'

export default [
  {
    path: '/admins',
    component: AdminsList,
    meta: {
      title: 'Admins',
      layout: {
        dialogs: {
          select: true
        }
      }
    }
  }
]
