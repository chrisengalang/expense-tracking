import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { User } from "../model/User"
import { addUser } from "./UserService"
import { auth } from "../firebase"
import { Login } from "../model/Login"
import { Registration } from "../model/Registration"

const signIn = async (login : Login) : Promise<Error> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, login.email, login.password)
    sessionStorage.setItem('user', JSON.stringify(userCredential.user))
  } catch (error) {
    return new Error(error)
  }
}

const register = async (registration: Registration) : Promise<Error> => {
  try {
    await createUserWithEmailAndPassword(auth, registration.email, registration.password)
    await updateProfile(auth.currentUser, {displayName: registration.name})

    const entity : User = {
      id: auth.currentUser.uid,
      email: registration.email,
      name: registration.name
    }

    await addUser(entity)

    signOut()
  } catch (error) {
    return new Error(error)
  }
}

const signOut = async () => {
  sessionStorage.removeItem('user')
  auth.signOut()
}

export {
  signIn,
  signOut,
  register
}