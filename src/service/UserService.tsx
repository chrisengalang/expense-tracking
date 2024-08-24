import { doc, setDoc } from "firebase/firestore"
import { User } from "../model/User"
import { db } from "../firebase"

const addUser = async (user: User) => {
  setDoc(doc(db, "users", user.id), {
    id: user.id,
    email: user.email,
    name: user.name
  }).then(() => {
    console.log("Document successfully written!")
  })
}

const deleteUser = async (id: string) => {

}

const getUser = async (id: string) => {

}

export {
  addUser,
  deleteUser,
  getUser
}