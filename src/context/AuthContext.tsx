import { onAuthStateChanged, User } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase"

type InitialState = {
  currentUser: User | null
  isAuthenticated: Boolean
}

export const AuthContext = createContext<InitialState>({ currentUser: null, isAuthenticated: false})

export const AuthContextProvider = ({children} : {children: React.ReactNode}) => {

  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  const isAuthenticated = !!currentUser

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
        setLoading(false)
      }
    })

    return unsubscribe
  },[])

  return (
    <AuthContext.Provider value={{currentUser, isAuthenticated}}>
      {!loading && children}
    </AuthContext.Provider>
  )
}