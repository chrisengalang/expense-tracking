import { doc, getDoc, setDoc } from "firebase/firestore"
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

const getUser = async (id: string) : Promise<User | Error> => { 
  try {
    const docSnap = (await getDoc(doc(db, "users", id))).data()
    return new User(docSnap.id, docSnap.email, docSnap.name)
  } catch (error) {
    return new Error(error)
  }
}

export {
  addUser
}