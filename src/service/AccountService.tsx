import { Account } from "../model/Account"
import { insertAccount, retrieveAccounts } from "../repository/AccountRepository"

const addAccount = async (account: Account) : Promise<Error> => {
  try {
    await insertAccount(account)
  } catch (error) {
    return new Error(error)
  }
}

const getAccounts = async (userId: string) : Promise<Account[] | Error> => {
  try {
    return await retrieveAccounts(userId)
  } catch (error) {
    return new Error(error)
  }
}

export { addAccount, getAccounts }