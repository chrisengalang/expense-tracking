import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Account } from "../../model/entity/Account"
import { addAccount } from "../../service/AccountService"
import { Navigate, useNavigate } from "react-router-dom"

const AddAccount = () => {

  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [balance, setBalance] = useState(0)
  const [userId] = useState(currentUser.uid)

  const handleAddAccount = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const account : Account = {
      name: name,
      balance: balance,
      userId: userId
    }
    const error = await addAccount(account);
    
    if (!error) {
      navigate('/home/accounts')
    }
  }

  return (
    <div>
      <form>
        <input type="text" id='name' onChange={(e) => setName(e.target.value)} />
        <input type="number" id='balance' onChange={(e) => setBalance(Number(e.target.value))} />
        <input type="submit" onClick={handleAddAccount} />
      </form>
    </div>
  )
}

export default AddAccount