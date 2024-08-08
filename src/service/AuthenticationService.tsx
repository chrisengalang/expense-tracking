import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.js'
import { getUserById, insertUser } from "./DatabaseService.js";
import { User } from "../model/User.js";

const registerUser = async (name: string, email: string, password: string) : Promise<boolean> => {
  let result = false;

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      insertUser({ id: user.uid, name: name, email: user.email })
      result = true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      result = false;
    });

    return result
}

const signInUser = async (email: string, password: string) : Promise<User | null> => {
  let result = null

  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = getUserById(userCredential.user.uid)
    result = user
  })
  .catch((error) => {
    result = null
  });

  return result
}

export {
  registerUser,
  signInUser
}
