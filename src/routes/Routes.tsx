import Login from "../components/authentication/Login"
import Registration from "../components/authentication/Registration"

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Login />
  },
  {
    path: '/registration',
    name: 'Registartion',
    element: <Registration />
  }
]

export {
  routes
}