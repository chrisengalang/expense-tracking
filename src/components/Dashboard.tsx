import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const Dashboard = () => {

  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
  })

  return (
    <div>
      Dashboard for { currentUser.displayName }
    </div>
  )
}

export default Dashboard