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
  }
]

export {
  routes
}