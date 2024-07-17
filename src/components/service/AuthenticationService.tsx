import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase.js'
import { insertUser } from "./DatabaseService.js";

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

export {
  registerUser
}
