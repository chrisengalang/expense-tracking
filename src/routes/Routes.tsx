import DashboardOutlet from "../components/DashboardOutlet"
import Dashboard from "../components/Dashboard"
import Login from "../components/Login"
import Registration from "../components/Registration"
import Profile from "../components/Profile"

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
    element: <DashboardOutlet />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/dashboard/profile',
        element: <Profile />
      }
    ]
  }
]

export {
  routes
}