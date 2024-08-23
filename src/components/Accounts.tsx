import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const Accounts = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div>
      <h1>
        Accounts for { currentUser.displayName }
      </h1>
    </div>
  )
}

export default Accounts