import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext)

  return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
}

export default PrivateRoutes