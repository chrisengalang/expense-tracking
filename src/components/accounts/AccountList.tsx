import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { getAccounts } from "../../service/AccountService"
import AccountComponent from "./AccountComponent"

const AccountList = () => {

  const {currentUser} = useContext(AuthContext)
  const [accounts, setAccounts] = useState([])
  const [userId] = useState(currentUser.uid)

  useEffect(() => {
    getAccounts(userId).then((data) => {
      if (data instanceof Error) {
      } else {
        setAccounts(data)
      }
    })
  }, [])

  return (
    <div>
      <h1>Account List</h1>
      {
        accounts && 
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {
              accounts.map((account) => (
                <AccountComponent key={account.id} account={account} />
              ))
            }
          </tbody>
        </table>
      }
    </div>
  )
}

export default AccountList