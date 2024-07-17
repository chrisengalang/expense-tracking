import { User } from "../model/User"
import { db } from "../../firebase"
import { collection, setDoc, Timestamp, doc } from "firebase/firestore"

const insertUser = (user: User) : boolean => {
  try {
    setDoc(doc(db, "users", user.id), user)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export {
  insertUser
}