import Accounts from "../components/Accounts"
import Dashboard from "../components/Dashboard"
import Login from "../components/Login"
import Registration from "../components/Registration"

const routes = [
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/accounts",
    element: <Accounts />
  }
]

export {
  routes
}