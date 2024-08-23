import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { signOut } from "../service/AuthenticationService"


const Dashboard = () => {

  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
  })

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div>
      <h1>
        Dashboard for { currentUser.displayName }
        <button onClick={handleSignOut}>Sign out</button>
      </h1>
    </div>
  )
}

export default Dashboard