import Dashboard from "../components/Dashboard"
import Login from "../components/Login"
import Registration from "../components/Registration"

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Login />
  },
  {
    path: '/registration',
    name: 'Registration',
    element: <Registration />
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
]

export {
  routes
}