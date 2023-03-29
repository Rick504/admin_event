import AdminsList from './AdminsList.vue';

export default [
  {
    name: 'Admins',
    path: '/admins',
    component: AdminsList,
    meta: {
      title: 'Admins',
      public: false,
      layout: {
        dialogs: {
          select: true,
        },
      },
    },
  },
];
