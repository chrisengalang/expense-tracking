import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { Account } from "../model/Account"
import { db } from "../firebase"

const insertAccount = async (account: Account) => {
  await addDoc(collection(db, "accounts"), {
    name: account.name,
    balance: account.balance,
    userId: account.userId
  }).then(() => {
    console.log("Document successfully written!")
  })
}

const retrieveAccounts = async (userId: string) : Promise<Account[]> => {
  let accounts: Account[] = []

  const q = query(collection(db, "accounts"), where("userId", "==", userId));
  const snapshot = await getDocs(q)

  snapshot.forEach((doc) => {
    accounts.push({
      id: doc.id,
      name: doc.data().name,
      balance: doc.data().balance,
      userId: doc.data().userId
    })
  });

  return accounts
}

export {
  insertAccount,
  retrieveAccounts
}