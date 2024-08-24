import { onAuthStateChanged, User } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase"

const getInitialState = () => {
  const currentUser = sessionStorage.getItem('user')
  return currentUser ? JSON.parse(currentUser) : null
}

export const AuthContext = createContext({})

export const AuthContextProvider = ({children} : {children: React.ReactNode}) => {

  const [currentUser, setCurrentUser] = useState<User | null>(getInitialState)
  const [loading, setLoading] = useState(false)

  const isAuthenticated = !!currentUser

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(currentUser))

    if (!currentUser) {
      setLoading(false)
    }

  },[currentUser])

  return (
    <AuthContext.Provider value={{currentUser, isAuthenticated}}>
      {!loading && children}
    </AuthContext.Provider>
  )
}