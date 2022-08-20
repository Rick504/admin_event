import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/views/routes'

Vue.use(VueRouter)
const router = new VueRouter({ routes })

// // Verifica se o meta.public é true, caso não seja ele direciona para tela de login
// router.beforeEach((to, from, next) => {
//     if (!to.meta?.public) next({ path: '/login' })
//     else next()
//   })


export default router
