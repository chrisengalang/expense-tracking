import { User } from "firebase/auth"
import { createContext, useEffect, useState } from "react"

const getInitialState = () : User | null => {
  const currentUser = sessionStorage.getItem('user')
  return currentUser ? JSON.parse(currentUser) : null
}

export const AuthContext = createContext({currentUser: getInitialState()})

export const AuthContextProvider = ({children} : {children: React.ReactNode}) => {

  const [currentUser, setCurrentUser] = useState<User | null>(getInitialState)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(currentUser))

    if (!currentUser) {
      setLoading(false)
    }

  },[currentUser])

  return (
    <AuthContext.Provider value={{currentUser}}>
      {!loading && children}
    </AuthContext.Provider>
  )
}