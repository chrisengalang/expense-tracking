import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase"
import { User } from "../model/entity/User"

const addUser = async (user: User) => {
  setDoc(doc(db, "users", user.id), {
    id: user.id,
    email: user.email,
    name: user.name
  }).then(() => {
    console.log("Document successfully written!")
  })
}

export {
  addUser
}