import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { LoginDto } from "../model/dto/LoginDto"
import { RegistrationDto } from "../model/dto/RegistrationDto"
import { User } from "../model/entity/User"
import { addUser } from "./UserService"
import { auth } from "../firebase"

const signIn = async (loginDto : LoginDto) : Promise<Error> => {
  try {
    await signInWithEmailAndPassword(auth, loginDto.email, loginDto.password)
  } catch (error) {
    return new Error(error)
  }
  console.log(`Username: ${loginDto.email}, Password: ${loginDto.password}`)
}

const register = async (registrationDto: RegistrationDto) : Promise<Error> => {
  try {
    await createUserWithEmailAndPassword(auth, registrationDto.email, registrationDto.password)
    await updateProfile(auth.currentUser, {displayName: registrationDto.name})

    const entity : User = {
      id: auth.currentUser.uid,
      email: registrationDto.email,
      name: registrationDto.name
    }

    await addUser(entity)
  } catch (error) {
    return new Error(error)
  }
}

const signOut = async () => {
  auth.signOut()
}

export {
  signIn,
  signOut,
  register
}