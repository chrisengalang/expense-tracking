import { User } from "../model/User"
import { db } from "../firebase"
import { collection, setDoc, Timestamp, doc, getDoc, DocumentSnapshot, DocumentData } from "firebase/firestore"

const insertUser = (user: User) : boolean => {
  try {
    setDoc(doc(db, "users", user.id), user)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const getUserById = async (id: string) : Promise<DocumentSnapshot<DocumentData>> => {
  return getDoc(doc(db, "users", id))
}

export {
  insertUser,
  getUserById
}