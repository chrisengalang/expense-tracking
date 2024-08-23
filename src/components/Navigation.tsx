import { Link, useNavigate } from "react-router-dom"
import { signOut } from "../service/AuthenticationService"

const Navigation = () => {

  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div>
      <h1>
        Navigation
      </h1>
      <button onClick={handleSignOut}>Sign out</button>
      <Link to='dashboard'>Dashboard</Link>
      <Link to='accounts'>Accounts</Link>
    </div>
  )
}

export default Navigation