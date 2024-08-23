import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { getAccounts } from "../../service/AccountService"
import { Account } from "../../model/entity/Account"
import { useNavigate } from "react-router-dom"

const AccountListComponent = () => {

  const {currentUser} = useContext(AuthContext)
  const [accounts, setAccounts] = useState([])
  const [userId] = useState(currentUser.uid)
  const navigate = useNavigate()

  useEffect(() => {
    getAccounts(userId).then((data) => {
      if (data instanceof Error) {
      } else {
        setAccounts(data)
      }
    })
  }, [])

  const handleClickAccount = (account: Account) => {
    navigate(`/home/accounts/${account.id}`, {state: {account: account}})
  }

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
                <tr key={account.id} onClick={() => handleClickAccount(account)}>
                  <td>{account.name}</td>
                  <td>{account.balance}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      }
    </div>
  )
}

export default AccountListComponent