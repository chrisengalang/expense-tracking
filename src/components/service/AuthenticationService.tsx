import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase.js'

const registerUser = async (email: string, password: string) : Promise<boolean> => {
  let result = false;

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
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
