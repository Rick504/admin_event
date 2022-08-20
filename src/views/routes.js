import Home from '@/views/Home/routes'
import Login from '@/views/Login/routes'
import AdminsList from '@/views/Home/components/admins/routes'

export default [
    ...Home,
    ...Login,
    ...AdminsList
]
