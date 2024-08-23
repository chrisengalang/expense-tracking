import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link, Outlet } from "react-router-dom"

const Accounts = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div>
      <h1>
        Accounts for { currentUser.displayName }
      </h1>
      <Link to='add'>Add</Link>
      <Link to=''>List</Link>
      <Outlet />
    </div>
  )
}

export default Accounts